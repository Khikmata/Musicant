import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialAuthState: AuthState = {};

const getClearAuthState = (): AuthState => ({
  accessToken: null,
});

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    authSuccess(state, action: PayloadAction<Partial<AuthState>>) {
      return { ...state, ...action.payload };
    },
    getAuthFromStorageSuccess(
      state,
      action: PayloadAction<Partial<AuthState>>
    ) {
      return action.payload;
    },
    resetAuthStateSuccess() {
      return getClearAuthState();
    },
  },
});

export const { authSuccess, resetAuthStateSuccess, getAuthFromStorageSuccess } =
  authSlice.actions;
