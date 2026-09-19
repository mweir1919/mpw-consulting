import type { Metadata } from "next";
import Link from "next/link";
import { BookCall } from "@/components/BookCall";

export const metadata: Metadata = { title: "Approach" };

export default function ApproachPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>Diagnose. Build. Handoff.</h1>
          <p>A first engagement is a sprint, not a strategy retainer in disguise.</p>
          <ol className="path">
            <li>
              <h3>Diagnose</h3>
              <p>Sit with the business. Name the build.</p>
            </li>
            <li>
              <h3>Build</h3>
              <p>Two to four weeks. Standing up.</p>
            </li>
            <li>
              <h3>Handoff</h3>
              <p>You keep the system.</p>
            </li>
          </ol>
        </div>
      </header>
      <article className="wrap prose">
        <h2>Diagnose</h2>
        <p className="lede">
          We start with how the place actually runs. What’s falling through. What you’ve never had
          the seats to cover. Which tools are already in place and ignored.
        </p>
        <p>
          The output is a named scope: what will be built, what will not, and what “done” looks like
          in the operation. If it isn’t specific enough to build, we say so.
        </p>

        <h2>Build</h2>
        <p className="lede">
          Two to four weeks. Fixed scope. A typical first sprint might be a site people can book
          from, coverage while you’re with a client, reminders so the chair isn’t empty. Sometimes
          it’s work nobody on the team was doing, because there was no one to do it.
        </p>
        <p>
          Those are examples, not a menu. The sprint is whatever the diagnose step named. We
          implement inside the tools the business already lives in wherever we can, rather than
          dropping a new platform on the floor.
        </p>

        <h2>Handoff</h2>
        <p className="lede">
          You keep the system. Logins, documentation, and the workflow itself sit with the
          business. We don’t leave a slide.
        </p>
        <p>
          If something isn’t in the operation, it isn’t done. After the sprint, some clients stay
          for a lighter retainer. That is a separate conversation, not a surprise in week three.
        </p>

        <h2>What we don’t do</h2>
        <p>
          Strategy decks as the deliverable. Tool tours. “AI literacy” workshops that end when the
          Zoom ends. If you want a report on what AI could mean someday, we are the wrong firm.
        </p>

        <div className="btn-row">
          <BookCall className="btn btn-navy" />
          <Link className="btn" href="/contact" style={{ border: "1px solid var(--line)" }}>
            Send a note
          </Link>
        </div>
      </article>
    </>
  );
}
