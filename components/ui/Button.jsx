"use client";
import React from "react";
import { motion } from "motion/react";
import { Icon } from "./Icon.jsx";

const SIZES = {
  sm: { fontSize: "var(--text-sm)", padding: "8px 16px", gap: 6, icon: 14 },
  md: { fontSize: "var(--text-body)", padding: "12px 24px", gap: 8, icon: 16 },
  lg: { fontSize: "var(--text-body-lg)", padding: "16px 32px", gap: 10, icon: 18 },
};

const VARIANTS = {
  primary: { background: "var(--us-deep-teal)", color: "var(--us-white)", border: "1px solid var(--us-deep-teal)" },
  secondary: { background: "var(--us-mint)", color: "var(--us-deep-teal)", border: "1px solid var(--us-mint)" },
  accent: { background: "var(--accent)", color: "var(--us-charcoal-teal)", border: "1px solid var(--accent)" },
  outline: { background: "transparent", color: "var(--us-deep-teal)", border: "1px solid var(--border-strong)" },
  // Same as "outline" but for use on a --surface-subtle panel, where
  // --border-strong (#C9DCE0) sits almost on top of the panel's own
  // #E4EEF0 background and the border nearly disappears. Uses the
  // design system's existing "slate" derived token for real contrast.
  outlineOnSurface: { background: "transparent", color: "var(--us-deep-teal)", border: "1px solid var(--us-slate)" },
  ghost: { background: "transparent", color: "var(--us-deep-teal)", border: "1px solid transparent" },
  onDark: { background: "transparent", color: "var(--us-white)", border: "1px solid var(--border-on-dark)" },
};

const HOVER = {
  primary: { background: "var(--us-deep-teal-tint)" },
  secondary: { background: "var(--us-mint-deep)" },
  accent: { background: "var(--accent-hover)" },
  outline: { background: "var(--surface-subtle)", borderColor: "var(--us-mint-deep)" },
  outlineOnSurface: { background: "var(--us-white)", borderColor: "var(--us-mint-deep)" },
  ghost: { background: "var(--surface-subtle)" },
  onDark: { background: "rgba(181,242,219,0.10)", borderColor: "var(--us-mint)" },
};

export function Button({
  children, variant = "primary", size = "md", icon, iconPosition = "right",
  fullWidth, disabled, onClick, style, as: As = "button", href, type = "button", ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const glyph = icon ? <Icon name={icon} size={s.icon} /> : null;

  // Color/shadow are plain CSS transitions (not gesture-driven); position/scale
  // are handed to Motion springs below so press/hover stay interruptible and
  // start from the live on-screen value instead of restarting from scratch.
  const sharedStyle = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center", justifyContent: "center", gap: s.gap,
    fontFamily: "var(--font-core)", fontWeight: "var(--weight-subheading)",
    fontSize: s.fontSize, lineHeight: 1.1, letterSpacing: "-0.01em",
    padding: s.padding, borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background 200ms var(--ease-standard), border-color 200ms var(--ease-standard), box-shadow 200ms var(--ease-standard)",
    opacity: disabled ? 0.4 : 1,
    boxShadow: hover && !disabled ? "var(--shadow-sm)" : "none",
    textDecoration: "none",
    ...v,
    ...(hover && !disabled ? HOVER[variant] : null),
    ...style,
  };

  const handlers = {
    onHoverStart: () => setHover(true),
    onHoverEnd: () => setHover(false),
  };

  // Critically damped for the hover lift (no bounce, it's not momentum-driven);
  // press is a touch snappier so it reads as instant.
  const hoverTransition = { type: "spring", bounce: 0, duration: 0.3 };
  const pressTransition = { type: "spring", bounce: 0, duration: 0.15 };

  const motionProps = disabled
    ? {}
    : {
        whileHover: { y: -2, transition: hoverTransition },
        whileTap: { scale: 0.965, y: 0, transition: pressTransition },
      };

  if (href) {
    return (
      <motion.a href={href} onClick={onClick} className="us-btn" style={sharedStyle} {...handlers} {...motionProps} {...rest}>
        {iconPosition === "left" && glyph}
        <span>{children}</span>
        {iconPosition === "right" && glyph}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} disabled={disabled} onClick={onClick} className="us-btn" style={sharedStyle} {...handlers} {...motionProps} {...rest}>
      {iconPosition === "left" && glyph}
      <span>{children}</span>
      {iconPosition === "right" && glyph}
    </motion.button>
  );
}
