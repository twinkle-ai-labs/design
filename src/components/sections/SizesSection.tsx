import SectionHead from "./SectionHead";
import { CONTROLS, ELEVATION, ICONS, RADIUS, SECTIONS, STROKES } from "@/lib/design";
import styles from "@/app/design.module.css";

const { sizes } = SECTIONS;

/** 알약은 반지름이 아니라 «한 줄이 통째로 둥근 것»이라, 견본도 네모가 아니라 알약으로 선다. */
const PILL_RADIUS = 999;

/** 이름·값·쓰임 세 칸짜리 목록. 컨트롤과 선이 같은 꼴이라 한 조각을 나눠 쓴다. */
function TokenRows({ items }: { items: readonly { token: string; px: number; use: string }[] }) {
  return (
    <ul className={styles.rows}>
      {items.map((item) => (
        <li key={item.token} className={styles.row}>
          <code className={styles.token}>{item.token}</code>
          <span className={styles.num}>{item.px}</span>
          <span className={styles.use}>{item.use}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SizesSection() {
  return (
    <section id="sizes" className={`${styles.section} ${styles.reveal}`}>
      <div className={styles.shell}>
        <SectionHead kicker={sizes.kicker} title={sizes.title} code={sizes.code} />
        <div className={styles.sizeGrid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{sizes.cards.icons}</h3>
            <ul className={styles.icons}>
              {ICONS.map((icon) => (
                <li key={icon.token} className={styles.icon}>
                  <span className={styles.iconBox} style={{ width: icon.px, height: icon.px }} />
                  <code className={styles.token}>{icon.token}</code>
                  <span className={styles.num}>{icon.px}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{sizes.cards.elevation}</h3>
            <ul className={styles.elev}>
              {ELEVATION.map((step) => (
                /* 그늘은 hex 가 아니라 토큰으로 — 라이트는 남보라 먹, 다크는 검정 먹이다. */
                <li
                  key={step.token}
                  className={styles.elevBox}
                  style={{ boxShadow: `var(--shadow-${step.token})` }}
                >
                  <code className={styles.token}>{step.token}</code>
                  <span className={styles.num}>{step.px}</span>
                  <span className={styles.use}>{step.use}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.card} ${styles.cardWide}`}>
            <h3 className={styles.cardTitle}>{sizes.cards.radius}</h3>
            <ul className={styles.shapes}>
              {RADIUS.map((shape) => (
                <li key={shape.token} className={styles.shape}>
                  <span
                    className={`${styles.shapeBox} ${shape.px === PILL_RADIUS ? styles.shapePill : ""}`}
                    style={{ borderRadius: shape.px }}
                  />
                  <code className={styles.token}>{shape.token}</code>
                  <span className={styles.num}>{shape.px}</span>
                  <span className={styles.use}>{shape.use}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{sizes.cards.controls}</h3>
            <TokenRows items={CONTROLS} />
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{sizes.cards.strokes}</h3>
            <TokenRows items={STROKES} />
          </div>
        </div>
      </div>
    </section>
  );
}
