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
  // Disable all scroll-based movement; render statically.
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    onPositionChange?.(0)
  }, [onPositionChange])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
