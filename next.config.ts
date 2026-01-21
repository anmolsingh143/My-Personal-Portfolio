import type { NextConfig } from "next";

// Detect deployment environment
const isGitHubPages = process.env.DEPLOY_TARGET === "github";

const nextConfig: NextConfig = {
  // Only use static export for GitHub Pages
  ...(isGitHubPages && {
    output: "export",
    basePath: "/My-Personal-Portfolio",
    assetPrefix: "/My-Personal-Portfolio/",
  }),

  // Image optimization settings
  images: {
    unoptimized: isGitHubPages,
  },

  // Enable React strict mode for development
  reactStrictMode: true,

  // Ensure TypeScript compilation
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
};

export default nextConfig;
