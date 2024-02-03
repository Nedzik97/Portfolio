import { Link, useLocation } from "react-router-dom";
import styles from "./menu.module.scss";
import cx from "classnames";

export const Menu = () => {
  const location = useLocation();
  return (
    <div>
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link
              className={cx(styles.menuLink, {
                [styles.activeLink]: location.pathname === "/about",
              })}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              className={cx(styles.menuLink, {
                [styles.activeLink]: location.pathname === "/work",
              })}
              to="/work"
            >
              Work
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              className={cx(styles.menuLink, {
                [styles.activeLink]: location.pathname === "/skills",
              })}
              to="/skills"
            >
              Skills
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              className={cx(styles.menuLink, {
                [styles.activeLink]: location.pathname === "/contacts",
              })}
              to="/contacts"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
