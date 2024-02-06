import { skills } from "../../moks/moks";
import { courses } from "../../moks/moks";
import { useTheme } from "../toggle-theme/toggle-theme";
import styles from "./skills.module.scss";
import cx from "classnames";

export const Skills = () => {
  const { theme } = useTheme();
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.invisible}>Skills</h2>
      <div className={styles.courses}>
        <p>
          Showcasing My Skills and Courses:
          <br />A Journey of Constant Improvement
        </p>
        <ul className={styles.coursesList}>
          {courses.map((course) => (
            <li
              className={cx(styles.courseItem, {
                [styles.themeLight]: theme === "light",
              })}
            >
              {course.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.skills}>
        <ul className={styles.skillList}>
          {skills.map((skill) => (
            <li className={styles.skillsItem}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};