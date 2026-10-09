"use client";
import React from "react";
import { motion } from "motion/react";
import { Icon } from "./Icon.jsx";
import { LIFT, PRESS_SCALE, SPRING, cssTransition } from "@/lib/motion.js";

const SIZES = { sm: 32, md: 40, lg: 48 };

export function IconButton({ icon, label, variant = "outline", size = "md", disabled, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const box = SIZES[size] || SIZES.md;
  const skins = {
    solid: { background: "var(--us-deep-teal)", color: "var(--us-white)", border: "1px solid var(--us-deep-teal)" },
    outline: { background: "var(--surface-page)", color: "var(--us-deep-teal)", border: "1px solid var(--border-subtle)" },
    ghost: { background: "transparent", color: "var(--us-deep-teal)", border: "1px solid transparent" },
    onDark: { background: "rgba(181,242,219,0.08)", color: "var(--us-white)", border: "1px solid var(--border-on-dark)" },
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
