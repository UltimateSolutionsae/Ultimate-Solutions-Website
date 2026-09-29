import React from "react";
import { Button } from "../ui/Button.jsx";
import { Reveal } from "../ui/Reveal.jsx";
import { COPY } from "@/lib/data.js";

const SIDEBAR = [
  { k: "Disciplines", v: "Six, designed as one" },
  { k: "Involvement", v: "From concept design" },
  { k: "Coordination", v: "Architect, ID, MEP" },
  { k: "Control layer", v: "KNX and IP" },
  { k: "Interfaces", v: "Keypad, panel, app" },
  { k: "Handover", v: "Walkthrough and documentation" },
  { k: "Aftercare", v: "Ongoing, not optional" },
];

export function DepthBand() {
  return (
    <section data-screen-label="Depth band" style={{ background: "var(--surface-subtle)", paddingBlock: "clamp(56px, 9vw, 96px)" }}>
      <div className="us-container us-split-16-1">
        <Reveal style={{ minWidth: 0 }}>
          <h2 style={{ margin: 0, fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: "22ch" }}>{COPY.depthTitle}</h2>
          <p style={{ margin: "24px 0 0", fontSize: 18, color: "var(--text-secondary)" }}>{COPY.depthLead}</p>

          <h3 style={{ margin: "48px 0 0", fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>Integration, not installation</h3>
          <p style={{ margin: "12px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>
            Much of the industry still installs technology rather than integrating it: systems chosen for their capabilities, without enough thought for the architecture, the interiors, or the individual needs of the person living there. Equally often, the interaction between the homeowner and the technology is overlooked entirely. Complex systems can be powerful and still be unnecessarily complicated to use. We start from the opposite end.
          </p>

          <h3 style={{ margin: "40px 0 0", fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>Sophisticated technology, unsophisticated to use</h3>
          <p style={{ margin: "12px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>
            Ease of use is fundamental to how we design. The interface should feel natural and effortless, letting you control and enjoy your environment without having to think about the technology behind it. If a room cannot be operated by a guest who has never seen it before, the design is not finished, however capable the equipment.
          </p>

          <h3 style={{ margin: "40px 0 0", fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>Decided while the walls are open</h3>
          <p style={{ margin: "12px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>
            Containment, back-box positions, interface locations, rack space and power are all fixed at first fix. A system designed after the finishes are on can still be made to work, but it becomes a retrofit, with a lower ceiling on what can be added later. We would rather review the drawings early and specify nothing than arrive late and specify a compromise.
          </p>

          <div style={{ marginTop: 40 }}>
            <Button variant="outlineOnSurface" size="md" icon="arrow-right" href="/products">See What Each Discipline Delivers</Button>
          </div>
        </Reveal>

        <Reveal as="aside" delay={120} style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 20, padding: 32, boxShadow: "var(--shadow-sm)" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)" }}>How We Work</div>
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 0 }}>
            {SIDEBAR.map((s) => (
              <div key={s.k} style={{ display: "flex", justifyContent: "space-between", gap: 16, paddingBlock: "12px", borderBottom: "1px solid var(--border-subtle)", fontSize: 14 }}>
                <span style={{ color: "var(--text-secondary)" }}>{s.k}</span>
                <span style={{ fontWeight: 600, textAlign: "right" }}>{s.v}</span>
              </div>
            ))}
          </div>
          <p style={{ margin: "24px 0 0", fontSize: 13, color: "var(--text-secondary)" }}>
            Every project is scoped individually. Apartments, villas and developments are each scheduled on their own terms.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
