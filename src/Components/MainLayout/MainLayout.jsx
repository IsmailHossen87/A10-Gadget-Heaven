import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className=''>
           <Navbar></Navbar>
            <div className='min-h-[calc(100vh-300px)] container py-12 mx-auto'>
            <Outlet></Outlet>
            </div>
            <div className=''><Footer></Footer></div>
        </div>
    );
};

export default MainLayout;