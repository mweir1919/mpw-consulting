import type { Metadata } from "next";
import Link from "next/link";
import { WeekBlotter } from "@/components/WeekBlotter";
import { BookCall } from "@/components/BookCall";
import { MoveDiagram } from "@/components/MoveDiagram";

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
          <MoveDiagram />
          <p className="move-note">
            Paths vary — accelerate the work, free capacity, or unlock something new. We build
            whatever serves the objective we commit to together.
          </p>
        </div>
      </section>

      <section className="finale">
        <div className="wrap">
          <h2>How the work runs</h2>
          <ol className="path">
            <li>
              <h3>Diagnose</h3>
              <p>Your north star. The objective for this engagement.</p>
            </li>
            <li>
              <h3>Build</h3>
              <p>
                A short project inside the tools you already use. You learn as it stands up.
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
              We name the objective with you, build it into the work, and hand it back running.
              Learning is part of that path.
            </blockquote>
            <div>
              <h2>Tell us what you’re trying to move.</h2>
              <p>Book a diagnostic call, or send us a note.</p>
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
