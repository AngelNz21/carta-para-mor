/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true
  },

  basePath: "/carta-para-mor",
  assetPrefix: "/carta-para-mor/",

  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
