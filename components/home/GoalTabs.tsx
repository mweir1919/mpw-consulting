"use client";

import { useRef, useState } from "react";

const goals = [
  {
    id: "growth",
    label: "More customers",
    examples: [
      ["Salon", "Fill weekday chairs. Clients who usually book weekends get a note with a link to the open weekday times."],
      ["Wax studio", "Past clients hear from you before their usual visit, with a direct booking link."],
      ["Lash and brow studio", "Your quieter services named the same way on your site and your Google profile, each with a booking link."],
    ],
    measure: "weekday and returning visits you can already see in your calendar.",
  },
  {
    id: "hours",
    label: "Hours back",
    examples: [
      ["Salon", "The same booking answers, written once, so the front desk is not retyping them."],
      ["Studio", "Reschedules start from a direct booking link instead of a chain of texts."],
      ["Multi-chair salon", "New-client details collected before the visit, in the place your team already looks."],
    ],
    measure: "hours a week the desk spends on the same back-and-forth.",
  },
  {
    id: "speed",
    label: "Faster turnaround",
    examples: [
      ["Salon", "Get found for your best service. That service is written out on its own page, with the facts and a booking link."],
      ["Wax studio", "The same service, the same price and the same booking link on your Google profile as on your site."],
      ["Lash and brow studio", "One name for the appointment, so the page, the profile and the booking link agree."],
    ],
    measure: "whether the service, the price and the booking link use the same words in each place.",
  },
  {
    id: "quality",
    label: "Fewer dropped balls",
    examples: [
      ["Salon", "Cut no-shows via direct booking. The link opens the right appointment, and a reminder goes out in your own words."],
      ["Studio", "A cancelled time offered to people already waiting, from the list you keep."],
      ["Multi-chair salon", "Every inquiry gets a next step and a booking link, so it does not sit unanswered."],
    ],
    measure: "no-shows and missed replies, using whatever you already track.",
  },
  {
    id: "unlock",
    label: "Something new",
    examples: [
      ["Salon", "Your services and prices laid out clearly on your site and Google profile, so the facts about you are easy to find."],
      ["Studio", "Booking questions answered after hours, in your own words, from the facts on your pages."],
      ["Lash and brow studio", "One name, one address and one service list across your site, Google and the main listings."],
    ],
    measure: "what is written down now that was missing or did not match.",
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
