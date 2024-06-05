import React from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Aside from "./components/Aside/Aside";
import { AuthRoute } from "./components/AuthRoute/AuthRoute";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { Navbar } from "./components/Navbar/Navbar";

import HomePage from "../pages/HomePage/HomePage";
import { LazyLoadedPage } from "./components/LazyLoadedPage/LazyLoadedPage";
import { ROUTES } from "./routes";
import { RouteType } from "./types";
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

const TrackPage = React.lazy(() => import("../pages/Track/TrackPage"));
const LibraryPage = React.lazy(() => import("../pages/Library/LibraryPage"));

const SECURED_ROUTES: RouteType[] = [
  { path: ROUTES.PAGES.HOME, element: <HomePage /> },
  { path: ROUTES.PAGES.TRACK, element: <TrackPage /> },
  { path: ROUTES.PAGES.LIBRARY, element: <LibraryPage /> },
];

const routerInstance = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RoutesCommonOutlet />}>
      {SECURED_ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <AuthRoute>
              <MainLayout headerContent={<Navbar />} asideContent={<Aside />}>
                <LazyLoadedPage page={route.element} />
              </MainLayout>
            </AuthRoute>
          }
        />
      ))}
      <Route element={<LoginPage />} path={ROUTES.COMMON.LOGIN} />
    </Route>
  )
);

export const Router = () => {
  return <RouterProvider router={routerInstance} />;
};
