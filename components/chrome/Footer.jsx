import React from "react";
import Link from "next/link";
import { Logotype } from "../ui/Logotype.jsx";
import { CATS } from "@/lib/data.js";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--us-charcoal-teal)", color: "var(--us-white)", padding: "clamp(56px, 9vw, 96px) clamp(20px, 4vw, 32px) 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="us-footer-grid">
          <div>
            <Logotype tone="light" size="md" />
            <p style={{ margin: "28px 0 0", fontSize: 15, color: "rgba(255,255,255,0.62)", maxWidth: "38ch" }}>
              Design, integration, commissioning and aftercare across control, entertainment, security, communications, lighting and connectivity. Founded in Dubai, 2007.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-mint)", marginBottom: 20 }}>Disciplines</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              {CATS.map((c) => (
                <Link key={c.id} href={`/products?category=${c.id}`} className="us-tap" style={{ border: "none", background: "transparent", cursor: "pointer", fontFamily: "var(--font-core)", fontSize: 15, color: "rgba(255,255,255,0.72)", textAlign: "left", paddingBlock: "6px" }}>
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-mint)", marginBottom: 20 }}>Company</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              {COMPANY_LINKS.map((f) => (
                <Link key={f.label} href={f.href} className="us-tap" style={{ border: "none", background: "transparent", cursor: "pointer", fontFamily: "var(--font-core)", fontSize: 15, color: "rgba(255,255,255,0.72)", textAlign: "left", paddingBlock: "6px" }}>
                  {f.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-mint)", marginBottom: 20 }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 15, color: "rgba(255,255,255,0.72)" }}>
              <span>Enquiries by email</span>
              <span>Dubai, United Arab Emirates</span>
              <span>Homeowner and trade enquiries<br />answered within one working day</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", gap: 32, marginTop: 80, paddingTop: 32, borderTop: "1px solid var(--border-on-dark)", fontSize: 13, color: "rgba(255,255,255,0.45)", flexWrap: "wrap" }}>
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
