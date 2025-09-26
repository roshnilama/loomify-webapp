import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration for Vercel deployment
  trailingSlash: true,
  // Enable hot reload and fast refresh
  reactStrictMode: true,
  // Ensure hot reload works in development
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Enable hot reload
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
    }
    return config;
  },
};

export default nextConfig;
