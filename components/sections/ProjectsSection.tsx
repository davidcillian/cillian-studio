"use client"

import { useState } from "react"
import Image from "next/image"
import { recentProjects } from "@/lib/data"

const S = {
  section: {
    padding: "96px max(32px, 4vw)",
    borderTop: "1px solid var(--line)",
    maxWidth: 1600,
    margin: "0 auto",
  } as React.CSSProperties,
  kicker: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    letterSpacing: ".08em",
    textTransform: "uppercase" as const,
    color: "var(--ink-3)",
    marginBottom: 14,
  },
  tate: {
    writingMode: "vertical-rl" as const,
    fontFamily: "var(--mono)",
    fontSize: 10,
    color: "var(--ink-3)",
    letterSpacing: ".22em",
    textTransform: "uppercase" as const,
    lineHeight: 1,
    paddingTop: 4,
    userSelect: "none" as const,
  },
}

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? recentProjects : recentProjects.slice(0, 3)

  return (
    <section id="projects" style={{ background: "var(--bg-2)" }}>
      <div style={S.section} className="sec-inner">
        {/* Section header */}
        <div
          className="sec-head"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
            gap: 48,
            alignItems: "baseline",
            marginBottom: 64,
          }}
        >
          <div style={{ ...S.kicker, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ display: "inline-block", width: 8, height: 8, background: "var(--signal)", transform: "rotate(45deg)", flexShrink: 0 }} />
            § 03 — Arbeiten
          </div>
          <div>
            <h2
              style={{
                fontFamily: "var(--sans)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 500,
                letterSpacing: "-.025em",
                lineHeight: 1,
                color: "var(--ink)",
              }}
            >
              Ausgewählte{" "}
              <span style={{ fontWeight: 300, color: "var(--ink-4)" }}>Projekte.</span>
            </h2>
          </div>
        </div>

        {/* Projects list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {visible.map((project, i) => {
            const imageLeft = i % 2 === 0
            const firstImage = project.images?.[0]

            return (
              <div
                key={project.id}
                className="mob-stack"
                style={{
                  display: "grid",
                  gridTemplateColumns: "24px 1fr",
                  gap: 32,
                  borderTop: "1px solid var(--line)",
                  paddingTop: 48,
                  paddingBottom: 48,
                }}
              >
                {/* Tate-Folio */}
                <div style={S.tate} className="tate-hide">
                  {String(i + 1).padStart(2, "0")} — {project.projectTitle.split(" ")[0]}
                </div>

                {/* Content */}
                <div
                  className="mob-stack"
                  style={{
                    display: "grid",
                    gridTemplateColumns: imageLeft ? "1.1fr 1fr" : "1fr 1.1fr",
                    gap: "clamp(24px, 4vw, 64px)",
                    alignItems: "center",
                  }}
                >
                  {imageLeft ? (
                    <>
                      <ProjectImage src={firstImage} alt={project.projectTitle} />
                      <ProjectMeta project={project} />
                    </>
                  ) : (
                    <>
                      <ProjectMeta project={project} />
                      <ProjectImage src={firstImage} alt={project.projectTitle} className="mob-first" />
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Show more */}
        {recentProjects.length > 3 && (
          <div
            style={{
              borderTop: "1px solid var(--line)",
              paddingTop: 32,
              marginTop: 32,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                padding: "12px 40px",
                background: "transparent",
                color: "var(--ink-3)",
                fontSize: 11,
                fontFamily: "var(--mono)",
                letterSpacing: ".08em",
                textTransform: "uppercase",
                border: "1px solid var(--line-2)",
                cursor: "pointer",
                transition: "border-color .2s, color .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--ink-3)"
                e.currentTarget.style.color = "var(--ink)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line-2)"
                e.currentTarget.style.color = "var(--ink-3)"
              }}
            >
              {showAll ? "Weniger anzeigen" : "Alle Projekte"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectImage({ src, alt, className }: { src?: string; alt: string; className?: string }) {
  if (!src) return null
  return (
    <div
      className={className}
      style={{
        position: "relative",
        aspectRatio: "16/10",
        background: "var(--bg-2)",
        overflow: "hidden",
      }}
    >
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
  )
}

function ProjectMeta({ project }: { project: (typeof recentProjects)[0] }) {
  return (
    <div>
      {/* Role / Type */}
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          color: "var(--ink-3)",
          letterSpacing: ".08em",
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        {project.projectType}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "clamp(24px, 3vw, 40px)",
          fontWeight: 500,
          letterSpacing: "-.025em",
          color: "var(--ink)",
          lineHeight: 1.05,
          marginBottom: 16,
        }}
      >
        {project.projectTitle}
      </h3>

      {/* Description */}
      <p
        style={{
          color: "var(--ink-2)",
          fontSize: 14,
          lineHeight: 1.65,
          marginBottom: 28,
        }}
      >
        {project.description}
      </p>

      {/* Key / Value pairs */}
      <dl style={{ margin: 0, padding: 0 }}>
        {[
          { label: "Jahr", value: project.completionDate },
          { label: "Team", value: project.teamSize },
          {
            label: "Tools",
            value: project.technologies.slice(0, 4).join(" · "),
          },
        ].map(({ label, value }) => (
          <div
            key={label}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              gap: 16,
              padding: "10px 0",
              borderTop: "1px solid var(--line)",
            }}
          >
            <dt
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                color: "var(--ink-3)",
                letterSpacing: ".08em",
                textTransform: "uppercase",
                alignSelf: "baseline",
                paddingTop: 2,
              }}
            >
              {label}
            </dt>
            <dd
              style={{
                fontSize: 13,
                color: "var(--ink-2)",
                margin: 0,
              }}
            >
              {value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Artists */}
      {project.artists && project.artists.length > 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 20,
            paddingTop: 20,
            borderTop: "1px solid var(--line)",
          }}
        >
          <div style={{ display: "flex" }}>
            {project.artists.map((artist, i) => (
              <div
                key={i}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid var(--bg)",
                  position: "relative",
                  marginLeft: i > 0 ? -8 : 0,
                }}
              >
                <Image src={artist.image} alt={artist.name} fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--ink-3)",
              letterSpacing: ".04em",
            }}
          >
            {project.artists.map((a) => a.name).join(" · ")}
          </span>
        </div>
      )}

      {/* Product link */}
      {project.productLink && (
        <a
          href={project.productLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginTop: 20,
            padding: "10px 20px",
            background: "transparent",
            color: "var(--ink-2)",
            fontSize: 11,
            fontFamily: "var(--mono)",
            letterSpacing: ".08em",
            textTransform: "uppercase",
            border: "1px solid var(--line-2)",
            textDecoration: "none",
            transition: "border-color .2s, color .2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--ink-3)"
            e.currentTarget.style.color = "var(--ink)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--line-2)"
            e.currentTarget.style.color = "var(--ink-2)"
          }}
        >
          Zum Produkt →
        </a>
      )}
    </div>
  )
}
