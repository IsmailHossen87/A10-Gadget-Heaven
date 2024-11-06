import React, { useContext, useState } from "react";
import { CartContext } from "../../Hooks/ContExt";
import DeshBoardCard from "../DeshBoardCard/DeshBoardCard";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import modalImage from '../../assets/Group.png';
import { Helmet } from "react-helmet"


const Dashboard = () => {
  const { cartItems, wishlistitem, clearLocalStorage, clearLocalStorageWish } =
    useContext(CartContext);
  const [sortBy, setSortBy] = useState(null);
  const [view, setView] = useState("cart");

  // টাকা বের করার জন্য and   // Sort function
  const totalAmountCarT = cartItems.reduce((acc, item) => acc + item.price, 0);
  const totalAmountCart = totalAmountCarT.toFixed(2)
  const totalAmountWishLisT = wishlistitem.reduce((acc, item) => acc + item.price,0);
  const totalAmountWishList = totalAmountWishLisT.toFixed(2)

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

  const handlePurchaseClick = () => {
    // যদি ডাটা না থাকে তাহলে মডাল দখাবে না
    if (cartItems.length === 0 && wishlistitem.length === 0) {
      toast.warn('No items in cart available!', {
        position: "top-center",
        autoClose: 1200,
      });
    } else {
      my_modal_1.showModal();
    }
  };
  return (
    <div>
      {/* Heading Description */}
      <Helmet>
        <title>DeshBoard</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
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

      <div className="container flex py-3 items-center   justify-between px-3 mt-5">
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
        <div className="flex space-x-4">
          <button

            onClick={() => setSortBy("price")}
            
            className="border rounded-full px-4  bg-white  text-purple-600 border-purple-700 font-semibold py-1"
          >
            sort by Price
            <i class="fa-solid mx-2 ml-2 rotate-90 fa-sliders"></i>
          </button>
          <button
            onClick={() => setSortBy("rating")}
            className="border rounded-full px-4 bg-white  text-purple-600 border-purple-700 font-semibold py-1"
          >
            sort by Rating
            <i class="fa-solid ml-2 rotate-90 fa-sliders"></i>
          </button>

          {/* Modal start */}
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
            <div className="flex justify-center"><img src={modalImage} alt="" /></div>
            {" "}
              <h3 className="font-bold text-2xl">Payment Successfully</h3>
              <div className="w-2/3 mx-auto my-2">
                <hr />
              </div>
              <div className="mt-4">
                <p>Thanks for Purchasing</p>
                {view === "cart"
                  ? `Total: ${totalAmountCart}`
                  : `Total: ${totalAmountWishList}`}
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* close the modal */}
                  <Link to={"/"}>
                    {" "}
                    <button
                      onClick={() => {
                        if (view === "cart") {
                          clearLocalStorage();
                        } else {
                          clearLocalStorageWish();
                        }
                      }}
                      className="btn w-full"
                    >
                      Close
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </dialog>

          {/* modal end */}

          {/* purchase বাটনে click korle কিছু হবে */}
          <button
            onClick={handlePurchaseClick}
            className="border rounded-full px-4 bg-gradient-to-r from-pink-500 to-purple-500  text-white  font-semibold py-1"
          >
            Purchase
            
          </button>
        </div>
      </div>

      {/* Conditional rendering */}
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
