import { useState } from "react";
import { Pagination } from "../../components/pagination/pagination";
import styles from "./work.module.scss";
import { projects } from "../../moks/moks";

export const Work = () => {
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
      {displayedProjects.map((projects) => (
        <section className={styles.workContainer}>
          <div className={styles.workInfo}>
            <h2 className={styles.workTitle}>{projects.title}</h2>
            <p className={styles.descriptionText}>{projects.description}</p>
            <ul className={styles.workTechs}>
              <span>Skills: </span>
              {projects.skills.map((skill) => (
                <li> {skill} </li>
              ))}
            </ul>
            <ul className={styles.libraries}>
              {projects.libraries ? <span>Libraries: </span> : null}
              {projects.libraries
                ? projects.libraries.map((library) => <li> {library} </li>)
                : null}
            </ul>
            <div className={styles.workButtons}>
              <a href={projects.demoLink} className={styles.workButton}>
                Discover
              </a>
              <a href={projects.githubLink} className={styles.workButton}>
                view code
              </a>
            </div>
          </div>
          <div className={styles.workPreview}>
            <img src={projects.imgPreview} alt={projects.title} />
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
