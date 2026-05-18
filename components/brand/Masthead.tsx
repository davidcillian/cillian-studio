import type React from "react"
import { KintsugiTick } from "./KintsugiTick"

interface MastheadProps {
  sectionTag: string   // e.g. "§ 01 — Studio"
  title: React.ReactNode
  description?: string
  style?: React.CSSProperties
}

export function Masthead({ sectionTag, title, description, style }: MastheadProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        gap: "clamp(24px, 3vw, 48px)",
        alignItems: "start",
        marginBottom: "clamp(48px, 6vw, 80px)",
        ...style,
      }}
    >
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          color: "var(--ink-3)",
          textTransform: "uppercase",
          letterSpacing: ".08em",
          paddingTop: 6,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <KintsugiTick size={8} />
        {sectionTag}
      </div>
      <div>
        <h2
          style={{
            fontFamily: "var(--sans)",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 500,
            lineHeight: 1.0,
            letterSpacing: "-.025em",
            color: "var(--ink)",
            margin: 0,
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            style={{
              color: "var(--ink-2)",
              fontSize: 16,
              lineHeight: 1.55,
              maxWidth: "60ch",
              marginTop: 18,
              marginBottom: 0,
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
