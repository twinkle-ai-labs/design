import DocsNav from "@/components/DocsNav";
import StarMark from "@/components/StarMark";
import Starfield from "@/components/Starfield";
import {
  ALPHA,
  CONTROLS,
  DESIGN,
  ELEVATION,
  HISTORY,
  ICONS,
  MOTION,
  PALETTE,
  RADIUS,
  SPACING,
  STROKES,
  TYPE,
} from "@/lib/design";
import styles from "./design.module.css";

export const metadata = {
  title: "Aurora Ledger",
  description:
    "Twinkle AI Labs의 모든 제품이 공유하는 디자인 시스템, Aurora Ledger의 토큰과 원칙을 소개합니다.",
};

/** 구획의 머리 — 소개 화면과 같은 꼴. 오른쪽에 토큰의 자리를 단다. */
function Head({ kicker, title, code }: { kicker: string; title: string; code?: string }) {
  return (
    <header className={styles.head}>
      <p className={styles.kicker}>{kicker}</p>
      <div className={styles.headRow}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {code ? <code className={styles.where}>{code}</code> : null}
      </div>
    </header>
  );
}

/** 색 한 판 — 라이트나 다크. 두 판이 한 화면에 나란히 서야 해서 값은 hex 다. */
function Pane({ theme }: { theme: "light" | "dark" }) {
  const isDark = theme === "dark";
  return (
    <div className={`${styles.pane} ${isDark ? styles.paneDark : styles.paneLight}`}>
      <p className={styles.paneName}>{isDark ? "Dark · Dusk" : "Light · Mist"}</p>
      {PALETTE.map((g) => (
        <div key={g.group} className={styles.paneGroup}>
          <p className={styles.paneGroupName}>{g.group}</p>

          {g.kind === "chips" && (
            <ul className={styles.chips}>
              {g.swatches.map((sw) => {
                const f = sw[theme];
                return (
                  <li
                    key={sw.token}
                    className={styles.chip}
                    style={{ background: f.bg, color: f.ink, boxShadow: f.shadow }}
                  >
                    <code className={styles.chipToken}>{sw.token}</code>
                    <span className={styles.chipValue}>{f.value}</span>
                  </li>
                );
              })}
            </ul>
          )}

          {g.kind === "ink" && (
            <ul className={styles.inks}>
              {g.swatches.map((sw) => {
                const f = sw[theme];
                return (
                  <li key={sw.token} className={styles.ink} style={{ color: f.color }}>
                    {sw.token}
                    <small className={styles.inkValue}>{f.value}</small>
                  </li>
                );
              })}
            </ul>
          )}

          {g.kind === "semantics" && (
            <ul className={styles.semantics}>
              {g.swatches.map((sw) => {
                const f = sw[theme];
                return (
                  <li key={sw.token} className={styles.sem} style={{ background: f.bg, color: f.ink }}>
                    <b className={styles.semToken}>{sw.token}</b>
                    <small className={styles.semValue}>{f.value}</small>
                    <span>{sw.label}</span>
                  </li>
                );
              })}
            </ul>
          )}

          {g.kind === "rail" && (
            <ul className={styles.rail}>
              {g.swatches.map((sw) => {
                const f = sw[theme];
                return (
                  <li key={f.label} className={styles.railItem}>
                    <i
                      className={styles.railDot}
                      style={{ background: f.dot }}
                      aria-hidden="true"
                    />
                    {f.label}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default function DesignPage() {
  return (
    <>
      {/* ── 머리 ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <Starfield
          className={styles.heroStars}
          seed={20260824}
          height="58rem"
          dots={92}
          sparkles={12}
          shooting={3}
          keepout={{ x: [15, 82], y: [18, 62] }}
        />
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.kicker}>{DESIGN.eyebrow}</p>
              <h1 className={styles.title}>{DESIGN.title}</h1>
              <p className={styles.reading}>{DESIGN.reading}</p>
              <p className={styles.lead}>{DESIGN.lead}</p>
              <div className={styles.rule} aria-hidden="true" />
              <p className={styles.canon}>
                색과 글자, 간격과 움직임까지 하나의 기준으로 연결합니다. 어떤 제품을 만나더라도
                익숙하고 분명한 경험을 제공하는 것이 Aurora Ledger의 역할입니다.
              </p>
            </div>
            <aside className={styles.heroPanel} aria-label="디자인 시스템 요약">
              <p className={styles.panelEyebrow}>System overview</p>
              <strong className={styles.panelTitle}>하나의 언어로<br />모든 제품을 잇습니다.</strong>
              <dl className={styles.stats}>
                <div><dd>2</dd><dt>Color modes</dt></div>
                <div><dd>7</dd><dt>Token groups</dt></div>
                <div><dd>8<span>pt</span></dd><dt>Base grid</dt></div>
                <div><dd>6</dd><dt>Principles</dt></div>
              </dl>
              <span className={styles.panelNote}>Mist / Dusk · v2026.08</span>
            </aside>
          </div>
        </div>
      </section>

      <DocsNav />

      {/* ── 이름의 뜻 ──────────────────────────────────────── */}
      <section id="meaning" className={`${styles.section} ${styles.reveal}`}>
        <div className={styles.shell}>
          <Head kicker="Identity" title="빛과 숫자를 위한 디자인" />
          <p className={styles.body}>
            Aurora Ledger는 2026년 8월, 첫 제품의 화면을 다듬는 과정에서 시작했습니다.
            이름에는 Twinkle AI Labs가 만들고 싶은 화면의 두 가지 성격이 담겨 있습니다.
          </p>
          <ul className={styles.words}>
            {DESIGN.words.map((w) => (
              <li key={w.word} className={styles.wordPanel}>
                <h3 className={styles.word}>
                  <StarMark className={styles.wordStar} />
                  {w.word}
                </h3>
                <p className={styles.wordReading}>{w.reading}</p>
                <p className={styles.body}>{w.body}</p>
              </li>
            ))}
          </ul>
          <p className={styles.aside}>
            공식 명칭은 <code>Aurora Ledger</code>입니다. 제품 코드에서는 <code>Twinkle*</code> 접두사를
            사용해 브랜드와 구현의 이름을 일관되게 연결합니다.
          </p>
        </div>
      </section>

      {/* ── 색 ─────────────────────────────────────────────── */}
      <section id="colors" className={`${styles.section} ${styles.band} ${styles.reveal}`}>
        <div className={styles.shell}>
          <Head kicker="Foundation" title="색은 역할로 선택합니다" code="colors" />
          <p className={styles.body}>
            화면에서는 색상값 대신 역할을 지정합니다. 같은 역할이 라이트와 다크 모드에서 알맞은 색으로
            바뀌기 때문에 대비와 브랜드 인상이 함께 유지됩니다. 선명한 보라는 사용자의 다음 행동을
            안내할 때 가장 먼저 사용합니다.
          </p>
          <div className={styles.panes}>
            <Pane theme="light" />
            <Pane theme="dark" />
          </div>
          <ul className={styles.notes}>
            {PALETTE.filter((g) => g.note).map((g) => (
              <li key={g.group} className={styles.note}>
                <StarMark className={styles.noteStar} />
                <span>
                  <strong>{g.group}</strong> — {g.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 불투명도 ───────────────────────────────────────── */}
      <section id="alpha" className={`${styles.section} ${styles.reveal}`}>
        <div className={styles.shell}>
          <Head kicker="Foundation" title="강약을 만드는 여섯 단계" code="alpha" />
          <p className={styles.body}>
            불투명도는 정보의 우선순위와 표면의 깊이를 조절합니다. 임의의 값을 추가하지 않고 여섯 단계
            안에서 선택해, 서로 다른 제품에서도 같은 수준의 강조가 같은 인상으로 보이게 합니다.
          </p>
          <ul className={styles.alpha}>
            {ALPHA.map((a) => (
              <li key={a.token} className={styles.alphaStep}>
                <span className={styles.alphaSwatch} style={{ opacity: Number(a.value) }} />
                <code className={styles.token}>{a.token}</code>
                <span className={styles.big}>{a.value}</span>
                <span className={styles.use}>{a.use}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 간격 ───────────────────────────────────────────── */}
      <section id="spacing" className={`${styles.section} ${styles.band} ${styles.reveal}`}>
        <div className={styles.shell}>
          <Head kicker="Foundation" title="리듬을 만드는 8pt 격자" code="spacing" />
          <p className={styles.body}>기본 간격은 8의 배수를 따릅니다. 2·4·6px은 정렬과 미세 조정처럼 꼭 필요한 경우에만 사용합니다.</p>
          <ol className={styles.spacing}>
            {SPACING.map((s) => (
              <li key={s.token} className={styles.spaceRow}>
                <code className={styles.token}>{s.token}</code>
                <span className={styles.num}>{s.px}</span>
                <span className={styles.spaceBar} style={{ width: `${s.px}px` }} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 크기 ───────────────────────────────────────────── */}
      <section id="sizes" className={`${styles.section} ${styles.reveal}`}>
        <div className={styles.shell}>
          <Head kicker="Foundation" title="크기와 형태의 기준" code="iconSize · elevation · shapes · controlSize · stroke" />
          <div className={styles.sizeGrid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>아이콘</h3>
              <ul className={styles.icons}>
                {ICONS.map((i) => (
                  <li key={i.token} className={styles.icon}>
                    <span className={styles.iconBox} style={{ width: i.px, height: i.px }} />
                    <code className={styles.token}>{i.token}</code>
                    <span className={styles.num}>{i.px}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>고도</h3>
              <ul className={styles.elev}>
                {ELEVATION.map((e) => (
                  <li
                    key={e.token}
                    className={styles.elevBox}
                    style={{ boxShadow: `var(--shadow-${e.token})` }}
                  >
                    <code className={styles.token}>{e.token}</code>
                    <span className={styles.num}>{e.px}</span>
                    <span className={styles.use}>{e.use}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${styles.card} ${styles.cardWide}`}>
              <h3 className={styles.cardTitle}>모양</h3>
              <ul className={styles.shapes}>
                {RADIUS.map((r) => (
                  <li key={r.token} className={styles.shape}>
                    <span
                      className={`${styles.shapeBox} ${r.px === 999 ? styles.shapePill : ""}`}
                      style={{ borderRadius: r.px }}
                    />
                    <code className={styles.token}>{r.token}</code>
                    <span className={styles.num}>{r.px}</span>
                    <span className={styles.use}>{r.use}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>컨트롤</h3>
              <ul className={styles.rows}>
                {CONTROLS.map((c) => (
                  <li key={c.token} className={styles.row}>
                    <code className={styles.token}>{c.token}</code>
                    <span className={styles.num}>{c.px}</span>
                    <span className={styles.use}>{c.use}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>선</h3>
              <ul className={styles.rows}>
                {STROKES.map((st) => (
                  <li key={st.token} className={styles.row}>
                    <code className={styles.token}>{st.token}</code>
                    <span className={styles.num}>{st.px}</span>
                    <span className={styles.use}>{st.use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 움직임 ─────────────────────────────────────────── */}
      <section id="motion" className={`${styles.section} ${styles.band} ${styles.reveal}`}>
        <div className={styles.shell}>
          <Head kicker="Interaction" title="빠르고 자연스러운 움직임" code="motion" />
          <p className={styles.body}>{MOTION.note}</p>
          <div className={styles.motionGrid}>
            <ul className={styles.durations}>
              {MOTION.durations.map((d) => (
                <li key={d.token} className={styles.duration}>
                  <code className={styles.token}>{d.token}</code>
                  <span className={styles.big}>{d.ms}<small>ms</small></span>
                </li>
              ))}
            </ul>
            <div className={`${styles.card} ${styles.motionCard}`} tabIndex={0}>
              <p className={styles.use}>카드에 포인터를 올려 진입과 퇴장 곡선의 차이를 확인해 보세요.</p>
              {MOTION.curves.map((c) => (
                <div key={c.token} className={styles.curve}>
                  <span className={`${styles.track} ${c.token === "exit" ? styles.trackExit : styles.trackEase}`}>
                    <i />
                  </span>
                  <code className={styles.token}>{c.token}</code>
                  <span className={styles.use}>
                    {c.value} · {c.use}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 글자 ───────────────────────────────────────────── */}
      <section id="type" className={`${styles.section} ${styles.reveal}`}>
        <div className={styles.shell}>
          <Head kicker="Foundation" title="숫자와 문장을 또렷하게" code="typography · Pretendard" />
          <p className={styles.body}>
            Pretendard를 기준으로 숫자, 제목, 본문, 레이블에 필요한 15가지 역할을 정의합니다.
            큰 글자는 핵심 결과와 메시지에, 작은 글자는 맥락과 상태를 설명하는 데 사용합니다.
            정의되지 않은 크기와 굵기는 사용하지 않으며, 한글 낱말은 줄 중간에서 나누지 않습니다.
          </p>
          <ul className={styles.type}>
            {TYPE.map((t, i) => (
              <li key={i} className={styles.typeRow}>
                <span
                  className={styles.specimen}
                  style={{ fontSize: t.px, fontWeight: t.weight, lineHeight: t.lh, letterSpacing: `${t.tracking}em` }}
                >
                  {t.sample}
                </span>
                <span className={styles.typeMeta}>
                  <code className={styles.token}>{t.slot}</code>
                  <span className={styles.use}>
                    {t.px} · {t.weight} · {t.lh}
                    {t.tracking ? ` · ${t.tracking}em` : ""}
                    {t.use ? ` · ${t.use}` : ""}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 법 ─────────────────────────────────────────────── */}
      <section id="rules" className={`${styles.section} ${styles.band} ${styles.reveal}`}>
        <div className={styles.shell}>
          <Head kicker="Principles" title="좋은 화면을 고르는 여섯 원칙" />
          <ul className={styles.notes}>
            {DESIGN.rules.map((r) => (
              <li key={r} className={styles.note}>
                <StarMark className={styles.noteStar} />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 히스토리 ───────────────────────────────────────── */}
      <section id="history" className={`${styles.section} ${styles.reveal}`}>
        <div className={styles.shell}>
          <Head kicker="History" title="결정과 배움을 함께 기록합니다" />
          <ol className={styles.history}>
            {HISTORY.map((h, i) => (
              <li key={i} className={styles.event}>
                <span className={styles.when}>{h.when}</span>
                <span className={styles.what}>{h.what}</span>
                <p className={styles.body}>{h.why}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
