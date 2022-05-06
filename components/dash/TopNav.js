import React from 'react';
import DarkModeToggle from "../../components/DarkModeToggle";
import NotificationsLink from "../../components/dash/NotificationsLink";
import MenuBar from "./MenuBar.js"
import { useContext } from "react";
import DarkModeContext from "../DarkModeContext";

const TopNav = ({ unread }) => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className="w-[100%] flex items-center justify-end absolute md:right-[2.5rem] right-[1rem] md:top-[2.5rem] top-[1.5rem] z-10" >
            <img src="/assets/logo.svg" alt="Dynamics Logo" className={`md:hidden mr-auto ml-7 w-[4rem] h-[max-content] ${darkMode ? "hidden" : ""}`}/>
            <img src="/assets/logo-dark.svg" alt="Dynamics Logo" className={`md:hidden mr-auto ml-7 w-[4rem] h-[max-content] ${!darkMode ? "hidden" : ""}`}/>
            <DarkModeToggle
                className="md:h-[30px] h-[23px]"
                darkClassName="md:h-[30px] h-[23px]"
            />
            <NotificationsLink unread={unread} className="md:h-[25px] h-[1.37rem]" />
            <MenuBar className="md:w-[25px] md:h-[30px] w-[21px] h-[21px] mx-2 md:hidden" darkClassName="md:w-[25px] md:h-[30px] w-[21px] h-[21px] mx-2 md:hidden" />
        </div>
    );
}

export default TopNav;
