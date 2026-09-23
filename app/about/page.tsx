import type { Metadata } from "next";
import Link from "next/link";
import { BookCall } from "@/components/BookCall";

export const metadata: Metadata = {
  title: "About",
  description:
    "MPW Consulting puts AI in service of the goal you already have. Based in Toronto. No drop-in office.",
};

export default function AboutPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>AI in service of your north star.</h1>
          <p>For owners and leaders who already know where they’re going.</p>
        </div>
      </header>
      <article className="wrap prose">
        <h2>The practice</h2>
        <p className="lede">
          MPW Consulting helps business owners and leaders learn about and implement AI in their
          business so they move toward <em>their</em> objectives — their north star. AI is the tool,
          not the goal. We use it so work happens faster, with fewer hours, or in a way that wasn’t
          possible before.
        </p>
        <p>
          The objectives they walked in with stay the objectives. The build is whatever path gets
          them closer: sometimes that looks like growth work (emailing existing customers, promoting
          on socials); sometimes that looks like giving the owner hours back (five hours a week out
          of payments or admin) so they can focus on that same goal. One company might need one
          path, another both — the filter is the client’s north star, not a product menu.
        </p>
        <p>
          We take implementation as the product: a scoped build, a working system, a clean handoff.
          Learning sticks with the business. A deck or a workshop alone is not what we sell.
        </p>

        <h2>Who it’s for</h2>
        <p>
          Owners and leaders running something real — with a goal they can name. Growth, capacity,
          speed, unlock, or quality. We don’t pick a vertical in order to sound like a specialist.
          If the objective is “use AI” and nothing more specific, we are probably the wrong firm.
        </p>

        <h2>Where we work</h2>
        <p>
          Based in Toronto. There isn’t a drop-in office. Work is with the business — in their
          tools, on a call, or on-site when the engagement needs it.
        </p>

        <h2>How we think about AI</h2>
        <p>
          AI earns its place when it moves the objective. Sometimes that means taking work off a
          person who is already doing it. Sometimes it means doing work nobody was doing, because it
          wasn’t possible to staff. It is not useful as a slogan, a chatbot bolted onto a homepage,
          or a six-month roadmap with no build. If a system can’t be handed back, we shouldn’t build
          it.
        </p>
        <p>
          We would rather do less, clearly, than sell a transformation. Progress toward{" "}
          <em>your</em> objective is how the work is judged — not by how clever the system looks.
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
