// DeshBoardCard.js
import React, { useContext } from "react";
import { CartContext } from "../../Hooks/ContExt";

const DeshBoardCard = ({ card }) => {
  const { removeFromCart } = useContext(CartContext);
  const { category_name, product_id, product_image, description, price, rating } = card;

  return (
    <div className="flex my-7 bg-slate-100 w-2/3 mx-auto rounded-lg py-4 justify-between">
      <div className="flex gap-4">
        <img className="h-[100px] w-[100px]" src={product_image} alt="" />
        <div>
          <h3 className="font-bold">{category_name}</h3>
          <p className="text-gray-500">{description}</p>
          <p className="font-bold">Price : {price}</p>
          <p className="font-bold">Rating : {rating}</p>
        </div>
      </div>
      <div className="mr-2">
        <button onClick={() => removeFromCart(product_id)}>
          <i className="fa-solid p-3 rounded-full bg-gray-300 fa-delete-left"></i>
        </button>
      </div>
    </div>
  );
};

export default DeshBoardCard;
