import Link from "next/link";
import { WeekBlotter } from "@/components/WeekBlotter";
import { BookCall } from "@/components/BookCall";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>AI that runs in the business. Not a tool you tried once.</h1>
            <p className="hero-lead">
              Some of it is work you’re already doing. Some of it you couldn’t staff — or couldn’t
              do at all. We build it, then hand it back.
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
          <h2>What a first sprint can stand up</h2>
          <ul className="ledger">
            <li>
              <strong>Missed calls</strong>
              <span>Someone answers. The job gets a time on the books.</span>
            </li>
            <li>
              <strong>Empty chairs</strong>
              <span>A reminder goes out. The hour isn’t a write-off.</span>
            </li>
            <li>
              <strong>After hours</strong>
              <span>Coverage you couldn’t hire for — the phone still works when you don’t.</span>
            </li>
            <li>
              <strong>The site</strong>
              <span>People can book without waiting for you to call them back.</span>
            </li>
          </ul>
          <p className="ledger-note">
            Owners and operators of small and mid-size businesses. Not a vertical. A first sprint is
            named and built in weeks — whatever would actually change how the place runs.
          </p>
        </div>
      </section>

      <section className="finale">
        <div className="wrap">
          <h2>How an engagement runs</h2>
          <ol className="path">
            <li>
              <h3>Diagnose</h3>
              <p>Sit with how the place actually runs. Name what to build — and what to leave.</p>
            </li>
            <li>
              <h3>Build</h3>
              <p>A short sprint. The system standing up inside the tools the business already lives in.</p>
            </li>
            <li>
              <h3>Handoff</h3>
              <p>You keep it. If it isn’t in the operation, it isn’t done.</p>
            </li>
          </ol>
          <p className="path-link">
            <Link href="/approach">The full approach</Link>
          </p>
          <div className="close-split">
            <blockquote className="pull">
              We implement. We don’t sell a tool tour or a deck. The conversation is the proof.
            </blockquote>
            <div>
              <h2>Tell us what should be standing up.</h2>
              <p>A short call, or a note. Same two doors.</p>
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
