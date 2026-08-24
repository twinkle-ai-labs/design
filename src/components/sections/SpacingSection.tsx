import SectionHead from "./SectionHead";
import { SECTIONS, SPACING } from "@/lib/design";
import styles from "@/app/design.module.css";

const { spacing } = SECTIONS;

/** 간격 — 칸이 커지는 차례가 뜻을 가지므로 `ol` 이다. */
export default function SpacingSection() {
  return (
    <section id="spacing" className={`${styles.section} ${styles.band} ${styles.reveal}`}>
      <div className={styles.shell}>
        <SectionHead kicker={spacing.kicker} title={spacing.title} code={spacing.code} />
        <p className={styles.body}>{spacing.body}</p>
        <ol className={styles.spacing}>
          {SPACING.map((step) => (
            <li key={step.token} className={styles.spaceRow}>
              <code className={styles.token}>{step.token}</code>
              <span className={styles.num}>{step.px}</span>
              {/* 막대의 길이가 곧 그 값이다 — 장식이 아니라 자(尺)다. */}
              <span className={styles.spaceBar} style={{ width: `${step.px}px` }} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
