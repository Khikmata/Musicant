import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import FullScreenLoader from "../../components/ui/FullScreenLoader/FullScreenLoader";
import { useAppDispatch } from "../../hooks/redux";
import { PagesRoutesType } from "../../navigation/types";
import {
  selectAuthState,
  selectIsAuthStateInit,
} from "../../store/slices/auth/selectors";
import { fetchLoginAction } from "../../store/slices/auth/thunks";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const isAuthStateInit = useSelector(selectIsAuthStateInit);
  const { accessToken, afterAuthRedirectToUri } = useSelector(
    selectAuthState,
    shallowEqual
  );

  const redirectTo = React.useMemo<PagesRoutesType | undefined>(() => {
    if (!afterAuthRedirectToUri) return;

    const redirectToUrl = new URL(afterAuthRedirectToUri);
    // relative path without protocol
    return `${redirectToUrl.pathname}${redirectToUrl.search}` as PagesRoutesType;
  }, [afterAuthRedirectToUri]);

  const from = location.state?.from?.pathname || redirectTo || "/";
  const isFetchLoginPending = React.useRef(false);

  React.useEffect(() => {
    if (!isAuthStateInit || accessToken || !code || isFetchLoginPending.current)
      return;

    const func = async () => {
      isFetchLoginPending.current = true;
      await dispatch(fetchLoginAction());
      isFetchLoginPending.current = false;
    };

    func();
  }, [accessToken, code, dispatch, isAuthStateInit]);

  if (accessToken) return <Navigate to={from} replace={true} />;
  if (code) return <FullScreenLoader />;
  return null;
};

export default LoginPage;
