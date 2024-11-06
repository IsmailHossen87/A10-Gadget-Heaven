import React from "react";
import Banner from "../Banner/Banner";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import { Outlet, } from "react-router-dom";
import Category from "../Category/Category";
import { Helmet } from "react-helmet"

const Home = () => {
  // const data = useLoaderData()
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <HeadingTitle
        title="Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      ></HeadingTitle>
      <Banner></Banner>
      <div className="flex gap-4 max-w-screen-xl mx-auto">
        <Category></Category>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
