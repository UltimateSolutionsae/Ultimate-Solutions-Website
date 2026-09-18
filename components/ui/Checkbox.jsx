"use client";
import React from "react";
import { Icon } from "./Icon.jsx";

export function Checkbox({ label, description, checked, onChange, disabled, style, ...rest }) {
  return (
    <label style={{ display: "flex", gap: 12, alignItems: description ? "flex-start" : "center", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, ...style }}>
      <input type="checkbox" checked={!!checked} onChange={onChange} disabled={disabled} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      <span
        style={{
          width: 20, height: 20, flex: "none", marginTop: description ? 2 : 0, borderRadius: "var(--radius-xs)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          background: checked ? "var(--us-deep-teal)" : "var(--surface-page)",
          border: "1px solid " + (checked ? "var(--us-deep-teal)" : "var(--border-strong)"),
          transition: "var(--transition-base)",
        }}
      >
        {checked && <Icon name="check" size={14} color="var(--us-mint)" />}
      </span>
      <span>
        <span style={{ fontSize: "var(--text-body)", fontWeight: "var(--weight-body)" }}>{label}</span>
        {description && <span style={{ display: "block", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>{description}</span>}
      </span>
    </label>
  );
}
