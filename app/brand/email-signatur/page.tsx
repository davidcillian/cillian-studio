"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const lightVars: React.CSSProperties = {
  ["--paper" as string]: "#f0eee9",
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

const sigV1Html = `<div style="font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;font-size:13px;line-height:1.55;color:#1a1612;">
  <div style="font-weight:500;letter-spacing:-.012em;color:#1a1612;font-size:13.5px;">Cillian<span style="font-weight:300;color:#6b6456"> Studio</span></div>
  <div style="width:28px;height:1px;background:#1a1612;margin:8px 0 9px;"></div>
  <div><b>David Scherngell</b> &mdash; <span style="color:#6b6456">3D &amp; KI-Automation</span></div>
  <div style="color:#6b6456">
    <a href="mailto:office@cillianstudio.com" style="color:#1a1612;text-decoration:none;border-bottom:1px solid rgba(26,22,18,.25);">office@cillianstudio.com</a>
    &nbsp;&middot;&nbsp;
    <a href="https://cillianstudio.com" style="color:#1a1612;text-decoration:none;border-bottom:1px solid rgba(26,22,18,.25);">cillianstudio.com</a>
  </div>
</div>`

const sigV2Html = `<table style="font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;font-size:13px;line-height:1.5;border-collapse:collapse;">
<tr><td style="vertical-align:top;padding-right:16px;width:48px;">
  <img src="https://cillianstudio.com/brand/assets/cillian-fox-ink.png" width="40" height="40" alt="Cillian Studio" style="display:block;"/>
</td>
<td style="width:1px;background:rgba(26,22,18,.16);padding:0;"></td>
<td style="vertical-align:top;padding-left:16px;">
  <div style="font-weight:500;color:#1a1612;letter-spacing:-.012em;font-size:14px;">David Scherngell</div>
  <div style="color:#6b6456;font-size:11.5px;margin-top:2px;">3D &amp; KI-Automation &middot; <em style="font-family:'Fraunces',serif;font-style:italic;color:#c94a28;">Cillian Studio</em></div>
  <div style="padding-top:10px;margin-top:10px;border-top:1px solid rgba(26,22,18,.14);font-size:12.5px;line-height:1.55;">
    <a href="mailto:office@cillianstudio.com" style="color:#1a1612;text-decoration:none;">office@cillianstudio.com</a><br/>
    <span style="color:#6b6456;">cillianstudio.com &middot; Wien, Österreich</span>
  </div>
</td></tr>
</table>`

const sigs = [
  {
    id: "v1",
    label: "Variante 1 · Minimal",
    title: "Minimal",
    desc: "Reine Typografie, keine Bilder. Maximale Kompatibilität — funktioniert in jedem E-Mail-Client, auch Plain-Text-nahen.",
    recommended: false,
    props: [["Bilder", "Keine"], ["Kompatibilität", "Universal"], ["Einsatz", "Intern / kurze Antworten"]],
    html: sigV1Html,
  },
  {
    id: "v2",
    label: "Variante 2 · Empfohlen",
    title: "Empfohlen",
    desc: "Fox-Icon + Engawa-Säule. Visuell stark, trotzdem schlank. Für alle Erst-E-Mails und Kundenkommunikation.",
    recommended: true,
    props: [["Bilder", "Fox Icon (40×40)"], ["Kompatibilität", "Modern Clients"], ["Einsatz", "Erstkontatkt / Extern"]],
    html: sigV2Html,
  },
  {
    id: "v3",
    label: "Variante 3 · Reply",
    title: "Reply",
    desc: "Zwei Zeilen. Name · Studio · Kontakt. Für alle Folge-E-Mails in aktiven Threads — keine visuelle Redundanz.",
    recommended: false,
    props: [["Bilder", "Keine"], ["Zeilen", "2"], ["Einsatz", "Antworten / Threads"]],
    html: `<div style="font-family:-apple-system,sans-serif;font-size:12.5px;line-height:1.5;color:#1a1612;"><b>David Scherngell</b> · <span style="color:#c94a28;font-weight:500;">Cillian Studio</span><br/><span style="color:#6b6456;"><a href="mailto:office@cillianstudio.com" style="color:#1a1612;text-decoration:none;border-bottom:1px solid rgba(26,22,18,.25);">office@cillianstudio.com</a> · Wien</span></div>`,
  },
  {
    id: "v4",
    label: "Variante 4 · Erstanfrage",
    title: "First Contact",
    desc: "Wortmarke + Services-Liste. Für Kaltakquise oder Erstanfragen — gibt dem Empfänger einen vollständigen Überblick.",
    recommended: false,
    props: [["Bilder", "Fox (24×24)"], ["Services", "3 Zeilen"], ["Einsatz", "Erstanfragen"]],
    html: `<div style="font-family:-apple-system,sans-serif;font-size:13px;line-height:1.5;"><div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;"><img src="https://cillianstudio.com/brand/assets/cillian-fox-ink.png" width="24" height="24" alt=""/><span style="font-size:21px;font-weight:500;letter-spacing:-.028em;color:#1a1612;">Cillian<span style="font-weight:300;color:#6b6456"> Studio</span></span></div><div style="font-size:12px;line-height:1.65;color:#6b6456;border-left:2px solid rgba(26,22,18,.14);padding-left:12px;"><b style="color:#1a1612;display:block;margin-bottom:4px;">David Scherngell</b>3D-Visualisierung · KI-Agenten (DSGVO) · Gamification<br/><a href="mailto:office@cillianstudio.com" style="color:#1a1612;text-decoration:none;">office@cillianstudio.com</a> · <a href="https://cillianstudio.com" style="color:#1a1612;text-decoration:none;">cillianstudio.com</a></div></div>`,
  },
]

