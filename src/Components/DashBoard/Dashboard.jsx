import React, { useContext, useState } from "react";
import { CartContext } from "../../Hooks/ContExt";
import DeshBoardCard from "../DeshBoardCard/DeshBoardCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { cartItems, wishlistitem } = useContext(CartContext);
  const [sortBy, setSortBy] = useState(null);
  const [view, setView] = useState("cart"); // New state for toggling view
  // Sort function

  // টাকা বের করার জন্য
  const totalAmountCart = cartItems.reduce((acc, item) => acc + item.price, 0);
  const totalAmountWishList = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const sortedItems = [...(view === "cart" ? cartItems : wishlistitem)].sort(
    (a, b) => {
      if (sortBy === "price") {
        return b.price - a.price;
      }
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      return 0;
    }
  );

  return (
    <div>
      {/* Heading Description */}
      <div className="bg-purple-500 max-w-screen-xl mx-auto rounded-xl">
        <div className="text-center md:w-2/3 mx-auto space-y-4 py-9 ">
          <h2 className="text-4xl font-semibold text-white">Dashboard</h2>
          <h2 className="md:w-2/3 mx-auto text-gray-200">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </h2>
          <div className="flex gap-5 justify-center">
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setView("cart")}
                className={`border border-white rounded-full px-4 bg-purple-500 mt-4 text-black  font-semibold py-1 ${
                  view === "cart" ? "bg-white text-black" : ""
                }`}
              >
                Cart
              </button>
              <button
                onClick={() => setView("wishlist")}
                className={`border rounded-full px-4 bg-purple-500 mt-4 text-black border-white font-semibold py-1 ${
                  view === "wishlist" ? "bg-white text-black" : "bg-purple-500"
                }`}
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex py-3 items-center  justify-between px-3 mt-5">
        <h3 className="font-bold text-xl">
          {view === "cart"
            ? `Cart: ${cartItems.length}`
            : `Wishlist: ${wishlistitem.length}`}
        </h3>
        <div className="font-bold text-xl">
          {view === "cart"
            ? `Total Amount : ${totalAmountCart}`
            : `Total Amount : ${totalAmountWishList}`}
        </div>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => setSortBy("price")}
            className="btn btn-warning"
          >
            Sort by Price
          </button>
          <button
            onClick={() => setSortBy("rating")}
            className="btn btn-warning"
          >
            Sort by Rating
          </button>
          {/* Modal start */}

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-2xl">Payment Successfully</h3>
             <div className="w-2/3 mx-auto my-2"> <hr /></div>
              <div className="mt-4">
                <p>Thanks for Purchasing</p>
                {view === "cart"
                  ? `Total: ${totalAmountCart}`
                  : `Total: ${totalAmountWishList}`}
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* close the modal */}
                  <Link to={'/'}><button className="btn w-full">Close</button></Link>
                </form>
              </div>
            </div>
          </dialog>

          {/* modal end */}

          {/* Purchase Part */}
          <button
            onClick={() => my_modal_1.showModal()}
            className="border rounded-full px-4 bg-white text-purple-600 border-purple-700 font-semibold py-1"
          >
            Purchase
          </button>
        </div>
      </div>

      {/* Conditional rendering based on the view */}
      {sortedItems.length === 0 ? (
        <div className="flex flex-col items-center mt-10">
          <p className="text-xl font-semibold text-gray-500">
            No {view} items available
          </p>
        </div>
      ) : (
        sortedItems.map((card) => (
          <DeshBoardCard key={card.product_id} view={view} card={card} />
        ))
      )}
    </div>
  );
};

export default Dashboard;

// // Dashboard.js
// import React, { useContext, useState } from "react";
// import { CartContext } from "../../Hooks/ContExt";
// import DeshBoardCard from "../DeshBoardCard/DeshBoardCard";
// import Headingdescrip from "../HeadingDescription/Headingdescrip";
// import { Link } from "react-router-dom";
// import Showcard from "../showCard/Showcard";

// const Dashboard = () => {
//   const { cartItems, wishlistitem } = useContext(CartContext);
//   const [sortBy, setSortBy] = useState(null);
//   // Sort function
//   const sortedCartItems = [...cartItems].sort((a, b) => {
//     if (sortBy === "price") {
//       return b.price - a.price;
//     }
//     if (sortBy === "rating") {
//       return b.rating - a.rating;
//     }
//     return 0;
//   });

//   return (
//     <div>
//       {/* Heading Description */}
//       <div className="bg-purple-500 max-w-screen-xl mx-auto rounded-xl">
//         <div className="text-center md:w-2/3 mx-auto space-y-4 py-9 ">
//           <h2 className="text-4xl font-semibold text-white">Dashboard</h2>
//           <h2 className="md:w-2/3 mx-auto text-gray-200">
//             Explore the latest gadgets that will take your experience to the
//             next level. From smart devices to the coolest accessories, we have
//             it all!
//           </h2>
//           <div className="flex gap-5 justify-center">
//             {/* এখানে ২ টা বাটন রাখব */}
//             <div className="flex gap-4 items-center">

//                 <button
//                   className="border   rounded-full px-4 bg-white  mt-4  text-purple-600 border-purple-700 font-semibold py-1"
//                 >
//                   Card
//                 </button>
//               <button className="border  rounded-full px-4 bg-white  mt-4  text-purple-600 border-purple-700 font-semibold py-1">
//                 WishList
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* end */}
//       <div className="container flex justify-between px-3">
//         <h3 className="font-bold">Cart: {cartItems.length}</h3>
//         <div className="flex space-x-4">
//           <button
//             onClick={() => setSortBy("price")}
//             className="btn btn-warning"
//           >
//             Sort by Price
//           </button>
//           <button
//             onClick={() => setSortBy("rating")}
//             className="btn btn-warning"
//           >
//             Sort by Rating
//           </button>
//         </div>
//       </div>

//       {/* Empty state message */}

//       {sortedCartItems.length === 0 ? (
//         <div className="flex flex-col items-center mt-10">
//           <p className="text-xl font-semibold text-gray-500">
//             No data available
//           </p>
//         </div>
//       ) : (
//         sortedCartItems.map((card) => (
//           <DeshBoardCard key={card.product_id} card={card} />
//         ))
//       )}

//       {wishlistitem.length === 0 ? (
//         <div className="flex flex-col items-center mt-10"></div>
//       ) : (
//         wishlistitem.map((card) => (
//           <DeshBoardCard key={card.product_id} card={card} />
//         ))
//       )}
//     </div>
//   );
// };

// export default Dashboard;
