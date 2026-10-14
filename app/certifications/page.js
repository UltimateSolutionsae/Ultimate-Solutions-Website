import { Icon } from "@/components/ui/Icon.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { LogoWall } from "@/components/ui/LogoWall.jsx";
import { BrandWall } from "@/components/sections/BrandWall.jsx";
import { CLIENTS, PARTNERS, DOWNLOADS } from "@/lib/data.js";

export const metadata = {
  title: "Certifications & Partners — Accredited And Documented | Ultimate Solutions",
  description: "Certification, licensing and manufacturer accreditations for Ultimate Solutions.",
};

export default function CertificationsPage() {
  return (
    <div>
      <section data-screen-label="Certs header" style={{ background: "linear-gradient(135deg,#042F34 0%,#16232B 100%)", color: "var(--us-white)", position: "relative", overflow: "hidden" }}>
        <div className="us-container" style={{ position: "relative", paddingBlock: "clamp(44px, 7vw, 72px)" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-mint)", marginBottom: 24 }}>Certifications And Partners</div>
          <h1 style={{ margin: 0, fontSize: "var(--text-display)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.02, maxWidth: "22ch" }}>Accredited And Documented</h1>
          <p style={{ margin: "24px 0 0", fontSize: 18, color: "rgba(255,255,255,0.78)", maxWidth: "56ch" }}>
            Certification, licensing and manufacturer accreditations.
          </p>
        </div>
      </section>

      <section data-screen-label="Brands" style={{ paddingBlock: "clamp(44px, 7vw, 72px)" }} className="us-container">
        <div className="us-split-brands">
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: 20 }}>Collaborating For Greater Impact</div>
            <h2 style={{ margin: 0, fontSize: "var(--text-h1)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Our Brands</h2>
            <p style={{ margin: "24px 0 0", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.55 }}>
              Our partnerships with leading brands and industry players enable us to bring added value to our clients. By working with well-known brands, we ensure our solutions are of the highest quality and supported by trusted names in the industry.
            </p>
          </div>
          <BrandWall />
        </div>
      </section>

      <section data-screen-label="Clients" style={{ paddingBlock: "0 clamp(44px, 7vw, 72px)" }} className="us-container">
        <div className="us-split-brands">
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: 20 }}>Our Esteemed Client Base</div>
            <h2 style={{ margin: 0, fontSize: "var(--text-h1)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Our Clients</h2>
            <p style={{ margin: "24px 0 0", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.55 }}>
              We take pride in working with clients from various sectors, including residential, commercial, and institutional. Our client-centric approach has fostered long-term partnerships and allowed us to build a reputation for trust and reliability.
            </p>
          </div>
          <LogoWall items={CLIENTS} label="Our clients" />
        </div>
      </section>

      <section data-screen-label="Partners" style={{ background: "var(--surface-subtle)", paddingBlock: "clamp(44px, 7vw, 72px)" }}>
        <div className="us-container">
          <h2 style={{ margin: 0, fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>Manufacturer Accreditations</h2>
          <p style={{ margin: "16px 0 48px", fontSize: 18, color: "var(--text-secondary)", maxWidth: "56ch" }}>
            We hold accreditations across every discipline we deliver.
          </p>
          <div className="us-partners-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 1, background: "var(--border-strong)", border: "1px solid var(--border-strong)", borderRadius: 20, overflow: "hidden" }}>
            {PARTNERS.map((p) => (
              <div key={p.name} className="us-partner-cell us-row-hover" style={{ background: "var(--surface-page)", padding: "32px 24px", display: "flex", flexDirection: "column", gap: 8, minHeight: 150 }}>
                <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.01em" }}>{p.name}</div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", flex: 1 }}>{p.scope}</div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-deep-teal)" }}>{p.tier}</div>
              </div>
            ))}
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
          @media (max-width: 900px) { .us-partners-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; } }
          @media (max-width: 560px) { .us-partners-grid { grid-template-columns: minmax(0,1fr) !important; } }
        `,
            }}
          />
        </div>
      </section>

      <section data-screen-label="Downloads" style={{ paddingBlock: "clamp(44px, 7vw, 72px) clamp(56px, 9vw, 96px)" }} className="us-container">
        <h2 style={{ margin: 0, fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>Documents And Resources</h2>
        <p style={{ margin: "16px 0 48px", fontSize: 18, color: "var(--text-secondary)", maxWidth: "56ch" }}>
          Capability materials, specification support and compliance paperwork for consultants and main contractors. Request what you need and we will send it directly.
        </p>
        <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
          {DOWNLOADS.map((d) => (
            <div key={d.name} className="us-row-hover" style={{ display: "flex", alignItems: "center", gap: 24, paddingBlock: "22px", borderBottom: "1px solid var(--border-subtle)", flexWrap: "wrap" }}>
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
      </section>
    </div>
  );
}
