"use client";

import { useEffect, useState } from "react";

// Rotates the hero goal on a timer and loops. Pauses while hovered,
// and stays on the first goal for people who prefer reduced motion.
const HOLD_MS = 2600;

export function HeroGoals({ goals }: { goals: string[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % goals.length), HOLD_MS);
    return () => window.clearInterval(id);
  }, [paused, goals.length]);

  return (
    <span className="hm-goal-slot" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {goals.map((goal, i) => (
        <span key={goal} className={i === active ? "is-on" : undefined} aria-hidden={i > 0 || undefined}>
          {goal}
        </span>
      ))}
    </span>
  );
}
