import type { Metadata, Viewport } from "next";
import Analytics from "@/components/Analytics";
import Aurora from "@/components/Aurora";
import BackToTop from "@/components/BackToTop";
import Providers from "@/components/Providers";
import RouteViews from "@/components/RouteViews";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { DESCRIPTION, KEYWORDS, jsonLd, shareCard } from "@/lib/seo";
import { THEME_BOOT_SCRIPT } from "@/lib/theme";
import { DESIGN_URL, NAME, SYSTEM_NAME } from "@/lib/site";
import "./globals.css";
import styles from "./layout.module.css";

/** Pretendard — 굵기는 «가진 넷»만 부른다. 없는 굵기는 브라우저가 흉내 내거나 이웃 칸으로 스냅한다. */
const PRETENDARD_CSS =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";

export const metadata: Metadata = {
  metadataBase: new URL(DESIGN_URL),
  title: { default: `${SYSTEM_NAME} — 디자인 시스템`, template: `%s · ${NAME}` },
  description: DESCRIPTION,
  keywords: [...KEYWORDS],
  publisher: NAME,
  applicationName: NAME,
  /* 정본 주소 — 비워 두면 같은 화면이 여러 주소로 서고, 어느 쪽이 정본인지
     검색 엔진이 스스로 정한다. */
  alternates: { canonical: "/" },
  ...shareCard({ title: `${SYSTEM_NAME} — 디자인 시스템`, description: DESCRIPTION, path: "/" }),
  robots: {
    index: true,
    follow: true,
    /* 검색 결과의 미리보기를 우리가 줄이지 않는다 — 기본값은 짧게 자르는 쪽이다. */
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/**
 * 문서의 뼈대 — 어느 화면에나 같은 것만 든다.
 *
 * 머리띠와 바닥글은 제 조각([SiteHeader] · [SiteFooter])이 그린다.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href={PRETENDARD_CSS} />
        {/* 첫 그림 전에 얼굴을 정한다 — React 를 기다리면 어두운 화면을 고른 사람이 흰 화면을 한 번 본다. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
        {/* 기계가 읽는 표 — 사람에게는 안 보이지만 검색 결과의 얼굴을 정한다. */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd() }} />
        <Analytics />
      </head>
      <body>
        <Providers>
          <RouteViews />
          {/* 하늘은 어느 화면에나 걸린다 — 404 도 같은 밤 아래 있다. */}
          <Aurora />
          <SiteHeader />
          <main className={styles.main}>{children}</main>
          <BackToTop />
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
