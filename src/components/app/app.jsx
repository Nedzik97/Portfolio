import cx from "classnames";
import { Routes, Route } from "react-router-dom";
import { Header } from "../header/header";
import { FlyingCube } from "../flying-cube/flying-cube";
import { Footer } from "../footer/footer";
import { useTheme } from "../../context/theme";
import { Menu } from "../menu/menu";
import { About } from "../about/about";
import { Work } from "../work/work";
import { Skills } from "../skills/skills";
import { ContactForm } from "../contact-form/contact-form";
import { Promo } from "../promo/promo";

import styles from "./app.module.scss";

export const App = () => {
  const { isLightTheme } = useTheme();
  return (
    <div
      className={cx(styles.App, {
        [styles.lightTheme]: isLightTheme,
      })}
    >
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.main}>
          <div className={styles.layoutRow}>
            <div className={styles.layoutCol}>
              <Menu />
            </div>
            <div className={styles.layoutCol}>
              <Routes>
                <Route path="*" element={<Promo />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contacts" element={<ContactForm />} />
              </Routes>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
      <FlyingCube />
    </div>
  );
};
