import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  const { product_id,price, category_name, product_image } = data;
  return (
    <>
      <div className="cad bg-base-100 border rounded-lg  transiton hover:scale-105">
        <div className="flex justify-center ">
          <img className="h-[120px] bg-cover " src={product_image} alt="" />
        </div>
        <div className="card-body">
          <h2 className="card-title font-bold text-xl">{category_name}</h2>
          <p className="card-title">{price}</p>
          <Link to={`cardDetails/${product_id}`}>
          <button className=" border-2 w-36  rounded-full  text-purple-600  bg-gradient-to-r  font-semibold py-1">
            View Details
          </button></Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
