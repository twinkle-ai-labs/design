"use client";

import { DOC_SECTIONS } from "@/lib/design";
import { useAppSelector } from "@/store/hooks";
import { selectActiveSectionId } from "@/store/docsNavSlice";
import styles from "./DocsNav.module.css";

/**
 * 이 장의 목차 — 읽고 있는 칸이 켜진다.
 *
 * **재지 않는다.** 어느 칸을 켤지는 `store/effects` 가 스크롤을 듣고 정해 실어 주고,
 * 여기는 그 값을 읽어 그린다. 목차가 제 손으로 창을 들으면 스크롤을 듣는 손이
 * 화면에 둘이 되고, 두 손은 곧 서로 다른 기준을 갖는다.
 */
export default function DocsNav() {
  const activeSectionId = useAppSelector(selectActiveSectionId);

  return (
    <nav className={styles.nav} aria-label="디자인 시스템 목차">
      <span className={styles.label}>On this page</span>
      <div className={styles.items}>
        {DOC_SECTIONS.map((section, index) => {
          const isActive = section.id === activeSectionId;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`${styles.item} ${isActive ? styles.active : ""}`}
              aria-current={isActive ? "location" : undefined}
            >
              <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
              <span>{section.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
