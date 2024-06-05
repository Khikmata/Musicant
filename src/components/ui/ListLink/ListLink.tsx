import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../navigation/routes";
import { cn } from "../../../styles/styles";
import css from "./ListLink.module.scss";

interface ListLinkProps {
  label: string;
  href: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
  isActive?: boolean;
  activeClassName?: string;
  style?: CSSProperties;
}

export const ListLink = (props: ListLinkProps) => {
  const { href, Icon, label, className, style, isActive, activeClassName } =
    props;
  return (
    <li
      key={label}
      className={cn(
        css.aside_link,
        isActive && activeClassName,
        isActive && href === ROUTES.PAGES.LIBRARY && css.library,
        className
      )}
      style={{ ...style }}
    >
      <Link to={href}>
        <Icon />
        <p>{label}</p>
      </Link>
    </li>
  );
};
