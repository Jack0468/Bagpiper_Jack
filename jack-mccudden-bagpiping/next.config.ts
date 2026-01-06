import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Critical for GitHub Pages
  basePath: '/jack-mccudden-bagpiping', // Use your GitHub repository name
  images: {
    unoptimized: true, // GitHub Pages can't handle Next.js image optimization
  },
};

export default nextConfig;
