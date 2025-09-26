import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration for Vercel deployment
  trailingSlash: true,
  // Enable hot reload and fast refresh
  reactStrictMode: true,
};

export default nextConfig;
