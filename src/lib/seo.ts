/**
 * 검색과 나눔에 나가는 것 — 제목·설명·정본 주소, 그리고 기계가 읽는 표(JSON-LD).
 *
 * 화면의 말(`lib/design`)과 이름·주소(`lib/site`)를 읽어 **한 자리에서** 짓는다.
 */

import type { Metadata } from "next";
import { HERO } from "./design";
import { DESIGN_URL, HOME_URL, NAME, SYSTEM_NAME } from "./site";
import { OG_SIZE } from "./og";

/** 이 집의 한 줄 소개 — 검색 결과에 서는 문장이다. */
export const DESCRIPTION =
  "색상부터 간격과 움직임까지, 모든 선택에 이유를 남깁니다. Twinkle AI Labs의 제품을 하나의 언어로 연결하는 디자인 시스템입니다.";

/** 주소를 눈으로 읽는 꼴 — 나눔 카드의 발치에 선다. */
export const DOMAIN = new URL(DESIGN_URL).host;

export const KEYWORDS = [
  SYSTEM_NAME,
  NAME,
  "디자인 시스템",
  "디자인 토큰",
  "design system",
  "design tokens",
] as const;

/** 나눔 카드의 주소 — `app/og.png/route.tsx` 가 빌드 때 굽는다. */
export const OG_IMAGE = {
  url: "/og.png",
  ...OG_SIZE,
  alt: `${SYSTEM_NAME} — ${NAME}의 디자인 시스템`,
  type: "image/png",
} as const;

/**
 * 한 장의 나눔 정보(OpenGraph·트위터) 한 벌.
 *
 * Next 는 `openGraph` 를 **통째로** 갈아 끼운다 — 장이 제목만 적으면 레이아웃이
 * 정한 카드 그림·이름이 조용히 떨어진다. 그래서 장은 이 함수로 한 벌을 통째로 짓는다.
 */
export function shareCard({ title, description, path }: { title: string; description: string; path: string }): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      siteName: NAME,
      locale: "ko_KR",
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

/** JSON-LD 한 덩이. `@graph` 로 묶어 **문서에 script 하나만** 세운다. */
export function jsonLd(): string {
  const website = {
    "@type": "WebSite",
    "@id": `${DESIGN_URL}/#website`,
    url: `${DESIGN_URL}/`,
    name: `${SYSTEM_NAME} · ${NAME}`,
    description: DESCRIPTION,
    inLanguage: "ko-KR",
    publisher: { "@id": `${HOME_URL}/#organization` },
  };

  /* 이 집의 알맹이는 문서 한 장이다 — 시스템의 이름과 무엇에 관한 것인지를 말한다. */
  const article = {
    "@type": "TechArticle",
    "@id": `${DESIGN_URL}/#article`,
    headline: `${SYSTEM_NAME} — ${HERO.lead}`,
    name: SYSTEM_NAME,
    url: `${DESIGN_URL}/`,
    inLanguage: "ko-KR",
    image: `${DESIGN_URL}/og.png`,
    author: { "@type": "Organization", name: NAME, url: `${HOME_URL}/` },
    publisher: { "@id": `${HOME_URL}/#organization` },
    about: { "@type": "Thing", name: "Design System" },
  };

  return JSON.stringify({ "@context": "https://schema.org", "@graph": [website, article] });
}
