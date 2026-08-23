import type { Metadata, Viewport } from "next";
import Analytics from "@/components/Analytics";
import Aurora from "@/components/Aurora";
import RouteViews from "@/components/RouteViews";
import StarMark from "@/components/StarMark";
import ThemeToggle from "@/components/ThemeToggle";
import Providers from "@/components/Providers";
import BackToTop from "@/components/BackToTop";
import HeaderBar from "@/components/HeaderBar";
import Starfield from "@/components/Starfield";
import "./globals.css";
import styles from "./layout.module.css";

const HOME_URL = "https://twinklelabs.kr";
const DESIGN_URL = "https://design.twinklelabs.kr";
const BLOG_URL = "https://blog.twinklelabs.kr";
const POLARIS_URL = "https://polaris.twinklelabs.kr";
const CONTACT_EMAIL = "twinkle.ai.labs@gmail.com";

const NAME = "Twinkle AI Labs";

export const metadata: Metadata = {
  metadataBase: new URL(DESIGN_URL),
  title: { default: "Aurora Ledger — 디자인 시스템", template: `%s · ${NAME}` },
  description:
    "Twinkle AI Labs의 제품을 하나의 언어로 연결하는 디자인 시스템, Aurora Ledger를 소개합니다.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// 화면이 그려지기 전에 테마를 정한다 — 쿠키를 먼저 읽어 서브도메인 간 동기화하고, 없으면 localStorage를 본다.
const themeBoot = `(function(){try{var m=document.cookie.match(/(?:^|; )twinkle-theme=([^;]*)/);var t=m?decodeURIComponent(m[1]):null;if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <Analytics />
      </head>
      <body>
        <Providers>
        <RouteViews />
        {/* 하늘은 어느 화면에나 걸린다 */}
        <Aurora />
        <HeaderBar>
          <div className={styles.headerInner}>
            <a href={HOME_URL} className={styles.brand}>
              <StarMark gradientId="twinkle-brand" className={styles.star} />
              <span className={styles.brandName}>{NAME}</span>
            </a>
            <nav className={styles.nav} aria-label="주요 메뉴">
              <a href={HOME_URL} className={styles.navLink}>
                홈
              </a>
              <a href={DESIGN_URL} className={`${styles.navLink} ${styles.navLinkActive}`} aria-current="page">
                디자인 시스템
              </a>
              <a href={BLOG_URL} className={styles.navLink}>
                블로그
              </a>
              <a href={POLARIS_URL} className={styles.navLink}>
                약관
              </a>
              <ThemeToggle toLight="밝은 화면으로" toDark="어두운 화면으로" />
            </nav>
          </div>
        </HeaderBar>
        <main className={styles.main}>{children}</main>
        <BackToTop />
        <footer className={styles.footer}>
          <Starfield seed={19910104} height="100%" dots={26} sparkles={3} className={styles.footerSky} />
          <div className={styles.footerInner}>
            <div className={styles.footerTop}>
              <div className={styles.footerBrand}>
                <p className={styles.footerName}><StarMark className={styles.footerStar} />{NAME}</p>
                <p className={styles.footerLine}>모든 제품이 같은 목소리로 말하고 움직이게 하는 디자인 시스템입니다.</p>
              </div>
              <nav className={styles.footerColumn} aria-label="바닥글 메뉴">
                <p className={styles.footerHeading}>바로가기</p>
                <div className={styles.footerLinks}>
                  <a href={HOME_URL} className={styles.footerLink}>홈</a>
                  <a href={DESIGN_URL} className={styles.footerLink}>디자인 시스템</a>
                  <a href={BLOG_URL} className={styles.footerLink}>블로그</a>
                  <a href={POLARIS_URL} className={styles.footerLink}>약관</a>
                </div>
              </nav>
              <div className={styles.footerColumn}>
                <p className={styles.footerHeading}>연락</p>
                <a className={styles.footerMail} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p className={styles.footerCopyright}>© 2026 {NAME}</p>
              <p className={styles.footerMotto}>Aurora Ledger</p>
            </div>
          </div>
        </footer>
        </Providers>
      </body>
    </html>
  );
}
