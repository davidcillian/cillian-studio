"use client"

import { useState, useEffect, useRef } from "react"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { GallerySection } from "@/components/sections/GallerySection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function CillianStudio() {
  const [isMobile, setIsMobile] = useState(false)
  const [headerOpacity, setHeaderOpacity] = useState(1)

  const aboutBoxesRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const galleryImagesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const newOpacity = Math.max(0, 1 - scrollY / 300)
      setHeaderOpacity(newOpacity)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault()
    if (aboutBoxesRef.current) {
      const yOffset = -100
      const y = aboutBoxesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    if (projectsRef.current) {
      const yOffset = -100
      const y = projectsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const scrollToGallery = (e: React.MouseEvent) => {
    e.preventDefault()
    if (galleryImagesRef.current) {
      const yOffset = -100
      const y = galleryImagesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    if (contactRef.current) {
      const yOffset = -100
      const y = contactRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-[#1d1d1d] text-[#f2f2f2] font-['Montserrat',sans-serif]">
      <Header
        headerOpacity={headerOpacity}
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
        scrollToGallery={scrollToGallery}
        scrollToContact={scrollToContact}
      />

      <main>
        <HeroSection />
        <AboutSection ref={aboutBoxesRef} isMobile={isMobile} />
        <ServicesSection />
        <ProjectsSection ref={projectsRef} />
        <GallerySection ref={galleryImagesRef} />
        <ContactSection ref={contactRef} />
      </main>

      <Footer currentYear={currentYear} />

      {/* Structured Data for SEO & AI Discoverability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Cillian Studio",
              image: "https://cillianstudio.com/images/3d-artwork-1.png",
              description: "Kreativ- und Technologie-Studio in Wien. Verbindet 3D-Visualisierung, lokale KI-Agenten-Entwicklung und Gamification. Als Creative Technology Consultant liefert David Scherngell Lösungen, die kein reiner 3D-Artist und kein reiner KI-Berater bieten kann.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Wien",
                postalCode: "1150",
                addressCountry: "AT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 48.19,
                longitude: 16.32,
              },
              url: "https://cillianstudio.com",
              telephone: "+436801609124",
              email: "office@cillianstudio.com",
              priceRange: "$$",
              sameAs: [
                "https://www.instagram.com/cillian_studio",
                "https://www.linkedin.com/company/cillian-studio",
                "https://www.youtube.com/channel/UCUnpVqUZeM4HgbusAsfYz-w",
                "https://www.tiktok.com/@cillian_studio",
              ],
              founder: {
                "@type": "Person",
                name: "David Scherngell",
                jobTitle: "Creative Technology Consultant",
                knowsAbout: [
                  "3D-Visualisierung",
                  "Unreal Engine 5",
                  "Blender",
                  "ZBrush",
                  "Substance Painter",
                  "KI-Agenten",
                  "Lokale LLMs",
                  "n8n Workflow-Automatisierung",
                  "Gamification",
                  "DSGVO-konforme KI-Lösungen",
                ],
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Dienstleistungen",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "3D-Visualisierung",
                      description: "Fotorealistische Renderings, interaktive ArchViz in Unreal Engine 5, Echtzeit-Produktkonfiguratoren und game-ready Assets. KI-gestützte Beschleunigung der 3D-Pipeline.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "KI-Agenten",
                      description: "Selbst-gehostete KI-Agenten-Systeme — DSGVO-konform, ohne Cloud-Abhängigkeit. Lokale LLMs, Multi-Agent-Systeme, RAG-Integration und n8n-Workflow-Automatisierung.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gamification",
                      description: "Maßgeschneiderte Gamification-Lösungen mit Belohnungsmechaniken und Progressions-Design für Vertrieb, Kundenbindung und Mitarbeitermotivation.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Training & Consulting",
                      description: "3D- und KI-Workshops an VHS Wien, WKO und als Firmenworkshops. Blender, Unreal Engine 5, lokale KI-Agenten, n8n-Automatisierung und Prompt Engineering.",
                    },
                  },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Was bietet Cillian Studio an?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cillian Studio verbindet 3D-Visualisierung, KI-Agenten-Entwicklung und Gamification. Als Creative Technology Consultant liefert David Scherngell Lösungen aus einer Hand — von fotorealistischen Renderings über lokale KI-Setups bis zu Gamification-Systemen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was sind lokale KI-Agenten?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lokale KI-Agenten sind selbst-gehostete KI-Systeme, die auf Ihrem eigenen Server laufen — ohne Cloud-Abhängigkeit. Cillian Studio setzt lokale LLMs (Llama, DeepSeek, Mistral) auf, die DSGVO-konform arbeiten. Keine Daten verlassen Ihren Server.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wo befindet sich Cillian Studio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cillian Studio hat seinen Sitz in Wien, Österreich und bietet Dienstleistungen sowohl lokal als auch international an.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche 3D-Software verwendet Cillian Studio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Wir arbeiten mit Blender, Unreal Engine 5, ZBrush, Substance Painter, Marvelous Designer, Maya und ComfyUI. Zusätzlich setzen wir KI-gestützte Workflows und lokale LLMs ein.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Bietet Cillian Studio Workshops an?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja — 3D-Workshops (Blender, UE5), KI-Workshops (lokale KI-Agenten, n8n, Prompt Engineering) und die einzigartige Kombination 3D + KI. Verfügbar über VHS Wien, WKO und als maßgeschneiderte Firmenworkshops.",
                  },
                },
              ],
            },
          ]),
        }}
      />
    </div>
  )
}
