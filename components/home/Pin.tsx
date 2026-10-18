"use client";

import { useEffect, useRef } from "react";

// A tall section whose stage sticks while you scroll through it.
// Sets --p (0 to 1) on the section, and fades children marked data-cue:
// "from to" fades in at `from` and out at `to`; "from" alone fades in and holds.
const FADE = 0.03;

export function Pin({
  span,
  className,
  children,
}: {
  span: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cues = Array.from(el.querySelectorAll<HTMLElement>("[data-cue]")).map((node) => {
      const [from, to] = (node.dataset.cue || "").split(/\s+/).map(Number);
      return { node, from: from || 0, to: Number.isFinite(to) ? to : null };
    });

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const travel = Math.max(rect.height - window.innerHeight, 1);
      const p = Math.min(1, Math.max(0, -rect.top / travel));
      el.style.setProperty("--p", p.toFixed(4));
      for (const c of cues) {
        const fadeIn = c.from <= 0 ? 1 : (p - c.from) / FADE;
        const fadeOut = c.to === null ? 1 : (c.to - p) / FADE;
        c.node.style.opacity = Math.min(1, Math.max(0, Math.min(fadeIn, fadeOut))).toFixed(3);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} className={`hm-pin ${className ?? ""}`} style={{ height: `${(span + 1) * 100}svh` }}>
      <div className="hm-pin-stage">{children}</div>
    </section>
  );
}
