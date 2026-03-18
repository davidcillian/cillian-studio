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
              description: "Professionelles Studio für 3D-Visualisierung, KI-gestützte Produktion und Training in Wien. Spezialisiert auf Unreal Engine, Blender und modernste 3D-Technologien.",
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
                jobTitle: "3D Artist & Technical Artist",
                knowsAbout: [
                  "Unreal Engine 5",
                  "Blender",
                  "ZBrush",
                  "Substance Painter",
                  "3D Visualisierung",
                  "KI-gestützte 3D-Produktion",
                  "Gamification",
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
                      name: "3D Creation",
                      description: "Professionelle 3D-Umgebungen, Assets, Archviz-Projekte und cinematische Videos mit Unreal Engine 5, Blender, ZBrush und Substance Painter.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Creation",
                      description: "KI-gestützte kreative Workflows für Trailer, Werbespots und immersive Visualisierungen.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gamification",
                      description: "Maßgeschneiderte Gamifizierung von Verkaufs- und Vertriebsprozessen mit Belohnungssystemen und Fortschrittsanzeigen.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Training",
                      description: "Blender-Kurse von Grundlagen bis Fortgeschrittene, inklusive Material-/Texturarbeit, Beleuchtung und Game Engine Integration.",
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
                    text: "Cillian Studio bietet professionelle 3D-Visualisierung, KI-gestützte Produktion, Gamification-Lösungen und 3D-Training an. Wir arbeiten mit Unreal Engine 5, Blender, ZBrush und weiteren führenden Tools.",
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
                    text: "Wir arbeiten mit Unreal Engine 5, Blender, ZBrush, Substance Painter, Marvelous Designer, Maya und Premiere Pro. Zusätzlich setzen wir KI-gestützte Workflows ein.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Bietet Cillian Studio Blender-Kurse an?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja, wir bieten umfassende Blender-Kurse an – von Grundlagen bis Fortgeschrittene. Die Kurse umfassen 3D-Modellierung, Material-/Texturarbeit, Beleuchtung, Rendering und die Integration in Game Engines.",
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
