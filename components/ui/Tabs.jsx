"use client";
import React from "react";
import { motion } from "motion/react";
import { PRESS_SCALE, SPRING, cssTransition } from "@/lib/motion.js";

export function Tabs({ items = [], value, onChange, tone = "light", variant = "underline", style }) {
  const active = value ?? (items[0] && (items[0].value ?? items[0]));
  const dark = tone === "dark";
  const tabRefs = React.useRef({});
  // Unique per Tabs instance, so two tab strips on a page never animate
  // their highlights into one another.
  const uid = React.useId();

  // When the active tab sits inside a horizontally scrolling strip (the
  // Products discipline tabs, via .us-scroll-x), clicking one near the
  // edge can leave it partially hidden. Scroll it to the start of the
  // strip on every change, smoothly.
  React.useEffect(() => {
    const el = tabRefs.current[active];
    if (el) el.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, [active]);

  return (
    <div
      role="tablist"
      style={{
        display: "flex", gap: variant === "pill" ? 8 : 32,
        borderBottom: variant === "underline" ? "1px solid " + (dark ? "var(--border-on-dark)" : "var(--border-subtle)") : "none",
        flexWrap: "wrap",
        ...style,
      }}
    >
      {items.map((raw) => {
        const it = typeof raw === "string" ? { value: raw, label: raw } : raw;
        const on = it.value === active;
        const base = {
          position: "relative",
          fontFamily: "var(--font-core)", fontSize: "var(--text-body)", fontWeight: on ? "var(--weight-subheading)" : "var(--weight-body)",
          background: "transparent", border: "none", cursor: "pointer",
          // Colour only. The old `var(--transition-base)` was
          // `all 380ms`, which also animated layout properties.
          transition: cssTransition("color"),
          color: on ? (dark ? "var(--us-mint)" : "var(--us-deep-teal)") : (dark ? "rgba(255,255,255,0.66)" : "var(--text-secondary)"),
        };

        // The highlight — a filled pill or an underline rule — is one
        // shared element moved between tabs by Motion's layout
        // animation, so selection glides on the shared spring instead of
        // snapping from one tab to the next.
        const highlight = variant === "pill"
          ? {
              position: "absolute", inset: 0, zIndex: 0,
              borderRadius: "var(--radius-pill)",
              background: dark ? "var(--us-mint)" : "var(--us-deep-teal)",
            }
          : {
              position: "absolute", left: 0, right: 0, bottom: -1, height: 2, zIndex: 0,
              background: dark ? "var(--us-mint)" : "var(--us-deep-teal)",
            };

        const skin = variant === "pill"
          ? {
              padding: "8px 18px", borderRadius: "var(--radius-pill)",
              color: on ? (dark ? "var(--us-deep-teal)" : "var(--us-white)") : base.color,
              boxShadow: on ? "none" : "inset 0 0 0 1px " + (dark ? "var(--border-on-dark)" : "var(--border-subtle)"),
            }
          : { paddingBlock: "0 14px", marginBottom: -1 };

        return (
          <motion.button
            ref={(el) => { tabRefs.current[it.value] = el; }}
            key={it.value} role="tab" aria-selected={on} onClick={() => onChange && onChange(it.value)}
            whileTap={{ scale: PRESS_SCALE, transition: SPRING }}
            style={{ ...base, ...skin }}
          >
            {on && (
              <motion.span
                aria-hidden="true"
                layoutId={`${uid}-tab-highlight`}
                transition={SPRING}
                style={highlight}
              />
            )}
            <span style={{ position: "relative", zIndex: 1 }}>{it.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
