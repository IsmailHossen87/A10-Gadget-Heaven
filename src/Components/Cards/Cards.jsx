import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  const {price} = data;
  return (
    <div className="card bg-base-100  shadow-xl transiton hover:scale-105">
      <Link className="">
      <div className="card-body">
        <h2 className="card-title">{price}</h2>
       
      </div></Link>
    </div>
  );
};

export default Cards;
