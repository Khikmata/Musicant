import { fetchLoginApi } from "../../../api/auth/fetchLoginApi";
import { Config } from "../../../config/env";
import {
  StorageKeys,
  deleteItemFromStorage,
  getItemFromStorage,
  setItemToStorage,
} from "../../../utils/storage";
import { AppDispatch } from "../../store";
import {
  authSuccess,
  getAuthFromStorageSuccess,
  resetAuthStateSuccess,
} from "./reducers";

export const getAuthDataFromStorage = async (dispatch: AppDispatch) => {
  try {
    const [accessToken] = await Promise.all([
      getItemFromStorage(StorageKeys.ACCESS_TOKEN),
    ]);

    dispatch(
      getAuthFromStorageSuccess({
        accessToken,
      })
    );
  } catch (e) {
    console.error("Error: getAuthDataFromStorage", { error: e });
    return e;
  }
};

export const resetAuthState = async (dispatch: AppDispatch) => {
  try {
    await Promise.all([deleteItemFromStorage(StorageKeys.ACCESS_TOKEN)]);
    dispatch(resetAuthStateSuccess());
  } catch (e) {
    console.error("Error: resetAuthState", { error: e });
    return e;
  }
};

export const fetchLogin = () => async (dispatch: AppDispatch) => {
  try {
    const client_id = Config.CLIENT_ID;
    const client_secret = Config.CLIENT_SECRET;
    const grant_type = "client_credentials";

    const res = await fetchLoginApi({ grant_type, client_id, client_secret });
    console.log(res);
    if (!res) return;

    await Promise.all([
      setItemToStorage(StorageKeys.ACCESS_TOKEN, res.access_token),
    ]);

    dispatch(authSuccess({ accessToken: res.access_token }));
  } catch (e) {
    console.error("Error: fetchLoginApi", { responseError: e });
    return e;
  }
};
