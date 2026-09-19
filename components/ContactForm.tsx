"use client";

import { FormEvent, useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "ok"; note: string }
  | { kind: "error"; note: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
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
    <form className="panel" onSubmit={onSubmit}>
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

      <label htmlFor="note">What’s eating the week</label>
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
