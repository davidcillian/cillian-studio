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

const S = {
  section: {
    padding: "96px max(32px, 4vw)",
    borderTop: "1px solid var(--line)",
    maxWidth: 1600,
    margin: "0 auto",
  } as React.CSSProperties,
  kicker: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    letterSpacing: ".08em",
    textTransform: "uppercase" as const,
    color: "var(--ink-3)",
    marginBottom: 14,
  },
}

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const goNext = useCallback(() => {
    setLightboxIndex((p) => (p !== null ? (p + 1) % localImages.length : null))
  }, [])
  const goPrev = useCallback(() => {
    setLightboxIndex((p) =>
      p !== null ? (p - 1 + localImages.length) % localImages.length : null
    )
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
    <section id="gallery" style={{ background: "var(--bg-deep)" }}>
      <div style={S.section} className="sec-inner">
        {/* Section header */}
        <div
          className="sec-head"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
            gap: 48,
            alignItems: "baseline",
            marginBottom: 64,
          }}
        >
          <div style={{ ...S.kicker, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ display: "inline-block", width: 8, height: 8, background: "var(--signal)", transform: "rotate(45deg)", flexShrink: 0 }} />
            § 05 — Bildwerk
          </div>
          <div>
            <h2
              style={{
                fontFamily: "var(--sans)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 500,
                letterSpacing: "-.025em",
                lineHeight: 1,
                color: "var(--ink)",
              }}
            >
              Ausgewählte{" "}
              <span style={{ fontWeight: 300, color: "var(--ink-4)" }}>Bilder.</span>
            </h2>
          </div>
        </div>

        {/* Bento grid — edge-to-edge, no rounding */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[220px]"
          style={{ gap: 2 }}
        >
          {localImages.map((src, index) => (
            <div key={`${src}-${index}`} className={bentoHeights[index % bentoHeights.length]}>
              <button
                onClick={() => setLightboxIndex(index)}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  display: "block",
                  cursor: "pointer",
                  background: "var(--bg-2)",
                  border: "none",
                  padding: 0,
                }}
              >
                <Image
                  src={src}
                  alt={`Abb. ${String(index + 1).padStart(2, "0")}`}
                  fill
                  style={{ objectFit: "cover", transition: "transform .5s ease" }}
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onMouseOver={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"
                  }}
                  onMouseOut={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.transform = "scale(1)"
                  }}
                />
                {/* Marginalie caption */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 8,
                    left: 10,
                    fontFamily: "var(--mono)",
                    fontSize: 9,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "rgba(236,229,212,.4)",
                    pointerEvents: "none",
                  }}
                >
                  Abb. {String(index + 1).padStart(2, "0")}
                </div>
              </button>
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
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(15,12,9,.95)",
            }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              aria-label="Schliessen"
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                width: 36,
                height: 36,
                background: "var(--line)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--ink-2)",
                zIndex: 10,
                transition: "background .2s",
              }}
            >
              <X size={14} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              aria-label="Vorheriges Bild"
              style={{
                position: "absolute",
                left: 24,
                top: "50%",
                transform: "translateY(-50%)",
                width: 40,
                height: 40,
                background: "var(--line)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--ink-2)",
                zIndex: 10,
                transition: "background .2s",
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              aria-label="Nächstes Bild"
              style={{
                position: "absolute",
                right: 24,
                top: "50%",
                transform: "translateY(-50%)",
                width: 40,
                height: 40,
                background: "var(--line)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--ink-2)",
                zIndex: 10,
                transition: "background .2s",
              }}
            >
              <ChevronRight size={18} />
            </button>

            {/* Image */}
            <div
              style={{ position: "relative", width: "90vw", height: "80vh", maxWidth: 1200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={localImages[lightboxIndex]}
                alt={`Abb. ${String(lightboxIndex + 1).padStart(2, "0")}`}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Counter */}
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
              }}
            >
              Abb. {String(lightboxIndex + 1).padStart(2, "0")} / {String(localImages.length).padStart(2, "0")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