function MailMockup({ children, subject = "Re: Projekt Atlas — Zeitplan" }: { children: React.ReactNode; subject?: string }) {
  return (
    <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,.08)", borderRadius: 3, boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 12px 36px rgba(26,22,18,.07)", overflow: "hidden", maxWidth: 680, fontFamily: "-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
      <div style={{ background: "#f6f4ef", padding: "12px 16px", borderBottom: "1px solid rgba(0,0,0,.06)", fontSize: 12, color: "#6b6456", display: "flex", gap: 14, alignItems: "center" }}>
        <div style={{ display: "flex", gap: 5 }}>
          {[0, 1, 2].map((i) => <span key={i} style={{ width: 9, height: 9, background: "#e3e1db", borderRadius: "50%", display: "block" }} />)}
        </div>
        <span style={{ fontSize: 11, letterSpacing: ".04em" }}>{subject}</span>
      </div>
      <div style={{ padding: "14px 22px", borderBottom: "1px solid rgba(0,0,0,.06)", fontSize: 12.5 }}>
        {[["Von", "David Scherngell <office@cillianstudio.com>"], ["An", "Lena Brauer <l.brauer@nordlicht.at>"], ["Betreff", subject]].map(([l, v]) => (
          <div key={l} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "4px 10px", color: "#3a3a3a", marginBottom: 2 }}>
            <span style={{ color: "#8b8577", fontSize: 11.5 }}>{l}</span>
            <span>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ padding: "20px 22px 22px", fontSize: 13.5, lineHeight: 1.55, color: "#2a2a2a" }}>
        <p style={{ marginBottom: 12 }}>Liebe Lena,</p>
        <p style={{ marginBottom: 12 }}>anbei die finalen Renders für Sequenz 01. Alle Dateien sind in 4K exportiert und im Drive-Ordner hinterlegt.</p>
        <p style={{ marginBottom: 12 }}>Freundliche Grüße,</p>
      </div>
      <div style={{ padding: "14px 22px 22px", borderTop: "1px solid rgba(0,0,0,.06)" }}>
        {children}
      </div>
    </div>
  )
}

