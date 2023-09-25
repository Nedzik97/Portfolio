import { useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import cx from "classnames";

export const Header = () => {
  const [toggleTheme, setToggleTheme] = useState("light");
  return (
    <div className={styles.headerTopPanel}>
      <h1>
        <Link to="/">Valerii Nedozym</Link>
      </h1>
      <div className={styles.toggleThemePanel}>
        <label className={styles.labelLight} htmlFor="light">
          <svg
            className={cx({
              [styles.currentTheme]: toggleTheme === "light",
            })}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(255, 255, 255, 0.3)"
              d="M11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11C5 9.4087 5.63214 7.88258 6.75736 6.75736C7.88258 5.63214 9.4087 5 11 5C12.5913 5 14.1174 5.63214 15.2426 6.75736C16.3679 7.88258 17 9.4087 17 11C17 12.5913 16.3679 14.1174 15.2426 15.2426C14.1174 16.3679 12.5913 17 11 17ZM11 15C12.0609 15 13.0783 14.5786 13.8284 13.8284C14.5786 13.0783 15 12.0609 15 11C15 9.93913 14.5786 8.92172 13.8284 8.17157C13.0783 7.42143 12.0609 7 11 7C9.93913 7 8.92172 7.42143 8.17157 8.17157C7.42143 8.92172 7 9.93913 7 11C7 12.0609 7.42143 13.0783 8.17157 13.8284C8.92172 14.5786 9.93913 15 11 15ZM10 0H12V3H10V0ZM10 19H12V22H10V19ZM2.515 3.929L3.929 2.515L6.05 4.636L4.636 6.05L2.515 3.93V3.929ZM15.95 17.364L17.364 15.95L19.485 18.071L18.071 19.485L15.95 17.364ZM18.071 2.514L19.485 3.929L17.364 6.05L15.95 4.636L18.071 2.515V2.514ZM4.636 15.95L6.05 17.364L3.929 19.485L2.515 18.071L4.636 15.95ZM22 10V12H19V10H22ZM3 10V12H0V10H3Z"
            />
          </svg>
        </label>
        <input
          onClick={() => setToggleTheme("light")}
          className={styles.inputLight}
          type="radio"
          value={toggleTheme}
          name="toggle theme"
          id="light"
          checked={toggleTheme === "light"}
        />
        <label className={styles.labelDark} htmlFor="dark">
          <svg
            className={cx({
              [styles.currentTheme]: toggleTheme === "dark",
            })}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(255, 255, 255, 0.3)"
              d="M8 5C7.9998 6.39064 8.41381 7.74983 9.18923 8.90421C9.96465 10.0586 11.0663 10.9559 12.3538 11.4816C13.6412 12.0073 15.0561 12.1376 16.4179 11.8559C17.7797 11.5742 19.0268 10.8933 20 9.9V10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0H10.1C9.43404 0.651125 8.90514 1.42896 8.54448 2.28768C8.18382 3.1464 7.99869 4.06862 8 5ZM2 10C1.99927 11.785 2.59553 13.5189 3.69389 14.926C4.79226 16.333 6.32963 17.3323 8.06141 17.7648C9.79319 18.1974 11.6199 18.0383 13.2508 17.313C14.8818 16.5876 16.2233 15.3377 17.062 13.762C15.5694 14.1136 14.0118 14.0781 12.5368 13.6587C11.0619 13.2394 9.7185 12.4501 8.63421 11.3658C7.54992 10.2815 6.76065 8.93814 6.34128 7.46318C5.92192 5.98821 5.88636 4.43056 6.238 2.938C4.95758 3.62014 3.88678 4.63766 3.14026 5.88164C2.39373 7.12562 1.99958 8.54921 2 10Z"
            />
          </svg>
        </label>
        <input
          onClick={() => setToggleTheme("dark")}
          className={styles.inputDark}
          type="radio"
          value={toggleTheme}
          name="toggle theme"
          id="dark"
          checked={toggleTheme === "dark"}
        />
      </div>
    </div>
  );
};
