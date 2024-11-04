import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveCart } from "../Utility/dataStore";

const CardDetails = () => {
  const { details } = useParams();
  
  const data = useLoaderData();
  const newData = data.find((id) => id.product_id === details);
  const {
    product_id,
    Specification,
    rating,
    description,
    price,
    availability,
    product_image,
    product_title,
  } = newData;
//   set data localStorage
const handleAddtoCard = (id)=>{
    saveCart(id)
  }


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-6 lg:flex-row">
        <img className="max-w-sm rounded-lg shadow-2xl" src={product_image} />
        <div className="space-y-3">
          <h1 className="text-5xl font-bold">{product_title}</h1>
          <p className="font-semibold"> Price : $ {price}</p>
          <p className="rounded-full py-1 bg-lime-200 border-2 border-green-600 text-center w-1/3 ">
            {availability}
          </p>
          <p className=" ">{description}</p>
          <h3 className="font-bold">Specification : </h3>
          {Specification.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
          <h3 className="font-bold ">Rating : </h3>
          <div className="flex gap-6">
            {/* show rating */}
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked

              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
            {/* rataing value */}
            <div className="font-bold">{rating}</div>
          </div>
          <div className="flex gap-5">
            <button onClick={()=>handleAddtoCard(product_id)} className='border  rounded-full px-4 bg-purple-600  text-white border-purple-700 font-semibold py-1'>Add to Card <i class="fa-solid fa-cart-shopping"></i></button>
            <div className=""> <i class="fa-regular border p-3 rounded-full bg-white fa-heart"></i></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
