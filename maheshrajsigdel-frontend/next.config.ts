import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Tell Turbopack explicitly which folder is the project root
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Configure remote images to allow Unsplash URLs
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },

  // You can add more Next.js config options here if needed
};

export default nextConfig;