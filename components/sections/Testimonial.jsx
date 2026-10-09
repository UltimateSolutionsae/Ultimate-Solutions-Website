"use client";
import React from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { IconButton } from "../ui/IconButton.jsx";
import { QUOTES } from "@/lib/data.js";
import { SPRING, SPRING_SOFT, T } from "@/lib/motion.js";

// QUOTES has no photos and names are already anonymised to initials
// (e.g. "F.D."), so the author is rendered as an initial-letter chip
// rather than an invented headshot.
function initials(name) {
  return name.replace(/\./g, "").toUpperCase();
}

const QUOTE_STYLE = {
  margin: 0,
  fontSize: "clamp(21px, 2.3vw, 30px)",
  fontWeight: 500,
  letterSpacing: "-0.02em",
  lineHeight: 1.38,
  color: "var(--text-primary)",
  // A display measure: wide enough that the quote fills the block it sits
  // in rather than hugging the left edge of a full-width rule, short
  // enough to still scan in four or five lines.
  maxWidth: "40ch",
};

// The section's rules bracket the quote, so the whole block is held to a
// width the text can actually fill instead of running the full 1240px
// container and leaving half of every rule empty.
const BLOCK = { maxWidth: 940, margin: "0 auto" };

// The quote mark and its gutter. Shared between the visible row and the
// invisible measuring stack: on a phone the mark eats enough width to
// change where the text wraps, so measuring without it would reserve too
// little height and the longest quote would overflow.
const MARK_GAP = "clamp(16px, 2.5vw, 32px)";
const MARK_STYLE = {
  flex: "none", marginTop: "-0.28em",
  fontSize: "clamp(56px, 7vw, 88px)", lineHeight: 1, fontWeight: 800,
  color: "var(--us-mint-deep)", userSelect: "none",
};
const ROW_STYLE = { display: "flex", gap: MARK_GAP, alignItems: "flex-start", width: "100%" };

