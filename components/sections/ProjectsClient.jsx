"use client";
import React from "react";
import Link from "next/link";
import { Tag } from "../ui/Tag.jsx";
import { Reveal } from "../ui/Reveal.jsx";
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
        <div style={{ display: "flex", gap: 8, marginTop: 48, flexWrap: "wrap" }}>
          {types.map((t) => {
            const on = t === filter;
            return (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className="us-tap"
                aria-pressed={on}
                style={{
                  cursor: "pointer", fontFamily: "var(--font-core)", fontSize: 14, fontWeight: 600, padding: "9px 18px",
                  justifyContent: "center",
                  borderRadius: 9999, transition: "all 200ms var(--ease-standard)",
                  background: on ? "var(--us-deep-teal)" : "transparent",
                  color: on ? "var(--us-white)" : "var(--text-secondary)",
                  border: "1px solid " + (on ? "var(--us-deep-teal)" : "var(--border-subtle)"),
                }}
              >
                {t}
              </button>
            );
          })}
        </div>
      </section>

      <section data-screen-label="Projects grid" style={{ paddingBlock: "32px clamp(56px, 9vw, 96px)" }} className="us-container">
        <div className="us-grid-3">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i, 7) * 120} style={{ height: "100%" }}>
              <Link
                href={`/projects/${p.id}`}
                className="us-bare us-project-card"
                style={{
                  cursor: "pointer", display: "flex", flexDirection: "column", background: "var(--surface-card)",
                  border: "1px solid var(--border-subtle)", borderRadius: 20, overflow: "hidden", boxShadow: "var(--shadow-sm)",
                  transition: "transform 200ms var(--ease-standard)", height: "100%",
                }}
              >
                <div style={{ position: "relative", height: 240 }}>
                  <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: 28, display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Tag>{p.type}</Tag>
                    <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{p.year}</span>
                  </div>
                  <h3 style={{ margin: "16px 0 0", fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2, color: "var(--text-primary)" }}>{p.name}</h3>
                  <p style={{ margin: "10px 0 20px", fontSize: 15, color: "var(--text-secondary)", flex: 1 }}>{p.summary}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 16, paddingTop: 16, borderTop: "1px solid var(--border-subtle)", fontSize: 13, color: "var(--text-secondary)" }}>
                    <span>{p.cats}</span>
                    <span style={{ fontWeight: 600, color: "var(--us-deep-teal)" }}>{p.bus}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <style>{`
          .us-project-card:hover { transform: translateY(-5px); }
        `}</style>
      </section>
    </div>
  );
}
