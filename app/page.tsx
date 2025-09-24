"use client"

// redeploy trigger v2 - About cards static

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import "./globals.css"
import { ChevronLeft, ChevronRight, X, ExternalLink, Calendar, Users, Mail, Send } from 'lucide-react'
// Removed moving/venom effects and heavy animations
import UnfoldAnimation from "@/components/unfold-animation"
import HeroAnimation from "@/components/hero-animation"

const featureData = {
  "asset-ai": {
    text: "Einsatz von KI-gestützten Tools zur Optimierung von Modellierung und Texturierung. Wir nutzen modernste KI-Technologien, um den Workflow zu beschleunigen und die Qualität zu verbessern.",
    slides: [
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled-1.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/icon2.png?w=1024",
    ],
  },
  "asset-ue": {
    text: "Nahtlose Integration und Optimierung von Assets in UE5-Projekte. Wir sorgen dafür, dass Ihre 3D-Modelle perfekt in Unreal Engine funktionieren und dabei maximale Performance bieten.",
    slides: [
      "https://davidcillian.com/wp-content/uploads/2023/08/icon1.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled-1.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled.png?w=1024",
    ],
  },
  "asset-optimization": {
    text: "Optimierung von 3D-Assets für maximale Performance bei minimaler Qualitätseinbuße. Wir finden die perfekte Balance zwischen visueller Qualität und technischer Effizienz.",
    slides: [
      "https://davidcillian.com/wp-content/uploads/2023/08/icon2.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/icon1.png?w=1024",
    ],
  },
  "scene-environments": {
    text: "Kreative Gestaltung immersiver 3D-Umgebungen für Games und Visualisierungen. Wir erschaffen atmosphärische Welten, die Ihre Zuschauer oder Spieler begeistern werden.",
    slides: [
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled-1.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/icon1.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/icon2.png?w=1024",
    ],
  },
  "scene-lighting": {
    text: "Atmosphärische Beleuchtung zur Steigerung der Immersion und visuellen Qualität. Mit professioneller Lichtgestaltung heben wir Ihre 3D-Szenen auf ein neues Level.",
    slides: [
      "https://davidcillian.com/wp-content/uploads/2023/08/icon1.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled-1.png?w=1024",
    ],
  },
  "scene-procedural": {
    text: "Einsatz prozeduraler Techniken zur effizienten Erstellung großer Umgebungen. Wir nutzen fortschrittliche Methoden, um weitläufige und detailreiche Welten zu generieren.",
    slides: [
      "https://davidcillian.com/wp-content/uploads/2023/08/icon2.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled-1.png?w=1024",
    ],
  },
  "consulting-implementation": {
    text: "Beratung bei der Implementierung von 3D-Technologien in bestehende Workflows. Wir helfen Ihnen, die richtigen Tools und Prozesse für Ihre spezifischen Anforderungen zu finden.",
    slides: [
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/icon1.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/icon2.png?w=1024",
    ],
  },
  "consulting-optimization": {
    text: "Optimierung bestehender 3D-Pipelines für bessere Performance und Qualität. Wir analysieren Ihre aktuellen Prozesse und identifizieren Verbesserungspotenziale.",
    slides: [
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled-1.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/icon1.png?w=1024",
    ],
  },
  "consulting-strategy": {
    text: "Strategische Planung für 3D-Projekte von der Konzeption bis zur Umsetzung. Wir begleiten Sie durch den gesamten Entwicklungsprozess und stellen sicher, dass Ihre Ziele erreicht werden.",
    slides: [
      "https://davidcillian.com/wp-content/uploads/2023/08/icon2.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled-1.png?w=1024",
    ],
  },
  "training-basics": {
    text: "Grundlagen der 3D-Modellierung und -Animation für Einsteiger. Unsere Kurse vermitteln das nötige Wissen, um erfolgreich in die Welt der 3D-Gestaltung einzusteigen.",
    slides: [
      "https://davidcillian.com/wp-content/uploads/2023/08/icon1.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled-1.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/icon2.png?w=1024",
    ],
  },
  "training-advanced": {
    text: "Fortgeschrittene Techniken in Blender und Unreal Engine für Profis. Vertiefen Sie Ihre Kenntnisse und lernen Sie fortgeschrittene Methoden von erfahrenen Experten.",
    slides: [
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/icon1.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled-1.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/icon2.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled.png?w=1024",
    ],
  },
  "training-specialized": {
    text: "Spezialisierte Workshops zu spezifischen 3D-Technologien und -Workflows. Maßgeschneiderte Schulungen für Ihre individuellen Bedürfnisse und Projekte.",
    slides: [
      "https://davidcillian.com/wp-content/uploads/2023/08/icon2.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/icon1.png?w=1024",
      "https://davidcillian.com/wp-content/uploads/2023/08/untitled-1.png?w=1024",
    ],
  },
}

const serviceData = [
  {
    id: "asset-creation",
    title: "Asset Creation",
    image: "https://davidcillian.com/wp-content/uploads/2023/08/untitled-1.png?w=1024",
    features: [
      { key: "asset-ai", label: "AI-Enhanced Workflow" },
      { key: "asset-ue", label: "Unreal Engine Integration" },
      { key: "asset-optimization", label: "Performance Optimization" },
    ],
  },
  {
    id: "scene-creation",
    title: "Scene Creation",
    image: "https://davidcillian.com/wp-content/uploads/2023/08/untitled.png?w=1024",
    features: [
      { key: "scene-environments", label: "3D Environments" },
      { key: "scene-lighting", label: "Atmospheric Lighting" },
      { key: "scene-procedural", label: "Procedural Generation" },
    ],
  },
  {
    id: "consulting",
    title: "3D Consulting",
    image: "https://davidcillian.com/wp-content/uploads/2023/08/icon2.png?w=1024",
    features: [
      { key: "consulting-implementation", label: "Implementation" },
      { key: "consulting-optimization", label: "Pipeline Optimization" },
      { key: "consulting-strategy", label: "Strategic Planning" },
    ],
  },
  {
    id: "training",
    title: "3D Training",
    image: "https://davidcillian.com/wp-content/uploads/2023/08/icon1.png?w=1024",
    features: [
      { key: "training-basics", label: "Basics & Fundamentals" },
      { key: "training-advanced", label: "Advanced Techniques" },
      { key: "training-specialized", label: "Specialized Workshops" },
    ],
  },
]

