// Performance Monitoring
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === "production") {
    // Log zu Cloudflare Analytics oder anderem Service
    console.log(metric)
  }
}

// Lazy Loading Helper
export const lazyLoad = (callback: () => void, delay = 100) => {
  if (typeof window !== "undefined") {
    const timer = setTimeout(callback, delay)
    return () => clearTimeout(timer)
  }
}

// Image Optimization Helper
export const optimizeImage = (src: string, width?: number, quality = 75) => {
  if (process.env.NODE_ENV === "production") {
    // Cloudflare Image Resizing (falls aktiviert)
    const params = new URLSearchParams()
    if (width) params.set("width", width.toString())
    params.set("quality", quality.toString())
    params.set("format", "auto")

    return `${src}?${params.toString()}`
  }
  return src
}
