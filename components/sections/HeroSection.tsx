"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.5 },
  },
}

const charVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const CHAPTERS = [
  { no: "01", title: "Studio" },
  { no: "02", title: "Disziplinen" },
  { no: "03", title: "Arbeiten" },
  { no: "06", title: "Kontakt" },
]

const TITLE_WORDS = ["CILLIAN STUDIO"]

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "grid",
        gridTemplateRows: "1fr auto",
        padding: "56px max(32px, 4vw) 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* HERO CENTER — fox + headline + ctas stacked */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 0,
          padding: "clamp(32px, 6vh, 80px) 0 clamp(24px, 4vh, 48px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Fox — prominent feature element */}
        <motion.div
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            width: "clamp(120px, 18vw, 240px)",
            marginBottom: "clamp(24px, 3vw, 40px)",
            opacity: 0.22,
          }}
        >
          <Image
            src="/brand/assets/cillian-fox-light.png"
            alt="Cillian Studio"
            width={240}
            height={240}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          aria-label={TITLE_WORDS.join(" ")}
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "clamp(40px, 6vw, 96px)",
            lineHeight: 0.88,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "var(--ink)",
          }}
        >
          {TITLE_WORDS.map((word, wi) => (
            <span key={wi} style={{ display: "block" }}>
              {word.split("").map((char, ci) => (
                <motion.span
                  key={`${wi}-${ci}`}
                  variants={charVariant}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                  aria-hidden
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Discipline tags */}
        <motion.div
          custom={1.3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "clamp(20px, 3vw, 36px)",
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "var(--ink-3)",
          }}
        >
          <span>3D-Visualisierung</span>
          <span style={{ color: "var(--ink-3)", fontSize: 8 }}>·</span>
          <span>KI-Agenten</span>
          <span style={{ color: "var(--ink-3)", fontSize: 8 }}>·</span>
          <span>Gamification</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={1.45}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            color: "var(--ink-3)",
            fontSize: "clamp(13px, 1.2vw, 15px)",
            lineHeight: 1.55,
            marginTop: 14,
            letterSpacing: ".01em",
          }}
        >
          Creative Technology aus Wien.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={1.6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", gap: 16, marginTop: "clamp(28px, 3vw, 44px)", flexWrap: "wrap", justifyContent: "center" }}
        >
          <button
            onClick={() => scrollTo("projects")}
            style={{
              padding: "13px 32px",
              background: "var(--ink)",
              color: "var(--bg)",
              fontSize: 11,
              fontFamily: "var(--mono)",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              border: "none",
              borderBottom: "2px solid var(--signal-dim)",
              cursor: "pointer",
              transition: "opacity .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = ".8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Projekte ansehen
          </button>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              padding: "13px 32px",
              background: "transparent",
              color: "var(--ink-2)",
              fontSize: 11,
              fontFamily: "var(--mono)",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              border: "1px solid var(--line-2)",
              cursor: "pointer",
              transition: "border-color .2s, color .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--ink-3)"
              e.currentTarget.style.color = "var(--ink)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--line-2)"
              e.currentTarget.style.color = "var(--ink-2)"
            }}
          >
            Kontakt
          </button>
        </motion.div>
      </div>

      {/* BOTTOM STRIP — chapter tags */}
      <motion.div
        custom={1.9}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="hero-chapters"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "clamp(16px, 3vw, 32px)",
          alignItems: "end",
          paddingTop: "clamp(20px, 3vh, 32px)",
          borderTop: "1px solid var(--line)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {CHAPTERS.map((ch) => (
          <div key={ch.no}>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                color: "var(--ink-3)",
                textTransform: "uppercase",
                letterSpacing: ".08em",
              }}
            >
              {ch.no}
            </div>
            <div style={{ marginTop: 4, fontSize: 13, color: "var(--ink-2)" }}>{ch.title}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
