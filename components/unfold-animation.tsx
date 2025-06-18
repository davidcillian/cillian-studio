"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface UnfoldAnimationProps {
  children: React.ReactNode
  className?: string
  index: number
  sectionId?: string
}

export default function UnfoldAnimation({ children, className = "", index, sectionId }: UnfoldAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isUnfolded, setIsUnfolded] = useState(false)
  const lastScrollY = useRef(0)
  const isNavigating = useRef(false)

  useEffect(() => {
    // Mobile detection - disable unfold animations on mobile for better performance
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth <= 768
    if (isMobile) {
      // On mobile, always show content unfolded
      setIsUnfolded(true)
      return
    }

    const element = elementRef.current
    if (!element) return

    // Listen for navigation events
    const handleNavigationStart = (event: CustomEvent) => {
      isNavigating.current = true
      const targetSection = event.detail.targetSection

      // Only unfold if this is the target section
      if (sectionId && targetSection === sectionId) {
        setIsUnfolded(true)
      }

      // Reset navigation flag after animation
      setTimeout(() => {
        isNavigating.current = false
      }, 1000)
    }

    const handleScroll = () => {
      // Skip scroll handling during navigation
      if (isNavigating.current) return

      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY.current
      const isScrollingUp = currentScrollY < lastScrollY.current

      const rect = element.getBoundingClientRect()
      const elementTop = rect.top
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Trigger-Zone für das Aufklappen - normal
      const elementCenter = elementTop + elementHeight / 2
      const isInTriggerZone = elementCenter < windowHeight * 0.7 && elementCenter > windowHeight * 0.3

      // Für das Schließen: Erst wenn man SEHR weit nach oben gescrollt ist
      // Praktisch erst wenn man bei About Us angekommen ist
      const aboutUsSection = document.getElementById("about")
      let shouldClose = false

      if (aboutUsSection && isScrollingUp) {
        const aboutUsRect = aboutUsSection.getBoundingClientRect()
        const aboutUsCenter = aboutUsRect.top + aboutUsRect.height / 2

        // Schließen nur wenn About Us im Viewport ist (beim Hochscrollen)
        shouldClose = aboutUsCenter < windowHeight * 0.8 && aboutUsCenter > windowHeight * 0.2
      }

      // Aufklappen beim Runterscrollen in der Trigger-Zone
      if (isInTriggerZone && isScrollingDown && !isUnfolded) {
        setIsUnfolded(true)
      }
      // Einklappen NUR wenn man bis zur About Us Sektion hochgescrollt ist
      else if (shouldClose && isUnfolded) {
        setIsUnfolded(false)
      }

      // Update last scroll position
      lastScrollY.current = currentScrollY
    }

    // Add event listeners
    window.addEventListener("navigationStart", handleNavigationStart as EventListener)
    window.addEventListener("scroll", handleScroll)

    // Initial call
    handleScroll()

    return () => {
      window.removeEventListener("navigationStart", handleNavigationStart as EventListener)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isUnfolded, sectionId])

  return (
    <div
      ref={elementRef}
      className={`${className} transition-all duration-1000 ease-out ${isUnfolded ? "unfold-active" : "unfold-inactive"}`}
      style={{
        transitionDelay: `${index * 300}ms`,
      }}
    >
      {children}
    </div>
  )
}
