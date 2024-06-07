import { PropsWithChildren, useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";
import { getAuthDataFromStorageAction } from "../store/slices/auth/thunks";

export const AuthData = (props: PropsWithChildren) => {
  const { children } = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAuthDataFromStorageAction);
  }, [dispatch]);

  return <>{children}</>;
};
