import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import { saveCart } from "../Utility/dataStore";
import Headingdescrip from "../HeadingDescription/Headingdescrip";
import { CartContext } from "../../Hooks/ContExt";
import ReactStars from "react-rating-stars-component";

const CardDetails = () => {
  const { details } = useParams();
  const { addToCart, addToWishList } = useContext(CartContext);
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
  const handleAddtoCart = () => {
    addToCart(newData); // Use the context method to add item to cart
  };
  const handleWishList = () => {
    addToWishList(newData);
  };
  return (
    <>
      <div className="relative h-[700px]">
        <Headingdescrip
          title="Product Details"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Headingdescrip>

        <div className="max-w-screen-md mx-auto hero bg-base-200 top-40 absolute right-64 rounded-2xl">
          <div className="hero-content flex-col gap-8 lg:flex-row">
            <img
              className="max-w-sm rounded-lg shadow-2xl"
              src={product_image}
            />
            <div className="space-y-3 text-start">
              <h1 className="text-4xl font-semibold">{product_title}</h1>
              <p className="font-semibold"> Price : $ {price}</p>
              <p className="rounded-full py-1 bg-lime-200 border-2 border-green-600 text-center w-1/3 ">
                {availability}
              </p>
              <p className=" ">{description}</p>
              {/* sdhfasdkjlhfkjsadhfjsdhfkjasdhfkjsdhf */}
              <div className="mt-4">
                <h3 className="font-bold">Specification:</h3>
                <ul className="list-disc text-start space-y-1">
                  {Specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>

              {/* rating section */}
              <div className="flex items-center gap-5">
                <h3 className="font-bold ">Rating : </h3>
                <div className="flex gap-6">
                  {/* show rating */}
                  <ReactStars
                    size={30}
                    count={5}
                    value={rating}
                    edit={false}
                  ></ReactStars>
                  <div className="flex items-center">
                    {" "}
                    <p className="font-semibold">{rating}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <button
                  onClick={handleAddtoCart}
                  className="border  rounded-full px-4 bg-purple-600  text-white border-purple-700 font-semibold py-1"
                >
                  Add to Card <i class="fa-solid fa-cart-shopping"></i>
                </button>
                <div className="">
                  <button onClick={handleWishList}>
                    <i class="fa-regular border p-3 rounded-full bg-white fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
