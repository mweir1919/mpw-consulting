import { NextRequest, NextResponse } from "next/server";
import { deliverContact, mailConfigured } from "@/lib/mail";

export const runtime = "nodejs";
export const maxDuration = 30;

type Body = {
  name?: string;
  business?: string;
  email?: string;
  note?: string;
  company_site?: string;
};

const hits = new Map<string, number[]>();

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function clientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

function limited(ip: string) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const recent = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  if (recent.length >= 5) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  if (clean(body.company_site)) {
    return NextResponse.json({ ok: true, message: "Thanks. We’ll reply shortly." });
  }

  const name = clean(body.name);
  const business = clean(body.business);
  const email = clean(body.email);
  const note = clean(body.note);

  if (!name || !business || !email || !note) {
    return NextResponse.json({ ok: false, message: "Please fill in every field." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, message: "That email doesn’t look right." }, { status: 400 });
  }
  if (note.length > 5000) {
    return NextResponse.json({ ok: false, message: "That note is too long." }, { status: 400 });
  }

  if (limited(clientIp(req))) {
    return NextResponse.json(
      { ok: false, message: "Too many notes from here. Try again in a bit." },
      { status: 429 },
    );
  }

  if (!mailConfigured()) {
    return NextResponse.json(
      { ok: false, message: "Could not deliver the note. Email us directly." },
      { status: 503 },
    );
  }

  try {
    await deliverContact({ name, business, email, note });
  } catch (err) {
    console.error("contact deliver failed", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { ok: false, message: "Could not deliver the note. Try again, or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks. We’ll reply shortly.",
  });
}
