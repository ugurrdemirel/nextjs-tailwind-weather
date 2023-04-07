/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true, // enabling this will enable SSR for Tailwind
  },
}

module.exports = nextConfig
