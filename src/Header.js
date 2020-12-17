import React from 'react';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Pageview";
import ContactSupport from "@material-ui/icons/ContactSupport";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    className="header__avatar"
                    alt="Rafeh Qazi"
                    src=''
                />
                <AccessTimeIcon/>
            </div>
            <div className="header__search">
                <SearchIcon/>
                <input placeholder="Search Clever Programmer"/>
            </div>
            <div className="header_right">
                <ContactSupport/>
            </div>
        </div>
    )
}

export default Header
