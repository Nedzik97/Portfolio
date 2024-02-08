import cx from "classnames";
import { useState } from "react";
import { useTheme } from "../../context/theme";
import { validateField } from "../../utils";
import { sendFormData } from "../../api";

import styles from "./contact-form.module.scss";

export const ContactForm = () => {
  const { isLightTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const errorMessage = validateField(name, value);
    e.target.setCustomValidity(errorMessage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      await sendFormData(formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section>
      <h2
        className={cx({
          [styles.themeLight]: isLightTheme,
        })}
      >
        Want to work with me?
      </h2>
      <form className={styles.contactForm} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.formRow}>
          <input
            className={cx({
              [styles.themeLight]: isLightTheme,
            })}
            type="text"
            name="name"
            value={formData.name}
            onInput={handleChange}
            placeholder="Name"
            required
          />
          <input
            className={cx({
              [styles.themeLight]: isLightTheme,
            })}
            type="email"
            name="email"
            value={formData.email}
            onInput={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <textarea
          className={cx({
            [styles.themeLight]: isLightTheme,
          })}
          name="message"
          value={formData.message}
          onInput={handleChange}
          placeholder="Message"
          required
        />
        <button
          className={cx({
            [styles.themeLight]: isLightTheme,
          })}
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
