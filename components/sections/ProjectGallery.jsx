"use client";
import React from "react";
import { createPortal } from "react-dom";
import { IconButton } from "../ui/IconButton.jsx";

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
export function ProjectGallery({ items }) {
  const [active, setActive] = React.useState(0);
  const track = items.map((_, i) => (i === active ? "5fr" : "1fr")).join(" ");

  const thumbRefs = React.useRef([]);
  const [openIndex, setOpenIndex] = React.useState(null);
  const [rect, setRect] = React.useState(null);
  const [animate, setAnimate] = React.useState(false);
  const [controlsVisible, setControlsVisible] = React.useState(false);
  const closeTimerRef = React.useRef(null);
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
  function rectOf(el) {
    const r = el.getBoundingClientRect();
    return { left: r.left, top: r.top, width: r.width, height: r.height };
  }

  function openLightbox(i) {
    const el = thumbRefs.current[i];
    if (!el) return;
    window.clearTimeout(closeTimerRef.current);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setOpenIndex(i);
    setAnimate(false);
    setControlsVisible(false);
    setRect(reduceMotion ? fullRect() : rectOf(el));
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimate(true);
        setRect(fullRect());
        setControlsVisible(true);
      });
    });
  }

  function closeLightbox() {
    if (openIndex == null) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setControlsVisible(false);
    const el = thumbRefs.current[openIndex];
    const target = reduceMotion ? rect : el ? rectOf(el) : rect;
    setAnimate(true);
    setRect(target);
    closeTimerRef.current = window.setTimeout(() => setOpenIndex(null), reduceMotion ? 0 : 480);
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

  React.useEffect(() => {
    function onResize() {
      if (openIndex != null) setRect(fullRect());
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [openIndex]);

  const cur = openIndex != null ? items[openIndex] : null;

  return (
    <>
      <ul
        style={{
          listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8, width: "100%",
          gridTemplateColumns: track, gridTemplateRows: "1fr", height: 560,
          transition: "grid-template-columns 500ms var(--ease-standard)",
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
                  pointerEvents: "none", transition: "background 300ms var(--ease-standard)",
                }}
              />
              <div
                className="us-gallery-rotated"
                style={{
                  position: "absolute", left: 22, bottom: 22, transformOrigin: "left bottom", transform: "rotate(-90deg)",
                  fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.82)",
                  whiteSpace: "nowrap", opacity: isActive ? 0 : 1, transition: "opacity 250ms var(--ease-standard)", pointerEvents: "none",
                }}
              >
                {it.title}
              </div>
              <div
                style={{
                  position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 6, padding: 24,
                  opacity: isActive ? 1 : 0, transform: `translateY(${isActive ? 0 : 10}px)`,
                  transition: `opacity 320ms var(--ease-standard) ${isActive ? "100ms" : ""}, transform 320ms var(--ease-standard) ${isActive ? "100ms" : ""}`,
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

      {mounted && openIndex != null && cur && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${cur.title} photo`}
          style={{ position: "fixed", inset: 0, zIndex: 300 }}
        >
          <div
            onClick={closeLightbox}
            style={{
              position: "absolute", inset: 0, background: "rgba(4,47,52,0.72)", backdropFilter: "blur(10px)",
              opacity: controlsVisible ? 1 : 0, transition: "opacity 380ms var(--ease-standard)",
            }}
          />
          <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{
              position: "fixed",
              left: rect?.left ?? 0, top: rect?.top ?? 0, width: rect?.width ?? 0, height: rect?.height ?? 0,
              borderRadius: 20, overflow: "hidden", background: "var(--us-deep-teal)",
              boxShadow: "0 30px 70px -20px rgba(0,0,0,0.55)",
              transition: animate ? "left 480ms var(--ease-standard), top 480ms var(--ease-standard), width 480ms var(--ease-standard), height 480ms var(--ease-standard)" : "none",
            }}
          >
            {cur.hasImg ? (
              <img src={cur.img} alt={cur.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }} />
            ) : (
              <div style={{ position: "absolute", inset: 0, background: "var(--us-pale-blue-gray-deep)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
                <span style={{ fontSize: 13, color: "var(--text-secondary)", textAlign: "center" }}>{cur.placeholder}</span>
              </div>
            )}
            <div
              style={{
                position: "absolute", left: 0, right: 0, bottom: 0, height: "40%",
                background: "linear-gradient(to top, rgba(4,47,52,0.82) 0%, transparent 100%)",
                opacity: controlsVisible ? 1 : 0, transition: "opacity 300ms var(--ease-standard) 180ms",
              }}
            />
            <div
              style={{
                position: "absolute", left: 0, right: 0, top: 0, height: 96,
                background: "linear-gradient(to bottom, rgba(4,47,52,0.55) 0%, transparent 100%)",
                opacity: controlsVisible ? 1 : 0, transition: "opacity 300ms var(--ease-standard) 180ms",
              }}
            />
            <div
              style={{
                position: "absolute", left: 24, bottom: 20, right: 100, color: "var(--us-white)",
                opacity: controlsVisible ? 1 : 0, transform: `translateY(${controlsVisible ? 0 : 8}px)`,
                transition: "opacity 300ms var(--ease-standard) 220ms, transform 300ms var(--ease-standard) 220ms",
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>{cur.title}</div>
              {cur.desc && <div style={{ fontSize: 13, color: "rgba(255,255,255,0.82)", marginTop: 4, maxWidth: "42ch" }}>{cur.desc}</div>}
            </div>

            <div
              style={{
                position: "absolute", right: 20, bottom: 20, display: "flex", gap: 8,
                opacity: controlsVisible ? 1 : 0, transition: "opacity 220ms var(--ease-standard) 260ms",
              }}
            >
              <IconButton icon="chevron-left" label="Previous photo" variant="onDark" size="sm" onClick={() => step(-1)} />
              <IconButton icon="chevron-right" label="Next photo" variant="onDark" size="sm" onClick={() => step(1)} />
            </div>

            <div
              style={{
                position: "absolute", top: 16, right: 16,
                opacity: controlsVisible ? 1 : 0, transition: "opacity 220ms var(--ease-standard) 260ms",
              }}
            >
              <IconButton icon="x" label="Close" variant="onDark" size="sm" onClick={closeLightbox} />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
