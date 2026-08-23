"use client";

import { useEffect, useState } from "react";
import styles from "./DocsNav.module.css";

const ITEMS = [
  ["meaning", "이름"], ["colors", "색"], ["alpha", "불투명도"],
  ["spacing", "간격"], ["sizes", "크기"], ["motion", "움직임"],
  ["type", "글자"], ["rules", "원칙"], ["history", "연혁"],
] as const;

export default function DocsNav() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const sections = ITEMS.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    let frame = 0;

    const update = () => {
      frame = 0;
      if (window.scrollY < 32) {
        setActive(null);
        return;
      }

      const guide = window.innerHeight * 0.34;
      const current = sections.filter((section) => section.getBoundingClientRect().top <= guide).at(-1);
      setActive(current?.id ?? null);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className={styles.nav} aria-label="디자인 시스템 목차">
      <span className={styles.label}>On this page</span>
      <div className={styles.items}>
        {ITEMS.map(([id, label], index) => (
          <a key={id} href={`#${id}`}
            className={`${styles.item} ${active === id ? styles.active : ""}`}
            aria-current={active === id ? "location" : undefined}>
            <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
            <span>{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
