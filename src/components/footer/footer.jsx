import { Social } from "../social/social";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Social />
    </div>
  );
};
