"use client";
import React from "react";
import { motion } from "motion/react";
import { Icon } from "../ui/Icon.jsx";
import { Input } from "../ui/Input.jsx";
import { Button } from "../ui/Button.jsx";
import { SegmentedControl } from "../ui/SegmentedControl.jsx";
import { COPY, CATS, CONTACT_ROWS } from "@/lib/data.js";
import { PRESS_SCALE, SPRING, cssTransition } from "@/lib/motion.js";

const PILL_ON = { bg: "var(--us-deep-teal)", fg: "var(--us-white)", bd: "var(--us-deep-teal)" };
const PILL_OFF = { bg: "transparent", fg: "var(--text-secondary)", bd: "var(--border-subtle)" };

// The CTA promises "tell us about the property and the stage it is at", so
// the form asks exactly that, as one-tap choices. The property types reuse
// the project types already shown on the Projects page.
const PROPERTY_TYPES = ["Private residence", "Residential tower", "Development", "Other"];
const PROJECT_STAGES = ["Concept design", "Under construction", "Existing home"];

const fieldLabel = { fontSize: 14, fontWeight: 600, marginBottom: 12 };

export function ContactClient() {
  const [form, setForm] = React.useState({ name: "", email: "", detail: "", property: null, stage: null });
  const [interests, setInterests] = React.useState(["Lighting"]);
  const [touched, setTouched] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const emailBad = touched && form.email.length > 0 && form.email.indexOf("@") < 0;

  const toggleInterest = (label) => {
    setInterests((cur) => (cur.includes(label) ? cur.filter((v) => v !== label) : cur.concat([label])));
  };

  const allSelected = interests.length === CATS.length;
  const toggleAll = () => setInterests(allSelected ? [] : CATS.map((c) => c.label));

  const submit = () => {
    if (!form.email || form.email.indexOf("@") < 0) {
      setTouched(true);
      return;
    }
    const emailRow = CONTACT_ROWS.find((r) => r.k === "Email");
    const to = emailRow ? emailRow.v : "info@ultimatesolutions.net";
    const subject = `Consultation enquiry from ${form.name || "website visitor"}`;
    const body = [
      `Name: ${form.name || "-"}`,
      `Email: ${form.email}`,
      `Property: ${form.property || "-"}`,
      `Project stage: ${form.stage || "-"}`,
      `Disciplines of interest: ${interests.length ? interests.join(", ") : "-"}`,
      "",
      "About the project:",
      form.detail || "-",
    ].join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const resetForm = () => {
    setSent(false);
    setForm({ name: "", email: "", detail: "", property: null, stage: null });
    setTouched(false);
  };

  return (
    <section data-screen-label="Contact" style={{ paddingBlock: "clamp(44px, 7vw, 72px) clamp(56px, 9vw, 96px)" }} className="us-container">
      <div className="us-split-1-1">
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: 24 }}>Contact</div>
          <h1 style={{ margin: 0, fontSize: "var(--text-display)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.02, maxWidth: "18ch" }}>{COPY.contactTitle}</h1>
          <p style={{ margin: "24px 0 0", fontSize: 18, color: "var(--text-secondary)", maxWidth: "48ch" }}>{COPY.contactLead}</p>

          <div style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border-subtle)" }}>
            {CONTACT_ROWS.map((r) => (
              <div key={r.k} style={{ display: "flex", gap: 24, paddingBlock: "20px", borderBottom: "1px solid var(--border-subtle)", alignItems: "center" }}>
                <Icon name={r.icon} size={20} color="var(--us-deep-teal)" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)" }}>{r.k}</div>
                  {r.href ? (
                    <a
                      href={r.href}
                      {...(r.external ? { target: "_blank", rel: "noopener" } : {})}
                      style={{ display: "inline-block", fontSize: 16, fontWeight: 600, marginTop: 4 }}
                    >
                      {r.v}
                    </a>
                  ) : (
                    <div style={{ fontSize: 16, fontWeight: 600, marginTop: 4 }}>{r.v}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="us-panel" style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 28, padding: 48, boxShadow: "var(--shadow-md)" }}>
          {sent ? (
            <div style={{ textAlign: "center", paddingBlock: "40px" }}>
              <div style={{ display: "inline-flex", width: 56, height: 56, alignItems: "center", justifyContent: "center", borderRadius: 9999, background: "var(--us-mint)", marginBottom: 24 }}>
                <Icon name="check" size={24} color="var(--us-deep-teal)" />
              </div>
              <h2 style={{ margin: 0, fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>Your Email App Should Now Be Open</h2>
              <p style={{ margin: "16px 0 32px", fontSize: 16, color: "var(--text-secondary)" }}>We've pre-filled a message to our team — send it from there and we'll reply within one working day.</p>
              <Button variant="outline" size="md" onClick={resetForm}>Send Another</Button>
            </div>
          ) : (
            <div>
              <h2 style={{ margin: "0 0 32px", fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>{COPY.formTitle}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="us-form-pair">
                  <Input label="Name" placeholder="Full name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
                  <Input label="Email" type="email" placeholder="name@address.com" value={form.email} error={emailBad ? "Enter a valid address." : ""} onChange={(e) => { setForm((f) => ({ ...f, email: e.target.value })); setTouched(true); }} />
                </div>
                <div>
                  <div id="us-field-property" style={fieldLabel}>Property</div>
                  <SegmentedControl items={PROPERTY_TYPES} value={form.property} onChange={(v) => setForm((f) => ({ ...f, property: v }))} aria-labelledby="us-field-property" />
                </div>
                <div>
                  <div id="us-field-stage" style={fieldLabel}>Project stage</div>
                  <SegmentedControl items={PROJECT_STAGES} value={form.stage} onChange={(v) => setForm((f) => ({ ...f, stage: v }))} aria-labelledby="us-field-stage" />
                </div>
                <Input label={COPY.formField} placeholder={COPY.formPlaceholder} value={form.detail} onChange={(e) => setForm((f) => ({ ...f, detail: e.target.value }))} multiline resizable={false} rows={5} />
                <div>
                  <div style={fieldLabel}>Disciplines of interest</div>
                  <motion.button
                    type="button"
                    onClick={toggleAll}
                    className="us-tap"
                    aria-pressed={allSelected}
                    whileTap={{ scale: PRESS_SCALE, transition: SPRING }}
                    style={{
                      cursor: "pointer", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      fontFamily: "var(--font-core)", fontSize: 14, fontWeight: 700, padding: "12px 16px",
                      borderRadius: "var(--radius-sm)", marginBottom: 10,
                      transition: cssTransition(["background", "color", "border-color"]),
                      background: allSelected ? "var(--us-deep-teal)" : "var(--us-mint-wash)",
                      color: allSelected ? "var(--us-white)" : "var(--us-deep-teal)",
                      border: `1.5px solid ${allSelected ? "var(--us-deep-teal)" : "var(--us-mint-deep)"}`,
                    }}
                  >
                    <Icon name="check" size={16} />
                    All Disciplines
                  </motion.button>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {CATS.map((c) => {
                      const on = interests.includes(c.label);
                      const skin = on ? PILL_ON : PILL_OFF;
                      return (
                        <motion.button
                          key={c.id}
                          type="button"
                          onClick={() => toggleInterest(c.label)}
                          className="us-tap"
                          aria-pressed={on}
                          whileTap={{ scale: PRESS_SCALE, transition: SPRING }}
                          style={{
                            cursor: "pointer", fontFamily: "var(--font-core)", fontSize: 14, fontWeight: 600,
                            padding: "9px 16px", borderRadius: 9999, justifyContent: "center",
                            transition: cssTransition(["background", "color", "border-color"]),
                            background: skin.bg, color: skin.fg,
                            borderWidth: 1, borderStyle: "solid", borderColor: skin.bd,
                          }}
                        >
                          {c.label}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <Button variant="primary" size="lg" icon="arrow-right" fullWidth onClick={submit}>{COPY.cta}</Button>
                </div>
                <p style={{ margin: 0, fontSize: 13, color: "var(--text-secondary)" }}>We use your details only to answer the enquiry.</p>
              </div>
            </div>
          )}
        </div>
      </div>

    </section>
  );
}
