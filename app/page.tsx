import type { Metadata } from "next";
import Link from "next/link";
import { BookCall } from "@/components/BookCall";
import { Pin } from "@/components/home/Pin";
import { Reveal } from "@/components/home/Reveal";
import { GoalTabs } from "@/components/home/GoalTabs";
import { HeroGoals } from "@/components/home/HeroGoals";
import { site } from "@/lib/site";
import "./home.css";

export const metadata: Metadata = {
  title: { absolute: "MPW Consulting" },
  description:
    "MPW Consulting helps owner-run businesses put AI to work on the goals they already have: more customers, hours back, faster turnaround and fewer dropped balls.",
};

// The hero rotates through these on a timer, in this order.
const heroGoals = [
  "more repeat customers.",
  "my evenings back.",
  "quotes out the same day.",
  "fewer no-shows.",
  "to stop chasing invoices.",
];

const stages = [
  {
    name: "Diagnose",
    line: "One conversation about your goal, what you already track and where things are stuck. If AI isn’t the right tool for it, we’ll say so.",
    tag: "One conversation",
  },
  {
    name: "Build",
    line: "A short, fixed-scope project inside the tools you already use. You see how it works as we build it.",
    tag: "Fixed scope",
  },
  {
    name: "Hand off",
    line: "It runs in your accounts, it’s documented, and your team knows how to use it. We’re not done until they do.",
    tag: "Yours to keep",
  },
];

const fit = [
  {
    name: "Who it’s for",
    line: "Owner-run service businesses, usually three to thirty people, where the owner is still close to the work.",
  },
  { name: "Where we work", line: "Online, from Toronto, and on-site when the work needs someone in the room." },
  { name: "What we don’t sell", line: "Decks, workshops, or tools that don’t move the goal you came to us with." },
];

const terms = [
  {
    name: "A base fee that covers our costs",
    line: "It pays for the build itself, not our margin, so getting started stays affordable.",
  },
  {
    name: "A bonus only if your number moves",
    line: "Before we start, we agree on one number, where it sits today, and when we’ll measure it again.",
  },
  {
    name: "Most of the risk is ours",
    line: "If the number goes up, we share in the gain. If it doesn’t, you’ve paid the base fee and nothing more. No retainer.",
  },
];

export default function HomePage() {
  return (
    <div className="hm">
      <Reveal />

      <section className="hm-hero">
        <div className="hm-hero-stage">
          <div className="wrap">
            <h1>
              This year I want
              <HeroGoals goals={heroGoals} />
            </h1>
            <p className="hm-hero-sub">Name yours. We’ll build what moves it.</p>
            <p className="hm-hero-note">We help owner-run businesses put AI to work on the goals they already have.</p>
            <div className="btn-row">
              <BookCall className="btn btn-gold" />
              <Link className="btn btn-ghost" href="/contact">
                Send a note
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="hm-goals hm-light">
        <div className="wrap">
          <div className="hm-head" data-reveal>
            <h2>Start with the goal, not the tool.</h2>
            <p>Most owners we talk to want one of these five things. Pick one to see what the work could look like.</p>
          </div>
          <GoalTabs />
          <p className="hm-goals-foot">
            These are examples, not packages. What we build for you starts from your goal and your numbers.
          </p>
        </div>
      </section>

      <section className="hm-runs">
        <div className="wrap">
          <div className="hm-head" data-reveal>
            <h2>How the work runs</h2>
            <p>Three steps from first call to something running in your business.</p>
          </div>
          <ol className="hm-stages">
            {stages.map((s, i) => (
              <li key={s.name} className="hm-stage" data-reveal style={{ "--i": i } as React.CSSProperties}>
                <span className="hm-stage-num">{i + 1}</span>
                <div className="hm-stage-card">
                  <span className="hm-eyebrow">{s.tag}</span>
                  <h3>{s.name}</h3>
                  <p>{s.line}</p>
                </div>
              </li>
            ))}
          </ol>
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

      <Pin span={1.7} hold className="hm-deal hm-light">
        <div className="wrap">
          <div className="hm-head">
            <h2>Low cost to start. We earn more only when you do.</h2>
          </div>
          <div className="hm-deal-grid">
            <ol className="hm-terms">
              {terms.map((t, i) => (
                <li key={t.name}>
                  <span className="hm-term-num">{i + 1}</span>
                  <b>{t.name}</b>
                  <span>{t.line}</span>
                </li>
              ))}
            </ol>
            <figure>
              <svg
                className="hm-chart"
                viewBox="0 0 720 340"
                role="img"
                aria-label="Illustration: during the build, your number sits at today’s level and you pay only the base fee. After launch the number rises above today’s level, and the bonus comes only from that gain, measured at the point we agree on."
              >
                <rect className="build" x="40" y="210" width="190" height="80" />
                <text x="135" y="244" textAnchor="middle" className="strong">Build</text>
                <text x="135" y="264" textAnchor="middle">base fee only</text>
                <line className="axis" x1="40" y1="290" x2="700" y2="290" />
                <path className="gain" d="M230 210 C 330 204, 450 170, 690 92 L 690 210 Z" />
                <line className="base" x1="40" y1="210" x2="700" y2="210" />
                <text x="246" y="236">Where your number sits today</text>
                <path className="line" pathLength={1} d="M40 212 C 100 206, 160 216, 230 210 C 330 204, 450 170, 690 92" />
                <text className="lbl-gain strong" x="676" y="176" textAnchor="end">Your gain</text>
                <text className="lbl-gain" x="676" y="196" textAnchor="end">the bonus comes only from here</text>
                <line className="axis" x1="230" y1="290" x2="230" y2="296" />
                <text x="40" y="318">Start</text>
                <text x="230" y="318" textAnchor="middle">Launch</text>
                <text x="690" y="318" textAnchor="end">Measured</text>
              </svg>
              <figcaption>An illustration. Your real number and starting point come from your business.</figcaption>
            </figure>
          </div>
        </div>
      </Pin>

      <section className="hm-close">
        <div className="wrap" data-reveal>
          <h2>What’s the one thing you want to move this year?</h2>
          <p>Book a 30-minute call. Bring your goal, and we’ll tell you honestly whether we can help.</p>
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
