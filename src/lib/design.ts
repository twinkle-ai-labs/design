/**
 * 디자인 시스템 — Aurora Ledger 의 말과 자료.
 *
 * 소개 화면의 구획과 `/design` 한 장이 같은 자료를 읽는다.
 *
 * **값의 정본은 루트의 `CLAUDE.md` 다.** 소개 화면의 색견본은 hex 를 적지 않고 화면의
 * 제 토큰(`var(--bg)` …)으로 칠한다 — 테마를 고르면 견본도 갈아입는다.
 * `/design` 의 색 두 판만은 라이트·다크를 **한 화면에 나란히** 보여야 해서 hex 가 필요하다.
 * 그래서 `PALETTE` 하나가 여기 산다 — 정본이 바뀌면 `globals.css` 와 함께 이 표도 고친다.
 */

export const DESIGN = {
  eyebrow: "디자인 시스템",
  title: "Aurora Ledger",
  reading: "오로라 · 장부",
  lead: "모든 앱이 입는 한 벌. 물타기 계산기의 목업에서 태어나 2026년 8월에 모든 제품의 기준이 됐습니다.",
  more: { label: "디자인 시스템 전부 보기", href: "/design/" },
  /** 이름의 뜻 — 두 낱말. 유래가 적힌 적이 없어 해석이다. */
  words: [
    {
      word: "Aurora",
      reading: "오로라 — 밤하늘의 빛",
      body: "보라에서 밝은 보라로 흐르는 그라데이션, 남보라를 한 방울 머금은 밤하늘 중성색, 별하늘. 이 시스템의 얼굴은 밤하늘의 빛입니다 — «난 스스로 빛난다»와 같은 방향을 봅니다.",
    },
    {
      word: "Ledger",
      reading: "장부 — 숫자를 읽는 화면",
      body: "첫 제품이 종목을 줄줄이 적는 매매 장부였습니다. 그래서 이 시스템은 «숫자를 읽는 화면»을 위해 있습니다 — 가장 큰 글자는 언제나 답이고, 금액은 자르지 않고 줄입니다.",
    },
  ],
  /** 소개 화면의 색견본 — 토큰 이름과 자리. 값은 화면이 제 토큰에서 꺼낸다. */
  swatches: [
    { token: "bg", label: "판" },
    { token: "surface", label: "카드" },
    { token: "sunken", label: "파인 면" },
    { token: "divider", label: "구분선" },
    { token: "text", label: "잉크" },
    { token: "text-sub", label: "물러난 잉크" },
    { token: "primary", label: "누를 것" },
    { token: "accent", label: "글자의 보라" },
  ],
  /** 사다리 — 칸의 수가 시스템의 크기다. */
  ladders: [
    { name: "격자", value: "8pt", note: "간격은 8의 배수, 반 칸은 필요한 자리에만" },
    { name: "둥글기", value: "11 · 14 · 18 · 24", note: "입력칸 · 키 · 카드 · 시트. 알약은 한 줄짜리에만" },
    { name: "글자", value: "11 → 40", note: "열 칸, 굵기는 넷 — 없는 칸은 부르지 않는다" },
    { name: "움직임", value: "150 · 250 · 350ms", note: "곡선은 둘 — 들어오는 것과 나가는 것" },
  ],
  /** 법 — 값이 아니라 판단. */
  rules: [
    "화려한 것은 지금 눌러야 할 것에만 — 그라데이션은 한 화면에 하나.",
    "값의 오르내림은 한국 시장 문법 — 오름 빨강, 내림 파랑. 색은 거들 뿐 말과 화살표가 방향을 진다.",
    "되돌릴 수 있는 일에 빨강을 쓰지 않는다 — 한 글자 지우기는 겁줄 일이 아니다.",
    "상자 안에 상자를 넣지 않는다 — 묶음은 테두리가 아니라 간격이 한다.",
    "가장 큰 글자는 답이어야 한다 — 입력 중인 값이 결과보다 크면 화면이 «두드리는 중»을 말한다.",
    "금액은 자르지 않는다 — 대신 글자가 사다리를 따라 한 칸씩 줄어 칸에 맞춘다.",
  ],
} as const;

/** 한 테마에서의 칩 한 장 — 바탕, 그 위의 잉크, 보여 줄 값. */
export type Face = { bg: string; ink: string; value: string; shadow?: string };
export type Chip = { token: string; light: Face; dark: Face };
/** 글자는 칩이 아니라 잉크 자체로 보인다. */
export type Ink = { token: string; light: { color: string; value: string }; dark: { color: string; value: string } };
/** 뜻 — 옅은 면 위에 제 색 글자. */
export type Sem = { token: string; label: string; light: Face; dark: Face };
/** 화장 — 점 하나와 이름. 테마마다 이름이 다르다(glow 가 가리키는 색이 다르다). */
export type Rail = { light: { dot: string; label: string }; dark: { dot: string; label: string } };

