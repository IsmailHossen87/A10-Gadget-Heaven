// Dashboard.js
import React, { useContext, useState } from "react";
import { CartContext } from "../../Hooks/ContExt";
import DeshBoardCard from "../DeshBoardCard/DeshBoardCard";
import Headingdescrip from "../HeadingDescription/Headingdescrip";


const Dashboard = () => {
  const { cartItems } = useContext(CartContext);
  const [sortBy, setSortBy] = useState(null); // State to track sorting option

  // Sort function
  const sortedCartItems = [...cartItems].sort((a, b) => {
    if (sortBy === "price") {
      return b.price - a.price; // Sort by price in descending order
    }
    if (sortBy === "rating") {
      return b.rating - a.rating; // Sort by rating in descending order
    }
    return 0;
  });

  return (
    <div>
      <Headingdescrip
        title="Dashboard"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      />
      <div className="container flex justify-between px-3">
        <h3 className="font-bold">Cart: {cartItems.length}</h3>
        <div className="flex space-x-4">
          <button onClick={() => setSortBy("price")} className="btn btn-warning">
            Sort by Price
          </button>
          <button onClick={() => setSortBy("rating")} className="btn btn-warning">
            Sort by Rating
          </button>
        </div>
      </div>

      {/* Empty state message */}
      {sortedCartItems.length === 0 ? (
        <div className="flex flex-col items-center mt-10">
      
          <p className="text-xl font-semibold text-gray-500">No data available</p>
        </div>
      ) : (
        sortedCartItems.map((card) => <DeshBoardCard key={card.product_id} card={card} />)
      )}
    </div>
  );
};

export default Dashboard;
