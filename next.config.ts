import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    sourceMap: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
