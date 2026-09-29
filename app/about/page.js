import { Icon } from "@/components/ui/Icon.jsx";
import { Badge } from "@/components/ui/Badge.jsx";
import { StatCard } from "@/components/ui/StatCard.jsx";
import { FaqAccordion } from "@/components/ui/FaqAccordion.jsx";
import { Reveal } from "@/components/ui/Reveal.jsx";
import { TIMELINE, AWARDS, PRESS, ABOUT_FAQS } from "@/lib/data.js";

export const metadata = {
  title: "About — Our Founding Story | Ultimate Solutions",
  description: "Ultimate Solutions was born in Dubai in 2007, at a time when smart home technology was still an emerging concept.",
};

export default function AboutPage() {
  return (
    <div>
      <section data-screen-label="About header" style={{ paddingBlock: "clamp(44px, 7vw, 72px) clamp(36px, 5vw, 52px)" }} className="us-container">
        <div className="us-split-13-1">
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: 24 }}>About</div>
            <h1 style={{ margin: 0, fontSize: "var(--text-display)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.02, maxWidth: "20ch" }}>Our Founding Story</h1>
          </div>
          <p style={{ margin: 0, fontSize: 18, color: "var(--text-secondary)" }}>
            Ultimate Solutions was born in Dubai in 2007, at a time when smart home technology was still an emerging concept.
          </p>
        </div>
      </section>

      <section data-screen-label="About intro" style={{ paddingBlock: "0 clamp(44px, 7vw, 72px)" }} className="us-container">
        <div style={{ position: "relative", height: 480, borderRadius: 28, overflow: "hidden", border: "1px solid var(--border-subtle)" }}>
          <img src="/about/team-on-site.png" alt="The Ultimate Solutions team on site" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="us-grid-2" style={{ marginTop: 80 }}>
          <div>
            <h2 style={{ margin: 0, fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>Where It Began</h2>
            <p style={{ margin: "16px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>
              The story began two years earlier, following our founder's graduation Summa Cum Laude with Honors from San Diego State University in 2005. While assisting with the sales of Le Rêve, one of Dubai Marina's most distinguished residential developments, he became increasingly drawn to the technology being introduced into the show apartments.
            </p>
            <p style={{ margin: "14px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>
              In his spare time, he began programming the smart systems within those apartments. What began as an interest quickly became a passion, not simply for the technology itself, but for the possibilities it created when thoughtfully integrated into the way people live.
            </p>
            <p style={{ margin: "14px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>
              At the time, much of the industry was focused on installing technology rather than truly integrating it. Systems were often selected around their capabilities, without sufficient consideration for the architecture, the interiors, or the individual needs of the homeowner. This presented an opportunity to do things differently.
            </p>
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>What We Set Out To Do</h2>
            <p style={{ margin: "16px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>
              In 2007, Ultimate Solutions was founded on the belief that technology should adapt to the individual, not the other way around. From the outset, our approach has been to bring together technology, design and craftsmanship to create intelligent environments that are intuitive, discreet and deeply personal.
            </p>
            <p style={{ margin: "14px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>
              Ease of use has always been fundamental to this philosophy. We believe that sophisticated technology should never require a sophisticated user. The interface should feel natural, intuitive and effortless, allowing homeowners to control and interact with their environment without having to think about the technology behind it.
            </p>
            <p style={{ margin: "14px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>
              Today, Ultimate Solutions continues to create highly integrated residential environments where automation, entertainment and technology become an effortless part of the architecture, and of the way our clients live.
            </p>
          </div>
        </div>
      </section>

      <section data-screen-label="Timeline" style={{ background: "var(--surface-subtle)", paddingBlock: "clamp(56px, 9vw, 96px)" }}>
        <div className="us-container">
          <h2 style={{ margin: "0 0 24px", fontSize: "var(--text-h1)", fontWeight: 800, letterSpacing: "-0.02em", maxWidth: "20ch" }}>Milestones, 2005 To 2025</h2>
          <p style={{ margin: "0 0 64px", fontSize: 18, color: "var(--text-secondary)", maxWidth: "75ch" }}>
            For more than two decades, Ultimate Solutions has grown and evolved alongside Dubai. From the early days of luxury residential development and emerging smart-home technology to today's sophisticated, connected and intelligent living environments, our founding principle has remained the same: technology should adapt to the individual, remain effortless to use, and enhance the experience of the space rather than compete with it.
          </p>
          <div style={{ borderTop: "1px solid var(--border-strong)" }}>
            {TIMELINE.map((t) => (
              <div key={t.year} className="us-timeline-row us-timeline-hover" style={{ paddingBlock: "32px", borderBottom: "1px solid var(--border-strong)", alignItems: "start", transition: "background 200ms var(--ease-standard)" }}>
                <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--us-deep-teal)" }}>{t.year}</div>
                <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.25 }}>{t.title}</h3>
                <p style={{ margin: 0, fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.55, whiteSpace: "pre-line" }}>{t.body}</p>
              </div>
            ))}
          </div>
          <style>{`.us-timeline-hover:hover { background: rgba(255,255,255,0.55); }`}</style>
        </div>
      </section>

      <section data-screen-label="Awards" style={{ paddingBlock: "clamp(44px, 7vw, 72px) clamp(56px, 9vw, 96px)" }} className="us-container">
        <h2 style={{ margin: "0 0 48px", fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>Awards And Nominations</h2>
        <div className="us-grid-4">
          {AWARDS.map((a) => (
            <div key={a.year + a.title} style={{ border: "1px solid var(--border-subtle)", borderRadius: 20, padding: 28, background: "var(--us-white)", boxShadow: "var(--shadow-sm)", minWidth: 0 }}>
              <Icon name="award" size={24} color="var(--us-deep-teal)" />
              <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--us-deep-teal)", marginTop: 20 }}>{a.year}</div>
              <h3 style={{ margin: "8px 0 0", fontSize: 16, fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1.3 }}>{a.title}</h3>
              <div style={{ marginTop: 16 }}>
                <Badge tone="mint">{a.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section data-screen-label="About stats" style={{ paddingBlock: "clamp(56px, 9vw, 96px)" }} className="us-container">
        <div className="us-grid-2">
          <StatCard value="2007" label="Founded In Dubai" caption="At a time when smart home technology was still emerging." icon="network" treatment="ruled" size="sm" tone="dark" />
          <StatCard value="2005" label="Where It Started" caption="Summa Cum Laude, San Diego State University." icon="shield-check" treatment="ruled" size="sm" tone="mint" />
        </div>
      </section>

      <section data-screen-label="About FAQ" style={{ paddingBlock: "0 clamp(56px, 9vw, 96px)" }} className="us-narrow">
        <h2 style={{ margin: "0 0 40px", fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>Working With Us</h2>
        <FaqAccordion items={ABOUT_FAQS} />
      </section>

      <section data-screen-label="About press" style={{ background: "var(--surface-subtle)", paddingBlock: "clamp(44px, 7vw, 72px) clamp(56px, 9vw, 96px)" }}>
        <div className="us-container">
          <h2 style={{ margin: 0, fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>Press And Publications</h2>
          <p style={{ margin: "16px 0 48px", fontSize: 18, color: "var(--text-secondary)", maxWidth: "56ch" }}>
            Coverage of our projects and of our founder, Jana Malhas, across the KNX and custom-installation trade press.
          </p>
          <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
            {PRESS.map((p) => (
              <a key={p.title} href={p.url} target="_blank" rel="noopener" className="us-bare us-press-row" style={{ display: "flex", alignItems: "center", gap: 24, paddingBlock: "22px", borderBottom: "1px solid var(--border-subtle)", transition: "background 200ms var(--ease-standard)", textDecoration: "none", color: "inherit" }}>
                <Icon name="file-text" size={20} color="var(--us-deep-teal)" />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>{p.outlet}{p.date}</div>
                </div>
                <Icon name="arrow-up-right" size={20} color="var(--text-secondary)" />
              </a>
            ))}
          </div>
          <style>{`.us-press-row:hover { background: rgba(255,255,255,0.6); }`}</style>
        </div>
      </section>
    </div>
  );
}
