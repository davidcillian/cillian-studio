"use client"

import { useEffect, useRef, useCallback, useState } from "react"

// Section guide — Stevens explains each section with butler elegance
const guide: Record<string, { text: string; alt: string }> = {
  hero: {
    text: "Hey, willkommen bei Cillian Studio! Ich bin Stevens und zeig euch was hier alles passiert. 3D, KI, Gamification und Training — alles aus einer Hand!",
    alt: "Ihr koennt mich jederzeit anklicken, dann wiederhole ich was diese Sektion zeigt. Scrollt einfach weiter!",
  },
  about: {
    text: "",
    alt: "",
  },
  services: {
    text: "Vier Bereiche: 3D-Visualisierung fuer fotorealistische Renderings, KI-Agenten auf eurem eigenen Server, Gamification fuer Kundenbindung und Motivation, und Trainings und Workshops!",
    alt: "Produkte in 3D zeigen, Prozesse mit KI automatisieren, Teams durch Spielmechaniken motivieren, und Wissen in Workshops weitergeben. Alles massgeschneidert!",
  },
  projects: {
    text: "Hier sind ausgewaehlte Projekte! Architektur-Visualisierung, Character Design, Echtzeit-Erlebnisse. Klickt euch durch!",
    alt: "Jedes Projekt zeigt was anderes! Von Immobilien-Renderings ueber Game Assets bis hin zu interaktiven Echtzeit-Anwendungen.",
  },
  clients: {
    text: "Cillian Studio arbeitet mit Unternehmen jeder Groesse zusammen. Vom Startup bis zum Mittelstaendler!",
    alt: "Ob kleines Team oder groesseres Unternehmen — Cillian Studio findet raus was den groessten Effekt hat!",
  },
  gallery: {
    text: "Die Galerie zeigt die ganze Bandbreite! 3D-Renderings, Character Art, Produkt-Visualisierungen.",
    alt: "Das alles entsteht in einer KI-gestuetzten Pipeline! Deutlich schneller und besser skalierbar als klassische 3D-Produktion.",
  },
  contact: {
    text: "Klingt interessant? Dann schreibt einfach! Erstberatung kostenlos und unverbindlich.",
    alt: "Einfach anrufen oder schreiben! In einer halben Stunde wird geklaert wo KI und 3D am meisten bringen. Ganz ohne Verpflichtung!",
  },
}

