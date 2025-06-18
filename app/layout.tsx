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
  title: "David Cillian - Creative Studio",
  description: "Innovative digital experiences and creative solutions",
  keywords: "creative, studio, digital, design, development",
  authors: [{ name: "David Cillian" }],
  creator: "David Cillian",
  publisher: "David Cillian Studio",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidcillian.com",
    title: "David Cillian - Creative Studio",
    description: "Innovative digital experiences and creative solutions",
    siteName: "David Cillian Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Cillian - Creative Studio",
    description: "Innovative digital experiences and creative solutions",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#000000",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Preload kritische Ressourcen */}
        <link rel="preload" href="/images/3d-artwork-1.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Cloudflare Web Analytics (optional) */}
        {process.env.NODE_ENV === "production" && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "DEIN-TOKEN-HIER"}'
          />
        )}
      </head>
      <body className="antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  )
}
