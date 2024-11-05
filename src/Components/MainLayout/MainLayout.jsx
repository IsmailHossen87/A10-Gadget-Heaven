import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { CartProvider } from '../../Hooks/ContExt';

const MainLayout = () => {
    return (
        <div className='-mt-4'>
            <ToastContainer></ToastContainer>
           <Navbar></Navbar>
            <div className='max-w-screen-xl mx-auto '>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;