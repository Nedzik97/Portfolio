import cx from "classnames";
import { useTheme } from "../../context/theme";

import styles from "./pagination.module.scss";

export const Pagination = ({ amountPages, currentPage, handlePageClick }) => {
  const { isLightTheme } = useTheme();

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
