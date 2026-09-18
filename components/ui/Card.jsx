"use client";
import React from "react";
import { motion } from "motion/react";

export function Card({ children, tone = "light", padding = "var(--space-6)", interactive, elevation = "sm", style, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    light: { background: "var(--surface-card)", color: "var(--text-primary)", border: "1px solid var(--border-subtle)" },
    subtle: { background: "var(--surface-subtle)", color: "var(--text-primary)", border: "1px solid transparent" },
    dark: { background: "var(--surface-dark)", color: "var(--us-white)", border: "1px solid var(--border-on-dark)" },
    mint: { background: "var(--surface-mint)", color: "var(--us-deep-teal)", border: "1px solid transparent" },
    gradient: { background: "var(--us-gradient-moody)", color: "var(--us-white)", border: "1px solid var(--border-on-dark)" },
  };
  const shadows = { none: "none", sm: "var(--shadow-sm)", md: "var(--shadow-md)", lg: "var(--shadow-lg)" };
  return (
    <motion.div
      onClick={onClick}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover={interactive ? { y: -5, transition: { type: "spring", bounce: 0, duration: 0.35 } } : undefined}
      whileTap={interactive && onClick ? { scale: 0.98, transition: { type: "spring", bounce: 0, duration: 0.15 } } : undefined}
      style={{
        borderRadius: "var(--radius-lg)", padding, boxShadow: shadows[elevation],
        transition: "box-shadow 300ms var(--ease-standard), background 300ms var(--ease-standard)",
        cursor: interactive ? "pointer" : undefined,
        ...tones[tone],
        ...(interactive && hover
          ? { boxShadow: tone === "dark" || tone === "gradient" ? "var(--shadow-on-dark)" : "var(--shadow-lg)" }
          : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
