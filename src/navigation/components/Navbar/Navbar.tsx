import { useLocation } from "react-router-dom";
import { Icons } from "../../../assets/Icons";
import { ListLink } from "../../../components/ui/ListLink/ListLink";
import { cn } from "../../../styles/styles";
import { ROUTES } from "../../routes";
import { ASIDE_LAYOUT } from "../Aside/Aside";
import css from "./Navbar.module.scss";

const NAVBAR_LAYOUT = [
  { label: "Library", Icon: Icons.Library, href: ROUTES.PAGES.LIBRARY },
  { label: "Home", Icon: Icons.Home, href: ROUTES.PAGES.HOME },
  { label: "Discover", Icon: Icons.Discover, href: ROUTES.PAGES.DISCOVER },
  { label: "Search", Icon: Icons.Search, href: ROUTES.PAGES.SEARCH },
];

export const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  const isActive = (href: string) => location.pathname === href;
  const isAsideSelected = location.pathname.includes(
    ROUTES.PAGES.LIBRARY || ASIDE_LAYOUT
  );
  return (
    <ul className={cn(css.link_list, isAsideSelected && css.asideSelected)}>
      {NAVBAR_LAYOUT.map((link) => (
        <ListLink
          key={link.href}
          Icon={link.Icon}
          href={link.href}
          label={link.label}
          isActive={isActive(link.href)}
          activeClassName={css.active}
          className={css.navbar_link}
        />
      ))}
    </ul>
  );
};
