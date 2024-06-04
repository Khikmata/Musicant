import css from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <ul className={css.link_list}>
      <li className={css.link}>My Library</li>
      <li className={css.link}>Home</li>
      <li className={css.link}>Discover</li>
      <li className={css.link}>Search</li>
    </ul>
  );
};
