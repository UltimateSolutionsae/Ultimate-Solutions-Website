import React from "react";
import { Badge } from "../ui/Badge.jsx";
import { Reveal } from "../ui/Reveal.jsx";
import { COPY, PROCESS } from "@/lib/data.js";

export function Process() {
  return (
    <section data-screen-label="Process" style={{ paddingBlock: "clamp(56px, 9vw, 96px)" }} className="us-container">
      <Reveal style={{ maxWidth: 760, marginBottom: 64 }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: 20 }}>Process</div>
        <h2 style={{ margin: 0, fontSize: "var(--text-h1)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{COPY.processTitle}</h2>
        <p style={{ margin: "24px 0 0", fontSize: 18, color: "var(--text-secondary)" }}>{COPY.processLead}</p>
      </Reveal>
      <div style={{ position: "relative" }}>
        <div aria-hidden="true" className="us-process-rule" style={{ position: "absolute", top: 20, left: 0, right: 0, height: 1, background: "var(--border-strong)" }} />
        <div className="us-process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: 24, position: "relative", minWidth: 0 }}>
          {PROCESS.map((p, i) => (
            <Reveal as="div" key={p.num} index={i} style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
              <div style={{ width: 40, height: 40, borderRadius: 9999, background: "var(--us-deep-teal)", color: "var(--us-white)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, flex: "none", position: "relative", zIndex: 1 }}>
                {p.num}
              </div>
              <h3 style={{ margin: "24px 0 0", fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{p.title}</h3>
              <p style={{ margin: "12px 0 0", fontSize: 14, color: "var(--text-secondary)", flex: 1 }}>{p.desc}</p>
              <div style={{ marginTop: 20 }}>
                <Badge tone="mint">{p.deliverable}</Badge>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 980px) {
          .us-process-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
          .us-process-rule { display: none; }
        }
        @media (max-width: 640px) {
          .us-process-grid { grid-template-columns: minmax(0,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
