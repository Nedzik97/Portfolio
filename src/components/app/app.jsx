import { Header } from "../header/header";
import { Main } from "../../pages/main/main";
import { FlyingCube } from "../cube/flying-cube";
import { Footer } from "../footer/footer";
import styles from "./app.module.scss";

export const App = () => {
  return (
    <div className={styles.App}>
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
