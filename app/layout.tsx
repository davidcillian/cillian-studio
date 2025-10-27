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
  title: "Cillian Studio - 3D Creation, AI & Training | David Scherngell",
  description: "Professional 3D creation services, AI-enhanced workflows, and specialized training. Expert in Unreal Engine, Blender, and cutting-edge 3D technologies.",
  keywords: "3D creation, AI creation, gamification, training, Unreal Engine, Blender, 3D artist, Austria, Vienna, David Scherngell, Cillian Studio",
  authors: [{ name: "David Scherngell" }],
  creator: "David Scherngell",
  publisher: "Cillian Studio",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://davidcillian.com",
    title: "Cillian Studio - 3D Creation, AI & Training",
    description: "Professional 3D creation services, AI-enhanced workflows, and specialized training. Expert in Unreal Engine, Blender, and cutting-edge 3D technologies.",
    siteName: "Cillian Studio",
    images: [
      {
        url: "https://davidcillian.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cillian Studio - 3D Creation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cillian Studio - 3D Creation, AI & Training",
    description: "Professional 3D creation services, AI-enhanced workflows, and specialized training.",
    creator: "@david_cillian",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#1d1d1d",
  generator: 'Next.js',
  alternates: {
    canonical: "https://davidcillian.com",
  },
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

        {/* Cookiebot Cookie Consent */}
        <script 
          id="Cookiebot" 
          src="https://consent.cookiebot.com/uc.js" 
          data-cbid="b3824abb-2872-49a4-bd95-b45d1cd25028" 
          data-blockingmode="auto" 
          type="text/javascript"
          async
        ></script>

        {/* Cookiebot Fallback und Debug */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Debug: Prüfen ob Cookiebot lädt
              window.addEventListener('load', function() {
                setTimeout(function() {
                  if (typeof Cookiebot === 'undefined') {
                    console.warn('Cookiebot nicht geladen - Banner wird nicht angezeigt');
                  } else {
                    console.log('Cookiebot erfolgreich geladen');
                  }
                }, 1000);
              });
            `,
          }}
        />

        {/* Google Analytics - nur mit Cookiebot-Zustimmung */}
        {process.env.NODE_ENV === "production" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Google Analytics nur laden wenn Cookiebot-Zustimmung gegeben
                function loadGoogleAnalytics() {
                  if (typeof Cookiebot !== 'undefined' && Cookiebot.consent.preferences) {
                    // Google Analytics Script laden
                    const script = document.createElement('script');
                    script.async = true;
                    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-0DJDTPWF1B';
                    document.head.appendChild(script);
                    
                    // Google Analytics konfigurieren
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-0DJDTPWF1B', {
                      page_title: document.title,
                      page_location: window.location.href,
                    });
                  }
                }
                
                // Warten bis Cookiebot geladen ist
                window.addEventListener('CookiebotOnConsentReady', function() {
                  loadGoogleAnalytics();
                });
                
                // Fallback: Nach 2 Sekunden prüfen
                setTimeout(loadGoogleAnalytics, 2000);
              `,
            }}
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
