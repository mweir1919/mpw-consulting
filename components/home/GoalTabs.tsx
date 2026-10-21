"use client";

import { useRef, useState } from "react";

const goals = [
  {
    id: "growth",
    label: "More customers",
    examples: [
      ["Salon or studio", "Clients who are overdue for a visit get a personal note with a link to book."],
      ["Landscaping", "Every quote gets a follow-up on day two, five and ten, so none go cold."],
      ["Cleaning company", "Happy clients are asked for a review the day after a clean, while it’s fresh."],
    ],
    measure: "new and returning customers, bookings and quotes won.",
  },
  {
    id: "hours",
    label: "Hours back",
    examples: [
      ["Bookkeeping office", "Client documents are requested, renamed and filed without anyone chasing them."],
      ["Trades", "Invoices are drafted from the job notes, ready for you to check and send."],
      ["Studio", "Reschedules happen by text instead of phone tag."],
    ],
    measure: "hours a week that you, or someone on your team, no longer spend on it.",
  },
  {
    id: "speed",
    label: "Faster turnaround",
    examples: [
      ["Contractor", "Quotes go out the same day, built from a site visit and a few photos."],
      ["Agency or office", "New clients get set up through one form instead of six emails."],
      ["Salon or studio", "A cancelled appointment is offered to the waitlist within the hour."],
    ],
    measure: "the time from request to done.",
  },
  {
    id: "quality",
    label: "Fewer dropped balls",
    examples: [
      ["Trades", "Every job ends with the same checklist, so fewer crews get called back."],
      ["Studio", "Reminders that clients actually reply to, so more of them show up."],
      ["Any front desk", "Every inquiry gets an owner and a next step, so nothing sits in an inbox."],
    ],
    measure: "no-shows, missed follow-ups and rework, using whatever you already track.",
  },
  {
    id: "unlock",
    label: "Something new",
    examples: [
      ["Landscaping", "A spring note to every past client that reads like you wrote each one yourself."],
      ["Studio", "Booking questions answered after hours, in your own words."],
      ["Any local business", "Your services and prices laid out so Google and AI assistants can recommend you."],
    ],
    measure: "what exists now that didn’t before, and what it brings in.",
  },
];

export function GoalTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(e: React.KeyboardEvent, i: number) {
    const d = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const next = (i + d + goals.length) % goals.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <>
      <div className="hm-tabs" role="tablist" aria-label="Goals">
        {goals.map((g, i) => (
          <button
            key={g.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            className="hm-tab"
            role="tab"
            id={`t-${g.id}`}
            aria-controls={`p-${g.id}`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {g.label}
          </button>
        ))}
      </div>
      {goals.map((g, i) => (
        <div key={g.id} className="hm-panel" role="tabpanel" id={`p-${g.id}`} aria-labelledby={`t-${g.id}`} hidden={i !== active}>
          <ul className="hm-examples">
            {g.examples.map(([who, what]) => (
              <li key={what}>
                <span className="hm-who">{who}</span>
                <p>{what}</p>
              </li>
            ))}
          </ul>
          <p className="hm-measure">
            <b>How we’d measure it:</b> {g.measure}
          </p>
        </div>
      ))}
    </>
  );
}
