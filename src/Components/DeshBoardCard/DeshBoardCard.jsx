import React from "react";
import { getStoreCart, saveCart } from "../Utility/dataStore";

const DeshBoardCard = ({ card }) => {

  const { category_name,product_id, product_image, description, price,rating} = card;

const handleDelete =(id)=>{
  const getCollectData = getStoreCart()
  const remaining = getCollectData.filter(data => data != id);
  console.log(remaining,id)
  localStorage.setItem('cart',JSON.stringify(remaining))
}
  return (
    <>
      <div className="flex  my-7 bg-slate-100 w-2/3 mx-auto rounded-lg py-4 justify-between ">
        <div className="flex gap-4">
          {/* image */}
          <div>
            <img className="h-[100px] w-[100px]" src={product_image} alt="" />
          </div>
          {/* 3 text */}
          <div>
            <h3 className="font-bold">{category_name}</h3>
            <p className="text-gray-500">{description}</p>
            <p className="font-bold">Price : {price}</p>
            <p className="font-bold">Rating : {rating}</p>
          </div>
        </div>
        {/* cross btn */}
        <div className="mr-2">
         <button onClick={()=> handleDelete(product_id)}> <i class="fa-solid p-3 rounded-full bg-gray-300 fa-delete-left"></i></button>
        </div>
      </div>
    </>
  );
};

export default DeshBoardCard;
