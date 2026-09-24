import type { Metadata } from "next";
import Link from "next/link";
import { WeekBlotter } from "@/components/WeekBlotter";
import { BookCall } from "@/components/BookCall";

export const metadata: Metadata = {
  title: { absolute: "MPW Consulting" },
  description:
    "MPW Consulting helps owners and leaders learn about and implement AI toward their objectives — faster, with fewer hours, or in ways that weren’t possible before.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>Your objectives stay the same. AI is how you get there.</h1>
            <p className="hero-lead">
              We help owners and leaders learn about and implement AI so work happens faster, with
              fewer hours, or in a way that wasn’t possible before — in service of the goal you
              already have.
            </p>
            <div className="btn-row">
              <BookCall className="btn btn-gold" />
              <Link className="btn btn-ghost" href="/contact">
                Send a note
              </Link>
            </div>
          </div>
          <WeekBlotter />
        </div>
      </section>

      <section className="band band-lift">
        <div className="wrap">
          <h2>What we help you move</h2>
          <ul className="ledger ledger-five">
            <li>
              <strong>Growth</strong>
              <span>Revenue, bookings, customers, retention — the number you already care about.</span>
            </li>
            <li>
              <strong>Capacity</strong>
              <span>Hours back to you or the team so the real work gets done.</span>
            </li>
            <li>
              <strong>Speed</strong>
              <span>Cycle time and decisions that are too slow for the goal.</span>
            </li>
            <li>
              <strong>Unlock</strong>
              <span>Something the business couldn’t do before — and now needs.</span>
            </li>
            <li>
              <strong>Quality</strong>
              <span>Fewer errors, misses, and brittle steps that block the objective.</span>
            </li>
          </ul>
          <p className="ledger-note">
            Paths vary — accelerate the work, free capacity, or unlock something new. What we build
            is whatever serves the objective we name together. Not a menu of bots.
          </p>
        </div>
      </section>

      <section className="finale">
        <div className="wrap">
          <h2>How the work runs</h2>
          <ol className="path">
            <li>
              <h3>Diagnose</h3>
              <p>
                Your north star. The objective for this engagement. What you’d trust as a measure —
                or we keep fees scoped until that’s clear.
              </p>
            </li>
            <li>
              <h3>Build</h3>
              <p>
                A short, scoped project inside the tools you already use. Efficient scope. You learn
                as it stands up.
              </p>
            </li>
            <li>
              <h3>Handoff</h3>
              <p>
                You keep it. If it isn’t in the operation, it isn’t done. Ongoing work is a separate
                conversation — the door stays open.
              </p>
            </li>
          </ol>
          <p className="path-link">
            <Link href="/approach">How an engagement runs</Link>
          </p>
          <div className="close-split">
            <blockquote className="pull">
              We implement. We don’t sell a tool tour or a deck. Learning is part of the path; a
              workshop alone is not the product.
            </blockquote>
            <div>
              <h2>Tell us what you’re trying to move.</h2>
              <p>A short diagnostic, or a note. Same two doors.</p>
              <div className="btn-row">
                <BookCall className="btn btn-gold" />
                <Link className="btn btn-ghost" href="/contact">
                  Send a note
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
