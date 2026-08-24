import SectionHead from "./SectionHead";
import { HISTORY, SECTIONS } from "@/lib/design";
import styles from "@/app/design.module.css";

const { history } = SECTIONS;

/** 연혁 — **되돌린 결정도 지우지 않는다.** 지우면 다음 사람이 같은 자리를 두 번 판다. */
export default function HistorySection() {
  return (
    <section id="history" className={`${styles.section} ${styles.reveal}`}>
      <div className={styles.shell}>
        <SectionHead kicker={history.kicker} title={history.title} />
        <ol className={styles.history}>
          {HISTORY.map((event) => (
            <li key={`${event.when}-${event.what}`} className={styles.event}>
              <span className={styles.when}>{event.when}</span>
              <span className={styles.what}>{event.what}</span>
              <p className={styles.body}>{event.why}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
