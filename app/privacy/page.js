import { Icon } from "@/components/ui/Icon.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { PRIVACY } from "@/lib/data.js";

export const metadata = {
  title: "Privacy Policy | Ultimate Solutions",
  description: "How we collect, use and protect the information behind the automation systems we design, install and support.",
};

export default function PrivacyPage() {
  return (
    <div>
      <section data-screen-label="Privacy header" style={{ background: "linear-gradient(135deg,#042F34 0%,#16232B 100%)", color: "var(--us-white)", position: "relative", overflow: "hidden" }}>
        <div className="us-narrow" style={{ position: "relative", paddingBlock: "clamp(44px, 7vw, 72px) clamp(40px, 6vw, 64px)" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-mint)", marginBottom: 24 }}>Legal</div>
          <h1 style={{ margin: 0, fontSize: "var(--text-display)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.02 }}>Privacy Policy</h1>
          <p style={{ margin: "24px 0 0", fontSize: 18, color: "rgba(255,255,255,0.78)", maxWidth: "56ch" }}>
            How we collect, use and protect the information behind the automation systems we design, install and support.
          </p>
        </div>
      </section>

      <section data-screen-label="Privacy body" style={{ paddingBlock: "clamp(44px, 7vw, 72px) clamp(36px, 5vw, 52px)" }} className="us-narrow">
        <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
          {PRIVACY.map((p) => (
            <div key={p.title} style={{ display: "flex", gap: 24, paddingBlock: "32px", borderBottom: "1px solid var(--border-subtle)", alignItems: "flex-start" }}>
              <div style={{ flex: "none", width: 44, height: 44, borderRadius: 12, background: "var(--surface-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={p.icon} size={20} color="var(--us-deep-teal)" />
              </div>
              <div>
                <h2 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>{p.title}</h2>
                <p style={{ margin: 0, fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.55 }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section data-screen-label="Privacy contact" style={{ paddingBlock: "0 clamp(56px, 9vw, 96px)" }} className="us-narrow">
        <div className="us-panel" style={{ background: "var(--surface-subtle)", border: "1px solid var(--border-subtle)", borderRadius: 20, padding: 40, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>Ultimate Solutions Networking Installation LLC</div>
            <div style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 4 }}>Dubai, United Arab Emirates</div>
          </div>
          <Button variant="primary" size="md" icon="mail" href="/contact">Contact Us</Button>
        </div>
      </section>
    </div>
  );
}
