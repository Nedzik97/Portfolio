import { Header } from "../header/header";
import { Main } from "../../pages/main/main";
import { FlyingCube } from "../cube/flying-cube";
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
        <div className={styles.footer}>footer</div>
      </div>
      <FlyingCube />
    </div>
  );
};

export default App;
