import type { MetadataRoute } from "next";
import { DESIGN_URL } from "@/lib/site";

/**
 * 이 집의 모든 장 — 지금은 한 장뿐이지만, 장이 늘면 여기에 한 줄을 더한다.
 */

/* 배포본은 서버가 없다 — 이 파일은 빌드 때 한 번 구워져 정적 파일로 남는다. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${DESIGN_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
