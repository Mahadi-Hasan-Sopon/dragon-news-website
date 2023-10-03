import PropTypes from "prop-types";

import { useEffect, useState } from "react";
function Categories({ selectedCategoryId, handleCategoryChange }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold text-dark-2">All Category</h2>
      <div className="categories-container flex flex-col gap-7 mt-5 list-none">
        {categories.map((category) => (
          <li
            className={`${
              selectedCategoryId === category.id
                ? "text-xl font-semibold text-dark-2 py-4 w-full bg-[#E7E7E7] rounded-md ps-12 cursor-pointer"
                : "font-medium text-xl text-[#9F9F9F] w-full ps-12 cursor-pointer"
            }`}
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.name}
          </li>
        ))}
      </div>
    </div>
  );
}

Categories.propTypes = {
  selectedCategoryId: PropTypes.string,
  handleCategoryChange: PropTypes.func,
};

export default Categories;
