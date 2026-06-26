import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack — page.tsx is too large and causes Turbopack to panic/loop
  turbopack: undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
