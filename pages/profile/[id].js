import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Avatar from "../../components/Avatar";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import ProfileImg from "../../public/assets/TEST/profile.jpg";
import ArrowIcon from "../../components/icons/Arrow";
import FollowerIcon from "../../components/icons/Follower";
import GithubIcon from "../../components/icons/Github";
import TwitterIcon from "../../components/icons/Twitter";
import LinkedinIcon from "../../components/icons/Linkedin";

export default function Profile({ loggedIn, user }) {
    // ======= Tab state -->
    const [curTab, setCurTab] = useState("projects");

    /**
     * takes initial array and returns trimmed array
     * @function
     *
     * @param {*[]} bubbles - Object array to be trimmed
     * @param {Number} [start = 0] - Start value for trim
     * @param {NUmber} [end = 0] - end value for trim
     * @returns {*[]} trimmed array
     */

    const bubbleTrimmer = (bubbles, start = 0, end = 0) => {
        // prettier-ignore
        return bubbles && bubbles.length > end
            ? bubbles.slice(start, end)
            : bubbles
    };
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

            {/* ====== #PROFILE head start */}
            <div className=" flex items-center justify-center  w-1/1 h-2/6 gap-2 relative bg-[#f8fbff]">
                <Avatar image={ProfileImg} className="h-64 relative w-64" />
                <div className=" h-60 flex p-2 flex-col justify-center">
                    <h1 className="text-heading title">{user.name} </h1>
                    <h2 className="text-deep-sky-blue subtitle">
                        {user.no_of_followers} followers
                    </h2>
                    <span className="flex pt-4 gap-3 cursor-pointer h-16">
                        {user &&
                            bubbleTrimmer(user.followers, 0, 6).map((follower, index) => {
                                return (
                                    <Avatar
                                        {...follower}
                                        className="-m-4 relative h-11 w-11 hover:scale-110"
                                        key={index}
                                    />
                                );
                            })}
                        <FollowerIcon className="ml-4 hover:scale-110" />
                    </span>
                    <span className="flex gap-3 items-center h-16 ">
                        <GithubIcon className=" h-8 w-8 hover:scale-110" />
                        <TwitterIcon className="  h-8 w-8 hover:scale-110" />
                        <LinkedinIcon className=" h-8 w-8 hover:scale-110" />
                    </span>
                </div>
            </div>

            {/* ====== #TAB section start */}
            <section>
                <div className="w1/1 bg-green-600 h-64 flex items-center flex-col pt-8 gap-3">
                    <nav className="flex gap-3">
                        <h1>PROJECTS</h1>
                        <h1>SCRAPBOOK</h1>
                    </nav>
                </div>
            </section>
        </div>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            loggedIn: false,
            user: {
                name: "Zach Latter",
                no_of_followers: 10,
                followers: [
                    { image: "/assets/TEST/img-1.jpg" },
                    { image: "/assets/TEST/img-2.jpg" },
                    { image: "/assets/TEST/img-3.jpg" },
                    { image: "/assets/TEST/img-4.jpg" },
                    { image: "/assets/TEST/img-5.jpg" },
                    { image: "/assets/TEST/img-6.jpg" },
                    { image: "/assets/TEST/img-7.jpg" },
                    { image: "/assets/TEST/img-8.jpg" },
                    { image: "/assets/TEST/img-9.jpg" },
                    { image: "/assets/TEST/img-10.jpg" }
                ],
                projects: []
            }
        }
    };
}
