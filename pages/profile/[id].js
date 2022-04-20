import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Avatar from "../../components/Avatar";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import ArrowIcon from "../../components/icons/Arrow";
import CalendarIcon from "../../components/icons/Calendar";
import GithubIcon from "../../components/icons/Github";

export default function Profile({ loggedIn, user }) {
    /**
     * takes initial array and returns trimmed array
     *
     * @param {*[]} bubbles - Object array to be trimmed
     * @param {Number} [start = 0] - Start value for trim
     * @param {NUmber} [end = 0] - end value for trim
     * @returns {*[]}
     */

    const bubbleTrimmer = (bubbles, start = 0, end = 0) => {
        // prettier-ignore
        return bubbles && bubbles.length > 6
            ? bubbles.slice(start, end)
            : bubbles
    };

    console.log(bubbleTrimmer([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 0, 6));
    return (
        <div className="dark:bg-[#202020] dark:text-white h-screen ">
            {/* ====== NavBar start */}
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

            {/* ====== #profile head start */}
            <div className=" flex items-center justify-center  w-1/1 h-2/6 gap-2 relative bg-[#f8fbff]">
                <div className="relative flex  w-60 h-60 bg-green-600 rounded-full"></div>
                <div className="bg-yellow-500 w-2/5 h-60 flex p-2 flex-col justify-center">
                    <h1 className="text-heading title">{user.name} </h1>
                    <h2 className="text-deep-sky-blue subtitle">
                        {user.no_of_followers} followers
                    </h2>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            loggedIn: false,
            user: {
                name: "Zach Latter",
                no_of_followers: 10
            }
        }
    };
}
