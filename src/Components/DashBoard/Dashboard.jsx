import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreCart } from "../Utility/dataStore";
import DeshBoardCard from "../DeshBoardCard/DeshBoardCard";
import Headingdescrip from "../HeadingDescription/Headingdescrip";

const Dashboard = () => {

  const data = useLoaderData();
  const [collectData, setData] = useState(data);
  // const [sortData,setSotData] = useState([data])
  const handleSort =(sortBy) =>{
    if(sortBy === "price"){
      const sorted = [...data].sort((a,b)=> b.price - a.price)
      setData(sorted)
    }else if(sortBy === "rating"){
      const sorted = [...data].sort((a,b)=> b.rating - a.rating)
      setData(sorted)
    }
  }
  useEffect(() => {
    const storeCard = getStoreCart();
    const readCard = data?.filter((card) =>
      storeCard.includes(card.product_id)
    );
    setData(readCard);
  }, [data]);
  return (
    <>
      <div>
        <Headingdescrip
          title="Dashboard"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Headingdescrip>
        <div className="container flex justify-between px-3">
          <div>
            <h3 className="font-bold">Cart : {collectData.length}</h3>
          </div>
          {/* show 3 category */}
          <div className="flex items-center space-x-8">
            <h3 className="font-bold mr-6">Total Cost : </h3>
            <button onClick={()=>handleSort('price')} className="btn btn-warning">Sort by Price</button>
            <button onClick={()=>handleSort('rating')} className="btn btn-warning">Sort by Rating</button>
          </div>
        </div>
        {collectData.map((card) => (
          <DeshBoardCard card={card}></DeshBoardCard>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
