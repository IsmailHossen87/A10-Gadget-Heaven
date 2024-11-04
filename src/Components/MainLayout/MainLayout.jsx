import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className=''>
           <Navbar></Navbar>
            <div className='max-w-screen-xl mx-auto '>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;