import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    sourceMap: true,
  },

  webpack(config) {
    const rules = config.module?.rules as unknown[];

    rules.forEach((rule) => {
      if (
        typeof rule === "object" &&
        rule !== null &&
        "oneOf" in rule &&
        Array.isArray((rule as any).oneOf)
      ) {
        (rule as any).oneOf.forEach((one: any) => {
          if (Array.isArray(one.use)) {
            one.use = one.use.filter(
              (u: any) =>
                !(
                  typeof u === "object" &&
                  u?.loader?.includes("resolve-url-loader")
                )
            );
          }
        });
      }
    });

    return config;
  },
};

export default nextConfig;