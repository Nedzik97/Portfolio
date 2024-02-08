import cx from "classnames";
import { useTheme } from "../../context/theme";
import { ReactComponent as DownloadIcon } from "../../assets/icons/download.svg";

import styles from "./about.module.scss";

export const About = () => {
  const { isLightTheme } = useTheme();
  return (
    <div
      className={cx(styles.aboutContainer, {
        [styles.themeLight]: isLightTheme,
      })}
    >
      <h2>Hi, I'm Valerii Nedozym</h2>
      <p>
        A <span>Frontend Developer</span>. I Help Sturtups <span>Launch</span>
        and <span>Grow</span> Their Products. I like designing user-friendly and
        visually pleasing interfaces while also ensuring performance and
        accessibility.
      </p>
      <div className={styles.aboutDowload}>
        <a
          href="/Valerii_Nedozym CV.pdf"
          download
          className={styles.buttonDowload}
        >
          <DownloadIcon />
          <span
            className={cx(styles.buttonDowloadText, {
              [styles.themeLight]: isLightTheme,
            })}
          >
            Download CV
          </span>
          <span
            className={cx(styles.buttonDownloadInfo, {
              [styles.themeLight]: isLightTheme,
            })}
          >
            (pdf 58kb)
          </span>
        </a>
      </div>
    </div>
  );
};
