import { PALETTE, type Chip, type Ink, type Rail, type Sem } from "@/lib/design";
import styles from "@/app/design.module.css";

/**
 * 색 한 판 — 라이트나 다크.
 *
 * 두 판이 **한 화면에 나란히** 서야 하므로, 여기서만은 토큰이 아니라 hex 를 쓴다.
 * 판 하나가 제 테마의 값을 그리고, 어느 테마를 보고 있든 나머지 한 판이 옆에 남는다 —
 * 그래서 「라이트에서는 이렇고 다크에서는 저렇다」를 화면을 바꾸지 않고 볼 수 있다.
 */
type PaneTheme = "light" | "dark";

function ChipList({ swatches, theme }: { swatches: Chip[]; theme: PaneTheme }) {
  return (
    <ul className={styles.chips}>
      {swatches.map((swatch) => {
        const face = swatch[theme];
        return (
          <li
            key={swatch.token}
            className={styles.chip}
          >
            <i
              className={styles.chipSwatch}
              style={{ background: face.bg, boxShadow: face.shadow }}
              aria-hidden="true"
            />
            <span className={styles.chipCopy}>
              <code className={styles.chipToken}>{swatch.token}</code>
              <span className={styles.chipValue}>{face.value}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/** 글자는 칩이 아니라 잉크 자체로 보인다 — 바탕을 깔면 대비가 그 바탕의 것이 된다. */
function InkList({ swatches, theme }: { swatches: Ink[]; theme: PaneTheme }) {
  return (
    <ul className={styles.inks}>
      {swatches.map((swatch) => {
        const face = swatch[theme];
        return (
          <li key={swatch.token} className={styles.ink} style={{ color: face.color }}>
            {swatch.token}
            <small className={styles.inkValue}>{face.value}</small>
          </li>
        );
      })}
    </ul>
  );
}

function SemanticList({ swatches, theme }: { swatches: Sem[]; theme: PaneTheme }) {
  return (
    <ul className={styles.semantics}>
      {swatches.map((swatch) => {
        const face = swatch[theme];
        return (
          <li
            key={swatch.token}
            className={styles.sem}
            style={{ background: face.bg, color: face.ink }}
          >
            <b className={styles.semToken}>{swatch.token}</b>
            <small className={styles.semValue}>{face.value}</small>
            <span>{swatch.label}</span>
          </li>
        );
      })}
    </ul>
  );
}

/** 화장 — 점 하나와 이름. 테마마다 이름이 다르다(glow 가 가리키는 색이 다르다). */
function RailList({ swatches, theme }: { swatches: Rail[]; theme: PaneTheme }) {
  return (
    <ul className={styles.rail}>
      {swatches.map((swatch) => {
        const face = swatch[theme];
        return (
          <li key={face.label} className={styles.railItem}>
            <i className={styles.railDot} style={{ background: face.dot }} aria-hidden="true" />
            {face.label}
          </li>
        );
      })}
    </ul>
  );
}

export default function ThemePane({ theme }: { theme: PaneTheme }) {
  const isDark = theme === "dark";

  return (
    <div className={`${styles.pane} ${isDark ? styles.paneDark : styles.paneLight}`}>
      <p className={styles.paneName}>{isDark ? "Dark · Dusk" : "Light · Mist"}</p>
      {PALETTE.map((group) => (
        <div key={group.group} className={styles.paneGroup}>
          <p className={styles.paneGroupName}>{group.group}</p>
          {group.kind === "chips" ? <ChipList swatches={group.swatches} theme={theme} /> : null}
          {group.kind === "ink" ? <InkList swatches={group.swatches} theme={theme} /> : null}
          {group.kind === "semantics" ? (
            <SemanticList swatches={group.swatches} theme={theme} />
          ) : null}
          {group.kind === "rail" ? <RailList swatches={group.swatches} theme={theme} /> : null}
        </div>
      ))}
    </div>
  );
}
