import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastContainerConfig } from "../../../config/toast";
import { cn } from "../../../styles/styles";
import { LayoutType } from "../../types";
import css from "./MainLayout.module.scss";

type MainLayout = LayoutType;

export const MainLayout = (props: MainLayout) => {
  const location = useLocation();
  const { asideContent, headerContent, children } = props;

  return (
    <div className={css.layout}>
      <ToastContainer {...toastContainerConfig} />

      {headerContent && (
        <header className={cn(css.header)}>{headerContent}</header>
      )}
      <div className={css.container}>
        {asideContent && (
          <aside className={cn(css.aside)}>{asideContent}</aside>
        )}
        <main className={css.main}>{children}</main>
      </div>
    </div>
  );
};
