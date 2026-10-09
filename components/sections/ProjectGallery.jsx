"use client";
import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { IconButton } from "../ui/IconButton.jsx";
import { DUR, MS, SPRING_SOFT, STAGGER, T } from "@/lib/motion.js";

/**
 * Interactive gallery row: one item is "active" (wide) at a time, the rest
 * collapse to narrow strips with a vertical rotated label. Hover/focus makes
 * an item active, matching the prototype's buildRow() behaviour, simplified
 * to plain CSS grid transitions instead of imperative style objects.
 *
 * Clicking a photo opens it full-screen, growing from the exact thumbnail
 * that was clicked (and shrinking back to it on close) rather than fading
 * in from nowhere — matches the "anchor interactions to their source"
 * principle used for motion elsewhere on the site.
 */
const CHROME_GROUP = {
  hidden: { transition: { staggerChildren: 0 } },
  shown: { transition: { delayChildren: DUR.exit, staggerChildren: STAGGER } },
};
const CHROME_ITEM = {
  hidden: { opacity: 0, y: 8, transition: T.exit },
  shown: { opacity: 1, y: 0, transition: T.ui },
};

export function ProjectGallery({ items }) {
  const [active, setActive] = React.useState(0);
  const track = items.map((_, i) => (i === active ? "5fr" : "1fr")).join(" ");

  const thumbRefs = React.useRef([]);
  const [openIndex, setOpenIndex] = React.useState(null);
  // Where the panel starts from and returns to, expressed purely as a
  // transform away from its final resting place.
  const [from, setFrom] = React.useState({ x: 0, y: 0, scale: 0.9 });
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // The source photography is 1080x1920 (9:16, portrait) — size the expanded
  // view to that exact ratio so the full image always shows uncropped,
  // instead of stretching/cropping it into a generic landscape-ish box.
  const GALLERY_ASPECT = 9 / 16;

  function fullRect() {
    const margin = Math.min(40, window.innerWidth * 0.04);
    const availW = window.innerWidth - margin * 2;
    const availH = window.innerHeight - margin * 2;
    let width, height;
    if (availW / availH > GALLERY_ASPECT) {
      height = availH;
      width = height * GALLERY_ASPECT;
    } else {
      width = availW;
      height = width / GALLERY_ASPECT;
    }
    return {
      left: (window.innerWidth - width) / 2,
      top: (window.innerHeight - height) / 2,
      width, height,
    };
  }
  // The panel is always laid out at its final size and position. Opening
  // and closing is then a pure transform away from that — a uniform
  // scale plus an offset between the two centres — rather than four
  // animated layout properties (left, top, width, height) on a
  // full-screen element, which is what this used to do.
  //
  // The scale is uniform, not one factor per axis: a thumbnail and the
  // expanded view have different aspect ratios, so scaling each axis
  // separately would visibly squash the photo on the way out. With
  // object-fit: contain, a uniform scale just makes it smaller.
  function offsetFrom(el) {
    if (!el) return { x: 0, y: 0, scale: 0.9 };
    const t = el.getBoundingClientRect();
    const f = fullRect();
    return {
      x: (t.left + t.width / 2) - (f.left + f.width / 2),
      y: (t.top + t.height / 2) - (f.top + f.height / 2),
      scale: t.width / f.width,
    };
  }

  function openLightbox(i) {
    const el = thumbRefs.current[i];
    if (!el) return;
    setFrom(offsetFrom(el));
    setOpenIndex(i);
  }

  function closeLightbox() {
    if (openIndex == null) return;
    // Recompute against the thumbnail as it is now — the strip's active
    // item may have changed while the lightbox was open.
    setFrom(offsetFrom(thumbRefs.current[openIndex]));
    setOpenIndex(null);
  }

  function step(delta) {
    setOpenIndex((i) => (i == null ? i : (i + delta + items.length) % items.length));
  }

  // Swipe to move between photos on touch. A horizontal drag beyond the
  // threshold steps; a mostly-vertical drag is ignored so it doesn't fight
  // the user trying to flick the page closed.
  const touchStart = React.useRef(null);
  function onTouchStart(e) {
    const t = e.changedTouches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }
  function onTouchEnd(e) {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
  }

  React.useEffect(() => {
    if (openIndex == null) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [openIndex]);

  React.useEffect(() => {
    if (openIndex == null) return;
    function onKey(e) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex]);

  // The panel sizes itself from fullRect() on every render, so a resize
  // only needs to trigger one.
  const [, forceResize] = React.useReducer((n) => n + 1, 0);
  React.useEffect(() => {
    if (openIndex == null) return;
    window.addEventListener("resize", forceResize);
    return () => window.removeEventListener("resize", forceResize);
  }, [openIndex]);

  const cur = openIndex != null ? items[openIndex] : null;
  const panel = mounted && openIndex != null ? fullRect() : null;

  return (
    <>
      <ul
        style={{
          listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8, width: "100%",
          gridTemplateColumns: track, gridTemplateRows: "1fr", height: 560,
          // The second and last place a layout property is animated (the
          // FAQ accordion's height is the other). Widening the active
          // strip IS the interaction here, and a transform-based version
          // would scale the photos rather than reveal more of them. The
          // track count is fixed, so this stays cheap.
          transition: `grid-template-columns ${MS.ui}ms var(--ease-out)`,
        }}
        className="us-gallery-row"
      >
        {items.map((it, i) => {
          const isActive = i === active;
          return (
            <li
              key={it.slotId}
              ref={(el) => (thumbRefs.current[i] = el)}
              tabIndex={0}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => openLightbox(i)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(i); } }}
              role="button"
              aria-label={`Open ${it.title} photo`}
              style={{
                position: "relative", overflow: "hidden", borderRadius: 20, cursor: "pointer",
                minWidth: 0, minHeight: 0, border: "1px solid var(--border-subtle)", outline: "none",
              }}
            >
              {it.hasImg ? (
                <img src={it.img} alt={it.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div style={{ position: "absolute", inset: 0, background: "var(--us-pale-blue-gray-deep)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
                  <span style={{ fontSize: 12, color: "var(--text-secondary)", textAlign: "center" }}>{it.placeholder}</span>
                </div>
              )}
              <div
                style={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(to top, rgba(4,47,52,0.90) 0%, rgba(4,47,52,${isActive ? 0.32 : 0.58}) 45%, transparent 78%)`,
                  pointerEvents: "none", transition: `background ${MS.ui}ms var(--ease-out)`,
                }}
              />
              <div
                className="us-gallery-rotated"
                style={{
                  position: "absolute", left: 22, bottom: 22, transformOrigin: "left bottom", transform: "rotate(-90deg)",
                  fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.82)",
                  whiteSpace: "nowrap", opacity: isActive ? 0 : 1, transition: `opacity ${MS.hover}ms var(--ease-out)`, pointerEvents: "none",
                }}
              >
                {it.title}
              </div>
              <div
                style={{
                  position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 6, padding: 24,
                  opacity: isActive ? 1 : 0, transform: `translateY(${isActive ? 0 : 10}px)`,
                  transition: `opacity ${MS.ui}ms var(--ease-out), transform ${MS.ui}ms var(--ease-out)`,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--us-white)", lineHeight: 1.2 }}>{it.title}</h3>
                <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.82)", maxWidth: "42ch" }}>{it.desc}</p>
              </div>
            </li>
          );
        })}
        <style
          dangerouslySetInnerHTML={{
            __html: `
        @media (max-width: 860px) {
          .us-gallery-row { display: flex !important; flex-direction: column; height: auto !important; }
          .us-gallery-row li { height: 280px; }
          .us-gallery-rotated { display: none; }
          .us-gallery-row li > div:last-child { opacity: 1 !important; transform: none !important; pointer-events: auto !important; }
        }
      `,
          }}
        />
      </ul>

      {mounted && createPortal(
        <AnimatePresence>
        {openIndex != null && cur && panel && (
        <div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${cur.title} photo`}
          style={{ position: "fixed", inset: 0, zIndex: 300 }}
        >
          <motion.div
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: T.ui }}
            exit={{ opacity: 0, transition: T.exit }}
            style={{
              position: "absolute", inset: 0, background: "rgba(4,47,52,0.72)", backdropFilter: "blur(10px)",
            }}
          />
          <motion.div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            initial={{ opacity: 0, x: from.x, y: from.y, scale: from.scale }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1, transition: SPRING_SOFT }}
            exit={{ opacity: 0, x: from.x, y: from.y, scale: from.scale, transition: T.exit }}
            style={{
              position: "fixed",
              left: panel.left, top: panel.top, width: panel.width, height: panel.height,
              borderRadius: 20, overflow: "hidden", background: "var(--us-deep-teal)",
              boxShadow: "0 30px 70px -20px rgba(0,0,0,0.55)",
            }}
          >
            {cur.hasImg ? (
              <img src={cur.img} alt={cur.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }} />
            ) : (
              <div style={{ position: "absolute", inset: 0, background: "var(--us-pale-blue-gray-deep)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
                <span style={{ fontSize: 13, color: "var(--text-secondary)", textAlign: "center" }}>{cur.placeholder}</span>
              </div>
            )}
            {/* Scrims, caption and controls arrive once the panel has
                travelled, so the photo lands first and the chrome settles
                onto it. One group, one stagger — previously four
                elements each carried their own hand-tuned delay. */}
            <motion.div
              variants={CHROME_GROUP}
              initial="hidden"
              animate="shown"
              exit="hidden"
              style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
            >
              <motion.div
                variants={CHROME_ITEM}
                style={{
                  position: "absolute", left: 0, right: 0, bottom: 0, height: "40%",
                  background: "linear-gradient(to top, rgba(4,47,52,0.82) 0%, transparent 100%)",
                }}
              />
              <motion.div
                variants={CHROME_ITEM}
                style={{
                  position: "absolute", left: 0, right: 0, top: 0, height: 96,
                  background: "linear-gradient(to bottom, rgba(4,47,52,0.55) 0%, transparent 100%)",
                }}
              />
              <motion.div
                variants={CHROME_ITEM}
                style={{ position: "absolute", left: 24, bottom: 20, right: 100, color: "var(--us-white)" }}
              >
                <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>{cur.title}</div>
                {cur.desc && <div style={{ fontSize: 13, color: "rgba(255,255,255,0.82)", marginTop: 4, maxWidth: "42ch" }}>{cur.desc}</div>}
              </motion.div>

              <motion.div
                variants={CHROME_ITEM}
                style={{ position: "absolute", right: 20, bottom: 20, display: "flex", gap: 8, pointerEvents: "auto" }}
              >
                <IconButton icon="chevron-left" label="Previous photo" variant="onDark" size="sm" onClick={() => step(-1)} />
                <IconButton icon="chevron-right" label="Next photo" variant="onDark" size="sm" onClick={() => step(1)} />
              </motion.div>

              <motion.div
                variants={CHROME_ITEM}
                style={{ position: "absolute", top: 16, right: 16, pointerEvents: "auto" }}
              >
                <IconButton icon="x" label="Close" variant="onDark" size="sm" onClick={closeLightbox} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
