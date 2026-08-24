import styles from "@/app/design.module.css";

/**
 * 구획의 머리 — 작은 말 하나와 제목 하나, 그리고 그 구획이 다루는 토큰의 이름.
 * 아홉 번 되풀이되므로 한 자리에 둔다.
 */
export default function SectionHead({
  kicker,
  title,
  code,
}: {
  kicker: string;
  title: string;
  code?: string;
}) {
  return (
    <header className={styles.head}>
      <p className={styles.kicker}>{kicker}</p>
      <div className={styles.headRow}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {code ? <code className={styles.where}>{code}</code> : null}
      </div>
    </header>
  );
}
