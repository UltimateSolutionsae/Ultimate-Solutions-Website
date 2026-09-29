"use client";
import React from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { QUOTES } from "@/lib/data.js";

// QUOTES has no photos and names are already anonymised to initials
// (e.g. "F.D."), so avatars are rendered as initial-letter chips rather
// than invented headshots.
function initials(name) {
  return name.replace(/\./g, "").toUpperCase();
}

const QUOTE_TEXT_STYLE = { margin: 0, fontSize: "clamp(21px, 3.4vw, 26px)", fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.4, color: "var(--text-primary)" };

function SplitText({ text }) {
  const words = text.split(" ");
  return (
    <span style={{ display: "inline" }}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, delay: i * 0.02, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

function Avatar({ name, size, active }) {
  return (
    <div
      style={{
        width: size, height: size, borderRadius: 9999, flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "var(--us-mint-wash)", color: "var(--us-deep-teal)",
        fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: size * 0.32,
        border: "1px solid var(--border-subtle)",
        opacity: active === false ? 0.4 : 1,
        transition: "opacity 200ms var(--ease-standard)",
      }}
    >
      {initials(name)}
    </div>
  );
}

export function Testimonial() {
  const [active, setActive] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);
  const containerRef = React.useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const goNext = () => setActive((p) => (p + 1) % QUOTES.length);
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goNext();
    }
  };

  const cur = QUOTES[active];

  return (
    <section
      data-screen-label="Testimonial"
      style={{ background: "var(--surface-subtle)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", paddingBlock: "clamp(72px, 12vw, 128px)" }}
    >
      <div className="us-container">
        <div
          ref={containerRef}
          role="button"
          tabIndex={0}
          aria-label="Show next testimonial"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={goNext}
          onKeyDown={onKeyDown}
          style={{ position: "relative", maxWidth: 600, margin: "0 auto", cursor: "none" }}
        >
          {/* Custom magnetic cursor, desktop pointer only */}
          <motion.div
            aria-hidden="true"
            className="us-testimonial-cursor"
            style={{ pointerEvents: "none", position: "absolute", zIndex: 5, x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
          >
            <motion.div
              style={{
                borderRadius: 9999, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
                background: "rgba(4,47,52,0.45)", backdropFilter: "blur(10px) saturate(180%)", WebkitBackdropFilter: "blur(10px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.35)", borderTopColor: "rgba(255,255,255,0.55)",
                boxShadow: "0 4px 16px rgba(4,47,52,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
              animate={{ width: hovered ? 58 : 0, height: hovered ? 58 : 0, opacity: hovered ? 1 : 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
            >
              <motion.span
                style={{ color: "var(--us-white)", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ delay: 0.1 }}
              >
                Next
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Index indicator */}
          <div style={{ position: "absolute", top: 0, right: 0, display: "flex", alignItems: "baseline", gap: 4, fontFamily: "var(--font-mono)" }}>
            <motion.span
              key={active}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: 28, fontWeight: 300, color: "var(--text-primary)" }}
            >
              {String(active + 1).padStart(2, "0")}
            </motion.span>
            <span style={{ color: "var(--text-secondary)", fontSize: 13 }}>/ {String(QUOTES.length).padStart(2, "0")}</span>
          </div>

          {/* Stacked avatar previews */}
          <div style={{ display: "flex", marginBottom: 40 }}>
            {QUOTES.map((q, i) => (
              <div key={i} style={{ marginLeft: i === 0 ? 0 : -8 }}>
                <Avatar name={q.name} size={26} active={i === active} />
              </div>
            ))}
          </div>

          {/* Quote. Testimonials vary a lot in length, so the visible,
              animated blockquote sits absolutely positioned over an
              invisible stack of every quote (same grid cell) that reserves
              the tallest one's height -- otherwise the section reflows and
              everything below jumps every time you switch testimonials. */}
          <div style={{ position: "relative" }}>
            <div aria-hidden="true" style={{ display: "grid", visibility: "hidden" }}>
              {QUOTES.map((q, i) => (
                <blockquote key={i} style={{ ...QUOTE_TEXT_STYLE, gridArea: "1 / 1" }}>
                  {q.text}
                </blockquote>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                style={{ ...QUOTE_TEXT_STYLE, position: "absolute", inset: 0 }}
              >
                <SplitText text={cur.text} />
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Author */}
          <div style={{ marginTop: 48, display: "flex", alignItems: "center", gap: 16 }}>
            <Avatar name={cur.name} size={48} />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                style={{ position: "relative", paddingLeft: 16, borderLeft: "1px solid var(--us-deep-teal)" }}
              >
                <span style={{ display: "block", fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>{cur.name}</span>
                <span style={{ display: "block", marginTop: 2, fontSize: 12, color: "var(--text-secondary)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {cur.role}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: 40, height: 1, background: "var(--border-subtle)", position: "relative", overflow: "hidden" }}>
            <motion.div
              style={{ position: "absolute", inset: "0 auto 0 0", height: "100%", background: "var(--us-deep-teal)" }}
              initial={false}
              animate={{ width: `${((active + 1) / QUOTES.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Hint */}
          <div style={{ marginTop: 24, opacity: hovered ? 0.6 : 0.35, transition: "opacity 200ms var(--ease-standard)" }}>
            <span style={{ fontSize: 10, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: "var(--font-mono)" }}>
              Click anywhere
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
