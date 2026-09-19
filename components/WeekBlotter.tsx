import type { CSSProperties } from "react";

export function WeekBlotter() {
  const rows = [
    { day: "Mon", task: "Missed call, job went elsewhere" },
    { day: "Tue", task: "They booked. Didn’t show." },
    { day: "Wed", task: "Found you. Couldn’t book." },
    { day: "Thu", task: "Review sitting unanswered" },
    { day: "Fri", task: "Closed. Phone still ringing." },
  ];

  return (
    <aside className="blotter" aria-label="A week inside a small business">
      <p className="blotter-title">Inside the business</p>
      <ol className="blotter-list">
        {rows.map((row, i) => (
          <li
            className="blotter-row"
            key={row.day}
            style={{ "--i": i } as CSSProperties}
          >
            <span className="blotter-day">{row.day}</span>
            <span className="blotter-task">{row.task}</span>
          </li>
        ))}
      </ol>
      <p className="blotter-foot">That’s the brief.</p>
    </aside>
  );
}
