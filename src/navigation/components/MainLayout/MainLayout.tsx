import { cn } from "../../../styles/styles";
import css from "./MainLayout.module.scss";
interface MainLayoutProps {
  children: React.ReactNode;
  headerContent: React.ReactNode;
  asideContent: React.ReactNode;
  headerClassName?: string;
  asideClassName?: string;
}

export const MainLayout = (props: MainLayoutProps) => {
  const {
    asideContent,
    headerContent,
    asideClassName,
    headerClassName,
    children,
  } = props;
  return (
    <>
      {headerContent && (
        <header className={cn(css.header, headerClassName)}>
          {headerContent}
        </header>
      )}
      {asideContent && (
        <aside className={cn(css.aside, asideContent)}>{asideContent}</aside>
      )}
      <main>{children}</main>
    </>
  );
};
