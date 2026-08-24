import StarMark from "@/components/StarMark";
import SectionHead from "./SectionHead";
import { SECTIONS } from "@/lib/design";
import styles from "@/app/design.module.css";

const { rules } = SECTIONS;

/** 법 — 값이 아니라 판단. 값은 바뀌어도 이 여섯은 남는다. */
export default function RulesSection() {
  return (
    <section id="rules" className={`${styles.section} ${styles.band} ${styles.reveal}`}>
      <div className={styles.shell}>
        <SectionHead kicker={rules.kicker} title={rules.title} />
        <ul className={styles.notes}>
          {rules.items.map((rule) => (
            <li key={rule} className={styles.note}>
              <StarMark className={styles.noteStar} />
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
