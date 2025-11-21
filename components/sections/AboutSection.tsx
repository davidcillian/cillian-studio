import { forwardRef } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"

interface AboutSectionProps {
    isMobile: boolean
}

export const AboutSection = forwardRef<HTMLDivElement, AboutSectionProps>(({ isMobile }, ref) => {
    return (
        <section id="about" className="py-24 mobile-about text-center">
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex justify-center">
                    <h2 className="text-center text-[#f2f2f2] font-light tracking-[0.1rem] mb-16 text-4xl mobile-section-heading section-heading-underline">
                        About Us
                    </h2>
                </div>

                {/* About Us Description */}
                <div className="w-full mb-16">
                    <div className="bg-[#1d1d1d] border border-white/10 rounded-lg p-8">
                        <p className="text-[#aaa] text-lg leading-relaxed text-center">
                            Wir sind Ihr Partner für professionelle 3D Creation und innovative AI-Lösungen. Von detaillierten Visualisierungen und prozeduralen Assets bis hin zu maßgeschneiderten Trainings – wir erwecken Ihre Visionen zum Leben. Unsere Leidenschaft ist es, durch die Kombination von Unreal Engine, Blender und modernster Technologie einzigartige digitale Erlebnisse zu schaffen.
                        </p>
                    </div>
                </div>

                <div
                    ref={ref}
                    className="relative flex flex-wrap gap-15 mobile-about-boxes tablet-about-boxes justify-center pt-5"
                    style={{ minHeight: "500px" }}
                >

                    {/* Daniel Abada - Links - Mobile: keine Animation */}
                    <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] ${isMobile ? 'rounded-lg border border-white/10' : 'border border-white/10 rounded-lg'} p-8 relative z-10`}>
                        <div className="flex flex-col items-center text-center mobile-about-content">
                            <div className="w-[180px] h-[180px] mobile-about-avatar rounded-full flex-shrink-0 mb-4 overflow-hidden">
                                <Image
                                    src="/images/Daniel_Abada.jpeg"
                                    alt="Daniel Abada - Marketing Specialist, 3D Artist, Digital Marketing Expert Austria Vienna"
                                    width={180}
                                    height={180}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-[#aaa] text-base mobile-about-text">
                                <h3 className="text-xl mobile-about-name mb-3 text-[#f2f2f2]">Daniel Abada</h3>
                                <div className="text-sm text-purple-400 mb-2 uppercase tracking-wider">Marketing Specialist</div>
                                <p className="leading-6">
                                    Marketing-Spezialist (Bachelor in Gaming Business) mit Expertise in Gamification und strategischer
                                    Markenführung.
                                </p>
                                <div className="mt-4 flex gap-4 justify-center">
                                    <a
                                        href="https://www.linkedin.com/in/daniel-abada-1bb70b324/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-opacity duration-300 hover:opacity-80"
                                        aria-label="Connect with Daniel Abada on LinkedIn"
                                    >
                                        <Image
                                            src="https://yt3.googleusercontent.com/i6KNxiy3gME-BulL4WnuGkTGqHuSYF8jl1WRn0rXftcJdSYK7dHKcJ3gLAaPc-KfhmLSYPwf824=s900-c-k-c0x00ffffff-no-rj"
                                            alt="LinkedIn"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* David Scherngell - Mitte (statisch) */}
                    <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] ${isMobile ? 'rounded-lg border border-white/10' : 'border border-white/10 rounded-lg'} p-8 relative z-10`}>
                        <div className="flex flex-col items-center text-center mobile-about-content">
                            <div className="w-[180px] h-[180px] mobile-about-avatar rounded-full flex-shrink-0 mb-4 overflow-hidden">
                                <Image
                                    src="/images/david-scherngell.jpeg"
                                    alt="David Scherngell - 3D Artist, Unreal Engine Expert, Blender Specialist, 3D Creation Austria Vienna"
                                    width={180}
                                    height={180}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-[#aaa] text-base mobile-about-text">
                                <h3 className="text-xl mobile-about-name mb-3 text-[#f2f2f2]">David Scherngell</h3>
                                <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider">3D Generalist</div>
                                <p className="leading-6">
                                    3D-Künstler aus Österreich mit Schwerpunkt auf Unreal Engine und Blender. Leidenschaftlicher
                                    Mentor für angehende CG-Talente.
                                </p>
                                <div className="mt-4 flex gap-4 justify-center">
                                    <a
                                        href="https://www.instagram.com/david_cillian?igsh=MW1iYjczY2d0Z2gzeA=="
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
                                        aria-label="Follow @david_cillian on Instagram"
                                    >
                                        <Instagram size={24} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/david-scherngell-38a328346/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-opacity duration-300 hover:opacity-80"
                                        aria-label="Connect with David Scherngell on LinkedIn"
                                    >
                                        <Image
                                            src="https://yt3.googleusercontent.com/i6KNxiy3gME-BulL4WnuGkTGqHuSYF8jl1WRn0rXftcJdSYK7dHKcJ3gLAaPc-KfhmLSYPwf824=s900-c-k-c0x00ffffff-no-rj"
                                            alt="LinkedIn"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                    <a
                                        href="https://www.artstation.com/davidcillian"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-opacity duration-300 hover:opacity-80"
                                        aria-label="View David Cillian's ArtStation portfolio"
                                    >
                                        <Image
                                            src="/images/Logos/artstation-logo.png"
                                            alt="ArtStation"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Adrian Spielberger - Zwischen David und GearWorks */}
                    <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] ${isMobile ? 'rounded-lg border border-white/10' : 'border border-white/10 rounded-lg'} p-8 relative z-10`}>
                        <div className="flex flex-col items-center text-center mobile-about-content">
                            <div className="w-[180px] h-[180px] mobile-about-avatar bg-[#aaa] rounded-full flex-shrink-0 mb-4 overflow-hidden">
                                {/* Platzhalter bis Foto kommt */}
                                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                                    <span className="text-2xl text-white/60">AS</span>
                                </div>
                            </div>
                            <div className="text-[#aaa] text-base mobile-about-text">
                                <h3 className="text-xl mobile-about-name mb-3 text-[#f2f2f2]">Adrian Spielberger</h3>
                                <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider">3D Artist</div>
                                <p className="leading-6">
                                    3D-Artist aus Deutschland mit Fokus auf Organic Modeling, Texturing & LookDev.
                                </p>
                                <div className="mt-4 flex gap-4 justify-center">
                                    <a
                                        href="https://www.instagram.com/3d.aspect?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
                                        aria-label="Follow @3d.aspect on Instagram"
                                    >
                                        <Instagram size={24} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/adrian-spielberger/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-opacity duration-300 hover:opacity-80"
                                        aria-label="Connect with Adrian Spielberger on LinkedIn"
                                    >
                                        <Image
                                            src="https://yt3.googleusercontent.com/i6KNxiy3gME-BulL4WnuGkTGqHuSYF8jl1WRn0rXftcJdSYK7dHKcJ3gLAaPc-KfhmLSYPwf824=s900-c-k-c0x00ffffff-no-rj"
                                            alt="LinkedIn"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gearworks - Rechts */}
                    <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] ${isMobile ? 'rounded-lg border border-white/10' : 'border border-white/10 rounded-lg'} p-8 relative z-10`}>
                        <div className="flex flex-col items-center text-center mobile-about-content">
                            <div className="w-[180px] h-[180px] mobile-about-avatar rounded-full flex-shrink-0 mb-4 overflow-hidden">
                                <Image
                                    src="/images/gearworks-icon.png?v=2"
                                    alt="GearWorks Production - Technical Specialist"
                                    width={180}
                                    height={180}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-[#aaa] text-base mobile-about-text">
                                <h3 className="text-xl mobile-about-name mb-3 text-[#f2f2f2]">GearWorks Production</h3>
                                <div className="text-sm text-green-400 mb-2 uppercase tracking-wider">Technical Specialist</div>
                                <p className="leading-6">
                                    GearWorks Production - Spezialist für Generatoren, Development und Coding mit umfangreicher
                                    Engine-Erfahrung. Technisches Rückgrat für komplexe 3D-Projekte.
                                </p>
                                <div className="mt-4 flex gap-4 justify-center">
                                    <a
                                        href="https://www.youtube.com/@gearworks-gameproduction3745"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-opacity duration-300 hover:opacity-80"
                                        aria-label="Visit GearWorks Game Production YouTube channel"
                                    >
                                        <Image
                                            src="/images/Logos/Youtube_Logo.png"
                                            alt="YouTube Game Production"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@gearworks-entertainmentpro8605"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-opacity duration-300 hover:opacity-80"
                                        aria-label="Visit GearWorks Entertainment YouTube channel"
                                    >
                                        <Image
                                            src="/images/Logos/youtube_lila.png"
                                            alt="YouTube Entertainment"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@gearworks-musicproduction2737"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-opacity duration-300 hover:opacity-80"
                                        aria-label="Visit GearWorks Music Production YouTube channel"
                                    >
                                        <Image
                                            src="/images/Logos/youtube_blau.png"
                                            alt="YouTube Music Production"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@gearworks-softwareproducti3548"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-opacity duration-300 hover:opacity-80"
                                        aria-label="Visit GearWorks Software Production YouTube channel"
                                    >
                                        <Image
                                            src="/images/Logos/youtube_gruen.png"
                                            alt="YouTube Software Production"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})
AboutSection.displayName = "AboutSection"
