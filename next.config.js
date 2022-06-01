/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ["cdn.vox-cdn.com", "upload.wikimedia.org"]
  }
}

module.exports = nextConfig
