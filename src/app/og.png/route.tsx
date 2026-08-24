import { HERO } from "@/lib/design";
import { ogCard } from "@/lib/og";
import { DOMAIN } from "@/lib/seo";
import { SYSTEM_NAME } from "@/lib/site";

/* 배포본은 서버가 없다 — 이 그림은 빌드 때 한 번 구워져 정적 파일로 남는다. */
export const dynamic = "force-static";

/**
 * 이 집의 나눔 카드.
 *
 * Next 의 `opengraph-image` 규약 대신 **주소를 우리가 짓는다**. 그 규약은 정적
 * 내보내기에서 확장자 없는 파일을 남기는데, 깃허브 페이지는 확장자로 콘텐츠 타입을
 * 정하므로 그 파일은 그림으로 읽히지 않는다.
 */
export function GET() {
  return ogCard({
    eyebrow: HERO.eyebrow,
    title: SYSTEM_NAME,
    lead: HERO.lead,
    domain: DOMAIN,
  });
}
