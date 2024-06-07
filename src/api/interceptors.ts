import { AxiosInstance } from "axios";
import { toast } from "react-toastify";
import { selectAccessToken } from "../store/slices/auth/selectors";
import {
  fetchLoginAction,
  resetAuthStateAction,
} from "../store/slices/auth/thunks";
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
    if (error.response.status === 403) {
      toast.error(`You can't access to app from this country`);
      return Promise.reject(error);
    }
    if (error.response.status === 401) {
      store.dispatch(resetAuthStateAction);
      fetchLoginAction();
      return Promise.reject(error);
    }
    return Promise.reject(error);
  });
};
