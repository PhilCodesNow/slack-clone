import React from 'react';
import './Sidebar.css';
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Create from "@material-ui/icons/Create";
import SidebarIcon from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Clever Programmer</h2>
                    <h3>
                        <FiberManualRecord/>
                        Rafeh Qazi
                    </h3>
                </div>
                    <Create/>
                    
                
            </div>
                <SidebarIcon Icon={InsertCommentIcon} title="Threads"/>
                <SidebarIcon title="youtube" />
        </div>
    )
}

export default Sidebar
