import { Suspense, SuspenseProps } from "react";
import FullScreenLoader from "../../../components/ui/FullScreenLoader/FullScreenLoader";

export type LazyLoadedPageProps = {
  page: SuspenseProps["children"];
  fallback?: SuspenseProps["fallback"];
};
export const LazyLoadedPage = ({ page, fallback }: LazyLoadedPageProps) => {
  const fallbackElement =
    fallback === undefined ? <FullScreenLoader /> : fallback;

  return <Suspense fallback={fallbackElement} children={page} />;
};
