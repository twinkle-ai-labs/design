import StarMark from "@/components/StarMark";
import { HOME_URL } from "@/lib/site";
import styles from "./not-found.module.css";

/* 없는 곳은 목록에 올리지 않는다. */
export const metadata = {
  title: "여기엔 아무것도 없습니다",
  robots: { index: false, follow: true },
};

/**
 * 없는 주소.
 *
 * 값을 화면에 직접 적지 않는다 — 하필 이 집이 «토큰이 곧 디자인 시스템이다»를
 * 설명하는 곳이라, 여기 박힌 `1.75rem` 하나가 그 장 전체를 무르게 만든다.
 */
export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <StarMark className={styles.mark} />
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>여기엔 아무것도 없습니다</h1>
      <p className={styles.body}>주소를 다시 확인하시거나, 처음으로 돌아가 주세요.</p>
      {/* 이 집에는 한 장뿐이라 «처음»은 앞마당이다. */}
      <a href={HOME_URL} className={styles.cta}>
        처음으로
      </a>
    </div>
  );
}
