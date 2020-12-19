import React from 'react';
import './Sidebar.css';
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Create from "@material-ui/icons/Create";
import SidebarIcon from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy"
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

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
                <SidebarIcon Icon={InboxIcon} title="Mentions"/>
                <SidebarIcon Icon={DraftsIcon} title="Saved"/>
                <SidebarIcon Icon={BookmarkBorderIcon} title="Channel Browser"/>
                <SidebarIcon Icon={PeopleAltIcon} title="People"/>
                <SidebarIcon Icon={AppsIcon} title="Apps"/>
                <SidebarIcon Icon={FileCopyIcon} title="File Browser"/>
                <SidebarIcon Icon={ExpandLessIcon} title="Show Less"/>
                <hr/>
                <SidebarIcon Icon={ExpandMoreIcon} title="Channels"/>
                <hr/>
                <SidebarIcon Icon={AddIcon} addChannelOptions title="Add Chanel"/>
                {/* Connect to db and list all channels */}

        </div>
    )
}

export default Sidebar
