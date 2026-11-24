import * as React from 'react';
import './mainlayout.css';
import { Outlet } from "react-router";
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';


const MainLayout = React.memo(() => {
    return (
        <div className='main-layout'>
            <div className="container">
                <div className="sidebar-main relative">
                    <Sidebar />
                </div>
                <div className='main-content-container'>
                    <div className="header-main">
                        <Header />
                    </div>
                    <div className="content-main">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
})

export default MainLayout