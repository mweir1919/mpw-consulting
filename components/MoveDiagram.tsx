"use client";

import { useLayoutEffect, useRef } from "react";

const rows = [
  {
    n: "01",
    label: "Growth",
    line: "Revenue, bookings, customers, retention — the number you already care about.",
  },
  {
    n: "02",
    label: "Capacity",
    line: "Hours back to you or the team so the real work gets done.",
  },
  {
    n: "03",
    label: "Speed",
    line: "Cycle time and decisions that are too slow for the goal.",
  },
  {
    n: "04",
    label: "Unlock",
    line: "Something the business couldn’t do before — and now needs.",
  },
  {
    n: "05",
    label: "Quality",
    line: "Fewer errors, misses, and brittle steps that block the objective.",
  },
];

export function MoveDiagram() {
  const systemRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const system = systemRef.current;
    const ring = ringRef.current;
    const svg = svgRef.current;
    if (!system || !ring || !svg) return;

    let animated = false;

    const draw = () => {
      const box = system.getBoundingClientRect();
      if (box.width < 8 || box.height < 8) return;
      const origin = ring.getBoundingClientRect();
      const ox = origin.left + origin.width / 2 - box.left;
      const oy = origin.top + origin.height / 2 - box.top;
      svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);

      const dots = [...system.querySelectorAll<HTMLElement>(".move-dot")];
      svg.replaceChildren();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const animate = !animated && !reduce;
      dots.forEach((dot, i) => {
        const mark = dot.getBoundingClientRect();
        const x = mark.left + mark.width / 2 - box.left;
        const y = mark.top + mark.height / 2 - box.top;
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const c1 = ox + (x - ox) * 0.46;
        const c2 = ox + (x - ox) * 0.74;
        path.setAttribute("d", `M ${ox} ${oy} C ${c1} ${oy}, ${c2} ${y}, ${x} ${y}`);
        svg.appendChild(path);
        if (!animate) return;
        const len = path.getTotalLength();
        path.style.strokeDasharray = String(len);
        path.style.strokeDashoffset = String(len);
        path.style.transition = `stroke-dashoffset 700ms cubic-bezier(0.16, 1, 0.3, 1) ${70 + i * 80}ms, opacity 180ms ease`;
        requestAnimationFrame(() => {
          path.style.strokeDashoffset = "0";
        });
      });
      if (animate) animated = true;
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(system);
    document.fonts?.ready.then(draw);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="move" ref={systemRef}>
      <svg className="move-wires" ref={svgRef} aria-hidden="true" />
      <div className="move-layout">
        <div className="move-ring" ref={ringRef} aria-hidden="true">
          <i />
        </div>
        <ol className="move-rails">
          {rows.map((row) => (
            <li className="move-rail" key={row.n}>
              <span className="move-dot" aria-hidden="true" />
              <span className="move-num">{row.n}</span>
              <strong>{row.label}</strong>
              <span className="move-say">{row.line}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
