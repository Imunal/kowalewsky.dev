/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    dangerouslyAllowSVG: true,
    domains: ['skillicons.dev'],
  },
}

module.exports = nextConfig