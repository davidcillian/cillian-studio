"use client"

import { useEffect, useRef, useState } from "react"

type CursorState = "default" | "interactive" | "text"

export function LiquidGlassCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)
    const [cursorState, setCursorState] = useState<CursorState>("default")
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
        }

        const handleMouseOver = (e: MouseEvent) => {
            const t = e.target as HTMLElement
            const isInteractive = !!t.closest('a, button, [role="button"], input, select, textarea')
            if (isInteractive) {
                setCursorState("interactive")
                return
            }
            const isText = !!t.closest('p, h1, h2, h3, h4, h5, h6, span, li, blockquote, label')
            setCursorState(isText ? "text" : "default")
        }

        const handleMouseLeave = () => setVisible(false)
        const handleMouseEnter = () => {
            if (hasMovedRef.current) setVisible(true)
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseover", handleMouseOver)
        document.documentElement.addEventListener("mouseleave", handleMouseLeave)
        document.documentElement.addEventListener("mouseenter", handleMouseEnter)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseover", handleMouseOver)
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
            document.documentElement.removeEventListener("mouseenter", handleMouseEnter)
        }
    }, [])

    const stateClass = cursorState === "interactive"
        ? " liquid-glass-cursor-hover"
        : cursorState === "text"
            ? " liquid-glass-cursor-text"
            : ""

    return (
        <div
            ref={cursorRef}
            className={`liquid-glass-cursor${stateClass}`}
            style={{ opacity: visible ? 1 : 0 }}
        />
    )
}
