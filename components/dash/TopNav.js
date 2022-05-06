import React from 'react';
import DarkModeToggle from "../../components/DarkModeToggle";
import NotificationsLink from "../../components/dash/NotificationsLink";
import MenuBar from "./MenuBar.js"

const TopNav = ({ unread }) => {
    return (
        <div className="w-[100%] flex items-center justify-end absolute md:right-[2.5rem] right-[1rem] md:top-[2.5rem] top-[1.5rem] z-10" >
            <img src="/assets/logo.svg" alt="Dynamics Logo" className="md:hidden mr-auto ml-7 w-[4rem] h-[max-content]"/>
            <DarkModeToggle
                className="md:h-[30px] h-[21px]"
                darkClassName="md:h-[30px] h-[21px]"
            />
            <NotificationsLink unread={unread} className="md:h-[25px] h-[12px]" />
            <MenuBar className="md:w-[25px] md:h-[30px] w-[21px] h-[15px] mx-2 md:hidden" darkClassName="md:w-[25px] md:h-[30px] w-[21px] h-[15px] mx-2 md:hidden" />
        </div>
    );
}

export default TopNav;
