import SectionHead from "./SectionHead";
import { ALPHA, SECTIONS } from "@/lib/design";
import styles from "@/app/design.module.css";

const { alpha } = SECTIONS;

export default function AlphaSection() {
  return (
    <section id="alpha" className={`${styles.section} ${styles.reveal}`}>
      <div className={styles.shell}>
        <SectionHead kicker={alpha.kicker} title={alpha.title} code={alpha.code} />
        <p className={styles.body}>{alpha.body}</p>
        <ul className={styles.alpha}>
          {ALPHA.map((step) => (
            <li key={step.token} className={`${styles.card} ${styles.alphaStep}`}>
              <span className={styles.alphaSwatch} style={{ opacity: Number(step.value) }} />
              <code className={styles.token}>{step.token}</code>
              <span className={styles.big}>{step.value}</span>
              <span className={styles.use}>{step.use}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
