"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { galleryImages } from "@/lib/data"

// Filter out external URLs — only keep local /images/ paths
const localImages = galleryImages.filter(
    (src) => src.startsWith("/images/") || src.startsWith("/Videos/")
)

// Bento grid height classes for visual variety
const bentoHeights = [
    "row-span-2", // tall
    "row-span-1", // normal
    "row-span-1", // normal
    "row-span-2", // tall
    "row-span-1", // normal
    "row-span-1", // normal
    "row-span-2", // tall
    "row-span-1", // normal
]

export function GallerySection() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

    const openLightbox = useCallback((index: number) => {
        setLightboxIndex(index)
    }, [])

    const closeLightbox = useCallback(() => {
        setLightboxIndex(null)
    }, [])

    const goNext = useCallback(() => {
        setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % localImages.length : null
        )
    }, [])

    const goPrev = useCallback(() => {
        setLightboxIndex((prev) =>
            prev !== null
                ? (prev - 1 + localImages.length) % localImages.length
                : null
        )
    }, [])

    // Keyboard navigation
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox()
            if (e.key === "ArrowRight") goNext()
            if (e.key === "ArrowLeft") goPrev()
        },
        [closeLightbox, goNext, goPrev]
    )

    if (localImages.length === 0) return null

    return (
        <section id="gallery" className="py-24">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-[#f2f2f2] mb-12"
                >
                    Galerie
                </motion.h2>

                {/* Bento / Masonry Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-3">
                    {localImages.map((src, index) => {
                        const heightClass =
                            bentoHeights[index % bentoHeights.length]

                        return (
                            <motion.div
                                key={`${src}-${index}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className={`${heightClass} relative rounded-xl overflow-hidden cursor-pointer group`}
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={src}
                                    alt={`Galerie Bild ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                        onClick={closeLightbox}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                        role="dialog"
                        aria-label="Galerie Lightbox"
                    >
                        {/* Close */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-10"
                            aria-label="Schliessen"
                        >
                            <X size={28} />
                        </button>

                        {/* Prev */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                goPrev()
                            }}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
                            aria-label="Vorheriges Bild"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Next */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                goNext()
                            }}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
                            aria-label="Naechstes Bild"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-[90vw] h-[80vh] max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={localImages[lightboxIndex]}
                                alt={`Galerie Bild ${lightboxIndex + 1}`}
                                fill
                                className="object-contain"
                            />
                        </motion.div>

                        {/* Counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm">
                            {lightboxIndex + 1} / {localImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
