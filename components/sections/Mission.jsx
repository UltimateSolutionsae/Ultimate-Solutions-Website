import React from "react";
import { Reveal } from "../ui/Reveal.jsx";

export function Mission() {
  return (
    <section data-screen-label="Mission" style={{ paddingBlock: "0 clamp(56px, 9vw, 96px)" }} className="us-container">
      <Reveal className="us-split-1-14" style={{ paddingTop: 24, borderTop: "1px solid var(--border-subtle)" }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: 20 }}>Our Philosophy</div>
          <h2 style={{ margin: 0, fontSize: "var(--text-h1)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Intelligent By Design</h2>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 24, lineHeight: 1.35, letterSpacing: "-0.01em", fontWeight: 600 }}>
            We believe technology should disappear into the experience.
          </p>
          <p style={{ margin: "24px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>
            Ultimate Solutions creates intelligent living environments where technology, architecture and design exist as one. Every system is carefully considered, precisely engineered and tailored to the individual, not only to perform exceptionally, but to be effortless to use.
          </p>
          <p style={{ margin: "14px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>
            We believe sophisticated technology should never feel complicated. Every interaction should be intuitive, natural and accessible, allowing our clients to control and enjoy their environment with ease, without having to think about the technology behind it.
          </p>
          <p style={{ margin: "14px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>
            From automation and lighting to entertainment, climate and security, every element is designed around the way our clients live. The result is a seamless experience where complex technology works quietly in the background, giving homeowners greater comfort, control and freedom.
          </p>
          <p style={{ margin: "28px 0 0", fontSize: 18, fontWeight: 600, color: "var(--us-deep-teal)" }}>
            Thoughtfully designed. Precisely engineered. Effortless to experience.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
