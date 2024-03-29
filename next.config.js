/** @type {import('next').NextConfig} */
const nextConfig = {
  concurrentFeatures: true,
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
