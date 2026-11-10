import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [{ source: "/approach", destination: "/", permanent: true }];
  },
  // /calculator and /report rewrites removed in the offer-copy draft.
  // The underlying public files are left in place until Max decides to delete them.
};

export default nextConfig;
