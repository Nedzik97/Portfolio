import cx from "classnames";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme";
import { ReactComponent as LightThemeIcon } from "../../assets/icons/light-theme-icon.svg";
import { ReactComponent as DarkThemeIcon } from "../../assets/icons/dark-theme-icon.svg";

import styles from "./header.module.scss";

export const Header = () => {
  const { isLightTheme, toggleTheme } = useTheme();
  return (
    <div className={styles.headerTopPanel}>
      <h1>
        <Link
          className={cx({
            [styles.themeLight]: isLightTheme,
          })}
          to="/"
        >
          Valerii Nedozym
        </Link>
      </h1>
      <div className={styles.toggleThemePanel}>
        <label className={styles.labelLight} htmlFor="light">
          <LightThemeIcon
            className={cx({
              [styles.currentTheme]: isLightTheme,
            })}
          />
        </label>
        <input
          onClick={toggleTheme}
          className={styles.inputLight}
          type="radio"
          value={"light"}
          name="toggle theme"
          id="light"
          checked={isLightTheme}
        />
        <label className={styles.labelDark} htmlFor="dark">
          <DarkThemeIcon
            className={cx({
              [styles.currentTheme]: !isLightTheme,
            })}
          />
        </label>
        <input
          onClick={toggleTheme}
          className={styles.inputDark}
          type="radio"
          value={"dark"}
          name="toggle theme"
          id="dark"
          checked={!isLightTheme}
        />
      </div>
    </div>
  );
};
