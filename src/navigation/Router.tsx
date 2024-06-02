import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ROUTES } from "./routes";
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
  createRoutesFromElements(
    <Route element={<RoutesCommonOutlet />}>
      {Object.values(ROUTES.PAGES).map((path) => (
        <Route key={path} path={path} />
      ))}
    </Route>
  )
);

export const Router = () => {
  return <RouterProvider router={routerInstance} />;
};
