"use client";
import React from "react";
import { motion } from "motion/react";
import { Icon } from "./Icon.jsx";
import { DUR, EASE, LIFT, PRESS_SCALE, SPRING, cssTransition } from "@/lib/motion.js";

const SIZES = {
  sm: { fontSize: "var(--text-sm)", padding: "8px 16px", gap: 6, icon: 14 },
  md: { fontSize: "var(--text-body)", padding: "12px 24px", gap: 8, icon: 16 },
  lg: { fontSize: "var(--text-body-lg)", padding: "16px 32px", gap: 10, icon: 18 },
};

// borderWidth/borderStyle/borderColor as separate longhands, not the
// `border` shorthand — HOVER below only ever overrides borderColor, and
// mixing the shorthand with that longhand across renders is a known React
// inline-style bug: toggling hover on/off left stale per-side border colors
// instead of resetting cleanly.
const VARIANTS = {
  primary: { background: "var(--us-deep-teal)", color: "var(--us-white)", borderWidth: 1, borderStyle: "solid", borderColor: "var(--us-deep-teal)" },
  secondary: { background: "var(--us-mint)", color: "var(--us-deep-teal)", borderWidth: 1, borderStyle: "solid", borderColor: "var(--us-mint)" },
  accent: { background: "var(--accent)", color: "var(--us-charcoal-teal)", borderWidth: 1, borderStyle: "solid", borderColor: "var(--accent)" },
  outline: { background: "transparent", color: "var(--us-deep-teal)", borderWidth: 1, borderStyle: "solid", borderColor: "var(--border-strong)" },
  // Same as "outline" but for use on a --surface-subtle panel, where
  // --border-strong (#C9DCE0) sits almost on top of the panel's own
  // #E4EEF0 background and the border nearly disappears. Uses the
  // design system's existing "slate" derived token for real contrast.
  outlineOnSurface: { background: "transparent", color: "var(--us-deep-teal)", borderWidth: 1, borderStyle: "solid", borderColor: "var(--us-slate)" },
  ghost: { background: "transparent", color: "var(--us-deep-teal)", borderWidth: 1, borderStyle: "solid", borderColor: "transparent" },
  onDark: { background: "transparent", color: "var(--us-white)", borderWidth: 1, borderStyle: "solid", borderColor: "var(--border-on-dark)" },
};

// Only solid-fill variants get a hover shadow — on a bordered/transparent
// button, --shadow-sm's tight 1-3px blur reads as a hard duplicate outline
// rather than a soft lift, since there's no opaque fill for it to blend into.
const FILLED_VARIANTS = new Set(["primary", "secondary", "accent"]);

const HOVER = {
  primary: { background: "var(--us-deep-teal-tint)" },
  secondary: { background: "var(--us-mint-deep)" },
  accent: { background: "var(--accent-hover)" },
  outline: { background: "var(--surface-subtle)", borderColor: "var(--us-mint-deep)" },
  outlineOnSurface: { background: "var(--us-white)", borderColor: "var(--us-mint-deep)" },
  ghost: { background: "var(--surface-subtle)" },
  onDark: { background: "rgba(181,242,219,0.10)", borderColor: "var(--us-mint)" },
};

/**
 * The site-wide hover signature: on an arrow button the glyph slides out
 * of the right edge of its own box while an identical one slides in from
 * the left, so the arrow reads as travelling through the chip rather than
 * nudging. Both copies move inside a box clipped to the icon's size, so
 * nothing shifts the label or the button's width.
 *
 * This is a traversal, not a direct response to the pointer, so it runs on
 * the shared ease over --duration-hover rather than the interface spring:
 * at stiffness 400 the 20px trip completes in about 70ms, too fast to read
 * as movement at all.
 */
const ARROW_TRANSITION = { duration: DUR.hover, ease: EASE };

function ArrowSlide({ glyph, size, hover }) {
  const travel = size + 6;
  const face = { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" };
  return (
    <span style={{ position: "relative", width: size, height: size, flex: "none", overflow: "hidden", display: "inline-block" }}>
      <motion.span animate={{ x: hover ? travel : 0 }} transition={ARROW_TRANSITION} style={face}>
        {glyph}
      </motion.span>
      <motion.span aria-hidden="true" animate={{ x: hover ? 0 : -travel }} transition={ARROW_TRANSITION} style={face}>
        {glyph}
      </motion.span>
    </span>
  );
}

export function Button({
  children, variant = "primary", size = "md", icon, iconPosition = "right",
  fullWidth, disabled, onClick, style, as: As = "button", href, type = "button", ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;

  const isArrow = typeof icon === "string" && icon.startsWith("arrow");
  const rawGlyph = icon ? <Icon name={icon} size={s.icon} /> : null;
  const glyph = icon
    ? (isArrow && !disabled
        ? <ArrowSlide glyph={rawGlyph} size={s.icon} hover={hover} />
        : rawGlyph)
    : null;

  // Colour, border and shadow are plain CSS transitions — they are cheap,
  // non-gesture-driven property fades. Position and scale go to Motion
  // springs so press and hover stay interruptible and start from the live
  // on-screen value instead of restarting from scratch.
  const sharedStyle = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center", justifyContent: "center", gap: s.gap,
    fontFamily: "var(--font-core)", fontWeight: "var(--weight-subheading)",
    fontSize: s.fontSize, lineHeight: 1.1, letterSpacing: "-0.01em",
    padding: s.padding, borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: cssTransition(["background", "border-color", "box-shadow"]),
    opacity: disabled ? 0.4 : 1,
    boxShadow: hover && !disabled && FILLED_VARIANTS.has(variant) ? "var(--shadow-sm)" : "none",
    textDecoration: "none",
    ...v,
    ...(hover && !disabled ? HOVER[variant] : null),
    ...style,
  };

  const handlers = {
    onHoverStart: () => setHover(true),
    onHoverEnd: () => setHover(false),
  };

  const motionProps = disabled
    ? {}
    : {
        whileHover: { y: LIFT.button, transition: SPRING },
        whileTap: { scale: PRESS_SCALE, y: 0, transition: SPRING },
      };

  const body = (
    <>
      {iconPosition === "left" && glyph}
      <span>{children}</span>
      {iconPosition === "right" && glyph}
    </>
  );

  if (href) {
    return (
      <motion.a href={href} onClick={onClick} className="us-btn" style={sharedStyle} {...handlers} {...motionProps} {...rest}>
        {body}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} disabled={disabled} onClick={onClick} className="us-btn" style={sharedStyle} {...handlers} {...motionProps} {...rest}>
      {body}
    </motion.button>
  );
}
