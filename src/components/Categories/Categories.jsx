/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

// import { useEffect, useState } from "react";
function Categories({ category, selectedCategoryId, handleCategoryChange }) {
  return (
    <li
      className={`${
        selectedCategoryId === category.id
          ? "text-xl font-semibold text-dark-2 py-4 w-full bg-[#E7E7E7] rounded-md ps-12 cursor-pointer"
          : "font-medium text-xl text-[#9F9F9F] w-full ps-12 cursor-pointer"
      }`}
      onClick={() => handleCategoryChange(category.id)}
    >
      {category.name}
    </li>
  );
}

Categories.propTypes = {
  selectedCategoryId: PropTypes.string,
  handleCategoryChange: PropTypes.func,
};

export default Categories;
