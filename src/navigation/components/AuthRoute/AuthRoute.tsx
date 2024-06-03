import React, { useEffect } from "react";
import { authAxiosInstance } from "../../../api/axios";
import { endpoints } from "../../../api/endpoints/endpoints";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { selectAccessToken } from "../../../store/slices/Auth/selectors";
import { Config } from "../../../utils/config/env";

interface AuthRouteProps {
  children: React.ReactNode;
}
export const AuthRoute = ({ children }: AuthRouteProps) => {
  const dispatch = useAppDispatch();

  const accessToken = useAppSelector(selectAccessToken);

  useEffect(() => {
    try {
      authAxiosInstance.post(
        endpoints.AuthEndpoints.fetch_access_token,
        {},
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
            grant_type: `client_credentials&client_id=${Config.CLIENT_ID}&client_secret=${Config.CLIENT_SECRET}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [accessToken]);

  return <>{children}</>;
};
