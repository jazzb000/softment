import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  // Fix warning: Next.js inferred your workspace root (multiple lockfiles)
  outputFileTracingRoot: path.join(__dirname, '..')
}

export default nextConfig


