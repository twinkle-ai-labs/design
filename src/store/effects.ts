import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { applyTheme, writeStoredTheme } from "@/lib/theme";
import { DOC_SECTIONS } from "@/lib/design";
import { selectActiveSectionId, sectionSpotted } from "./docsNavSlice";
import { scrollChanged } from "./scrollSlice";
import { selectTheme, themeAdopted, themeToggled } from "./themeSlice";
import type { AppDispatch, RootState } from "./index";

/**
 * 부수효과가 사는 한 곳.
 *
 * 리듀서는 순수해야 하고 컴포넌트는 `document` 를 몰라야 한다 — 그 둘 사이에 남는 일
 * (쿠키를 적고, 화면에 얼굴을 입히고, 구획의 자리를 재는 일)이 여기 모인다.
 * 예전에는 토글 버튼이 「상태를 바꾸는 호출」과 「쿠키를 적는 호출」을 나란히 불렀는데,
 * 그러면 **다른 자리에서 테마를 바꾸는 날 한쪽을 빼먹는다.** 이제 바꾸는 길은 액션 하나뿐이다.
 */
export const listenerMiddleware = createListenerMiddleware();

const startListening = listenerMiddleware.startListening.withTypes<RootState, AppDispatch>();

/* ── 테마 ───────────────────────────────────────────────────── */

/** 얼굴이 바뀌면 언제나 화면에 입힌다 — 처음 읽어 왔든, 눌러서 바꿨든. */
startListening({
  matcher: isAnyOf(themeAdopted, themeToggled),
  effect: (_action, api) => applyTheme(selectTheme(api.getState())),
});

/** **고른 것만** 남긴다. 기기의 취향을 그대로 적으면 취향이 바뀌어도 따라가지 못한다. */
startListening({
  actionCreator: themeToggled,
  effect: (_action, api) => writeStoredTheme(selectTheme(api.getState())),
});

/* ── 목차 ───────────────────────────────────────────────────── */

/** 맨 위 몇 픽셀은 «아직 아무것도 읽지 않았다»로 친다. */
const NOTHING_READ_BELOW = 32;
/** 창의 위에서 이만큼 내려온 선을 넘은 구획이 «읽고 있는 것»이다. */
const READING_LINE = 0.34;

/**
 * 스크롤이 움직일 때마다 «지금 읽고 있는 구획»을 다시 고른다.
 *
 * 재는 일이 여기 있는 이유: 목차 컴포넌트가 제 손으로 창을 들으면 스크롤을 듣는 손이
 * 화면에 둘이 되고, 두 손은 서로 다른 기준(`0.34` 같은 값)을 갖게 된다.
 * **이미 켜져 있는 칸이면 아무것도 하지 않는다** — 프레임마다 같은 값을 실으면
 * 목차가 초당 예순 번 다시 그려진다.
 */
startListening({
  actionCreator: scrollChanged,
  effect: (action, api) => {
    const { offset, viewportHeight } = action.payload;
    const readingLine = viewportHeight * READING_LINE;

    const passed = DOC_SECTIONS.map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)
      .filter((element) => element.getBoundingClientRect().top <= readingLine);

    const spotted = offset < NOTHING_READ_BELOW ? null : (passed.at(-1)?.id ?? null);
    if (spotted !== selectActiveSectionId(api.getState())) api.dispatch(sectionSpotted(spotted));
  },
});
