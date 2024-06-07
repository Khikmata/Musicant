import { ReactNode } from "react";
import { RecursiveValues } from "../utils/types";
import { ROUTES } from "./routes";

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

export type PagesRoutesType =
  | RecursiveValues<typeof ROUTES>
  | `${RecursiveValues<typeof ROUTES>}/`;
