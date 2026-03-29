"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Send } from "lucide-react"

export function ContactSection() {
    return (
        <section id="contact" className="py-24">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Kontakt</h2>
                    <p className="text-lg text-[#999] max-w-2xl mx-auto">
                        Bereit f&uuml;r Ihr Projekt? Lassen Sie uns reden.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white/[0.03] border border-white/5 rounded-xl p-8 flex flex-col justify-center gap-8"
                    >
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Kontaktdaten</h3>

                            <div className="space-y-6">
                                <a
                                    href="mailto:office@cillianstudio.com"
                                    className="flex items-center gap-4 text-[#999] hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#666] uppercase tracking-wider">E-Mail</p>
                                        <p className="text-[#f2f2f2]">office@cillianstudio.com</p>
                                    </div>
                                </a>

                                <a
                                    href="tel:+436801609124"
                                    className="flex items-center gap-4 text-[#999] hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#666] uppercase tracking-wider">Telefon</p>
                                        <p className="text-[#f2f2f2]">+43 680 1609124</p>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/436801609124"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-[#999] hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-green-600/20 transition-colors">
                                        <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#666] uppercase tracking-wider">WhatsApp</p>
                                        <p className="text-[#f2f2f2]">Nachricht senden</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <p className="text-sm text-[#666]">Wir antworten innerhalb von 24 Stunden</p>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/[0.03] border border-white/5 rounded-xl p-8"
                    >
                        <h3 className="text-xl font-semibold mb-6">Nachricht senden</h3>

                        <form
                            action="mailto:office@cillianstudio.com"
                            method="POST"
                            encType="text/plain"
                            className="space-y-5"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm text-[#999] mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-[#f2f2f2] placeholder-[#555] focus:outline-none focus:border-blue-600 transition-colors"
                                    placeholder="Ihr Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm text-[#999] mb-2">
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-[#f2f2f2] placeholder-[#555] focus:outline-none focus:border-blue-600 transition-colors"
                                    placeholder="ihre@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm text-[#999] mb-2">
                                    Nachricht
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-[#f2f2f2] placeholder-[#555] focus:outline-none focus:border-blue-600 transition-colors resize-none"
                                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                            >
                                <Send size={18} />
                                Senden
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
