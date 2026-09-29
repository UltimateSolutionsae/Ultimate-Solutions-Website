"use client";
import React from "react";
import { Icon } from "../ui/Icon.jsx";
import { Input } from "../ui/Input.jsx";
import { Button } from "../ui/Button.jsx";
import { COPY, CATS, CONTACT_ROWS } from "@/lib/data.js";

const PILL_ON = { bg: "var(--us-deep-teal)", fg: "var(--us-white)", bd: "var(--us-deep-teal)" };
const PILL_OFF = { bg: "transparent", fg: "var(--text-secondary)", bd: "var(--border-subtle)" };

export function ContactClient() {
  const [form, setForm] = React.useState({ name: "", email: "", detail: "" });
  const [interests, setInterests] = React.useState(["Lighting"]);
  const [touched, setTouched] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const emailBad = touched && form.email.length > 0 && form.email.indexOf("@") < 0;

  const toggleInterest = (label) => {
    setInterests((cur) => (cur.includes(label) ? cur.filter((v) => v !== label) : cur.concat([label])));
  };

  const submit = () => {
    if (!form.email || form.email.indexOf("@") < 0) {
      setTouched(true);
      return;
    }
    setSent(true);
  };

  const resetForm = () => {
    setSent(false);
    setForm({ name: "", email: "", detail: "" });
    setTouched(false);
  };

  return (
    <section data-screen-label="Contact" style={{ paddingBlock: "clamp(56px, 9vw, 96px) clamp(72px, 12vw, 128px)" }} className="us-container">
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
              <h2 style={{ margin: 0, fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>Enquiry Sent</h2>
              <p style={{ margin: "16px 0 32px", fontSize: 16, color: "var(--text-secondary)" }}>We reply within one working day.</p>
              <Button variant="outline" size="md" onClick={resetForm}>Send Another</Button>
            </div>
          ) : (
            <div>
              <h2 style={{ margin: "0 0 32px", fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>{COPY.formTitle}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <Input label="Name" placeholder="Full name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
                <Input label="Email" type="email" placeholder="name@address.com" value={form.email} error={emailBad ? "Enter a valid address." : ""} onChange={(e) => { setForm((f) => ({ ...f, email: e.target.value })); setTouched(true); }} />
                <Input label={COPY.formField} placeholder={COPY.formPlaceholder} value={form.detail} onChange={(e) => setForm((f) => ({ ...f, detail: e.target.value }))} multiline rows={5} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Disciplines of interest</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {CATS.map((c) => {
                      const on = interests.includes(c.label);
                      const skin = on ? PILL_ON : PILL_OFF;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => toggleInterest(c.label)}
                          className="us-tap"
                          aria-pressed={on}
                          style={{ cursor: "pointer", fontFamily: "var(--font-core)", fontSize: 14, fontWeight: 600, padding: "9px 16px", borderRadius: 9999, transition: "all 200ms var(--ease-standard)", background: skin.bg, color: skin.fg, border: `1px solid ${skin.bd}`, justifyContent: "center" }}
                        >
                          {c.label}
                        </button>
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

      <div style={{ marginTop: 64, position: "relative", height: 320, borderRadius: 20, overflow: "hidden", border: "1px solid var(--border-subtle)" }}>
        <img src="/contact/dubai-skyline.jpg" alt="Dubai skyline at dusk" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    </section>
  );
}
