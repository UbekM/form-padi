/** @format */
"use client";

import React from "react";

const Footer = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}) => {
  const disableNext = currentPage === totalPages;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages && !disableNext) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between pt-12 items-center">
      <div className="flex gap-2">
        <button onClick={handlePrev}>&lt; Previous</button>
      </div>
      <div className="flex gap-2 items-center">
        <p className="p-2 py-0 rounded-md border-2">{currentPage}</p>
        <p>of {totalPages}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={handleNext} disabled={disableNext}>
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default Footer;
