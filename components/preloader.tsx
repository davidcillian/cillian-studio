"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Preload kritische Assets
    const preloadAssets = async () => {
      const assets = [
        "/images/3d-artwork-1.png",
        // Weitere kritische Assets hier
      ]

      let loaded = 0
      const total = assets.length

      for (const asset of assets) {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image()
            img.crossOrigin = "anonymous"
            img.onload = resolve
            img.onerror = reject
            img.src = asset
          })
          loaded++
          setProgress((loaded / total) * 100)
        } catch (error) {
          console.warn(`Failed to preload ${asset}`)
          loaded++
          setProgress((loaded / total) * 100)
        }
      }

      // Minimum loading time für UX
      setTimeout(() => setIsLoading(false), 500)
    }

    preloadAssets()
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-white transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-white text-sm">Loading... {Math.round(progress)}%</p>
      </div>
    </div>
  )
}
