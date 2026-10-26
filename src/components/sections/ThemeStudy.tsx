"use client";

import { useState } from "react";
import StarMark from "@/components/StarMark";
import styles from "./ThemeStudy.module.css";

export default function ThemeStudy() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  return (
    <div className={styles.study}>
      <div className={styles.toolbar}>
        <span>두 가지 빛, 하나의 기준</span>
        <div className={styles.switcher} role="group" aria-label="색상 견본 테마">
          <button type="button" aria-pressed={mode === "light"} onClick={() => setMode("light")}>
            Mist
          </button>
          <button type="button" aria-pressed={mode === "dark"} onClick={() => setMode("dark")}>
            Dusk
          </button>
        </div>
      </div>
      <div className={styles.canvas} style={{ colorScheme: mode }}>
        <div className={styles.canvasHead}>
          <StarMark gradientId="study-star" />
          <span>Aurora Ledger</span>
          <span>{mode === "light" ? "01" : "02"} / 02</span>
        </div>
        <div className={styles.composition}>
          <div className={styles.orbit} aria-hidden="true" />
          <div className={styles.glassStar} aria-hidden="true">
            <StarMark gradientId="study-sculpture" />
          </div>
          <span className={styles.specimen}>Aa</span>
          <span className={styles.specimenLabel}>
            Pretendard
            <br />
            빛과 숫자의 균형
          </span>
          <span className={styles.note}>
            8 pt
            <br />
            <small>작은 간격의 질서</small>
          </span>
        </div>
        <div
          className={styles.palette}
          role="img"
          aria-label={
            mode === "light" ? "밝은 보라 계열의 Mist 팔레트" : "짙은 보라 계열의 Dusk 팔레트"
          }
        >
          {[0, 1, 2, 3, 4].map((n) => (
            <i key={n} />
          ))}
        </div>
        <div className={styles.canvasFoot}>
          <span>{mode === "light" ? "MIST · 밝고 편안한 바탕" : "DUSK · 밤에 어울리는 깊이"}</span>
          <span aria-hidden="true">✦</span>
        </div>
      </div>
      <p className={styles.hint}>Mist와 Dusk를 눌러 같은 디자인의 다른 표정을 살펴보세요.</p>
    </div>
  );
}
