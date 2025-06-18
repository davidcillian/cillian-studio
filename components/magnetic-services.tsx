"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface MagneticServicesProps {
  children: React.ReactNode
  onMagneticPull?: (isPulled: boolean) => void
}

export default function MagneticServices({ children, onMagneticPull }: MagneticServicesProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMagneticallyPulled, setIsMagneticallyPulled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY.current
      const isScrollingUp = currentScrollY < lastScrollY.current

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const sectionCenter = sectionTop + sectionHeight / 2
      const windowCenter = windowHeight / 2

      // Magnetische Zone definieren (±150px um das Zentrum)
      const magneticZone = 150
      const distanceFromCenter = Math.abs(sectionCenter - windowCenter)

      // Wenn wir in der magnetischen Zone sind und noch nicht gepullt
      if (distanceFromCenter < magneticZone && !isMagneticallyPulled) {
        // Magnetisch zum Zentrum ziehen
        const targetScrollY = window.scrollY + (sectionCenter - windowCenter)

        // Sanftes Hinziehen (nicht zu stark)
        window.scrollTo({
          top: targetScrollY,
          behavior: "smooth",
        })

        setIsMagneticallyPulled(true)
        onMagneticPull?.(true)
      }
      // Asymmetrisches Verhalten: Nur beim Hochscrollen wieder einklappen
      else if (distanceFromCenter > magneticZone * 2 && isMagneticallyPulled && isScrollingUp) {
        setIsMagneticallyPulled(false)
        onMagneticPull?.(false)
      }

      // Update last scroll position
      lastScrollY.current = currentScrollY

      // Clear timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      // Scroll-Timeout für smooth detection
      scrollTimeout = setTimeout(() => {
        isScrolling = false
      }, 150)
    }

    // Throttled scroll handler
    const throttledScroll = () => {
      if (!isScrolling) {
        requestAnimationFrame(handleScroll)
        isScrolling = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", throttledScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [isMagneticallyPulled, onMagneticPull])

  return (
    <div ref={sectionRef} className="magnetic-services-section">
      {children}
    </div>
  )
}
