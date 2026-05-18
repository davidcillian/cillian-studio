import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight, JetBrains_Mono, Fraunces } from "next/font/google"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
})

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a1612",
}

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
    description: "3D-Visualisierung, KI-Agenten und Gamification aus Wien.",
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
    <html
      lang="de"
      className={`${interTight.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
    >
      <body
        className="antialiased"
        style={{
          fontFamily: 'var(--font-sans, "Inter Tight", -apple-system, sans-serif)',
        }}
      >
        {children}
      </body>
    </html>
  )
}
