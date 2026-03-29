"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { recentProjects } from "@/lib/data"

export function ProjectsSection() {
    const [showAll, setShowAll] = useState(false)

    const visibleProjects = showAll ? recentProjects : recentProjects.slice(0, 3)

    return (
        <section id="projects" className="py-24">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-[#f2f2f2] mb-16"
                >
                    Projekte
                </motion.h2>

                <div className="space-y-16">
                    {visibleProjects.map((project, index) => {
                        const isReversed = index % 2 === 1
                        const firstImage = project.images?.[0]

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden"
                            >
                                <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                                    {/* Image */}
                                    {firstImage && (
                                        <div className="relative w-full lg:w-1/2 aspect-[16/10] lg:aspect-auto lg:min-h-[400px]">
                                            <Image
                                                src={firstImage}
                                                alt={project.projectTitle}
                                                fill
                                                className="object-cover"
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                                        <div className="flex items-baseline gap-3 mb-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-[#f2f2f2]">
                                                {project.projectTitle}
                                            </h3>
                                            <span className="text-sm text-white/40">{project.completionDate}</span>
                                        </div>

                                        <p className="text-white/60 leading-relaxed mb-6">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="bg-white/5 rounded-full px-3 py-1 text-xs text-white/70"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Team */}
                                        {project.artists && project.artists.length > 0 && (
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="flex -space-x-2">
                                                    {project.artists.map((artist, i) => (
                                                        <div
                                                            key={i}
                                                            className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#0a0a0a] relative"
                                                        >
                                                            <Image
                                                                src={artist.image}
                                                                alt={artist.name}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <span className="text-xs text-white/40">
                                                    {project.artists.map((a) => a.name).join(", ")}
                                                </span>
                                            </div>
                                        )}

                                        {/* Product Link */}
                                        {project.productLink && (
                                            <a
                                                href={project.productLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-[#f2f2f2] px-5 py-2.5 rounded-lg text-sm font-medium transition-colors w-fit"
                                            >
                                                Zum Produkt
                                                <ExternalLink size={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Show More / Less */}
                {recentProjects.length > 3 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-12"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-white/5 hover:bg-white/10 border border-white/10 text-[#f2f2f2] px-8 py-3 rounded-lg text-sm font-medium transition-colors"
                        >
                            {showAll ? "Weniger anzeigen" : "Mehr Projekte"}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
