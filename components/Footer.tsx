"use client"

import { useState } from "react"
import { Youtube, Instagram, Linkedin, Phone, Mail } from "lucide-react"

interface FooterProps {
    currentYear: number
}

export function Footer({ currentYear }: FooterProps) {
    const [isImpressumOpen, setIsImpressumOpen] = useState(false)
    const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false)
    const [isKontaktOpen, setIsKontaktOpen] = useState(false)

    return (
        <footer className="bg-[#0a0a0a] border-t border-white/10 py-12 mobile-footer">
            <div className="max-w-6xl mx-auto px-5 text-center">
                {/* Social Media Links */}
                <div className="mb-8">
                    <h3 className="text-[#f2f2f2] text-lg mb-4">Folgen Sie uns</h3>
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://www.youtube.com/channel/UCUnpVqUZeM4HgbusAsfYz-w/posts?pvf=CAI%253D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#aaa] hover:text-white transition-colors"
                            aria-label="YouTube Kanal"
                        >
                            <Youtube size={20} />
                            <span className="text-sm">YouTube</span>
                        </a>
                        <a
                            href="https://www.instagram.com/cillian_studio?igsh=aG1obXhzaHlsMnho&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#aaa] hover:text-white transition-colors"
                            aria-label="Instagram Profil"
                        >
                            <Instagram size={20} />
                            <span className="text-sm">Instagram</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/cillian-studio/about/?viewAsMember=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#aaa] hover:text-white transition-colors"
                            aria-label="LinkedIn Profil"
                        >
                            <Linkedin size={20} />
                            <span className="text-sm">LinkedIn</span>
                        </a>
                        <a
                            href="https://www.tiktok.com/@cillian_studio?_t=ZN-90Le13JCTzi&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#aaa] hover:text-white transition-colors"
                            aria-label="TikTok Profil"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                            <span className="text-sm">TikTok</span>
                        </a>
                    </div>
                </div>

                <div className="text-[#aaa] text-sm mobile-footer-text">
                    &copy; {currentYear} Cillian Studio |{" "}
                    <button
                        onClick={() => {
                            setIsImpressumOpen(!isImpressumOpen)
                            setIsDatenschutzOpen(false)
                            setIsKontaktOpen(false)
                        }}
                        className="hover:text-white transition-colors"
                    >
                        Impressum
                    </button>{" "}
                    |{" "}
                    <button
                        data-privacy-button
                        onClick={() => {
                            setIsDatenschutzOpen(!isDatenschutzOpen)
                            setIsImpressumOpen(false)
                            setIsKontaktOpen(false)
                        }}
                        className="hover:text-white transition-colors"
                    >
                        Datenschutz
                    </button>{" "}
                    |{" "}
                    <button
                        onClick={() => {
                            setIsKontaktOpen(!isKontaktOpen)
                            setIsImpressumOpen(false)
                            setIsDatenschutzOpen(false)
                        }}
                        className="hover:text-white transition-colors"
                    >
                        Kontakt
                    </button>
                </div>

                {/* Legal Links */}
                <div className="mt-6 space-y-2">
                    <button
                        onClick={() => {
                            setIsImpressumOpen(true)
                            setIsDatenschutzOpen(false)
                            setIsKontaktOpen(false)
                        }}
                        className="text-xs text-[#666] hover:text-[#aaa] transition-colors block mx-auto"
                    >
                        Impressum anzeigen
                    </button>
                    <button
                        onClick={() => {
                            setIsDatenschutzOpen(true)
                            setIsImpressumOpen(false)
                            setIsKontaktOpen(false)
                        }}
                        className="text-xs text-[#666] hover:text-[#aaa] transition-colors block mx-auto"
                    >
                        Datenschutz anzeigen
                    </button>
                    <button
                        onClick={() => {
                            setIsKontaktOpen(true)
                            setIsImpressumOpen(false)
                            setIsDatenschutzOpen(false)
                        }}
                        className="text-xs text-[#666] hover:text-[#aaa] transition-colors block mx-auto"
                    >
                        Kontakt anzeigen
                    </button>
                </div>
            </div>

            {/* Impressum Aufklappbereich */}
            <div
                className={`overflow-hidden transition-all duration-500 ${isImpressumOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-[#1d1d1d] border border-white/10 rounded-lg p-8 mx-5 mt-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-light tracking-[0.1rem] text-[#f2f2f2]">IMPRESSUM</h3>
                        <button
                            onClick={() => setIsImpressumOpen(false)}
                            className="text-[#aaa] hover:text-white transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="space-y-6 text-sm text-[#aaa] leading-relaxed">
                        {/* Websitebetreiber */}
                        <section>
                            <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">Websitebetreiber</h3>
                            <div className="text-[#aaa] leading-relaxed">
                                <p className="text-[#f2f2f2] mb-2">David Scherngell</p>
                                <p>Wien, Österreich</p>
                            </div>
                        </section>

                        {/* Kontakt */}
                        <section>
                            <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">Kontakt</h3>
                            <div className="text-[#aaa] leading-relaxed">
                                <p>E-Mail: office@cillianstudio.com</p>
                                <p>Telefon: +43 680 1609124</p>
                            </div>
                        </section>

                        {/* Hinweis gemäß ECG und MedienG */}
                        <section>
                            <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">Hinweis gemäß § 5 ECG und § 24 MedienG</h3>
                            <div className="text-[#aaa] leading-relaxed space-y-3">
                                <p>
                                    Diese Website dient der Präsentation kreativer Arbeiten und Projekte von David Scherngell.
                                </p>
                                <p>
                                    Die gewerbliche Tätigkeit im Bereich Web- und Grafikdesign befindet sich derzeit in Gründung.
                                </p>
                                <p>
                                    Bis zur formellen Gewerbeanmeldung handelt es sich nicht um ein gewerbliches Angebot im Sinne des E-Commerce-Gesetzes.
                                </p>
                            </div>
                        </section>

                        {/* Verantwortlich für den Inhalt */}
                        <section>
                            <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">Verantwortlich für den Inhalt</h3>
                            <div className="text-[#aaa] leading-relaxed">
                                <p>David Scherngell</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Datenschutz Aufklappbereich */}
            <div
                data-privacy-section
                className={`overflow-hidden transition-all duration-500 ${isDatenschutzOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-[#1d1d1d] border border-white/10 rounded-lg p-8 mx-5 mt-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-light tracking-[0.1rem] text-[#f2f2f2]">DATENSCHUTZERKLÄRUNG</h3>
                        <button
                            onClick={() => setIsDatenschutzOpen(false)}
                            className="text-[#aaa] hover:text-white transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="space-y-6 text-sm text-[#aaa] leading-relaxed">
                        {/* Verantwortlicher */}
                        <section>
                            <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">1. Verantwortlicher</h3>
                            <div className="text-[#aaa] leading-relaxed">
                                <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
                                <p className="text-[#f2f2f2] mb-2">David Scherngell</p>
                                <p>Pelzgasse 3, 1150 Wien, Österreich</p>
                                <p>E-Mail: office@cillianstudio.com</p>
                            </div>
                        </section>

                        {/* Ihre Rechte */}
                        <section>
                            <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">2. Ihre Rechte</h3>
                            <div className="text-[#aaa] leading-relaxed">
                                <p>
                                    Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
                                    Widerspruch gegen die Verarbeitung und Datenübertragbarkeit. Bei Fragen können Sie sich jederzeit
                                    an uns wenden.
                                </p>
                            </div>
                        </section>

                        {/* Datenerfassung */}
                        <section>
                            <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">
                                3. Datenerfassung beim Besuch unserer Website
                            </h3>
                            <div className="text-[#aaa] leading-relaxed space-y-3">
                                <p>
                                    Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese
                                    Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete
                                    Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches.
                                </p>
                                <p>
                                    Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten
                                    korrekt auszuliefern und fallen bei der Nutzung des Internets zwingend an.
                                </p>
                                <p>
                                    <strong>Speicherdauer:</strong> Server-Logfiles werden für maximal 7 Tage gespeichert und anschließend automatisch gelöscht.
                                </p>
                            </div>
                        </section>

                        {/* Kontaktformular */}
                        <section>
                            <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">4. Kontaktformular</h3>
                            <div className="text-[#aaa] leading-relaxed space-y-3">
                                <p>
                                    Bei der Nutzung unseres Kontaktformulars werden die von Ihnen eingegebenen Daten (Name, E-Mail,
                                    Nachricht) verarbeitet. Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
                                </p>
                                <p>
                                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen)
                                </p>
                                <p>
                                    <strong>Speicherdauer:</strong> Ihre Daten werden gelöscht, sobald die Bearbeitung Ihrer Anfrage abgeschlossen ist,
                                    spätestens jedoch nach 12 Monaten.
                                </p>
                            </div>
                        </section>

                        {/* Cookies und Analytics */}
                        <section>
                            <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">5. Cookies und Web-Analyse</h3>
                            <div className="text-[#aaa] leading-relaxed space-y-3">
                                <p>
                                    Diese Website verwendet Google Analytics, einen Webanalysedienst der Google LLC. Google Analytics verwendet Cookies,
                                    um die Nutzung der Website zu analysieren.
                                </p>
                                <p>
                                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                                </p>
                                <p>
                                    <strong>Zweck:</strong> Analyse der Website-Nutzung zur Verbesserung unserer Dienstleistungen
                                </p>
                                <p>
                                    <strong>Speicherdauer:</strong> Cookies werden für maximal 24 Monate gespeichert
                                </p>
                                <p>
                                    Sie können der Verwendung von Google Analytics widersprechen, indem Sie das Browser-Add-on zur Deaktivierung
                                    von Google Analytics installieren oder die Cookie-Einstellungen in Ihrem Browser anpassen.
                                </p>
                            </div>
                        </section>

                        {/* Kontakt für Datenschutzfragen */}
                        <section>
                            <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">6. Kontakt für Datenschutzfragen</h3>
                            <div className="text-[#aaa] leading-relaxed">
                                <p>
                                    Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden: office@cillianstudio.com
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Kontakt Aufklappbereich */}
            <div
                className={`overflow-hidden transition-all duration-500 ${isKontaktOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-[#1d1d1d] border border-white/10 rounded-lg p-8 mx-5 mt-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-light tracking-[0.1rem] text-[#f2f2f2]">KONTAKT</h3>
                        <button
                            onClick={() => setIsKontaktOpen(false)}
                            className="text-[#aaa] hover:text-white transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="space-y-6 text-sm text-[#aaa] leading-relaxed">
                        {/* Kontaktinformationen */}
                        <section>
                            <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">Kontaktinformationen</h3>
                            <div className="text-[#aaa] leading-relaxed space-y-3">
                                <div className="flex items-center gap-3">
                                    <Mail size={16} />
                                    <a href="mailto:office@cillianstudio.com" className="hover:text-white transition-colors">
                                        office@cillianstudio.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={16} />
                                    <span>+43 680 1609124</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a
                                        href="https://wa.me/436801609124"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-white transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                        </svg>
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Adresse */}
                        <section>
                            <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">Adresse</h3>
                            <div className="text-[#aaa] leading-relaxed">
                                <p>David Scherngell</p>
                                <p>Pelzgasse 3</p>
                                <p>1150 Wien, Österreich</p>
                            </div>
                        </section>

                        {/* Social Media */}
                        <section>
                            <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">Social Media</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.youtube.com/channel/UCUnpVqUZeM4HgbusAsfYz-w/posts?pvf=CAI%253D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#aaa] hover:text-white transition-colors"
                                >
                                    <Youtube size={16} />
                                    <span className="text-sm">YouTube</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/cillian_studio?igsh=aG1obXhzaHlsMnho&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#aaa] hover:text-white transition-colors"
                                >
                                    <Instagram size={16} />
                                    <span className="text-sm">Instagram</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/cillian-studio/about/?viewAsMember=true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#aaa] hover:text-white transition-colors"
                                >
                                    <Linkedin size={16} />
                                    <span className="text-sm">LinkedIn</span>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@cillian_studio?_t=ZN-90Le13JCTzi&_r=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#aaa] hover:text-white transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                    </svg>
                                    <span className="text-sm">TikTok</span>
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </footer>
    )
}
