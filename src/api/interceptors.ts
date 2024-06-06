import { AxiosInstance } from "axios";
import { selectAccessToken } from "../store/slices/auth/selectors";
import { fetchLogin, resetAuthState } from "../store/slices/auth/thunks";
import { store } from "../store/store";

const getAccessToken = () => selectAccessToken(store.getState());

export const setUpApiRequestInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(async (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = "Bearer " + token;
    }

    return config;
  });

  axiosInstance.interceptors.response.use(undefined, async (error) => {
    if (error.response.status === 401) {
      store.dispatch(resetAuthState);
      fetchLogin();
      return Promise.reject(error);
    }
  });
};
