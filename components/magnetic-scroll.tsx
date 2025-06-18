"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface MagneticScrollProps {
  children: React.ReactNode
  sectionId: string
  onAnimationStateChange?: (state: "idle" | "entering" | "animating" | "active" | "leaving") => void
}

export default function MagneticScroll({ children, sectionId, onAnimationStateChange }: MagneticScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [animationState, setAnimationState] = useState<"idle" | "entering" | "animating" | "active" | "leaving">("idle")
  const [isScrollLocked, setIsScrollLocked] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()
  const lastScrollY = useRef(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      if (isScrollLocked) return

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const sectionCenter = sectionTop + sectionHeight / 2
      const windowCenter = windowHeight / 2

      // Magnetische Zone definieren (±200px um das Zentrum)
      const magneticZone = 200
      const distanceFromCenter = Math.abs(sectionCenter - windowCenter)

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      // Wenn wir in der magnetischen Zone sind
      if (distanceFromCenter < magneticZone && animationState === "idle") {
        setAnimationState("entering")
        onAnimationStateChange?.("entering")

        // Magnetisch zum Zentrum ziehen
        const targetScrollY = window.scrollY + (sectionCenter - windowCenter)

        // Smooth scroll zum Zentrum
        window.scrollTo({
          top: targetScrollY,
          behavior: "smooth",
        })

        // Scroll sperren und Animation starten
        setTimeout(() => {
          setIsScrollLocked(true)
          setAnimationState("animating")
          onAnimationStateChange?.("animating")

          // Nach Animation: Zustand auf "active" setzen
          setTimeout(() => {
            setAnimationState("active")
            setIsScrollLocked(false) // Scroll wieder freigeben
            onAnimationStateChange?.("active")
          }, 2500) // Dauer der gesamten Animation
        }, 500) // Kurze Verzögerung für smooth scroll
      }

      // Wenn wir den Bereich verlassen (nur wenn active)
      else if (distanceFromCenter > magneticZone * 1.5 && animationState === "active") {
        setAnimationState("leaving")
        onAnimationStateChange?.("leaving")

        // Nach dem Zuklappen zurück zu idle
        setTimeout(() => {
          setAnimationState("idle")
          onAnimationStateChange?.("idle")
        }, 800) // Dauer der Zuklapp-Animation
      }

      // Scroll-Timeout für smooth detection
      scrollTimeout = setTimeout(() => {
        isScrolling = false
      }, 150)
    }

    // Scroll-Event-Handler mit Throttling
    const throttledScroll = () => {
      if (!isScrolling) {
        requestAnimationFrame(handleScroll)
        isScrolling = true
      }
    }

    // Scroll-Lock-Handler
    const preventScroll = (e: Event) => {
      if (isScrollLocked) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: !isScrollLocked })

    // Scroll-Lock Events
    if (isScrollLocked) {
      window.addEventListener("wheel", preventScroll, { passive: false })
      window.addEventListener("touchmove", preventScroll, { passive: false })
      window.addEventListener("keydown", (e) => {
        if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key)) {
          preventScroll(e)
        }
      })
    }

    return () => {
      window.removeEventListener("scroll", throttledScroll)
      window.removeEventListener("wheel", preventScroll)
      window.removeEventListener("touchmove", preventScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [animationState, isScrollLocked, onAnimationStateChange])

  return (
    <div
      ref={sectionRef}
      id={sectionId}
      className={`magnetic-section ${animationState}`}
      data-animation-state={animationState}
    >
      {children}
    </div>
  )
}
