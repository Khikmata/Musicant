import React, { useEffect } from "react";
import FullScreenLoader from "../../../components/ui/FullScreenLoader/FullScreenLoader";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  selectAccessToken,
  selectIsAuthStateInit,
} from "../../../store/slices/auth/selectors";
import { redirectToAuthCodeFlowAction } from "../../../store/slices/auth/thunks";

interface AuthRouteProps {
  children: React.ReactNode;
}
export const AuthRoute = ({ children }: AuthRouteProps) => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(selectAccessToken);
  const isAuthStateInit = useAppSelector(selectIsAuthStateInit);
  console.log(accessToken);
  useEffect(() => {
    if (!isAuthStateInit || accessToken) return;

    redirectToAuthCodeFlowAction();
  }, [accessToken, dispatch, isAuthStateInit]);

  if (!isAuthStateInit || !accessToken) return <FullScreenLoader />;

  return <>{children}</>;
};
