import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { CartProvider } from '../../Hooks/ContExt';

const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div className='-mt-4'>
            <ToastContainer></ToastContainer>
           <Navbar></Navbar>
            <div className='max-w-screen-xl mx-auto '>
                {
                    navigation.state === 'loading'? <span className="loading loading-ring loading-lg"></span> :''
                }
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;