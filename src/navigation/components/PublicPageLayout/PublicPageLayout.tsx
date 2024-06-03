import React, { useMemo } from "react";
import { matchRoutes, renderMatches, useLocation } from "react-router-dom";
import HomePage from "../../../pages/HomePage/HomePage";
import { ROUTES } from "../../routes";
import { LazyLoadedPage } from "../LazyLoadedPage/LazyLoadedPage";
import { Navbar } from "../Navbar/Navbar";
import css from "./PublicPageLayout.module.scss";

const TrackPage = React.lazy(() => import("../../../pages/Track/TrackPage"));
const LibraryPage = React.lazy(
  () => import("../../../pages/Library/LibraryPage")
);

export const PublicPageLayout = () => {
  const location = useLocation();

  const routeList = useMemo(
    () => [
      { path: ROUTES.PAGES.HOME, element: <HomePage /> },
      { path: ROUTES.PAGES.TRACK, element: <TrackPage /> },
      { path: ROUTES.PAGES.LIBRARY, element: <LibraryPage /> },
    ],
    []
  );

  const mainContent = renderMatches(matchRoutes(routeList, location));

  return (
    <>
      <header className={css.header}>
        <Navbar />
      </header>
      <aside className={css.aside}></aside>
      <LazyLoadedPage page={mainContent} />
    </>
  );
};
