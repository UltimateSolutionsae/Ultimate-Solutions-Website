"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Card } from "../ui/Card.jsx";
import { Reveal } from "../ui/Reveal.jsx";
import { COPY } from "@/lib/data.js";

const TILES = [
  { id: "control", num: "01", label: "Control", title: "Every System, One Command", desc: "Mobile, remote, voice and gesture control resolved into a single interface across the home.", img: "/disciplines/control.jpg", placeholder: "Hand adjusting a wall-mounted control panel" },
  { id: "entertainment", num: "02", label: "Entertainment", title: "Sound And Picture, Built In", desc: "Speaker and screen positions taken from the seating plan, agreed with the interior designer.", img: "/disciplines/entertainment.jpg", placeholder: "Media room in low light" },
  { id: "security", num: "03", label: "Security", title: "Access & Surveillance", desc: "Specialist systems kept intact, integrated at the point where the home responds.", img: "/disciplines/security.jpg", placeholder: "Entrance at dusk, access panel beside the door" },
  { id: "communications", num: "04", label: "Communications", title: "One Line To Every Room", desc: "Intercom, paging and telephony on the same backbone, so a call reaches the room a person is actually in.", img: "/disciplines/communications.png", placeholder: "Intercom panel at an entrance" },
  { id: "lighting", num: "05", label: "Lighting", title: "Light And Climate, Working Together", desc: "Lighting, climate and curtains resolved into one scene, so a single press sets the room.", img: "/lighting-ceiling.jpg", placeholder: "Evening interior, lighting scene visible on a wall keypad" },
  { id: "connectivity", num: "06", label: "Connectivity", title: "The Layer Everything Depends On", desc: "Coverage and Wi-Fi designed from the plan, wired where it matters, segmented so a guest device stays a guest.", img: "/disciplines/connectivity.png", placeholder: "Labelled equipment rack, or structured cabling detail" },
];

function Tile({ t }) {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(`/products?category=${t.id}`)}
      restShadow="none"
      // The photo fills the tile, so it carries the shared slow zoom; the
      // gradient scrim and the caption sit outside .us-card-media so they
      // stay put while it moves.
      style={{
        height: 380, borderRadius: 20, overflow: "hidden", cursor: "pointer",
        border: "1px solid var(--border-subtle)",
      }}
    >
      {t.img ? (
        <div className="us-card-media" style={{ position: "absolute", inset: 0 }}>
          <img src={t.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ) : (
        <div style={{ position: "absolute", inset: 0, background: "var(--us-pale-blue-gray-deep)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <span style={{ fontSize: 12, color: "var(--text-secondary)", textAlign: "center" }}>{t.placeholder}</span>
        </div>
      )}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(4,47,52,0.92) 0%, rgba(4,47,52,0.3) 48%, transparent 80%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: 24, right: 24, bottom: 24, color: "var(--us-white)", pointerEvents: "none" }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-mint)", marginBottom: 10 }}>
          {t.num} · {t.label}
        </div>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{t.title}</h3>
        <p style={{ margin: "10px 0 0", fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{t.desc}</p>
      </div>
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
