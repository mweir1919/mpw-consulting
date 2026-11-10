import type { Metadata } from "next";
import Link from "next/link";
import { BookCall } from "@/components/BookCall";
import { Reveal } from "@/components/home/Reveal";
import { GoalTabs } from "@/components/home/GoalTabs";
import { site } from "@/lib/site";
import "./home.css";

export const metadata: Metadata = {
  title: { absolute: "MPW Consulting" },
  description:
    "The Get Recommended Sprint from MPW Consulting. A $750 + HST first job for independent salons and studios in Toronto, typically about a week once we have access.",
};

const stages = [
  {
    name: "Diagnose",
    line: "One conversation about your salon, your services and where your online facts are thin or don’t match. If the sprint isn’t the right work, we’ll say so.",
    tag: "One conversation",
  },
  {
    name: "Build",
    line: "The Get Recommended Sprint, done in the tools you already use. You see the work as we do it.",
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
    line: "Independent multi-chair salons in Toronto, with wax, lash and brow studios a close second.",
  },
  { name: "Where we work", line: "Online, from Toronto, and on-site when the work needs someone in the room." },
  {
    name: "What we don’t sell",
    line: "Rankings, AI mentions, or a set number of bookings. We also don’t sell decks, workshops, or retainers.",
  },
];

const sprintIncludes = [
  {
    name: "An audit",
    line: "How Google and AI tools answer for your services and area today.",
  },
  {
    name: "A complete Google Business Profile",
    line: "Categories, services, hours, photos, description and booking link.",
  },
  {
    name: "Two service pages",
    line: "For the two services you most want to sell, each with a booking link.",
  },
  {
    name: "A direct booking link",
    line: "One that opens the right appointment.",
  },
  {
    name: "The same facts everywhere",
    line: "One name, address, hours and service list across your site, Google and the main listings.",
  },
  {
    name: "A handoff",
    line: "A short walkthrough and a one-page checklist your team can follow.",
  },
];

const faqs = [
  {
    q: "Will Google or ChatGPT start recommending my salon?",
    a: "No. Nobody controls those answers, and they change. We fix the sources they draw from: your Google profile, your pages and your listings. We do not promise rankings, mentions or a set number of bookings.",
  },
  {
    q: "How long does it take?",
    a: "Typically about a week once we have access to your Google profile, website and booking link. We do not set a fixed end date, because access and your replies affect the timing.",
  },
  {
    q: "Do I have to buy more after the sprint?",
    a: "No. The sprint is a one-time job. If you want more later, full builds start from $2,500, and we only offer that after the sprint is done.",
  },
];

export default function HomePage() {
  return (
    <div className="hm">
      <Reveal />

      <section className="hm-hero">
        <div className="hm-hero-stage">
          <div className="wrap">
            <h1>When someone nearby asks Google or ChatGPT for a salon, they should be able to find the facts about yours.</h1>
            <p className="hm-hero-sub">We help independent salons and studios in Toronto get their Google profile, service pages and booking link in order.</p>
            <p className="hm-hero-note">We do not promise that Google or ChatGPT will name you. We make sure the facts about you match everywhere.</p>
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
            <p>Most salon and studio owners we talk to want one of these. Pick one to see what the work could look like.</p>
          </div>
          <GoalTabs />
          <p className="hm-goals-foot">
            These are examples, not packages. They are not a promise of bookings, rankings or a set result.
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

      <section className="hm-deal hm-light">
        <div className="wrap">
          <div className="hm-head" data-reveal>
            <h2>The Get Recommended Sprint</h2>
            <p>A fixed first job for independent salons and studios in Toronto. One flat fee, no retainer, and no monthly plan.</p>
          </div>
          <ol className="hm-terms">
            {sprintIncludes.map((item, i) => (
              <li key={item.name}>
                <span className="hm-term-num">{i + 1}</span>
                <b>{item.name}</b>
                <span>{item.line}</span>
              </li>
            ))}
          </ol>
          <p className="hm-sprint-price" data-reveal>
            <b>$750 + HST</b>, paid in full up front. Typically about a week once we have access.
          </p>
          <ul className="hm-examples hm-cards">
            {faqs.map((item, i) => (
              <li key={item.q} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hm-close">
        <div className="wrap" data-reveal>
          <h2>What happens next</h2>
          <p>
            Book a 30-minute call and we’ll tell you if the sprint is a fit. If you want to go further after the
            sprint, full builds start from $2,500. We only offer a full build once a sprint is done.
          </p>
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
