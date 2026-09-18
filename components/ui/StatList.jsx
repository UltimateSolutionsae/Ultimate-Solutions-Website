import React from "react";

export function StatList({ items = [], tone = "light", divider = true, style, ...rest }) {
  const dark = tone === "dark";
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 0, ...style }} {...rest}>
      {items.map((it, i) => (
        <div
          key={i}
          style={{
            display: "flex", flexDirection: "column", gap: 6, padding: "0 var(--space-6)",
            borderLeft: divider && i > 0 ? "1px solid " + (dark ? "var(--border-on-dark)" : "var(--border-subtle)") : "none",
            paddingLeft: i === 0 ? 0 : "var(--space-6)",
          }}
        >
          <span style={{ fontSize: "var(--text-h1)", fontWeight: "var(--weight-heading)", letterSpacing: "var(--tracking-heading)", lineHeight: 1, color: dark ? "var(--us-mint)" : "var(--us-deep-teal)" }}>
            {it.value}
            <span style={{ opacity: 0.6 }}>{it.unit || ""}</span>
          </span>
          <span style={{ fontSize: "var(--text-sm)", color: dark ? "rgba(255,255,255,0.7)" : "var(--text-secondary)" }}>{it.label}</span>
        </div>
      ))}
    </div>
  );
}
