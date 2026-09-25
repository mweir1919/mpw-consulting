import type { Metadata } from "next";
import { CloseBlock } from "@/components/CloseBlock";
import { StageTabs, type Stage } from "@/components/StageTabs";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How an engagement runs. Name the objective, build a short project around how you already work, and hand it back running.",
};

const stages: Stage[] = [
  {
    id: "diagnose",
    num: "01",
    name: "Diagnose",
    line: "Name the objective and what done looks like.",
    heading: "Name the objective.",
    body: [
      "We start with where you’re trying to go — your north star — and name what this engagement has to move. Growth, capacity, speed, unlock, quality, or a mix of them.",
      "If it isn’t specific enough to build, we say so before anything gets built.",
    ],
    listTitle: "Settled before we build",
    list: ["What it has to move", "What will be built", "What will not", "What done looks like"],
  },
  {
    id: "build",
    num: "02",
    name: "Build",
    line: "A short project, built around how you already work.",
    heading: "A short project, built around how you already work.",
    body: [
      "Where we can, we build inside the tools the business already uses. If a new platform is the better answer, we’ll tell you why before we add one.",
      "The work might speed something up, or give hours back so you can do the real work. You learn it as it stands up.",
    ],
    listTitle: "How the build runs",
    list: ["Short and focused", "Tied to what we named in Diagnose", "You learn it as it stands up"],
  },
  {
    id: "handoff",
    num: "03",
    name: "Handoff",
    line: "It runs in the business. You keep it.",
    heading: "You keep it.",
    body: [
      "If it isn’t in the operation, it isn’t done.",
      "Ongoing work is a separate conversation. The door stays open.",
    ],
    listTitle: "What stays with you",
    list: ["The logins", "The notes", "The workflow itself"],
  },
];

export default function ApproachPage() {
  return (
    <>
      <header className="page-head page-field">
        <div className="wrap">
          <h1>
            <span className="tone">One objective.</span> Three parts to get there.
          </h1>
        </div>
      </header>

      <section className="lift">
        <div className="wrap">
          <StageTabs stages={stages} />
        </div>
      </section>

      <CloseBlock />
    </>
  );
}
