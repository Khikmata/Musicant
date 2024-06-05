import { AppState } from "../../store";

export const selectAccessToken = (state: AppState) => state.auth.accessToken;
export const selectAuthState = (state: AppState) => state.auth;