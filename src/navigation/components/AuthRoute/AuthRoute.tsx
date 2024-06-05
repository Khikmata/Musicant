import React, { useEffect } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { selectAccessToken } from "../../../store/slices/auth/selectors";
import { fetchLogin } from "../../../store/slices/auth/thunks";

interface AuthRouteProps {
  children: React.ReactNode;
}
export const AuthRoute = ({ children }: AuthRouteProps) => {


  const accessToken = useAppSelector(selectAccessToken);

  useEffect(() => {
    try {
      fetchLogin();
    } catch (error) {
      console.log(error);
    }
  }, [accessToken]);

  return <>{children}</>;
};
