"use client"

import { useEffect, useRef, useState } from "react"

type CursorState = "default" | "interactive" | "text" | "image"

function detectState(t: HTMLElement): CursorState {
    // Interactive elements - highest priority
    if (t.closest('a, button, [role="button"], input, select, textarea')) {
        return "interactive"
    }

    // Images - check tag, classes, and parent containers with images
    if (
        t.tagName === 'IMG' ||
        t.tagName === 'VIDEO' ||
        t.classList.contains('object-cover') ||
        t.classList.contains('service-image')
    ) {
        return "image"
    }

    // Check if element is a direct wrapper around an image (e.g. Next.js Image containers)
    const firstChild = t.firstElementChild
    if (firstChild && (firstChild.tagName === 'IMG' || firstChild.tagName === 'VIDEO')) {
        return "image"
    }

    // Text elements
    if (t.closest('p, h1, h2, h3, h4, h5, h6, span, li, blockquote, label')) {
        return "text"
    }

    return "default"
}

export function LiquidGlassCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)
    const [cursorState, setCursorState] = useState<CursorState>("default")
    const stateRef = useRef<CursorState>("default")
    const hasMovedRef = useRef(false)

    useEffect(() => {
        if (window.matchMedia("(hover: none)").matches) return

        const handleMouseMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`
                cursorRef.current.style.top = `${e.clientY}px`
            }
            if (!hasMovedRef.current) {
                hasMovedRef.current = true
                setVisible(true)
            }

            const newState = detectState(e.target as HTMLElement)
            if (newState !== stateRef.current) {
                stateRef.current = newState
                setCursorState(newState)
            }
        }

        const handleMouseLeave = () => setVisible(false)
        const handleMouseEnter = () => {
            if (hasMovedRef.current) setVisible(true)
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.documentElement.addEventListener("mouseleave", handleMouseLeave)
        document.documentElement.addEventListener("mouseenter", handleMouseEnter)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
            document.documentElement.removeEventListener("mouseenter", handleMouseEnter)
        }
    }, [])

    const stateClass = cursorState === "interactive"
        ? " liquid-glass-cursor-hover"
        : cursorState === "text"
            ? " liquid-glass-cursor-text"
            : cursorState === "image"
                ? " liquid-glass-cursor-image"
                : ""

    return (
        <div
            ref={cursorRef}
            className={`liquid-glass-cursor${stateClass}`}
            style={{ opacity: visible ? 1 : 0 }}
        />
    )
}
