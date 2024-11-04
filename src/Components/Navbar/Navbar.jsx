import React, { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import { getStoreCart } from "../Utility/dataStore";

const Navbar = () => {
 
  const [totalData,setdata]= useState([])
  useEffect(()=>{
    const storeData = getStoreCart();
    setdata(storeData)
  },[])


  return (
    <div className="navbar max-w-screen-xl mx-auto px-8 w-full backdrop-blur-xl bg-white/30 sticky z-50 top-0">
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
                `font-bold ${isActive ? "text-warning font-bold underline" : ""}`
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning font-bold underline" : ""}`
              }
              to={"/statics"}
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning font-bold underline" : ""}`
              }
              to={"/dashboard"}
            >
              DeshBoard
            </NavLink>
          </ul>
        </div>
        <NavLink
          to={"/"}
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
                isActive ? "text-warning font-bold underline" : ""
              }`
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `mr-4 font-bold ${
                isActive ? "text-warning font-bold underline " : ""
              }`
            }
            to={"/statics"}
          >
           Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `mr-4 font-bold ${
                isActive ? "text-warning font-bold underline" : ""
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
           <i class="fa-solid border p-3 rounded-full bg-white fa-cart-shopping"></i>
           <p className="absolute top-0 right-20">{totalData.length}</p>
          </div>
        <div> <i class="fa-regular border p-3 rounded-full bg-white fa-heart"></i></div>
       
      </div>
    </div>
  );
};

export default Navbar;
