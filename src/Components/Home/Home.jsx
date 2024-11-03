import React from 'react';
import Banner from '../Banner/Banner';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import { Outlet, useLoaderData, } from 'react-router-dom';
import Category from '../Category/Category';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <HeadingTitle title='Upgrade Your Tech Accessorize with Gadget Heaven Accessories'  subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></HeadingTitle>
            <Banner></Banner> 
            <Category category={data}></Category>
            <Outlet></Outlet>      
        </div>
    );
};

export default Home;