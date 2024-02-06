import { useState } from "react";
import { useTheme } from "../../components/toggle-theme/toggle-theme";
import cx from "classnames";
import styles from "./contacts-form.module.scss";

export const ContactForm = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateField = (name, value, event) => {
    let errorMessage = "";

    switch (name) {
      case "name":
        errorMessage =
          value.length < 2 ? "Имя должно содержать минимум 2 символа" : "";
        break;
      case "email":
        errorMessage = /^\S+@\S+\.\S+$/.test(value)
          ? ""
          : "Введите правильный адрес электронной почты";
        break;
      case "message":
        errorMessage =
          value.length < 60 ? "Текст должен содержать минимум 60 символов" : "";
        break;
      default:
        break;
    }

    event.setCustomValidity(errorMessage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value, e.target);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      alert("Форма отправлена!");
    }

    try {
      const response = await fetch("https://formspree.io/f/xknlqeaw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section>
      <h2
        className={cx({
          [styles.themeLight]: theme === "light",
        })}
      >
        Want to work with me?
      </h2>
      <form className={styles.contactForm} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.formRow}>
          <input
            className={cx({
              [styles.themeLight]: theme === "light",
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
              [styles.themeLight]: theme === "light",
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
            [styles.themeLight]: theme === "light",
          })}
          name="message"
          value={formData.message}
          onInput={handleChange}
          placeholder="Message"
          required
        />
        <button
          className={cx({
            [styles.themeLight]: theme === "light",
          })}
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
