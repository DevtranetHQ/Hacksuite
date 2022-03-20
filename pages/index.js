import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import DashNav from "../components/dash/DashNav";
import DarkModeContext from "../components/DarkModeContext";
import DarkModeToggle from "../components/DarkModeToggle";
import NotificationsLink from "../components/dash/NotificationsLink";
import placeholder from "../public/assets/dash/placeholder.svg";
import robotLight from "../public/assets/dash/robotLight.svg";
import robotDark from "../public/assets/dash/robotDark.svg";

export default function Dash({ loggedIn, admin, name, unread }) {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <DashNav admin={admin} />
            </div>
            <div className="dark:bg-[#202020] dark:text-white col-span-10 p-10 relative">
                <div className="text-right">
                    <DarkModeToggle />
                    <NotificationsLink unread={unread} />
                </div>
                <div className="text-center">
                    <h1 className="title">
                        Hey there,{" "}
                        <span className="text-fruit-salad">{name}.</span>
                    </h1>
                    <div className="mx-auto relative w-8/12">
                        <Image src={placeholder} />
                    </div>
                    <h1 className="text-66px -rotate-6">Welcome to</h1>
                    <h1 className="title uppercase">The Dynamics</h1>
                </div>
                <div className="fixed bottom-0 right-0 pb-3 pr-3 z-20">
                    {darkMode ? (
                        <Image src={robotDark} />
                    ) : (
                        <Image src={robotLight} />
                    )}
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    // TODO: Figure out better user schema for use across entire app (React contexts again from _app.js with localStorage?)
    return {
        props: {
            loggedIn: true,
            admin: false,
            name: "John",
            unread: true
        }
    };
}
