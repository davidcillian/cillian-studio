"use client"

import { useEffect, useRef, useState } from "react"

export default function GasPlanet() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Mobile detection - disable gas planet animation on mobile for better performance
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth <= 768
    if (isMobile) {
      return // Exit early on mobile devices
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Track scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGasPlanet(ctx)
      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  const drawGasPlanet = (ctx: CanvasRenderingContext2D) => {
    const time = Date.now() / 1000
    const canvas = ctx.canvas

    // Planet position - moves slightly with scroll
    const planetX = canvas.width * 0.8 + Math.sin(scrollY * 0.001) * 50
    const planetY = canvas.height * 0.3 + scrollY * 0.1
    const planetRadius = Math.min(canvas.width, canvas.height) * 0.25

    // Rotation based on time and scroll
    const rotation = time * 0.2 + scrollY * 0.002

    ctx.save()
    ctx.translate(planetX, planetY)

    // Draw planet shadow/depth
    const shadowGradient = ctx.createRadialGradient(
      -planetRadius * 0.3,
      -planetRadius * 0.3,
      0,
      0,
      0,
      planetRadius * 1.2,
    )
    shadowGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)")
    shadowGradient.addColorStop(0.6, "rgba(128, 128, 128, 0.4)")
    shadowGradient.addColorStop(1, "rgba(0, 0, 0, 0.8)")

    ctx.beginPath()
    ctx.arc(0, 0, planetRadius, 0, Math.PI * 2)
    ctx.fillStyle = shadowGradient
    ctx.fill()

    // Draw gas bands
    ctx.save()
    ctx.rotate(rotation)

    // Create multiple gas bands
    for (let band = 0; band < 8; band++) {
      const bandY = (band - 4) * planetRadius * 0.25
      const bandHeight = planetRadius * 0.15
      const bandOpacity = 0.3 + Math.sin(time + band) * 0.1

      // Create band gradient
      const bandGradient = ctx.createLinearGradient(
        -planetRadius,
        bandY - bandHeight / 2,
        planetRadius,
        bandY + bandHeight / 2,
      )

      if (band % 2 === 0) {
        bandGradient.addColorStop(0, `rgba(255, 255, 255, 0)`)
        bandGradient.addColorStop(0.3, `rgba(220, 220, 220, ${bandOpacity})`)
        bandGradient.addColorStop(0.7, `rgba(180, 180, 180, ${bandOpacity})`)
        bandGradient.addColorStop(1, `rgba(255, 255, 255, 0)`)
      } else {
        bandGradient.addColorStop(0, `rgba(0, 0, 0, 0)`)
        bandGradient.addColorStop(0.3, `rgba(60, 60, 60, ${bandOpacity})`)
        bandGradient.addColorStop(0.7, `rgba(30, 30, 30, ${bandOpacity})`)
        bandGradient.addColorStop(1, `rgba(0, 0, 0, 0)`)
      }

      // Draw wavy band
      ctx.beginPath()
      ctx.moveTo(-planetRadius, bandY)

      for (let x = -planetRadius; x <= planetRadius; x += 5) {
        const waveY = bandY + Math.sin(x * 0.02 + time * 2 + band) * bandHeight * 0.3
        const distanceFromCenter = Math.sqrt(x * x + waveY * waveY)

        if (distanceFromCenter <= planetRadius) {
          ctx.lineTo(x, waveY)
        }
      }

      ctx.lineTo(planetRadius, bandY + bandHeight)

      for (let x = planetRadius; x >= -planetRadius; x -= 5) {
        const waveY = bandY + bandHeight + Math.sin(x * 0.02 + time * 2 + band + Math.PI) * bandHeight * 0.3
        const distanceFromCenter = Math.sqrt(x * x + waveY * waveY)

        if (distanceFromCenter <= planetRadius) {
          ctx.lineTo(x, waveY)
        }
      }

      ctx.closePath()
      ctx.fillStyle = bandGradient

      // Clip to circle
      ctx.save()
      ctx.beginPath()
      ctx.arc(0, 0, planetRadius, 0, Math.PI * 2)
      ctx.clip()
      ctx.fill()
      ctx.restore()
    }

    // Draw swirling storms
    for (let storm = 0; storm < 3; storm++) {
      const stormX = Math.cos(time * 0.5 + storm * 2) * planetRadius * 0.6
      const stormY = Math.sin(time * 0.3 + storm * 1.5) * planetRadius * 0.4
      const stormRadius = planetRadius * 0.1 + Math.sin(time + storm) * planetRadius * 0.05

      const stormGradient = ctx.createRadialGradient(stormX, stormY, 0, stormX, stormY, stormRadius)

      if (storm % 2 === 0) {
        stormGradient.addColorStop(0, "rgba(255, 255, 255, 0.6)")
        stormGradient.addColorStop(0.5, "rgba(200, 200, 200, 0.3)")
        stormGradient.addColorStop(1, "rgba(255, 255, 255, 0)")
      } else {
        stormGradient.addColorStop(0, "rgba(50, 50, 50, 0.6)")
        stormGradient.addColorStop(0.5, "rgba(20, 20, 20, 0.3)")
        stormGradient.addColorStop(1, "rgba(0, 0, 0, 0)")
      }

      // Draw spiral storm
      ctx.save()
      ctx.translate(stormX, stormY)
      ctx.rotate(time * 2 + storm)

      for (let spiral = 0; spiral < 3; spiral++) {
        ctx.beginPath()
        for (let angle = 0; angle < Math.PI * 4; angle += 0.1) {
          const r = (angle / (Math.PI * 4)) * stormRadius
          const x = Math.cos(angle) * r
          const y = Math.sin(angle) * r

          if (angle === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.strokeStyle = stormGradient
        ctx.lineWidth = 2
        ctx.stroke()
      }

      ctx.restore()

      // Clip storm to planet
      ctx.save()
      ctx.beginPath()
      ctx.arc(0, 0, planetRadius, 0, Math.PI * 2)
      ctx.clip()
      ctx.beginPath()
      ctx.arc(stormX, stormY, stormRadius, 0, Math.PI * 2)
      ctx.fillStyle = stormGradient
      ctx.fill()
      ctx.restore()
    }

    ctx.restore()

    // Draw atmospheric glow
    const glowGradient = ctx.createRadialGradient(0, 0, planetRadius * 0.8, 0, 0, planetRadius * 1.3)
    glowGradient.addColorStop(0, "rgba(255, 255, 255, 0)")
    glowGradient.addColorStop(0.8, "rgba(200, 200, 200, 0.1)")
    glowGradient.addColorStop(1, "rgba(150, 150, 150, 0.3)")

    ctx.beginPath()
    ctx.arc(0, 0, planetRadius * 1.3, 0, Math.PI * 2)
    ctx.fillStyle = glowGradient
    ctx.fill()

    // Add some twinkling stars around the planet
    for (let star = 0; star < 20; star++) {
      const starAngle = (star / 20) * Math.PI * 2
      const starDistance = planetRadius * (1.5 + Math.random() * 0.5)
      const starX = Math.cos(starAngle + time * 0.1) * starDistance
      const starY = Math.sin(starAngle + time * 0.1) * starDistance
      const starSize = 1 + Math.sin(time * 3 + star) * 0.5

      ctx.beginPath()
      ctx.arc(starX, starY, starSize, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + Math.sin(time * 2 + star) * 0.3})`
      ctx.fill()
    }

    ctx.restore()
  }

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" style={{ opacity: 0.6 }} />
}
