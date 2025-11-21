import Image from "next/image"

export function HeroSection() {
    return (
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
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overlay für bessere Lesbarkeit */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>
        </section>
    )
}
