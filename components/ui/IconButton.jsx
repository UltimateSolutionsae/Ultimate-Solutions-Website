"use client";
import React from "react";
import { motion } from "motion/react";
import { Icon } from "./Icon.jsx";
import { LIFT, PRESS_SCALE, SPRING, cssTransition } from "@/lib/motion.js";

const SIZES = { sm: 32, md: 40, lg: 48 };

export function IconButton({ icon, label, variant = "outline", size = "md", disabled, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const box = SIZES[size] || SIZES.md;
  // borderWidth/borderStyle/borderColor as separate longhands, not the
  // `border` shorthand — `hovers` below only overrides borderColor, and
  // mixing the shorthand with that longhand across renders is a known
  // React inline-style bug: toggling hover left stale per-side border
  // colours behind. Button.jsx carries the same fix for the same reason.
  const line = { borderWidth: 1, borderStyle: "solid" };
  const skins = {
    solid: { background: "var(--us-deep-teal)", color: "var(--us-white)", ...line, borderColor: "var(--us-deep-teal)" },
    outline: { background: "var(--surface-page)", color: "var(--us-deep-teal)", ...line, borderColor: "var(--border-subtle)" },
    ghost: { background: "transparent", color: "var(--us-deep-teal)", ...line, borderColor: "transparent" },
    onDark: { background: "rgba(181,242,219,0.08)", color: "var(--us-white)", ...line, borderColor: "var(--border-on-dark)" },
  };
  const hovers = {
    solid: { background: "var(--us-deep-teal-tint)" },
    outline: { background: "var(--surface-subtle)", borderColor: "var(--us-mint-deep)" },
    ghost: { background: "var(--surface-subtle)" },
    onDark: { background: "rgba(181,242,219,0.16)" },
  };
  return (
    <motion.button
      type="button" aria-label={label} disabled={disabled} onClick={onClick}
      className="us-icon-btn"
      onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}
      whileHover={disabled ? undefined : { y: LIFT.button, transition: SPRING }}
      whileTap={disabled ? undefined : { scale: PRESS_SCALE, y: 0, transition: SPRING }}
      style={{
        width: box, height: box, display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: "var(--radius-pill)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1,
        transition: cssTransition(["background", "border-color"]),
        ...skins[variant], ...(hover && !disabled ? hovers[variant] : null), ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={size === "sm" ? 16 : size === "lg" ? 22 : 18} />
    </motion.button>
  );
}
