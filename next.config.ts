import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  outputFileTracingRoot: path.join(__dirname),
  async rewrites() {
    return [{ source: "/calculator", destination: "/calculator.html" }];
  },
};

export default nextConfig;
