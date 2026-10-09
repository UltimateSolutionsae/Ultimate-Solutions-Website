import React from "react";
import { StatCard } from "../ui/StatCard.jsx";
import { Reveal } from "../ui/Reveal.jsx";
import { COPY } from "@/lib/data.js";

export function Stats() {
  return (
    <section data-screen-label="Stats" style={{ paddingBlock: "clamp(56px, 9vw, 96px)" }} className="us-container">
      <Reveal className="us-split-1-1" style={{ alignItems: "end", marginBottom: 64 }}>
        <h2 style={{ margin: 0, fontSize: "var(--text-h1)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: "20ch" }}>{COPY.statsTitle}</h2>
        <p style={{ margin: 0, fontSize: 18, color: "var(--text-secondary)", maxWidth: "48ch" }}>{COPY.statsLead}</p>
      </Reveal>
      <div className="us-grid-3">
        <Reveal index={0} style={{ height: "100%" }}>
          <StatCard value="2007" label="Founded In Dubai" caption="Established on one belief: technology should adapt to the individual." icon="scenes" index={1} total={3} size="sm" tone="gradientMoody" style={{ height: "100%" }} />
        </Reveal>
        <Reveal index={1} style={{ height: "100%" }}>
          <StatCard value="6" label="Disciplines" caption="Control, entertainment, security, communications, lighting and connectivity." icon="network" index={2} total={3} size="sm" tone="dark" style={{ height: "100%" }} />
        </Reveal>
        <Reveal index={2} style={{ height: "100%" }}>
          <StatCard value="1" label="Interface To Learn" caption="And it should take no learning at all. That is the test." icon="shield-check" index={3} total={3} size="sm" tone="mint" style={{ height: "100%" }} />
        </Reveal>
      </div>
    </section>
  );
}
