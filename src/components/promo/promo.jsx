import cx from "classnames";
import { Link } from "react-router-dom";
import { useTheme } from "../toggle-theme/toggle-theme";

import styles from "./promo.module.scss";

export const Promo = () => {
  const { theme } = useTheme();
  return (
    <div class={styles.container}>
      <h1 class={styles.text}>
        Hi, I'm Valerii <br />
        Front-end developer
      </h1>
      <Link
        className={cx(styles.button, {
          [styles.themeLight]: theme === "light",
        })}
        to="/contacts"
      >
        Contact me
      </Link>
    </div>
  );
};
