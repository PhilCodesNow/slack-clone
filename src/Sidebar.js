import React from 'react';
import './Sidebar.css';
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Create from "@material-ui/icons/Create";

function Sidebar() {
    return (
        <div classname="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Clever Programmer</h2>
                    <h3>
                        <FiberManualRecord/>
                        Rafeh Qazi
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
