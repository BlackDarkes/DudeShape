import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  async rewrites() {
    const apiPath = process.env.API_URL || "http://localhost:8000"

    return [
      {
        source: "/api/:path",
        destination: `${apiPath}/api/:path*`
      }
    ];
  },
  sassOptions: {
    additionalData: `
      @use "src/shared/styles/helpers/index.scss" as *;
      @use "src/shared/styles/base/variables.scss" as *;
    `,
  },
};

export default nextConfig;
