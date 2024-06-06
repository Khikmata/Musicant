import axios from "axios";
import { API_AUTH_BASE_URL, API_BASE_URL } from "./constants";

export const appAxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const authAxiosInstance = axios.create({
  baseURL: API_AUTH_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
