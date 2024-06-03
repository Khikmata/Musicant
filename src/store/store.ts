import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/Auth/reducers";
// ...

const reducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export const store = configureStore({
  reducer,
});

export type Store = typeof store;
export type AppDispatch = Store["dispatch"];
export type GetState = Store["getState"];
export type AppState = ReturnType<GetState>;
