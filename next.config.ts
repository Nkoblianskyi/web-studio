import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/web-studio',
  assetPrefix: '/web-studio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