export function Testimonial() {
  const [active, setActive] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);
  // Direction drives which way the quote enters and leaves, so stepping
  // back reads as going back rather than as another forward step.
  const [dir, setDir] = React.useState(1);
  const quoteRef = React.useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, SPRING_SOFT);
  const cursorY = useSpring(mouseY, SPRING_SOFT);

  const handleMouseMove = (e) => {
    if (!quoteRef.current) return;
    const rect = quoteRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const go = (step) => {
    setDir(step);
    setActive((p) => (p + step + QUOTES.length) % QUOTES.length);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(1); }
    if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
  };

  const cur = QUOTES[active];
  const hairline = "1px solid var(--border-strong)";

  return (
    <section
      data-screen-label="Testimonial"
      style={{
        background: "var(--surface-subtle)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        paddingBlock: "clamp(56px, 9vw, 96px)",
      }}
    >
      <div className="us-container">
       <div style={BLOCK}>
        {/* Header rail: the section label every other section on the site
            has, and the exact position within the set. */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, paddingBottom: 28, borderBottom: hairline }}>
          <span className="us-eyebrow">Testimonials</span>
          <div style={{ display: "flex", alignItems: "baseline", gap: 2, fontFamily: "var(--font-mono)", color: "var(--text-secondary)", fontSize: 13 }}>
            <span style={{ position: "relative", display: "inline-block", minWidth: "2ch", textAlign: "right", color: "var(--text-primary)", fontSize: 15, fontWeight: 600 }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={active}
                  initial={{ opacity: 0, y: dir * 8 }}
                  animate={{ opacity: 1, y: 0, transition: T.ui }}
                  exit={{ opacity: 0, y: dir * -8, transition: T.exit }}
                  style={{ display: "inline-block" }}
                >
                  {String(active + 1).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </span>
            <span>&thinsp;/&thinsp;{String(QUOTES.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Quote. Clicking anywhere in this block advances; the custom
            glass cursor is the affordance on a real pointer, and the
            buttons below cover touch and keyboard. */}
        <div
          ref={quoteRef}
          role="button"
          tabIndex={0}
          aria-label="Show next testimonial"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => go(1)}
          onKeyDown={onKeyDown}
          style={{ position: "relative", cursor: "none", paddingBlock: "clamp(36px, 5vw, 56px)" }}
        >
          {/* Magnetic glass cursor, desktop pointer only (hidden on touch
              via .us-testimonial-cursor in layout.css). Scale, not width
              and height, so only the compositor is involved. */}
          <motion.div
            aria-hidden="true"
            className="us-testimonial-cursor"
            style={{ pointerEvents: "none", position: "absolute", zIndex: 5, x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
          >
            <motion.div
              initial={false}
              animate={{ scale: hovered ? 1 : 0.4, opacity: hovered ? 1 : 0 }}
              transition={SPRING}
              style={{
                width: 58, height: 58,
                borderRadius: "var(--radius-pill)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
                background: "rgba(4,47,52,0.45)", backdropFilter: "blur(10px) saturate(180%)", WebkitBackdropFilter: "blur(10px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.35)", borderTopColor: "rgba(255,255,255,0.55)",
                boxShadow: "0 4px 16px rgba(4,47,52,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <span style={{ color: "var(--us-white)", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                Next
              </span>
            </motion.div>
          </motion.div>

          {/* The quotes differ by about 125px of height between the
              longest and shortest. Letting the block resize would push
              everything below it up and down on every click, so an
              invisible stack of all seven (same grid cell) reserves the
              tallest one's height and the visible quote is centred inside
              it — the slack reads as breathing room above and below
              rather than as a gap before the author line.

              The mark and the text are centred together as one row, so
              the mark always sits on the quote's first line instead of
              being stranded at the top of the reserved box. */}
          <div style={{ position: "relative" }}>
            <div aria-hidden="true" style={{ display: "grid", visibility: "hidden" }}>
              {QUOTES.map((q, i) => (
                <div key={i} style={{ ...ROW_STYLE, gridArea: "1 / 1" }}>
                  <span style={MARK_STYLE}>&ldquo;</span>
                  <blockquote style={QUOTE_STYLE}>{q.text}</blockquote>
                </div>
              ))}
            </div>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
              <div style={ROW_STYLE}>
                <span aria-hidden="true" style={MARK_STYLE}>&ldquo;</span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.blockquote
                    key={active}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0, transition: T.ui }}
                    exit={{ opacity: 0, y: -8, transition: T.exit }}
                    style={QUOTE_STYLE}
                  >
                    {cur.text}
                  </motion.blockquote>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Footer rail: who said it, and the controls. The progress
            hairline sits on top of this row, filling with scaleX rather
            than an animated width. */}
        <div style={{ position: "relative", borderTop: hairline, paddingTop: 28 }}>
          <motion.div
            aria-hidden="true"
            initial={false}
            animate={{ scaleX: (active + 1) / QUOTES.length }}
            transition={T.ui}
            style={{
              position: "absolute", top: -1, left: 0, right: 0, height: 1,
              background: "var(--us-deep-teal)", transformOrigin: "left",
            }}
          />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
              <div
                style={{
                  width: 44, height: 44, borderRadius: "var(--radius-pill)", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "var(--us-mint-wash)", color: "var(--us-deep-teal)",
                  fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 14,
                  border: "1px solid var(--us-mint-deep)",
                }}
              >
                {initials(cur.name)}
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0, transition: T.ui }}
                  exit={{ opacity: 0, y: -6, transition: T.exit }}
                  style={{ minWidth: 0 }}
                >
                  <span style={{ display: "block", fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>{cur.name}</span>
                  <span style={{ display: "block", marginTop: 2, fontSize: 12, color: "var(--text-secondary)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {cur.role}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, flex: "none" }}>
              <IconButton icon="chevron-left" label="Previous testimonial" variant="outline" size="md" onClick={() => go(-1)} />
              <IconButton icon="chevron-right" label="Next testimonial" variant="outline" size="md" onClick={() => go(1)} />
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
}
