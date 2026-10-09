import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button.jsx";
import { Tag } from "../ui/Tag.jsx";
import { Card } from "../ui/Card.jsx";
import { Reveal } from "../ui/Reveal.jsx";
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
      <div className="us-grid-3">
        {PROJECTS.slice(0, 3).map((p, i) => (
          <Reveal key={p.id} index={i}>
            {/* These cards had no hover state at all. The shared Card
                gives them the same lift, shadow and image zoom as every
                other card on the site; the shadow sits on the photo
                rather than the whole card, since the text below it is on
                the page background, not on a surface. */}
            <Link href={`/projects/${p.id}`} className="us-bare" style={{ cursor: "pointer", display: "block" }}>
              <Card
                restShadow="none"
                style={{ height: 280, borderRadius: 20, overflow: "hidden", border: "1px solid var(--border-subtle)" }}
              >
                <div className="us-card-media" style={{ position: "absolute", inset: 0 }}>
                  <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </Card>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 20 }}>
                <Tag>{p.type}</Tag>
                <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{p.year}</span>
              </div>
              <h3 style={{ margin: "14px 0 0", fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2, color: "var(--text-primary)" }}>{p.name}</h3>
              <p style={{ margin: "10px 0 0", fontSize: 15, color: "var(--text-secondary)" }}>{p.summary}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
