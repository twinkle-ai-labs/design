import StarMark from "@/components/StarMark";
import SectionHead from "./SectionHead";
import { SECTIONS } from "@/lib/design";
import styles from "@/app/design.module.css";

const { meaning } = SECTIONS;

/** 이름의 뜻 — Aurora 와 Ledger. */
export default function MeaningSection() {
  return (
    <section id="meaning" className={`${styles.section} ${styles.reveal}`}>
      <div className={styles.shell}>
        <SectionHead kicker={meaning.kicker} title={meaning.title} />
        <p className={styles.body}>{meaning.body}</p>
        <ul className={styles.words}>
          {meaning.words.map((word) => (
            <li key={word.word} className={styles.wordPanel}>
              <h3 className={styles.word}>
                <StarMark className={styles.wordStar} />
                {word.word}
              </h3>
              <p className={styles.wordReading}>{word.reading}</p>
              <p className={styles.body}>{word.body}</p>
            </li>
          ))}
        </ul>
        <p className={styles.aside}>
          {meaning.aside.before}
          <code>{meaning.aside.code}</code>
          {meaning.aside.middle}
          <code>{meaning.aside.codeAlt}</code>
          {meaning.aside.after}
        </p>
      </div>
    </section>
  );
}
