import type { NextConfig } from "next";

// 배포본은 서버가 없다 — 정적으로 굽는다.
const exporting = process.env.DESIGN_EXPORT === "1";

const config: NextConfig = {
  output: exporting ? "export" : undefined,
  distDir: exporting ? ".next-export" : ".next",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default config;
