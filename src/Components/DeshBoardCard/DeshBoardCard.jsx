import React from "react";

const DeshBoardCard = ({ card }) => {
  const { category_name, product_image, description, price } = card;
  return (
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
        </div>
      </div>
      {/* cross btn */}
      <div className="mr-2">
      <i class="fa-solid p-3 rounded-full bg-gray-300 fa-delete-left"></i>
      </div>
    </div>
  );
};

export default DeshBoardCard;
