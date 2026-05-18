"use client"

import Link from "next/link"
import Image from "next/image"

const darkVars: React.CSSProperties = {
  ["--bg" as string]: "#1a1612",
  ["--bg-2" as string]: "#241f19",
  ["--bg-3" as string]: "#2e2822",
  ["--bg-deep" as string]: "#0f0c09",
  ["--ink" as string]: "#ece5d4",
  ["--ink-2" as string]: "#a9a191",
  ["--ink-3" as string]: "#6b6456",
  ["--line" as string]: "rgba(236,229,212,.12)",
  ["--line-2" as string]: "rgba(236,229,212,.22)",
  ["--signal" as string]: "#c94a28",
  ["--sans" as string]: '"Inter Tight", -apple-system, sans-serif',
  ["--mono" as string]: '"JetBrains Mono", ui-monospace, monospace',
  ["--serif" as string]: '"Fraunces", serif',
}

const colors = [
  { name: "bg", hex: "#1a1612", jp: "黒茶 Kurocha", role: "Seiten-Background", light: false },
  { name: "bg-elevated", hex: "#241f19", jp: "藍黒 Aikuro", role: "Erhöhte Flächen", light: false },
  { name: "bg-card", hex: "#2e2822", jp: "檳榔子 Binroji", role: "Cards (sparsam)", light: false },
  { name: "ink", hex: "#ece5d4", jp: "和紙 Washi", role: "Primäre Schrift", light: true },
  { name: "ink-2", hex: "#a9a191", jp: "Ash", role: "Sekundärtext", light: false },
  { name: "ink-3", hex: "#6b6456", jp: "Stone", role: "Labels, Icons", light: false },
  { name: "signal", hex: "#c94a28", jp: "朱 Shu", role: "Einzige Akzentfarbe", light: false },
  { name: "paper", hex: "#f0eee9", jp: "Washi Hell", role: "Druck / Print", light: true },
]

const typeScale = [
  { label: "Display XL", size: "clamp(72px, 10vw, 180px)", weight: 500, ls: "-.045em", lh: 0.88, font: "Inter Tight", sample: "Ein Studio." },
  { label: "Display L", size: "clamp(48px, 7vw, 120px)", weight: 500, ls: "-.035em", lh: 0.92, font: "Inter Tight", sample: "Drei Disziplinen." },
  { label: "H2", size: "clamp(36px, 5vw, 56px)", weight: 500, ls: "-.025em", lh: 1.0, font: "Inter Tight", sample: "Eine Stimme." },
  { label: "H3", size: "clamp(22px, 2.5vw, 28px)", weight: 500, ls: "-.025em", lh: 1.1, font: "Inter Tight", sample: "Disziplinen & Dienste" },
  { label: "Body", size: "15px", weight: 400, ls: "0", lh: 1.6, font: "Inter Tight", sample: "Cillian Studio arbeitet an der Schnittstelle von 3D-Visualisierung, generativer KI und Gamification." },
  { label: "Mono Label", size: "11px", weight: 400, ls: ".08em", lh: 1.5, font: "JetBrains Mono", sample: "§ 01 — Studio · Wien · 2026" },
]

const dosAndDonts = [
  { do: true, text: "Sumi-Ink Wärmespektrum — nie reines #000" },
  { do: true, text: "Hairlines statt Card-Backgrounds" },
  { do: true, text: "Tate-Folio für alle Section-Nummern" },
  { do: true, text: "Mono-Labels für alle Meta-Daten" },
  { do: true, text: "Exakt eine Shu-Signal-Stelle pro Section" },
  { do: true, text: "Edge-to-edge Bilder, kein Rounding" },
  { do: false, text: "Kein #000000 oder #0a0a0a" },
  { do: false, text: "Kein Blau, Lila, Cyan — kein #3b82f6" },
  { do: false, text: "Kein border-radius auf Cards, Buttons, Images" },
  { do: false, text: "Kein Glassmorphism auf Content-Flächen" },
  { do: false, text: "Keine Scroll-Trigger-Animationen (whileInView)" },
  { do: false, text: "Kein Fraunces aufrecht oder im Body-Text" },
]

