import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [{ source: "/approach", destination: "/", permanent: true }];
  },
};

export default nextConfig;
