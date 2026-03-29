"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { galleryImages } from "@/lib/data"

const localImages = galleryImages.filter(
    (src) => src.startsWith("/images/") || src.startsWith("/Videos/")
)

const bentoHeights = [
    "row-span-2",
    "row-span-1",
    "row-span-1",
    "row-span-2",
    "row-span-1",
    "row-span-1",
    "row-span-2",
    "row-span-1",
]

export function GallerySection() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

    const closeLightbox = useCallback(() => setLightboxIndex(null), [])
    const goNext = useCallback(() => {
        setLightboxIndex((p) => p !== null ? (p + 1) % localImages.length : null)
    }, [])
    const goPrev = useCallback(() => {
        setLightboxIndex((p) => p !== null ? (p - 1 + localImages.length) % localImages.length : null)
    }, [])

    useEffect(() => {
        if (lightboxIndex === null) return
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox()
            if (e.key === "ArrowRight") goNext()
            if (e.key === "ArrowLeft") goPrev()
        }
        window.addEventListener("keydown", handler)
        return () => window.removeEventListener("keydown", handler)
    }, [lightboxIndex, closeLightbox, goNext, goPrev])

    if (localImages.length === 0) return null

    return (
        <section id="gallery" className="py-24">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#f2f2f2] mb-12">
                    Galerie
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-2">
                    {localImages.map((src, index) => (
                        <div
                            key={`${src}-${index}`}
                            className={`${bentoHeights[index % bentoHeights.length]} relative rounded-lg overflow-hidden cursor-pointer group`}
                            onClick={() => setLightboxIndex(index)}
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
                        </div>
                    ))}
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
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-10"
                            aria-label="Schliessen"
                        >
                            <X size={28} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev() }}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
                            aria-label="Vorheriges Bild"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); goNext() }}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
                            aria-label="Naechstes Bild"
                        >
                            <ChevronRight size={24} />
                        </button>

                        <div
                            className="relative w-[90vw] h-[80vh] max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={localImages[lightboxIndex]}
                                alt={`Galerie Bild ${lightboxIndex + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm">
                            {lightboxIndex + 1} / {localImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
