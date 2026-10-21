"use client";

import { useEffect, useState } from "react";

// Rotates the hero goal on a timer and loops. With reduced motion on,
// goals still change but swap without the fade (see home.css).
const HOLD_MS = 2600;

export function HeroGoals({ goals }: { goals: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % goals.length), HOLD_MS);
    return () => window.clearInterval(id);
  }, [goals.length]);

  return (
    <span className="hm-goal-slot">
      {goals.map((goal, i) => (
        <span key={goal} className={i === active ? "is-on" : undefined} aria-hidden={i > 0 || undefined}>
          {goal}
        </span>
      ))}
    </span>
  );
}
