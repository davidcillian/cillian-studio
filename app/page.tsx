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

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Cillian Studio",
            image: "https://davidcillian.com/wp-content/uploads/2023/08/254-1.png",
            description: "Professional 3D Creation, AI Solutions & Training Services",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Pelzgasse 3",
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
            priceRange: "$$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
            ],
          }),
        }}
      />
    </div>
  )
}
