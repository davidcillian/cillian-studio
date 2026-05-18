import type React from "react"

export default function BrandLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#f0eee9",
        color: "#1a1612",
        minHeight: "100vh",
        fontFamily: 'var(--font-sans, "Inter Tight", -apple-system, sans-serif)',
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {children}
    </div>
  )
}
