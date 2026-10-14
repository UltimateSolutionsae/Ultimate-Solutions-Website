"use client";
import React from "react";
import { LogoWall } from "../ui/LogoWall.jsx";
import { SegmentedControl } from "../ui/SegmentedControl.jsx";
import { BRANDS, BRAND_CATEGORIES } from "@/lib/data.js";

/**
 * The brand wall with a category filter. Choosing Automation or Audio
 * Visual brings that category's logos into full colour and fades the rest
 * well back, in place -- nothing reflows, so the grid stays calm. Brands
 * are ordered by category in the data, so the selected group lights up as
 * one block rather than scattered tiles.
 */
export function BrandWall() {
  const [cat, setCat] = React.useState("all");
  const current = BRAND_CATEGORIES.find((c) => c.value === cat);
  const count = BRANDS.filter((b) => b.cat === cat).length;

  return (
    <div style={{ minWidth: 0 }}>
      <SegmentedControl
        items={BRAND_CATEGORIES}
        value={cat}
        onChange={setCat}
        ariaLabel="Highlight brands by category"
        style={{ marginBottom: 24 }}
      />
      <p className="us-sr-only" aria-live="polite">
        {cat === "all" ? "Showing all brands." : `${count} ${current.label} brands highlighted.`}
      </p>
      <LogoWall items={BRANDS} label="Brands we work with" active={cat} />
    </div>
  );
}
