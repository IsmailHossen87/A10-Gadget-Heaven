import React, { useContext, useEffect, useState } from "react";
import {  Link, NavLink, useLoaderData, useLocation } from "react-router-dom";
// import { getStoreCart } from "../Utility/dataStore";
import { CartContext } from "../../Hooks/ContExt";

const Navbar = () => {
  const { cartCount ,wishListCount} = useContext(CartContext);
  const location = useLocation();
  const navColor = {
    backgroundColor:location.pathname === "/" ? "rgb(168, 85, 247)": "white",
    color:location.pathname === "/" ? "white" : "",
    borderRadius: location.pathname === "/" ? "8px 8px 0 0" : '',
  };

  return (
    
   <>
    <div  style={navColor} className="navbar max-w-screen-xl mx-auto px-8 w-full py-5 backdrop-blur-xl bg-white/30 sticky z-50 top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-purple-600 font-bold black underline" : ""}`
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-purple-600 font-bold underline" : "text-black"}`
              }
              to={"/statics"}
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-purple-600 font-bold underline" : "text-black"}`
              }
              to={"/dashboard"}
            >
              DeshBoard
            </NavLink>
          </ul>
        </div>
        <NavLink

          className={({ isActive }) =>
            ` ${isActive ? "font-bold text-xl" : ""}`
          }
        >
          Gadget Heaven
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            className={({ isActive }) =>
              `mr-4 font-bold ${
                isActive ? " font-bold underline" : "white"
              }`
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `mr-4 font-bold ${
                isActive ? "text-purple-600 font-bold underline " : "text-black"
              }`
            }
            to={"/statics"}
          >
           Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `mr-4 font-bold ${
                isActive ? "text-purple-600 font-bold underline" : "text-black"
              }`
            }
            to={"/dashboard"}
          >
            DeshBoard
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <div className="reletive">
          <Link to={'/dashboard'}> <i class="fa-solid border p-3 rounded-full fa-cart-shopping"></i></Link>
           <p className="absolute -top-0 right-20  text-black border p-1 rounded-full ">{cartCount}</p>
          </div>
        <div className="relatibe"> 
            <Link to={'/dashboard'}>  <i class="fa-regular border p-3 rounded-full  fa-heart"></i></Link>
          <p className="absolute -top-0 right-4  border text-black p-1 rounded-full">{wishListCount}</p>
          </div>
       
      </div>
    </div>
   </>
  );
};

export default Navbar;
