import React, { useState } from "react";
import "./sidebar.css"
import Home from "../Home/home";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
import SideBarList from "./sidebarList";

const Sidebar=()=>{

    const [expandSideBar, setExpandSIdeBar]=useState(true);

    const handleClickExpansion=()=>{
        setExpandSIdeBar(!expandSideBar)
    }

    return (
        <div className="container-fluid sidebar-section">
            <div className={expandSideBar ? "sidebar-expand sidebar" : "sidebar"}>
                <div className="icon-for-sidebar-expand-and-collapse">
                <p onClick={handleClickExpansion}>
                    {expandSideBar ? (<BsChevronLeft size={30} />) : (
                        <BsChevronRight size={30} />
                    )}
                    </p>
                </div>
                <SideBarList expandSideBar={expandSideBar}/>

            </div>
            <div className="container-fluid">
                <Home />
            </div>

        </div>
    )
}

export default Sidebar;