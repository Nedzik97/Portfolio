import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./menu.module.scss";
import cx from "classnames";

export const Menu = () => {
  const [activelink, setActiveLink] = useState("");
  return (
    <div>
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link
              onClick={() => setActiveLink("about")}
              className={cx(styles.menuLink, {
                [styles.activeLink]: activelink === "about",
              })}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              onClick={() => setActiveLink("work")}
              className={cx(styles.menuLink, {
                [styles.activeLink]: activelink === "work",
              })}
              to="/work"
            >
              Work
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              onClick={() => setActiveLink("skills")}
              className={cx(styles.menuLink, {
                [styles.activeLink]: activelink === "skills",
              })}
              to="/skills"
            >
              Skills
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              onClick={() => setActiveLink("contacts")}
              className={cx(styles.menuLink, {
                [styles.activeLink]: activelink === "contacts",
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
