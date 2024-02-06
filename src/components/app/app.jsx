import { Header } from "../header/header";
import { Main } from "../../pages/main/main";
import { FlyingCube } from "../cube/flying-cube";
import { Footer } from "../footer/footer";
import { useTheme } from "../toggle-theme/toggle-theme";
import styles from "./app.module.scss";
import cx from "classnames";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div
      className={cx(styles.App, {
        [styles.lightTheme]: theme === "light",
      })}
    >
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.main}>
          <Main />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
      <FlyingCube />
    </div>
  );
};
