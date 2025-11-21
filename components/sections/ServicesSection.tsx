"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { featureData, serviceData } from "@/lib/data"

export function ServicesSection() {
    const [activeFeature, setActiveFeature] = useState<string | null>(null)
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const detailRef = useRef<HTMLDivElement>(null)

    // Reset slideshow when active feature changes
    useEffect(() => {
        setCurrentSlide(0)
    }, [activeFeature])

    const handleFeatureClick = (feature: string) => {
        console.log('Feature clicked:', feature) // Debug log
        setCurrentSlide(0) // Reset slide index when changing features
        setActiveFeature(feature)
        setIsDetailOpen(true)

        // Force re-render of slideshow by adding a key change
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

    return (
        <section id="services" className="py-24 mobile-services text-center">
            <div className="max-w-6xl mx-auto px-5">
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
                                    alt={`${service.title} service illustration - Professional 3D creation, AI solutions, training services Austria Vienna`}
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
                                        className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${activeFeature === service.features[0].key
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
                    className={`overflow-hidden transition-all duration-500 ease-in-out mt-10 ${isDetailOpen ? "max-h-[1400px] sm:max-h-[1200px] lg:max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    {activeFeature && featureData[activeFeature as keyof typeof featureData] && (
                        <div className="flex flex-col lg:flex-row gap-3 sm:gap-5 items-start relative w-full">
                            {/* Close button */}
                            <button
                                onClick={handleCloseDetail}
                                className="absolute top-2 right-2 p-2 mobile-touch-target bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
                                aria-label="Close details"
                            >
                                <X size={20} />
                            </button>

                            {/* Text description */}
                            <div className="flex-1 lg:flex-[2] lg:min-w-[300px] text-[#aaa] p-3 sm:p-4 lg:p-8 bg-white/[0.03] rounded-lg text-sm sm:text-base w-full">
                                {featureData[activeFeature as keyof typeof featureData].text}
                            </div>

                            {/* Slideshow */}
                            <div className="flex-1 lg:flex-[3] lg:min-w-[400px] relative w-full">
                                <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] bg-white/[0.03] rounded-lg overflow-hidden w-full" key={activeFeature}>
                                    {/* Current slide */}
                                    {featureData[activeFeature as keyof typeof featureData].slides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                                                }`}
                                        >
                                            {slide.endsWith('.mp4') ? (
                                                <video
                                                    className="w-full h-full object-cover min-h-full"
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    preload="metadata"
                                                    poster="/placeholder.svg"
                                                >
                                                    <source src={slide} type="video/mp4" />
                                                    Ihr Browser unterstützt das Video-Element nicht.
                                                </video>
                                            ) : (
                                                <Image
                                                    src={slide || "/placeholder.svg"}
                                                    alt={`${activeFeature} slide ${index + 1} - 3D creation, AI solutions, training services`}
                                                    fill
                                                    className="object-cover min-h-full"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            )}
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
                                                className={`w-2 h-2 mobile-indicator rounded-full transition-all ${index === currentSlide ? "bg-white w-4" : "bg-white/50"
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
            </div>
        </section>
    )
}
