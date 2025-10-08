/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Add base path for GitHub Pages if not using custom domain
  // basePath: process.env.NODE_ENV === 'production' ? '' : '',
}

module.exports = nextConfig
