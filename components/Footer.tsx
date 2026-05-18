"use client"

import { useState } from "react"
import { X, Youtube, Instagram, Linkedin } from "lucide-react"

const SOCIAL = [
  {
    href: "https://www.youtube.com/channel/UCUnpVqUZeM4HgbusAsfYz-w",
    label: "YouTube",
    icon: <Youtube size={16} />,
  },
  {
    href: "https://www.instagram.com/cillian_studio",
    label: "Instagram",
    icon: <Instagram size={16} />,
  },
  {
    href: "https://www.linkedin.com/company/cillian-studio",
    label: "LinkedIn",
    icon: <Linkedin size={16} />,
  },
  {
    href: "https://www.tiktok.com/@cillian_studio",
    label: "TikTok",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
]

export function Footer() {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false)
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false)

  return (
    <footer style={{ background: "var(--bg-deep)", borderTop: "1px solid var(--line)" }}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Colophon top strip */}
        <div
          className="flex items-center gap-4 py-6"
          style={{ borderBottom: "1px solid var(--line)" }}
        >
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              background: "var(--signal)",
              transform: "rotate(45deg)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
            }}
          >
            Cillian Studio — Wien · v1.0.0 · {new Date().getFullYear()}
          </span>
          <span
            style={{
              marginLeft: "auto",
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
            }}
          >
            3D · KI · Training
          </span>
        </div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-12 py-12">
          {/* Studio */}
          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                marginBottom: 16,
              }}
            >
              § 00 — Studio
            </div>
            <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.65 }}>
              Kreativ- und Technologie-Studio in Wien. 3D-Visualisierung, KI-Agenten und
              Gamification aus einer Hand.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {SOCIAL.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="transition-colors duration-200"
                  style={{ color: "var(--ink-3)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink-2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-3)")}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                marginBottom: 16,
              }}
            >
              § 01 — Navigation
            </div>
            <nav className="flex flex-col gap-2">
              {[
                { href: "#about",    label: "Studio",      no: "01" },
                { href: "#services", label: "Disziplinen", no: "02" },
                { href: "#projects", label: "Arbeiten",    no: "03" },
                { href: "#gallery",  label: "Bildwerk",    no: "05" },
                { href: "#contact",  label: "Kontakt",     no: "06" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 transition-colors duration-200 group"
                  style={{ color: "var(--ink-3)", fontSize: 13 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-3)")}
                >
                  <span style={{ fontFamily: "var(--mono)", fontSize: 10 }}>{item.no}</span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Rechtliches */}
          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                marginBottom: 16,
              }}
            >
              § 02 — Rechtliches
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => { setIsImpressumOpen(true); setIsDatenschutzOpen(false) }}
                className="text-left transition-colors duration-200"
                style={{ fontSize: 13, color: "var(--ink-3)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-3)")}
              >
                Impressum
              </button>
              <button
                data-privacy-button
                onClick={() => { setIsDatenschutzOpen(true); setIsImpressumOpen(false) }}
                className="text-left transition-colors duration-200"
                style={{ fontSize: 13, color: "var(--ink-3)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-3)")}
              >
                Datenschutz
              </button>
              <a
                href="mailto:office@cillianstudio.com"
                className="transition-colors duration-200"
                style={{ fontSize: 13, color: "var(--ink-3)", fontFamily: "var(--mono)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--signal)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-3)")}
              >
                office@cillianstudio.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          className="py-5 flex items-center justify-between"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
            }}
          >
            &copy; {new Date().getFullYear()} David Scherngell · Pelzgasse 3/17 · 1150 Wien
          </span>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
            }}
          >
            AMS UGP · Österreich
          </span>
        </div>
      </div>

      {/* Legal modals */}
      {isImpressumOpen && (
        <LegalModal title="Impressum" onClose={() => setIsImpressumOpen(false)}>
          <section>
            <h4 style={modalHead}>Websitebetreiber</h4>
            <p style={{ color: "var(--ink)", marginBottom: 4 }}>David Scherngell</p>
            <p style={modalMuted}>Pelzgasse 3/17 · 1150 Wien · Österreich</p>
          </section>
          <section>
            <h4 style={modalHead}>Kontakt</h4>
            <p style={modalMuted}>E-Mail: office@cillianstudio.com</p>
            <p style={modalMuted}>Telefon: +43 680 1609124</p>
          </section>
          <section>
            <h4 style={modalHead}>Hinweis gemäß § 5 ECG und § 24 MedienG</h4>
            <p style={modalMuted}>
              Diese Website dient der Präsentation kreativer Arbeiten und Projekte von David
              Scherngell. Die gewerbliche Tätigkeit befindet sich derzeit in Gründung. Bis zur
              formellen Gewerbeanmeldung handelt es sich nicht um ein gewerbliches Angebot im
              Sinne des E-Commerce-Gesetzes.
            </p>
          </section>
        </LegalModal>
      )}

      {isDatenschutzOpen && (
        <LegalModal title="Datenschutzerklärung" onClose={() => setIsDatenschutzOpen(false)}>
          <section>
            <h4 style={modalHead}>1. Verantwortlicher</h4>
            <p style={modalMuted}>David Scherngell · Pelzgasse 3/17 · 1150 Wien · E-Mail: office@cillianstudio.com</p>
          </section>
          <section>
            <h4 style={modalHead}>2. Ihre Rechte</h4>
            <p style={modalMuted}>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Widerspruch und Datenübertragbarkeit.
            </p>
          </section>
          <section>
            <h4 style={modalHead}>3. Datenerfassung</h4>
            <p style={modalMuted}>
              Beim Besuch werden Server-Logfiles erfasst (IP-Adresse, Browser, Betriebssystem).
              Speicherdauer: max. 7 Tage. Keine Analyse- oder Tracking-Cookies.
            </p>
          </section>
          <section>
            <h4 style={modalHead}>4. Kontaktformular</h4>
            <p style={modalMuted} data-privacy-section>
              Formulardaten (Name, E-Mail, Nachricht) werden ausschließlich zur Bearbeitung
              Ihrer Anfrage verwendet (Art. 6 Abs. 1 lit. b DSGVO). Speicherdauer: max. 12 Monate.
            </p>
          </section>
        </LegalModal>
      )}
    </footer>
  )
}

const modalHead = {
  fontSize: 14,
  fontWeight: 500,
  color: "var(--ink)",
  marginBottom: 8,
  marginTop: 0,
}
const modalMuted = { fontSize: 13, color: "var(--ink-2)", lineHeight: 1.65 }

function LegalModal({
  title,
  children,
  onClose,
}: {
  title: string
  children: React.ReactNode
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(15,12,9,.85)" }}
      onClick={onClose}
    >
      <div
        className="max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        style={{
          background: "var(--bg-2)",
          border: "1px solid var(--line-2)",
          borderRadius: 2,
          padding: 40,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center" style={{ marginBottom: 28 }}>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "-.02em",
              color: "var(--ink)",
            }}
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            className="flex items-center justify-center transition-colors"
            style={{
              width: 32,
              height: 32,
              background: "var(--line)",
              color: "var(--ink-2)",
            }}
          >
            <X size={14} />
          </button>
        </div>
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </div>
  )
}
