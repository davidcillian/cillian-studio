"use client"

import Image from "next/image"

const clients = [
  {
    name: "CreARTive Vienna",
    logo: "/images/clients/creartive-vienna.png",
    url: "https://www.creartive-vienna.com/",
    description: "Digitaler Innovationshub für kreative Kunst- und Kulturprojekte in Wien.",
    logoBg: "#f7f7f7",
  },
  {
    name: "Goodcare IT Services",
    logo: "/images/clients/goodcare-it.png",
    url: "https://goodcare.at/",
    description: "Anbieter von Open-Source-Lösungen und Alternativen zu Microsoft-Produkten.",
    logoBg: "#1a1a1a",
  },
  {
    name: "CS Orthoseminars",
    logo: "/images/clients/csorthoseminars.jpg",
    url: "https://csorthoseminars.com/",
    description: "Fortbildungsplattform für Kieferorthopädie — aus der Praxis für die Praxis.",
    logoBg: "#f7f7f7",
  },
]

const S = {
  section: {
    padding: "96px max(32px, 4vw)",
    borderTop: "1px solid var(--line)",
    maxWidth: 1600,
    margin: "0 auto",
  } as React.CSSProperties,
  kicker: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    letterSpacing: ".08em",
    textTransform: "uppercase" as const,
    color: "var(--ink-3)",
    marginBottom: 14,
  },
}

export function ClientsSection() {
  return (
    <section id="clients" style={{ background: "var(--bg)" }}>
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
            § 04 — Vertrauen
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
              Bisherige{" "}
              <span style={{ fontWeight: 300, color: "var(--ink-4)" }}>Kunden.</span>
            </h2>
          </div>
        </div>

        {/* Clients — card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(16px, 2vw, 24px)",
          }}
        >
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                background: "var(--bg-2)",
                border: "1px solid var(--line)",
                overflow: "hidden",
                transition: "border-color .2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--line-2)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--line)")}
            >
              {/* Logo area */}
              <div
                style={{
                  height: 140,
                  background: client.logoBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px 32px",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={240}
                  height={80}
                  style={{ objectFit: "contain", maxHeight: 64, width: "auto" }}
                />
              </div>

              {/* Text */}
              <div
                style={{
                  padding: "24px",
                  borderTop: "1px solid var(--line)",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "clamp(16px, 1.5vw, 19px)",
                    fontWeight: 500,
                    color: "var(--ink)",
                    letterSpacing: "-.018em",
                  }}
                >
                  {client.name}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--ink-3)",
                    lineHeight: 1.55,
                  }}
                >
                  {client.description}
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: 16,
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "var(--ink-3)",
                  }}
                >
                  Website →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
