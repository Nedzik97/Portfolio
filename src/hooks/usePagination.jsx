import { useState } from "react";
import { projects } from "../data/data";

export const usePagination = () => {
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const displayedProjects = projects.filter((_, index) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return index >= startIndex && index < endIndex;
  });

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const pages = Math.ceil(projects.length / itemsPerPage);
  const amountPages = Array.from({ length: pages }, (_, i) => i + 1);

  return { currentPage, displayedProjects, amountPages, handlePageClick };
};
