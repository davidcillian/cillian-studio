"use client"

// redeploy trigger v3 - HeroAnimation restored

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import "./globals.css"
import { ChevronLeft, ChevronRight, X, ExternalLink, Calendar, Users, Mail, Send, Instagram } from 'lucide-react'
// Removed moving/venom effects and heavy animations
import CookieBanner from "@/components/cookie-banner"

const featureData = {
  "asset-ai": {
    text: "Wir gestalten nicht nur atmosphärische 3D-Umgebungen für Games und Visualisierungen, sondern bieten ein umfassendes Leistungsspektrum: von der Entwicklung einzelner Assets über realistische Archviz-Projekte bis hin zu cinematischen Videos. Unser Fokus liegt darauf, eindrucksvolle visuelle Erlebnisse zu schaffen, die Emotionen wecken und nachhaltig begeistern.",
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
    text: "Wir nutzen moderne KI-Technologien, um kreative Prozesse im 3D-Bereich zu erweitern und zu beschleunigen. Durch den Einsatz von KI in Kombination mit 3D entstehen innovative Lösungen für Trailer, Werbespots und immersive Visualisierungen, die Effizienz und Qualität auf ein neues Level heben.",
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
    text: "Wir entwickeln maßgeschneiderte Lösungen zur Gamifizierung von Verkaufsprozessen. Durch spielerische Elemente wie Belohnungssysteme, Wettbewerbe und Fortschrittsanzeigen steigern wir Motivation, Kundenbindung und Verkaufszahlen. Unsere Ansätze machen Vertriebsprozesse nicht nur effizienter, sondern auch erlebbarer.",
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
    text: "Unsere Kurse bieten einen umfassenden Einstieg in Blender. Neben der 3D-Modellierung werden auch weitere zentrale Funktionen wie Material- und Texturarbeit, Beleuchtung, Rendering sowie die Integration in gängige Game Engines behandelt. So erhalten Teilnehmer eine solide Basis, um eigene 3D-Projekte erfolgreich umzusetzen.",
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
    title: "3D Creation",
    image: "https://davidcillian.com/wp-content/uploads/2023/08/untitled-1.png?w=1024",
    features: [
      { key: "asset-ai", label: "AI-Enhanced Workflow" },
      { key: "asset-ue", label: "Unreal Engine Integration" },
      { key: "asset-optimization", label: "Performance Optimization" },
    ],
  },
  {
    id: "scene-creation",
    title: "AI Creation",
    image: "https://davidcillian.com/wp-content/uploads/2023/08/untitled.png?w=1024",
    features: [
      { key: "scene-environments", label: "3D Environments" },
      { key: "scene-lighting", label: "Atmospheric Lighting" },
      { key: "scene-procedural", label: "Procedural Generation" },
    ],
  },
  {
    id: "consulting",
    title: "Gamification",
    image: "https://davidcillian.com/wp-content/uploads/2023/08/icon2.png?w=1024",
    features: [
      { key: "consulting-implementation", label: "Implementation" },
      { key: "consulting-optimization", label: "Pipeline Optimization" },
      { key: "consulting-strategy", label: "Strategic Planning" },
    ],
  },
  {
    id: "training",
    title: "Training",
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
    clientName: "David Scherngell",
    clientLogo: "Demo", // Demo-Projekt, daher nur Text
    projectTitle: "The Old Deep",
    projectType: "Unreal Engine Demoprojekt",
    completionDate: "2025",
    teamSize: "1 Artist",
    description:
      "Ein Demoprojekt in Unreal Engine 5.6 von David Scherngell. Verwendete Tools: UE5.6, Blender, Maya, Substance Painter, Underwater Blueprint von Karim Aboushousha.",
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
    artists: [
      { name: "David Scherngell", image: "/images/david-scherngell.jpeg" }
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
    productLink: "https://superhivemarket.com/products/omninode-crane?search_id=41130834",
    artists: [
      { name: "GearWorks Production", image: "/images/gearworks-icon.png?v=2" }
    ],
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
    artists: [
      { name: "David Scherngell", image: "/images/david-scherngell.jpeg" },
      { name: "Daniel Abada", image: "/images/Daniel-Abada.jpeg" },
      { name: "GearWorks Production", image: "/images/gearworks-icon.png?v=2" }
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
    console.log('Feature clicked:', feature) // Debug log
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
            <p className="text-lg mobile-subtitle tracking-[0.2rem] text-[#aaa]">- Creation is our Passion -</p>
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

      {/* Hero Video Section */}
      <section className="py-8 mobile-hero w-full">
        <div className="w-full h-[400px] relative overflow-hidden bg-gradient-to-b from-transparent via-[#1d1d1d] to-[#1d1d1d] rounded-lg">
          {/* Video Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full relative">
              {/* Placeholder für Video - Sie können hier Ihr Video einfügen */}
              <div className="w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-light text-[#f2f2f2] mb-4">Cillian Studio</h3>
                  <p className="text-[#aaa] text-lg">Professional 3D Creation & Training</p>
                  {/* Video Placeholder - Ersetzen Sie dies mit Ihrem echten Video */}
                  <div className="mt-8 w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Optional: Echter Video-Tag (auskommentiert) */}
              {/*
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
                <source src="/videos/hero-video.webm" type="video/webm" />
                Ihr Browser unterstützt das Video-Element nicht.
              </video>
              */}
            </div>
          </div>
          
          {/* Overlay für bessere Lesbarkeit */}
          <div className="absolute inset-0 bg-black/20"></div>
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
                  <div className="w-[180px] h-[180px] mobile-about-avatar rounded-full flex-shrink-0 mb-4 overflow-hidden">
                    <Image
                      src="/images/Daniel-Abada.jpeg"
                      alt="Daniel Abada - Marketing Specialist"
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
            ) : (
              <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] border border-white/10 rounded-lg p-8 relative z-10`}>
                <div className="flex flex-col items-center text-center mobile-about-content">
                  <div className="w-[180px] h-[180px] mobile-about-avatar rounded-full flex-shrink-0 mb-4 overflow-hidden">
                    <Image
                      src="/images/Daniel-Abada.jpeg"
                      alt="Daniel Abada - Marketing Specialist"
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
            )}

            {/* David Scherngell - Mitte (statisch) */}
            {isMobile ? (
              <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] rounded-lg p-8 relative z-10 border border-white/10`}>
                <div className="flex flex-col items-center text-center mobile-about-content">
                  <div className="w-[180px] h-[180px] mobile-about-avatar rounded-full flex-shrink-0 mb-4 overflow-hidden">
                    <Image
                      src="/images/david-scherngell.jpeg"
                      alt="David Scherngell - 3D Artist"
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
            ) : (
              <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] border border-white/10 rounded-lg p-8 relative z-10`}>
                <div className="flex flex-col items-center text-center mobile-about-content">
                  <div className="w-[180px] h-[180px] mobile-about-avatar rounded-full flex-shrink-0 mb-4 overflow-hidden">
                    <Image
                      src="/images/david-scherngell.jpeg"
                      alt="David Scherngell - 3D Artist"
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
            )}

            {/* Adrian Spielberger - Zwischen David und GearWorks */}
            {isMobile ? (
              <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] rounded-lg p-8 relative z-10 border border-white/10`}>
                <div className="flex flex-col items-center text-center mobile-about-content">
                  <div className="w-[180px] h-[180px] mobile-about-avatar bg-[#aaa] rounded-full flex-shrink-0 mb-4 overflow-hidden">
                    {/* Platzhalter bis Foto kommt */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      <span className="text-2xl text-white/60">AS</span>
                    </div>
                  </div>
                  <div className="text-[#aaa] text-base mobile-about-text">
                    <h3 className="text-xl mobile-about-name mb-3 text-[#f2f2f2]">Adrian Spielberger</h3>
                    <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider">3D Generalist</div>
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
            ) : (
              <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] border border-white/10 rounded-lg p-8 relative z-10`}>
                <div className="flex flex-col items-center text-center mobile-about-content">
                  <div className="w-[180px] h-[180px] mobile-about-avatar bg-[#aaa] rounded-full flex-shrink-0 mb-4 overflow-hidden">
                    {/* Platzhalter bis Foto kommt */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      <span className="text-2xl text-white/60">AS</span>
                    </div>
                  </div>
                  <div className="text-[#aaa] text-base mobile-about-text">
                    <h3 className="text-xl mobile-about-name mb-3 text-[#f2f2f2]">Adrian Spielberger</h3>
                    <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider">3D Generalist</div>
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
            )}

            {/* Gearworks - Rechts */}
            {isMobile ? (
              <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] rounded-lg p-8 relative z-10 border border-white/10`}>
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
            ) : (
              <div className={`flex-1 min-w-[280px] mobile-about-box tablet-about-box bg-[#1d1d1d] border border-white/10 rounded-lg p-8 relative z-10`}>
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
            )}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 mobile-services text-center">
          <div className="flex justify-center">
            <h2 className="text-center text-[#f2f2f2] font-light tracking-[0.1rem] mb-16 text-4xl mobile-section-heading section-heading-underline">
              Our Ingredients
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mobile-services-grid tablet-services-grid gap-10">
            {serviceData.map((service, index) => (
              <div
                key={service.id}
                className={`service-box mobile-service-box bg-[#1d1d1d] border border-white/10 rounded-lg transition-all duration-700 overflow-hidden`}
              >
                {/* Gesamte Box als ein Kastl - Bild oben */}
                <div className="p-8 pb-4">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} service illustration - Professional 3D creation and training services`}
                    width={180}
                    height={180}
                    className="w-full max-w-[180px] mobile-service-image mx-auto rounded service-image"
                  />
                </div>

                {/* Unfoldable content - alles in einem Kastl */}
                <div className="unfold-content">
                  <div className="px-8 pb-4 unfold-title">
                    <h3 className="mb-4 text-xl mobile-service-title text-center hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                  </div>
                  <div className="px-8 pb-8">
                    {/* Single Learn More Button */}
                    <button
                      onClick={() => handleFeatureClick(service.features[0].key)}
                      className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                        activeFeature === service.features[0].key 
                          ? "bg-blue-600 hover:bg-blue-700 text-white" 
                          : "bg-white/10 hover:bg-white/20 text-[#aaa] hover:text-white border border-white/20"
                      }`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detail Container */}
          <div
            ref={detailRef}
            className={`overflow-hidden transition-all duration-500 ease-in-out mt-10 ${
              isDetailOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
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

                        {/* Team Members */}
                        {project.artists && project.artists.length > 0 && (
                          <div>
                            <h4 className="text-xl text-[#f2f2f2] mb-3">Team Members</h4>
                            <div className="flex flex-wrap gap-3">
                              {project.artists.map((artist, artistIndex) => (
                                <div key={artistIndex} className="flex items-center gap-2 bg-white/[0.05] border border-white/10 rounded-full px-3 py-2">
                                  <div className="w-8 h-8 rounded-full overflow-hidden">
                                    <Image
                                      src={artist.image}
                                      alt={artist.name}
                                      width={32}
                                      height={32}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <span className="text-sm text-[#f2f2f2]">{artist.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

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
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('3d@davidcillian.com')
                    alert('E-Mail-Adresse wurde in die Zwischenablage kopiert!')
                  }}
                  className="inline-flex items-center gap-3 mobile-contact-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Mail size={20} />
                  <span className="font-medium">3d@davidcillian.com</span>
                </button>
              </div>

              <p className="text-sm text-[#aaa] mt-6">Wir antworten in der Regel innerhalb von 24 Stunden</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a0a0a] border-t border-white/10 py-12 mobile-footer">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <div className="text-[#aaa] text-sm mobile-footer-text">
              &copy; {currentYear} Cillian Studio |{" "}
              <button onClick={() => setIsImpressumOpen(!isImpressumOpen)} className="hover:text-white transition-colors">
                Impressum
              </button>{" "}
              |{" "}
              <button 
                data-privacy-button
                onClick={() => setIsDatenschutzOpen(!isDatenschutzOpen)} 
                className="hover:text-white transition-colors"
              >
                Datenschutz
              </button>{" "}
              |{" "}
              <a href="mailto:3d@davidcillian.com" className="hover:text-white transition-colors">
                Kontakt
              </a>
            </div>

            {/* Legal Links */}
            <div className="mt-6 space-y-2">
              <button
                onClick={() => {
                  setIsImpressumOpen(true)
                  setIsDatenschutzOpen(false)
                }}
                className="text-xs text-[#666] hover:text-[#aaa] transition-colors block mx-auto"
              >
                Impressum anzeigen
              </button>
              <button
                onClick={() => {
                  setIsDatenschutzOpen(true)
                  setIsImpressumOpen(false)
                }}
                className="text-xs text-[#666] hover:text-[#aaa] transition-colors block mx-auto"
              >
                Datenschutz anzeigen
              </button>
            </div>
          </div>

          {/* Impressum Aufklappbereich */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isImpressumOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#1d1d1d] border border-white/10 rounded-lg p-8 mx-5 mt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-light tracking-[0.1rem] text-[#f2f2f2]">IMPRESSUM</h3>
                <button
                  onClick={() => setIsImpressumOpen(false)}
                  className="text-[#aaa] hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6 text-sm text-[#aaa] leading-relaxed">
                {/* Angaben gemäß TMG */}
                <section>
                  <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">1. Angaben gemäß § 5 TMG</h3>
                  <div className="text-[#aaa] leading-relaxed">
                    <p className="text-[#f2f2f2] mb-2">David Scherngell</p>
                    <p>Pelzgasse 3</p>
                    <p>1150 Wien</p>
                    <p>Österreich</p>
                    <p className="mt-3">E-Mail: 3d@davidcillian.com</p>
                    <p>Website: davidcillian.com</p>
                  </div>
                </section>

                {/* Kontakt */}
                <section>
                  <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">2. Kontakt</h3>
                  <div className="text-[#aaa] leading-relaxed">
                    <p>
                      Bei Fragen zu dieser Website oder unseren Dienstleistungen können Sie uns jederzeit unter
                      3d@davidcillian.com kontaktieren.
                    </p>
                  </div>
                </section>

                {/* Haftungsausschluss */}
                <section>
                  <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">3. Haftungsausschluss</h3>
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
                  <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">4. Urheberrecht</h3>
                  <div className="text-[#aaa] leading-relaxed">
                    <p>
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                      deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
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
            data-privacy-section
            className={`overflow-hidden transition-all duration-500 ${
              isDatenschutzOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#1d1d1d] border border-white/10 rounded-lg p-8 mx-5 mt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-light tracking-[0.1rem] text-[#f2f2f2]">DATENSCHUTZERKLÄRUNG</h3>
                <button
                  onClick={() => setIsDatenschutzOpen(false)}
                  className="text-[#aaa] hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6 text-sm text-[#aaa] leading-relaxed">
                {/* Verantwortlicher */}
                <section>
                  <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">1. Verantwortlicher</h3>
                  <div className="text-[#aaa] leading-relaxed">
                    <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
                    <p className="text-[#f2f2f2] mb-2">David Scherngell</p>
                    <p>Pelzgasse 3, 1150 Wien, Österreich</p>
                    <p>E-Mail: 3d@davidcillian.com</p>
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
                      Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches.
                    </p>
                    <p>
                      Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten
                      korrekt auszuliefern und fallen bei der Nutzung des Internets zwingend an.
                    </p>
                    <p>
                      <strong>Speicherdauer:</strong> Server-Logfiles werden für maximal 7 Tage gespeichert und anschließend automatisch gelöscht.
                    </p>
                  </div>
                </section>

                {/* Kontaktformular */}
                <section>
                  <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">4. Kontaktformular</h3>
                  <div className="text-[#aaa] leading-relaxed space-y-3">
                    <p>
                      Bei der Nutzung unseres Kontaktformulars werden die von Ihnen eingegebenen Daten (Name, E-Mail, 
                      Nachricht) verarbeitet. Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
                    </p>
                    <p>
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen)
                    </p>
                    <p>
                      <strong>Speicherdauer:</strong> Ihre Daten werden gelöscht, sobald die Bearbeitung Ihrer Anfrage abgeschlossen ist, 
                      spätestens jedoch nach 12 Monaten.
                    </p>
                  </div>
                </section>

                {/* Cookies und Analytics */}
                <section>
                  <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">5. Cookies und Web-Analyse</h3>
                  <div className="text-[#aaa] leading-relaxed space-y-3">
                    <p>
                      Diese Website verwendet Google Analytics, einen Webanalysedienst der Google LLC. Google Analytics verwendet Cookies, 
                      um die Nutzung der Website zu analysieren.
                    </p>
                    <p>
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                    </p>
                    <p>
                      <strong>Zweck:</strong> Analyse der Website-Nutzung zur Verbesserung unserer Dienstleistungen
                    </p>
                    <p>
                      <strong>Speicherdauer:</strong> Cookies werden für maximal 24 Monate gespeichert
                    </p>
                    <p>
                      Sie können der Verwendung von Google Analytics widersprechen, indem Sie das Browser-Add-on zur Deaktivierung 
                      von Google Analytics installieren oder die Cookie-Einstellungen in Ihrem Browser anpassen.
                    </p>
                  </div>
                </section>

                {/* Kontakt für Datenschutzfragen */}
                <section>
                  <h3 className="text-lg font-medium mb-4 text-[#f2f2f2]">6. Kontakt für Datenschutzfragen</h3>
                  <div className="text-[#aaa] leading-relaxed">
                    <p>
                      Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden: 3d@davidcillian.com
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </footer>
      </main>
      
      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  )
}
