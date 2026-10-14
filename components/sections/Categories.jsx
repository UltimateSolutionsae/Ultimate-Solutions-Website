"use client";
import React from "react";
import Link from "next/link";
import { Card } from "../ui/Card.jsx";
import { Reveal } from "../ui/Reveal.jsx";
import { COPY, DISCIPLINE_PHOTOS } from "@/lib/data.js";

const TILES = [
  { id: "control", num: "01", label: "Control", title: "Every System, One Command", desc: "Mobile, remote, voice and gesture control resolved into a single interface across the home." },
  { id: "entertainment", num: "02", label: "Entertainment", title: "Sound And Picture, Built In", desc: "Speaker and screen positions taken from the seating plan, agreed with the interior designer." },
  { id: "security", num: "03", label: "Security", title: "Access & Surveillance", desc: "Specialist systems kept intact, integrated at the point where the home responds." },
  { id: "communications", num: "04", label: "Communications", title: "One Line To Every Room", desc: "Intercom, paging and telephony on the same backbone, so a call reaches the room a person is actually in." },
  { id: "lighting", num: "05", label: "Lighting", title: "Light And Climate, Working Together", desc: "Lighting, climate and curtains resolved into one scene, so a single press sets the room." },
  { id: "connectivity", num: "06", label: "Connectivity", title: "The Layer Everything Depends On", desc: "Coverage and Wi-Fi designed from the plan, wired where it matters, segmented so a guest device stays a guest." },
];

/**
 * A discipline tile. At rest it shows only the label and title so the
 * photograph has room; on hover or keyboard focus the description rises
 * into place.
 *
 * The rise is a transform, not a height change: the caption block is
 * pushed down by exactly the description's measured height (--desc-h), so
 * at rest the title sits on the bottom edge and the description waits
 * below it, clipped by the tile. Touch screens have no hover, so there
 * the description is simply always shown (layout.css).
 */
function Tile({ t }) {
  const photo = DISCIPLINE_PHOTOS[t.id];
  const capRef = React.useRef(null);
  const descRef = React.useRef(null);

  React.useEffect(() => {
    const desc = descRef.current;
    const cap = capRef.current;
    if (!desc || !cap || typeof ResizeObserver === "undefined") return;
    const sync = () => {
      const gap = parseFloat(getComputedStyle(desc).marginTop) || 0;
      cap.style.setProperty("--desc-h", `${desc.offsetHeight + gap}px`);
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(desc);
    return () => ro.disconnect();
  }, []);

  return (
    <Card restShadow="none" className="us-tile" style={{ height: 380, borderRadius: 6, overflow: "hidden", border: "1px solid var(--border-subtle)" }}>
      <div className="us-card-media" style={{ position: "absolute", inset: 0 }}>
        <img src={photo.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: photo.position || "50% 50%" }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(4,47,52,0.86) 0%, rgba(4,47,52,0.22) 46%, transparent 72%)", pointerEvents: "none" }} />
      <div ref={capRef} className="us-tile-cap" style={{ position: "absolute", left: 24, right: 24, bottom: 24, color: "var(--us-white)", pointerEvents: "none" }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-mint)", marginBottom: 10 }}>
          {t.num} · {t.label}
        </div>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{t.title}</h3>
        <p ref={descRef} className="us-tile-desc" style={{ margin: "10px 0 0", fontSize: 14, color: "rgba(255,255,255,0.84)" }}>{t.desc}</p>
      </div>
      {/* A real link laid over the whole tile, so it is keyboard
          reachable, announces as a link and can open in a new tab. The
          old tile was a div with an onClick and could do none of those. */}
      <Link href={`/products?category=${t.id}`} className="us-bare us-tile-link" aria-label={`${t.label}: ${t.title}`} />
    </Card>
  );
}

export function Categories() {
  return (
    <section data-screen-label="Categories" style={{ background: "var(--surface-subtle)", paddingBlock: "clamp(56px, 9vw, 96px)" }}>
      <div className="us-container">
        <Reveal style={{ maxWidth: 760, marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: 20 }}>What We Deliver</div>
          <h2 style={{ margin: 0, fontSize: "var(--text-h1)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{COPY.catTitle}</h2>
          <p style={{ margin: "24px 0 0", fontSize: 18, color: "var(--text-secondary)" }}>{COPY.catLead}</p>
        </Reveal>

        <div className="us-grid-3" style={{ marginBottom: 24 }}>
          {TILES.slice(0, 3).map((t) => <Tile key={t.id} t={t} />)}
        </div>
        <div className="us-grid-3">
          {TILES.slice(3, 6).map((t) => <Tile key={t.id} t={t} />)}
        </div>
      </div>
    </section>
  );
}
