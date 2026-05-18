"use client"

import Link from "next/link"
import Image from "next/image"

const lightVars: React.CSSProperties = {
  ["--paper" as string]: "#f0eee9",
  ["--bone" as string]: "#ece5d4",
  ["--ink" as string]: "#1a1612",
  ["--ink-2" as string]: "#6b6456",
  ["--ink-3" as string]: "#a9a191",
  ["--line" as string]: "rgba(26,22,18,.12)",
  ["--signal" as string]: "#c94a28",
  ["--sans" as string]: '"Inter Tight", -apple-system, sans-serif',
  ["--mono" as string]: '"JetBrains Mono", ui-monospace, monospace',
  ["--serif" as string]: '"Fraunces", serif',
}

function A4Sheet({ dark = false, variant }: { dark?: boolean; variant: "deckblatt" | "folge" }) {
  const bg = dark ? "#1a1612" : "#ece5d4"
  const ink = dark ? "#ece5d4" : "#1a1612"
  const ink2 = dark ? "#a9a191" : "#6b6456"
  const line = dark ? "rgba(236,229,212,.12)" : "rgba(26,22,18,.12)"
  const signal = "#c94a28"

  return (
    <div style={{ width: 467, height: 660, background: bg, position: "relative", boxShadow: "0 1px 3px rgba(0,0,0,.08), 0 10px 40px rgba(0,0,0,.09)", overflow: "hidden", fontSize: 11, lineHeight: 1.5, flexShrink: 0 }}>
      <div style={{ position: "absolute", inset: "42px 48px 56px 48px", display: "grid", gridTemplateRows: "auto 1fr auto", gap: 24 }}>
        {variant === "deckblatt" ? (
          <>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Image src={dark ? "/brand/assets/cillian-fox-white.png" : "/brand/assets/cillian-fox-ink.png"} alt="" width={26} height={26} style={{ objectFit: "contain" }} />
                <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-.01em", color: ink }}>
                  Cillian<span style={{ fontWeight: 300, color: ink2 }}> Studio</span>
                </div>
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9, textAlign: "right", textTransform: "uppercase", letterSpacing: ".08em", color: ink2, lineHeight: 1.5 }}>
                <strong style={{ display: "block", color: ink, fontWeight: 500, marginTop: 3 }}>office@cillianstudio.com</strong>
                cillianstudio.com<br />Wien · Österreich
              </div>
            </div>

            {/* Body */}
            <div style={{ paddingTop: 60, display: "flex", flexDirection: "column", gap: 28 }}>
              <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "6px 16px", fontFamily: "var(--mono)", fontSize: 9.5, letterSpacing: ".04em", textTransform: "uppercase", color: ink2 }}>
                <span>An</span><span style={{ color: ink }}>Lena Brauer, Atelier Nordlicht</span>
                <span>Von</span><span style={{ color: ink }}>David Scherngell, Cillian Studio</span>
                <span>Datum</span><span style={{ color: ink }}>22. April 2026</span>
                <span>Ref</span><span style={{ color: ink }}>CS-2026-003</span>
              </div>

              <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.018em", lineHeight: 1.25, color: ink, maxWidth: "50ch", position: "relative", paddingBottom: 14 }}>
                Atlas — <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, color: signal }}>Finales Angebot</em> für Sequenz 01/04
                <div style={{ position: "absolute", left: 0, bottom: 0, width: 48, height: 1, background: signal }} />
              </div>

              <div style={{ fontSize: 12, lineHeight: 1.7, color: dark ? "rgba(236,229,212,.75)" : "#2a2a2a", maxWidth: "58ch" }}>
                <p style={{ marginBottom: 12 }}>Sehr geehrte Frau Brauer,</p>
                <p style={{ marginBottom: 12 }}>anbei finden Sie unser überarbeitetes Angebot für die 3D-Sequenz zur Ausstellung „Neue Horizonte". Wir freuen uns über Ihr Interesse und stehen für Rückfragen gerne zur Verfügung.</p>
                <div style={{ marginTop: 36, fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 15, color: ink }}>David Scherngell</div>
                <div style={{ fontFamily: "var(--sans)", fontSize: 11, color: ink2, marginTop: 4, letterSpacing: ".02em" }}>Cillian Studio · Inhaber</div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, paddingTop: 18, marginTop: 8, borderTop: `1px solid ${line}`, fontFamily: "var(--mono)", fontSize: 8, textTransform: "uppercase", letterSpacing: ".06em", color: ink2, lineHeight: 1.6 }}>
              <div><strong style={{ color: ink, fontWeight: 500, display: "block", marginBottom: 4 }}>Studio</strong>Pelzgasse 3/17<br />1150 Wien</div>
              <div><strong style={{ color: ink, fontWeight: 500, display: "block", marginBottom: 4 }}>Kontakt</strong>office@cillianstudio.com<br />cillianstudio.com</div>
              <div><strong style={{ color: ink, fontWeight: 500, display: "block", marginBottom: 4 }}>Rechtliches</strong>Kleinunternehmer<br />§ 6 Abs. 1 Z 27 UStG</div>
            </div>
          </>
        ) : (
          <>
            {/* Folgeseite header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${line}`, paddingBottom: 10, fontFamily: "var(--mono)", fontSize: 9, textTransform: "uppercase", letterSpacing: ".08em", color: ink2 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Image src={dark ? "/brand/assets/cillian-fox-white.png" : "/brand/assets/cillian-fox-ink.png"} alt="" width={14} height={14} style={{ objectFit: "contain" }} />
                <span style={{ color: ink }}>Cillian Studio</span>
              </div>
              <span>CS-2026-003 · Seite 2</span>
              <span>22. April 2026</span>
            </div>

            {/* Content */}
            <div style={{ fontSize: 12, lineHeight: 1.7, color: dark ? "rgba(236,229,212,.75)" : "#2a2a2a" }}>
              <p style={{ marginBottom: 12 }}>Das Projekt gliedert sich in drei Phasen: Konzept und Briefing (Woche 1–2), Produktion (Woche 3–6), Finalisierung und Übergabe (Woche 7).</p>
              <p style={{ marginBottom: 12 }}>Alle Zwischenresultate werden nach jeder Phase zur Freigabe vorgelegt. Anpassungen sind in zwei Revisionsrunden pro Phase inbegriffen.</p>
              <div style={{ margin: "20px 0", borderLeft: `2px solid ${signal}`, paddingLeft: 16, fontSize: 11, lineHeight: 1.6, color: ink2 }}>
                <strong style={{ display: "block", color: ink, fontFamily: "var(--mono)", fontSize: 9, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>Leistungsumfang</strong>
                3D-Szenenaufbau · Generative KI-Passes · Rendering 4K/25fps · Compositing · Lieferung in drei Formaten
              </div>
            </div>

            {/* Footer */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `1px solid ${line}`, paddingTop: 14, fontFamily: "var(--mono)", fontSize: 8, textTransform: "uppercase", letterSpacing: ".06em", color: ink2 }}>
              <span style={{ color: ink }}>Cillian Studio</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 5, height: 5, background: signal, display: "inline-block", transform: "rotate(45deg)" }} />
                <span>Seite 2</span>
              </div>
              <span>Wien · 2026</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function BriefpapierPage() {
  return (
    <div style={{ ...lightVars, background: "var(--paper)", color: "var(--ink)", fontFamily: "var(--sans)", WebkitFontSmoothing: "antialiased" }}>
      {/* Topbar */}
      <nav style={{ padding: "18px 60px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 18, fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".08em", background: "rgba(240,238,233,.85)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--ink)" }}>
          <Image src="/brand/assets/cillian-fox-ink.png" alt="" width={18} height={18} style={{ objectFit: "contain" }} />
          <span>Cillian Studio</span>
        </div>
        <span>·</span>
        <span>Briefpapier</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 22 }}>
          <Link href="/brand" style={{ color: "inherit", textDecoration: "none" }}>← Brand</Link>
          <Link href="/brand/rechnung" style={{ color: "inherit", textDecoration: "none" }}>Rechnung</Link>
        </div>
      </nav>

      {/* Masthead */}
      <div style={{ padding: "72px 72px 48px", display: "grid", gridTemplateColumns: "1fr 340px", gap: 72, alignItems: "end", borderBottom: "1px solid var(--line)" }}>
        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 22, display: "flex", gap: 18, alignItems: "center" }}>
            <span style={{ width: 10, height: 10, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
            <span>§ 003 · Briefpapier</span>
            <span style={{ color: "var(--ink-3)" }}>A4 · 2 Varianten</span>
          </div>
          <h1 style={{ fontFamily: "var(--sans)", fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 500, letterSpacing: "-.028em", lineHeight: .96, color: "var(--ink)" }}>
            Ein Brief ist{" "}
            <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, color: "var(--signal)" }}>mehr</em>{" "}
            als Text.
          </h1>
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-2)", borderLeft: "1px solid var(--line)", paddingLeft: 22 }}>
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Deckblatt und Folgeseite.</strong> Warm-Bone für digitale PDFs und leichten Druck. Dunkel für interne Präsentationen und Drucksorten auf schwerem Papier.
        </div>
      </div>

      {/* Light variant */}
      <div style={{ padding: "72px 72px", display: "grid", gridTemplateColumns: "24px 280px 1fr", gap: 48, alignItems: "start", borderBottom: "1px solid var(--line)" }}>
        <div style={{ writingMode: "vertical-rl", fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".22em", textTransform: "uppercase", paddingTop: 4 }}>V.A — Bone · Digital</div>

        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
            Variante A · Bone
          </div>
          <h2 style={{ fontFamily: "var(--sans)", fontSize: 28, fontWeight: 500, letterSpacing: "-.02em", lineHeight: 1, color: "var(--ink)", marginBottom: 12 }}>Light</h2>
          <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: "32ch" }}>Standard für alle PDF-Korrespondenz. Washi-Bone Hintergrund (#ece5d4), druckbar auf 80 g Offset. Kintsugi-Strich unter Betreff.</p>
          <div style={{ marginTop: 22, borderTop: "1px solid var(--line-2)", paddingTop: 14, fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--ink-2)", letterSpacing: ".04em", textTransform: "uppercase", display: "grid", gap: 6 }}>
            {[["Format", "A4 · 210 × 297 mm"], ["Bg", "#ece5d4 (Washi Bone)"], ["Schrift", "Inter Tight + JetBrains Mono"], ["Akzent", "Shu #c94a28"]].map(([k, v]) => (
              <div key={k} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 12 }}>
                <span style={{ color: "var(--ink-3)" }}>{k}</span><span>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "rgba(40,30,20,.7)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 10 }}>Deckblatt</div>
            <A4Sheet variant="deckblatt" />
          </div>
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "rgba(40,30,20,.7)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 10 }}>Folgeseite</div>
            <A4Sheet variant="folge" />
          </div>
        </div>
      </div>

      {/* Dark variant */}
      <div style={{ padding: "72px 72px", display: "grid", gridTemplateColumns: "24px 280px 1fr", gap: 48, alignItems: "start", borderBottom: "1px solid var(--line)" }}>
        <div style={{ writingMode: "vertical-rl", fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".22em", textTransform: "uppercase", paddingTop: 4 }}>V.B — Dark · Präsentation</div>

        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
            Variante B · Dark
          </div>
          <h2 style={{ fontFamily: "var(--sans)", fontSize: 28, fontWeight: 500, letterSpacing: "-.02em", lineHeight: 1, color: "var(--ink)", marginBottom: 12 }}>Dark</h2>
          <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: "32ch" }}>Für Präsentationen und hochwertige Drucksorten auf schwerem Papier (≥ 120 g). Kurocha-Schwarz (#1a1612) mit Washi-Bone-Schrift.</p>
          <div style={{ marginTop: 22, borderTop: "1px solid var(--line-2)", paddingTop: 14, fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--ink-2)", letterSpacing: ".04em", textTransform: "uppercase", display: "grid", gap: 6 }}>
            {[["Format", "A4 · 210 × 297 mm"], ["Bg", "#1a1612 (Kurocha)"], ["Schrift", "#ece5d4 (Washi Bone)"], ["Akzent", "Shu #c94a28"]].map(([k, v]) => (
              <div key={k} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 12 }}>
                <span style={{ color: "var(--ink-3)" }}>{k}</span><span>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "rgba(40,30,20,.7)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 10 }}>Deckblatt</div>
            <A4Sheet dark variant="deckblatt" />
          </div>
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "rgba(40,30,20,.7)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 10 }}>Folgeseite</div>
            <A4Sheet dark variant="folge" />
          </div>
        </div>
      </div>

      {/* Colophon */}
      <div style={{ padding: "40px 72px 64px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", letterSpacing: ".1em", textTransform: "uppercase", gap: 40 }}>
        <div style={{ display: "grid", gap: 6 }}>
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Cillian Studio</strong>
          <span>David Scherngell · Wien</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
          <span>Briefpapier · Ausgabe 01 · 2026</span>
        </div>
        <div style={{ display: "grid", gap: 6, textAlign: "right" }}>
          <span>cillianstudio.com</span>
          <span>A4 · Light + Dark</span>
        </div>
      </div>
    </div>
  )
}
