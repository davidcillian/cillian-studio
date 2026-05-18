export function KintsugiTick({ size = 10 }: { size?: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size,
        height: size,
        background: "var(--signal)",
        transform: "rotate(45deg)",
        flexShrink: 0,
      }}
    />
  )
}
