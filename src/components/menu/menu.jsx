import cx from "classnames";
import { Link, useLocation } from "react-router-dom";
import { menuLists } from "../../data/data";
import { useTheme } from "../../context/theme";

import styles from "./menu.module.scss";

export const Menu = () => {
  const { isLightTheme } = useTheme();
  const location = useLocation();
  return (
    <div>
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          {menuLists.map((menuItem, index) => {
            return (
              <li className={styles.menuItem} key={index}>
                <Link
                  className={cx(styles.menuLink, {
                    [styles.activeLink]: location.pathname === `/${menuItem}`,
                    [styles.lightTheme]: isLightTheme,
                  })}
                  to={`/${menuItem}`}
                >
                  {menuItem}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
