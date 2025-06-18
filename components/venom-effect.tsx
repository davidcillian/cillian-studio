"use client"

import { useEffect, useRef } from "react"

interface VenomEffectProps {
  isActive: boolean
  leftBlockPosition: number
  rightBlockPosition: number
}

export default function VenomEffect({ isActive, leftBlockPosition, rightBlockPosition }: VenomEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    // Mobile detection - disable venom effect on mobile for better performance
    const isMobile = window.innerWidth <= 768
    if (isMobile) {
      return // Exit early on mobile devices
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to cover the full area
    canvas.width = 800
    canvas.height = 400

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Immer rendern, aber Intensität basierend auf isActive anpassen
      const intensity = isActive ? 1 : 0.3 // Reduzierte Intensität wenn nicht aktiv
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const time = Date.now() / 1000

      // Draw central venom core mit angepasster Intensität
      const coreRadius = (15 + Math.sin(time * 3) * 3) * intensity
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, coreRadius)
      coreGradient.addColorStop(0, `rgba(255, 255, 255, ${0.9 * intensity})`)
      coreGradient.addColorStop(0.5, `rgba(220, 220, 220, ${0.7 * intensity})`)
      coreGradient.addColorStop(1, `rgba(180, 180, 180, ${0.3 * intensity})`)

      if (coreRadius > 0) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2)
        ctx.fillStyle = coreGradient
        ctx.fill()
      }

      // Draw symmetrical venom tentacles mit angepasster Intensität
      const leftTargetX = 100
      const rightTargetX = canvas.width - 100
      const targetY = centerY

      // Create mirrored tentacle patterns
      for (let i = 0; i < 5; i++) {
        const tentacleOffset = (i - 2) * 20
        const waveAmplitude = (15 + Math.sin(time * 2 + i) * 10) * intensity
        const waveFrequency = 0.02

        // Left tentacles
        ctx.beginPath()
        ctx.moveTo(centerX, centerY + tentacleOffset)

        for (let x = centerX; x >= leftTargetX; x -= 5) {
          const progress = (centerX - x) / (centerX - leftTargetX)
          const waveY =
            centerY + tentacleOffset + Math.sin(x * waveFrequency + time * 3 + i) * waveAmplitude * (1 - progress * 0.5)

          ctx.lineTo(x, waveY)
        }

        const leftGradient = ctx.createLinearGradient(centerX, centerY, leftTargetX, targetY)
        leftGradient.addColorStop(0, `rgba(255, 255, 255, ${(0.8 - i * 0.1) * intensity})`)
        leftGradient.addColorStop(0.5, `rgba(230, 230, 230, ${(0.6 - i * 0.1) * intensity})`)
        leftGradient.addColorStop(1, `rgba(200, 200, 200, ${(0.4 - i * 0.1) * intensity})`)

        ctx.strokeStyle = leftGradient
        ctx.lineWidth = (8 - i) * intensity
        ctx.lineCap = "round"
        if (intensity > 0.1) ctx.stroke()

        // Right tentacles (mirrored)
        ctx.beginPath()
        ctx.moveTo(centerX, centerY + tentacleOffset)

        for (let x = centerX; x <= rightTargetX; x += 5) {
          const progress = (x - centerX) / (rightTargetX - centerX)
          const waveY =
            centerY + tentacleOffset + Math.sin(x * waveFrequency + time * 3 + i) * waveAmplitude * (1 - progress * 0.5)

          ctx.lineTo(x, waveY)
        }

        const rightGradient = ctx.createLinearGradient(centerX, centerY, rightTargetX, targetY)
        rightGradient.addColorStop(0, `rgba(255, 255, 255, ${(0.8 - i * 0.1) * intensity})`)
        rightGradient.addColorStop(0.5, `rgba(230, 230, 230, ${(0.6 - i * 0.1) * intensity})`)
        rightGradient.addColorStop(1, `rgba(200, 200, 200, ${(0.4 - i * 0.1) * intensity})`)

        ctx.strokeStyle = rightGradient
        ctx.lineWidth = (8 - i) * intensity
        ctx.lineCap = "round"
        if (intensity > 0.1) ctx.stroke()
      }

      // Draw symmetrical connecting veins around the core
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2
        const length = (40 + Math.sin(time * 4 + i) * 15) * intensity
        const endX = centerX + Math.cos(angle) * length
        const endY = centerY + Math.sin(angle) * length

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = `rgba(220, 220, 220, ${(0.5 + Math.sin(time * 2 + i) * 0.3) * intensity})`
        ctx.lineWidth = 2 * intensity
        if (intensity > 0.1) ctx.stroke()
      }

      // Add symmetrical pulsing energy around core
      const pulseRadius = (coreRadius + 10 + Math.sin(time * 4) * 5) * intensity
      if (pulseRadius > 0) {
        const pulseGradient = ctx.createRadialGradient(centerX, centerY, coreRadius, centerX, centerY, pulseRadius)
        pulseGradient.addColorStop(0, "rgba(255, 255, 255, 0)")
        pulseGradient.addColorStop(0.7, `rgba(255, 255, 255, ${0.4 * intensity})`)
        pulseGradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.beginPath()
        ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2)
        ctx.fillStyle = pulseGradient
        ctx.fill()
      }

      // Add mirrored energy rings
      for (let ring = 0; ring < 3; ring++) {
        const ringRadius = (30 + ring * 15 + Math.sin(time * 2 + ring) * 5) * intensity
        const ringOpacity = (0.3 - ring * 0.1 + Math.sin(time * 3 + ring) * 0.1) * intensity

        if (ringRadius > 0 && ringOpacity > 0) {
          ctx.beginPath()
          ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0, ringOpacity)})`
          ctx.lineWidth = 2 * intensity
          ctx.stroke()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isActive, leftBlockPosition, rightBlockPosition])

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <canvas
        ref={canvasRef}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          filter: "blur(0.5px)",
          opacity: isActive ? 1 : 0.3, // Reduzierte Opacity wenn nicht aktiv
          transition: "opacity 0.5s ease-out",
        }}
      />
    </div>
  )
}
