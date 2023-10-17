import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Layout = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;