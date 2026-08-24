import StarMark from "@/components/StarMark";
import ThemeToggle from "@/components/ThemeToggle";
import HeaderBar from "@/components/HeaderBar";
import { CURRENT_NAV_KEY, HOME_URL, NAME, NAV_LINKS, THEME_TOGGLE_LABELS } from "@/lib/site";
import styles from "@/app/layout.module.css";

/**
 * 머리띠 — 브랜드 하나, 메뉴 넷, 얼굴 바꾸는 버튼 하나.
 *
 * 브랜드는 **앞마당(twinklelabs.kr)** 으로 간다. 이 집은 이름의 한 방이지 이름 자체가
 * 아니므로, 이름을 누른 사람이 가고 싶은 곳은 여기가 아니라 거기다.
 * 지금 서 있는 칸은 주소가 아니라 `key` 로 가린다 — 주소로 견주면 슬래시 하나에 어긋난다.
 */
export default function SiteHeader() {
  return (
    <HeaderBar>
      <div className={styles.headerInner}>
        <a href={HOME_URL} className={styles.brand}>
          <StarMark gradientId="twinkle-brand" className={styles.star} />
          <span className={styles.brandName}>{NAME}</span>
        </a>
        <nav className={styles.nav} aria-label="주요 메뉴">
          {NAV_LINKS.map((link) => {
            const isCurrent = link.key === CURRENT_NAV_KEY;
            return (
              <a
                key={link.key}
                href={link.href}
                className={`${styles.navLink} ${isCurrent ? styles.navLinkActive : ""}`}
                aria-current={isCurrent ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
          <ThemeToggle {...THEME_TOGGLE_LABELS} />
        </nav>
      </div>
    </HeaderBar>
  );
}
