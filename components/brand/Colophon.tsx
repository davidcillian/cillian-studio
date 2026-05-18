import { KintsugiTick } from "./KintsugiTick"

interface ColophonProps {
  version?: string
  year?: number
}

export function Colophon({ version = "v1.0", year = 2025 }: ColophonProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        fontFamily: "var(--mono)",
        fontSize: 10,
        color: "var(--ink-3)",
        textTransform: "uppercase",
        letterSpacing: ".1em",
      }}
    >
      <KintsugiTick size={8} />
      <span>Cillian Studio</span>
      <span style={{ color: "var(--line-2)" }}>·</span>
      <span>Wien</span>
      <span style={{ color: "var(--line-2)" }}>·</span>
      <span>{version}</span>
      <span style={{ color: "var(--line-2)" }}>·</span>
      <span>© {year}</span>
    </div>
  )
}
