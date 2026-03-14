import type { NextConfig } from "next";
import { withAeo } from "aeo.js/next";

const nextConfig: NextConfig = {
  sassOptions: {
    sourceMap: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default withAeo({
  ...nextConfig,
  aeo: {
    title: "Quanto Falta pra Copa",
    description: "Site otimizado para descoberta por IA",
    url: "https://quantofaltapracopa.com",
  },
  // Incompatibilidade de tipagem entre NextConfig e NextAeoConfig (ex.: webpack)
} as Parameters<typeof withAeo>[0]);
