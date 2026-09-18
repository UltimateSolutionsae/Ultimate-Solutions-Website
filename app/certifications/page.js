import { Icon } from "@/components/ui/Icon.jsx";
import { Badge } from "@/components/ui/Badge.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { ACCREDITATIONS, BRANDS, CLIENTS, PARTNERS, DOWNLOADS } from "@/lib/data.js";

export const metadata = {
  title: "Certifications & Partners — Accredited And Documented | Ultimate Solutions",
  description: "Certification, licensing and manufacturer accreditations for Ultimate Solutions.",
};

export default function CertificationsPage() {
  return (
    <div>
      <section data-screen-label="Certs header" style={{ background: "linear-gradient(135deg,#042F34 0%,#16232B 100%)", color: "var(--us-white)", position: "relative", overflow: "hidden" }}>
        <div className="us-container" style={{ position: "relative", paddingBlock: "clamp(56px, 9vw, 96px)" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-mint)", marginBottom: 24 }}>Certifications And Partners</div>
          <h1 style={{ margin: 0, fontSize: "var(--text-display)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.02, maxWidth: "22ch" }}>Accredited And Documented</h1>
          <p style={{ margin: "24px 0 0", fontSize: 18, color: "rgba(255,255,255,0.78)", maxWidth: "56ch" }}>
            Certification, licensing and manufacturer accreditations. Reference numbers, insurance certificates and method statements are available on request.
          </p>
        </div>
      </section>

      <section data-screen-label="Accreditations" style={{ paddingBlock: "clamp(56px, 9vw, 96px)" }} className="us-container">
        <h2 style={{ margin: "0 0 48px", fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>Accreditations</h2>
        <div className="us-grid-2">
          {ACCREDITATIONS.map((a) => (
            <div key={a.name} className="us-accred-card" style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 20, padding: 32, boxShadow: "var(--shadow-sm)", display: "flex", gap: 20, alignItems: "flex-start", transition: "transform 200ms var(--ease-standard), box-shadow 200ms var(--ease-standard)" }}>
              <Icon name={a.icon} size={24} color="var(--us-deep-teal)" />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>{a.name}</h3>
                  <Badge tone="mint">{a.status}</Badge>
                </div>
                <p style={{ margin: "12px 0 0", fontSize: 15, color: "var(--text-secondary)" }}>{a.body}</p>
                <div style={{ display: "flex", gap: 24, marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--border-subtle)", fontSize: 13, color: "var(--text-secondary)" }}>
                  <span>Reference {a.ref}</span>
                  <span>Renewed {a.renewed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`.us-accred-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }`}</style>
      </section>

      <section data-screen-label="Brands" style={{ paddingBlock: "0 clamp(56px, 9vw, 96px)" }} className="us-container">
        <div className="us-split-brands">
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: 20 }}>Collaborating For Greater Impact</div>
            <h2 style={{ margin: 0, fontSize: "var(--text-h1)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Our Brands</h2>
            <p style={{ margin: "24px 0 0", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.55 }}>
              Our partnerships with leading brands and industry players enable us to bring added value to our clients. By working with well-known brands, we ensure our solutions are of the highest quality and supported by trusted names in the industry.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))", gap: 12 }}>
            {BRANDS.map((b) => (
              <div key={b.name} style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: 104, padding: "20px 14px", border: `1px solid ${b.bd}`, borderRadius: 12, background: b.bg, fontSize: 14, fontWeight: 800, letterSpacing: "-0.01em", color: b.dark ? "var(--us-white)" : "var(--us-deep-teal)" }}>
                {b.hasLogo ? (
                  <img src={b.logo} alt={b.name} style={{ width: "100%", maxHeight: 56, objectFit: "contain" }} />
                ) : (
                  <span title="Logo pending — known handoff gap">{b.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-screen-label="Clients" style={{ paddingBlock: "0 clamp(56px, 9vw, 96px)" }} className="us-container">
        <div className="us-split-brands">
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: 20 }}>Our Esteemed Client Base</div>
            <h2 style={{ margin: 0, fontSize: "var(--text-h1)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Our Clients</h2>
            <p style={{ margin: "24px 0 0", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.55 }}>
              We take pride in working with clients from various sectors, including residential, commercial, and institutional. Our client-centric approach has fostered long-term partnerships and allowed us to build a reputation for trust and reliability.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))", gap: 12 }}>
            {CLIENTS.map((c) => (
              <div key={c.name} style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 104, padding: "20px 14px", border: "1px solid var(--border-subtle)", borderRadius: 12, background: "var(--us-white)" }}>
                <img src={c.logo} alt={c.name} style={{ width: "100%", maxHeight: 60, objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-screen-label="Partners" style={{ background: "var(--surface-subtle)", paddingBlock: "clamp(56px, 9vw, 96px)" }}>
        <div className="us-container">
          <h2 style={{ margin: 0, fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>Manufacturer Accreditations</h2>
          <p style={{ margin: "16px 0 48px", fontSize: 18, color: "var(--text-secondary)", maxWidth: "56ch" }}>
            We hold accreditations across every discipline we deliver. Individual manufacturer logos and usage rights are being confirmed with each supplier before publication.
          </p>
          <div className="us-partners-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 1, background: "var(--border-strong)", border: "1px solid var(--border-strong)", borderRadius: 20, overflow: "hidden" }}>
            {PARTNERS.map((p) => (
              <div key={p.name} className="us-partner-cell" style={{ background: "var(--surface-page)", padding: "32px 24px", display: "flex", flexDirection: "column", gap: 8, minHeight: 150, transition: "background 200ms var(--ease-standard)" }}>
                <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.01em" }}>{p.name}</div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", flex: 1 }}>{p.scope}</div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-deep-teal)" }}>{p.tier}</div>
              </div>
            ))}
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
          .us-partner-cell:hover { background: var(--surface-mint-wash); }
          @media (max-width: 900px) { .us-partners-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; } }
          @media (max-width: 560px) { .us-partners-grid { grid-template-columns: minmax(0,1fr) !important; } }
        `,
            }}
          />
        </div>
      </section>

      <section data-screen-label="Downloads" style={{ paddingBlock: "clamp(56px, 9vw, 96px) clamp(72px, 12vw, 128px)" }} className="us-container">
        <h2 style={{ margin: 0, fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>Documents And Resources</h2>
        <p style={{ margin: "16px 0 48px", fontSize: 18, color: "var(--text-secondary)", maxWidth: "56ch" }}>
          Capability materials, specification support and compliance paperwork for consultants and main contractors. Request what you need and we will send it directly.
        </p>
        <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
          {DOWNLOADS.map((d) => (
            <div key={d.name} className="us-download-row" style={{ display: "flex", alignItems: "center", gap: 24, paddingBlock: "22px", borderBottom: "1px solid var(--border-subtle)", transition: "background 200ms var(--ease-standard)", flexWrap: "wrap" }}>
              <Icon name="file-text" size={20} color="var(--us-deep-teal)" />
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontSize: 16, fontWeight: 600 }}>{d.name}</div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>{d.desc}</div>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", width: 120, textAlign: "right" }}>{d.meta}</div>
              <Button variant="outline" size="sm" icon="download" href="/contact">{d.action}</Button>
            </div>
          ))}
        </div>
        <style>{`.us-download-row:hover { background: var(--surface-subtle); }`}</style>
      </section>
    </div>
  );
}
