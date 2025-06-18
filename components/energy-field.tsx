"use client"

import { useEffect, useRef, useState } from "react"

interface EnergyFieldProps {
  isVisible: boolean
}

export default function EnergyField({ isVisible }: EnergyFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 400
    canvas.height = 200

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (isVisible) {
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const time = Date.now() / 1000

        // Draw energy connection lines to the sides (where the blocks would be)
        const leftTargetX = 50
        const rightTargetX = canvas.width - 50
        const targetY = centerY

        // Left connection line
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(leftTargetX, targetY)
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.6 + Math.sin(time * 3) * 0.3})`
        ctx.lineWidth = 3
        ctx.stroke()

        // Right connection line
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(rightTargetX, targetY)
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.6 + Math.sin(time * 3 + Math.PI) * 0.3})`
        ctx.lineWidth = 3
        ctx.stroke()

        // Draw energy pulses along the lines
        for (let i = 0; i < 3; i++) {
          const progress = (time * 2 + i * 0.5) % 1

          // Left line pulse
          const leftPulseX = centerX + (leftTargetX - centerX) * progress
          const leftPulseY = centerY + (targetY - centerY) * progress

          ctx.beginPath()
          ctx.arc(leftPulseX, leftPulseY, 4, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${1 - progress})`
          ctx.fill()

          // Right line pulse
          const rightPulseX = centerX + (rightTargetX - centerX) * progress
          const rightPulseY = centerY + (targetY - centerY) * progress

          ctx.beginPath()
          ctx.arc(rightPulseX, rightPulseY, 4, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${1 - progress})`
          ctx.fill()
        }

        // Draw energy field rings around center
        for (let i = 0; i < 3; i++) {
          const radius = 20 + i * 10 + Math.sin(time * 2 + i) * 3
          const alpha = 0.4 - i * 0.1 + Math.sin(time * 3 + i) * 0.1

          ctx.beginPath()
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0, alpha)})`
          ctx.lineWidth = 2
          ctx.stroke()
        }

        // Draw central energy core
        const coreRadius = 8 + Math.sin(time * 4) * 2
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, coreRadius)
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.9)")
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)")
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.beginPath()
        ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Update rotation for the coin
        setRotation((prev) => prev + 3)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible])

  return (
    <div
      className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
      style={{ zIndex: 10 }}
    >
      {/* Energy Field Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          filter: "blur(0.5px)",
          left: "-100px",
          top: "-50px",
        }}
      />

      {/* Rotating Energy Coin */}
      <div
        className={`w-8 h-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(-50%, -50%) rotateY(${rotation}deg)`,
        }}
      >
        <div className="w-full h-full rounded-full relative overflow-hidden">
          {/* Coin face */}
          <div
            className="absolute inset-0 rounded-full border-2 border-white bg-gradient-to-br from-white via-gray-100 to-gray-300"
            style={{
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.2), 0 0 10px rgba(255,255,255,0.5)",
            }}
          >
            {/* Coin pattern/symbol */}
            <div className="absolute inset-1 rounded-full border border-gray-300 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
            </div>
          </div>

          {/* Energy glow around coin */}
          <div
            className="absolute inset-0 rounded-full bg-white opacity-30 animate-pulse"
            style={{
              filter: "blur(2px)",
              transform: "scale(1.5)",
            }}
          />
        </div>
      </div>

      {/* Additional energy glow effect */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          background: `
            radial-gradient(circle, 
              rgba(255,255,255,0.1) 0%, 
              rgba(255,255,255,0.05) 40%, 
              transparent 70%
            )
          `,
          width: "100px",
          height: "100px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          animation: isVisible ? "pulse 2s ease-in-out infinite" : "none",
        }}
      />
    </div>
  )
}
