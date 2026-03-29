"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
}

const letterVariant = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const title = "CILLIAN STUDIO"

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%] opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 20% 50%, rgba(99,102,241,0.15) 0%, transparent 100%), " +
              "radial-gradient(ellipse 40% 50% at 80% 30%, rgba(168,85,247,0.12) 0%, transparent 100%), " +
              "radial-gradient(ellipse 45% 35% at 60% 80%, rgba(6,182,212,0.1) 0%, transparent 100%)",
            animation: "meshMove 20s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Subtle top fade for depth */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Image
            src="/images/logo.png"
            alt="Cillian Studio"
            width={120}
            height={120}
            className="w-44 md:w-56 h-44 md:h-56"
            priority
          />
        </motion.div>

        {/* Staggered letter reveal heading */}
        <motion.h1
          className="flex flex-wrap justify-center gap-x-[0.25em] text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white"
          variants={container}
          initial="hidden"
          animate="visible"
          aria-label={title}
        >
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariant}
              className={char === " " ? "w-[0.35em]" : "inline-block"}
              aria-hidden="true"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-[clamp(1rem,2.5vw,1.35rem)] font-light tracking-widest text-neutral-400"
          variants={fadeUp}
          custom={1.2}
          initial="hidden"
          animate="visible"
        >
          3D-Visualisierung&ensp;·&ensp;KI-Agenten&ensp;·&ensp;Gamification
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="mt-3 text-sm md:text-base tracking-wide text-neutral-500"
          variants={fadeUp}
          custom={1.6}
          initial="hidden"
          animate="visible"
        >
          Creative Technology Consulting aus Wien
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          variants={fadeUp}
          custom={2.0}
          initial="hidden"
          animate="visible"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="px-8 py-3.5 bg-white text-[#0a0a0a] rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Projekte ansehen
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 border border-white/15 text-neutral-300 rounded-lg font-medium text-sm tracking-wide transition-all duration-200 hover:border-white/30 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
          >
            Kontakt
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        onClick={() => {
          const next = document.querySelector("section:nth-of-type(2)")
          next?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-600">
          Scroll
        </span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neutral-600"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.div>

    </section>
  )
}
