import type { Metadata } from "next";
import Analytics from "@/components/Analytics";
import Aurora from "@/components/Aurora";
import RouteViews from "@/components/RouteViews";
import StarMark from "@/components/StarMark";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";
import styles from "./layout.module.css";

const HOME_URL = "https://twinklelabs.kr";
const DESIGN_URL = "https://design.twinklelabs.kr";
const BLOG_URL = "https://blog.twinklelabs.kr";
const POLARIS_URL = "https://polaris.twinklelabs.kr";

const NAME = "Twinkle AI Labs";

export const metadata: Metadata = {
  metadataBase: new URL(DESIGN_URL),
  title: { default: "Aurora Ledger — 디자인 시스템", template: `%s · ${NAME}` },
  description:
    "Twinkle AI Labs 의 디자인 시스템. 이름의 뜻, 색·불투명도·간격·크기·모양·움직임·글자의 사다리, 그리고 지나온 길.",
};

// 화면이 그려지기 전에 테마를 정한다 — 늦으면 흰 화면이 한 번 번쩍인다.
const themeBoot = `(function(){try{var t=localStorage.getItem("twinkle-theme");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

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
        <RouteViews />
        {/* 하늘은 어느 화면에나 걸린다 */}
        <Aurora />
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <a href={HOME_URL} className={styles.brand}>
              <StarMark gradientId="twinkle-brand" className={styles.star} />
              <span className={styles.brandName}>{NAME}</span>
            </a>
            <nav className={styles.nav}>
              <a href={HOME_URL} className={styles.navLink}>
                홈
              </a>
              <a href={DESIGN_URL} className={`${styles.navLink} \${styles.navLinkActive}`}>
                디자인
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
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <p className={styles.footerLine}>
              <StarMark className={styles.footerStar} />
              {NAME}
            </p>
            <nav className={styles.footerLinks}>
              <a href={HOME_URL} className={styles.footerLink}>홈</a>
              <a href={BLOG_URL} className={styles.footerLink}>블로그</a>
              <a href={POLARIS_URL} className={styles.footerLink}>약관 보관소</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
