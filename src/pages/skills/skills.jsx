import styles from "./skills.module.scss";

const skills = [
  `React`,
  `Redux`,
  `TypeScript`,
  `JS(ES5+)`,
  `HTML`,
  `CSS`,
  "Sass",
];

const courses = [
  {
    name: `React. Development of complex client applications`,
  },
  {
    name: `Javascript, Level 2`,
  },
  {
    name: `Javascript, Level 1`,
  },
  {
    name: `HTML and CSS, Level 2`,
  },
  {
    name: `HTML and CSS, Level 1`,
  },
  {
    name: `General English – intermediate`,
  },
];

export const Skills = () => {
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
            <li className={styles.courseItem}>{course.name}</li>
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
