import React, { useState } from 'react';
import DarkModeToggle from "../../components/DarkModeToggle";
import NotificationsLink from "../../components/dash/NotificationsLink";
import MenuBar from "./MenuBar.js"
import { useContext } from "react";
import DarkModeContext from "../DarkModeContext";
import Link from "next/link";
import { useRouter } from "next/router";


const TopNav = ({ unread }) => {
    const { darkMode } = useContext(DarkModeContext);
    const router = useRouter();
    const { pathname } = router;
    const [openNavbar, setOpenNavBar] = useState(false);

    const openNavbarHandler = () => {
        setOpenNavBar(true)

    }

    const closeNavbarHandler = () => {
        setOpenNavBar(false)
    }
    return (
        <>
            <div className="w-[100%] flex items-center justify-end fixed md:right-[2.5rem] right-[1rem] md:top-[2.5rem] top-[.9rem] z-10" >
                <img src="/assets/logo.svg" alt="Dynamics Logo" className={`md:hidden mr-auto ml-7 w-[4rem] h-[max-content] ${darkMode ? "hidden" : ""}`} />
                <img src="/assets/logo-dark.svg" alt="Dynamics Logo" className={`md:hidden mr-auto ml-7 w-[4rem] h-[max-content] ${!darkMode ? "hidden" : ""}`} />
                <DarkModeToggle
                    className="md:h-[30px] h-[23px]"
                    darkClassName="md:h-[30px] h-[23px]"
                />
                <NotificationsLink unread={unread} className="md:h-[25px] h-[1.37rem]" />
                <MenuBar className="md:w-[25px] md:h-[30px] w-[21px] h-[21px] mx-2 md:hidden" darkClassName="md:w-[25px] md:h-[30px] w-[21px] h-[21px] mx-2 md:hidden" openNav={openNavbarHandler} />
            </div>
            {
                openNavbar ? <div className="w-[100%] text-[14px] mt-[4.5rem] flex flex-col gap-3 absolute bg-white z-10 pb-5 transition duration-150 ease-out md:hidden">
                    <button className="w-[max-content] justify-self-end self-end mr-6" onClick={closeNavbarHandler}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3">
                        <path d="M1.62405 0L0 1.62405L8.37595 10L0 18.376L1.62405 20L10 11.624L18.376 20L20 18.376L11.624 10L20 1.62405L18.376 0L10 8.37595L1.62405 0Z" fill="#03A9F4" />
                    </svg>
                    </button>

                    <hr style={{
                        border: "1.5px solid #F8FBFF"
                    }} />
                    <>
                        <Link href="/app">
                            <div
                                className={
                                    router.pathname === "/app" ? "text-orange-peel flex items-center px-4" : "cursor-pointer hover:text-orange-peel transition flex items-center px-4"
                                } onClick={closeNavbarHandler}>
                                <svg
                                    width="39"
                                    height="33"
                                    viewBox="0 0 41 35"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 mr-2">
                                    <path
                                        d="M20.5001 6.14292L30.2917 14.9554V30.25H26.3751V18.5H14.6251V30.25H10.7084V14.9554L20.5001 6.14292ZM20.5001 0.875L0.916748 18.5H6.79175V34.1667H18.5417V22.4167H22.4584V34.1667H34.2084V18.5H40.0834L20.5001 0.875Z"
                                        fill="#03A9F4"
                                    />
                                </svg>
                                <span>Home</span>
                            </div>
                        </Link>
                        <Link href="/app/settings">
                            <div
                                className={
                                    router.pathname === "/app/settings"
                                        ? "text-orange-peel flex items-center px-4"
                                        : "cursor-pointer hover:text-orange-peel transition flex items-center px-4"
                                } onClick={closeNavbarHandler}>
                                <svg
                                    width="39"
                                    height="33"
                                    viewBox="0 0 39 41"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 mr-2">
                                    <path
                                        d="M19.4999 12.6667C21.5775 12.6667 23.5699 13.492 25.0389 14.961C26.508 16.43 27.3333 18.4225 27.3333 20.5C27.3333 22.5775 26.508 24.57 25.0389 26.039C23.5699 27.508 21.5775 28.3333 19.4999 28.3333C17.4224 28.3333 15.43 27.508 13.9609 26.039C12.4919 24.57 11.6666 22.5775 11.6666 20.5C11.6666 18.4225 12.4919 16.43 13.9609 14.961C15.43 13.492 17.4224 12.6667 19.4999 12.6667ZM19.4999 16.5833C18.4612 16.5833 17.4649 16.996 16.7304 17.7305C15.9959 18.465 15.5833 19.4612 15.5833 20.5C15.5833 21.5388 15.9959 22.535 16.7304 23.2695C17.4649 24.004 18.4612 24.4167 19.4999 24.4167C20.5387 24.4167 21.5349 24.004 22.2694 23.2695C23.0039 22.535 23.4166 21.5388 23.4166 20.5C23.4166 19.4612 23.0039 18.465 22.2694 17.7305C21.5349 16.996 20.5387 16.5833 19.4999 16.5833ZM15.5833 40.0833C15.0937 40.0833 14.6824 39.7308 14.6041 39.2608L13.8795 34.0713C12.6458 33.5817 11.5883 32.9158 10.5699 32.1325L5.69367 34.1104C5.26284 34.2671 4.73409 34.1104 4.49909 33.6796L0.582422 26.9038C0.462563 26.702 0.420309 26.4634 0.46356 26.2328C0.506811 26.0021 0.632607 25.7951 0.817422 25.6504L4.94951 22.3996L4.81242 20.5L4.94951 18.5417L0.817422 15.3496C0.632607 15.2049 0.506811 14.9979 0.46356 14.7672C0.420309 14.5366 0.462563 14.298 0.582422 14.0963L4.49909 7.32042C4.73409 6.88959 5.26284 6.71334 5.69367 6.88959L10.5699 8.84792C11.5883 8.08417 12.6458 7.41834 13.8795 6.92876L14.6041 1.73917C14.6824 1.26917 15.0937 0.916672 15.5833 0.916672H23.4166C23.9062 0.916672 24.3174 1.26917 24.3958 1.73917L25.1203 6.92876C26.3541 7.41834 27.4116 8.08417 28.4299 8.84792L33.3062 6.88959C33.737 6.71334 34.2658 6.88959 34.5008 7.32042L38.4174 14.0963C38.672 14.5271 38.5545 15.0558 38.1824 15.3496L34.0503 18.5417L34.1874 20.5L34.0503 22.4583L38.1824 25.6504C38.5545 25.9442 38.672 26.4729 38.4174 26.9038L34.5008 33.6796C34.2658 34.1104 33.737 34.2867 33.3062 34.1104L28.4299 32.1521C27.4116 32.9158 26.3541 33.5817 25.1203 34.0713L24.3958 39.2608C24.3174 39.7308 23.9062 40.0833 23.4166 40.0833H15.5833ZM18.0312 4.83334L17.3066 9.94459C14.9566 10.4342 12.8808 11.6875 11.3728 13.4304L6.65326 11.3938L5.18451 13.9396L9.31659 16.975C8.53326 19.2597 8.53326 21.7403 9.31659 24.025L5.16492 27.08L6.63367 29.6258L11.3924 27.5892C12.9003 29.3125 14.9566 30.5658 17.287 31.0358L18.0116 36.1667H20.9883L21.7128 31.0554C24.0433 30.5658 26.0995 29.3125 27.6074 27.5892L32.3662 29.6258L33.8349 27.08L29.6833 24.0446C30.4666 21.7533 30.4666 19.2663 29.6833 16.975L33.8153 13.9396L32.3466 11.3938L27.627 13.4304C26.0882 11.649 24.0008 10.4296 21.6933 9.96417L20.9687 4.83334H18.0312Z"
                                        fill="#03A9F4"
                                    />
                                </svg>
                                <span>Settings</span>
                            </div>
                        </Link>
                        <Link href="/logout">
                            <div className="cursor-pointer text-white transition flex items-center bg-deep-sky-blue py-1 px-4" onClick={closeNavbarHandler}>
                                <svg
                                    width="39"
                                    height="33"
                                    viewBox="0 0 37 41"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 mr-2">
                                    <path
                                        d="M26.3333 30.2917V24.4167H12.625V16.5833H26.3333V10.7083L36.125 20.5L26.3333 30.2917ZM22.4167 0.916664C23.4554 0.916664 24.4517 1.32931 25.1862 2.06383C25.9207 2.79835 26.3333 3.79457 26.3333 4.83333V8.75H22.4167V4.83333H4.79167V36.1667H22.4167V32.25H26.3333V36.1667C26.3333 37.2054 25.9207 38.2016 25.1862 38.9362C24.4517 39.6707 23.4554 40.0833 22.4167 40.0833H4.79167C3.7529 40.0833 2.75668 39.6707 2.02216 38.9362C1.28765 38.2016 0.875 37.2054 0.875 36.1667V4.83333C0.875 3.79457 1.28765 2.79835 2.02216 2.06383C2.75668 1.32931 3.7529 0.916664 4.79167 0.916664H22.4167Z"
                                        fill="#ffffff"
                                    />
                                </svg>
                                <span>Logout</span>
                            </div>
                        </Link>
                    </>
                </div> : ""
            }

        </>
    );
}

export default TopNav;
