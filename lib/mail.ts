import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

type ContactNote = {
  name: string;
  business: string;
  email: string;
  focus: string[];
  note: string;
};

function headerSafe(value: string) {
  return value.replace(/[\r\n\u0000]+/g, " ").trim().slice(0, 200);
}

function address(name: string, email: string) {
  const n = headerSafe(name).replace(/"/g, "");
  return n ? `"${n}" <${email}>` : email;
}

function encodeSubject(subject: string) {
  const safe = headerSafe(subject);
  if (/^[\x20-\x7E]*$/.test(safe)) return safe;
  return `=?UTF-8?B?${Buffer.from(safe, "utf8").toString("base64")}?=`;
}

function rfc822(input: {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
}) {
  return [
    `From: ${input.from}`,
    `To: ${input.to}`,
    `Reply-To: ${input.replyTo}`,
    `Subject: ${encodeSubject(input.subject)}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    input.text,
  ].join("\r\n");
}

function rawMessage(rfc: string) {
  return Buffer.from(rfc, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

export function contactCopy(body: ContactNote) {
  const subject = `MPW inquiry — ${headerSafe(body.business)}`;
  const text = [
    `Name: ${body.name}`,
    `Business: ${body.business}`,
    `Email: ${body.email}`,
    `Focus: ${body.focus.length ? body.focus.join(", ") : "—"}`,
    "",
    body.note,
  ].join("\n");
  return { subject, text };
}

async function resendSend(to: string, body: ContactNote) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  const { subject, text } = contactCopy(body);
  const from =
    process.env.CONTACT_FROM_EMAIL || "MPW Consulting <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: body.email,
      subject,
      text,
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}${detail ? `: ${detail.slice(0, 180)}` : ""}`);
  }
  return true;
}

function hasResend() {
  return Boolean(process.env.RESEND_API_KEY);
}

function hasGmail() {
  return Boolean(
    process.env.GMAIL_CLIENT_ID &&
      process.env.GMAIL_CLIENT_SECRET &&
      process.env.GMAIL_REFRESH_TOKEN,
  );
}

let cachedToken: { access: string; exp: number } | null = null;

async function gmailAccessToken() {
  const now = Date.now();
  if (cachedToken && cachedToken.exp - 60_000 > now) return cachedToken.access;

  const clientId = process.env.GMAIL_CLIENT_ID;
  const clientSecret = process.env.GMAIL_CLIENT_SECRET;
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) return null;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Gmail token ${res.status}${detail ? `: ${detail.slice(0, 180)}` : ""}`);
  }
  const json = (await res.json()) as { access_token?: string; expires_in?: number };
  if (!json.access_token) throw new Error("Gmail token missing access_token");
  cachedToken = {
    access: json.access_token,
    exp: now + (json.expires_in ?? 3500) * 1000,
  };
  return cachedToken.access;
}

async function gmailInsert(to: string, body: ContactNote) {
  const token = await gmailAccessToken();
  if (!token) return false;

  const { subject, text } = contactCopy(body);
  const visitor = address(body.name, body.email);
  const raw = rawMessage(
    rfc822({
      from: visitor,
      to: address("MPW Consulting", to),
      replyTo: visitor,
      subject,
      text,
    }),
  );

  const res = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      raw,
      labelIds: ["INBOX", "UNREAD"],
    }),
  });
  if (res.ok) return true;

  const sendRes = await fetch(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        raw: rawMessage(
          rfc822({
            from: address("MPW Consulting", to),
            to: address("MPW Consulting", to),
            replyTo: visitor,
            subject,
            text,
          }),
        ),
      }),
    },
  );
  if (!sendRes.ok) {
    const detail = await sendRes.text().catch(() => "");
    throw new Error(
      `Gmail ${sendRes.status}${detail ? `: ${detail.slice(0, 180)}` : ""}`,
    );
  }
  return true;
}

function gwsBin() {
  const candidates = [
    process.env.CONTACT_GWS_BIN,
    path.resolve(process.cwd(), "../../../scripts/gws-mpw"),
    path.resolve(process.cwd(), "scripts/gws-mpw"),
  ].filter((p): p is string => Boolean(p));
  return candidates.find((p) => existsSync(p)) ?? null;
}

function hasGws() {
  return Boolean(gwsBin());
}

async function gwsInsert(to: string, body: ContactNote) {
  const bin = gwsBin();
  if (!bin) return false;

  const { subject, text } = contactCopy(body);
  const visitor = address(body.name, body.email);
  const raw = rawMessage(
    rfc822({
      from: visitor,
      to: address("MPW Consulting", to),
      replyTo: visitor,
      subject,
      text,
    }),
  );

  const { stdout } = await execFileAsync(
    bin,
    [
      "gmail",
      "users",
      "messages",
      "insert",
      "--params",
      JSON.stringify({ userId: "me" }),
      "--json",
      JSON.stringify({ raw, labelIds: ["INBOX", "UNREAD"] }),
    ],
    { timeout: 25_000 },
  );
  const jsonStart = stdout.indexOf("{");
  if (jsonStart === -1) throw new Error("gws insert returned no JSON");
  const json = JSON.parse(stdout.slice(jsonStart)) as { id?: string; error?: unknown };
  if (!json.id) throw new Error("gws insert did not return a message id");
  return true;
}

export async function deliverContact(body: ContactNote) {
  const to = process.env.CONTACT_TO_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
  if (!to) {
    throw new Error("CONTACT_TO_EMAIL is not set");
  }
  let lastError: unknown;
  if (hasResend()) {
    try {
      if (await resendSend(to, body)) return;
    } catch (err) {
      lastError = err;
    }
  }
  if (hasGmail()) {
    try {
      if (await gmailInsert(to, body)) return;
    } catch (err) {
      lastError = err;
    }
  }
  if (hasGws()) {
    try {
      if (await gwsInsert(to, body)) return;
    } catch (err) {
      lastError = err;
    }
  }
  if (lastError instanceof Error) throw lastError;
  throw new Error("No mail transport configured");
}

export function mailConfigured() {
  return Boolean(
    (process.env.CONTACT_TO_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL) &&
      (hasResend() || hasGmail() || hasGws()),
  );
}
