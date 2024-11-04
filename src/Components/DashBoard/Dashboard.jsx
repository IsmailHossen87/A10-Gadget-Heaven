import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreCart } from "../Utility/dataStore";

const Dashboard = () => {
  const [collectData,setData] = useState([])
  // console.log(collectData)
  const data = useLoaderData()
  useEffect(()=>{
    const storeCard = getStoreCart()
    const searctData = data.filter(card => storeCard.includes(card.category_id))
    setData(searctData)
  
  },[data])
  return (
   <>
    <div className="container flex justify-between">
        <div><h3 className="font-bold">Cart</h3></div>
        {/* show 3 category */}
        <div className="flex items-center space-x-8">
        <h3 className="font-bold mr-6">Total Cost : </h3>
        <button className="btn btn-warning">Sort by Price</button>
        <button className="btn btn-warning">Sort by Price</button>
        </div>
    </div>
   </>
  );
};

export default Dashboard;
