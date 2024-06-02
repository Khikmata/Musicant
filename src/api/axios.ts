import axios from "axios";

export const appAxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
