import React from "react";
import { NavLink } from "react-router-dom";

const Headingdescrip = ({ title, subtitle }) => {
  return (
    <div className="bg-purple-500 max-w-screen-xl mx-auto rounded-xl">
      <div className="text-center md:w-2/3 mx-auto space-y-4 py-9 ">
        <h2 className="text-4xl font-semibold text-white">{title}</h2>
        <h2 className="md:w-2/3 mx-auto text-gray-200">{subtitle}</h2>
        <div className="flex gap-5 justify-center">
        <NavLink to={"/"}>
            <button className="border mb-10  rounded-full px-4 bg-white  mt-4  text-purple-600 border-purple-700 font-semibold py-1">
              Cart
            </button>
          </NavLink>
          <NavLink to={"/"}>
            <button className="border rounded-full px-4 bg-white  mt-4  text-purple-600 border-purple-700 font-semibold py-1">
              WishList
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Headingdescrip;
