import type { NextConfig } from "next";

const repoName = '/loomify-webapp';

const nextConfig: NextConfig = {
  // Serve the site under the repo path so assets resolve on GitHub Pages
  basePath: repoName,
  assetPrefix: repoName,
  trailingSlash: true,
};

export default nextConfig;
