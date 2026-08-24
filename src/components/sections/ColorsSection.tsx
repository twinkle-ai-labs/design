import StarMark from "@/components/StarMark";
import SectionHead from "./SectionHead";
import ThemePane from "./ThemePane";
import { PALETTE, SECTIONS } from "@/lib/design";
import styles from "@/app/design.module.css";

const { colors } = SECTIONS;

export default function ColorsSection() {
  return (
    <section id="colors" className={`${styles.section} ${styles.band} ${styles.reveal}`}>
      <div className={styles.shell}>
        <SectionHead kicker={colors.kicker} title={colors.title} code={colors.code} />
        <p className={styles.body}>{colors.body}</p>
        <div className={styles.panes}>
          <ThemePane theme="light" />
          <ThemePane theme="dark" />
        </div>
        {/* 판이 값을 보여 주고, 주석이 그 값을 왜 그렇게 잡았는지 말한다. */}
        <ul className={styles.notes}>
          {PALETTE.filter((group) => group.note).map((group) => (
            <li key={group.group} className={styles.note}>
              <StarMark className={styles.noteStar} />
              <span>
                <strong>{group.group}</strong> — {group.note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
