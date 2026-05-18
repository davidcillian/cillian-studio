"use client"

import Link from "next/link"
import Image from "next/image"

const docs = [
  {
    slug: "brand-guidelines",
    num: "01",
    title: "Brand Guidelines",
    subtitle: "Vollständiges visuelles System",
    desc: "Farben, Typografie, Formen, Komponenten und Regeln.",
    dark: true,
  },
  {
    slug: "email-signatur",
    num: "02",
    title: "E-Mail-Signatur",
    subtitle: "4 Varianten · HTML-Templates",
    desc: "Minimal, Recommended (Fox), Reply, First-Contact.",
    dark: false,
  },
  {
    slug: "briefpapier",
    num: "03",
    title: "Briefpapier",
    subtitle: "A4 · Light + Dark",
    desc: "Deckblatt und Folgeseite, Print-Stylesheet enthalten.",
    dark: false,
  },
  {
    slug: "kunden-kommunikation",
    num: "04",
    title: "Kunden-Kommunikation",
    subtitle: "6 Template-Varianten",
    desc: "Erstanfrage, Angebot, Follow-up, Absage, Einladung, Referenz.",
    dark: false,
  },
  {
    slug: "rechnung",
    num: "05",
    title: "Rechnung",
    subtitle: "A4 · Bone + Dark · § 6 UStG",
    desc: "Kleinunternehmer-konform, Kintsugi-Hairline am Total.",
    dark: false,
  },
]

export default function BrandIndex() {
  return (
    <>
      {/* Topbar */}
      <nav
        style={{
          padding: "18px 60px",
          borderBottom: "1px solid rgba(26,22,18,.12)",
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
          fontSize: 11,
          color: "#6b6456",
          textTransform: "uppercase",
          letterSpacing: ".08em",
          background: "rgba(240,238,233,.92)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#1a1612" }}>
          <Image src="/brand/assets/cillian-fox-ink.png" alt="" width={18} height={18} style={{ objectFit: "contain" }} />
          <span style={{ fontWeight: 500, letterSpacing: "-.01em" }}>Cillian Studio</span>
        </div>
        <span>·</span>
        <span>Brand Assets</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 22 }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>← Website</Link>
        </div>
      </nav>

      {/* Masthead */}
      <div
        style={{
          padding: "72px 72px 56px",
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: 72,
          alignItems: "end",
          borderBottom: "1px solid rgba(26,22,18,.12)",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
              fontSize: 11,
              color: "#6b6456",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              marginBottom: 22,
              display: "flex",
              gap: 18,
              alignItems: "center",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                background: "#c94a28",
                display: "inline-block",
                transform: "rotate(45deg)",
                flexShrink: 0,
              }}
            />
            <span>§ 000 · Brand Assets · Ausgabe 01</span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-sans, "Inter Tight", sans-serif)',
              fontSize: "clamp(48px, 6vw, 72px)",
              fontWeight: 500,
              letterSpacing: "-.028em",
              lineHeight: 0.96,
              color: "#1a1612",
            }}
          >
            Alles{" "}
            <em
              style={{
                fontFamily: 'var(--font-serif, "Fraunces", serif)',
                fontStyle: "italic",
                fontWeight: 400,
                color: "#c94a28",
              }}
            >
              Sichtbare
            </em>{" "}
            hat eine Stimme.
          </h1>
        </div>
        <div
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "#6b6456",
            borderLeft: "1px solid rgba(26,22,18,.12)",
            paddingLeft: 22,
          }}
        >
          <strong style={{ color: "#1a1612", fontWeight: 500 }}>Fünf Dokumente. Ein System.</strong>
          <br />
          Alle Brand-Assets folgen dem Sumi-Ink-Prinzip: warmes Schwarz, eine einzige Signalfarbe, keine runden Ecken.
        </div>
      </div>

      {/* Document list */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          borderTop: "1px solid rgba(26,22,18,.12)",
          borderLeft: "1px solid rgba(26,22,18,.12)",
        }}
      >
        {docs.map((doc) => (
          <Link
            key={doc.slug}
            href={`/brand/${doc.slug}`}
            style={{
              display: "block",
              padding: "clamp(32px, 4vw, 48px)",
              borderRight: "1px solid rgba(26,22,18,.12)",
              borderBottom: "1px solid rgba(26,22,18,.12)",
              textDecoration: "none",
              color: "inherit",
              position: "relative",
              transition: "background .15s",
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                fontSize: 10,
                color: "#c94a28",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              {doc.num}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans, "Inter Tight", sans-serif)',
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: "-.018em",
                color: "#1a1612",
                marginBottom: 6,
              }}
            >
              {doc.title}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                fontSize: 10,
                color: "#a9a191",
                letterSpacing: ".08em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              {doc.subtitle}
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.55, color: "#6b6456", margin: 0 }}>
              {doc.desc}
            </p>
            {doc.dark && (
              <div
                style={{
                  marginTop: 20,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                  fontSize: 10,
                  color: "#a9a191",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: "#1a1612",
                    display: "inline-block",
                    borderRadius: "50%",
                  }}
                />
                Dark Mode
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Colophon */}
      <div
        style={{
          padding: "44px 72px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
          fontSize: 11,
          color: "#a9a191",
          letterSpacing: ".1em",
          textTransform: "uppercase",
          borderTop: "1px solid rgba(26,22,18,.12)",
          gap: 40,
        }}
      >
        <div style={{ display: "grid", gap: 6 }}>
          <span><strong style={{ color: "#1a1612", fontWeight: 500 }}>Cillian Studio</strong></span>
          <span>David Scherngell · Wien</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 8,
              height: 8,
              background: "#c94a28",
              display: "inline-block",
              transform: "rotate(45deg)",
            }}
          />
          <span>Brand Assets v1.0</span>
        </div>
        <div style={{ display: "grid", gap: 6, textAlign: "right" }}>
          <span>cillianstudio.com</span>
          <span>3d@davidcillian.com</span>
        </div>
      </div>
    </>
  )
}
