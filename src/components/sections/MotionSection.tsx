import SectionHead from "./SectionHead";
import { MOTION, SECTIONS } from "@/lib/design";
import styles from "@/app/design.module.css";

const { motion } = SECTIONS;

/** 곡선 이름은 «쓰임»으로 짓는다 — CSS 의 ease-in/out 은 뜻이 뒤집혀 있어 반드시 한 번은 잘못 읽힌다. */
const EXIT_CURVE = "exit";

export default function MotionSection() {
  return (
    <section id="motion" className={`${styles.section} ${styles.band} ${styles.reveal}`}>
      <div className={styles.shell}>
        <SectionHead kicker={motion.kicker} title={motion.title} code={motion.code} />
        <p className={styles.body}>{MOTION.note}</p>
        <div className={styles.motionGrid}>
          <ul className={styles.durations}>
            {MOTION.durations.map((duration) => (
              <li key={duration.token} className={styles.duration}>
                <code className={styles.token}>{duration.token}</code>
                <span className={styles.big}>
                  {duration.ms}
                  <small>ms</small>
                </span>
              </li>
            ))}
          </ul>
          {/* 곡선은 말로 설명되지 않는다 — 포인터를 올리면 두 곡선이 서로 다르게 달린다. */}
          <div className={`${styles.card} ${styles.motionCard}`} tabIndex={0}>
            <p className={styles.use}>{motion.hint}</p>
            {MOTION.curves.map((curve) => (
              <div key={curve.token} className={styles.curve}>
                <span
                  className={`${styles.track} ${curve.token === EXIT_CURVE ? styles.trackExit : styles.trackEase}`}
                >
                  <i />
                </span>
                <code className={styles.token}>{curve.token}</code>
                <span className={styles.use}>
                  {curve.value} · {curve.use}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
