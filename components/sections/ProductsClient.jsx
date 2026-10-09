"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Tabs } from "../ui/Tabs.jsx";
import { Icon } from "../ui/Icon.jsx";
import { Button } from "../ui/Button.jsx";
import { FaqAccordion } from "../ui/FaqAccordion.jsx";
import { Reveal } from "../ui/Reveal.jsx";
import { COPY, CATS, getCategory } from "@/lib/data.js";
import { T } from "@/lib/motion.js";

// Same photos used for the home page's "Six Disciplines" tiles.
const CATEGORY_HERO = {
  control: "/disciplines/control.jpg",
  entertainment: "/disciplines/entertainment.jpg",
  security: "/disciplines/security.jpg",
  communications: "/disciplines/communications.png",
  lighting: "/lighting-ceiling.jpg",
  connectivity: "/disciplines/connectivity.png",
};

export function ProductsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initial = searchParams.get("category") || CATS[0].id;
  const [category, setCategory] = React.useState(CATS.some((c) => c.id === initial) ? initial : CATS[0].id);

  React.useEffect(() => {
    const q = searchParams.get("category");
    if (q && CATS.some((c) => c.id === q) && q !== category) setCategory(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const cat = getCategory(category);
  const heroSrc = CATEGORY_HERO[cat.id] || null;

  const onChange = (v) => {
    setCategory(v);
    router.push(`/products?category=${v}`, { scroll: false });
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div>
      <section data-screen-label="Products header" style={{ background: "linear-gradient(135deg,#042F34 0%,#16232B 100%)", color: "var(--us-white)", position: "relative", overflow: "hidden" }}>
        <div className="us-container" style={{ position: "relative", paddingBlock: "clamp(44px, 7vw, 72px) clamp(36px, 5vw, 52px)" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--us-mint)", marginBottom: 24 }}>Products</div>
          <h1 style={{ margin: 0, fontSize: "var(--text-display)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.02, maxWidth: "20ch" }}>{COPY.prodTitle}</h1>
          <p style={{ margin: "24px 0 0", fontSize: 18, color: "rgba(255,255,255,0.78)", maxWidth: "56ch" }}>{COPY.prodLead}</p>
        </div>
      </section>

      <div style={{ position: "sticky", top: 76, zIndex: 40, background: "var(--surface-page)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="us-container">
          <div className="us-scroll-x" style={{ paddingBlock: "20px" }}>
            <Tabs items={CATS.map((c) => ({ value: c.id, label: c.label }))} value={category} variant="pill" onChange={onChange} style={{ flexWrap: "nowrap" }} />
          </div>
        </div>
      </div>

      <section data-screen-label="Category detail" style={{ paddingBlock: "clamp(40px, 6vw, 64px) 0" }} className="us-container">
        <AnimatePresence mode="wait">
        <motion.div
          key={cat.id}
          className="us-split-16-1"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0, transition: T.ui }}
          exit={{ opacity: 0, y: -14, transition: T.exit }}
        >
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0, flexWrap: "wrap" }}>
              <Icon name={cat.icon} size={26} color="var(--us-deep-teal)" />
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)" }}>{cat.eyebrow}</div>
            </div>
            <h2 style={{ margin: "20px 0 0", fontSize: "var(--text-h1)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: "22ch" }}>{cat.title}</h2>
            <p style={{ margin: "24px 0 0", fontSize: 18, color: "var(--text-secondary)" }}>{cat.lead}</p>

            <div style={{ position: "relative", height: 400, borderRadius: 20, overflow: "hidden", border: "1px solid var(--border-subtle)", margin: "48px 0", minWidth: 0 }}>
              {heroSrc ? (
                <img src={heroSrc} alt={cat.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div style={{ width: "100%", height: "100%", background: "var(--us-pale-blue-gray-deep)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
                  <span style={{ fontSize: 13, color: "var(--text-secondary)", textAlign: "center" }}>Category photograph — cool, architectural, evening light</span>
                </div>
              )}
            </div>

            <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>{cat.h1}</h3>
            <p style={{ margin: "14px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>{cat.p1}</p>
            <h3 style={{ margin: "40px 0 0", fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>{cat.h2}</h3>
            <p style={{ margin: "14px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>{cat.p2}</p>
            <h3 style={{ margin: "40px 0 0", fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>{cat.h3}</h3>
            <p style={{ margin: "14px 0 0", fontSize: 16, color: "var(--text-secondary)" }}>{cat.p3}</p>

            <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--border-subtle)" }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: 24 }}>What Is Delivered</div>
              <div className="us-grid-2">
                {cat.delivers.map((d) => (
                  <div key={d} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <Icon name="check" size={18} color="var(--us-deep-teal)" />
                    <span style={{ fontSize: 15 }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside style={{ position: "sticky", top: 170, display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 20, padding: 32, boxShadow: "var(--shadow-sm)" }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-secondary)" }}>Specification</div>
              <div style={{ marginTop: 20 }}>
                {cat.specs.map((s) => (
                  <div key={s.k} style={{ display: "flex", justifyContent: "space-between", gap: 16, paddingBlock: "11px", borderBottom: "1px solid var(--border-subtle)", fontSize: 14 }}>
                    <span style={{ color: "var(--text-secondary)" }}>{s.k}</span>
                    <span style={{ fontWeight: 600, textAlign: "right" }}>{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "var(--surface-mint)", borderRadius: 20, padding: 32 }}>
              <h4 style={{ margin: 0, fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--us-deep-teal)" }}>{COPY.asideTitle}</h4>
              <p style={{ margin: "12px 0 24px", fontSize: 14, color: "var(--us-deep-teal)", opacity: 0.8 }}>{COPY.asideLead}</p>
              <Button variant="primary" size="sm" icon="arrow-right" fullWidth href="/contact">{COPY.cta}</Button>
            </div>
          </aside>
        </motion.div>
        </AnimatePresence>
      </section>

      <section data-screen-label="Category FAQ" style={{ paddingBlock: "clamp(44px, 7vw, 72px) clamp(56px, 9vw, 96px)" }} className="us-narrow">
        <h2 style={{ margin: "0 0 40px", fontSize: "var(--text-h2)", fontWeight: 800, letterSpacing: "-0.02em" }}>Questions We Are Asked About {cat.label}</h2>
        <FaqAccordion items={cat.faqs} key={cat.id} />
      </section>
    </div>
  );
}
