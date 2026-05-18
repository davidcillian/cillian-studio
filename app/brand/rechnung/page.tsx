"use client"

import Link from "next/link"
import Image from "next/image"

const light: React.CSSProperties = {
  ["--paper" as string]: "#f0eee9",
  ["--paper-2" as string]: "#e8e4d8",
  ["--bone" as string]: "#ece5d4",
  ["--ink" as string]: "#1a1612",
  ["--ink-2" as string]: "#6b6456",
  ["--ink-3" as string]: "#a9a191",
  ["--line" as string]: "rgba(26,22,18,.12)",
  ["--line-2" as string]: "rgba(26,22,18,.22)",
  ["--signal" as string]: "#c94a28",
  ["--sans" as string]: '"Inter Tight", -apple-system, sans-serif',
  ["--mono" as string]: '"JetBrains Mono", ui-monospace, monospace',
  ["--serif" as string]: '"Fraunces", serif',
}

export default function RechnungPage() {
  return (
    <div style={{ ...light, background: "var(--paper)", color: "var(--ink)", fontFamily: "var(--sans)", WebkitFontSmoothing: "antialiased" }}>
      {/* Topbar */}
      <nav style={{ padding: "18px 60px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 18, fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".08em", background: "rgba(240,238,233,.85)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--ink)" }}>
          <Image src="/brand/assets/cillian-fox-ink.png" alt="" width={18} height={18} style={{ objectFit: "contain" }} />
          <span>Cillian Studio</span>
        </div>
        <span>·</span>
        <span>Geschäftsausstattung 04</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 22 }}>
          <Link href="/brand" style={{ color: "inherit", textDecoration: "none" }}>← Brand</Link>
          <Link href="/brand/briefpapier" style={{ color: "inherit", textDecoration: "none" }}>Briefpapier</Link>
          <Link href="/brand/email-signatur" style={{ color: "inherit", textDecoration: "none" }}>E-Mail</Link>
        </div>
      </nav>

      {/* Masthead */}
      <div style={{ padding: "72px 72px 48px", display: "grid", gridTemplateColumns: "1fr 340px", gap: 72, alignItems: "end", borderBottom: "1px solid var(--line)" }}>
        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 22, display: "flex", gap: 18, alignItems: "center" }}>
            <span style={{ width: 10, height: 10, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
            <span>§ 004 · Rechnung</span>
            <span style={{ color: "var(--ink-3)" }}>Ausgabe 01</span>
          </div>
          <h1 style={{ fontFamily: "var(--sans)", fontSize: 72, fontWeight: 500, letterSpacing: "-.028em", lineHeight: .96, color: "var(--ink)" }}>
            Eine Rechnung ist <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, color: "var(--signal)" }}>auch</em> ein Brief.
          </h1>
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-2)", borderLeft: "1px solid var(--line)", paddingLeft: 22 }}>
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>A4, eine Form, zwei Flächen.</strong> Kleinunternehmer-konform nach § 6 Abs. 1 Z 27 UStG. Hell fürs PDF, Dunkel fürs Portal. Nummerierung jahresweise, lückenlos, <strong style={{ color: "var(--ink)", fontWeight: 500 }}>JJJJ-NNN</strong>.
        </div>
      </div>

      {/* Sheet row — Light (Bone) */}
      <div style={{ padding: "72px 72px", display: "grid", gridTemplateColumns: "24px 280px 1fr", gap: 48, alignItems: "start", borderBottom: "1px solid var(--line)" }}>
        <div style={{ writingMode: "vertical-rl", fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".22em", textTransform: "uppercase", paddingTop: 4 }}>V.A — Bone · Standard</div>

        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
            Variante A · Standard
          </div>
          <h2 style={{ fontFamily: "var(--sans)", fontSize: 28, fontWeight: 500, letterSpacing: "-.02em", lineHeight: 1, color: "var(--ink)", marginBottom: 12 }}>Bone</h2>
          <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: "32ch" }}>Die Regel-Variante. Versand als PDF per E-Mail, druckbar auf 80 g Offset-Papier. Ruhiger Satz, ein Strich aus Kintsugi-Rot unter dem Titel, eine Summe in Sans.</p>
          <div style={{ marginTop: 22, borderTop: "1px solid var(--line-2)", paddingTop: 14, fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--ink-2)", letterSpacing: ".04em", textTransform: "uppercase", display: "grid", gap: 6 }}>
            {[["Format", "A4 · 210 × 297 mm"], ["Satzspiegel", "48 / 52 / 52 / 52 mm"], ["Raster", "4 · Pos / Menge / Einzel / Betrag"], ["Akzent", "Hairline · Kintsugi"]].map(([k, v]) => (
              <div key={k} style={{ display: "grid", gridTemplateColumns: "88px 1fr", gap: 12 }}>
                <span style={{ color: "var(--ink-3)" }}>{k}</span><span>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* A4 invoice mockup — Light */}
        <div style={{ maxWidth: 680, width: "100%", aspectRatio: "210/297", position: "relative", overflow: "hidden", fontFamily: "var(--sans)", background: "var(--bone)", color: "var(--ink)", boxShadow: "0 1px 3px rgba(26,22,18,.08), 0 18px 50px rgba(26,22,18,.08)" }}>
          <div style={{ position: "absolute", inset: "48px 52px 52px 52px", display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Image src="/brand/assets/cillian-fox-ink.png" alt="" width={28} height={28} style={{ objectFit: "contain" }} />
                <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-.024em" }}>
                  Cillian<span style={{ fontWeight: 300, color: "var(--ink-2)" }}> Studio</span>
                </div>
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink-2)", textAlign: "right", lineHeight: 1.7 }}>
                <strong style={{ fontWeight: 500, display: "block", color: "var(--ink)" }}>Cillian Studio</strong>
                David Scherngell<br />Pelzgasse 3/17<br />1150 Wien · AT<br />office@cillianstudio.com
              </div>
            </div>

            {/* Invoice title with Kintsugi rule */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "end", paddingBottom: 18, borderBottom: "1px solid var(--line)", position: "relative" }}>
              <div style={{ position: "absolute", left: 0, bottom: -1, width: 64, height: 1, background: "var(--signal)" }} />
              <h2 style={{ fontSize: 52, fontWeight: 500, letterSpacing: "-.034em", lineHeight: .92 }}>
                Rechnung <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, color: "var(--ink-2)", fontSize: ".48em", display: "block", marginTop: 10, letterSpacing: 0 }}>Nr. 2026-017</em>
              </h2>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10.5, textAlign: "right", lineHeight: 1.8 }}>
                <div style={{ color: "var(--ink-2)", letterSpacing: ".12em", textTransform: "uppercase", fontSize: 8.5 }}>Rechnungsdatum</div>
                <strong style={{ display: "block", fontWeight: 500, fontSize: 12, marginTop: 1 }}>22. April 2026</strong>
                <div style={{ color: "var(--ink-2)", letterSpacing: ".12em", textTransform: "uppercase", fontSize: 8.5, marginTop: 6 }}>Fällig am</div>
                <strong style={{ display: "block", fontWeight: 500, fontSize: 12, marginTop: 1 }}>06. Mai 2026</strong>
              </div>
            </div>

            {/* Parties */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
              <div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".14em", marginBottom: 10 }}>Rechnung an</div>
                <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-.014em", marginBottom: 5 }}>Atelier Nordlicht GmbH</div>
                <div style={{ fontSize: 11.5, lineHeight: 1.65 }}>
                  z. Hd. Lena Brauer<br />Herrengasse 12<br />1010 Wien · Österreich
                  <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-2)", display: "block", marginTop: 5 }}>UID · ATU 76543210</span>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".14em", marginBottom: 10 }}>Projekt</div>
                <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-.014em", marginBottom: 5 }}>Atlas — Sequenz 01/04</div>
                <div style={{ fontSize: 11.5, lineHeight: 1.65 }}>
                  3D-Sequenz · Ausstellung<br />„Neue Horizonte" · 09·2026
                  <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-2)", display: "block", marginTop: 5 }}>P/Nr. · CS-2026-003</span>
                </div>
              </div>
            </div>

            {/* Items table */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 48px 90px 90px", fontSize: 12 }}>
              {["Position", "Menge", "Einzel", "Betrag"].map((h, i) => (
                <div key={h} style={{ fontFamily: "var(--mono)", fontSize: 8.5, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".14em", padding: "12px 0 10px", borderBottom: "1px solid var(--ink)", textAlign: i > 0 ? "right" : "left" }}>{h}</div>
              ))}
              {[
                ["3D-Szenenaufbau · Atlas Opening", "Modellierung, Shading, Lichtsetup.", "1", "3.400,00", "3.400,00"],
                ["Generative KI · Variation Pass", "Prompt-Design, Testläufe, finale Ausgabe in 4K.", "1", "1.800,00", "1.800,00"],
                ["Rendering · 60 s · 4K / 25 fps", "Finales Compositing, Farbkorrektur.", "1", "2.200,00", "2.200,00"],
                ["Training · Workshop-Tag", "Pipeline-Training für internes Team.", "1", "1.400,00", "1.400,00"],
              ].map(([title, sub, qty, single, total]) => (
                <>
                  <div key={title} style={{ padding: "12px 0 10px", borderBottom: "1px solid var(--line)", lineHeight: 1.45 }}>
                    <strong style={{ display: "block", fontSize: 13, fontWeight: 500, letterSpacing: "-.01em", marginBottom: 3 }}>{title}</strong>
                    <div style={{ fontSize: 10.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{sub}</div>
                  </div>
                  <div style={{ padding: "12px 0 10px", borderBottom: "1px solid var(--line)", fontFamily: "var(--mono)", fontSize: 11, textAlign: "right" }}>{qty}</div>
                  <div style={{ padding: "12px 0 10px", borderBottom: "1px solid var(--line)", fontFamily: "var(--mono)", fontSize: 11, textAlign: "right" }}>{single}</div>
                  <div style={{ padding: "12px 0 10px", borderBottom: "1px solid var(--line)", fontFamily: "var(--mono)", fontSize: 11, textAlign: "right" }}>{total}</div>
                </>
              ))}
            </div>

            {/* Totals with Kintsugi emphasis */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 220px", gap: 32, paddingTop: 16 }}>
              <div style={{ fontSize: 10.5, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: "34ch", paddingLeft: 12, borderLeft: "1px solid var(--line-2)" }}>
                <strong style={{ color: "var(--ink)", fontWeight: 500, fontFamily: "var(--mono)", fontSize: 9.5, letterSpacing: ".1em", textTransform: "uppercase", display: "block", marginBottom: 4 }}>Steuerhinweis</strong>
                Gemäß § 6 Abs. 1 Z 27 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer verrechnet.
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", fontFamily: "var(--mono)", fontSize: 11, gap: "6px 16px", alignContent: "start" }}>
                <div style={{ color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".12em", fontSize: 9, alignSelf: "end" }}>Zwischensumme</div>
                <div style={{ textAlign: "right" }}>8.800,00</div>
                <div style={{ color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".12em", fontSize: 9, alignSelf: "end" }}>Rabatt · 5 %</div>
                <div style={{ textAlign: "right" }}>−440,00</div>
                <div style={{ gridColumn: "1 / 3", fontFamily: "var(--mono)", fontSize: 9, color: "var(--ink-2)", letterSpacing: ".14em", textTransform: "uppercase", paddingTop: 12, marginTop: 6, borderTop: "2px solid var(--signal)", display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ width: 6, height: 6, background: "var(--signal)", transform: "rotate(45deg)", display: "inline-block" }} />
                  Gesamtbetrag · fällig
                </div>
                <div style={{ gridColumn: "1 / 3", fontFamily: "var(--sans)", fontSize: 36, fontWeight: 500, letterSpacing: "-.028em", lineHeight: 1, display: "flex", alignItems: "baseline", gap: 10, justifyContent: "space-between", paddingTop: 2 }}>
                  <span>8.360,00</span>
                  <span style={{ fontSize: 13, fontWeight: 400, color: "var(--ink-2)", fontFamily: "var(--mono)", letterSpacing: ".06em" }}>EUR</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, paddingTop: 16, marginTop: "auto", borderTop: "1px solid var(--line)", fontFamily: "var(--mono)", fontSize: 8.5, color: "var(--ink-2)", letterSpacing: ".1em", textTransform: "uppercase", lineHeight: 1.9 }}>
              <div><strong style={{ display: "block", color: "var(--ink)", fontWeight: 500 }}>Cillian Studio</strong>David Scherngell<br />Pelzgasse 3/17<br />1150 Wien</div>
              <div><strong style={{ display: "block", color: "var(--ink)", fontWeight: 500 }}>Konto</strong>IBAN: AT12 3456 7890<br />BIC: BKAUATWW<br />Bank Austria</div>
              <div><strong style={{ display: "block", color: "var(--ink)", fontWeight: 500 }}>Kontakt</strong>office@cillianstudio.com<br />cillianstudio.com<br />UID-Nr. — KU §6</div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance block */}
      <div style={{ padding: "72px 72px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, borderBottom: "1px solid var(--line)" }}>
        <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "1fr 340px", gap: 72, alignItems: "end", marginBottom: 8 }}>
          <h2 style={{ fontFamily: "var(--sans)", fontSize: 48, fontWeight: 500, letterSpacing: "-.024em", lineHeight: .98 }}>
            Regeln der <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, color: "var(--signal)" }}>Form.</em>
          </h2>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--ink-2)", borderLeft: "1px solid var(--line)", paddingLeft: 22 }}>
            Jede Rechnung ist ein offizielles Dokument und eine Visitenkarte. Fehler sind teuer — formal und visuell.
          </p>
        </div>
        {[
          { title: "Nummerierung", items: ["Format JJJJ-NNN: 2026-001", "Lückenlos und chronologisch", "Nie eine Nummer wiederverwenden", "Stornos als separate Gutschrift"] },
          { title: "Pflichtangaben", items: ["Vollständiger Firmenname", "UID-Nummer des Empfängers (ab €10k)", "Leistungsdatum (≠ Rechnungsdatum)", "Kleinunternehmer-Hinweis § 6 UStG"] },
          { title: "Fristen", items: ["PDF-Versand mit Original-E-Mail", "Fällig 14 Tage nach Rechnungsdatum", "Erinnerung: 7 Tage nach Fälligkeit", "Archivierung 7 Jahre (§ 132 BAO)"] },
        ].map((card, i) => (
          <div key={card.title}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--ink-3)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>0{i + 1}</div>
            <div style={{ fontFamily: "var(--sans)", fontSize: 19, fontWeight: 500, letterSpacing: "-.015em", color: "var(--ink)", marginBottom: 12, borderBottom: "1px solid var(--line-2)", paddingBottom: 10 }}>{card.title}</div>
            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
              {card.items.map((item, j) => (
                <li key={j} style={{ fontSize: 12.5, lineHeight: 1.55, color: "var(--ink)", padding: "10px 0 10px 16px", position: "relative", borderTop: j > 0 ? "1px solid var(--line)" : "none" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--ink-3)" }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Colophon */}
      <div style={{ padding: "40px 72px 64px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", letterSpacing: ".1em", textTransform: "uppercase", gap: 40 }}>
        <div style={{ display: "grid", gap: 6 }}>
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Cillian Studio</strong>
          <span>David Scherngell · Wien</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
          <span>Rechnung · Ausgabe 01 · 2026</span>
        </div>
        <div style={{ display: "grid", gap: 6, textAlign: "right" }}>
          <span>cillianstudio.com</span>
          <span>§ 6 Abs. 1 Z 27 UStG</span>
        </div>
      </div>
    </div>
  )
}