// Recent Projects Data
const recentProjects = [
  {
    id: "project-2",
    clientName: "David Cillian",
    clientLogo: "Demo", // Demo-Projekt, daher nur Text
    projectTitle: "The Old Deep",
    projectType: "Unreal Engine Demoprojekt",
    completionDate: "2025",
    teamSize: "1 Artist",
    description:
      "Ein Demoprojekt in Unreal Engine 5.6 von David Cillian. Verwendete Tools: UE5.6, Blender, Maya, Substance Painter, Underwater Blueprint von Karim Aboushousha.",
    technologies: ["Unreal Engine 5.6", "Blender", "Maya", "Substance Painter", "Underwater Blueprint", "Quixel"],
    images: [
      "/images/the-old-deep/1.png",
      "/images/the-old-deep/2.png",
      "/images/the-old-deep/3.png"
    ],
    results: [
      "Unterwasserumgebung durch Underwater Blueprint umgesetzt",
      "Vegetation mit Quixel Assets realisiert",
      "Prozedurale Shader und Lighting für Tiefsee-Atmosphäre"
    ],
  },
  {
    id: "project-4",
    clientName: "GearWorks Production",
    clientLogo: "Tool", // Kein Client, sondern Eigenentwicklung
    projectTitle: "Omninode Crane",
    projectType: "Blender Geometry Nodes Tool",
    completionDate: "2022",
    teamSize: "1 Developer",
    description:
      "Erstellt von GearWorks Production. Omninode Crane ist ein prozedurales Kran-Asset, das mit Blender Geometry Nodes entwickelt wurde. Es entstand beim Austesten der Geometry Nodes und ist als Produkt auf SuperHiveMarket erhältlich.",
    technologies: ["Blender", "Geometry Nodes"],
    images: [
      "/images/omninode-crane/1.jpg",
      "/images/omninode-crane/2.jpg"
    ],
    results: [
      "Prozedurales Kran-Asset in Blender entwickelt",
      "Verfügbar als Produkt auf SuperHiveMarket",
      "Schnelle, flexible Kran-Anpassung für jedes Szenario",
      "Effiziente Animation: Bewegungen einfach und flüssig",
      "100% prozedural – keine externen Modelle nötig",
      "Vollständig anpassbare Struktur und Bewegung"
    ],
    productLink: "https://superhivemarket.com/products/omninode-crane?search_id=41130834"
  },
  {
    id: "project-5",
    clientName: "CreArtive Vienna",
    clientLogo: "/images/creartive-vienna/logo.png",
    projectTitle: "Kaiserkrone",
    projectType: "3D-Animation & Videoproduktion",
    completionDate: "2022",
    teamSize: "2 Artists, 1 Technical Artist",
    description:
      "Für CreArtive Vienna wurde ein Video der Kaiserkrone der Kaiserlichen Schatzkammer erstellt. Zum Einsatz kamen Blender für die 3D-Visualisierung und Premiere für den Videoschnitt.",
    technologies: ["Blender", "Premiere Pro"],
    images: [
      "/images/creartive-vienna/1.png"
    ],
    results: [
      "3D-Modellierung und Animation der Kaiserkrone",
      "Videoproduktion für die Kaiserliche Schatzkammer",
      "Team: 2 Artists, 1 Technical Artist"
    ],
  },
]

// Gallery images for slideshow (9 images for 3 slides with 3 images each)
const galleryImages = [
  "https://davidcillian.com/wp-content/uploads/2023/08/untitled-1.png?w=1024",
  "https://davidcillian.com/wp-content/uploads/2023/08/untitled.png?w=1024",
  "https://davidcillian.com/wp-content/uploads/2023/08/icon2.png?w=1024",
  "/images/the-old-deep/1.png", // Erstes Bild von The Old Deep
  "/images/creartive-vienna/1.png", // Kaiserkrone Bild
  "https://davidcillian.com/wp-content/uploads/2023/08/icon1.png?w=1024",
  "https://davidcillian.com/wp-content/uploads/2023/08/untitled-1.png?w=1024",
  "https://davidcillian.com/wp-content/uploads/2023/08/untitled.png?w=1024",
  "https://davidcillian.com/wp-content/uploads/2023/08/icon2.png?w=1024",
];

