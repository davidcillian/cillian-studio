import type React from "react"

interface TateFolioProps {
  label: string
  style?: React.CSSProperties
}

export function TateFolio({ label, style }: TateFolioProps) {
  return (
    <div
      style={{
        writingMode: "vertical-rl",
        fontFamily: "var(--mono)",
        fontSize: 10,
        color: "var(--ink-3)",
        letterSpacing: ".22em",
        textTransform: "uppercase",
        userSelect: "none",
        flexShrink: 0,
        ...style,
      }}
    >
      {label}
    </div>
  )
}
