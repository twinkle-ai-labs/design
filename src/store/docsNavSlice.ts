import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

/**
 * 목차 — **지금 읽고 있는 구획**이 어디인가.
 *
 * 값은 화면이 아니라 스크롤이 정한다. 그래서 이 조각은 재는 일을 하지 않고
 * 「누가 켜져 있는가」만 든다 — 재는 일은 `effects` 가 `scrollChanged` 를 듣고 한다.
 * 목차가 제 손으로 창을 들으면 화면 하나에 스크롤을 듣는 손이 둘이 된다.
 */
type DocsNavState = {
  /** 켜진 칸의 id. 맨 위에 있을 때는 아무 칸도 켜지 않는다 — 아직 아무것도 읽지 않았다. */
  activeSectionId: string | null;
};

const initialState: DocsNavState = { activeSectionId: null };

const docsNavSlice = createSlice({
  name: "docsNav",
  initialState,
  reducers: {
    sectionSpotted(state, action: PayloadAction<string | null>) {
      state.activeSectionId = action.payload;
    },
  },
});

export const { sectionSpotted } = docsNavSlice.actions;
export default docsNavSlice.reducer;

export const selectActiveSectionId = (state: RootState): string | null =>
  state.docsNav.activeSectionId;
