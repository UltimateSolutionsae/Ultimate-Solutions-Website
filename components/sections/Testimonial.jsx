"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconButton } from "../ui/IconButton.jsx";
import { QUOTES } from "@/lib/data.js";

const SLIDE_DISTANCE = 40;

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? SLIDE_DISTANCE : -SLIDE_DISTANCE, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -SLIDE_DISTANCE : SLIDE_DISTANCE, opacity: 0 }),
};

export function Testimonial() {
  const [[quote, direction], setQuoteState] = React.useState([0, 0]);
  const cur = QUOTES[quote];
  const atStart = quote === 0;
  const atEnd = quote === QUOTES.length - 1;

  const goPrev = () => setQuoteState(([q]) => [Math.max(0, q - 1), -1]);
  const goNext = () => setQuoteState(([q]) => [Math.min(QUOTES.length - 1, q + 1), 1]);

  return (
    <section
      data-screen-label="Testimonial"
      style={{ position: "relative", background: "linear-gradient(135deg,#042F34 0%,#16232B 100%)", color: "var(--us-white)", paddingBlock: "clamp(72px, 12vw, 128px)", overflow: "hidden" }}
    >
      {/* Decorative mosaic wash, masked to fade left -> right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          WebkitMaskImage: "linear-gradient(to right, black 0%, black 42%, transparent 78%)",
          maskImage: "linear-gradient(to right, black 0%, black 42%, transparent 78%)",
          display: "flex", flexWrap: "wrap", alignContent: "center", gap: 8, padding: 8,
        }}
      >
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} style={{ width: 104, height: 104, borderRadius: 12, flexShrink: 0, background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-on-dark)", filter: "blur(1px)" }} />
        ))}
      </div>

      <div className="us-container" style={{ position: "relative" }}>
        <div style={{ minWidth: 0, maxWidth: 600, overflow: "hidden" }}>
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={quote}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            >
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--us-mint)" }}>
                <span aria-hidden="true" style={{ width: 32, height: 1, background: "rgba(255,255,255,0.35)" }} />
                {cur.role}
              </div>
              <blockquote style={{ margin: "24px 0 0" }}>
                <p style={{ margin: 0, fontSize: "clamp(22px, 5vw, 34px)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.32, maxWidth: "30ch" }}>
                  {cur.text}
                </p>
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 32 }}>
                <span aria-hidden="true" style={{ width: 32, height: 1, background: "rgba(255,255,255,0.35)" }} />
                <div style={{ fontSize: 15, fontWeight: 600 }}>{cur.name}</div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 40 }}>
            <IconButton icon="chevron-left" label="Previous testimonial" variant="onDark" size="sm" disabled={atStart} onClick={goPrev} />
            <IconButton icon="chevron-right" label="Next testimonial" variant="onDark" size="sm" disabled={atEnd} onClick={goNext} />
          </div>
        </div>
      </div>
    </section>
  );
}
