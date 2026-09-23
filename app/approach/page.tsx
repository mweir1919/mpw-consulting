import type { Metadata } from "next";
import Link from "next/link";
import { BookCall } from "@/components/BookCall";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Diagnose, build, handoff. A named objective, a scoped build, you keep the system.",
};

export default function ApproachPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>Diagnose. Build. Handoff.</h1>
          <p>Named objective. Scoped build. You keep the system. Continue if you want more.</p>
          <ol className="path">
            <li>
              <h3>Diagnose</h3>
              <p>Your north star. Name the objective.</p>
            </li>
            <li>
              <h3>Build</h3>
              <p>A short, scoped project. Standing up.</p>
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
          We start with where you’re trying to go. Your north star. The objective for this
          engagement — growth, capacity, speed, unlock, or quality. What you’d trust as a measure of
          progress, if anything clean exists yet.
        </p>
        <p>
          The output is a named scope: what will be built, what will not, and what “done” looks like
          in the operation. If it isn’t specific enough to build, we say so. Fees stay scoped until
          a metric is something both sides can sign — we don’t invent one to look clever.
        </p>

        <h2>Build</h2>
        <p className="lede">
          A short, scoped project. Not an open-ended strategy retainer. We implement inside the tools
          the business already lives in wherever we can, rather than dropping a new platform on the
          floor. You learn as it stands up — learning is part of the path, not a separate workshop.
        </p>
        <p>
          Under one objective, the path might accelerate the work (for example outreach that supports
          a growth goal) or free capacity (hours back from admin so you can pursue that same goal).
          Sometimes both. Those are paths, not a product menu. Estimates live in the statement of
          work — we don’t sell a calendar length as the offer.
        </p>

        <h2>Handoff</h2>
        <p className="lede">
          You keep the system. Logins, documentation, and the workflow itself sit with the business.
          We don’t leave a slide.
        </p>
        <p>
          If something isn’t in the operation, it isn’t done. After the first scoped build, some
          clients stay for ongoing work under the same north star. That is a separate conversation —
          the door stays open — not a surprise inside the first engagement.
        </p>

        <h2>What we don’t do</h2>
        <p>
          Strategy decks as the deliverable. Tool tours. “AI literacy” workshops that end when the
          Zoom ends. Learning in service of a named objective is in scope; a report on what AI could
          mean someday is not. If you want AI for its own sake, with no objective attached, we are
          the wrong firm.
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
