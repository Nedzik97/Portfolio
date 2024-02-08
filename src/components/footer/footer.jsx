import cx from "classnames";
import { useTheme } from "../../context/theme";
import { ReactComponent as SkypeIcon } from "../../assets/icons/skype.svg";
import { ReactComponent as GitHubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin.svg";

import styles from "./footer.module.scss";

export const Footer = () => {
  const { isLightTheme } = useTheme();
  return (
    <ul className={styles.social}>
      <li className={styles.socialItem}>
        <a
          href="skype: live:.cid.1d5703512b5cb273"
          className={cx(styles.socialLink, {
            [styles.themeLight]: isLightTheme,
          })}
          title="My Skype"
        >
          <SkypeIcon />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a
          href="https://github.com/Nedzik97"
          className={cx(styles.socialLink, {
            [styles.themeLight]: isLightTheme,
          })}
          title="My Github"
        >
          <GitHubIcon />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a
          href="https://www.linkedin.com/in/valerii-nedozym-811126183/"
          className={cx(styles.socialLink, {
            [styles.themeLight]: isLightTheme,
          })}
          title="My Linked In"
        >
          <LinkedInIcon />
        </a>
      </li>
    </ul>
  );
};
