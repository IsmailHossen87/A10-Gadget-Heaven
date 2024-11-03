import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({category}) => {
    return (
        <div role="tablist" className="flex flex-col border w-[20%]">
          {category.map((data) => (
            <NavLink
              to={`/category/${data.category_name}`}
              role="tab"
              className={({ isActive }) =>
                `tab text-xl ${isActive ? "tab-active  font-semibold" : ""}`
              }
            >
              {data.category_name}
            </NavLink>
          ))}
        </div>
      );
};

export default Category;