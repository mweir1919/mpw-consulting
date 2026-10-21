import type { Metadata } from "next";
import Link from "next/link";
import { BookCall } from "@/components/BookCall";
import { Reveal } from "@/components/home/Reveal";
import { site } from "@/lib/site";
import "../home.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "MPW Consulting is a small AI practice for owner-run businesses. We start from the goal you already have and build what moves it.",
};

const beliefs = [
  {
    name: "Your goal sets the work",
    line: "We don’t sort clients by industry. We start from the thing you want to move. If the only goal is to use AI, we’re probably not the right fit.",
  },
  {
    name: "Honest about what AI can do",
    line: "Sometimes the fix is a better process, not a new tool. If that’s the case, we’ll tell you on the first call.",
  },
  {
    name: "Yours once we leave",
    line: "It runs in your accounts, it’s documented, and your team knows how to use it. Nothing stops working when we step back.",
  },
];

const uses = [
  {
    tag: "Faster",
    name: "Work moves sooner",
    line: "Quotes, replies and follow-ups go out in hours instead of days, so fewer customers wait or drift away.",
  },
  {
    tag: "Fewer hours",
    name: "Work comes off someone’s plate",
    line: "Tasks you or your team already do, done with much less of your time.",
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
    line: "Owner-run service businesses, usually three to thirty people, where the owner is still close to the work.",
  },
  { name: "Where we work", line: "Online, from Toronto, and on-site when the work needs someone in the room." },
  { name: "How we’re paid", line: "A base fee that covers the build, and a bonus only if your number moves." },
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
            We’re a small practice that helps owner-run businesses put AI to work on the goals they already
            have, then makes sure it keeps working after we leave.
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
                <h3>{b.name}</h3>
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
            <p>We only use it where it moves your goal, and it does that in one of three ways.</p>
          </div>
          <ul className="hm-stages hm-stages-plain">
            {uses.map((u, i) => (
              <li key={u.name} className="hm-stage" data-reveal style={{ "--i": i } as React.CSSProperties}>
                <div className="hm-stage-card">
                  <span className="hm-eyebrow">{u.tag}</span>
                  <h3>{u.name}</h3>
                  <p>{u.line}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="hm-fit">
            {fit.map((f, i) => (
              <div key={f.name} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <h3 className="hm-eyebrow">{f.name}</h3>
                <p>{f.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hm-close">
        <div className="wrap" data-reveal>
          <h2>Have a goal in mind?</h2>
          <p>Book a 30-minute call. Bring the goal, and we’ll tell you honestly whether we can help.</p>
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
