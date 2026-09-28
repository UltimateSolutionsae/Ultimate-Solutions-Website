import React from "react";
import Link from "next/link";
import { CATS } from "@/lib/data.js";

// Longer descriptive phrasing for this row only — CATS.label stays short
// everywhere else (Products tabs, footer nav, contact form chips, FAQ heading).
const STRIP_LABELS = {
  control: "Control Solutions",
  lighting: "Lighting & Energy Management",
  entertainment: "Entertainment",
  connectivity: "Networking",
  security: "Security",
  communications: "Communication",
};

export function AccreditationStrip() {
  return (
    <section data-screen-label="Accreditation strip" style={{ background: "var(--surface-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="us-container" style={{ paddingBlock: "40px", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>
          What We Integrate
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 36, flexWrap: "wrap" }}>
          {CATS.map((c) => (
            <div key={c.id} style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.01em", color: "var(--text-secondary)" }}>
              {STRIP_LABELS[c.id] || c.label}
            </div>
          ))}
        </div>
        <Link href="/certifications" className="us-bare us-tap" style={{ background: "transparent", border: "none", cursor: "pointer", fontFamily: "var(--font-core)", fontSize: 14, fontWeight: 600, color: "var(--us-deep-teal)", whiteSpace: "nowrap" }}>
          Certifications and partners →
        </Link>
      </div>
    </section>
  );
}
