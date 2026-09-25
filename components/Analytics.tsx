"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { loadAnalytics, readConsent, storeConsent, type Consent } from "@/lib/analytics";

export function Analytics() {
  const [choice, setChoice] = useState<Consent | "ask">("ask");

  useEffect(() => {
    const stored = readConsent();
    if (stored === "granted") {
      loadAnalytics();
      setChoice("granted");
    } else if (stored === "denied") {
      setChoice("denied");
    }
  }, []);

  if (choice !== "ask") return null;

  const choose = (next: Consent) => {
    storeConsent(next);
    if (next === "granted") loadAnalytics();
    setChoice(next);
  };

  return (
    <div className="consent" role="dialog" aria-label="Analytics">
      <div className="wrap consent-bar">
        <p>
          We use Google Analytics to see which pages get used. No advertising.{" "}
          <Link href="/privacy">Privacy</Link>
        </p>
        <div className="btn-row">
          <button className="btn btn-navy" type="button" onClick={() => choose("granted")}>
            Accept
          </button>
          <button className="btn btn-line" type="button" onClick={() => choose("denied")}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export function AnalyticsChoice() {
  const [choice, setChoice] = useState<Consent | null>(null);

  useEffect(() => {
    setChoice(readConsent());
  }, []);

  const choose = (next: Consent) => {
    storeConsent(next);
    window.location.reload();
  };

  return (
    <div className="analytics-choice">
      <p>
        {choice === "granted"
          ? "Analytics is on in this browser."
          : choice === "denied"
            ? "Analytics is off in this browser."
            : "You haven’t chosen yet. Analytics stays off until you accept."}
      </p>
      <div className="btn-row">
        <button
          className="btn btn-navy"
          type="button"
          onClick={() => choose("granted")}
          disabled={choice === "granted"}
        >
          Turn on
        </button>
        <button
          className="btn btn-line"
          type="button"
          onClick={() => choose("denied")}
          disabled={choice === "denied"}
        >
          Turn off
        </button>
      </div>
    </div>
  );
}
