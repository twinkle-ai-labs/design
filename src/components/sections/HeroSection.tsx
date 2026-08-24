import Starfield from "@/components/Starfield";
import { HERO } from "@/lib/design";
import styles from "@/app/design.module.css";

/** 이 장의 첫 화면 — 왼쪽이 말하고, 오른쪽 판이 「칸의 수」로 크기를 말한다. */
export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Starfield
        className={styles.heroStars}
        seed={20260824}
        height="58rem"
        dots={92}
        sparkles={12}
        shooting={3}
        keepout={{ x: [15, 82], y: [18, 62] }}
      />
      <div className={styles.shell}>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>{HERO.eyebrow}</p>
            <h1 className={styles.title}>{HERO.title}</h1>
            <p className={styles.reading}>{HERO.reading}</p>
            <p className={styles.lead}>{HERO.lead}</p>
            <div className={styles.rule} aria-hidden="true" />
            <p className={styles.canon}>{HERO.canon}</p>
          </div>
          <aside className={styles.heroPanel} aria-label="디자인 시스템 요약">
            <p className={styles.panelEyebrow}>{HERO.panel.eyebrow}</p>
            <strong className={styles.panelTitle}>
              {HERO.panel.title[0]}
              <br />
              {HERO.panel.title[1]}
            </strong>
            <dl className={styles.stats}>
              {HERO.panel.stats.map((stat) => (
                <div key={stat.label}>
                  <dd>
                    {stat.value}
                    {stat.unit ? <span>{stat.unit}</span> : null}
                  </dd>
                  <dt>{stat.label}</dt>
                </div>
              ))}
            </dl>
            <span className={styles.panelNote}>{HERO.panel.note}</span>
          </aside>
        </div>
      </div>
    </section>
  );
}
