import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Preloader from "@/components/preloader"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Cillian Studio - 3D Visualisierung, AI & Training Wien | David Scherngell",
  description: "Professionelle 3D-Visualisierung, KI-gestützte Workflows und spezialisiertes Training in Wien. Experte für Unreal Engine, Blender und modernste 3D-Technologien.",
  keywords: "3D Visualisierung Wien, 3D creation, AI creation, gamification, training, Unreal Engine, Blender, 3D artist, Österreich, Wien, David Scherngell, Cillian Studio, Unreal Engine Spezialist",
  authors: [{ name: "David Scherngell" }],
  creator: "David Scherngell",
  publisher: "Cillian Studio",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://cillianstudio.com",
    title: "Cillian Studio - 3D Visualisierung, AI & Training Wien",
    description: "Professionelle 3D-Visualisierung, KI-gestützte Workflows und spezialisiertes Training in Wien. Experte für Unreal Engine, Blender und modernste 3D-Technologien.",
    siteName: "Cillian Studio",
    images: [
      {
        url: "https://cillianstudio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cillian Studio - 3D Visualisierung & Creation Services Wien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cillian Studio - 3D Visualisierung, AI & Training Wien",
    description: "Professionelle 3D-Visualisierung, KI-gestützte Workflows und spezialisiertes Training in Wien.",
    creator: "@david_cillian",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#1d1d1d",
  generator: 'Next.js',
  alternates: {
    canonical: "https://cillianstudio.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.className}>
      <head>
        {/* Preload kritische Ressourcen */}
        <link rel="preload" href="/images/3d-artwork-1.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  )
}
