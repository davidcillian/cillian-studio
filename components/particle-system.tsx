"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  alpha: number
  life: number
  maxLife: number
  attracted: boolean
  targetButton: HTMLElement | null
  targetX: number
  targetY: number
}

interface ButtonRect {
  element: HTMLElement
  rect: DOMRect
}

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const buttonsRef = useRef<ButtonRect[]>([])
  const requestRef = useRef<number>()
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize the particle system
  useEffect(() => {
    // Mobile detection - disable particle system on mobile for better performance
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth <= 768
    if (isMobile) {
      return // Exit early on mobile devices
    }

    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas to full screen
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    // Initialize mouse position to center of screen
    mouseRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    document.addEventListener("mousemove", handleMouseMove)

    // Find all buttons
    const findButtons = () => {
      const buttons = document.querySelectorAll("button")
      buttonsRef.current = Array.from(buttons).map((button) => ({
        element: button as HTMLElement,
        rect: button.getBoundingClientRect(),
      }))
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < 80; i++) {
        createParticle()
      }
    }

    // Wait a bit for the DOM to be fully rendered
    setTimeout(() => {
      findButtons()
      initParticles()
      setIsInitialized(true)
    }, 100)

    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousemove", handleMouseMove)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  // Animation loop
  useEffect(() => {
    if (!isInitialized) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Update button positions on scroll
    const handleScroll = () => {
      buttonsRef.current = buttonsRef.current.map((btn) => ({
        element: btn.element,
        rect: btn.element.getBoundingClientRect(),
      }))
    }

    window.addEventListener("scroll", handleScroll)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles (no energy ball anymore)
      updateParticles()
      drawParticles(ctx)

      // Continue animation loop
      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [isInitialized])

  // Create a new particle
  const createParticle = () => {
    const mouse = mouseRef.current
    const angle = Math.random() * Math.PI * 2
    const distance = 20 + Math.random() * 30

    const particle: Particle = {
      x: mouse.x + Math.cos(angle) * distance,
      y: mouse.y + Math.sin(angle) * distance,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: 1 + Math.random() * 2,
      color: getRandomColor(),
      alpha: 0.6 + Math.random() * 0.4,
      life: 0,
      maxLife: 50 + Math.random() * 100,
      attracted: false,
      targetButton: null,
      targetX: 0,
      targetY: 0,
    }

    particlesRef.current.push(particle)
  }

  // Update all particles
  const updateParticles = () => {
    const mouse = mouseRef.current
    const particles = particlesRef.current
    const buttons = buttonsRef.current

    // Create new particles
    if (particles.length < 80 && Math.random() > 0.8) {
      createParticle()
    }

    // Update each particle
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]

      // Increase life
      p.life++

      // Remove dead particles
      if (p.life > p.maxLife) {
        particles.splice(i, 1)
        continue
      }

      // Fade out near end of life
      if (p.life > p.maxLife * 0.8) {
        p.alpha = 0.6 * (1 - (p.life - p.maxLife * 0.8) / (p.maxLife * 0.2))
      }

      // Check if near any button
      let nearButton = false
      let closestButton: HTMLElement | null = null
      let closestDistance = 100 // Max distance to be considered "near"

      for (const btn of buttons) {
        const rect = btn.rect

        // Calculate distance to button edge
        const edgeX = Math.max(rect.left, Math.min(mouse.x, rect.right))
        const edgeY = Math.max(rect.top, Math.min(mouse.y, rect.bottom))
        const distance = Math.sqrt(Math.pow(mouse.x - edgeX, 2) + Math.pow(mouse.y - edgeY, 2))

        if (distance < closestDistance) {
          closestDistance = distance
          closestButton = btn.element
        }
      }

      // If near a button, set attraction
      if (closestDistance < 100) {
        nearButton = true

        // Find closest point on button border
        const rect = closestButton!.getBoundingClientRect()
        const borderPoints = []

        // Sample points along the border
        const samples = 20
        for (let j = 0; j < samples; j++) {
          // Top edge
          borderPoints.push({
            x: rect.left + (rect.width * j) / samples,
            y: rect.top,
          })

          // Right edge
          borderPoints.push({
            x: rect.right,
            y: rect.top + (rect.height * j) / samples,
          })

          // Bottom edge
          borderPoints.push({
            x: rect.right - (rect.width * j) / samples,
            y: rect.bottom,
          })

          // Left edge
          borderPoints.push({
            x: rect.left,
            y: rect.bottom - (rect.height * j) / samples,
          })
        }

        // Find closest border point
        let minDist = Number.POSITIVE_INFINITY
        let closestBorderPoint = { x: 0, y: 0 }

        for (const point of borderPoints) {
          const dist = Math.sqrt(Math.pow(p.x - point.x, 2) + Math.pow(p.y - point.y, 2))
          if (dist < minDist) {
            minDist = dist
            closestBorderPoint = point
          }
        }

        // Set attraction target
        p.attracted = true
        p.targetButton = closestButton
        p.targetX = closestBorderPoint.x
        p.targetY = closestBorderPoint.y
      } else {
        p.attracted = false
        p.targetButton = null
      }

      // Apply physics
      if (p.attracted) {
        // Move toward button edge
        const dx = p.targetX - p.x
        const dy = p.targetY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Stronger attraction when closer
        const force = Math.min(0.2, 8 / distance)

        p.vx += dx * force
        p.vy += dy * force

        // Dampen velocity when near target
        if (distance < 20) {
          p.vx *= 0.9
          p.vy *= 0.9
        }
      } else {
        // Orbit around mouse
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Attraction to mouse
        const force = 0.01
        p.vx -= dx * force
        p.vy -= dy * force

        // Orbital velocity
        const orbital = 0.1
        p.vx += (dy * orbital) / distance
        p.vy -= (dx * orbital) / distance
      }

      // Apply velocity
      p.x += p.vx
      p.y += p.vy

      // Dampen velocity
      p.vx *= 0.98
      p.vy *= 0.98

      // Contain within screen
      if (p.x < 0) p.vx += 0.2
      if (p.x > window.innerWidth) p.vx -= 0.2
      if (p.y < 0) p.vy += 0.2
      if (p.y > window.innerHeight) p.vy -= 0.2
    }

    // Add glow effect to buttons that have particles near them
    const glowingButtons = new Set<HTMLElement>()

    for (const p of particles) {
      if (p.attracted && p.targetButton) {
        glowingButtons.add(p.targetButton)
      }
    }

    // Apply glow effect
    for (const btn of buttons) {
      if (glowingButtons.has(btn.element)) {
        btn.element.style.boxShadow = "0 0 10px rgba(120, 220, 255, 0.8)"
        btn.element.style.borderColor = "#78dcff"
      } else {
        btn.element.style.boxShadow = ""
        btn.element.style.borderColor = ""
      }
    }
  }

  // Draw all particles
  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    const particles = particlesRef.current

    for (const p of particles) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)

      // Create glow effect
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2)
      gradient.addColorStop(0, p.color.replace(")", `, ${p.alpha})`))
      gradient.addColorStop(1, p.color.replace(")", ", 0)"))

      ctx.fillStyle = gradient
      ctx.fill()
    }
  }

  // Get random color for particles
  const getRandomColor = () => {
    const colors = [
      "rgba(120, 220, 255", // Blue
      "rgba(180, 230, 255", // Light blue
      "rgba(100, 200, 255", // Cyan
      "rgba(150, 210, 255", // Sky blue
      "rgba(200, 240, 255", // White-blue
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" style={{ opacity: 0.8 }} />
}
