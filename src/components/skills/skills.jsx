import cx from "classnames";
import { skills } from "../../data/data";
import { courses } from "../../data/data";
import { useTheme } from "../../context/theme";

import styles from "./skills.module.scss";

export const Skills = () => {
  const { isLightTheme } = useTheme();
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
                [styles.themeLight]: isLightTheme,
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
