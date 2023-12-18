/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/preachings",
        destination: '/preachings/1',
        permanent: true,
      },
      {
        source: "/preachings/0",
        destination: '/preachings/1',
        permanent: true,
      },
      {
        source: "/preach",
        destination: '/preachings/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
