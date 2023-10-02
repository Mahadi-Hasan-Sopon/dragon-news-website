// import React from 'react'

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold text-dark-2">All Category</h2>
      <div className="categories-container flex flex-col gap-7 mt-5">
        {categories.map((category) => {
          const customLink = category.name.split(" ").join("-").toLowerCase();

          return (
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-amber-500 font-semibold"
                  : isActive
                  ? "text-xl font-semibold text-dark-2 py-4 w-full bg-[#E7E7E7] rounded-md ps-12"
                  : "font-medium text-xl text-[#9F9F9F] w-full ps-12"
              }
              key={category.id}
              to={`${category.id === "0" ? "/" : "/" + customLink}`}
            >
              {category.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