export type PaletteGroup =
  | { group: string; kind: "chips"; note?: string; swatches: Chip[] }
  | { group: string; kind: "ink"; note?: string; swatches: Ink[] }
  | { group: string; kind: "semantics"; note?: string; swatches: Sem[] }
  | { group: string; kind: "rail"; note?: string; swatches: Rail[] };

const MIST_INK = "#21182D";
const DUSK_INK = "#FAF7FF";

/** 정본의 두 판 — 묶음 다섯(바탕과 면 · 글자 · 브랜드 · 뜻 · 화장)과 그 꼴을 그대로 따른다. */
export const PALETTE: PaletteGroup[] = [
  {
    group: "바탕과 면",
    kind: "chips",
    note: "라이트는 Mist — 안개처럼 옅게 남보라를 머금은 사다리. 다크는 Dusk — 회색을 뒤집은 것이 아니라 제 사다리를 갖는다. 밤의 검정은 보랏빛이다.",
    swatches: [
      { token: "bg",      light: { bg: "#F8F6FC", ink: MIST_INK, value: "#F8F6FC" }, dark: { bg: "#110D19", ink: DUSK_INK, value: "#110D19" } },
      { token: "surface", light: { bg: "#FFFFFF", ink: MIST_INK, value: "#FFFFFF" }, dark: { bg: "#1B1526", ink: DUSK_INK, value: "#1B1526" } },
      { token: "sunken",  light: { bg: "#F5F4F8", ink: MIST_INK, value: "#F5F4F8" }, dark: { bg: "#251D32", ink: DUSK_INK, value: "#251D32" } },
      { token: "lifted",  light: { bg: "#FFFFFF", ink: MIST_INK, value: "#FFFFFF", shadow: "0 6px 16px rgba(45,29,69,.16)" }, dark: { bg: "#2C233A", ink: DUSK_INK, value: "#2C233A" } },
      { token: "key",     light: { bg: "#FFFFFF", ink: MIST_INK, value: "#FFFFFF" }, dark: { bg: "#20182C", ink: DUSK_INK, value: "#20182C" } },
      { token: "divider", light: { bg: "#EAE4F0", ink: MIST_INK, value: "#EAE4F0" }, dark: { bg: "#352A42", ink: DUSK_INK, value: "#352A42" } },
    ],
  },
  {
    group: "글자",
    kind: "ink",
    swatches: [
      { token: "text",      light: { color: "#21182D", value: "#21182D" }, dark: { color: "#FAF7FF", value: "#FAF7FF" } },
      { token: "textSub",   light: { color: "#71687D", value: "#71687D" }, dark: { color: "#AEA3BA", value: "#AEA3BA" } },
      { token: "textFaint", light: { color: "#A79EAF", value: "#A79EAF" }, dark: { color: "#746A80", value: "#746A80" } },
    ],
  },
  {
    group: "브랜드",
    kind: "chips",
    note: "primary 는 채운 면의 보라, accent 는 글자·아이콘·테두리의 보라. 다크에서 둘이 갈리는 이유는 같은 보라가 면으로는 충분히 밝은데 글자로는 어두워서다.",
    swatches: [
      { token: "primary",     light: { bg: "#7040D9", ink: "#FFFFFF", value: "#7040D9" }, dark: { bg: "#986CF4", ink: "#FFFFFF", value: "#986CF4" } },
      { token: "accent",      light: { bg: "#EEE7FC", ink: "#7040D9", value: "#7040D9 · 글자" }, dark: { bg: "rgba(183,154,255,.12)", ink: "#B79AFF", value: "#B79AFF · 글자" } },
      { token: "primarySoft", light: { bg: "#EEE7FC", ink: MIST_INK, value: "#EEE7FC" }, dark: { bg: "rgba(183,154,255,.12)", ink: DUSK_INK, value: "accent · 12%" } },
      { token: "gradient",    light: { bg: "linear-gradient(135deg,#7040D9,#8550E4)", ink: "#FFFFFF", value: "→ #8550E4" }, dark: { bg: "linear-gradient(135deg,#986CF4,#8550E4)", ink: "#FFFFFF", value: "→ #8550E4" } },
    ],
  },
  {
    group: "뜻",
    kind: "semantics",
    note: "오름(rise)과 위험(danger)은 다크에서 같은 빨강이지만 다른 토큰이다 — «값이 올랐다»와 «되돌릴 수 없다»는 다른 말이다. 옅은 면은 라이트 8% · 다크 12% — «옅게»는 다크를 보고 하는 말이다.",
    swatches: [
      { token: "danger", label: "되돌릴 수 없는 것", light: { bg: "rgba(180,35,24,.08)", ink: "#B42318", value: "#B42318" }, dark: { bg: "rgba(255,155,145,.12)", ink: "#FF9B91", value: "#FF9B91" } },
      { token: "▲ rise", label: "오름",             light: { bg: "rgba(217,45,32,.08)", ink: "#D92D20", value: "#D92D20" }, dark: { bg: "rgba(255,155,145,.12)", ink: "#FF9B91", value: "#FF9B91" } },
      { token: "▼ fall", label: "내림",             light: { bg: "rgba(39,99,196,.08)", ink: "#2763C4", value: "#2763C4" }, dark: { bg: "rgba(141,185,255,.12)", ink: "#8DB9FF", value: "#8DB9FF" } },
    ],
  },
  {
    group: "화장",
    kind: "rail",
    swatches: [
      { light: { dot: "rgba(112,64,217,.2)", label: "glow · primary 20%" }, dark: { dot: "rgba(183,154,255,.14)", label: "glow · accent 14%" } },
      { light: { dot: "rgba(45,29,69,.16)",  label: "shadow · 남보라 먹" },  dark: { dot: "rgba(0,0,0,.42)", label: "shadow · 검정 먹" } },
      { light: { dot: "rgba(33,24,45,.52)",  label: "scrim · 52%" },        dark: { dot: "rgba(0,0,0,.62)", label: "scrim · 62%" } },
      { light: { dot: "rgba(45,29,69,.24)",  label: "outlineLifted" },      dark: { dot: "transparent", label: "outlineLifted · 없음" } },
    ],
  },
];

