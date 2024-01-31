/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
      },
    ],
  },
  reactStrictMode: false,
  experimentalFeatures: {
    excludeISR: ['/api/articles/articlescarrousel', '/api/articles/articlespreach'],
  },
}

module.exports = nextConfig
