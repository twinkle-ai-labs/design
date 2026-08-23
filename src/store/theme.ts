import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState: { value: "light" as Theme, ready: false },
  reducers: {
    hydrateTheme(state, action: PayloadAction<Theme>) {
      state.value = action.payload;
      state.ready = true;
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.value = action.payload;
      state.ready = true;
    },
  },
});

export const { hydrateTheme, setTheme } = themeSlice.actions;
export const store = configureStore({ reducer: { theme: themeSlice.reducer } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function readThemeCookie(): Theme | null {
  const match = document.cookie.match(/(?:^|; )twinkle-theme=([^;]*)/);
  const value = match ? decodeURIComponent(match[1]) : null;
  return value === "light" || value === "dark" ? value : null;
}

export function persistTheme(theme: Theme) {
  const hostname = window.location.hostname;
  const domain = hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(".localhost")
    ? ""
    : "; domain=.twinklelabs.kr";
  document.cookie = `twinkle-theme=${theme}${domain}; path=/; max-age=31536000; SameSite=Lax`;
  document.documentElement.setAttribute("data-theme", theme);
}
