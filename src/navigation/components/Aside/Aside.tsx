import { Link, useLocation } from "react-router-dom";
import { Icons } from "../../../assets/Icons";
import { cn } from "../../../styles/styles";
import { ROUTES } from "../../routes";
import css from "./Aside.module.scss";

const ASIDE_LAYOUT = [
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

  return (
    <ul className={css.aside}>
      {ASIDE_LAYOUT.map((node) => (
        <li
          key={node.label}
          className={cn(css.aside_link, isActive(node.href) && css.active)}
        >
          <Link to={node.href}>
            <node.Icon />
            <p>{node.label}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Aside;
