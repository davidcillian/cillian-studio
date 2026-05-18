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

const templates = [
  {
    no: "01",
    title: "Erstanfrage",
    subtitle: "Inbound",
    body: `Liebe/r [Name],\n\nvielen Dank für Ihre Anfrage. Ich melde mich innerhalb von 24 Stunden bei Ihnen mit einem konkreten Vorschlag.\n\nFreundliche Grüße,`,
    note: "Kein Marketing, keine Liste — nur ein klarer, menschlicher Satz.",
  },
  {
    no: "02",
    title: "Angebot",
    subtitle: "Proposal",
    body: `Liebe/r [Name],\n\nanbei das überarbeitete Angebot für [Projekt]. Es umfasst [Leistungen] zum Pauschalpreis von [Betrag] EUR.\n\nBei Fragen stehe ich gerne zur Verfügung.`,
    note: "Angebot immer als PDF-Anhang — diese Mail ist nur die Ankündigung.",
  },
  {
    no: "03",
    title: "Follow-up",
    subtitle: "7 Tage",
    body: `Liebe/r [Name],\n\nkurze Erinnerung an mein Angebot vom [Datum]. Falls Sie noch Fragen haben oder Details besprechen möchten — ich bin diese Woche verfügbar.\n\nFreundliche Grüße,`,
    note: "Maximal ein Follow-up. Zwei reichen als Zeichen des Interesses.",
  },
  {
    no: "04",
    title: "Absage",
    subtitle: "Graceful",
    body: `Liebe/r [Name],\n\nfür diese Anfrage steht mir aktuell keine freie Kapazität zur Verfügung. Ich empfehle [Alternativen] und melde mich, sobald sich ein Termin ergibt.\n\nHerzlichen Dank für Ihr Interesse.`,
    note: "Nie mit einem Nein enden — immer eine Brücke bauen.",
  },
  {
    no: "05",
    title: "Einladung",
    subtitle: "Event / Workshop",
    body: `Liebe/r [Name],\n\nam [Datum] veranstalte ich [Event] in Wien. Es würde mich freuen, Sie dabei zu haben — Platz für [Anzahl] Personen, kostenlos.\n\nAnmeldung unter [Link].`,
    note: "Kein Sales-Ton — Einladungen sind immer ein Geschenk.",
  },
  {
    no: "06",
    title: "Referenzanfrage",
    subtitle: "Case Study",
    body: `Liebe/r [Name],\n\nich würde gerne [Projekt] als Case Study auf cillianstudio.com veröffentlichen. Darf ich Ihre Firma und [Details] nennen?\n\nEin kurzes Okay per Mail reicht.`,
    note: "Immer um explizite schriftliche Erlaubnis bitten — DSGVO.",
  },
]

