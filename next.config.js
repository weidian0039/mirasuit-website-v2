/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/mirasuit-website-v2',
  assetPrefix: '/mirasuit-website-v2',
}
module.exports = nextConfig
