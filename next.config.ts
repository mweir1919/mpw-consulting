import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  outputFileTracingRoot: path.join(__dirname),
  async rewrites() {
    return [
      { source: "/calculator", destination: "/calculator.html" },
      { source: "/report", destination: "/MPW-Consulting-Home-Services.pdf" },
    ];
  },
};

export default nextConfig;