export const ALPHA = [
  { token: "strong", value: ".88", use: "한 겹 물린 글자" },
  { token: "soft", value: ".70", use: "물러난 것" },
  { token: "half", value: ".50", use: "카드 안의 선" },
  { token: "ring", value: ".35", use: "강조 테두리" },
  { token: "tint", value: ".20", use: "옅은 면·손잡이" },
  { token: "wash", value: ".08", use: "가장 옅은 면 — 다크는 .12" },
] as const;

export const SPACING = [
  { token: "tight", px: 2 }, { token: "s0", px: 4 }, { token: "s0h", px: 6 }, { token: "s1", px: 8 },
  { token: "s1h", px: 12 }, { token: "s2", px: 16 }, { token: "s2h", px: 20 }, { token: "s3", px: 24 },
  { token: "s4", px: 32 }, { token: "s5", px: 40 }, { token: "s6", px: 48 },
] as const;

export const ICONS = [
  { token: "xs", px: 12 }, { token: "sm", px: 16 }, { token: "md", px: 20 }, { token: "lg", px: 26 },
] as const;

export const CONTROLS = [
  { token: "rowHeight", px: 48, use: "목록의 한 줄" },
  { token: "primaryButtonHeight", px: 48, use: "저장 버튼" },
  { token: "keypadKeyHeight", px: 52, use: "키패드의 키" },
  { token: "keypadGap", px: 8, use: "키 사이" },
] as const;

export const STROKES = [
  { token: "hair", px: 1, use: "헤어라인 — 구분선" },
  { token: "ring", px: 1.5, use: "강조 테두리 — 포커스 · 골라진 것" },
] as const;

export const ELEVATION = [
  { token: "raised", px: 4, use: "카드" },
  { token: "floating", px: 10, use: "떠오른 것 · 호버" },
  { token: "drawer", px: 20, use: "서랍 · 시트" },
] as const;

export const RADIUS = [
  { token: "small", px: 11, use: "입력칸" },
  { token: "medium", px: 14, use: "안쪽 패널 · 키" },
  { token: "large", px: 18, use: "카드" },
  { token: "extraLarge", px: 24, use: "시트 · 모달" },
  { token: "drawer", px: 20, use: "키패드 서랍 — 시트보다 한 칸 낮다" },
  { token: "pill", px: 999, use: "배지 · 버튼 — 한 줄이 통째로 둥근 것에만" },
] as const;