export function StevensOrb() {
  const orbRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const speechRef = useRef<HTMLDivElement>(null)
  const stateRef = useRef({
    x: 0, y: 0, vx: 0, vy: 0,
    lazyScroll: 0,
    wpX: 0, wpY: 0, wpT: 0, wpI: 4000,
    speaking: false, t: 0,
    timer: null as ReturnType<typeof setTimeout> | null,
    audio: null as HTMLAudioElement | null,
    lastSec: "",
    saidSecs: new Set<string>(),
    size: 110,
  })
  const [isMobile, setIsMobile] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const audioEnabledRef = useRef(false)

  const say = useCallback((text: string, audioKey?: string) => {
    const s = stateRef.current
    const speech = speechRef.current
    if (!speech || !text) return

    // interrupt any current speech
    s.speaking = false
    if (s.timer) { clearTimeout(s.timer); s.timer = null }
    if (s.audio) { s.audio.pause(); s.audio.currentTime = 0; s.audio = null }

    s.speaking = true
    speech.classList.add("active")

    // Pre-size: render full text invisibly to lock in height before typewriter
    speech.style.visibility = "hidden"
    speech.textContent = text
    const lockedH = speech.offsetHeight
    speech.style.minHeight = lockedH + "px"
    speech.style.visibility = ""
    speech.innerHTML = '<span class="stevens-cursor"></span>'

    // Audio
    if (audioEnabledRef.current && audioKey) {
      const a = new Audio(`/audio/${audioKey}.mp3`)
      s.audio = a
      a.play().catch(() => {})
      a.onended = () => {
        if (s.audio === a) {
          s.speaking = false; s.audio = null
          s.timer = setTimeout(() => {
            if (!s.speaking) { speech.classList.remove("active"); speech.style.minHeight = "" }
          }, 3000)
        }
      }
    }

    // Typewriter — simple substring, no reflow since minHeight is locked
    let i = 0
    const type = () => {
      if (!s.speaking) return
      if (i < text.length) {
        speech.innerHTML = text.substring(0, i + 1) + '<span class="stevens-cursor"></span>'
        i++
        s.timer = setTimeout(type, 20)
      } else {
        speech.innerHTML = text
        if (!audioEnabledRef.current || !audioKey) {
          s.speaking = false
          s.timer = setTimeout(() => {
            if (!s.speaking) { speech.classList.remove("active"); speech.style.minHeight = "" }
          }, 6000)
        }
      }
    }
    type()
  }, []) // stable — no deps, reads audioEnabledRef instead

  useEffect(() => {
    const vw = window.innerWidth
    if (vw < 768) { setIsMobile(true); return }

    const s = stateRef.current
    const canvas = canvasRef.current
    const orb = orbRef.current
    if (!canvas || !orb) return

    s.size = Math.min(140, vw * 0.14)
    const d = Math.min(devicePixelRatio, 2)
    canvas.width = s.size * d
    canvas.height = s.size * d
    canvas.style.width = s.size + "px"
    canvas.style.height = s.size + "px"
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctx.setTransform(d, 0, 0, d, 0, 0)

    s.lazyScroll = scrollY
    s.x = vw - s.size / 2 - 20
    s.y = scrollY + innerHeight * 0.35

    // Waypoint — right side of screen, always within valid range
    const wp = () => {
      const curVw = innerWidth
      const contentR = (curVw + Math.min(1200, curVw * 0.9)) / 2
      // min: just past content edge or 80% of screen, whichever is further right
      const minX = Math.max(contentR + s.size * 0.3, curVw * 0.8)
      const maxX = curVw - s.size / 2 - 8
      // clamp so wpX is always on-screen (minX may exceed maxX on narrow viewports)
      s.wpX = Math.min(minX + Math.random() * Math.max(0, maxX - minX), maxX)
      s.wpY = innerHeight * 0.15 + Math.random() * innerHeight * 0.65
      s.wpI = 5000 + Math.random() * 5000
      s.wpT = Date.now()
    }
    wp()

    // Movement — slow, calm floating
    let moveRaf: number
    const moveTick = () => {
      moveRaf = requestAnimationFrame(moveTick)
      const vw = innerWidth, vh = innerHeight
      s.lazyScroll += (scrollY - s.lazyScroll) * 0.06
      if (Date.now() - s.wpT > s.wpI) wp()
      const tx = s.wpX, ty = s.lazyScroll + s.wpY
      const dx = tx - s.x, dy = ty - s.y, dist = Math.sqrt(dx * dx + dy * dy)
      if (dist > 1) {
        const a = 0.00018
        s.vx += (dx / dist) * a * Math.min(dist, 200)
        s.vy += (dy / dist) * a * Math.min(dist, 200)
      }
      s.vx *= 0.96; s.vy *= 0.96
      const spd = Math.sqrt(s.vx * s.vx + s.vy * s.vy)
      if (spd > 1.8) { s.vx = (s.vx / spd) * 1.8; s.vy = (s.vy / spd) * 1.8 }
      s.x += s.vx; s.y += s.vy
      const p = s.size / 2 + 14, top = s.lazyScroll + p, bot = s.lazyScroll + vh - p
      if (s.x < p) s.vx += 0.1; if (s.x > vw - p) s.vx -= 0.1
      if (s.y < top) s.vy += 0.1; if (s.y > bot) s.vy -= 0.1
      // Soft boundary: velocity-only push away from content (no direct snap → no jitter)
      const contentR = (vw + Math.min(1200, vw * 0.9)) / 2
      if (s.x < contentR) s.vx += 0.3
      orb.style.transform = `translate3d(${Math.round(s.x - s.size / 2)}px,${Math.round(s.y - s.size / 2)}px,0)`
      // Speech bubble follows Stevens per-frame (separate GPU layer — no canvas conflict)
      const speech = speechRef.current
      if (speech) {
        const bw = 240
        speech.style.transform = `translate3d(${Math.round(s.x - s.size / 2 - bw - 14)}px,${Math.round(s.y - 40)}px,0)`
      }
    }
    moveTick()

    // Draw — same HUD animation as usecases
    const st = { jaw: 0, jawFast: 0, energy: 0, peak: 0, pd: 0 }
    let drawRaf: number
    const draw = () => {
      drawRaf = requestAnimationFrame(draw)
      s.t += 0.016; const t = s.t
      if (s.speaking) {
        const sim = 0.18 + Math.sin(t * 3.5) * 0.07 + Math.sin(t * 6.2) * 0.04 + Math.sin(t * 9.8) * 0.02
        st.jawFast += (sim - st.jawFast) * 0.2; st.jaw += (sim - st.jaw) * 0.08
        st.energy += (sim - st.energy) * 0.12; if (sim > st.peak) st.peak = sim
        st.peak *= 0.97; st.pd = st.peak
      } else {
        st.jawFast *= 0.88; st.jaw *= 0.94; st.energy *= 0.93; st.peak *= 0.97; st.pd *= 0.98
      }
      const mv = Math.abs(st.jawFast - st.jaw), sp = st.jaw > 0.03
      const br = Math.sin(t * 0.8) * 0.5 + 0.5, cx = s.size / 2, cy = s.size / 2, r = s.size * 0.32

      ctx.clearRect(0, 0, s.size, s.size)

      // Glow
      const g = ctx.createRadialGradient(cx, cy, r * 0.2, cx, cy, r * (1.5 + st.pd * 0.3))
      g.addColorStop(0, `rgba(201,74,40,${0.12 + st.energy * 0.15})`)
      g.addColorStop(0.5, `rgba(201,74,40,${0.05 + st.energy * 0.08})`)
      g.addColorStop(1, "rgba(201,74,40,0)")
      ctx.fillStyle = g; ctx.fillRect(0, 0, s.size, s.size); ctx.lineCap = "round"

      const rs = 0.08 + st.energy * 0.35

      // Outer rings
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(t * rs)
      ctx.strokeStyle = `rgba(201,74,40,${0.22 + st.jawFast * 0.2})`; ctx.lineWidth = 1
      ctx.setLineDash([5, 12]); ctx.beginPath(); ctx.arc(0, 0, r * 1.08, 0, Math.PI * 2); ctx.stroke()
      ctx.setLineDash([]); ctx.restore()

      ctx.save(); ctx.translate(cx, cy); ctx.rotate(-t * rs * 0.5)
      ctx.strokeStyle = `rgba(201,74,40,${0.12 + st.jawFast * 0.12})`; ctx.lineWidth = 0.6
      ctx.setLineDash([3, 18]); ctx.beginPath(); ctx.arc(0, 0, r * 1.14, 0, Math.PI * 2); ctx.stroke()
      ctx.setLineDash([]); ctx.restore()

      // Main ring
      const vib = sp ? Math.sin(t * 35) * mv * r * 0.012 : 0
      ctx.strokeStyle = `rgba(201,74,40,${0.55 + br * 0.1 + st.jaw * 0.35})`; ctx.lineWidth = 1.5
      ctx.beginPath(); ctx.arc(cx, cy, r + vib, 0, Math.PI * 2); ctx.stroke()

      // Inner ring
      ctx.strokeStyle = `rgba(201,74,40,${0.2 + st.jawFast * 0.3})`; ctx.lineWidth = 0.8
      ctx.beginPath(); ctx.arc(cx, cy, r * 0.72, 0, Math.PI * 2); ctx.stroke()

      // Ticks
      for (let i = 0; i < 48; i++) {
        const a = (i / 48) * Math.PI * 2, iM = i % 4 === 0, iMd = i % 2 === 0
        const tp = sp ? Math.sin(a * 3 + t * 6) * st.jawFast : 0
        const tl = iM ? r * 0.08 + tp * r * 0.04 : iMd ? r * 0.04 : r * 0.02
        const al = sp ? (iM ? 0.2 + st.jawFast * 0.4 + tp * 0.2 : iMd ? 0.06 + st.jawFast * 0.1 : 0.03 + st.jawFast * 0.06) : (iM ? 0.12 + br * 0.03 : iMd ? 0.04 : 0.02)
        ctx.strokeStyle = `rgba(201,74,40,${Math.max(0, al)})`; ctx.lineWidth = iM ? 1 : 0.4
        ctx.beginPath()
        ctx.moveTo(cx + Math.cos(a) * (r - tl), cy + Math.sin(a) * (r - tl))
        ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r)
        ctx.stroke()
      }

      // Waveform when speaking
      if (sp) {
        ctx.strokeStyle = `rgba(201,74,40,${0.35 + st.jawFast * 0.55})`; ctx.lineWidth = 1.3
        ctx.beginPath()
        for (let i = 0; i <= 128; i++) {
          const a = (i / 128) * Math.PI * 2
          const w = Math.sin(a * 8 + t * 14) * st.jawFast * r * 0.06 + Math.sin(a * 13 + t * 19) * st.jawFast * r * 0.03 + Math.sin(a * 21 + t * 28) * mv * r * 0.04
          const wr = r * 0.48 + w
          if (i === 0) ctx.moveTo(cx + Math.cos(a) * wr, cy + Math.sin(a) * wr)
          else ctx.lineTo(cx + Math.cos(a) * wr, cy + Math.sin(a) * wr)
        }
        ctx.closePath(); ctx.stroke()

        ctx.fillStyle = `rgba(201,74,40,${0.25 + st.jawFast * 0.35})`
        for (let i = 0; i < 16; i++) {
          const a = (i / 16) * Math.PI * 2 + t * 0.3
          const sc = Math.sin(a * 7 + t * 11) * st.jawFast * r * 0.07
          const pr = r * 0.48 + sc
          ctx.beginPath(); ctx.arc(cx + Math.cos(a) * pr, cy + Math.sin(a) * pr, 0.5 + st.jawFast, 0, Math.PI * 2); ctx.fill()
        }
      } else {
        const ir = r * 0.48 + Math.sin(t * 0.8) * r * 0.008
        ctx.strokeStyle = `rgba(201,74,40,${0.08 + br * 0.04})`; ctx.lineWidth = 0.6
        ctx.beginPath(); ctx.arc(cx, cy, ir, 0, Math.PI * 2); ctx.stroke()
      }

      // Core
      const cr = sp ? 2 + st.jawFast * 3 + mv * 1.2 : 2 + br * 0.5
      let cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr * 4)
      cg.addColorStop(0, `rgba(201,74,40,${0.06 + st.energy * 0.12})`); cg.addColorStop(1, "rgba(201,74,40,0)")
      ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(cx, cy, cr * 4, 0, Math.PI * 2); ctx.fill()

      cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr * 2)
      cg.addColorStop(0, `rgba(201,74,40,${0.4 + st.jawFast * 0.4})`); cg.addColorStop(0.4, `rgba(201,74,40,${0.1 + st.jawFast * 0.15})`); cg.addColorStop(1, "rgba(201,74,40,0)")
      ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(cx, cy, cr * 2, 0, Math.PI * 2); ctx.fill()

      ctx.fillStyle = `rgba(220,100,60,${0.6 + st.jawFast * 0.3})`
      ctx.beginPath(); ctx.arc(cx, cy, cr, 0, Math.PI * 2); ctx.fill()

      // Corner brackets
      const bL = r * 0.14, bO = r * 1.18
      ctx.strokeStyle = `rgba(201,74,40,${0.1 + st.pd * 0.15})`; ctx.lineWidth = 0.6
      const corners: [number, number, number, number][] = [[cx - bO, cy - bO, 1, 1], [cx + bO, cy - bO, -1, 1], [cx - bO, cy + bO, 1, -1], [cx + bO, cy + bO, -1, -1]]
      corners.forEach(([x, y, ddx, ddy]) => {
        ctx.beginPath(); ctx.moveTo(x, y + ddy * -bL); ctx.lineTo(x, y); ctx.lineTo(x + ddx * bL, y); ctx.stroke()
      })

      // Labels
      ctx.fillStyle = `rgba(201,74,40,${0.12 + st.energy * 0.08})`
      ctx.font = `${Math.max(6, r * 0.055)}px var(--font-mono),monospace`
      ctx.textAlign = "center"
      ctx.fillText("S T E V E N S", cx, cy + r * 1.35)
      ctx.font = `${Math.max(5, r * 0.04)}px var(--font-mono),monospace`
      ctx.fillStyle = `rgba(201,74,40,${0.06 + st.energy * 0.04})`
      ctx.fillText(sp ? "ACTIVE" : "STANDBY", cx, cy + r * 1.44)
    }
    draw()

    // Section observer
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id !== s.lastSec) {
            s.lastSec = entry.target.id
            if (!s.saidSecs.has(entry.target.id)) {
              s.saidSecs.add(entry.target.id)
              const g = guide[entry.target.id]
              if (g && g.text) say(g.text, entry.target.id)
            }
          }
        })
      },
      { threshold: 0.55, rootMargin: "-10% 0px -10% 0px" }
    )
    sections.forEach((sec) => observer.observe(sec))

    // Hero has id="hero" so it's already covered by the main observer above

    return () => {
      cancelAnimationFrame(moveRaf)
      cancelAnimationFrame(drawRaf)
      observer.disconnect()
    }
  }, [say])

  if (isMobile) return null

  return (
    <>
      {/* Stevens Orb */}
      <div
        ref={orbRef}
        style={{ position: "fixed", top: 0, left: 0, willChange: "transform", zIndex: 900, cursor: "pointer" }}
        onClick={() => {
          const s = stateRef.current
          if (!s.lastSec) return
          const g = guide[s.lastSec]
          if (g?.alt && g.alt) say(g.alt, s.lastSec + "-alt")
        }}
      >
        <canvas ref={canvasRef} />
      </div>
      <div ref={speechRef} className="stevens-speech" />

      {/* Audio Toggle */}
      <button
        onClick={() => { audioEnabledRef.current = !audioEnabledRef.current; setAudioEnabled(a => !a) }}
        className={`fixed bottom-6 left-6 z-[999] w-10 h-10 flex items-center justify-center rounded-full border backdrop-blur-lg transition-all ${
          audioEnabled
            ? "border-[rgba(201,74,40,0.3)] text-[#c94a28]"
            : "border-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.25)]"
        }`}
        style={{ background: "rgba(10,10,10,0.9)" }}
        title="Audio ein/aus"
      >
        {audioEnabled ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>

      <style jsx global>{`
        .stevens-speech {
          position: fixed;
          top: 0;
          left: 0;
          will-change: transform;
          width: 240px;
          background: rgba(26, 22, 18, 0.96);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(201, 74, 40, 0.2);
          border-radius: 4px;
          padding: 14px 16px;
          font-size: 12px;
          font-family: var(--font-mono), ui-monospace, monospace;
          line-height: 1.65;
          color: rgba(236, 229, 212, 0.78);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .stevens-speech.active {
          opacity: 1;
        }
        .stevens-cursor {
          display: inline-block;
          width: 1px;
          height: 11px;
          background: rgba(201, 74, 40, 0.7);
          margin-left: 1px;
          animation: stevens-blink 0.9s step-end infinite;
          vertical-align: text-bottom;
        }
        @keyframes stevens-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 768px) {
          .stevens-speech { display: none; }
        }
      `}</style>
    </>
  )
}
