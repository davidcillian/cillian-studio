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
        description: "8+ Jahre 3D-Produktion mit Blender & Unreal Engine 5\nLokale KI-Agenten für Unternehmen — DSGVO-konform\nVerbindet 3D, KI und Gamification in einem Ansatz",
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
        description: "Bachelor in Gaming Business\nGamification, strategische Markenführung\nKI-gestütztes Marketing",
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
        description: "3D-Artist aus Deutschland\nOrganic Modeling, Texturing & LookDev\nVisuell anspruchsvolle Projekte",
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
        description: "Generatoren, Development & Coding\nUmfangreiche Engine-Erfahrung\nTechnisches Rückgrat für komplexe Projekte",
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
                                    {/* Image Side */}
                                    <div className="relative w-full lg:w-[420px] flex-shrink-0 aspect-square lg:aspect-auto lg:min-h-[400px] bg-white/[0.02]">
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-7xl font-bold text-white/15">{member.initials}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Text Side */}
                                    <div className="flex-1 p-8 lg:py-12 lg:px-16 flex flex-col justify-center items-center text-center">
                                        <h3 className="text-3xl md:text-4xl font-bold text-[#f2f2f2] mb-2">{member.name}</h3>
                                        <p className={`text-sm md:text-base uppercase tracking-wider ${member.roleColor} mb-6`}>
                                            {member.role}
                                        </p>
                                        <ul className="space-y-3 mb-8">
                                            {member.description.split("\n").map((line, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-[#aaa] text-lg">
                                                    <span className="text-blue-400/60 mt-1.5 shrink-0 text-sm">&#9679;</span>
                                                    {line}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex gap-5 items-center mt-2">
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
