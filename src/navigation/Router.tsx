import React from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { LazyLoadedPage } from "./components/LazyLoadedPage/LazyLoadedPage";
import { PublicPageLayout } from "./components/PublicPageLayout/PublicPageLayout";
import { ROUTES } from "./routes";
import { ScrollRestoration } from "./utils/ScrollRestoration";

const LoginPage = React.lazy(() => import("../pages/Login/LoginPage"));

const RoutesCommonOutlet = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const routerInstance = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RoutesCommonOutlet />}>
      {Object.values(ROUTES.PAGES).map((path) => (
        <Route
          key={path}
          path={path}
          element={<LazyLoadedPage page={<PublicPageLayout />} />}
        />
      ))}
      <Route element={<LoginPage />} path={ROUTES.COMMON.LOGIN} />
    </Route>
  )
);

export const Router = () => {
  return <RouterProvider router={routerInstance} />;
};
