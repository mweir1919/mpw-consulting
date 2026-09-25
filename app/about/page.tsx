import type { Metadata } from "next";
import { CloseBlock } from "@/components/CloseBlock";

export const metadata: Metadata = {
  title: "About",
  description:
    "MPW Consulting puts AI in service of the goal you already have. The work happens online, and on-site when it needs to.",
};

const goals = [
  { letter: "G", name: "Growth", line: "You want more of a number you already track." },
  { letter: "C", name: "Capacity", line: "You or the team are out of hours." },
  { letter: "S", name: "Speed", line: "Work or decisions move too slowly for the goal." },
  { letter: "U", name: "Unlock", line: "The business needs to do something it can’t yet." },
  { letter: "Q", name: "Quality", line: "Errors and misses keep getting in the way." },
];

const places = [
  { name: "Online", line: "Calls, shared screens, and the systems the business runs on." },
  { name: "On-site", line: "Based in Toronto, and on-site when the work needs someone in the room." },
];

const uses = [
  {
    num: "01",
    name: "Take work off someone",
    line: "Work a person is already doing, done faster or with fewer hours.",
  },
  {
    num: "02",
    name: "Do work nobody could staff",
    line: "Work that wasn’t happening because there was no one to do it.",
  },
  {
    num: "03",
    name: "Keep running after we leave",
    line: "It lives in the business, and your team knows how it works.",
  },
];

export default function AboutPage() {
  return (
    <>
      <header className="page-head page-field">
        <div className="wrap">
          <h1>
            AI in service of <span className="tone">your north star.</span>
          </h1>
          <p>For owners and leaders who already know where they’re going.</p>
        </div>
      </header>

      <section className="lift">
        <div className="wrap">
          <ul className="goal-cards">
            {goals.map((g) => (
              <li key={g.name} className="goal-card">
                <span className="goal-art" aria-hidden="true">
                  {g.letter}
                </span>
                <span className="goal-body">
                  <strong>{g.name}</strong>
                  <span>{g.line}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="about-block about-who">
            <p className="section-label">Who</p>
            <div className="screen-split">
              <h2>Owners and leaders who can name the goal.</h2>
              <p className="section-copy">
                We don’t sort clients by industry. We sort by the goal. If the only objective is to
                use AI, we are probably the wrong firm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="screen screen-navy page-field">
        <div className="wrap about-block">
          <p className="section-label">Where</p>
          <div className="screen-split">
            <h2>The work happens online.</h2>
            <ul className="place-row">
              {places.map((p) => (
                <li key={p.name}>
                  <strong>{p.name}</strong>
                  <span>{p.line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="screen screen-paper">
        <div className="wrap about-block">
          <p className="section-label">How we use AI</p>
          <div className="screen-split">
            <h2>It has to move the objective.</h2>
            <p className="section-copy">
              Not AI for its own sake. It either takes work off someone or does work nobody could
              staff — and either way, it keeps running after we leave.
            </p>
          </div>
          <ol className="use-cards">
            {uses.map((u) => (
              <li key={u.num} className="use-card">
                <span className="stage-label-num">{u.num}</span>
                <strong>{u.name}</strong>
                <p>{u.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CloseBlock />
    </>
  );
}
