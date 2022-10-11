import React from 'react';
import { Outlet } from 'react-router-dom';
import CommonNavbar from '../components/CommonNavbar/CommonNavbar';

const Main = () => {
    return (
        <div>
            <CommonNavbar></CommonNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;