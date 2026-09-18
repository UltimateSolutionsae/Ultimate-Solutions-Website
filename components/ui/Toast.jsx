"use client";
import React from "react";
import { Icon } from "./Icon.jsx";

export function Toast({ message, detail, tone = "dark", icon, onDismiss, style, ...rest }) {
  const tones = {
    dark: { background: "var(--us-charcoal-teal)", color: "var(--us-white)" },
    mint: { background: "var(--us-mint)", color: "var(--us-deep-teal)" },
    accent: { background: "var(--accent)", color: "var(--us-charcoal-teal)" },
  };
  return (
    <div
      role="status"
      style={{
        display: "inline-flex", alignItems: "flex-start", gap: 12, padding: "14px 16px",
        borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", fontFamily: "var(--font-core)",
        fontSize: "var(--text-sm)", maxWidth: 420, ...tones[tone], ...style,
      }}
      {...rest}
    >
      <Icon name={icon || (tone === "accent" ? "triangle-alert" : "circle-check")} size={18} style={{ marginTop: 1 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontWeight: "var(--weight-subheading)" }}>{message}</span>
        {detail && <span style={{ opacity: 0.75 }}>{detail}</span>}
      </div>
      {onDismiss && <Icon name="x" size={14} onClick={onDismiss} style={{ cursor: "pointer", opacity: 0.7, marginTop: 2 }} />}
    </div>
  );
}
