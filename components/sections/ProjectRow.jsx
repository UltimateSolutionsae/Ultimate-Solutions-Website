import React from "react";
import Link from "next/link";

/**
 * One project as a full row: a large photograph on one side, the details on
 * the other, swapping sides on alternate rows so a list reads as a
 * sequence rather than a grid. Every project gets equal weight and a
 * proper image, and there is no half-empty last row to fall into.
 *
 * The whole row is the link. Its photo takes the shared slow zoom on hover
 * (`.us-card:hover .us-card-media img` in tokens.css) and the "View
 * project" arrow nudges forward.
 */
export function ProjectRow({ project, index, reverse }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <Link href={`/projects/${project.id}`} className={"us-bare us-card us-prow" + (reverse ? " is-rev" : "")}>
      <div className="us-card-media us-prow-ph">
        <img src={project.img} alt={project.name} loading="lazy" />
      </div>
      <div className="us-prow-text">
        <div className="us-prow-meta">{n} · {project.type} · {project.year}</div>
        <h3 className="us-prow-name">{project.name}</h3>
        <p className="us-prow-sum">{project.summary}</p>
        <span className="us-prow-go">View project <span aria-hidden="true" className="us-prow-arrow">→</span></span>
      </div>
    </Link>
  );
}
