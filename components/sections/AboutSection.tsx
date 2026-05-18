"use client"

import Image from "next/image"
import { Instagram, Globe, Linkedin } from "lucide-react"

const S = {
  section: {
    padding: "96px max(32px, 4vw)",
    borderTop: "1px solid var(--line)",
    maxWidth: 1600,
    margin: "0 auto",
  } as React.CSSProperties,
  tate: {
    writingMode: "vertical-rl" as const,
    fontFamily: "var(--mono)",
    fontSize: 10,
    color: "var(--ink-3)",
    letterSpacing: ".22em",
    textTransform: "uppercase" as const,
    lineHeight: 1,
    paddingTop: 4,
    userSelect: "none" as const,
  },
  kicker: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    letterSpacing: ".08em",
    textTransform: "uppercase" as const,
    color: "var(--ink-3)",
    marginBottom: 14,
  },
}

interface Member {
  name: string
  role: string
  disciplines: string[]
  image?: string
  initials?: string
  socials: { href: string; label: string; icon: React.ReactNode }[]
}

const members: Member[] = [
  {
    name: "David Scherngell",
    role: "Gründer · Creative Technology",
    disciplines: [
      "8+ Jahre 3D mit Blender & Unreal Engine 5",
      "Lokale KI-Agenten (DSGVO-konform) für Unternehmen",
      "Verbindet 3D, KI und Gamification in einem Ansatz",
    ],
    image: "/images/david-scherngell.jpeg",
    socials: [
      {
        href: "https://www.instagram.com/david_cillian?igsh=MW1iYjczY2d0Z2gzeA==",
        label: "Instagram",
        icon: <Instagram size={15} />,
      },
      {
        href: "https://www.linkedin.com/in/david-scherngell-38a328346/",
        label: "LinkedIn",
        icon: <Linkedin size={15} />,
      },
      {
        href: "https://www.artstation.com/davidcillian",
        label: "ArtStation",
        icon: (
          <Image src="/images/Logos/artstation-logo.png" alt="ArtStation" width={15} height={15} />
        ),
      },
    ],
  },
  {
    name: "Daniel Abada",
    role: "Marketing & Gamification · Externer Berater",
    disciplines: [
      "Bachelor in Gaming Business",
      "Gamification und strategische Markenführung",
      "KI-gestütztes Marketing",
    ],
    image: "/images/Daniel_Abada.jpeg",
    socials: [
      {
        href: "https://danielabada.com",
        label: "Website",
        icon: <Globe size={15} />,
      },
      {
        href: "https://www.linkedin.com/in/daniel-abada-1bb70b324/",
        label: "LinkedIn",
        icon: <Linkedin size={15} />,
      },
    ],
  },
  {
    name: "Adrian Spielberger",
    role: "3D Artist · Externer Berater",
    disciplines: [
      "Organic Modeling, Texturing & LookDev",
      "Visuell anspruchsvolle 3D-Projekte",
      "UI/UX Expertise",
    ],
    initials: "AS",
    socials: [
      {
        href: "https://www.instagram.com/3d.aspect",
        label: "Instagram",
        icon: <Instagram size={15} />,
      },
      {
        href: "https://www.linkedin.com/in/adrian-spielberger/",
        label: "LinkedIn",
        icon: <Linkedin size={15} />,
      },
    ],
  },
  {
    name: "GearWorks Production",
    role: "Technical Specialist · Externer Berater",
    disciplines: [
      "Generatoren, Development & Coding",
      "Umfangreiche Engine-Erfahrung",
      "Technisches Rückgrat für komplexe Projekte",
    ],
    image: "/images/gearworks-icon.png?v=2",
    socials: [
      {
        href: "https://www.youtube.com/@gearworks-gameproduction3745",
        label: "YouTube",
        icon: (
          <Image src="/images/Logos/Youtube_Logo.png" alt="YouTube" width={15} height={11} />
        ),
      },
    ],
  },
]

