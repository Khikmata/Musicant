import { AppState } from "../../store";

export const selectAccessToken = (state: AppState) => state.auth.accessToken;
export const selectRefreshToken = (state: AppState) => state.auth.refreshToken;
