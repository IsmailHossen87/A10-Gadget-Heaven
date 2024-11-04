import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreCart } from "../Utility/dataStore";
import DeshBoardCard from "../DeshBoardCard/DeshBoardCard";

const Dashboard = () => {
  const [collectData, setData] = useState([]);
  console.log(collectData);
  const data = useLoaderData();

  useEffect(() => {
    const storeCard = getStoreCart();
    const readCard = data?.filter((card) => storeCard.includes(card.product_id));
    setData(readCard);
  }, [data]);
  return (
    <>
      <div>
        <div className="container flex justify-between px-3">
          <div>
            <h3 className="font-bold">Cart : {collectData.length}</h3>
          </div>
          {/* show 3 category */}
          <div className="flex items-center space-x-8">
            <h3 className="font-bold mr-6">Total Cost : </h3>
            <button className="btn btn-warning">Sort by Price</button>
            <button className="btn btn-warning">Sort by Price</button>
          </div>
        </div>
        {
          collectData.map(card => <DeshBoardCard card={card}></DeshBoardCard>)
        }
      </div>
    </>
  );
};

export default Dashboard;
