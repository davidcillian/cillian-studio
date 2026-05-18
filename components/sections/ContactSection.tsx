"use client"

import { useState, useRef, useEffect } from "react"
import { Mail, Phone, Copy, Check, Send, Loader2 } from "lucide-react"

type FormState = "idle" | "sending" | "success" | "error"

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--bg-3)",
  border: "1px solid var(--line-2)",
  borderRadius: 0,
  padding: "12px 14px",
  color: "var(--ink)",
  fontSize: 14,
  fontFamily: "var(--sans)",
  outline: "none",
  transition: "border-color .2s",
  boxSizing: "border-box",
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--mono)",
  fontSize: 10,
  letterSpacing: ".08em",
  textTransform: "uppercase",
  color: "var(--ink-3)",
  marginBottom: 8,
}

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

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const loadTime = useRef(0)

  useEffect(() => {
    loadTime.current = Date.now()
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const copyEmail = () => {
    navigator.clipboard.writeText("office@cillianstudio.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("sending")
    setErrorMsg("")

    if (honeypot) return setFormState("idle")
    if (Date.now() - loadTime.current < 3000) return setFormState("idle")

    try {
      const res = await fetch("https://n8n.cillianstudio.com/webhook/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, _t: Date.now() - loadTime.current }),
      })

      if (!res.ok) throw new Error("Senden fehlgeschlagen")

      setFormState("success")
      setFormData({ name: "", email: "", service: "", message: "" })
    } catch {
      setFormState("error")
      setErrorMsg("Nachricht konnte nicht gesendet werden. Bitte schreiben Sie uns per E-Mail.")
      setTimeout(() => setFormState("idle"), 5000)
    }
  }

  return (
    <section id="contact" style={{ background: "var(--bg-2)" }}>
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
            § 06 — Kontakt
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
              Projekt anfragen.{" "}
              <span style={{ fontWeight: 300, color: "var(--ink-4)" }}>Einfach schreiben.</span>
            </h2>
          </div>
        </div>

        {/* Two-column layout */}
        <div
          className="mob-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 5vw, 80px)",
            alignItems: "start",
          }}
        >
          {/* Left: Form */}
          <div
            style={{
              borderTop: "1px solid var(--line-2)",
              paddingTop: "clamp(28px, 4vw, 48px)",
            }}
          >
            {formState === "success" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "48px 0",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    background: "var(--bg-3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Check size={20} style={{ color: "var(--signal)" }} />
                </div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 500,
                    letterSpacing: "-.02em",
                    color: "var(--ink)",
                  }}
                >
                  Nachricht gesendet
                </h3>
                <p style={{ color: "var(--ink-3)", fontSize: 13, maxWidth: "32ch" }}>
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  style={{
                    marginTop: 8,
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "var(--ink-3)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                    textDecorationColor: "var(--line-2)",
                  }}
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <>
                <h3
                  style={{
                    fontSize: "clamp(18px, 2vw, 22px)",
                    fontWeight: 500,
                    letterSpacing: "-.02em",
                    color: "var(--ink)",
                    marginBottom: 6,
                  }}
                >
                  Anfrage stellen
                </h3>
                <p style={{ color: "var(--ink-3)", fontSize: 13, marginBottom: 32 }}>
                  Beschreiben Sie Ihr Vorhaben — wir melden uns binnen 24 Stunden.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {/* Honeypot */}
                  <div style={{ position: "absolute", left: -9999 }} aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="name" style={labelStyle}>Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      placeholder="Ihr Name"
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--ink-3)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--line-2)")}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" style={labelStyle}>E-Mail *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      placeholder="ihre@email.at"
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--ink-3)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--line-2)")}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" style={labelStyle}>Interesse</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{ ...inputStyle, appearance: "none" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--ink-3)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--line-2)")}
                    >
                      <option value="" style={{ background: "var(--bg-2)" }}>Bitte wählen…</option>
                      <option value="3d" style={{ background: "var(--bg-2)" }}>3D-Visualisierung</option>
                      <option value="ki" style={{ background: "var(--bg-2)" }}>KI-Agenten</option>
                      <option value="gamification" style={{ background: "var(--bg-2)" }}>Gamification</option>
                      <option value="training" style={{ background: "var(--bg-2)" }}>Training & Workshops</option>
                      <option value="other" style={{ background: "var(--bg-2)" }}>Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" style={labelStyle}>Nachricht *</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ ...inputStyle, resize: "none" }}
                      placeholder="Erzählen Sie uns von Ihrem Projekt…"
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--ink-3)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--line-2)")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "14px 28px",
                      background: formState === "error" ? "var(--bg-3)" : "var(--ink)",
                      color: formState === "error" ? "var(--ink-2)" : "var(--bg)",
                      border: formState === "error" ? "1px solid var(--line-2)" : "none",
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      cursor: formState === "sending" ? "not-allowed" : "pointer",
                      opacity: formState === "sending" ? 0.7 : 1,
                      transition: "opacity .2s",
                    }}
                  >
                    {formState === "sending" && <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} />}
                    {formState === "idle" && <Send size={13} />}
                    {formState === "error" && <Mail size={13} />}
                    {formState === "idle" && "Nachricht senden"}
                    {formState === "sending" && "Wird gesendet…"}
                    {formState === "error" && "Fehler — nochmal versuchen"}
                  </button>

                  {errorMsg && (
                    <p
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        color: "var(--signal)",
                        letterSpacing: ".04em",
                        textAlign: "center",
                      }}
                    >
                      {errorMsg}
                    </p>
                  )}

                  <p
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 9,
                      letterSpacing: ".06em",
                      color: "var(--ink-3)",
                      textAlign: "center",
                    }}
                  >
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <button
                      type="button"
                      onClick={() => {
                        const btn = document.querySelector("[data-privacy-button]") as HTMLButtonElement
                        btn?.click()
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "var(--mono)",
                        fontSize: 9,
                        letterSpacing: ".06em",
                        color: "var(--ink-3)",
                        textDecoration: "underline",
                        textDecorationColor: "var(--line-2)",
                      }}
                    >
                      Datenschutzerklärung
                    </button>{" "}
                    zu.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Right: Direct contact — brief-style address block */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Address block — paper-style invert */}
            <div
              style={{
                background: "var(--paper)",
                padding: 0,
                marginBottom: 2,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                  background: "var(--paper-2)",
                  padding: "14px clamp(24px, 3vw, 40px)",
                  borderBottom: "1px solid var(--line-l)",
                }}
              >
                Cillian Studio · Wien
              </div>
              <div
                style={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "var(--ink-light)",
                  padding: "clamp(20px, 2.5vw, 28px) clamp(24px, 3vw, 40px)",
                }}
              >
                <strong style={{ fontWeight: 500, fontSize: 15 }}>David Scherngell</strong>
                <br />
                Pelzgasse 3/17
                <br />
                1150 Wien · Österreich
              </div>
              <div style={{ paddingBottom: "clamp(20px, 2.5vw, 28px)", paddingLeft: "clamp(24px, 3vw, 40px)", paddingRight: "clamp(24px, 3vw, 40px)", borderTop: "1px solid var(--line-l)" }}>
                <code
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--ink-light)",
                    letterSpacing: ".02em",
                  }}
                >
                  office@cillianstudio.com
                </code>
              </div>
            </div>

            {/* Contact buttons */}
            <button
              onClick={copyEmail}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 20px",
                background: "var(--bg-2)",
                border: "1px solid var(--line-2)",
                color: copied ? "var(--signal)" : "var(--ink-2)",
                fontFamily: "var(--mono)",
                fontSize: 12,
                letterSpacing: ".04em",
                cursor: "pointer",
                transition: "border-color .2s, color .2s",
                textAlign: "left",
                marginBottom: 2,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--ink-3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--line-2)")}
            >
              {copied ? <Check size={15} /> : <Mail size={15} />}
              {copied ? "Kopiert!" : "office@cillianstudio.com"}
              {!copied && (
                <Copy size={12} style={{ marginLeft: "auto", opacity: 0.4 }} />
              )}
            </button>

            <a
              href="https://wa.me/436801609124"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 20px",
                background: "var(--bg-2)",
                border: "1px solid var(--line-2)",
                color: "var(--ink-2)",
                fontFamily: "var(--mono)",
                fontSize: 12,
                letterSpacing: ".04em",
                textDecoration: "none",
                transition: "border-color .2s, color .2s",
                marginBottom: 2,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--ink-3)"
                e.currentTarget.style.color = "var(--ink)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line-2)"
                e.currentTarget.style.color = "var(--ink-2)"
              }}
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              WhatsApp · +43 680 1609124
            </a>

            <a
              href="tel:+436801609124"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 20px",
                background: "var(--bg-2)",
                border: "1px solid var(--line-2)",
                color: "var(--ink-3)",
                fontFamily: "var(--mono)",
                fontSize: 12,
                letterSpacing: ".04em",
                textDecoration: "none",
                transition: "border-color .2s, color .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--ink-3)"
                e.currentTarget.style.color = "var(--ink-2)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line-2)"
                e.currentTarget.style.color = "var(--ink-3)"
              }}
            >
              <Phone size={15} />
              +43 680 1609124
            </a>

            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                marginTop: 16,
                textAlign: "center",
              }}
            >
              Antwort innerhalb von 24 Stunden
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
