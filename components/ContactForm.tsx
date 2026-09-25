"use client";

import { FormEvent, useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "ok"; note: string }
  | { kind: "error"; note: string };

const FOCUS = ["Growth", "Capacity", "Speed", "Unlock", "Quality"];

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const data = { ...Object.fromEntries(fields.entries()), focus: fields.getAll("focus") };
    setStatus({ kind: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; message?: string };
      if (!res.ok || !json.ok) {
        setStatus({ kind: "error", note: json.message || "Something went wrong. Try again." });
        return;
      }
      form.reset();
      setStatus({
        kind: "ok",
        note: json.message || "Thanks. We’ll reply shortly.",
      });
    } catch {
      setStatus({ kind: "error", note: "Could not send. Check your connection and try again." });
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" autoComplete="name" required />

      <label htmlFor="business">Business</label>
      <input id="business" name="business" autoComplete="organization" required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" autoComplete="email" required />

      <div className="hp" aria-hidden="true" hidden>
        <label htmlFor="company_site">Website</label>
        <input id="company_site" name="company_site" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset className="focus-set">
        <legend>What matters most right now</legend>
        <p className="focus-hint">Pick any that apply.</p>
        <div className="focus-chips">
          {FOCUS.map((f) => (
            <label key={f} className="chip">
              <input type="checkbox" name="focus" value={f} />
              <span>{f}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label htmlFor="note">Where the business is headed, and what’s in the way</label>
      <textarea id="note" name="note" required />

      <button className="btn btn-navy" type="submit" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending…" : "Send a note"}
      </button>

      {status.kind === "ok" || status.kind === "error" ? (
        <p className={`form-status ${status.kind === "ok" ? "ok" : "error"}`} role="status">
          {status.note}
        </p>
      ) : null}
    </form>
  );
}
