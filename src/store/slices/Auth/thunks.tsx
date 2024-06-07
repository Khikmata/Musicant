import { fetchLoginApi } from "../../../api/auth/authApi";
import { Config } from "../../../config/env";
import { ROUTES } from "../../../navigation/routes";
import { getCodeChallenge, getCodeVerifier } from "../../../utils/auth";
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

export const getAuthDataFromStorageAction = async (dispatch: AppDispatch) => {
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

export const resetAuthStateAction = async (dispatch: AppDispatch) => {
  try {
    await Promise.all([deleteItemFromStorage(StorageKeys.ACCESS_TOKEN)]);
    dispatch(resetAuthStateSuccess());
  } catch (e) {
    console.error("Error: resetAuthState", { error: e });
    return e;
  }
};

export const fetchLoginAction = () => async (dispatch: AppDispatch) => {
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

const CODE_VERIFIER_LENGTH = 128;

const getRedirect_uri = () => `${window.location.origin}${ROUTES.COMMON.LOGIN}`;

export const redirectToAuthCodeFlowAction = async () => {
  try {
    const codeVerifier = getCodeVerifier(CODE_VERIFIER_LENGTH);
    const challengeCode = await getCodeChallenge(codeVerifier);

    const url = `${Config.TARGET_AUTH_URL}/authorize`;

    const searchParams = new URLSearchParams({
      client_id: Config.CLIENT_ID ?? "",
      response_type: "code",
      redirect_uri: getRedirect_uri(),
      scope: "user-read-private user-read-email",
      code_challenge_method: "S256",
      code_challenge: challengeCode,
    });

    const afterAuthRedirectToUri = window.location.href;

    await Promise.all([
      setItemToStorage(StorageKeys.CODE_VERIFIER, codeVerifier),
      setItemToStorage(
        StorageKeys.AFTER_AUTH_REDIRECT_TO_URI,
        afterAuthRedirectToUri
      ),
    ]);

    window.location.replace(url + "?" + searchParams);
  } catch (e) {
    console.error("Error: redirectToLoginPage", { responseError: e });
    return e;
  }
};
