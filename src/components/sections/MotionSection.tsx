import type { CSSProperties } from "react";
import SectionHead from "./SectionHead";
import { MOTION, SECTIONS } from "@/lib/design";
import styles from "@/app/design.module.css";

const { motion } = SECTIONS;

/** 곡선 이름은 «쓰임»으로 짓는다 — CSS 의 ease-in/out 은 뜻이 뒤집혀 있어 반드시 한 번은 잘못 읽힌다. */
const EXIT_CURVE = "exit";

/** 시간 판의 줄 하나는 제 토큰의 시계로 달린다 — 값을 옮겨 적지 않고 토큰을 가리킨다. */
function durationStyle(token: string): CSSProperties {
  return { "--demo-duration": `var(--motion-${token})` } as CSSProperties;
}

/**
 * 움직임 — 같은 꼴의 판 둘. 왼쪽은 «얼마나»(시간 셋), 오른쪽은 «어떻게»(곡선 둘).
 * 둘 다 포인터를 올리면 점이 달린다 — 150ms 와 350ms 의 차이는 말로는 보이지 않는다.
 */
export default function MotionSection() {
  return (
    <section id="motion" className={`${styles.section} ${styles.band} ${styles.reveal}`}>
      <div className={styles.shell}>
        <SectionHead kicker={motion.kicker} title={motion.title} code={motion.code} />
        <p className={styles.body}>{MOTION.note}</p>
        <div className={styles.motionGrid}>
          <div className={`${styles.card} ${styles.motionCard}`} tabIndex={0}>
            <p className={styles.use}>{motion.hintDurations}</p>
            <ul className={styles.demos}>
              {MOTION.durations.map((duration) => (
                <li key={duration.token} className={styles.curve}>
                  <span className={styles.track} style={durationStyle(duration.token)}>
                    <i />
                  </span>
                  <code className={styles.token}>{duration.token}</code>
                  <span className={styles.big}>
                    {duration.ms}
                    <small>ms</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.card} ${styles.motionCard}`} tabIndex={0}>
            <p className={styles.use}>{motion.hintCurves}</p>
            <ul className={styles.demos}>
              {MOTION.curves.map((curve) => (
                <li key={curve.token} className={styles.curve}>
                  <span
                    className={`${styles.track} ${curve.token === EXIT_CURVE ? styles.trackExit : ""}`}
                  >
                    <i />
                  </span>
                  <code className={styles.token}>{curve.token}</code>
                  <span className={styles.use}>
                    {curve.value} · {curve.use}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
