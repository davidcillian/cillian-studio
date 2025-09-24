"use client"

import { useEffect, useRef } from "react"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isMouseInCanvasRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Mobile detection - disable animations on mobile for better performance
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth <= 768
    if (isMobile) {
      return // Exit early on mobile devices
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        // Reset mouse position to center when resizing
        mousePositionRef.current = {
          x: canvas.width / 2,
          y: canvas.height / 2,
        }
      }
    }

    // Mouse interaction disabled for better performance
    const handleMouseMove = () => {
      // No mouse tracking
    }

    const handleMouseEnter = () => {
      // No mouse interaction
    }

    const handleMouseLeave = () => {
      // No mouse interaction
    }

    // Initialize
    handleResize()
    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseenter", handleMouseEnter)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Force field disabled for better performance - just return 0
    const calculateForceField = () => {
      return 0
    }

    // Helper function to draw smooth bezier wave
    const drawSmoothWave = (points: { x: number; y: number }[], strokeStyle: string, lineWidth: number) => {
      if (points.length < 2) return

      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)

      // Use quadratic bezier curves for ultra-smooth lines
      for (let i = 1; i < points.length - 1; i++) {
        const currentPoint = points[i]
        const nextPoint = points[i + 1]

        // Control point is the midpoint between current and next point
        const controlX = (currentPoint.x + nextPoint.x) / 2
        const controlY = (currentPoint.y + nextPoint.y) / 2

        ctx.quadraticCurveTo(currentPoint.x, currentPoint.y, controlX, controlY)
      }

      // Draw to the last point
      const lastPoint = points[points.length - 1]
      ctx.lineTo(lastPoint.x, lastPoint.y)

      ctx.strokeStyle = strokeStyle
      ctx.lineWidth = lineWidth
      ctx.stroke()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() / 1000
      const mousePosition = mousePositionRef.current
      const isMouseInCanvas = isMouseInCanvasRef.current

      const padding = 20

      // Calculate points for first wave
      const wave1Points: { x: number; y: number }[] = []
      for (let x = 0; x <= canvas.width; x += 8) {
        // Larger steps for smoother curves
        const baseY =
          canvas.height / 3 +
          Math.sin((x / canvas.width) * Math.PI * 4 + time * 0.5) * 30 +
          Math.sin((x / canvas.width) * Math.PI * 2 + time * 0.3) * 20

        const forceY = calculateForceField()
        const finalY = Math.max(padding, Math.min(canvas.height - padding, baseY + forceY))

        wave1Points.push({ x, y: finalY })
      }
      drawSmoothWave(wave1Points, "rgba(255, 255, 255, 0.15)", 2)

      // Calculate points for second wave
      const wave2Points: { x: number; y: number }[] = []
      for (let x = 0; x <= canvas.width; x += 8) {
        const baseY =
          canvas.height / 2 +
          Math.sin((x / canvas.width) * Math.PI * 3 + time * 0.4) * 25 +
          Math.sin((x / canvas.width) * Math.PI * 1.5 + time * 0.2) * 15

        const forceY = calculateForceField()
        const finalY = Math.max(padding, Math.min(canvas.height - padding, baseY + forceY))

        wave2Points.push({ x, y: finalY })
      }
      drawSmoothWave(wave2Points, "rgba(255, 255, 255, 0.12)", 1.5)

      // Calculate points for third wave
      const wave3Points: { x: number; y: number }[] = []
      for (let x = 0; x <= canvas.width; x += 8) {
        const baseY =
          (canvas.height / 3) * 2 +
          Math.sin((x / canvas.width) * Math.PI * 2.5 + time * 0.6) * 20 +
          Math.sin((x / canvas.width) * Math.PI * 1.2 + time * 0.4) * 12

        const forceY = calculateForceField()
        const finalY = Math.max(padding, Math.min(canvas.height - padding, baseY + forceY))

        wave3Points.push({ x, y: finalY })
      }
      drawSmoothWave(wave3Points, "rgba(255, 255, 255, 0.1)", 1)

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseenter", handleMouseEnter)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full absolute inset-0" style={{ background: "transparent" }} />
}
