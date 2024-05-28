import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ScrollRestoration } from "./utils/ScrollRestoration";

const RoutesCommonOutlet = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const routerInstance = createBrowserRouter(
  createRoutesFromElements(<Route element={<RoutesCommonOutlet />}></Route>)
);

export const Router = () => {
  return <RouterProvider router={routerInstance} />;
};
