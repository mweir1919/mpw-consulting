import type { CSSProperties } from "react";

const rows = [
  { label: "Growth", line: "The number isn’t moving" },
  { label: "Capacity", line: "The owner is still the system" },
  { label: "Speed", line: "The decision arrives after it mattered" },
  { label: "Unlock", line: "This couldn’t be staffed before" },
  { label: "Quality", line: "The same miss keeps costing you" },
];

export function WeekBlotter() {
  return (
    <aside className="blotter" aria-label="Toward the objective">
      <p className="blotter-title">Toward the objective</p>
      <ol className="blotter-list">
        {rows.map((row, i) => (
          <li
            className="blotter-row"
            key={row.label}
            style={{ "--i": i } as CSSProperties}
          >
            <span className="blotter-day">{row.label}</span>
            <span className="blotter-task">{row.line}</span>
          </li>
        ))}
      </ol>
      <p className="blotter-foot">We start there.</p>
    </aside>
  );
}
