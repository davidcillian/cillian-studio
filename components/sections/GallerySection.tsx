"use client"

import { useState, forwardRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { galleryImages } from "@/lib/data"

export const GallerySection = forwardRef<HTMLDivElement>((props, ref) => {
    const [gallerySlide, setGallerySlide] = useState(0)

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

    return (
        <section id="gallery" className="py-24 mobile-gallery text-center">
            <div className="flex justify-center">
                <h2 className="text-center text-[#f2f2f2] font-light tracking-[0.1rem] mb-16 text-4xl mobile-section-heading section-heading-underline">
                    Gallery
                </h2>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Slideshow Container */}
                <div
                    ref={ref}
                    className="grid grid-cols-3 mobile-gallery-grid tablet-gallery-grid gap-5 my-15"
                >
                    {/* Mobile: Ein Bild */}
                    <div className="md:hidden overflow-hidden border border-[#444] rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                        <div className="relative w-full h-48 mobile-gallery-image">
                            <Image
                                src={galleryImages[gallerySlide] || "/placeholder.svg"}
                                alt={`3D creation gallery image ${gallerySlide + 1} - Professional 3D art, AI solutions, training portfolio Austria Vienna`}
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
                                alt={`3D creation portfolio image ${gallerySlide * 3 + 1} - Professional 3D art, Blender, Unreal Engine Austria Vienna`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    <div className="hidden md:block overflow-hidden border border-[#444] rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                        <div className="relative w-full h-64">
                            <Image
                                src={galleryImages[gallerySlide * 3 + 1] || "/placeholder.svg"}
                                alt={`3D creation portfolio image ${gallerySlide * 3 + 2} - Professional 3D art, Blender, Unreal Engine Austria Vienna`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    <div className="hidden md:block overflow-hidden border border-[#444] rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                        <div className="relative w-full h-64">
                            <Image
                                src={galleryImages[gallerySlide * 3 + 2] || "/placeholder.svg"}
                                alt={`3D creation portfolio image ${gallerySlide * 3 + 3} - Professional 3D art, Blender, Unreal Engine Austria Vienna`}
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
                                className={`w-2 h-2 mobile-indicator rounded-full transition-all ${index === gallerySlide ? "bg-white w-4" : "bg-white/50"
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
                                className={`w-3 h-3 rounded-full transition-all ${index === gallerySlide ? "bg-white w-6" : "bg-white/50"
                                    }`}
                                aria-label={`Go to gallery slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
})
GallerySection.displayName = "GallerySection"
