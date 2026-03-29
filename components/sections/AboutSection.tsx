"use client"

import Image from "next/image"
import { Instagram, Globe, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

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
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-[#f2f2f2] mb-12"
                >
                    Über uns
                </motion.h2>

                <div className="space-y-8">
                    {teamMembers.map((member, index) => {
                        const isReversed = index % 2 === 1

                        return (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                            >
                                <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                                    {/* Image */}
                                    <div className="w-full lg:w-[380px] flex-shrink-0 flex items-center justify-center bg-white/[0.02] p-10 lg:p-12">
                                        {member.image ? (
                                            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    width={224}
                                                    height={224}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-white/10 flex items-center justify-center">
                                                <span className="text-5xl font-semibold text-white/40">
                                                    {member.initials}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold text-[#f2f2f2] mb-1">
                                            {member.name}
                                        </h3>
                                        <p className={`text-sm uppercase tracking-wider ${member.roleColor} mb-5`}>
                                            {member.role}
                                        </p>
                                        <p className="text-[#999] leading-relaxed mb-6">
                                            {member.description}
                                        </p>

                                        {/* Socials */}
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
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
