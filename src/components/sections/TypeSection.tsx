import SectionHead from "./SectionHead";
import { SECTIONS, TYPE } from "@/lib/design";
import styles from "@/app/design.module.css";

const { type } = SECTIONS;

export default function TypeSection() {
  return (
    <section id="type" className={`${styles.section} ${styles.reveal}`}>
      <div className={styles.shell}>
        <SectionHead kicker={type.kicker} title={type.title} code={type.code} />
        <p className={styles.body}>{type.body}</p>
        <ul className={styles.type}>
          {TYPE.map((slot) => (
            /* 견본은 제 값으로 그려야 견본이다 — 여기서만 크기·굵기를 화면에 직접 적는다. */
            <li key={slot.slot} className={styles.typeRow}>
              <span
                className={styles.specimen}
                style={{
                  fontSize: slot.px,
                  fontWeight: slot.weight,
                  lineHeight: slot.lh,
                  letterSpacing: `${slot.tracking}em`,
                }}
              >
                {slot.sample}
              </span>
              <span className={styles.typeMeta}>
                <code className={styles.token}>{slot.slot}</code>
                <span className={styles.use}>
                  {[
                    `${slot.px} · ${slot.weight} · ${slot.lh}`,
                    slot.tracking ? `${slot.tracking}em` : null,
                    slot.use,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
