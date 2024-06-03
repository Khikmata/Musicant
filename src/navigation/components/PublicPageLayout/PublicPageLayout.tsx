import React, { useMemo } from "react";
import { matchRoutes, renderMatches, useLocation } from "react-router-dom";
import HomePage from "../../../pages/HomePage/HomePage";
import { ROUTES } from "../../routes";
import Aside from "../Aside/Aside";
import { LazyLoadedPage } from "../LazyLoadedPage/LazyLoadedPage";
import { MainLayout } from "../MainLayout/MainLayout";
import { Navbar } from "../Navbar/Navbar";

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
    <MainLayout headerContent={<Navbar />} asideContent={<Aside />}>
      <LazyLoadedPage page={mainContent} />
    </MainLayout>
  );
};
