import React from "react";
import { Button } from "../ui/Button.jsx";
import { COPY } from "@/lib/data.js";

// `pad` is the white bezel inside the circular badge. Wide wordmarks sit low
// in the circle and can run nearly its full width, so they take a small bezel.
// Square and portrait marks need more, otherwise their corners fall outside
// the circle and get clipped by the badge's overflow.
const ORBIT_BADGES_1 = [
  { left: "96.98%", top: "32.9%", size: 60, pad: 6, src: "/clients/lissoni-partners.svg", alt: "Lissoni & Partners" },
  { left: "3.02%", top: "67.1%", size: 60, pad: 6, src: "/clients/tak-construction.png", alt: "TAK Construction" },
  { left: "67.1%", top: "96.98%", size: 60, pad: 9, src: "/clients/tag.jpg", alt: "TAG" },
];
const ORBIT_BADGES_3 = [
  { left: "1.7%", top: "37.1%", size: 56, pad: 6, src: "/clients/al-tayer.png", alt: "Al Tayer" },
  { left: "98.3%", top: "62.9%", size: 84, pad: 11, src: "/clients/acc.png", alt: "Arabian Construction Co.", shadow: "lg" },
  { left: "50%", top: "100%", size: 58, pad: 6, src: "/clients/saporiti-italia.svg", alt: "Saporiti Italia" },
  { left: "62.94%", top: "1.7%", size: 58, pad: 9, src: "/clients/takahisa.png", alt: "TakaHisa" },
];

function OrbitBadge({ left, top, size, pad, src, alt, shadow }) {
  return (
    <div
      style={{
        position: "absolute", left, top, transform: "translate(-50%,-50%)", width: size, height: size,
        borderRadius: 9999, background: "var(--us-white)", boxShadow: shadow === "lg" ? "var(--shadow-lg)" : "var(--shadow-md)",
        display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: pad,
      }}
    >
      <img src={src} alt={alt} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
    </div>
  );
}

export function Hero() {
  return (
    <section
      data-screen-label="Hero"
      style={{ position: "relative", overflow: "hidden", backgroundColor: "#042F34", color: "var(--us-white)" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundSize: "120px 120px, auto",
          backgroundBlendMode: "overlay, normal",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.16'/%3E%3C/svg%3E\"), linear-gradient(155deg,#0A4249 0%,#042F34 33%,#1E4348 67%,#16232B 100%)",
        }}
      />
      <div className="us-hero-grid us-container" style={{ position: "relative", paddingBlock: "clamp(48px, 8vw, 88px) clamp(56px, 9vw, 96px)" }}>
        <div style={{ animation: "usFadeUp 720ms var(--ease-standard) both" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-mint)", marginBottom: 28 }}>
            {COPY.heroEyebrow}
          </div>
          <h1 style={{ margin: 0, fontSize: "clamp(38px, 8.5vw, 64px)", lineHeight: 1.02, letterSpacing: "-0.03em", fontWeight: 800, maxWidth: "14ch" }}>
            {COPY.heroTitle}
          </h1>
          <p style={{ margin: "28px 0 0", fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,0.78)", maxWidth: "52ch" }}>
            {COPY.heroLead}
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
            <Button variant="secondary" size="lg" icon="arrow-right" href="/contact" style={{ boxShadow: "0 6px 16px rgba(0,0,0,0.22)" }}>{COPY.cta}</Button>
            <Button variant="onDark" size="lg" icon="arrow-up-right" href="/projects" style={{ boxShadow: "0 6px 16px rgba(0,0,0,0.22)" }}>{COPY.cta2}</Button>
          </div>
          <div className="us-hero-stats" style={{ display: "flex", gap: 40, marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--border-on-dark)", flexWrap: "wrap" }}>
            <div>
              <div className="us-hero-stat-num" style={{ fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>2007</div>
              <div className="us-hero-stat-lbl" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Founded in Dubai</div>
            </div>
            <div>
              <div className="us-hero-stat-num" style={{ fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>6</div>
              <div className="us-hero-stat-lbl" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Disciplines, one system</div>
            </div>
            <div>
              <div className="us-hero-stat-num" style={{ fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>2 Decades</div>
              <div className="us-hero-stat-lbl" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Of intelligent living</div>
            </div>
          </div>
        </div>

        <div className="us-orbit-wrap" style={{ position: "relative", height: 560, animation: "usFadeUp 720ms 120ms var(--ease-standard) both" }}>
          <div style={{ position: "absolute", top: "50%", right: -160, width: 660, height: 660, transform: "translateY(-50%)" }}>
            <div className="us-orbit us-orbit-1" style={{ position: "absolute", left: "50%", top: "50%", width: 260, height: 260, transform: "translate(-50%,-50%)", borderRadius: 9999, border: "1.5px dotted rgba(255,255,255,0.28)" }}>
              {ORBIT_BADGES_1.map((b, i) => <OrbitBadge key={i} {...b} />)}
            </div>
            <div className="us-orbit us-orbit-2" style={{ position: "absolute", left: "50%", top: "50%", width: 420, height: 420, transform: "translate(-50%,-50%)", borderRadius: 9999, border: "1.5px dotted rgba(255,255,255,0.22)" }}>
              <OrbitBadge left="32.9%" top="3%" size={56} pad={9} src="/clients/client-k.jpeg" alt="Client" />
              <OrbitBadge left="93.3%" top="75%" size={56} pad={5} src="/clients/zen-interiors.svg" alt="Zen Interiors" />
              <OrbitBadge left="88.3%" top="17.86%" size={54} pad={6} src="/clients/ashtaar-interiors.png" alt="Ashtaar Interiors" />
            </div>
            <div className="us-orbit us-orbit-3" style={{ position: "absolute", left: "50%", top: "50%", width: 580, height: 580, transform: "translate(-50%,-50%)", borderRadius: 9999, border: "1.5px dotted rgba(255,255,255,0.18)" }}>
              {ORBIT_BADGES_3.map((b, i) => <OrbitBadge key={i} {...b} />)}
            </div>
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 96, height: 96, borderRadius: 9999, background: "var(--us-white)", boxShadow: "var(--shadow-lg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/logo/us-mark-colour.svg" alt="Ultimate Solutions" style={{ width: 52, height: 52 }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .us-orbit-1 { animation: usOrbitSpin 46s linear infinite; }
        .us-orbit-2 { animation: usOrbitSpinRev 64s linear infinite; }
        .us-orbit-3 { animation: usOrbitSpin 84s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .us-orbit-1, .us-orbit-2, .us-orbit-3 { animation: none; }
        }
        @media (max-width: 980px) {
          .us-orbit-wrap { display: none; }
        }
      `}</style>
    </section>
  );
}
