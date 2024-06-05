import { useLocation } from "react-router-dom";
import { Icons } from "../../../assets/Icons";
import { ListLink } from "../../../components/ui/ListLink/ListLink";
import { cn } from "../../../styles/styles";
import { ROUTES } from "../../routes";
import css from "./Aside.module.scss";

export const ASIDE_LAYOUT = [
  { label: "Pins", Icon: Icons.Pins, href: ROUTES.PAGES.ALBUM },
  { label: "Playlist", Icon: Icons.Playlist, href: ROUTES.PAGES.PLAYLIST },
  { label: "Liked songs", Icon: Icons.Liked, href: ROUTES.PAGES.ALBUM },
  { label: "Saves", Icon: Icons.Saved, href: ROUTES.PAGES.ALBUM },
  { label: "Albums", Icon: Icons.Albums, href: ROUTES.PAGES.ALBUM },
  { label: "Folders", Icon: Icons.Folder, href: ROUTES.PAGES.ALBUM },
  { label: "Podcasts", Icon: Icons.Podcast, href: ROUTES.PAGES.ALBUM },
  { label: "Audiobooks", Icon: Icons.AudioBooks, href: ROUTES.PAGES.ALBUM },
  { label: "Artists", Icon: Icons.Artists, href: ROUTES.PAGES.ARTIST },
];

const Aside = () => {
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;
  const isAsideSelected = location.pathname.includes(
    ROUTES.PAGES.LIBRARY || ASIDE_LAYOUT
  );

  return (
    <ul className={cn(css.aside, isAsideSelected && css.asideSelected)}>
      {ASIDE_LAYOUT.map((link) => (
        <ListLink
          key={link.label}
          Icon={link.Icon}
          href={link.href}
          label={link.label}
          isActive={isActive(link.href)}
          className={css.aside_link}
        />
      ))}
    </ul>
  );
};

export default Aside;
