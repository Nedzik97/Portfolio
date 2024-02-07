import cx from "classnames";
import { useTheme } from "../../context/theme";

import styles from "./pagination.module.scss";

export const Pagination = ({ currentPage, totalPages, handlePageClick }) => {
  const { isLightTheme } = useTheme();
  const amountPages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className={styles.paginationContainer}>
      <ul className={styles.paginationList}>
        {amountPages.map((_, index) => (
          <li
            key={index + 1}
            className={cx(styles.paginationItem, {
              [styles.activeLink]: currentPage === index + 1,
              [styles.themeLight]: isLightTheme,
            })}
            onClick={() => handlePageClick(index + 1)}
          >
            <a href="#"> {index + 1}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
