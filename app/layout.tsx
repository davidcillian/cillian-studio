import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
}

export const metadata: Metadata = {
  title: "Cillian Studio — 3D, KI-Agenten & Gamification | Wien",
  description:
    "Kreativ- und Technologie-Studio in Wien. 3D-Visualisierung, KI-Agenten (DSGVO-konform), Gamification und Automatisierung. Blender, Unreal Engine 5, lokale LLMs.",
  keywords:
    "3D Visualisierung Wien, KI-Agenten Wien, lokale KI DSGVO, Gamification, Creative Technology, Unreal Engine 5, Blender, Cillian Studio, KI-Beratung Wien",
  authors: [{ name: "David Scherngell" }],
  creator: "David Scherngell",
  publisher: "Cillian Studio",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://cillianstudio.com",
    title: "Cillian Studio — 3D, KI-Agenten & Gamification | Wien",
    description:
      "Kreativ- und Technologie-Studio in Wien. 3D-Visualisierung, KI-Agenten, Gamification und Automatisierung.",
    siteName: "Cillian Studio",
    images: [
      {
        url: "https://cillianstudio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cillian Studio — 3D, KI & Gamification aus Wien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cillian Studio — 3D, KI-Agenten & Gamification | Wien",
    description:
      "3D-Visualisierung, KI-Agenten und Gamification aus Wien.",
  },
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
      <body className="antialiased">{children}</body>
    </html>
  )
}
