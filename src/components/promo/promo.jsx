import cx from "classnames";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme";
import { paths } from "../../utils";

import styles from "./promo.module.scss";

export const Promo = () => {
  const { isLightTheme } = useTheme();
  return (
    <div class={styles.container}>
      <h1 class={styles.text}>
        Hi, I'm Valerii <br />
        Front-end developer
      </h1>
      <Link
        className={cx(styles.button, {
          [styles.themeLight]: isLightTheme,
        })}
        to={paths.contacts}
      >
        Contact me
      </Link>
    </div>
  );
};
