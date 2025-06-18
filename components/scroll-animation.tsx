"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  direction: "left" | "right" | "center"
  className?: string
  onPositionChange?: (position: number) => void
}

export default function ScrollAnimation({
  children,
  direction,
  className = "",
  onPositionChange,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [currentPosition, setCurrentPosition] = useState(0)

  useEffect(() => {
    // Mobile detection - disable scroll animations on mobile for better performance
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth <= 768
    if (isMobile) {
      // On mobile, just set static position and return
      setCurrentPosition(0)
      onPositionChange?.(0)
      return
    }

    const element = elementRef.current
    if (!element) return

    // Initial position (spread apart)
    if (direction === "center") {
      // David stays in center - no movement
      element.style.transform = "translateX(0px)"
      element.style.transition = "transform 0.8s ease-out"
      setCurrentPosition(0)
      onPositionChange?.(0)
    } else {
      const initialTransform = direction === "left" ? "translateX(-200px)" : "translateX(200px)"
      element.style.transform = initialTransform
      element.style.transition = "transform 0.8s ease-out"
      setCurrentPosition(direction === "left" ? -200 : 200)
    }

    // Handle scroll to determine animation state
    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Calculate scroll progress for this element
      const scrollProgress = 1 - (elementTop + elementHeight * 0.5) / windowHeight

      // Determine target position based on scroll progress
      let targetPosition = 0

      if (direction === "center") {
        // David always stays in center
        targetPosition = 0
      } else if (scrollProgress < 0.1) {
        // Spread apart initially
        targetPosition = direction === "left" ? -200 : 200
      } else if (scrollProgress >= 0.1 && scrollProgress < 0.3) {
        // Pull together with venom effect
        const pullProgress = (scrollProgress - 0.1) / 0.2
        const maxPull = direction === "left" ? -200 : 200
        targetPosition = maxPull * (1 - pullProgress)
      } else if (scrollProgress >= 0.3 && scrollProgress <= 0.7) {
        // Stay completely together (sticky zone)
        targetPosition = 0
      } else if (scrollProgress > 0.7 && scrollProgress < 0.9) {
        // Pull apart again
        const pullProgress = (scrollProgress - 0.7) / 0.2
        const maxPull = direction === "left" ? -200 : 200
        targetPosition = maxPull * pullProgress
      } else {
        // Fully apart again
        targetPosition = direction === "left" ? -200 : 200
      }

      // Apply transform
      element.style.transform = `translateX(${targetPosition}px)`
      setCurrentPosition(targetPosition)
      onPositionChange?.(targetPosition)
    }

    // Initial call and scroll listener
    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [direction, onPositionChange])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