export default function KundenKommunikationPage() {
  return (
    <div style={{ ...lightVars, background: "var(--paper)", color: "var(--ink)", fontFamily: "var(--sans)", WebkitFontSmoothing: "antialiased" }}>
      {/* Topbar */}
      <nav style={{ padding: "18px 60px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 18, fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".08em", background: "rgba(240,238,233,.85)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--ink)" }}>
          <Image src="/brand/assets/cillian-fox-ink.png" alt="" width={18} height={18} style={{ objectFit: "contain" }} />
          <span>Cillian Studio</span>
        </div>
        <span>·</span>
        <span>Kunden-Kommunikation</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 22 }}>
          <Link href="/brand" style={{ color: "inherit", textDecoration: "none" }}>← Brand</Link>
          <Link href="/brand/email-signatur" style={{ color: "inherit", textDecoration: "none" }}>E-Mail-Signatur</Link>
        </div>
      </nav>

      {/* Masthead */}
      <div style={{ padding: "72px 72px 48px", display: "grid", gridTemplateColumns: "1fr 340px", gap: 72, alignItems: "end", borderBottom: "1px solid var(--line)" }}>
        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 22, display: "flex", gap: 18, alignItems: "center" }}>
            <span style={{ width: 10, height: 10, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
            <span>§ 001 · Kunden-Kommunikation</span>
            <span style={{ color: "var(--ink-3)" }}>6 Templates</span>
          </div>
          <h1 style={{ fontFamily: "var(--sans)", fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 500, letterSpacing: "-.028em", lineHeight: .96, color: "var(--ink)" }}>
            Jedes Wort ist{" "}
            <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, color: "var(--signal)" }}>Marke.</em>
          </h1>
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-2)", borderLeft: "1px solid var(--line)", paddingLeft: 22 }}>
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Sechs Situationen. Sechs Stimmen.</strong> Alle Templates folgen demselben Prinzip: konkret, menschlich, kein Marketing-Jargon, klare nächste Aktion.
        </div>
      </div>

      {/* Index strip */}
      <div style={{ padding: "28px 72px 0", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 18, borderBottom: "1px solid var(--line)" }}>
        {templates.map((t) => (
          <div key={t.no} style={{ paddingTop: 12, paddingBottom: 28, borderTop: "1px solid var(--line)" }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--signal)", display: "block", marginBottom: 6, letterSpacing: ".1em", textTransform: "uppercase" }}>{t.no}</span>
            <div style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ink)", fontWeight: 500, letterSpacing: "-.005em", lineHeight: 1.25 }}>
              {t.title}
              <span style={{ color: "var(--ink-2)", fontWeight: 300, display: "block", fontSize: 11, marginTop: 2 }}>{t.subtitle}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Templates */}
      {templates.map((t, i) => (
        <div
          key={t.no}
          style={{
            padding: "72px 72px",
            display: "grid",
            gridTemplateColumns: "24px 280px 1fr",
            gap: 48,
            alignItems: "start",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div style={{ writingMode: "vertical-rl", fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".22em", textTransform: "uppercase", paddingTop: 4 }}>
            {t.no} — {t.title}
          </div>

          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
              {t.no} · {t.subtitle}
            </div>
            <h2 style={{ fontFamily: "var(--sans)", fontSize: 28, fontWeight: 500, letterSpacing: "-.02em", lineHeight: 1, color: "var(--ink)", marginBottom: 12 }}>{t.title}</h2>
            <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: "32ch" }}>Gebrauchsanweisung: Template kopieren, Platzhalter ersetzen, nicht paraphrasieren.</p>
            <div style={{ marginTop: 22, borderTop: "1px solid var(--line)", paddingTop: 14, display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ width: 6, height: 6, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)", marginTop: 4, flexShrink: 0 }} />
              <p style={{ fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--ink-3)", letterSpacing: ".04em", textTransform: "uppercase", lineHeight: 1.6 }}>{t.note}</p>
            </div>
          </div>

          {/* Mail mockup */}
          <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,.08)", borderRadius: 3, boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(26,22,18,.06)", overflow: "hidden", maxWidth: 580, fontFamily: "-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
            <div style={{ background: "#f6f4ef", padding: "10px 16px", borderBottom: "1px solid rgba(0,0,0,.06)", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ display: "flex", gap: 5 }}>
                {[0,1,2].map((j) => <span key={j} style={{ width: 8, height: 8, background: "#e3e1db", borderRadius: "50%", display: "block" }} />)}
              </div>
              <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".04em", textTransform: "uppercase" }}>{t.title} · Vorlage</span>
            </div>
            <div style={{ padding: "12px 18px", borderBottom: "1px solid rgba(0,0,0,.06)", fontSize: 12 }}>
              {[["Von", "David Scherngell <office@cillianstudio.com>"], ["An", "[Empfänger]"]].map(([l, v]) => (
                <div key={l} style={{ display: "grid", gridTemplateColumns: "42px 1fr", gap: "3px 8px", color: "#3a3a3a", marginBottom: 2 }}>
                  <span style={{ color: "#8b8577", fontSize: 11 }}>{l}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "18px 18px 20px", fontSize: 13, lineHeight: 1.65, color: "#2a2a2a", whiteSpace: "pre-line" }}>
              {t.body}
              <div style={{ marginTop: 16, fontSize: 11, color: "#6b6456" }}>
                <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 13, color: "#1a1612" }}>David Scherngell</em>
                <span style={{ display: "block", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".04em", marginTop: 3 }}>Cillian Studio · Wien</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Colophon */}
      <div style={{ padding: "40px 72px 64px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", letterSpacing: ".1em", textTransform: "uppercase", gap: 40 }}>
        <div style={{ display: "grid", gap: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Image src="/brand/assets/cillian-fox-ink.png" alt="" width={20} height={20} style={{ objectFit: "contain" }} />
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Cillian Studio</strong>
          </div>
          <span>David Scherngell · Wien</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
          <span>Kommunikation · 6 Templates · 2026</span>
        </div>
        <div style={{ display: "grid", gap: 6, textAlign: "right" }}>
          <span>cillianstudio.com</span>
          <span>office@cillianstudio.com</span>
        </div>
      </div>
    </div>
  )
}
