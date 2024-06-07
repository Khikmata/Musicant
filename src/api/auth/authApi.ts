import { authAxiosInstance } from "../axios";
import { endpoints } from "../endpoints";
import {
  FetchLoginApiRequest,
  FetchLoginApiResponse,
  fetchLoginApiDtoMapper,
} from "./types";

export const fetchLoginApi = (
  params: FetchLoginApiRequest
): Promise<FetchLoginApiResponse> =>
  authAxiosInstance
    .post(endpoints.AuthEndpoints.fetchAccessToken, { ...params })
    .then((body) => fetchLoginApiDtoMapper(body.data));
