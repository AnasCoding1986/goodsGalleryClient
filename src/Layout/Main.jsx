import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sections/Footer/Footer';
import Navbar from '../Sections/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;