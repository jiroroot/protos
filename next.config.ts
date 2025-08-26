import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: [
      '*.replit.dev',
      '*.replit.co'
    ]
  }
};

export default nextConfig;
