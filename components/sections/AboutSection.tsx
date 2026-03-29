"use client"

import Image from "next/image"
import { Instagram, Globe, Linkedin } from "lucide-react"

const LinkedInIcon = () => <Linkedin size={18} />

const YouTubeIcon = ({ src, alt }: { src: string; alt: string }) => (
    <Image src={src} alt={alt} width={28} height={20} className="w-7 h-auto" />
)

interface SocialLink {
    href: string
    label: string
    icon: React.ReactNode
    colorClass?: string
}

interface TeamMember {
    name: string
    role: string
    roleColor: string
    description: string
    image?: string
    initials?: string
    socials: SocialLink[]
}

const teamMembers: TeamMember[] = [
    {
        name: "David Scherngell",
        role: "Gründer & Creative Technology Consultant",
        roleColor: "text-blue-400",
        description:
            "Seit über 8 Jahren in der professionellen 3D-Produktion mit Blender und Unreal Engine 5. Entwickelt zusätzlich lokale KI-Agenten-Systeme für Unternehmen — DSGVO-konform und ohne Cloud-Abhängigkeit. Verbindet kreative und technische Disziplinen in einem integrierten Ansatz.",
        image: "/images/david-scherngell.jpeg",
        socials: [
            {
                href: "https://www.instagram.com/david_cillian?igsh=MW1iYjczY2d0Z2gzeA==",
                label: "Follow @david_cillian on Instagram",
                icon: <Instagram size={18} />,
                colorClass: "text-pink-400 hover:text-pink-300",
            },
            {
                href: "https://www.linkedin.com/in/david-scherngell-38a328346/",
                label: "Connect with David Scherngell on LinkedIn",
                icon: <LinkedInIcon />,
            },
            {
                href: "https://www.artstation.com/davidcillian",
                label: "View David Cillian's ArtStation portfolio",
                icon: (
                    <Image
                        src="/images/Logos/artstation-logo.png"
                        alt="ArtStation"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                    />
                ),
            },
        ],
    },
    {
        name: "Daniel Abada",
        role: "Marketing & Gamification · Externer Berater",
        roleColor: "text-purple-400",
        description:
            "Marketing-Spezialist mit Bachelor in Gaming Business. Bringt Expertise in Gamification, strategischer Markenführung und KI-gestütztem Marketing ins Team.",
        image: "/images/Daniel_Abada.jpeg",
        socials: [
            {
                href: "https://danielabada.com",
                label: "Visit Daniel Abada's website",
                icon: <Globe size={18} />,
                colorClass: "text-blue-400 hover:text-blue-300",
            },
            {
                href: "https://www.linkedin.com/in/daniel-abada-1bb70b324/",
                label: "Connect with Daniel Abada on LinkedIn",
                icon: <LinkedInIcon />,
            },
        ],
    },
    {
        name: "Adrian Spielberger",
        role: "3D Artist & UI/UX · Externer Berater",
        roleColor: "text-purple-400",
        description:
            "3D-Artist aus Deutschland mit Fokus auf Organic Modeling, Texturing und LookDev. Unterstützt das Studio bei anspruchsvollen visuellen Projekten.",
        initials: "AS",
        socials: [
            {
                href: "https://www.instagram.com/3d.aspect?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                label: "Follow @3d.aspect on Instagram",
                icon: <Instagram size={18} />,
                colorClass: "text-pink-400 hover:text-pink-300",
            },
            {
                href: "https://www.linkedin.com/in/adrian-spielberger/",
                label: "Connect with Adrian Spielberger on LinkedIn",
                icon: <LinkedInIcon />,
            },
        ],
    },
    {
        name: "GearWorks Production",
        role: "Technical Specialist · Externer Berater",
        roleColor: "text-green-400",
        description:
            "Spezialist für Generatoren, Development und Coding mit umfangreicher Engine-Erfahrung. Technisches Rückgrat für komplexe Projekte.",
        image: "/images/gearworks-icon.png?v=2",
        socials: [
            {
                href: "https://www.youtube.com/@gearworks-gameproduction3745",
                label: "Visit GearWorks Game Production YouTube channel",
                icon: <YouTubeIcon src="/images/Logos/Youtube_Logo.png" alt="YouTube Game Production" />,
            },
            {
                href: "https://www.youtube.com/@gearworks-entertainmentpro8605",
                label: "Visit GearWorks Entertainment YouTube channel",
                icon: <YouTubeIcon src="/images/Logos/youtube_lila.png" alt="YouTube Entertainment" />,
            },
            {
                href: "https://www.youtube.com/@gearworks-musicproduction2737",
                label: "Visit GearWorks Music Production YouTube channel",
                icon: <YouTubeIcon src="/images/Logos/youtube_blau.png" alt="YouTube Music Production" />,
            },
            {
                href: "https://www.youtube.com/@gearworks-softwareproducti3548",
                label: "Visit GearWorks Software Production YouTube channel",
                icon: <YouTubeIcon src="/images/Logos/youtube_gruen.png" alt="YouTube Software Production" />,
            },
        ],
    },
]

export function AboutSection() {
    return (
        <section id="about" className="py-24">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#f2f2f2] mb-12">
                    Über uns
                </h2>

                <div className="space-y-6">
                    {teamMembers.map((member, index) => {
                        const imageLeft = index % 2 === 0

                        return (
                            <div
                                key={member.name}
                                className="bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors duration-300"
                            >
                                <div className={`flex flex-col ${imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                                    {/* Avatar Side */}
                                    <div className="w-full lg:w-[320px] flex-shrink-0 flex items-center justify-center py-10 lg:py-0">
                                        {member.image ? (
                                            <div className="w-40 h-40 rounded-full overflow-hidden ring-2 ring-white/5">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    width={160}
                                                    height={160}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-40 h-40 rounded-full bg-white/[0.06] ring-2 ring-white/5 flex items-center justify-center">
                                                <span className="text-4xl font-bold text-white/30">{member.initials}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Text Side */}
                                    <div className="flex-1 p-8 lg:py-10 lg:px-10 flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold text-[#f2f2f2] mb-1">{member.name}</h3>
                                        <p className={`text-sm uppercase tracking-wider ${member.roleColor} mb-4`}>
                                            {member.role}
                                        </p>
                                        <p className="text-[#888] leading-relaxed mb-6 max-w-xl">
                                            {member.description}
                                        </p>
                                        <div className="flex gap-4 items-center">
                                            {member.socials.map((social) => (
                                                <a
                                                    key={social.href}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`${social.colorClass || "opacity-60 hover:opacity-100"} transition-all duration-200`}
                                                    aria-label={social.label}
                                                >
                                                    {social.icon}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
