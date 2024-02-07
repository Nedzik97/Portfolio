import cx from "classnames";
import { useState } from "react";
import { Pagination } from "../pagination/pagination";
import { projects } from "../../data/data";
import { useTheme } from "../../context/theme";

import styles from "./work.module.scss";

export const Work = () => {
  const { isLightTheme } = useTheme();
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(projects.length / itemsPerPage);
  const displayedProjects = projects.filter((_, index) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return index >= startIndex && index < endIndex;
  });

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className={styles.work}>
      {displayedProjects.map((project) => (
        <section className={styles.workContainer} key={project.number}>
          <div className={styles.workInfo}>
            <h2
              className={cx(styles.workTitle, {
                [styles.themeLight]: isLightTheme,
              })}
            >
              {project.title}
            </h2>
            <p
              className={cx(styles.descriptionText, {
                [styles.themeLight]: isLightTheme,
              })}
            >
              {project.description}
            </p>
            <ul
              className={cx(styles.workTechs, {
                [styles.themeLight]: isLightTheme,
              })}
            >
              <span>Skills: </span>
              {project.skills.map((skill) => (
                <li> {skill} </li>
              ))}
            </ul>
            <ul
              className={cx(styles.libraries, {
                [styles.themeLight]: isLightTheme,
              })}
            >
              {project.libraries ? <span>Libraries: </span> : null}
              {project.libraries
                ? project.libraries.map((library) => <li> {library} </li>)
                : null}
            </ul>
            <div className={styles.workButtons}>
              <a href={project.demoLink} className={styles.workButton}>
                Discover
              </a>
              <a href={project.githubLink} className={styles.workButton}>
                view code
              </a>
            </div>
          </div>
          <div className={styles.workPreview}>
            <img src={project.imgPreview} alt={project.title} />
          </div>
        </section>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={pages}
        handlePageClick={handlePageClick}
      />
    </section>
  );
};
