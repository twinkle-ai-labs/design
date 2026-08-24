import type { MetadataRoute } from "next";
import { DESIGN_URL } from "@/lib/site";

/**
 * 기어다니는 것들에게 하는 말 — 막을 것은 없고, 길 안내(`sitemap`)를 한 번 한다.
 */

/* 배포본은 서버가 없다 — 이 파일은 빌드 때 한 번 구워져 정적 파일로 남는다. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${DESIGN_URL}/sitemap.xml`,
    host: DESIGN_URL,
  };
}