export default function CillianStudio() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [headerOpacity, setHeaderOpacity] = useState(1)
  const [footerOpacity, setFooterOpacity] = useState(1)
  // Remove movement state entirely for About section
  const [gallerySlide, setGallerySlide] = useState(0)
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [projectSlide, setProjectSlide] = useState(0)
  const detailRef = useRef<HTMLDivElement>(null)
  const aboutBoxesRef = useRef<HTMLDivElement>(null)
  const galleryImagesRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  // About cards are always static
  const [isImpressumOpen, setIsImpressumOpen] = useState(false)
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false)
  // Removed contact form and popup states
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Venom effect disabled entirely
  const isVenomActive = false
  const isVenomIntense = false

  // No movement calculations required

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Header fade effect - fade out when scrolling down
      const headerFadeStart = 100
      const headerFadeEnd = 300
      let newHeaderOpacity = 1

      if (scrollY > headerFadeStart) {
        const fadeProgress = Math.min((scrollY - headerFadeStart) / (headerFadeEnd - headerFadeStart), 1)
        newHeaderOpacity = 1 - fadeProgress
      }

      // Footer fade effect - fade out when scrolling up from bottom
      const footerFadeStart = documentHeight - windowHeight - 200
      const footerFadeEnd = documentHeight - windowHeight - 400
      let newFooterOpacity = 1

      if (scrollY < footerFadeStart) {
        const fadeProgress = Math.min((footerFadeStart - scrollY) / (footerFadeStart - footerFadeEnd), 1)
        newFooterOpacity = 1 - fadeProgress
      }

      setHeaderOpacity(newHeaderOpacity)
      setFooterOpacity(newFooterOpacity)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleFeatureClick = (feature: string) => {
    setCurrentSlide(0) // Reset slide index when changing features
    setActiveFeature(feature)
    setIsDetailOpen(true)

    // Scroll to detail container after a short delay to ensure it's visible
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }, 100)
  }

  const handleCloseDetail = () => {
    setIsDetailOpen(false)
  }

  const handlePrevSlide = () => {
    if (!activeFeature) return
    const slides = featureData[activeFeature as keyof typeof featureData].slides
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    if (!activeFeature) return
    const slides = featureData[activeFeature as keyof typeof featureData].slides
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  // Gallery slideshow navigation
  const handleGalleryPrev = () => {
    // Mobile: Einzelne Bilder, Desktop: 3er-Gruppen
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      setGallerySlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
    } else {
      setGallerySlide((prev) => (prev === 0 ? Math.floor(galleryImages.length / 3) - 1 : prev - 1))
    }
  }

  const handleGalleryNext = () => {
    // Mobile: Einzelne Bilder, Desktop: 3er-Gruppen
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      setGallerySlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
    } else {
      setGallerySlide((prev) => (prev === Math.floor(galleryImages.length / 3) - 1 ? 0 : prev + 1))
    }
  }

  // Project showcase functions
  const handleProjectClick = (projectId: string) => {
    setProjectSlide(0)
    setActiveProject(activeProject === projectId ? null : projectId)
  }

  const handleProjectPrevSlide = () => {
    if (!activeProject) return
    const project = recentProjects.find((p) => p.id === activeProject)
    if (!project) return
    setProjectSlide((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleProjectNextSlide = () => {
    if (!activeProject) return
    const project = recentProjects.find((p) => p.id === activeProject)
    if (!project) return
    setProjectSlide((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  // Helper function to dispatch navigation event
  const dispatchNavigationEvent = (targetSection: string) => {
    const event = new CustomEvent("navigationStart", {
      detail: { targetSection },
    })
    window.dispatchEvent(event)
  }

  // Verbesserte Scroll-Funktionen für präzisere Sprungziele
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatchNavigationEvent("about")
    if (aboutBoxesRef.current) {
      // Scroll zu den About-Boxen, nicht zum Sektions-Anfang
      const yOffset = -150 // Erhöht von -100 auf -150 für höhere Position
      const y = aboutBoxesRef.current.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatchNavigationEvent("projects")
    if (projectsRef.current) {
      const yOffset = -100
      const y = projectsRef.current.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const scrollToGallery = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatchNavigationEvent("gallery")
    if (galleryImagesRef.current) {
      // Scroll direkt zu den Galerie-Bildern
      const yOffset = -50 // Kleinerer Offset für die Galerie
      const y = galleryImagesRef.current.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatchNavigationEvent("contact")
    if (contactRef.current) {
      const yOffset = -50
      const y = contactRef.current.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({
        top: y,
        behavior: "smooth",
      })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-[#1d1d1d] text-[#f2f2f2] font-['Montserrat',sans-serif]">
      {/* Header */}
      <header
        className="py-5 mobile-header transition-opacity duration-300 ease-out"
        style={{ opacity: headerOpacity }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex justify-between items-center border-b border-[#444] pb-5">
            <div className="flex-1 h-px bg-[#444]"></div>
            <nav className="mx-10 flex gap-8">
              <a
                href="#about"
                className="text-sm uppercase tracking-wider relative hover:after:w-full after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-px after:bg-[#bbb] after:transition-all after:duration-300 scroll-smooth"
                onClick={scrollToAbout}
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-sm uppercase tracking-wider relative hover:after:w-full after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-px after:bg-[#bbb] after:transition-all after:duration-300 scroll-smooth"
                onClick={scrollToContact}
              >
                Contact
              </a>
            </nav>
            <div
              className="w-[140px] mobile-logo transition-transform duration-300 hover:scale-110 cursor-pointer"
              onClick={() => window.location.reload()}
            >
              <Image
                src="https://davidcillian.com/wp-content/uploads/2023/08/254-1.png"
                alt="Cillian Studio Logo"
                width={140}
                height={140}
                className="w-full block"
              />
            </div>
            <nav className="mx-10 flex gap-8">
              <a
                href="#projects"
                className="text-sm uppercase tracking-wider relative hover:after:w-full after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-px after:bg-[#bbb] after:transition-all after:duration-300 scroll-smooth"
                onClick={scrollToProjects}
              >
                Projects
              </a>
              <a
                href="#gallery"
                className="text-sm uppercase tracking-wider relative hover:after:w-full after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-px after:bg-[#bbb] after:transition-all after:duration-300 scroll-smooth"
                onClick={scrollToGallery}
              >
                Gallery
              </a>
            </nav>
            <div className="flex-1 h-px bg-[#444]"></div>
          </div>
          <div className="text-center mt-5">
            <h1 className="text-5xl mobile-title font-normal tracking-[0.5rem] mb-2">CILLIAN STUDIO</h1>
            <p className="text-lg mobile-subtitle tracking-[0.2rem] text-[#aaa]">- CG is our Passion -</p>
          </div>
        </div>
      </header>
      {/* Mobile Navigation - nur auf Mobile sichtbar */}
      <div className="mobile-nav hidden">
        <a href="#about" onClick={scrollToAbout}>
          About
        </a>
        <a href="#projects" onClick={scrollToProjects}>
          Projects
        </a>
        <a href="#gallery" onClick={scrollToGallery}>
          Gallery
        </a>
        <a href="#contact" onClick={scrollToContact}>
          Contact
        </a>
      </div>

      {/* Hero Animation Section - Full Width */}
      <section className="py-16 mobile-hero w-full">
        <div className="w-full h-64 relative overflow-hidden">
          <HeroAnimation />
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-5">
        {/* About Us Section - Mobile optimiert */}
        <section id="about" className="py-24 mobile-about text-center">
          <div className="flex justify-center">
            <h2 className="text-center text-[#f2f2f2] font-light tracking-[0.1rem] mb-16 text-4xl mobile-section-heading section-heading-underline">
              About Us
            </h2>
          </div>

          <div
            ref={aboutBoxesRef}
            className="relative flex flex-wrap gap-15 mobile-about-boxes tablet-about-boxes justify-center pt-5"
            style={{ minHeight: "500px" }}
          >

            {/* Daniel Abada - Links - Mobile: keine Animation */}
            {isMobile ? (
              <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] rounded-lg p-8 relative z-10 border border-white/10`}>
                <div className="flex flex-col items-center text-center mobile-about-content">
                  <div className="w-[180px] h-[180px] mobile-about-avatar bg-[#aaa] rounded-full flex-shrink-0 mb-4"></div>
                  <div className="text-[#aaa] text-base mobile-about-text">
                    <h3 className="text-xl mobile-about-name mb-3 text-[#f2f2f2]">Daniel Abada</h3>
                    <div className="text-sm text-purple-400 mb-2 uppercase tracking-wider">Marketing Specialist</div>
                    <p className="leading-6">
                      Marketing-Spezialist (Bachelor in Gaming Business) mit Expertise in Gamification und strategischer
                      Markenführung.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] border border-white/10 rounded-lg p-8 relative z-10`}>
                <div className="flex flex-col items-center text-center mobile-about-content">
                  <div className="w-[180px] h-[180px] mobile-about-avatar bg-[#aaa] rounded-full flex-shrink-0 mb-4"></div>
                  <div className="text-[#aaa] text-base mobile-about-text">
                    <h3 className="text-xl mobile-about-name mb-3 text-[#f2f2f2]">Daniel Abada</h3>
                    <div className="text-sm text-purple-400 mb-2 uppercase tracking-wider">Marketing Specialist</div>
                    <p className="leading-6">
                      Marketing-Spezialist (Bachelor in Gaming Business) mit Expertise in Gamification und strategischer
                      Markenführung.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* David Cillian - Mitte (statisch) */}
            {isMobile ? (
              <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] rounded-lg p-8 relative z-10 border border-white/10`}>
                <div className="flex flex-col items-center text-center mobile-about-content">
                  <div className="w-[180px] h-[180px] mobile-about-avatar bg-[#aaa] rounded-full flex-shrink-0 mb-4"></div>
                  <div className="text-[#aaa] text-base mobile-about-text">
                    <h3 className="text-xl mobile-about-name mb-3 text-[#f2f2f2]">David Cillian</h3>
                    <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider">3D Artist</div>
                    <p className="leading-6">
                      3D-Künstler aus Österreich mit Schwerpunkt auf Unreal Engine und Blender. Leidenschaftlicher
                      Mentor für angehende CG-Talente.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] border border-white/10 rounded-lg p-8 relative z-10`}>
                <div className="flex flex-col items-center text-center mobile-about-content">
                  <div className="w-[180px] h-[180px] mobile-about-avatar bg-[#aaa] rounded-full flex-shrink-0 mb-4"></div>
                  <div className="text-[#aaa] text-base mobile-about-text">
                    <h3 className="text-xl mobile-about-name mb-3 text-[#f2f2f2]">David Cillian</h3>
                    <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider">3D Artist</div>
                    <p className="leading-6">
                      3D-Künstler aus Österreich mit Schwerpunkt auf Unreal Engine und Blender. Leidenschaftlicher
                      Mentor für angehende CG-Talente.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Gearworks - Rechts */}
            {isMobile ? (
              <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] rounded-lg p-8 relative z-10 border border-white/10`}>
                <div className="flex flex-col items-center text-center mobile-about-content">
                  <div className="w-[180px] h-[180px] mobile-about-avatar bg-[#aaa] rounded-full flex-shrink-0 mb-4"></div>
                  <div className="text-[#aaa] text-base mobile-about-text">
                    <h3 className="text-xl mobile-about-name mb-3 text-[#f2f2f2]">GearWorks Production</h3>
                    <div className="text-sm text-green-400 mb-2 uppercase tracking-wider">Technical Specialist</div>
                    <p className="leading-6">
                      GearWorks Production - Spezialist für Generatoren, Development und Coding mit umfangreicher
                      Engine-Erfahrung. Technisches Rückgrat für komplexe 3D-Projekte.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] border border-white/10 rounded-lg p-8 relative z-10`}>
                <div className="flex flex-col items-center text-center mobile-about-content">
                  <div className="w-[180px] h-[180px] mobile-about-avatar bg-[#aaa] rounded-full flex-shrink-0 mb-4"></div>
                  <div className="text-[#aaa] text-base mobile-about-text">
                    <h3 className="text-xl mobile-about-name mb-3 text-[#f2f2f2]">GearWorks Production</h3>
                    <div className="text-sm text-green-400 mb-2 uppercase tracking-wider">Technical Specialist</div>
                    <p className="leading-6">
                      GearWorks Production - Spezialist für Generatoren, Development und Coding mit umfangreicher
                      Engine-Erfahrung. Technisches Rückgrat für komplexe 3D-Projekte.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 mobile-services text-center">
          <div className="flex justify-center">
            <h2 className="text-center text-[#f2f2f2] font-light tracking-[0.1rem] mb-16 text-4xl mobile-section-heading section-heading-underline">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mobile-services-grid tablet-services-grid gap-10">
            {serviceData.map((service, index) => (
              <UnfoldAnimation
                key={service.id}
                index={index}
                sectionId="services"
                className={`service-box mobile-service-box bg-[#1d1d1d] border border-white/10 rounded-lg transition-all duration-700 overflow-hidden`}
              >
                {/* Gesamte Box als ein Kastl - Bild oben */}
                <div className="p-8 pb-4">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={180}
                    height={180}
                    className="w-full max-w-[180px] mobile-service-image mx-auto rounded service-image"
                  />
                </div>

                {/* Unfoldable content - alles in einem Kastl */}
                <div className="unfold-content">
                  <div className="px-8 pb-4 unfold-title">
                    <h3 className="mb-4 text-xl mobile-service-title text-center">{service.title}</h3>
                  </div>
                  <div className="px-8 pb-8 space-y-3 unfold-buttons">
                    {/* Service Button Komponente - Ersetze die bestehenden Buttons */}
                    {service.features.map((feature) => (
                      <button
                        key={feature.key}
                        onClick={() => handleFeatureClick(feature.key)}
                        className={`service-button ${activeFeature === feature.key ? "active" : ""}`}
                      >
                        {activeFeature === feature.key && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-full bg-blue-400/30 animate-pulse rounded-full blur-xl"></div>
                          </div>
                        )}
                        <span className="relative z-10">{feature.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </UnfoldAnimation>
            ))}
          </div>

          {/* Detail Container */}
          <div
            ref={detailRef}
            className={`overflow-hidden transition-all duration-500 ease-in-out mt-10 ${
              isDetailOpen ? "max-h-[800px]" : "max-h-0"
            }`}
          >
            {activeFeature && featureData[activeFeature as keyof typeof featureData] && (
              <div className="flex flex-wrap gap-5 mobile-detail items-start relative">
                {/* Close button */}
                <button
                  onClick={handleCloseDetail}
                  className="absolute top-2 right-2 p-2 mobile-touch-target bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
                  aria-label="Close details"
                >
                  <X size={20} />
                </button>

                {/* Text description */}
                <div className="flex-[2] min-w-[300px] mobile-detail-text text-[#aaa] p-8 bg-white/[0.03] rounded-lg text-base">
                  {featureData[activeFeature as keyof typeof featureData].text}
                </div>

                {/* Slideshow */}
                <div className="flex-[3] min-w-[400px] mobile-detail-slideshow relative">
                  <div className="relative h-[300px] bg-white/[0.03] rounded-lg overflow-hidden">
                    {/* Current slide */}
                    {featureData[activeFeature as keyof typeof featureData].slides.map((slide, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={slide || "/placeholder.svg"}
                          alt={`Slide ${index + 1}`}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    ))}

                    {/* Navigation arrows */}
                    <button
                      onClick={handlePrevSlide}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 mobile-arrow mobile-touch-target bg-black/30 hover:bg-black/50 rounded-full transition-colors"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 mobile-arrow mobile-touch-target bg-black/30 hover:bg-black/50 rounded-full transition-colors"
                      aria-label="Next slide"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Slide indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {featureData[activeFeature as keyof typeof featureData].slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 mobile-indicator rounded-full transition-all ${
                            index === currentSlide ? "bg-white w-4" : "bg-white/50"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Recent Projects Section */}
        <section id="projects" className="py-24 mobile-projects text-center">
          <div className="flex justify-center">
            <h2 className="text-center text-[#f2f2f2] font-light tracking-[0.1rem] mb-16 text-4xl mobile-section-heading section-heading-underline">
              Recent Projects
            </h2>
          </div>

          <div ref={projectsRef} className="space-y-12">
            {recentProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-[#1d1d1d] border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                {/* Project Header */}
                <div className="p-8 mobile-project border-b border-white/10">
                  <div className="flex flex-col lg:flex-row mobile-project-header items-start lg:items-center gap-6">
                    {/* Client Logo */}
                    {project.clientLogo && project.clientLogo.startsWith("/images/") ? (
                      <div className="bg-white rounded-lg p-4 w-[120px] h-[120px] mobile-project-logo flex items-center justify-center border border-white/10">
                        <Image src={project.clientLogo} alt={project.clientName + ' Logo'} width={96} height={96} className="object-contain w-[96px] h-[96px]" />
                      </div>
                    ) : (
                      <div className="bg-white/5 rounded-lg p-4 w-[120px] h-[120px] mobile-project-logo flex items-center justify-center border border-white/10">
                        {project.id === "project-2" ? (
                          <div className="text-center text-[#aaa] text-lg font-bold">Demo</div>
                        ) : project.id === "project-4" ? (
                          <div className="text-center text-[#aaa] text-lg font-bold">Tool</div>
                        ) : (
                          <div className="text-center text-[#aaa]">
                            <div className="text-sm mb-1">Client Logo</div>
                            <div className="text-xs">{project.clientName}</div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Project Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl mobile-project-title font-light text-[#f2f2f2] mb-2">
                        {project.projectTitle}
                      </h3>
                      <p className="text-[#aaa] mobile-project-description mb-3">{project.description}</p>

                      {/* Project Meta */}
                      <div className="flex flex-wrap gap-4 mobile-project-meta text-sm text-[#aaa]">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{project.completionDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} />
                          <span>{project.teamSize}</span>
                        </div>
                        <div className="bg-white/10 px-3 py-1 rounded-full">{project.projectType}</div>
                      </div>
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() => handleProjectClick(project.id)}
                      className={`w-40 mobile-project-button mobile-touch-target h-12 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden ${
                        activeProject === project.id
                          ? "bg-blue-700 hover:bg-blue-800 border border-blue-600 text-white"
                          : "bg-blue-600 hover:bg-blue-700 border border-blue-500 text-white"
                      }`}
                    >
                      {activeProject === project.id && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-full bg-blue-400/30 animate-pulse rounded-full blur-xl"></div>
                        </div>
                      )}
                      <span className="relative z-10">
                        {activeProject === project.id ? "Hide Details" : "View Details"}
                      </span>
                      <ExternalLink size={16} className="relative z-10" />
                    </button>
                  </div>
                </div>

                {/* Expandable Project Details */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeProject === project.id ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <div className="p-8 mobile-project-details">
                    <div className="grid grid-cols-1 lg:grid-cols-2 mobile-project-grid gap-8">
                      {/* Project Showcase */}
                      <div>
                        <h4 className="text-xl text-[#f2f2f2] mb-4">Project Showcase</h4>
                        <div className="relative h-[300px] mobile-project-showcase bg-white/[0.03] rounded-lg overflow-hidden">
                          {/* Project Images */}
                          {project.images && project.images.length > 0 ? (
                            project.images.map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className={`absolute inset-0 transition-opacity duration-500 ${imgIndex === projectSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                              >
                                <Image
                                  src={image}
                                  alt={`${project.projectTitle} - Bild ${imgIndex + 1}`}
                                  fill
                                  className="object-cover"
                                  onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
                                />
                              </div>
                            ))
                          ) : (
                            <div className="flex items-center justify-center h-full text-[#aaa]">Keine Bilder vorhanden</div>
                          )}
                          {/* Navigation arrows */}
                          <button
                            onClick={handleProjectPrevSlide}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 mobile-arrow mobile-touch-target bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                            aria-label="Previous project image"
                          >
                            <ChevronLeft size={24} className="text-white" />
                          </button>
                          <button
                            onClick={handleProjectNextSlide}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 mobile-arrow mobile-touch-target bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                            aria-label="Next project image"
                          >
                            <ChevronRight size={24} className="text-white" />
                          </button>
                          {/* Slide indicators */}
                          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            {project.images && project.images.map((_, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() => setProjectSlide(imgIndex)}
                                className={`w-2 h-2 mobile-indicator rounded-full transition-all ${imgIndex === projectSlide ? "bg-white w-4" : "bg-white/50"}`}
                                aria-label={`Go to project image ${imgIndex + 1}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="space-y-6">
                        {/* Technologies Used */}
                        <div>
                          <h4 className="text-xl text-[#f2f2f2] mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-sm text-[#f2f2f2]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Project Results */}
                        <div>
                          <h4 className="text-xl text-[#f2f2f2] mb-3">Key Results</h4>
                          <ul className="space-y-2">
                            {project.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-start gap-3 text-[#aaa]">
                                <div className="w-2 h-2 bg-[#bbb] rounded-full mt-2 flex-shrink-0"></div>
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                          {project.productLink && (
                            <a
                              href={project.productLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                            >
                              Zum Produkt
                            </a>
                          )}
                        </div>

                        {/* Client Testimonial Placeholder */}
                        {project.id !== "project-2" && project.id !== "project-4" && project.id !== "project-5" && (
                          <div className="bg-white/[0.03] rounded-lg p-6 border border-white/10">
                            <h4 className="text-lg text-[#f2f2f2] mb-3">Client Feedback</h4>
                            <p className="text-[#aaa] italic">
                              "Exceptional work quality and professional delivery. The team exceeded our expectations in every aspect of the project."
                            </p>
                            <p className="text-sm text-[#bbb] mt-2">- {project.clientName}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 mobile-gallery text-center">
          <div className="flex justify-center">
            <h2 className="text-center text-[#f2f2f2] font-light tracking-[0.1rem] mb-16 text-4xl mobile-section-heading section-heading-underline">
              Gallery
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Slideshow Container */}
            <div
              ref={galleryImagesRef}
              className="grid grid-cols-3 mobile-gallery-grid tablet-gallery-grid gap-5 my-15"
            >
              {/* Mobile: Ein Bild */}
              <div className="md:hidden overflow-hidden border border-[#444] rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                <div className="relative w-full h-48 mobile-gallery-image">
                  <Image
                    src={galleryImages[gallerySlide] || "/placeholder.svg"}
                    alt={`Gallery image ${gallerySlide + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Desktop: Drei Bilder */}
              <div className="hidden md:block overflow-hidden border border-[#444] rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                <div className="relative w-full h-64">
                  <Image
                    src={galleryImages[gallerySlide * 3] || "/placeholder.svg"}
                    alt={`Gallery image ${gallerySlide * 3 + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="hidden md:block overflow-hidden border border-[#444] rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                <div className="relative w-full h-64">
                  <Image
                    src={galleryImages[gallerySlide * 3 + 1] || "/placeholder.svg"}
                    alt={`Gallery image ${gallerySlide * 3 + 2}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="hidden md:block overflow-hidden border border-[#444] rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                <div className="relative w-full h-64">
                  <Image
                    src={galleryImages[gallerySlide * 3 + 2] || "/placeholder.svg"}
                    alt={`Gallery image ${gallerySlide * 3 + 3}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handleGalleryPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 mobile-arrow mobile-touch-target bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
              aria-label="Previous gallery images"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={handleGalleryNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 mobile-arrow mobile-touch-target bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
              aria-label="Next gallery images"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {/* Mobile: Zeige alle Bilder einzeln */}
              <div className="md:hidden flex gap-1">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setGallerySlide(index)}
                    className={`w-2 h-2 mobile-indicator rounded-full transition-all ${
                      index === gallerySlide ? "bg-white w-4" : "bg-white/50"
                    }`}
                    aria-label={`Go to gallery image ${index + 1}`}
                  />
                ))}
              </div>
              {/* Desktop: Zeige 3er-Gruppen */}
              <div className="hidden md:flex gap-2">
                {Array.from({ length: Math.floor(galleryImages.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setGallerySlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === gallerySlide ? "bg-white w-6" : "bg-white/50"
                    }`}
                    aria-label={`Go to gallery slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Call-to-Action */}
        <section id="contact" className="py-16 mobile-contact text-center">
          <div className="flex justify-center">
            <h2 className="text-3xl mobile-contact-title font-light tracking-[0.1rem] mb-6 text-[#f2f2f2] section-heading-underline">
              Ready to Start Your Project?
            </h2>
          </div>
          <div ref={contactRef} className="max-w-4xl mx-auto text-center">
            <div className="bg-[#1d1d1d] border border-white/10 rounded-lg p-12 mobile-contact-container">
              <p className="text-lg mobile-contact-text text-[#aaa] mb-8 leading-relaxed">
                Lassen Sie uns gemeinsam Ihre 3D-Vision zum Leben erwecken. Kontaktieren Sie uns für eine unverbindliche
                Beratung.
              </p>

              <div className="flex justify-center items-center">
                <a
                  href="mailto:3d@davidcillian.com"
                  className="inline-flex items-center gap-3 mobile-contact-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Mail size={20} />
                  <span className="font-medium">3d@davidcillian.com</span>
                </a>
              </div>

              <p className="text-sm text-[#aaa] mt-6">Wir antworten in der Regel innerhalb von 24 Stunden</p>
            </div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-light tracking-[0.1rem] text-[#f2f2f2]">PROJEKT ANFRAGE</h3>
                  <button
                    onClick={() => setIsContactFormOpen(false)}
                    className="text-[#aaa] hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.target as HTMLFormElement)
                    const captchaAnswer = formData.get("captcha")

                    // Prüfe Sicherheitsfrage
                    if (captchaAnswer !== "10") {
                      alert("Sicherheitsfrage falsch beantwortet. Bitte versuchen Sie es erneut.")
                      return
                    }

                    // Sammle Formulardaten
                    const name = formData.get("name")
                    const email = formData.get("email")
                    const company = formData.get("company") || "Nicht angegeben"
                    const budget = formData.get("budget") || "Nicht angegeben"
                    const description = formData.get("description")
                    const timeline = formData.get("timeline") || "Nicht angegeben"

                    // Sammle Projekttypen
                    const projectTypes = Array.from(formData.getAll("projectType")).join(", ") || "Nicht angegeben"

                    // Erstelle E-Mail-Text
                    const emailBody = `Neue Projektanfrage von der Website:

Name: ${name}
E-Mail: ${email}
Firma: ${company}
Budget: ${budget}
Projekttyp(en): ${projectTypes}
Timeline: ${timeline}

Projektbeschreibung:
${description}

---
Diese Anfrage wurde über das Kontaktformular auf davidcillian.com gesendet.`

                    // Öffne E-Mail-Client mit vorgefüllten Daten
                    const mailtoLink = `mailto:3d@davidcillian.com?subject=Neue Projektanfrage von ${name}&body=${encodeURIComponent(emailBody)}`

                    // Erstelle versteckten Link
                    const mailLink = document.createElement("a")
                    mailLink.href = mailtoLink
                    mailLink.style.display = "none"
                    document.body.appendChild(mailLink)
                    mailLink.click()
                    document.body.removeChild(mailLink)

                    // Erfolgs-Nachricht
                    alert(
                      "Ihr E-Mail-Programm sollte sich mit der vorgefüllten Anfrage öffnen. Falls nicht, senden Sie bitte eine E-Mail an: 3d@davidcillian.com",
                    )

                    // Formular zurücksetzen
                    ;(e.target as HTMLFormElement).reset()
                    setIsContactFormOpen(false)
                  }}
                >
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-300">
                      <strong>Hinweis:</strong> Dieses Formular öffnet Ihr E-Mail-Programm mit einer vorgefüllten
                      Nachricht. Für eine direkte Übermittlung kontaktieren Sie uns bitte direkt per E-Mail.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#f2f2f2] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="form-input"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>

                    {/* E-Mail */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#f2f2f2] mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="form-input"
                        placeholder="ihre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Firma */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#f2f2f2] mb-2">
                        Firma
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="form-input"
                        placeholder="Ihr Unternehmen (optional)"
                      />
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-[#f2f2f2] mb-2">
                        Budget
                      </label>
                      <select id="budget" name="budget" className="form-select" defaultValue="">
                        <option value="">Budget wählen</option>
                        <option value="under-5k">Unter €5.000</option>
                        <option value="5k-15k">€5.000 - €15.000</option>
                        <option value="15k-50k">€15.000 - €50.000</option>
                        <option value="over-50k">Über €50.000</option>
                        <option value="discuss">Individuell besprechen</option>
                      </select>
                    </div>
                  </div>

                  {/* Projekttyp */}
                  <div>
                    <label className="block text-sm font-medium text-[#f2f2f2] mb-3">Projekttyp *</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["Asset Creation", "Scene Creation", "3D Consulting", "3D Training"].map((type) => (
                        <label key={type} className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" name="projectType" value={type} className="form-checkbox" />
                          <span className="text-sm text-[#aaa]">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Projektbeschreibung */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-[#f2f2f2] mb-2">
                      Projektbeschreibung *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={5}
                      className="form-textarea"
                      placeholder="Beschreiben Sie Ihr Projekt detailliert. Je mehr Informationen Sie uns geben, desto besser können wir Ihnen helfen..."
                    />
                  </div>

                  {/* Timeline */}
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-[#f2f2f2] mb-2">
                      Gewünschte Timeline
                    </label>
                    <select id="timeline" name="timeline" className="form-select" defaultValue="">
                      <option value="">Timeline wählen</option>
                      <option value="asap">So schnell wie möglich</option>
                      <option value="1-month">Innerhalb 1 Monat</option>
                      <option value="2-3-months">2-3 Monate</option>
                      <option value="3-6-months">3-6 Monate</option>
                      <option value="flexible">Flexibel</option>
                    </select>
                  </div>

                  {/* Bot-Schutz: Honeypot */}
                  <div style={{ display: "none" }}>
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Bot-Schutz: Einfache Mathe-Aufgabe */}
                  <div>
                    <label htmlFor="captcha" className="block text-sm font-medium text-[#f2f2f2] mb-2">
                      Sicherheitsfrage: Was ist 7 + 3? *
                    </label>
                    <input
                      type="number"
                      id="captcha"
                      name="captcha"
                      required
                      className="form-input"
                      placeholder="Ihre Antwort"
                      style={{ maxWidth: "5rem" }}
                    />
                  </div>

                  {/* Datenschutz */}
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="privacy" name="privacy" required className="form-checkbox mt-1" />
                    <label htmlFor="privacy" className="text-sm text-[#aaa] leading-relaxed">
                      Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                      <button
                        type="button"
                        onClick={() => {
                          setIsDatenschutzOpen(true)
                          setIsContactFormOpen(false)
                        }}
                        className="text-blue-400 hover:text-blue-300 underline"
                      >
                        Datenschutzerklärung
                      </button>{" "}
                      zu. *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full bg-blue-400/30 animate-pulse rounded-full blur-xl"></div>
                      </div>
                      <Send size={20} className="relative z-10" />
                      <span className="relative z-10">Anfrage senden</span>
                    </button>
                  </div>

                  <p className="text-xs text-[#aaa] text-center mt-4">
                    Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.
                  </p>
                </form>
              </div>
            </div>
            {/* Mail Popup */}
            {isMailPopupOpen && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-[#1d1d1d] border border-white/10 rounded-lg p-8 max-w-md w-full">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-light tracking-[0.1rem] text-[#f2f2f2]">E-MAIL SENDEN</h3>
                    <button
                      onClick={() => setIsMailPopupOpen(false)}
                      className="text-[#aaa] hover:text-white transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault()
                      const formData = new FormData(e.target as HTMLFormElement)
                      const answer = formData.get("mailCaptcha")

                      if (answer === "10") {
                        // Erstelle einen versteckten Link und klicke ihn
                        const mailLink = document.createElement("a")
                        mailLink.href =
                          "mailto:3d@davidcillian.com?subject=Anfrage%20von%20Website&body=Hallo%20Cillian%20Studio%20Team,%0D%0A%0D%0AIch%20interessiere%20mich%20für%20Ihre%20Dienstleistungen.%0D%0A%0D%0AMit%20freundlichen%20Grüßen"
                        mailLink.style.display = "none"
                        document.body.appendChild(mailLink)
                        mailLink.click()
                        document.body.removeChild(mailLink)

                        // Popup schließen
                        setIsMailPopupOpen(false)

                        // Erfolgs-Nachricht anzeigen
                        setTimeout(() => {
                          alert(
                            "E-Mail-Programm sollte sich geöffnet haben. Falls nicht, kopieren Sie bitte diese E-Mail-Adresse: 3d@davidcillian.com",
                          )
                        }, 500)
                      } else {
                        alert("Falsche Antwort. Bitte versuchen Sie es erneut.")
                      }
                    }}
                  >
                    <div className="text-center mb-4">
                      <p className="text-[#aaa] text-sm mb-2">
                        Um Spam zu vermeiden, beantworten Sie bitte diese einfache Frage:
                      </p>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <Mail size={32} className="mx-auto mb-2 text-blue-400" />
                        <p className="text-[#f2f2f2] font-medium">3d@davidcillian.com</p>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mailCaptcha" className="block text-sm font-medium text-[#f2f2f2] mb-2">
                        Sicherheitsfrage: Was ist 5 + 5? *
                      </label>
                      <input
                        type="number"
                        id="mailCaptcha"
                        name="mailCaptcha"
                        required
                        className="form-input"
                        placeholder="Antwort eingeben"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setIsMailPopupOpen(false)}
                        className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-[#f2f2f2] transition-all duration-300"
                      >
                        Abbrechen
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                      >
                        E-Mail öffnen
                      </button>
                    </div>

                    <div className="bg-white/5 rounded-lg p-3 mt-4">
                      <p className="text-xs text-[#aaa] text-center">
                        <strong>Hinweis:</strong> Falls sich Ihr E-Mail-Programm nicht automatisch öffnet, kopieren Sie
                        bitte diese Adresse: <br />
                        <span className="text-blue-400 font-mono">3d@davidcillian.com</span>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-5 mobile-footer bg-[#1d1d1d] text-[#f2f2f2] text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col gap-3">
            <p className="text-sm">
              &copy; {currentYear} Cillian Studio |{" "}
              <a href="mailto:3d@davidcillian.com" className="text-blue-500">
                3d@davidcillian.com
              </a>
              |{" "}
              <a href="https://instagram.com/david_cillian" className="text-blue-500">
                @david_cillian
              </a>
              |{" "}
              <a
                href="https://youtube.com/@gearworks-softwareproducti3548?si=21Z95zixZOk97qqt"
                className="text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                @gearworks
              </a>
            </p>
            <p className="text-sm mt-2 text-[#aaa]">Pelzgasse 3, 1150 Wien</p>

            {/* Legal Links */}
            <div className="flex justify-center gap-4 text-xs text-[#aaa] mt-2">
              <button
                onClick={() => {
                  setIsImpressumOpen(!isImpressumOpen)
                  setIsDatenschutzOpen(false)
                }}
                className="hover:text-white transition-colors"
              >
                Impressum
              </button>
              <span>|</span>
              <button
                onClick={() => {
                  setIsDatenschutzOpen(!isDatenschutzOpen)
                  setIsImpressumOpen(false)
                }}
                className="hover:text-white transition-colors"
              >
                Datenschutz
              </button>
            </div>
          </div>

          {/* Impressum Aufklappbereich */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out mt-8 ${
              isImpressumOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#1d1d1d] border border-white/10 rounded-lg p-8 text-left">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-light tracking-[0.1rem] text-[#f2f2f2]">IMPRESSUM</h2>
                <button
                  onClick={() => setIsImpressumOpen(false)}
                  className="text-[#aaa] hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-8">
                {/* Angaben gemäß TMG */}
                <section>
                  <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">Angaben gemäß § 5 TMG</h3>
                  <div className="text-[#aaa] leading-relaxed">
                    <p className="text-[#f2f2f2] mb-2">David Cillian</p>
                    <p className="mb-2">Pelzgasse 3, 1150 Wien</p>
                  </div>
                </section>

                {/* Kontakt */}
                <section>
                  <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">Kontakt</h3>
                  <div className="text-[#aaa] leading-relaxed space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-[#f2f2f2] min-w-[80px]">E-Mail:</span>
                      <a
                        href="mailto:3d@davidcillian.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        3d@davidcillian.com
                      </a>
                    </div>
                  </div>
                </section>

                {/* Haftungsausschluss */}
                <section>
                  <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">Haftungsausschluss</h3>
                  <div className="text-[#aaa] leading-relaxed space-y-3">
                    <p>
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                      Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                    </p>
                    <p>
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                      allgemeinen Gesetzen verantwortlich.
                    </p>
                  </div>
                </section>

                {/* Urheberrecht */}
                <section>
                  <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">Urheberrecht</h3>
                  <div className="text-[#aaa] leading-relaxed">
                    <p>
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                      österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                      Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                      jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Datenschutz Aufklappbereich */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out mt-8 ${
              isDatenschutzOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#1d1d1d] border border-white/10 rounded-lg p-8 text-left">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-light tracking-[0.1rem] text-[#f2f2f2]">DATENSCHUTZERKLÄRUNG</h2>
                <button
                  onClick={() => setIsDatenschutzOpen(false)}
                  className="text-[#aaa] hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-8">
                {/* Verantwortlicher */}
                <section>
                  <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">1. Verantwortlicher</h3>
                  <div className="text-[#aaa] leading-relaxed">
                    <p className="mb-3">Verantwortlicher im Sinne der Datenschutzgesetze ist:</p>
                    <p className="text-[#f2f2f2] mb-2">David Cillian</p>
                    <div className="space-y-1">
                      <p>
                        <strong>E-Mail:</strong> 3d@davidcillian.com
                      </p>
                    </div>
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
                      Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches.
                    </p>
                    <p>
                      Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten
                      korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an.
                    </p>
                  </div>
                </section>

                {/* Kontakt für Datenschutzfragen */}
                <section>
                  <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">4. Kontakt für Datenschutzfragen</h3>
                  <div className="text-[#aaa] leading-relaxed">
                    <p className="mb-3">Bei Fragen zum Datenschutz können Sie sich an uns wenden:</p>
                    <div className="space-y-1">
                      <p>
                        <strong>E-Mail:</strong> 3d@davidcillian.com
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
