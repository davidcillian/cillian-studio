"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const NAV_ITEMS = [
  { no: "01", label: "Studio",      href: "#about"    },
  { no: "02", label: "Disziplinen", href: "#services"  },
  { no: "03", label: "Arbeiten",    href: "#projects"  },
  { no: "05", label: "Bildwerk",    href: "#gallery"   },
  { no: "06", label: "Kontakt",     href: "#contact"   },
]

function scrollTo(href: string) {
  if (href === "#top") {
    window.scrollTo({ top: 0, behavior: "smooth" })
    return
  }
  const el = document.querySelector(href)
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top: y, behavior: "smooth" })
  }
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(href)
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(26,22,18,.92)" : "rgba(26,22,18,.6)",
          backdropFilter: "blur(14px) saturate(130%)",
          WebkitBackdropFilter: "blur(14px) saturate(130%)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 h-14 flex items-center gap-8"
        >
          {/* Logo + Wortmarke */}
          <a
            href="#top"
            onClick={(e) => handleNav(e, "#top")}
            className="flex items-center gap-3 shrink-0"
          >
            <Image
              src="/brand/assets/cillian-fox-light.png"
              alt="Cillian Studio"
              width={24}
              height={24}
              className="w-6 h-6 opacity-90"
            />
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                color: "var(--ink)",
              }}
            >
              Cillian Studio
            </span>
          </a>

          {/* Separator */}
          <span style={{ width: 1, height: 16, background: "var(--line-2)", flexShrink: 0 }} />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 flex-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="group flex items-center gap-1.5 transition-colors duration-200"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                }}
              >
                <span className="group-hover:text-[var(--ink-2)] transition-colors">{item.no}</span>
                <span
                  className="group-hover:text-[var(--ink)] transition-colors"
                  style={{ color: "var(--ink-2)" }}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Live status — far right */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <span
              className="animate-pulse-glow"
              style={{
                display: "inline-block",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--signal)",
                boxShadow: "0 0 10px var(--signal)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
              }}
            >
              Wien
            </span>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
            aria-label="Menü"
          >
            <span
              className="block w-5 h-px transition-transform origin-center"
              style={{
                background: "var(--ink)",
                transform: menuOpen ? "rotate(45deg) translateY(3.5px)" : "none",
              }}
            />
            <span
              className="block w-5 h-px transition-opacity"
              style={{ background: "var(--ink)", opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-px transition-transform origin-center"
              style={{
                background: "var(--ink)",
                transform: menuOpen ? "rotate(-45deg) translateY(-3.5px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-start justify-center gap-2 px-8"
            style={{ background: "var(--bg)" }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                marginBottom: 32,
              }}
            >
              Cillian Studio · Navigation
            </div>
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.06 + 0.05, duration: 0.25 }}
                className="flex items-baseline gap-4 py-3 border-b w-full"
                style={{
                  borderColor: "var(--line)",
                  color: "var(--ink)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    color: "var(--ink-3)",
                    letterSpacing: ".08em",
                    minWidth: 24,
                  }}
                >
                  {item.no}
                </span>
                <span style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-.02em" }}>
                  {item.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
