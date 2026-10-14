import React from "react";
import { Button } from "../ui/Button.jsx";
import { Reveal } from "../ui/Reveal.jsx";
import { ProjectRow } from "./ProjectRow.jsx";
import { COPY, PROJECTS } from "@/lib/data.js";

export function SelectedProjects() {
  return (
    <section data-screen-label="Selected projects" style={{ paddingBlock: "clamp(56px, 9vw, 96px)" }} className="us-container">
      <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 40, marginBottom: 56, flexWrap: "wrap" }}>
        <div style={{ maxWidth: 640 }}>
          <h2 style={{ margin: 0, fontSize: "var(--text-h1)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{COPY.projTitle}</h2>
          <p style={{ margin: "20px 0 0", fontSize: 18, color: "var(--text-secondary)" }}>{COPY.projLead}</p>
        </div>
        <Button variant="outline" size="md" icon="arrow-right" href="/projects">All Projects</Button>
      </div>
      <div className="us-prow-list">
        {PROJECTS.slice(0, 3).map((p, i) => (
          <Reveal key={p.id}>
            <ProjectRow project={p} index={i} reverse={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
