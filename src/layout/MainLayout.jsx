import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>

            
        </div>
    );
};

export default MainLayout;