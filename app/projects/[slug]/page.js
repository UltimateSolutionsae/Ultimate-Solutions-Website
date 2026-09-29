import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/ui/Icon.jsx";
import { ProjectGallery } from "@/components/sections/ProjectGallery.jsx";
import { PROJECTS, getProject, getProjectDetail, getGallery, PROJECT_DETAILS, PROJECT_GALLERIES } from "@/lib/data.js";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }) {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: `${p.name}, ${p.year} | Ultimate Solutions`,
    description: p.summary,
  };
}

export default function ProjectCaseStudyPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const detail = getProjectDetail(project.id);
  const gallery = getGallery(project.id);
  const isKnownDetail = !!PROJECT_DETAILS[project.id];
  const hasRealGallery = !!PROJECT_GALLERIES[project.id];

  const facts = [
    { k: "Location", v: project.year },
    { k: "Type", v: project.type },
    { k: "Control", v: isKnownDetail ? "Full KNX" : "All six" },
    { k: "Units", v: isKnownDetail ? "5,000 & 10,000 sqft" : "On request" },
    { k: "Systems", v: project.cats },
  ];
  const specs = [{ k: "Type", v: project.type }, { k: "Location", v: project.year }, ...detail.specs];

  return (
    <div>
      <section data-screen-label="Case study hero" style={{ position: "relative", height: 620, overflow: "hidden" }}>
        <img src={project.img} alt={project.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(4,47,52,0.94) 0%, rgba(4,47,52,0.4) 50%, rgba(4,47,52,0.15) 100%)", pointerEvents: "none" }} />

        <div className="us-container" style={{ position: "absolute", top: 0, left: 0, right: 0, paddingTop: "clamp(20px, 4vw, 28px)" }}>
          <Link
            href="/projects"
            className="us-bare us-back-btn us-tap"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 20px 10px 16px", borderRadius: 9999,
              background: "var(--scrim-flat)", backdropFilter: "var(--blur-panel)", WebkitBackdropFilter: "var(--blur-panel)",
              border: "1px solid rgba(255,255,255,0.28)",
              fontFamily: "var(--font-core)", fontSize: 14, fontWeight: 600, color: "var(--us-white)",
              transition: "background 200ms var(--ease-standard), transform 200ms var(--ease-standard)",
            }}
          >
            <Icon name="chevron-left" size={16} color="var(--us-white)" />
            All Projects
          </Link>
        </div>

        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
          <div className="us-container" style={{ paddingBlock: "0 clamp(36px, 5vw, 52px)", color: "var(--us-white)" }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-mint)", marginBottom: 20 }}>
              Case Study · {project.type}
            </div>
            <h1 style={{ margin: 0, fontSize: "var(--text-display)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.02 }}>{project.name}, {project.year}</h1>
            <p style={{ margin: "20px 0 0", fontSize: 18, color: "rgba(255,255,255,0.82)", maxWidth: "60ch" }}>{project.summary}</p>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
        .us-back-btn:hover { background: rgba(4,47,52,0.8); transform: translateY(-2px); }
        .us-back-btn:active { transform: translateY(0) scale(0.97); }
      `,
          }}
        />
      </section>

      <section data-screen-label="Case study facts" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="us-container us-grid-5" style={{ paddingBlock: "48px" }}>
          {facts.map((f) => (
            <div key={f.k}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)" }}>{f.k}</div>
              <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", marginTop: 10 }}>{f.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section data-screen-label="Case study body" style={{ paddingBlock: "clamp(44px, 7vw, 72px) clamp(36px, 5vw, 52px)" }} className="us-container">
        <div className="us-split-16-1">
          <div style={{ minWidth: 0 }}>
            <h2 style={{ margin: 0, fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>Scope Delivered</h2>
            <div className="us-grid-2" style={{ marginTop: 24 }}>
              {detail.delivers.map((d) => (
                <div key={d} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <Icon name="check" size={18} color="var(--us-deep-teal)" />
                  <span style={{ fontSize: 15 }}>{d}</span>
                </div>
              ))}
            </div>

            <h2 style={{ margin: "48px 0 0", fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>Background</h2>
            <p style={{ margin: "16px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>{detail.background}</p>

            <h2 style={{ margin: "40px 0 0", fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>{detail.secondTitle}</h2>
            <p style={{ margin: "16px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>{detail.secondBody}</p>
          </div>

          <aside style={{ position: "sticky", top: 108, display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 20, padding: 32, boxShadow: "var(--shadow-sm)" }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)" }}>Project Summary</div>
              <div style={{ marginTop: 20 }}>
                {specs.map((s, i) => (
                  <div key={s.k + i} style={{ display: "flex", justifyContent: "space-between", gap: 16, paddingBlock: "11px", borderBottom: "1px solid var(--border-subtle)", fontSize: 14 }}>
                    <span style={{ color: "var(--text-secondary)" }}>{s.k}</span>
                    <span style={{ fontWeight: 600, textAlign: "right" }}>{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section data-screen-label="Case study gallery" style={{ paddingBlock: "0 clamp(56px, 9vw, 96px)" }} className="us-container">
        <ProjectGallery items={gallery} />
        {!hasRealGallery && (
          <p style={{ marginTop: 16, fontSize: 13, color: "var(--text-secondary)" }}>
            Gallery photography for this project is a placeholder pending final asset sourcing.
          </p>
        )}
      </section>
    </div>
  );
}