export function AboutSection() {
  return (
    <section id="about" style={{ background: "var(--bg-2)" }}>
      <div style={S.section} className="sec-inner">
        {/* Section header */}
        <div
          className="sec-head"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
            gap: 48,
            alignItems: "baseline",
            marginBottom: 64,
          }}
        >
          <div style={{ ...S.kicker, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ display: "inline-block", width: 8, height: 8, background: "var(--signal)", transform: "rotate(45deg)", flexShrink: 0 }} />
            § 01 — Studio
          </div>
          <div>
            <h2
              style={{
                fontFamily: "var(--sans)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 500,
                letterSpacing: "-.025em",
                lineHeight: 1,
                color: "var(--ink)",
              }}
            >
              Ein Studio.{" "}
              <span style={{ fontWeight: 300, color: "var(--ink-4)" }}>Vier Stimmen.</span>
            </h2>
            <p
              style={{
                maxWidth: "60ch",
                color: "var(--ink-2)",
                marginTop: 18,
                fontSize: 16,
                lineHeight: 1.55,
              }}
            >
              Cillian Studio kombiniert 3D-Kreation, KI-Automatisierung und Gamification in einem
              interdisziplinären Team — gegründet in Wien, vernetzt in Europa.
            </p>
          </div>
        </div>

        {/* Team members */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {members.map((member, i) => {
            const imageLeft = i % 2 === 0
            return (
              <div
                key={member.name}
                className="mob-stack"
                style={{
                  display: "grid",
                  gridTemplateColumns: "24px 1fr",
                  gap: 32,
                  borderTop: "1px solid var(--line)",
                  paddingTop: 48,
                  paddingBottom: 48,
                }}
              >
                {/* Tate-Folio */}
                <div style={S.tate} className="tate-hide">
                  {String(i + 1).padStart(2, "0")} — {member.name.split(" ")[0]}
                </div>

                {/* Content */}
                <div
                  className="mob-stack"
                  style={{
                    display: "grid",
                    gridTemplateColumns: imageLeft ? "minmax(0, 420px) 1fr" : "1fr minmax(0, 420px)",
                    gap: "clamp(24px, 4vw, 64px)",
                    alignItems: "start",
                  }}
                >
                  {/* Image */}
                  {imageLeft ? (
                    <>
                      <MemberImage member={member} />
                      <MemberText member={member} />
                    </>
                  ) : (
                    <>
                      <MemberText member={member} />
                      <MemberImage member={member} className="mob-first" />
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MemberImage({ member, className }: { member: Member; className?: string }) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        background: "var(--bg-3)",
        overflow: "hidden",
        minHeight: 280,
      }}
    >
      {member.image ? (
        <Image
          src={member.image}
          alt={member.name}
          width={680}
          height={480}
          style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            minHeight: 280,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--sans)",
              fontSize: 72,
              fontWeight: 500,
              color: "var(--ink-3)",
              letterSpacing: "-.04em",
            }}
          >
            {member.initials}
          </span>
        </div>
      )}
    </div>
  )
}

function MemberText({ member }: { member: Member }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          color: "var(--ink-3)",
          letterSpacing: ".08em",
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        {member.role}
      </div>
      <h3
        style={{
          fontSize: "clamp(24px, 3vw, 36px)",
          fontWeight: 500,
          letterSpacing: "-.025em",
          color: "var(--ink)",
          lineHeight: 1.1,
          marginBottom: 24,
        }}
      >
        {member.name}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {member.disciplines.map((d, i) => (
          <li
            key={i}
            style={{
              padding: "10px 0",
              borderTop: "1px solid var(--line)",
              color: "var(--ink-2)",
              fontSize: 14,
              lineHeight: 1.5,
            }}
          >
            {d}
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
        {member.socials.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            style={{ color: "var(--ink-3)", transition: "color .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink-2)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-3)")}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
