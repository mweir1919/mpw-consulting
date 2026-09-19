import type { Metadata } from "next";
import Link from "next/link";
import { BookCall } from "@/components/BookCall";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>A firm that puts AI in the operation.</h1>
          <p>Built for owners who already run something real.</p>
        </div>
      </header>
      <article className="wrap prose">
        <h2>The practice</h2>
        <p className="lede">
          MPW Consulting helps small and mid-size businesses put AI into the operation. We name the
          work, we build the system, we hand it back running.
        </p>
        <p>
          Most owners have tried ChatGPT. Almost none have it answering the phone, filling a chair,
          or covering the hours they aren’t there. Software pitches and workshops don’t change
          Tuesday either. We take implementation as the product: a scoped sprint, a working system,
          a clean handoff.
        </p>

        <h2>Who it’s for</h2>
        <p>
          Owners and operators. Service businesses, shops, practices — anyone running a real
          business without a spare team to throw at it. We don’t pick a vertical in order to sound
          like a specialist. The shape is familiar: the phone, the calendar, getting paid, showing
          up online — and the coverage that used to mean another hire.
        </p>

        <h2>How we think about AI</h2>
        <p>
          AI earns its place in the operation. Sometimes that means taking work off a person who is
          already doing it. Sometimes it means doing work nobody was doing, because it wasn’t
          possible to staff. It is not useful as a slogan, a chatbot bolted onto a homepage, or a
          six-month roadmap. If a system can’t be handed back, we shouldn’t build it.
        </p>
        <p>
          We would rather do less, clearly, than sell a transformation. That is the whole point of
          the firm.
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
