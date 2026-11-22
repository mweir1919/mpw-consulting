"use client";

import { useRef, useState } from "react";

const goals = [
  {
    id: "winback",
    label: "Bring back lapsed clients",
    examples: [
      ["Salon or studio", "Clients who have gone quiet get a note that mentions their last service and a time that usually suits them."],
      ["Clinic", "Patients who stopped partway through a treatment plan hear from you before they forget why they started."],
      ["Home services", "Last year’s customers hear about this season’s work around the time they booked last year."],
    ],
    beyond:
      "Most booking apps send the same “we miss you” message to everyone. This works out who is actually overdue, writes to each person, and stops the moment they book.",
    measure: "lapsed clients who come back, and what they spend.",
  },
  {
    id: "quiet",
    label: "Fill quiet hours",
    examples: [
      ["Studio or gym", "Your slowest hours are offered first to the regulars most likely to take them."],
      ["Clinic", "A cancellation for tomorrow morning goes to the people who can actually come, within the hour."],
      ["Any appointment business", "AI suggests an off-peak price for your quietest slots. You approve it, and everyone sees the same price."],
    ],
    beyond:
      "It reads your own booking history to find which hours sit empty and who has booked them before, so the offer goes to the right people instead of your whole list.",
    measure: "booked hours in your quietest times, before and after.",
  },
  {
    id: "repeat",
    label: "Grow repeat visits",
    examples: [
      ["Salon or clinic", "Each client is asked to rebook at the right interval for their service, not a generic six weeks."],
      ["Any first visit", "New clients get a follow-up that makes the second visit easy to book."],
      ["Service with add-ons", "Clients likely to want an add-on hear about it, and only those clients."],
    ],
    beyond:
      "Every message is timed and written for the person getting it, based on what they bought and how often they come in.",
    measure: "how many first-time clients come back, and how often regulars visit.",
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
            <b>Beyond your booking app:</b> {g.beyond}
          </p>
          <p className="hm-measure">
            <b>How we’d measure it:</b> {g.measure}
          </p>
        </div>
      ))}
    </>
  );
}
