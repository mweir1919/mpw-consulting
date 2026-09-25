"use client";

import { useRef, useState, type KeyboardEvent } from "react";

export type Stage = {
  id: string;
  num: string;
  name: string;
  line: string;
  heading: string;
  body: string[];
  listTitle: string;
  list: string[];
};

export function StageTabs({ stages }: { stages: Stage[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + stages.length) % stages.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const stage = stages[active];

  return (
    <div className="stages">
      <div className="stage-tabs" role="tablist" aria-label="Engagement stages" onKeyDown={onKey}>
        {stages.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`tab-${s.id}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`panel-${s.id}`}
            tabIndex={i === active ? 0 : -1}
            className="stage-tab"
            onClick={() => setActive(i)}
          >
            <span className="stage-art" aria-hidden="true">
              {s.num}
            </span>
            <span className="stage-body">
              <strong>{s.name}</strong>
              <span>{s.line}</span>
            </span>
            <span className="stage-arrow" aria-hidden="true">
              →
            </span>
          </button>
        ))}
      </div>

      <div
        className="stage-panel"
        role="tabpanel"
        id={`panel-${stage.id}`}
        aria-labelledby={`tab-${stage.id}`}
        key={stage.id}
      >
        <div className="stage-panel-main">
          <p className="stage-label">
            <span className="stage-label-num">{stage.num}</span>
            <span>{stage.name}</span>
          </p>
          <h2>{stage.heading}</h2>
          {stage.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="stage-panel-side">
          <p className="stage-list-title">{stage.listTitle}</p>
          <ul>
            {stage.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
