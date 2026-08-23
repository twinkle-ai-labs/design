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
  lead: "Twinkle AI Labs의 모든 제품이 같은 목소리로 말하고, 같은 방식으로 움직이게 하는 디자인 시스템입니다.",
  more: { label: "디자인 시스템 전부 보기", href: "/design/" },
  /** 이름의 뜻 — 두 낱말. 유래가 적힌 적이 없어 해석이다. */
  words: [
    {
      word: "Aurora",
      reading: "어둠 속에서 방향을 만드는 빛",
      body: "깊은 남보라와 밝은 보라가 만드는 빛은 브랜드의 표정입니다. 장식에 머무르지 않고, 사용자가 지금 봐야 할 정보와 다음에 할 행동을 자연스럽게 안내합니다.",
    },
    {
      word: "Ledger",
      reading: "복잡한 값을 정확하게 읽는 기록",
      body: "첫 제품은 투자 계산 결과를 보여주는 도구였습니다. 그 출발점은 지금도 남아 있습니다. 숫자는 잘리지 않고, 결과는 가장 먼저 보이며, 중요한 변화는 색뿐 아니라 말과 기호로도 전달합니다.",
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
    "강한 시각 효과는 가장 중요한 행동 하나에 집중합니다. 그라데이션은 한 화면에 하나만 사용합니다.",
    "상승과 하락은 한국 금융 서비스의 관습을 따르되, 색상과 함께 화살표와 문구를 제공해 의미를 분명히 합니다.",
    "위험 색상은 되돌릴 수 없는 행동에만 사용합니다. 수정하거나 취소할 수 있는 행동에 불필요한 불안을 만들지 않습니다.",
    "정보의 관계는 상자를 겹치는 대신 간격과 정렬로 표현합니다. 화면의 구조는 단순할수록 빠르게 읽힙니다.",
    "가장 큰 글자는 사용자가 찾는 답을 보여줍니다. 입력보다 결과가 먼저 읽히도록 정보의 순서를 설계합니다.",
    "금액과 핵심 수치는 생략하지 않습니다. 공간이 부족하면 정해진 글자 단계 안에서 크기를 조절해 전체 값을 보여줍니다.",
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
    note: "라이트 모드 Mist는 밝은 바탕에 남보라의 온기를 더합니다. 다크 모드 Dusk는 라이트 색상을 단순히 반전하지 않고, 밤에 맞는 독립적인 명도와 대비를 사용합니다.",
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
    note: "primary는 버튼처럼 채워진 면에, accent는 글자·아이콘·테두리에 사용합니다. 다크 모드에서는 각 용도에 필요한 대비가 달라 두 색을 분리합니다.",
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
    note: "상승과 위험은 비슷한 빨강을 사용해도 의미가 다르므로 별도의 토큰으로 관리합니다. 옅은 배경은 라이트 8%, 다크 12%를 기준으로 체감 대비를 맞춥니다.",
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
  { token: "strong", value: ".88", use: "강조를 낮춘 본문" },
  { token: "soft", value: ".70", use: "보조 정보" },
  { token: "half", value: ".50", use: "내부 구분선" },
  { token: "ring", value: ".35", use: "강조 테두리" },
  { token: "tint", value: ".20", use: "은은한 배경과 핸들" },
  { token: "wash", value: ".08", use: "가장 옅은 배경 · 다크 .12" },
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
  { token: "rowHeight", px: 48, use: "목록 항목의 기본 높이" },
  { token: "primaryButtonHeight", px: 48, use: "주요 버튼의 기본 높이" },
  { token: "keypadKeyHeight", px: 52, use: "숫자 키의 높이" },
  { token: "keypadGap", px: 8, use: "키 사이의 간격" },
] as const;

export const STROKES = [
  { token: "hair", px: 1, use: "영역을 나누는 기본선" },
  { token: "ring", px: 1.5, use: "포커스와 선택 상태" },
] as const;

export const ELEVATION = [
  { token: "raised", px: 4, use: "기본 카드" },
  { token: "floating", px: 10, use: "호버와 플로팅 요소" },
  { token: "drawer", px: 20, use: "드로어와 바텀 시트" },
] as const;

export const RADIUS = [
  { token: "small", px: 11, use: "입력 필드" },
  { token: "medium", px: 14, use: "내부 패널과 키" },
  { token: "large", px: 18, use: "기본 카드" },
  { token: "extraLarge", px: 24, use: "시트와 모달" },
  { token: "drawer", px: 20, use: "키패드 드로어" },
  { token: "pill", px: 999, use: "배지와 한 줄 버튼" },
] as const;

export const MOTION = {
  durations: [
    { token: "fast", ms: 150 }, { token: "base", ms: 250 }, { token: "slow", ms: 350 },
  ],
  curves: [
    { token: "ease", value: "cubic-bezier(.25, 1, .5, 1)", use: "나타나거나 이동하는 요소" },
    { token: "exit", value: "cubic-bezier(.4, 0, 1, 1)", use: "빠르게 화면을 떠나는 요소" },
  ],
  note: "모션은 속도보다 목적이 먼저입니다. 나타나고 이동하는 요소에는 부드러운 감속을, 사라지는 요소에는 짧고 명확한 가속을 적용합니다.",
} as const;

export const TYPE = [
  { slot: "displayLarge", px: 40, weight: 700, lh: 1.25, tracking: -0.03, sample: "오늘도 반짝이는 하루", use: "대표 메시지" },
  { slot: "displayMedium", px: 36, weight: 700, lh: 1.25, tracking: -0.03, sample: "12개의 새로운 기록", use: "핵심 결과" },
  { slot: "displaySmall", px: 32, weight: 700, lh: 1.25, tracking: -0.03, sample: "이번 주의 변화", use: "요약 제목" },
  { slot: "headlineLarge", px: 28, weight: 700, lh: 1.25, tracking: -0.03, sample: "프로젝트를 시작해 볼까요?", use: "화면 제목" },
  { slot: "headlineMedium", px: 24, weight: 700, lh: 1.25, tracking: -0.02, sample: "최근 활동", use: "주요 섹션 제목" },
  { slot: "headlineSmall", px: 24, weight: 500, lh: 1.25, tracking: -0.02, sample: "2026년 8월 24일", use: "보조 헤드라인" },
  { slot: "titleLarge", px: 20, weight: 700, lh: 1.25, tracking: -0.02, sample: "새로운 아이디어", use: "카드 제목" },
  { slot: "titleMedium", px: 16, weight: 600, lh: 1.35, tracking: -0.01, sample: "디자인 검토가 완료됐어요", use: "항목 제목" },
  { slot: "titleSmall", px: 14, weight: 600, lh: 1.35, tracking: -0.01, sample: "오늘 오후 3시", use: "작은 제목" },
  { slot: "bodyLarge", px: 16, weight: 400, lh: 1.65, tracking: 0, sample: "필요한 정보는 쉽게 찾고, 중요한 일에 더 오래 집중할 수 있어요.", use: "강조 본문" },
  { slot: "bodyMedium", px: 14, weight: 400, lh: 1.65, tracking: 0, sample: "변경한 내용은 모든 기기에서 자동으로 동기화됩니다.", use: "기본 본문" },
  { slot: "bodySmall", px: 12, weight: 400, lh: 1.35, tracking: 0, sample: "마지막 저장 2분 전", use: "도움말과 설명" },
  { slot: "labelLarge", px: 14, weight: 600, lh: 1.35, tracking: -0.01, sample: "계속하기", use: "버튼과 탭" },
  { slot: "labelMedium", px: 12, weight: 500, lh: 1.35, tracking: 0, sample: "진행 중 · 8개", use: "상태와 메타 정보" },
  { slot: "labelSmall", px: 11, weight: 500, lh: 1.35, tracking: 0, sample: "NEW", use: "배지와 캡션" },
] as const;

export const HISTORY = [
  { when: "2026-08-09", what: "첫 번째 화면", why: "투자 계산기 목업을 다듬으며 보라색 테마에 Aurora Ledger라는 이름을 붙였습니다. 숫자를 정확하게 보여주는 제품이 시스템의 출발점이 되었습니다." },
  { when: "초기 실험", what: "중성색에 브랜드를 담다", why: "순수한 회색만 사용하면 화면은 깔끔하지만 Twinkle AI Labs만의 인상이 사라졌습니다. 모든 중성색에 남보라의 기운을 아주 조금 더해 브랜드의 공기를 되찾았습니다." },
  { when: "초기 실험", what: "의미가 있는 색을 복원하다", why: "모든 강조색을 보라로 통일했지만 금융 정보의 상승과 하락을 즉시 구분하기 어려웠습니다. 한국 시장의 익숙한 문법에 따라 상승은 빨강, 하락은 파랑으로 되돌렸습니다." },
  { when: "초기 실험", what: "장식보다 행동에 집중하다", why: "큰 숫자에 쓰던 그라데이션을 주요 버튼으로 옮겼습니다. 화려함은 읽을 정보를 꾸미는 대신 사용자가 다음 행동을 찾도록 돕습니다." },
  { when: "2026-08-18", what: "공통 디자인 언어로 확장", why: "색상과 대비 기준을 확정하고 첫 제품에 적용했습니다. Aurora Ledger는 단일 화면의 테마에서 모든 제품이 공유하는 시스템으로 확장되었습니다." },
  { when: "2026-08-22", what: "토큰 체계 완성", why: "색상 중심이던 기준에 불투명도, 간격, 크기, 고도, 형태, 움직임을 더했습니다. 화면을 만드는 대부분의 결정을 공통 언어로 표현할 수 있게 되었습니다." },
  { when: "2026-08-23", what: "원칙을 문서로 공개", why: "값을 나열하는 데서 그치지 않고 각 결정을 내린 이유와 사용 원칙을 기록했습니다. 제품이 늘어나도 같은 판단을 반복할 수 있는 기반을 만들었습니다." },
] as const;
