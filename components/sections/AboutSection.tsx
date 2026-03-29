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
            "Seit über 8 Jahren in der professionellen 3D-Produktion mit Blender und Unreal Engine 5. Entwickelt zusätzlich lokale KI-Agenten-Systeme für Unternehmen — DSGVO-konform und ohne Cloud-Abhängigkeit.",
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

function TeamCard({ member }: { member: TeamMember }) {
    return (
        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-8 hover:border-white/10 transition-colors duration-300 flex flex-col">
            {/* Avatar + Name row */}
            <div className="flex items-center gap-5 mb-5">
                {member.image ? (
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ) : (
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-semibold text-white/40">{member.initials}</span>
                    </div>
                )}
                <div>
                    <h3 className="text-xl font-bold text-[#f2f2f2]">{member.name}</h3>
                    <p className={`text-xs uppercase tracking-wider ${member.roleColor} mt-1`}>{member.role}</p>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#888] leading-relaxed flex-1 mb-5">
                {member.description}
            </p>

            {/* Socials */}
            <div className="flex gap-4 items-center pt-4 border-t border-white/5">
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
    )
}

export function AboutSection() {
    return (
        <section id="about" className="py-24">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#f2f2f2] mb-10">
                    Über uns
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {teamMembers.map((member) => (
                        <TeamCard key={member.name} member={member} />
                    ))}
                </div>
            </div>
        </section>
    )
}
