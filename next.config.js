/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.recipetineats.com',
        pathname: '/tachyon/**',
      },
    ],
  },
}

module.exports = nextConfig