export default function EmailSignaturPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (id: string, html: string) => {
    navigator.clipboard.writeText(html).then(() => {
      setCopied(id)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  return (
    <div style={{ ...lightVars, background: "var(--paper)", color: "var(--ink)", fontFamily: "var(--sans)", WebkitFontSmoothing: "antialiased" }}>
      {/* Topbar */}
      <nav style={{ padding: "18px 60px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 18, fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".08em", background: "rgba(240,238,233,.85)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--ink)" }}>
          <Image src="/brand/assets/cillian-fox-ink.png" alt="" width={18} height={18} style={{ objectFit: "contain" }} />
          <span>Cillian Studio</span>
        </div>
        <span>·</span>
        <span>E-Mail-Signatur</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 22 }}>
          <Link href="/brand" style={{ color: "inherit", textDecoration: "none" }}>← Brand</Link>
          <Link href="/brand/briefpapier" style={{ color: "inherit", textDecoration: "none" }}>Briefpapier</Link>
        </div>
      </nav>

      {/* Masthead */}
      <div style={{ padding: "72px 72px 48px", display: "grid", gridTemplateColumns: "1fr 340px", gap: 72, alignItems: "end", borderBottom: "1px solid var(--line)" }}>
        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 22, display: "flex", gap: 18, alignItems: "center" }}>
            <span style={{ width: 10, height: 10, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
            <span>§ 002 · E-Mail-Signatur</span>
            <span style={{ color: "var(--ink-3)" }}>4 Varianten</span>
          </div>
          <h1 style={{ fontFamily: "var(--sans)", fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 500, letterSpacing: "-.028em", lineHeight: .96, color: "var(--ink)" }}>
            Die letzte Zeile{" "}
            <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, color: "var(--signal)" }}>zählt.</em>
          </h1>
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-2)", borderLeft: "1px solid var(--line)", paddingLeft: 22 }}>
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Vier Varianten für jeden Kontext.</strong> Minimal für Antworten, Empfohlen für Erstkontakt, Reply für Threads, First-Contact mit vollständigem Überblick.
        </div>
      </div>

      {/* Signature variants */}
      {sigs.map((sig) => (
        <div
          key={sig.id}
          style={{
            display: "grid",
            gridTemplateColumns: "24px 280px 1fr",
            gap: 48,
            padding: "56px 72px",
            borderBottom: "1px solid var(--line)",
            alignItems: "start",
            background: sig.recommended ? "#ebe7d9" : undefined,
          }}
        >
          <div style={{ writingMode: "vertical-rl", fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: ".22em", textTransform: "uppercase", paddingTop: 4 }}>{sig.label}</div>

          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
              {sig.recommended ? "✦ Empfohlen" : sig.title}
            </div>
            <h2 style={{ fontFamily: "var(--sans)", fontSize: 28, fontWeight: 500, letterSpacing: "-.02em", lineHeight: 1, color: "var(--ink)", marginBottom: 12 }}>{sig.title}</h2>
            <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: "32ch" }}>{sig.desc}</p>
            <div style={{ marginTop: 22, borderTop: "1px solid var(--line-2)", paddingTop: 14, fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--ink-2)", letterSpacing: ".04em", textTransform: "uppercase", display: "grid", gap: 6 }}>
              {sig.props.map(([k, v]) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: 12 }}>
                  <span style={{ color: "var(--ink-3)" }}>{k}</span><span>{v}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleCopy(sig.id, sig.html)}
              style={{ marginTop: 20, padding: "10px 20px", background: copied === sig.id ? "var(--signal)" : "transparent", border: "1px solid var(--line-2)", borderRadius: 0, fontFamily: "var(--mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: ".08em", color: copied === sig.id ? "#fff" : "var(--ink-2)", cursor: "pointer", transition: "all .15s" }}
            >
              {copied === sig.id ? "Kopiert ✓" : "HTML kopieren"}
            </button>
          </div>

          <MailMockup>
            <div dangerouslySetInnerHTML={{ __html: sig.html }} />
          </MailMockup>
        </div>
      ))}

      {/* Colophon */}
      <div style={{ padding: "40px 72px 64px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", letterSpacing: ".1em", textTransform: "uppercase", gap: 40 }}>
        <div style={{ display: "grid", gap: 6 }}>
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Cillian Studio</strong>
          <span>David Scherngell · Wien</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, background: "var(--signal)", display: "inline-block", transform: "rotate(45deg)" }} />
          <span>E-Mail-Signatur · 4 Varianten · 2026</span>
        </div>
        <div style={{ display: "grid", gap: 6, textAlign: "right" }}>
          <span>cillianstudio.com</span>
          <span>office@cillianstudio.com</span>
        </div>
      </div>
    </div>
  )
}
