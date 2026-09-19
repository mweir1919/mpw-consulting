import { NextRequest, NextResponse } from "next/server";

type Body = {
  name?: string;
  business?: string;
  email?: string;
  note?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
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

  const to = process.env.CONTACT_TO_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
  const subject = `MPW inquiry — ${business}`;
  const text = [`Name: ${name}`, `Business: ${business}`, `Email: ${email}`, "", note].join("\n");

  if (process.env.RESEND_API_KEY && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "MPW Consulting <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject,
        text,
      }),
    });
    if (!res.ok) {
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

  if (to) {
    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    return NextResponse.json({
      ok: true,
      mailto,
      message: "Opening your email app with the note filled in.",
    });
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks. The inbox isn’t wired yet — keep a copy of what you wrote and we’ll follow up once it is.",
  });
}
