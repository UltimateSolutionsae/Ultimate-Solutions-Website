"use client";
import React from "react";
import { motion } from "motion/react";

export function Tabs({ items = [], value, onChange, tone = "light", variant = "underline", style }) {
  const active = value ?? (items[0] && (items[0].value ?? items[0]));
  const dark = tone === "dark";
  const tabRefs = React.useRef({});

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
          fontFamily: "var(--font-core)", fontSize: "var(--text-body)", fontWeight: on ? "var(--weight-subheading)" : "var(--weight-body)",
          background: "transparent", border: "none", cursor: "pointer", transition: "var(--transition-base)",
          color: on ? (dark ? "var(--us-mint)" : "var(--us-deep-teal)") : (dark ? "rgba(255,255,255,0.66)" : "var(--text-secondary)"),
        };
        const skin = variant === "pill"
          ? { padding: "8px 18px", borderRadius: "var(--radius-pill)", background: on ? (dark ? "var(--us-mint)" : "var(--us-deep-teal)") : "transparent", color: on ? (dark ? "var(--us-deep-teal)" : "var(--us-white)") : base.color, boxShadow: on ? "none" : "inset 0 0 0 1px " + (dark ? "var(--border-on-dark)" : "var(--border-subtle)") }
          : { paddingBlock: "0 14px", borderBottom: "2px solid " + (on ? (dark ? "var(--us-mint)" : "var(--us-deep-teal)") : "transparent"), marginBottom: -1 };
        return (
          <motion.button
            ref={(el) => { tabRefs.current[it.value] = el; }}
            key={it.value} role="tab" aria-selected={on} onClick={() => onChange && onChange(it.value)}
            whileTap={{ scale: 0.965, transition: { type: "spring", bounce: 0, duration: 0.15 } }}
            style={{ ...base, ...skin }}
          >
            {it.label}
          </motion.button>
        );
      })}
    </div>
  );
}
