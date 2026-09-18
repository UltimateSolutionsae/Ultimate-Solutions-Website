"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";

export function FaqAccordion({ items }) {
  const [open, setOpen] = React.useState({});
  return (
    <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
      {items.map((f, i) => {
        const isOpen = !!open[i];
        return (
          <div key={i} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
            <motion.button
              onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
              whileTap={{ scale: 0.99, transition: { type: "spring", bounce: 0, duration: 0.15 } }}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
                background: "transparent", border: "none", cursor: "pointer", paddingBlock: "24px", textAlign: "left",
                fontFamily: "var(--font-core)",
              }}
            >
              <span style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }}>{f.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                style={{ fontSize: 24, fontWeight: 600, color: "var(--us-deep-teal)", flex: "none", width: 24, textAlign: "center" }}
              >
                +
              </motion.span>
            </motion.button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  style={{ overflow: "hidden" }}
                >
                  <p style={{ margin: 0, padding: "0 64px 28px 0", fontSize: 16, color: "var(--text-secondary)" }}>
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
