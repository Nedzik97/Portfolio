import { Link } from "react-router-dom";
import styles from "./promo.module.scss";

export const Promo = () => {
  return (
    <div class={styles.container}>
      <h1 class={styles.text}>
        Hi, I'm Valerii <br />
        Front-end developer
      </h1>
      <Link to="/contacts" className={styles.button}>
        Contact me
      </Link>
    </div>
  );
};
