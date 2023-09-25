import { Menu } from "../../components/menu/menu";
import { Routes, Route } from "react-router-dom";
import { About } from "../about/about";
import { Work } from "../../components/work/work";
import { Skills } from "../skills/skills";
import { ContactForm } from "../contact-form.jsx/contacts";
import { Promo } from "../promo/promo";
import styles from "./main.module.scss";

export const Main = () => {
  return (
    <div className={styles.layoutRow}>
      <div className={styles.layoutCol}>
        <Menu />
      </div>
      <div className={styles.layoutCol}>
        <Routes>
          <Route path="/" element={<Promo />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<ContactForm />} />
        </Routes>
      </div>
    </div>
  );
};
