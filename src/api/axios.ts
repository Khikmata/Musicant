import axios from "axios";
import { BASE_URL } from "./api";

export const appAxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
