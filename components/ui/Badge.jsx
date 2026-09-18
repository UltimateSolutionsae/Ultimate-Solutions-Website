import React from "react";

export function Badge({ children, tone = "neutral", style, ...rest }) {
  const tones = {
    neutral: { background: "var(--surface-subtle)", color: "var(--text-primary)" },
    mint: { background: "var(--us-mint)", color: "var(--us-deep-teal)" },
    dark: { background: "var(--us-deep-teal)", color: "var(--us-white)" },
    accent: { background: "var(--accent)", color: "var(--us-charcoal-teal)" },
    outline: { background: "transparent", color: "var(--text-secondary)", boxShadow: "inset 0 0 0 1px var(--border-subtle)" },
  };
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", height: 24, padding: "0 10px",
        borderRadius: "var(--radius-pill)", fontFamily: "var(--font-core)", fontSize: "var(--text-xs)",
        fontWeight: "var(--weight-subheading)", letterSpacing: "0.02em", ...tones[tone], ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
