"use client"

import { useState } from "react"
import { Youtube, Instagram, Linkedin, X } from "lucide-react"

export function Footer() {
    const [isImpressumOpen, setIsImpressumOpen] = useState(false)
    const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false)

    return (
        <footer className="bg-[#050505] border-t border-white/5">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 py-12">
                {/* Social Media Icons */}
                <div className="flex justify-center gap-4 mb-10">
                    <a
                        href="https://www.youtube.com/channel/UCUnpVqUZeM4HgbusAsfYz-w/posts?pvf=CAI%253D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/[0.05] flex items-center justify-center text-[#555] hover:text-white hover:bg-white/[0.1] transition-all duration-200"
                        title="YouTube"
                        aria-label="YouTube Kanal"
                    >
                        <Youtube size={18} />
                    </a>
                    <a
                        href="https://www.instagram.com/cillian_studio?igsh=aG1obXhzaHlsMnho&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/[0.05] flex items-center justify-center text-[#555] hover:text-white hover:bg-white/[0.1] transition-all duration-200"
                        title="Instagram"
                        aria-label="Instagram Profil"
                    >
                        <Instagram size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/cillian-studio/about/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/[0.05] flex items-center justify-center text-[#555] hover:text-white hover:bg-white/[0.1] transition-all duration-200"
                        title="LinkedIn"
                        aria-label="LinkedIn Profil"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href="https://www.tiktok.com/@cillian_studio?_t=ZN-90Le13JCTzi&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/[0.05] flex items-center justify-center text-[#555] hover:text-white hover:bg-white/[0.1] transition-all duration-200"
                        title="TikTok"
                        aria-label="TikTok Profil"
                    >
                        <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                    </a>
                </div>

                {/* Three Columns */}
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                    {/* Studio */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[#f2f2f2] mb-4">Studio</h4>
                        <p className="text-sm text-[#666] leading-relaxed">
                            Kreativ- und Technologie-Studio in Wien. 3D-Visualisierung, KI-Agenten und Gamification aus einer Hand.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[#f2f2f2] mb-4">Links</h4>
                        <nav className="flex flex-col gap-2">
                            <a href="#about" className="text-sm text-[#666] hover:text-white transition-colors">Über uns</a>
                            <a href="#services" className="text-sm text-[#666] hover:text-white transition-colors">Leistungen</a>
                            <a href="#projects" className="text-sm text-[#666] hover:text-white transition-colors">Projekte</a>
                            <a href="#contact" className="text-sm text-[#666] hover:text-white transition-colors">Kontakt</a>
                        </nav>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[#f2f2f2] mb-4">Rechtliches</h4>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => {
                                    setIsImpressumOpen(true)
                                    setIsDatenschutzOpen(false)
                                }}
                                className="text-sm text-[#666] hover:text-white transition-colors text-left"
                            >
                                Impressum
                            </button>
                            <button
                                data-privacy-button
                                onClick={() => {
                                    setIsDatenschutzOpen(true)
                                    setIsImpressumOpen(false)
                                }}
                                className="text-sm text-[#666] hover:text-white transition-colors text-left"
                            >
                                Datenschutz
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-8 text-center">
                    <p className="text-xs text-[#555]">&copy; {new Date().getFullYear()} Cillian Studio</p>
                </div>
            </div>

            {/* Impressum Modal */}
            {isImpressumOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setIsImpressumOpen(false)}>
                    <div
                        className="bg-[#111] border border-white/10 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-[#f2f2f2]">Impressum</h3>
                            <button
                                onClick={() => setIsImpressumOpen(false)}
                                className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#999] hover:text-white transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="space-y-6 text-sm text-[#aaa] leading-relaxed">
                            <section>
                                <h4 className="text-base font-medium mb-3 text-[#f2f2f2]">Websitebetreiber</h4>
                                <p className="text-[#f2f2f2] mb-1">David Scherngell</p>
                                <p>Wien, &Ouml;sterreich</p>
                            </section>

                            <section>
                                <h4 className="text-base font-medium mb-3 text-[#f2f2f2]">Kontakt</h4>
                                <p>E-Mail: office@cillianstudio.com</p>
                                <p>Telefon: +43 680 1609124</p>
                            </section>

                            <section>
                                <h4 className="text-base font-medium mb-3 text-[#f2f2f2]">Hinweis gem&auml;&szlig; &sect; 5 ECG und &sect; 24 MedienG</h4>
                                <div className="space-y-3">
                                    <p>
                                        Diese Website dient der Pr&auml;sentation kreativer Arbeiten und Projekte von David Scherngell.
                                    </p>
                                    <p>
                                        Die gewerbliche T&auml;tigkeit im Bereich Web- und Grafikdesign befindet sich derzeit in Gr&uuml;ndung.
                                    </p>
                                    <p>
                                        Bis zur formellen Gewerbeanmeldung handelt es sich nicht um ein gewerbliches Angebot im Sinne des E-Commerce-Gesetzes.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h4 className="text-base font-medium mb-3 text-[#f2f2f2]">Verantwortlich f&uuml;r den Inhalt</h4>
                                <p>David Scherngell</p>
                            </section>
                        </div>
                    </div>
                </div>
            )}

            {/* Datenschutz Modal */}
            {isDatenschutzOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setIsDatenschutzOpen(false)}>
                    <div
                        className="bg-[#111] border border-white/10 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-[#f2f2f2]">Datenschutzerkl&auml;rung</h3>
                            <button
                                onClick={() => setIsDatenschutzOpen(false)}
                                className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#999] hover:text-white transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="space-y-6 text-sm text-[#aaa] leading-relaxed" data-privacy-section>
                            <section>
                                <h4 className="text-base font-medium mb-3 text-[#f2f2f2]">1. Verantwortlicher</h4>
                                <p>Verantwortlicher f&uuml;r die Datenverarbeitung auf dieser Website ist:</p>
                                <p className="text-[#f2f2f2] mb-1">David Scherngell</p>
                                <p>Pelzgasse 3, 1150 Wien, &Ouml;sterreich</p>
                                <p>E-Mail: office@cillianstudio.com</p>
                            </section>

                            <section>
                                <h4 className="text-base font-medium mb-3 text-[#f2f2f2]">2. Ihre Rechte</h4>
                                <p>
                                    Sie haben das Recht auf Auskunft, Berichtigung, L&ouml;schung, Einschr&auml;nkung der Verarbeitung,
                                    Widerspruch gegen die Verarbeitung und Daten&uuml;bertragbarkeit. Bei Fragen k&ouml;nnen Sie sich jederzeit
                                    an uns wenden.
                                </p>
                            </section>

                            <section>
                                <h4 className="text-base font-medium mb-3 text-[#f2f2f2]">3. Datenerfassung beim Besuch unserer Website</h4>
                                <div className="space-y-3">
                                    <p>
                                        Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese
                                        Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete
                                        Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und &auml;hnliches.
                                    </p>
                                    <p>
                                        Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten
                                        korrekt auszuliefern und fallen bei der Nutzung des Internets zwingend an.
                                    </p>
                                    <p>
                                        <strong>Speicherdauer:</strong> Server-Logfiles werden f&uuml;r maximal 7 Tage gespeichert und anschlie&szlig;end automatisch gel&ouml;scht.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h4 className="text-base font-medium mb-3 text-[#f2f2f2]">4. Kontaktformular</h4>
                                <div className="space-y-3">
                                    <p>
                                        Bei der Nutzung unseres Kontaktformulars werden die von Ihnen eingegebenen Daten (Name, E-Mail,
                                        Nachricht) verarbeitet. Diese Daten werden ausschlie&szlig;lich zur Bearbeitung Ihrer Anfrage verwendet.
                                    </p>
                                    <p>
                                        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserf&uuml;llung oder vorvertragliche Ma&szlig;nahmen)
                                    </p>
                                    <p>
                                        <strong>Speicherdauer:</strong> Ihre Daten werden gel&ouml;scht, sobald die Bearbeitung Ihrer Anfrage abgeschlossen ist,
                                        sp&auml;testens jedoch nach 12 Monaten.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h4 className="text-base font-medium mb-3 text-[#f2f2f2]">5. Cookies</h4>
                                <div className="space-y-3">
                                    <p>
                                        Diese Website verwendet keine Analyse- oder Tracking-Cookies. Es werden keine Nutzungsdaten an Drittanbieter &uuml;bermittelt.
                                    </p>
                                    <p>
                                        Es werden ausschlie&szlig;lich technisch notwendige Cookies verwendet, die f&uuml;r den Betrieb der Website erforderlich sind.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h4 className="text-base font-medium mb-3 text-[#f2f2f2]">6. Kontakt f&uuml;r Datenschutzfragen</h4>
                                <p>
                                    Bei Fragen zum Datenschutz k&ouml;nnen Sie sich jederzeit an uns wenden: office@cillianstudio.com
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    )
}
