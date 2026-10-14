import React from "react";
import { Reveal } from "../ui/Reveal.jsx";
import { COPY } from "@/lib/data.js";

const STATS = [
  { value: "2007", label: "Founded In Dubai", caption: "Established on one belief: technology should adapt to the individual." },
  { value: "6", label: "Disciplines", caption: "Control, entertainment, security, communications, lighting and connectivity." },
  { value: "1", label: "Interface To Learn", caption: "And it should take no learning at all. That is the test." },
];

/**
 * The three figures as typography rather than three colour-filled cards:
 * large, light numerals separated by hairlines. The cards competed with
 * the photography above and below them, and stacked into ~750px of
 * coloured blocks on a phone.
 */
export function Stats() {
  return (
    <section data-screen-label="Stats" style={{ paddingBlock: "clamp(56px, 9vw, 96px)" }} className="us-container">
      <div className="us-stats">
        <Reveal>
          <h2 style={{ margin: 0, fontSize: "var(--text-h1)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: "16ch" }}>{COPY.statsTitle}</h2>
          <p style={{ margin: "20px 0 0", fontSize: 16, color: "var(--text-secondary)", maxWidth: "40ch" }}>{COPY.statsLead}</p>
        </Reveal>
        <div className="us-stats-row">
          {STATS.map((s, i) => (
            <Reveal key={s.label} index={i} className="us-stat">
              <div className="us-stat-num">{s.value}</div>
              <div style={{ marginTop: 18, fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em" }}>{s.label}</div>
              <p style={{ margin: "8px 0 0", fontSize: 14, color: "var(--text-secondary)" }}>{s.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