export default function BrandGuidelinesPage() {
  return (
    <div style={{ ...darkVars, background: "var(--bg)", color: "var(--ink)", fontFamily: "var(--sans)", WebkitFontSmoothing: "antialiased" }}>
      {/* Navigation */}
      <nav style={{ padding: "18px max(32px, 4vw)", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 18, fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".08em", background: "rgba(28,23,20,.88)", backdropFilter: "blur(14px)", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--ink)" }}>
          <Image src="/brand/assets/cillian-fox-white.png" alt="" width={18} height={18} style={{ objectFit: "contain" }} />
          <span>Cillian Studio</span>
        </div>
        <span>·</span>
        {["01 Logo", "02 Farbe", "03 Typografie", "04 Komponenten", "05 Regeln"].map((item, i) => (
          <span key={i} style={{ display: "none" }}>{item}</span>
        ))}
        <span>Brand Guidelines · Ausgabe 01</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 22, alignItems: "center" }}>
          <Link href="/brand" style={{ color: "inherit", textDecoration: "none" }}>← Brand</Link>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--signal)", boxShadow: "0 0 8px var(--signal)", display: "inline-block" }} />
            <span>System aktiv</span>
          </div>
        </div>
      </nav>

      {/* Cover */}
      <header style={{ padding: "clamp(48px, 6vw, 96px) max(32px, 4vw)", borderBottom: "1px solid var(--line)", position: "relative", overflow: "hidden" }}>
        {/* Ghost fox watermark */}
        <div style={{ position: "absolute", right: "-5%", top: "50%", transform: "translateY(-50%)", width: "50vw", maxWidth: 800, opacity: .045, pointerEvents: "none" }}>
          <Image src="/brand/assets/cillian-fox-white.png" alt="" width={800} height={800} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
        </div>

        {/* Meta grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 64 }}>
          {[["A — Identitätssystem", "Cillian Studio"], ["Kunde", "David Scherngell · Wien"], ["Ausgabe", "01 · 2026"], ["Umfang", "Gesamtmarke, digital + Print"]].map(([label, value]) => (
            <div key={label}><span style={{ display: "block" }}>{label}</span><strong style={{ color: "var(--ink)", fontWeight: 500, display: "block", marginTop: 6, fontSize: 12 }}>{value}</strong></div>
          ))}
        </div>

        {/* Hero */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 4vw, 64px)", alignItems: "start", position: "relative", zIndex: 1 }}>
          <h1 style={{ fontFamily: "var(--sans)", fontSize: "clamp(56px, 8vw, 120px)", fontWeight: 500, letterSpacing: "-.035em", lineHeight: .92, color: "var(--ink)" }}>
            Ein Studio<br />für{" "}
            <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, color: "var(--signal)" }}>drei</em>{" "}
            Disziplinen.<br />
            <span style={{ fontWeight: 300, color: "var(--ink-2)" }}>Eine Stimme.</span>
          </h1>
          <div style={{ borderLeft: "1px solid var(--line)", paddingLeft: "clamp(20px, 3vw, 32px)", paddingTop: 8 }}>
            <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.6, maxWidth: "40ch", marginBottom: 16 }}>
              Cillian Studio ist ein Creative-Technology-Studio, tätig in 3D, generativer KI und Training. Die Identität behandelt diese drei Felder als ein einziges Instrument — monochrom, präzise und leise genug, damit die Arbeit selbst sprechen kann.
            </p>
            <p style={{ color: "var(--ink-3)", fontSize: 14, lineHeight: 1.6, maxWidth: "40ch" }}>
              Dieses Dokument definiert das visuelle und verbale System für jede Oberfläche: Bildschirm, Druck und Bühne.
            </p>
          </div>
        </div>

        {/* Chapter strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, paddingTop: 32, marginTop: 64, borderTop: "1px solid var(--line)" }}>
          {[["§ 01", "Logo & Anwendungen"], ["§ 02 – 03", "Typografie & Farbe"], ["§ 04 – 06", "Ausstattung, Social, Web"], ["§ 07 – 08", "Motion & Präsentation"]].map(([ch, title]) => (
            <div key={ch}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".08em" }}>{ch}</div>
              <div style={{ marginTop: 4, fontSize: 14, color: "var(--ink)" }}>{title}</div>
            </div>
          ))}
        </div>
      </header>

      {/* § 01 — Farbe */}
      <section style={{ padding: "96px max(32px, 4vw)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "clamp(24px, 3vw, 48px)", marginBottom: 64 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".08em", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
            § 02 — Farbe
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--sans)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 500, letterSpacing: "-.025em", lineHeight: 1.0, color: "var(--ink)", margin: 0 }}>
              Sumi-Ink Wärmespektrum.{" "}
              <span style={{ fontWeight: 300, color: "var(--ink-2)" }}>Nie reines Schwarz.</span>
            </h2>
            <p style={{ color: "var(--ink-2)", fontSize: 16, lineHeight: 1.55, maxWidth: "60ch", marginTop: 18 }}>
              80/15/5 Ratio: ~80% Bg/Ink, 15% Ash/Stone Sekundär, max 5% Shu-Signal pro Section.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--line)", borderLeft: "1px solid var(--line)" }}>
          {colors.map((c) => (
            <div key={c.name} style={{ borderRight: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
              <div style={{ height: 80, background: c.hex }} />
              <div style={{ padding: "16px 18px" }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 6 }}>{c.name}</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink)", letterSpacing: ".04em", marginBottom: 4 }}>{c.hex}</div>
                <div style={{ fontSize: 11, color: "var(--ink-3)" }}>{c.jp}</div>
                <div style={{ fontSize: 11, color: "var(--ink-2)", marginTop: 4 }}>{c.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* § 02 — Typografie */}
      <section style={{ padding: "96px max(32px, 4vw)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "clamp(24px, 3vw, 48px)", marginBottom: 64 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".08em", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
            § 03 — Typografie
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--sans)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 500, letterSpacing: "-.025em", lineHeight: 1.0, color: "var(--ink)", margin: 0 }}>
              Drei Schriften.{" "}
              <span style={{ fontWeight: 300, color: "var(--ink-2)" }}>Strikt getrennte Rollen.</span>
            </h2>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--line)" }}>
          {typeScale.map((t, i) => (
            <div key={t.label} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 32, padding: "24px 0", borderBottom: "1px solid var(--line)", alignItems: "baseline" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".08em", textTransform: "uppercase", lineHeight: 1.6 }}>
                <div style={{ color: "var(--ink-2)", marginBottom: 4 }}>{t.label}</div>
                <div>{t.font}</div>
                <div>{t.size}</div>
                <div>w{t.weight} · {t.ls}</div>
              </div>
              <div
                style={{
                  fontFamily: t.font === "JetBrains Mono" ? "var(--mono)" : "var(--sans)",
                  fontSize: t.size,
                  fontWeight: t.weight,
                  letterSpacing: t.ls,
                  lineHeight: t.lh,
                  color: "var(--ink)",
                  textTransform: t.font === "JetBrains Mono" ? "uppercase" : "none",
                }}
              >
                {t.sample}
              </div>
            </div>
          ))}
        </div>

        {/* Font table */}
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "1px solid var(--line)", borderLeft: "1px solid var(--line)" }}>
          {[
            { font: "Inter Tight", role: "Alle Headings, Body-Text", verboten: "Code, Labels, Mono-Daten" },
            { font: "JetBrains Mono", role: "Labels, Tags, Status, Nummern", verboten: "Fließtext" },
            { font: "Fraunces", role: "Pull-Quotes, Chapter-Headings (kursiv)", verboten: "Body-Text, reguläre Headings, aufrecht" },
          ].map((row) => (
            <div key={row.font} style={{ padding: "24px", borderRight: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
              <div style={{ fontSize: 18, fontWeight: 500, color: "var(--ink)", marginBottom: 8, fontFamily: row.font === "JetBrains Mono" ? "var(--mono)" : row.font === "Fraunces" ? "var(--serif)" : "var(--sans)" }}>{row.font}</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 6 }}>Für</div>
              <div style={{ fontSize: 13, color: "var(--ink-2)", marginBottom: 14 }}>{row.role}</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 6 }}>Nicht für</div>
              <div style={{ fontSize: 13, color: "var(--ink-3)" }}>{row.verboten}</div>
            </div>
          ))}
        </div>
      </section>

      {/* § 03 — Komponenten */}
      <section style={{ padding: "96px max(32px, 4vw)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "clamp(24px, 3vw, 48px)", marginBottom: 64 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".08em", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
            § 04 — Komponenten
          </div>
          <h2 style={{ fontFamily: "var(--sans)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 500, letterSpacing: "-.025em", lineHeight: 1.0, color: "var(--ink)", margin: 0 }}>
            Editoriale <span style={{ fontWeight: 300, color: "var(--ink-2)" }}>Bausteine.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          {/* Masthead */}
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 16 }}>Masthead</div>
            <div style={{ border: "1px solid var(--line)", padding: 32 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: 24, alignItems: "start" }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".08em", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
                  § 0N — Name
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--sans)", fontSize: 28, fontWeight: 500, letterSpacing: "-.025em", lineHeight: 1.1, color: "var(--ink)", margin: 0 }}>Titel. <span style={{ fontWeight: 300, color: "var(--ink-2)" }}>Leichter Teil.</span></h3>
                  <p style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55, maxWidth: "40ch", marginTop: 10, marginBottom: 0 }}>Beschreibung max 60 Zeichen.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tate-Folio */}
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 16 }}>Tate-Folio</div>
            <div style={{ border: "1px solid var(--line)", padding: 32, display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{ writingMode: "vertical-rl", fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".22em", textTransform: "uppercase" }}>§ 03 — Section</div>
              <div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-2)" }}>Vertikale Section-Nummer links neben Content. writing-mode: vertical-rl, Mono 10px, .22em letter-spacing, uppercase.</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 16 }}>Buttons</div>
            <div style={{ border: "1px solid var(--line)", padding: 32, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <button style={{ padding: "12px 28px", background: "var(--ink)", color: "var(--bg)", border: "none", borderRadius: 0, fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", cursor: "pointer" }}>Primary</button>
              <button style={{ padding: "12px 28px", background: "transparent", color: "var(--ink-2)", border: "1px solid var(--line-2)", borderRadius: 0, fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", cursor: "pointer" }}>Secondary</button>
            </div>
          </div>

          {/* Kintsugi Tick */}
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 16 }}>Kintsugi-Tick</div>
            <div style={{ border: "1px solid var(--line)", padding: 32, display: "flex", gap: 24, alignItems: "center" }}>
              {[6, 8, 10, 12].map((s) => (
                <span key={s} style={{ width: s, height: s, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
              ))}
              <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".08em", textTransform: "uppercase" }}>6 / 8 / 10 / 12 px</span>
            </div>
          </div>
        </div>
      </section>

      {/* § 04 — Do's and Don'ts */}
      <section style={{ padding: "96px max(32px, 4vw)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "clamp(24px, 3vw, 48px)", marginBottom: 64 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".08em", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
            § 05 — Regeln
          </div>
          <h2 style={{ fontFamily: "var(--sans)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 500, letterSpacing: "-.025em", lineHeight: 1.0, color: "var(--ink)", margin: 0 }}>
            Was bleibt.{" "}
            <span style={{ fontWeight: 300, color: "var(--ink-2)" }}>Was geht.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid var(--line)", borderLeft: "1px solid var(--line)" }}>
          {dosAndDonts.map((item, i) => (
            <div key={i} style={{ padding: "20px 24px", borderRight: "1px solid var(--line)", borderBottom: "1px solid var(--line)", display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ flexShrink: 0, width: 16, height: 16, borderRadius: "50%", background: item.do ? "rgba(107, 132, 85, .2)" : "rgba(201, 74, 40, .15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: item.do ? "#6B8A55" : "var(--signal)", fontWeight: 700 }}>
                {item.do ? "✓" : "✕"}
              </span>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: item.do ? "var(--ink-2)" : "var(--ink-3)" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "64px max(32px, 4vw)", background: "var(--bg-deep)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, borderTop: "1px solid var(--line)" }}>
        <div>
          <strong style={{ color: "var(--ink)", fontWeight: 500, display: "block", marginBottom: 6, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase" }}>Cillian Studio</strong>
          <div style={{ fontSize: 13, lineHeight: 1.7, color: "var(--ink-3)" }}>David Scherngell<br />Creative Technology · Wien</div>
        </div>
        <div>
          <strong style={{ color: "var(--ink)", fontWeight: 500, display: "block", marginBottom: 6, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase" }}>Dokument</strong>
          <div style={{ fontSize: 13, lineHeight: 1.7, color: "var(--ink-3)" }}>Brand Guidelines · Ausgabe 01<br />April 2026 · Intern + Partner</div>
        </div>
        <div>
          <strong style={{ color: "var(--ink)", fontWeight: 500, display: "block", marginBottom: 6, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase" }}>Kontakt</strong>
          <div style={{ fontSize: 13, lineHeight: 1.7, color: "var(--ink-3)" }}>office@cillianstudio.com<br />cillianstudio.com</div>
        </div>
        <div style={{ gridColumn: "1 / -1", paddingTop: 40, borderTop: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
          <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".1em", textTransform: "uppercase" }}>Cillian Studio · Brand Guidelines v1.0 · Wien · 2026</span>
        </div>
      </footer>
    </div>
  )
}
