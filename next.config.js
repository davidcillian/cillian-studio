/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: "",
  basePath: "",
  distDir: "out",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimierungen für Cloudflare Pages
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Experimental features für bessere Performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
}

module.exports = nextConfig
