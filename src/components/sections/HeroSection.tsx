import Starfield from "@/components/Starfield";
import ThemeStudy from "./ThemeStudy";
import { DESIGN_INTRO } from "@/lib/design";
import styles from "@/app/design.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Starfield
        className={styles.heroStars}
        seed={20260824}
        height="100%"
        dots={32}
        sparkles={5}
        shooting={0}
        keepout={{ x: [0, 100], y: [15, 85] }}
      />
      <div className={styles.shell}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>{DESIGN_INTRO.eyebrow}</p>
            <h1 className={styles.title}>
              {DESIGN_INTRO.title[0]}
              <br />
              <span>{DESIGN_INTRO.title[1]}</span>
            </h1>
            <p className={styles.lead}>
              {DESIGN_INTRO.lead[0]}
              <br />
              {DESIGN_INTRO.lead[1]}
            </p>
            <p className={styles.canon}>
              {DESIGN_INTRO.description[0]}
              <br />
              {DESIGN_INTRO.description[1]}
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryLink} href="#colors">
                {DESIGN_INTRO.colorsLink} <span aria-hidden="true">↗</span>
              </a>
              <a className={styles.quietLink} href="#rules">
                {DESIGN_INTRO.principlesLink} <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <ThemeStudy />
        </div>
        <dl className={styles.stats}>
          {DESIGN_INTRO.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>
                {stat.value}
                <span>{stat.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
