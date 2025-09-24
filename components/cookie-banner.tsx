"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const openPrivacyPolicy = () => {
    // Open privacy policy and scroll to it
    const privacyButton = document.querySelector('[data-privacy-button]')
    if (privacyButton) {
      (privacyButton as HTMLElement).click()
      setTimeout(() => {
        const privacySection = document.querySelector('[data-privacy-section]')
        if (privacySection) {
          privacySection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
    }
  }

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
    // Google Analytics wird automatisch durch das Layout-Script aktiviert
    // Das Script prüft localStorage und lädt GA nur bei Zustimmung
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1d1d1d] border-t border-white/10 p-4 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-[#aaa]">
            Diese Website verwendet Google Analytics zur Verbesserung der Nutzererfahrung. 
            <button 
              onClick={openPrivacyPolicy}
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              Mehr erfahren
            </button>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 text-[#aaa] rounded-lg transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Akzeptieren
          </button>
        </div>
        <button
          onClick={declineCookies}
          className="text-[#aaa] hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )
}
