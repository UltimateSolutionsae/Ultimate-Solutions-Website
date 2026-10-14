"use client";
import React from "react";
import { Reveal } from "../ui/Reveal.jsx";
import { SegmentedControl } from "../ui/SegmentedControl.jsx";
import { ProjectRow } from "./ProjectRow.jsx";
import { PROJECTS } from "@/lib/data.js";

export function ProjectsClient() {
  const types = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.type)))];
  const [filter, setFilter] = React.useState("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <div>
      <section data-screen-label="Projects header" style={{ paddingBlock: "clamp(44px, 7vw, 72px) 48px" }} className="us-container">
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: 24 }}>Projects</div>
        <h1 style={{ margin: 0, fontSize: "var(--text-display)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.02, maxWidth: "22ch" }}>Nearly Two Decades Of Integrated Homes</h1>
        <p style={{ margin: "24px 0 0", fontSize: 18, color: "var(--text-secondary)", maxWidth: "56ch" }}>
          Developments are named where the client has cleared it; private residences are shown by area only. Full project details are available to consultants on request.
        </p>
        <SegmentedControl
          items={types}
          value={filter}
          onChange={setFilter}
          ariaLabel="Filter projects by type"
          style={{ marginTop: 48 }}
        />
      </section>

      <section data-screen-label="Projects list" style={{ paddingBlock: "40px clamp(56px, 9vw, 96px)" }} className="us-container">
        <div className="us-prow-list">
          {visible.map((p, i) => (
            <Reveal key={p.id}>
              <ProjectRow project={p} index={i} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
