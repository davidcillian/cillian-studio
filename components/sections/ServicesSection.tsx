"use client"

import { Box, Brain, Gamepad2, GraduationCap } from "lucide-react"
import { services } from "@/lib/data"

const iconMap = {
  Box,
  Brain,
  Gamepad2,
  GraduationCap,
} as const

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
}

export function ServicesSection() {
  return (
    <section id="services" style={{ background: "var(--bg)" }}>
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
            § 02 — Disziplinen
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
              Drei Disziplinen.{" "}
              <span style={{ fontWeight: 300, color: "var(--ink-4)" }}>Ein Ansatz.</span>
            </h2>
            <p
              style={{
                maxWidth: "60ch",
                color: "var(--ink-2)",
                marginTop: 18,
                fontSize: 16,
                lineHeight: 1.55,
              }}
            >
              Kein generisches Full-Service-Studio — jedes unserer Felder ist ein eigenes
              Handwerk, das wir auf Master-Niveau ausüben.
            </p>
          </div>
        </div>

        {/* Services grid — no cards, only hairlines */}
        <div
          className="engawa services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            borderTop: "1px solid var(--line)",
            borderLeft: "1px solid var(--line)",
          }}
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            const isFirst = i === 0

            return (
              <div
                key={service.id}
                style={{
                  padding: "clamp(32px, 4vw, 56px)",
                  background: isFirst ? "var(--bg-deep)" : i === 3 ? `color-mix(in srgb, var(--bg-3) 88%, var(--reserve-matcha))` : "var(--bg-3)",
                  borderRight: "1px solid var(--line)",
                  borderBottom: "1px solid var(--line)",
                  position: "relative",
                }}
              >
                {/* Icon */}
                <div style={{ marginBottom: 24 }}>
                  <Icon
                    size={24}
                    style={{ color: isFirst ? "var(--ink-4)" : "var(--ink-3)" }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "clamp(22px, 2.5vw, 28px)",
                    fontWeight: 500,
                    letterSpacing: "-.025em",
                    color: "var(--ink)",
                    lineHeight: 1.1,
                    marginBottom: 14,
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "var(--ink-2)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    marginBottom: 28,
                  }}
                >
                  {service.description}
                </p>

                {/* Features — mono bullet list */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {service.features.map((feature, fi) => (
                    <li
                      key={fi}
                      style={{
                        padding: "9px 0",
                        borderTop: "1px solid var(--line)",
                        color: "var(--ink-2)",
                        fontSize: 13,
                        fontFamily: "var(--mono)",
                        letterSpacing: ".02em",
                      }}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
