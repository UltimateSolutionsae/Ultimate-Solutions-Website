import React from "react";
import Link from "next/link";
import { Logotype } from "../ui/Logotype.jsx";
import { Icon } from "../ui/Icon.jsx";
import { CATS, CONTACT_ROWS, SOCIAL_LINKS } from "@/lib/data.js";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const email = CONTACT_ROWS.find((r) => r.k === "Email");
  const basedIn = CONTACT_ROWS.find((r) => r.k === "Based in");

  return (
    <footer style={{ background: "var(--us-charcoal-teal)", color: "var(--us-white)", padding: "clamp(44px, 7vw, 72px) clamp(20px, 4vw, 32px) 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="us-footer-grid">
          <div>
            <Logotype tone="light" size="md" />
            <p style={{ margin: "28px 0 0", fontSize: 15, color: "rgba(255,255,255,0.62)", maxWidth: "38ch" }}>
              Design, integration, commissioning and aftercare across control, entertainment, security, communications, lighting and connectivity. Founded in Dubai, 2007.
            </p>
          </div>

          <div>
            <div className="us-footer-heading" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-mint)", marginBottom: 20 }}>Disciplines</div>
            <div className="us-footer-links" style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              {CATS.map((c) => (
                <Link key={c.id} href={`/products?category=${c.id}`} className="us-tap" style={{ border: "none", background: "transparent", cursor: "pointer", fontFamily: "var(--font-core)", fontSize: 15, color: "rgba(255,255,255,0.72)", textAlign: "left", paddingBlock: "6px" }}>
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="us-footer-heading" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-mint)", marginBottom: 20 }}>Company</div>
            <div className="us-footer-links" style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              {COMPANY_LINKS.map((f) => (
                <Link key={f.label} href={f.href} className="us-tap" style={{ border: "none", background: "transparent", cursor: "pointer", fontFamily: "var(--font-core)", fontSize: 15, color: "rgba(255,255,255,0.72)", textAlign: "left", paddingBlock: "6px" }}>
                  {f.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="us-footer-heading" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-mint)", marginBottom: 20 }}>Contact</div>
            <div className="us-footer-links" style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 15 }}>
              <a href={email.href} className="us-footer-link" style={{ color: "var(--us-mint)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Icon name="mail" size={15} color="var(--us-mint)" />
                {email.v}
              </a>
              <a href={basedIn.href} target="_blank" rel="noopener" className="us-footer-link" style={{ color: "rgba(255,255,255,0.82)" }}>{basedIn.v}</a>
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href || undefined}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener"
                  className="us-tap"
                  style={{
                    width: 36, height: 36, display: "inline-flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "var(--radius-pill)", border: "1px solid var(--border-on-dark)", background: "rgba(181,242,219,0.08)",
                    color: "var(--us-white)", opacity: s.href ? 1 : 0.4, pointerEvents: s.href ? "auto" : "none",
                  }}
                >
                  <Icon name={s.icon} size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="us-footer-bottom" style={{ display: "flex", justifyContent: "space-between", gap: 32, marginTop: 80, paddingTop: 32, borderTop: "1px solid var(--border-on-dark)", fontSize: 13, color: "rgba(255,255,255,0.45)", flexWrap: "wrap" }}>
          <span>© 2026 Ultimate Solutions Networking Installation LLC.</span>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <Link href="/privacy" style={{ border: "none", background: "transparent", padding: 0, cursor: "pointer", fontFamily: "var(--font-core)", fontSize: 13, color: "rgba(255,255,255,0.62)" }}>
              Privacy Policy
            </Link>
            <span>Trade licence, insurance and method statements on request.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
