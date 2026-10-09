"use client";
import React from "react";
import { Icon } from "./Icon.jsx";
import { cssTransition } from "@/lib/motion.js";

export function Tag({ children, icon, selected, onClick, onRemove, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8, height: 36, padding: "0 16px",
        borderRadius: "var(--radius-pill)", fontFamily: "var(--font-core)", fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-body)", cursor: clickable ? "pointer" : "default",
        transition: cssTransition(["background", "color", "border-color"]),
        background: selected ? "var(--us-deep-teal)" : hover && clickable ? "var(--surface-subtle)" : "transparent",
        color: selected ? "var(--us-white)" : "var(--text-primary)",
        border: "1px solid " + (selected ? "var(--us-deep-teal)" : "var(--border-subtle)"),
        ...style,
      }}
      {...rest}
    >
      {icon && <Icon name={icon} size={16} />}
      {children}
      {onRemove && (
        <Icon
          name="x"
          size={14}
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          style={{ cursor: "pointer", opacity: 0.7 }}
        />
      )}
    </span>
  );
}
