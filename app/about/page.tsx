import type { Metadata } from "next";
import Link from "next/link";
import { BookCall } from "@/components/BookCall";
import { Reveal } from "@/components/home/Reveal";
import { site } from "@/lib/site";
import "../home.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "MPW Consulting works mainly with independent salons and studios in Toronto. The Get Recommended Sprint is $750 + HST, paid in full up front.",
};

const beliefs = [
  {
    tag: "The goal comes first",
    name: "Your goal sets the work",
    line: "We work mainly with independent salons and studios in Toronto, and we start from the thing you want to move. If the only goal is to use AI, we’re probably not the right fit.",
  },
  {
    tag: "Straight answers",
    name: "Honest about what AI can do",
    line: "Sometimes the fix is a better process, not a new tool. If that’s the case, we’ll tell you on the first call.",
  },
  {
    tag: "Built to last",
    name: "Yours once we leave",
    line: "It runs in your accounts, it’s documented, and your team knows how to use it. Nothing stops working when we step back.",
  },
];

const uses = [
  {
    tag: "Faster",
    name: "Drafted from your notes",
    line: "Quotes, replies and follow-ups your team already sends, prepared from the notes you already keep.",
  },
  {
    tag: "Fewer hours",
    name: "Written down for the desk",
    line: "Tasks you or your team already do, with the repetitive steps written so the desk can run them.",
  },
  {
    tag: "Newly possible",
    name: "Work nobody had time for",
    line: "Things that weren’t happening because there was no one free to do them.",
  },
];

const fit = [
  {
    name: "Who it’s for",
    line: "Independent multi-chair salons in Toronto, with wax, lash and brow studios a close second.",
  },
  { name: "Where we work", line: "Online, from Toronto, and on-site when the work needs someone in the room." },
  { name: "How we’re paid", line: "The Get Recommended Sprint is $750 + HST, paid in full up front. Full builds start from $2,500, offered only after a sprint." },
];

export default function AboutPage() {
  return (
    <div className="hm">
      <Reveal />

      <section className="hm-about-hero">
        <div className="wrap">
          <span className="hm-eyebrow">About MPW Consulting</span>
          <h1>We start with your goal, not with AI.</h1>
          <p>
            We’re a small practice that helps independent salons and studios in Toronto get their Google
            profile, service pages and booking link in order, then makes sure the work keeps running after we leave.
          </p>
        </div>
      </section>

      <section className="hm-goals hm-light">
        <div className="wrap">
          <div className="hm-head" data-reveal>
            <h2>What we believe</h2>
            <p>Three things shape every project we take on.</p>
          </div>
          <ul className="hm-examples hm-cards">
            {beliefs.map((b, i) => (
              <li key={b.name} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <h3>{b.tag}</h3>
                <p className="hm-card-lead">{b.name}</p>
                <p>{b.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hm-runs">
        <div className="wrap">
          <div className="hm-head" data-reveal>
            <h2>How AI earns its place</h2>
            <p>We only bring it in for work you already do. These are kinds of work, not a promised result.</p>
          </div>
          <ul className="hm-stages hm-stages-plain">
            {uses.map((u, i) => (
              <li key={u.name} className="hm-stage" data-reveal style={{ "--i": i } as React.CSSProperties}>
                <div className="hm-stage-card">
                  <h3>{u.tag}</h3>
                  <p className="hm-card-lead">{u.name}</p>
                  <p>{u.line}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="hm-fit hm-fit-titled">
            {fit.map((f, i) => (
              <div key={f.name} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <h3>{f.name}</h3>
                <p>{f.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hm-close">
        <div className="wrap" data-reveal>
          <h2>Want to see if the sprint is a fit?</h2>
          <p>Book a 30-minute call. We’ll tell you honestly whether we can help.</p>
          <div className="btn-row">
            <BookCall className="btn btn-gold" />
            <Link className="btn btn-ghost" href="/contact">
              Send a note
            </Link>
          </div>
          {site.email ? <p className="hm-alt">Or write to {site.email}</p> : null}
        </div>
      </section>
    </div>
  );
}