export const MOTION = {
  durations: [
    { token: "fast", ms: 150 }, { token: "base", ms: 250 }, { token: "slow", ms: 350 },
  ],
  curves: [
    { token: "ease", value: "cubic-bezier(.25, 1, .5, 1)", use: "들어오고 움직이는 것" },
    { token: "exit", value: "cubic-bezier(.4, 0, 1, 1)", use: "나가는 것 — 한 곡선으로 여닫으면 나가는 것이 화면 끝에서 기어간다" },
  ],
  note: "이름을 ease-in/out 으로 짓지 않는다 — CSS 에서 그 말은 뜻이 뒤집혀 있어 반드시 한 번은 잘못 읽힌다. 쓰임으로 부른다.",
} as const;

export const TYPE = [
  { slot: "displayLarge", px: 40, weight: 700, lh: 1.25, tracking: -0.03, sample: "1,234,567원", use: "큰 숫자" },
  { slot: "displayMedium", px: 36, weight: 700, lh: 1.25, tracking: -0.03, sample: "1,234,567원", use: "" },
  { slot: "displaySmall", px: 32, weight: 700, lh: 1.25, tracking: -0.03, sample: "1,234,567원", use: "" },
  { slot: "headlineLarge", px: 28, weight: 700, lh: 1.25, tracking: -0.03, sample: "새 평단가 58,333원", use: "두 번째 숫자" },
  { slot: "headlineMedium", px: 24, weight: 700, lh: 1.25, tracking: -0.02, sample: "새 평단가 58,333원", use: "" },
  { slot: "headlineSmall", px: 24, weight: 500, lh: 1.25, tracking: -0.02, sample: "새 평단가 58,333원", use: "같은 칸, 힘을 뺀 것" },
  { slot: "titleLarge", px: 20, weight: 700, lh: 1.25, tracking: -0.02, sample: "물타기 계산기", use: "제목" },
  { slot: "titleMedium", px: 16, weight: 600, lh: 1.35, tracking: -0.01, sample: "삼성전자 · 보유 120주", use: "값" },
  { slot: "titleSmall", px: 14, weight: 600, lh: 1.35, tracking: -0.01, sample: "삼성전자 · 보유 120주", use: "" },
  { slot: "bodyLarge", px: 16, weight: 400, lh: 1.65, tracking: 0, sample: "평단가가 16.67% 낮아졌어요. 같은 값이면 이름도 같다.", use: "읽는 글" },
  { slot: "bodyMedium", px: 14, weight: 400, lh: 1.65, tracking: 0, sample: "평단가가 16.67% 낮아졌어요. 같은 값이면 이름도 같다.", use: "" },
  { slot: "bodySmall", px: 12, weight: 400, lh: 1.35, tracking: 0, sample: "평단가가 16.67% 낮아졌어요.", use: "촘촘한 본문" },
  { slot: "labelLarge", px: 14, weight: 600, lh: 1.35, tracking: -0.01, sample: "저장", use: "이름표" },
  { slot: "labelMedium", px: 12, weight: 500, lh: 1.35, tracking: 0, sample: "▼ 10,000원", use: "" },
  { slot: "labelSmall", px: 11, weight: 500, lh: 1.35, tracking: 0, sample: "코인", use: "" },
] as const;

export const HISTORY = [
  { when: "2026-08-09", what: "태어남", why: "물타기 계산기의 목업을 다시 짜며 여러 스킨 중 보라 한 벌에 «Aurora Ledger» 라는 이름이 붙었다." },
  { when: "그 사이", what: "되돌린 것 — 중성색", why: "순수 회색으로 걷어 봤다가 되돌렸다. 브랜드의 공기가 빠져 누가 만든 화면인지 말하지 못했다. 그래서 남보라 한 방울만 머금는다." },
  { when: "그 사이", what: "되돌린 것 — 등락색", why: "보라 하나로 통일해 봤다가 되돌렸다. 한 화면에 오르내리는 값이 하나뿐이면 «이 색이 좋은 소식인지»를 배울 것이 없다. 오름 빨강 · 내림 파랑." },
  { when: "그 사이", what: "뒤집힌 것 — 화려함", why: "예전엔 큰 숫자에 그라데이션, «다음»에는 금지였다. 뒤집혔다. 화려함은 «읽을 것»이 아니라 «누를 것»의 신호다." },
  { when: "2026-08-18", what: "모든 제품의 기준으로", why: "«남보라를 머금는다» — 값이 고정되고 계산기에 이식됐다." },
  { when: "2026-08-22", what: "사다리를 다시 뽑음", why: "색만 사다리였던 토큰에 불투명도·간격·크기·고도·움직임을 더했다." },
  { when: "2026-08-23", what: "이름의 뜻을 적음", why: "유래가 적힌 적이 없어 해석을 남겼다. 소개 화면에 이 장이 섰다." },
] as const;
