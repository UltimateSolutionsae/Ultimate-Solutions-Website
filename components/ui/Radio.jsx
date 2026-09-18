"use client";
import React from "react";

export function Radio({ label, description, checked, onChange, name, value, disabled, style, ...rest }) {
  return (
    <label style={{ display: "flex", gap: 12, alignItems: description ? "flex-start" : "center", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, ...style }}>
      <input type="radio" name={name} value={value} checked={!!checked} onChange={onChange} disabled={disabled} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      <span
        style={{
          width: 20, height: 20, flex: "none", marginTop: description ? 2 : 0, borderRadius: "var(--radius-pill)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          background: "var(--surface-page)", border: "1px solid " + (checked ? "var(--us-deep-teal)" : "var(--border-strong)"),
          transition: "var(--transition-base)",
        }}
      >
        {checked && <span style={{ width: 10, height: 10, borderRadius: "var(--radius-pill)", background: "var(--us-deep-teal)" }} />}
      </span>
      <span>
        <span style={{ fontSize: "var(--text-body)", fontWeight: "var(--weight-body)" }}>{label}</span>
        {description && <span style={{ display: "block", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>{description}</span>}
      </span>
    </label>
  );
}
