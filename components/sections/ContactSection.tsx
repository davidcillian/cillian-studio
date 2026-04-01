"use client"

import { useState } from "react"
import { Mail, Phone, Copy, Check, Send, Loader2 } from "lucide-react"

type FormState = "idle" | "sending" | "success" | "error"

export function ContactSection() {
    const [copied, setCopied] = useState(false)
    const [formState, setFormState] = useState<FormState>("idle")
    const [errorMsg, setErrorMsg] = useState("")
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

        try {
            const res = await fetch("https://n8n.cillianstudio.com/webhook/contact-form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            if (!res.ok) throw new Error("Senden fehlgeschlagen")

            setFormState("success")
            setFormData({ name: "", email: "", service: "", message: "" })
            setTimeout(() => setFormState("idle"), 5000)
        } catch {
            setFormState("error")
            setErrorMsg("Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es per E-Mail.")
            setTimeout(() => setFormState("idle"), 5000)
        }
    }

    return (
        <section id="contact" className="py-24">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left: Contact Form */}
                    <div className="bg-white/[0.03] border border-white/5 rounded-xl p-8 md:p-10 hover:border-white/10 transition-colors duration-300">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                            Bereit für Ihr Projekt?
                        </h2>
                        <p className="text-[#777] text-sm md:text-base mb-8">
                            Beschreiben Sie Ihre Idee — wir melden uns innerhalb von 24 Stunden.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm text-[#999] mb-1.5">
                                    Name *
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-[#f2f2f2] text-sm placeholder:text-[#555] focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                    placeholder="Ihr Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm text-[#999] mb-1.5">
                                    E-Mail *
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-[#f2f2f2] text-sm placeholder:text-[#555] focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                    placeholder="ihre@email.at"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm text-[#999] mb-1.5">
                                    Interesse
                                </label>
                                <select
                                    id="service"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-[#f2f2f2] text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all appearance-none"
                                >
                                    <option value="" className="bg-[#111]">Bitte wählen...</option>
                                    <option value="3d" className="bg-[#111]">3D-Visualisierung</option>
                                    <option value="ki" className="bg-[#111]">KI-Agenten</option>
                                    <option value="gamification" className="bg-[#111]">Gamification</option>
                                    <option value="training" className="bg-[#111]">Training & Workshops</option>
                                    <option value="other" className="bg-[#111]">Sonstiges</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm text-[#999] mb-1.5">
                                    Nachricht *
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-[#f2f2f2] text-sm placeholder:text-[#555] focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
                                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formState === "sending" || formState === "success"}
                                className={`w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                                    formState === "success"
                                        ? "bg-green-600 text-white"
                                        : formState === "error"
                                          ? "bg-red-600/80 hover:bg-red-600 text-white"
                                          : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-[1.01] active:scale-[0.99]"
                                } disabled:opacity-70 disabled:cursor-not-allowed`}
                            >
                                {formState === "sending" && <Loader2 size={18} className="animate-spin" />}
                                {formState === "success" && <Check size={18} />}
                                {formState === "idle" && <Send size={16} />}
                                {formState === "error" && <Mail size={16} />}
                                {formState === "idle" && "Nachricht senden"}
                                {formState === "sending" && "Wird gesendet..."}
                                {formState === "success" && "Gesendet!"}
                                {formState === "error" && "Fehler — nochmal versuchen"}
                            </button>

                            {errorMsg && (
                                <p className="text-red-400/80 text-xs text-center">{errorMsg}</p>
                            )}

                            <p className="text-[#444] text-xs text-center">
                                Mit dem Absenden stimmen Sie unserer{" "}
                                <button
                                    type="button"
                                    onClick={() => {
                                        const btn = document.querySelector("[data-privacy-button]") as HTMLButtonElement
                                        btn?.click()
                                    }}
                                    className="text-[#666] hover:text-white underline underline-offset-2 transition-colors"
                                >
                                    Datenschutzerklärung
                                </button>{" "}
                                zu.
                            </p>
                        </form>
                    </div>

                    {/* Right: Direct Contact */}
                    <div className="flex flex-col justify-center gap-6">
                        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-8 md:p-10 hover:border-white/10 transition-colors duration-300">
                            <h3 className="text-lg font-semibold mb-2">Direkter Kontakt</h3>
                            <p className="text-[#777] text-sm mb-6">
                                Lieber direkt schreiben? Kein Problem.
                            </p>

                            <div className="space-y-4">
                                <button
                                    onClick={copyEmail}
                                    className="w-full inline-flex items-center gap-3 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 text-blue-400 px-5 py-3.5 rounded-lg font-medium transition-all duration-200 text-sm"
                                >
                                    {copied ? <Check size={18} /> : <Mail size={18} />}
                                    <span>{copied ? "Kopiert!" : "office@cillianstudio.com"}</span>
                                    {!copied && <Copy size={14} className="ml-auto opacity-40" />}
                                </button>

                                <a
                                    href="https://wa.me/436801609124"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-[#25D366] px-5 py-3.5 rounded-lg font-medium transition-all duration-200 text-sm"
                                >
                                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                    </svg>
                                    <span>WhatsApp</span>
                                </a>

                                <a
                                    href="tel:+436801609124"
                                    className="w-full inline-flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#999] hover:text-white px-5 py-3.5 rounded-lg font-medium transition-all duration-200 text-sm"
                                >
                                    <Phone size={18} />
                                    <span>+43 680 1609124</span>
                                </a>
                            </div>
                        </div>

                        <p className="text-[#555] text-xs text-center">
                            Antwort innerhalb von 24 Stunden
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
