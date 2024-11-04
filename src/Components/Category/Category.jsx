import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Category = () => {
  const category = useLoaderData()
    return (
        <div role="tablist" className="flex flex-col rounded-md gap-3 my-4 py-4 border w-[20%]">
          {category.map((data) => (
            <NavLink
              to={`/category/${data.category_name}`}
              role="tab"
              className={({ isActive }) =>
                `tab text-xl mx-6 ${isActive ? "tab-active bg-gray-300 rounded-full font-semibold" : ""}`
              }
            >
              {data.category_name}
            </NavLink>
          ))}
        </div>
      );
};

export default Category;