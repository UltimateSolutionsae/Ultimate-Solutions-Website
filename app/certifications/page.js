import { LogoWall } from "@/components/ui/LogoWall.jsx";
import { BrandWall } from "@/components/sections/BrandWall.jsx";
import { CLIENTS } from "@/lib/data.js";

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
    </div>
  );
}
