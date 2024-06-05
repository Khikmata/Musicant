import { authAxiosInstance } from "../axios";
import { endpoints } from "../endpoints/endpoints";
import { FetchLoginApiRequest, FetchLoginApiResponse } from "./types";

  

  export const fetchLoginApi = (params: FetchLoginApiRequest
  ): Promise<FetchLoginApiResponse> =>
    authAxiosInstance.post(
      endpoints.AuthEndpoints.fetchAccessToken,
      {...params},
    )
      .then(res => (res.data))
      .then((body) =>
        body.data)
      
  