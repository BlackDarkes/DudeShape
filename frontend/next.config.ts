import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  async rewrites() {
    const apiPath = process.env.API_UEL || "http://localhost:8000"

    return [
      {
        source: "/api/:path",
        destination: `${apiPath}/api/:path*`
      }
    ];
  }
};

export default nextConfig;
