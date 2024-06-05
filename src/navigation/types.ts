import { ReactNode } from "react";

export type RouteType = {
  element: ReactNode;
  path: string;
};

export type LayoutType = {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
  asideContent?: React.ReactNode;
  headerClassName?: string;
  asideClassName?: string;
};
