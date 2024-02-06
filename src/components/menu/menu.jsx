import { Link, useLocation } from "react-router-dom";
import { menuLists } from "../../moks/moks";
import { useTheme } from "../toggle-theme/toggle-theme";
import styles from "./menu.module.scss";
import cx from "classnames";

export const Menu = () => {
  const { theme } = useTheme();
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
                    [styles.lightTheme]: theme === "light",
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