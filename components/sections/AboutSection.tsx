"use client"

import Image from "next/image"
import { Instagram, Globe, Linkedin } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const LinkedInIcon = () => <Linkedin size={20} />

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
        role: "3D Generalist & Creative Technology Consultant",
        roleColor: "text-blue-500",
        description:
            "Seit über 8 Jahren in der professionellen 3D-Produktion mit Blender und Unreal Engine 5. Entwickelt zusätzlich lokale KI-Agenten-Systeme für Unternehmen — DSGVO-konform und ohne Cloud-Abhängigkeit.",
        image: "/images/david-scherngell.jpeg",
        socials: [
            {
                href: "https://www.instagram.com/david_cillian?igsh=MW1iYjczY2d0Z2gzeA==",
                label: "Follow @david_cillian on Instagram",
                icon: <Instagram size={20} />,
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
                        width={24}
                        height={24}
                        className="w-6 h-6"
                    />
                ),
            },
        ],
    },
    {
        name: "Daniel Abada",
        role: "Marketing & Gamification (Externer Berater)",
        roleColor: "text-purple-500",
        description:
            "Marketing-Spezialist (Bachelor in Gaming Business) mit Expertise in Gamification, strategischer Markenführung und KI-gestütztem Marketing.",
        image: "/images/Daniel_Abada.jpeg",
        socials: [
            {
                href: "https://danielabada.com",
                label: "Visit Daniel Abada's website",
                icon: <Globe size={20} />,
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
        role: "3D Artist & UI/UX (Externer Berater)",
        roleColor: "text-purple-500",
        description:
            "3D-Artist aus Deutschland mit Fokus auf Organic Modeling, Texturing & LookDev.",
        initials: "AS",
        socials: [
            {
                href: "https://www.instagram.com/3d.aspect?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                label: "Follow @3d.aspect on Instagram",
                icon: <Instagram size={20} />,
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
        role: "Technical Specialist (Externer Berater)",
        roleColor: "text-green-500",
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

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-white/5 border border-white/5 rounded-xl p-8 hover:border-white/10 transition-colors duration-300"
        >
            <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 flex-shrink-0">
                    {member.image ? (
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={144}
                            height={144}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-white/10 flex items-center justify-center">
                            <span className="text-2xl font-semibold text-white/50">
                                {member.initials}
                            </span>
                        </div>
                    )}
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-[#f2f2f2] mb-1">
                    {member.name}
                </h3>

                {/* Role */}
                <p className={`text-xs uppercase tracking-wider ${member.roleColor} mb-4`}>
                    {member.role}
                </p>

                {/* Description */}
                <p className="text-sm text-[#999] leading-relaxed mb-5">
                    {member.description}
                </p>

                {/* Social Links */}
                <div className="flex gap-4 items-center">
                    {member.socials.map((social) => (
                        <a
                            key={social.href}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${social.colorClass || "opacity-70 hover:opacity-100"} transition-all duration-300`}
                            aria-label={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section id="about" className="py-24 bg-[#0a0a0a]">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8" ref={sectionRef}>
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-[#f2f2f2] text-center mb-6"
                >
                    Über uns
                </motion.h2>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white/[0.03] border border-white/5 rounded-xl p-8 md:p-10 mb-12 text-center"
                >
                    <p className="text-[#bbb] text-lg md:text-xl leading-relaxed">
                        Cillian Studio verbindet <span className="text-white font-medium">3D-Visualisierung</span>, <span className="text-white font-medium">KI-Agenten-Entwicklung</span> und <span className="text-white font-medium">Gamification</span> zu einem einzigartigen Dienstleistungsangebot.
                    </p>
                    <p className="text-[#777] text-base leading-relaxed mt-4">
                        Als Creative Technology Consultant berät und setzt David Scherngell Lösungen um, die traditionell getrennte Disziplinen in einem integrierten Ansatz vereinen — von fotorealistischen Renderings über lokale KI-Setups bis hin zu spielerischen Engagement-Systemen. Alles aus einer Hand, DSGVO-konform und ohne Cloud-Abhängigkeit.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={member.name} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
