import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration for Vercel deployment
  trailingSlash: true,
  // Improve hot reload in WSL
  experimental: {
    esmExternals: false,
  },
  // Better file watching
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
