import Image from "next/image"
import type React from "react"

interface HeaderProps {
    headerOpacity: number
    scrollToAbout: (e: React.MouseEvent) => void
    scrollToProjects: (e: React.MouseEvent) => void
    scrollToGallery: (e: React.MouseEvent) => void
    scrollToContact: (e: React.MouseEvent) => void
}

export function Header({ headerOpacity, scrollToAbout, scrollToProjects, scrollToGallery, scrollToContact }: HeaderProps) {
    return (
        <>
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
                                alt="Cillian Studio Logo - Professional 3D Creation, AI Solutions, Training Services Austria Vienna"
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
        </>
    )
}
