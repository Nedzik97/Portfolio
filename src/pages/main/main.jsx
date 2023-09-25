import { Menu } from "../../components/menu/menu";
import { Routes, Route } from "react-router-dom";
import { About } from "../../components/about/about";
import { Work } from "../../components/work/work";
import { Skills } from "../../components/skills/skills";
import { ContactForm } from "../../components/contacts/contacts";
import styles from "./main.module.scss";

export const Main = () => {
  return (
    <div className={styles.layoutRow}>
      <div className={styles.layoutCol}>
        <Menu />
      </div>
      <div className={styles.layoutCol}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<ContactForm />} />
        </Routes>
      </div>
    </div>
  );
};
