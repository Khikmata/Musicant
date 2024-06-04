import React, { FC } from "react";
import { cn } from "../../../styles/styles";
import styles from "./Spinner.module.scss";

type SpinnerProps = {} & Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "children"
>;

export const Spinner: FC<SpinnerProps> = ({
  className,
  ...restSpinnerProps
}) => {
  return (
    <div className={cn(styles.spinner, className)} {...restSpinnerProps}></div>
  );
};
