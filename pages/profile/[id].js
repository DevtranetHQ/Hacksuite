import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Avatar from "../../components/Avatar";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import ArrowIcon from "../../components/icons/Arrow";
import CalendarIcon from "../../components/icons/Calendar";
import GithubIcon from "../../components/icons/Github";

export default function Profile({ loggedIn }) {
    return (
        <div className="dark:bg-[#202020] dark:text-white min-h-screen">
            <nav className="flex items-center justify-between pl-8 pr-12">
                <Logo className="w-[120px] py-5" />
                <div className="flex gap-x-2">
                    <DarkModeToggle
                        className="mx-0 w-[40px] h-[40px]"
                        darkClassName="mx-0 w-[40px] h-[42px]"
                    />
                    <a href="https://github.com/TheDynamics">
                        <GithubIcon />
                    </a>
                    <Link href="/">
                        <button className="button-medium button-deep-sky-blue inline-flex gap-x-3 items-center mx-2">
                            {loggedIn ? "Go back home" : "All Events"}
                            <ArrowIcon />
                        </button>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            loggedIn: false
        }
    };
}
