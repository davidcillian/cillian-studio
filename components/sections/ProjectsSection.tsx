"use client"

import { useState, forwardRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, Users } from "lucide-react"
import { recentProjects } from "@/lib/data"

export const ProjectsSection = forwardRef<HTMLDivElement>((props, ref) => {
    const [activeProject, setActiveProject] = useState<string | null>(null)
    const [projectSlide, setProjectSlide] = useState(0)
    const [showAllProjects, setShowAllProjects] = useState(false)

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

    return (
        <section id="projects" className="py-24 mobile-projects text-center">
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex justify-center">
                    <h2 className="text-center text-[#f2f2f2] font-light tracking-[0.1rem] mb-16 text-4xl mobile-section-heading section-heading-underline">
                        Recent Projects
                    </h2>
                </div>

                <div ref={ref} className="space-y-12">
                    {recentProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`bg-[#1d1d1d] border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-white/20 relative`}
                            style={{
                                display: !showAllProjects && index > 3 ? 'none' : 'block',
                                height: !showAllProjects && index === 3 ? '150px' : 'auto',
                                overflow: !showAllProjects && index === 3 ? 'hidden' : 'visible'
                            }}
                        >
                            {/* Fade overlay for 4th project when not showing all */}
                            {!showAllProjects && index === 3 && (
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d1d1d] pointer-events-none z-10"></div>
                            )}
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
                                            {project.id === "project-1" ? (
                                                <div className="text-center text-[#aaa] text-lg font-bold">Demo</div>
                                            ) : project.id === "project-2" ? (
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
                                        className={`w-40 mobile-project-button mobile-touch-target h-12 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden ${activeProject === project.id
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
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeProject === project.id ? "max-h-[1000px]" : "max-h-0"
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
                                                                alt={`${project.projectTitle} - 3D creation project image ${imgIndex + 1} - ${project.technologies.join(', ')} Austria Vienna`}
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
                                                <div className="flex flex-wrap gap-3">
                                                    {project.technologies.map((tech, techIndex) => {
                                                        // Software Icon Mapping
                                                        const getIcon = (techName: string) => {
                                                            switch (techName.toLowerCase()) {
                                                                case 'blender':
                                                                    return (
                                                                        <div className="flex items-center gap-2 bg-orange-600/20 border border-orange-500/30 px-3 py-2 rounded-lg">
                                                                            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">B</div>
                                                                            <span className="text-sm text-[#f2f2f2]">Blender</span>
                                                                        </div>
                                                                    )
                                                                case 'unreal engine 5.6':
                                                                case 'unreal engine':
                                                                    return (
                                                                        <div className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-3 py-2 rounded-lg">
                                                                            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">UE</div>
                                                                            <span className="text-sm text-[#f2f2f2]">Unreal Engine</span>
                                                                        </div>
                                                                    )
                                                                case 'maya':
                                                                    return (
                                                                        <div className="flex items-center gap-2 bg-cyan-600/20 border border-cyan-500/30 px-3 py-2 rounded-lg">
                                                                            <div className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center text-white text-xs font-bold">M</div>
                                                                            <span className="text-sm text-[#f2f2f2]">Maya</span>
                                                                        </div>
                                                                    )
                                                                case 'substance painter':
                                                                    return (
                                                                        <div className="flex items-center gap-2 bg-red-600/20 border border-red-500/30 px-3 py-2 rounded-lg">
                                                                            <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">SP</div>
                                                                            <span className="text-sm text-[#f2f2f2]">Substance Painter</span>
                                                                        </div>
                                                                    )
                                                                case 'premiere pro':
                                                                    return (
                                                                        <div className="flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 px-3 py-2 rounded-lg">
                                                                            <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">PR</div>
                                                                            <span className="text-sm text-[#f2f2f2]">Premiere Pro</span>
                                                                        </div>
                                                                    )
                                                                case 'geometry nodes':
                                                                    return (
                                                                        <div className="flex items-center gap-2 bg-green-600/20 border border-green-500/30 px-3 py-2 rounded-lg">
                                                                            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">GN</div>
                                                                            <span className="text-sm text-[#f2f2f2]">Geometry Nodes</span>
                                                                        </div>
                                                                    )
                                                                default:
                                                                    return (
                                                                        <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-2 rounded-lg">
                                                                            <div className="w-6 h-6 bg-gray-500 rounded flex items-center justify-center text-white text-xs font-bold">
                                                                                {techName.charAt(0).toUpperCase()}
                                                                            </div>
                                                                            <span className="text-sm text-[#f2f2f2]">{techName}</span>
                                                                        </div>
                                                                    )
                                                            }
                                                        }

                                                        return (
                                                            <div key={techIndex}>
                                                                {getIcon(tech)}
                                                            </div>
                                                        )
                                                    })}
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
                                            {project.id !== "project-1" && project.id !== "project-2" && project.id !== "project-4" && project.id !== "project-5" && (
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

                    {/* More Projects Button */}
                    {!showAllProjects && recentProjects.length > 3 && (
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={() => setShowAllProjects(true)}
                                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                <span>Show More Projects</span>
                                <ChevronRight size={20} className="rotate-90" />
                            </button>
                        </div>
                    )}

                    {/* Less Projects Button */}
                    {showAllProjects && recentProjects.length > 3 && (
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={() => setShowAllProjects(false)}
                                className="inline-flex items-center gap-3 bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                <span>Show Less</span>
                                <ChevronRight size={20} className="-rotate-90" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
})
ProjectsSection.displayName = "ProjectsSection"
