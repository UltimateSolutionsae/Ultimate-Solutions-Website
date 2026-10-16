import React from "react";
import { Button } from "../ui/Button.jsx";
import { Reveal } from "../ui/Reveal.jsx";
import { COPY } from "@/lib/data.js";

export function HomeCta() {
  return (
    <section data-screen-label="Home CTA" style={{ paddingBlock: "clamp(56px, 9vw, 96px)" }} className="us-container">
      <Reveal className="us-split-12-1" style={{ background: "var(--surface-subtle)", borderRadius: 28, padding: 80 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: "var(--text-h1)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{COPY.ctaBandTitle}</h2>
          <p style={{ margin: "20px 0 0", fontSize: 18, color: "var(--text-secondary)", maxWidth: "44ch" }}>{COPY.ctaBandLead}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
          <Button variant="primary" size="lg" icon="arrow-right" fullWidth href="/contact">{COPY.ctaBandBtn}</Button>
          <Button variant="outlineOnSurface" size="lg" icon="file-text" fullWidth href="/brands">Brands and Clients</Button>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 8 }}>We reply within one working day.</div>
        </div>
      </Reveal>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 640px) {
          section[data-screen-label="Home CTA"] .us-split-12-1 { padding: 40px !important; text-align: center; }
          section[data-screen-label="Home CTA"] .us-split-12-1 p { margin-left: auto; margin-right: auto; }
          section[data-screen-label="Home CTA"] .us-split-12-1 > div:last-child { align-items: center !important; }
        }
      `,
        }}
      />
    </section>
  );
}
