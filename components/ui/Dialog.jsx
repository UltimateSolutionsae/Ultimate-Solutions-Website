"use client";
import React from "react";
import { IconButton } from "./IconButton.jsx";

export function Dialog({ open, title, description, children, footer, onClose, width = 520, style }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "var(--scrim-flat)", backdropFilter: "var(--blur-panel)", display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-5)", zIndex: 60 }}
    >
      <div
        role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: width, background: "var(--surface-card)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", padding: "var(--space-6)", ...style }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-4)", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {title && <h3 style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-heading)", letterSpacing: "var(--tracking-heading)" }}>{title}</h3>}
            {description && <p style={{ margin: 0, fontSize: "var(--text-body)", color: "var(--text-secondary)" }}>{description}</p>}
          </div>
          {onClose && <IconButton icon="x" label="Close" variant="ghost" size="sm" onClick={onClose} />}
        </div>
        {children && <div style={{ marginTop: "var(--space-5)" }}>{children}</div>}
        {footer && <div style={{ marginTop: "var(--space-6)", display: "flex", gap: "var(--space-3)", justifyContent: "flex-end" }}>{footer}</div>}
      </div>
    </div>
  );
}
