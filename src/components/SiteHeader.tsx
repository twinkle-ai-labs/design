import StarMark from "@/components/StarMark";
import HeaderNavigation from "@/components/HeaderNavigation";
import HeaderBar from "@/components/HeaderBar";
import { HOME_URL, NAME } from "@/lib/site";
import styles from "@/app/layout.module.css";

/**
 * 머리띠 — 브랜드와 공통 메뉴. 작은 화면에서는 메뉴를 펼쳐 이동한다.
 *
 * 브랜드는 **앞마당(twinklelabs.kr)** 으로 간다. 이 집은 이름의 한 방이지 이름 자체가
 * 아니므로, 이름을 누른 사람이 가고 싶은 곳은 여기가 아니라 거기다.
 */
export default function SiteHeader() {
  return (
    <HeaderBar>
      <div className={styles.headerInner}>
        <a href={HOME_URL} className={styles.brand}>
          <StarMark gradientId="twinkle-brand" className={styles.star} />
          <span className={styles.brandName}>{NAME}</span>
        </a>
        <HeaderNavigation />
      </div>
    </HeaderBar>
  );
}
