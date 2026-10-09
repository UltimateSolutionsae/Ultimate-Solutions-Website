"use client";
import React from "react";
import { motion } from "motion/react";
import { PRESS_SCALE, SPRING, cssTransition } from "@/lib/motion.js";

/**
 * One chip selector for the whole site. The filled highlight is a single
 * element shared between options via Motion's `layoutId`, so changing
 * selection glides it from the old chip to the new one on the shared
 * spring instead of snapping the fill from one to another. That movement
 * is the feedback — it shows which option you left and which you landed
 * on.
 *
 * Replaces three unrelated implementations: the Projects type filter, the
 * Contact discipline picker, and the pill variant of Tabs.
 *
 * `items` takes strings or { value, label } objects.
 */
export function SegmentedControl({
  items = [],
  value,
  onChange,
  tone = "light",
  ariaLabel,
  className = "",
  style,
  ...rest
}) {
  // layoutId must be unique per control, or two selectors on one page
  // would animate their highlights into each other.
  const uid = React.useId();
  const dark = tone === "dark";
  const options = items.map((raw) => (typeof raw === "string" ? { value: raw, label: raw } : raw));

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={className}
      style={{ display: "flex", gap: 8, flexWrap: "wrap", ...style }}
      {...rest}
    >
      {options.map((it) => {
        const on = it.value === value;
        return (
          <motion.button
            key={it.value}
            type="button"
            aria-pressed={on}
            onClick={() => onChange && onChange(it.value)}
            className="us-tap"
            whileTap={{ scale: PRESS_SCALE, transition: SPRING }}
            style={{
              position: "relative",
              cursor: "pointer",
              fontFamily: "var(--font-core)", fontSize: 14, fontWeight: 600,
              padding: "9px 18px", justifyContent: "center",
              borderRadius: "var(--radius-pill)",
              background: "transparent",
              // Longhands, not the `border` shorthand: only borderColor
              // changes between states, and mixing shorthand with a
              // longhand across renders leaves stale per-side colours.
              borderWidth: 1, borderStyle: "solid",
              borderColor: on ? "transparent" : (dark ? "var(--border-on-dark)" : "var(--border-subtle)"),
              color: on
                ? (dark ? "var(--us-deep-teal)" : "var(--us-white)")
                : (dark ? "rgba(255,255,255,0.66)" : "var(--text-secondary)"),
              transition: cssTransition(["color", "border-color"]),
            }}
          >
            {on && (
              <motion.span
                aria-hidden="true"
                layoutId={`${uid}-highlight`}
                transition={SPRING}
                style={{
                  position: "absolute", inset: 0, zIndex: 0,
                  borderRadius: "var(--radius-pill)",
                  background: dark ? "var(--us-mint)" : "var(--us-deep-teal)",
                }}
              />
            )}
            <span style={{ position: "relative", zIndex: 1 }}>{it.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
