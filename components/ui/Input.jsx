"use client";
import React from "react";
import { Icon } from "./Icon.jsx";
import { cssTransition } from "@/lib/motion.js";

export function Input({ label, hint, error, icon, type = "text", multiline, resizable = true, rows = 4, value, onChange, placeholder, disabled, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const inputId = id || autoId;
  const border = error ? "#E0AA1E" : focus ? "var(--us-deep-teal)" : "var(--border-subtle)";
  const field = {
    width: "100%", boxSizing: "border-box", fontFamily: "var(--font-core)", fontSize: "var(--text-body)",
    fontWeight: "var(--weight-body)", color: "var(--text-primary)", background: disabled ? "var(--surface-subtle)" : "var(--surface-page)",
    padding: multiline ? "12px 14px" : icon ? "12px 14px 12px 42px" : "12px 14px",
    border: "1px solid " + border, borderRadius: "var(--radius-sm)", outline: "none",
    transition: cssTransition("border-color"), resize: multiline ? (resizable ? "vertical" : "none") : undefined,
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && <label htmlFor={inputId} style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-subheading)", color: "var(--text-primary)" }}>{label}</label>}
      <div style={{ position: "relative", display: "flex" }}>
        {icon && !multiline && <Icon name={icon} size={18} color="var(--text-secondary)" style={{ position: "absolute", left: 14, top: 13 }} />}
        {multiline ? (
          <textarea id={inputId} rows={rows} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={field} {...rest} />
        ) : (
          <input id={inputId} type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={field} {...rest} />
        )}
      </div>
      {(hint || error) && <span style={{ fontSize: "var(--text-xs)", color: error ? "#E0AA1E" : "var(--text-secondary)" }}>{error || hint}</span>}
    </div>
  );
}
