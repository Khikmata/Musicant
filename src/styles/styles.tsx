import { default as cn } from "classnames";
import colors from "./colors.module.scss";
export { cn };

type ColorsType = {
  PRIMARY: string;

  FG_PRIMARY: string;
  FG_SECONDARY: string;
  FG_TERTIARY: string;
  FG_LIGHT_PRIMARY: string;
  FG_LIGHT_SECONDARY: string;

  BG_MAIN: string;
  BG_PRIMARY: string;
  BG_SECONDARY: string;

  BG_LIGHT_MAIN: string;
};

export const Colors = colors as ColorsType;
