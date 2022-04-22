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
import ProfileProjectCard from "../../components/project/ProfileProjectCard";
import LinkedinIcon from "../../components/icons/Linkedin";

/**
 * takes initial array and returns trimmed array
 * @function
 *
 * @param {*[]} bubbles - Object array to be trimmed
 * @param {Number} [start = 0] - Start value for trim
 * @param {NUmber} [end = 0] - end value for trim
 * @returns {*[]} trimmed array
 */

export const bubbleTrimmer = (bubbles, start = 0, end = 0) => {
    // prettier-ignore
    return bubbles && bubbles.length > end
            ? bubbles.slice(start, end)
            : bubbles
};

export default function Profile({ loggedIn, user }) {
    // ======= Tab state -->
    // TODO: Set nav state for project and scrapbook
    const [curTab, setCurTab] = useState("projects");

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
            <div className=" flex items-center justify-center  w-1/1 h-[350px] gap-10 relative bg-[#f8fbff]">
                <Avatar image={ProfileImg} className="h-72 relative w-72" />
                <div className=" h-60 flex p-2 flex-col justify-center gap-2">
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
                    <span className="flex gap-2 items-center h-16 mt-2 ">
                        <GithubIcon className=" h-6 w-6 hover:scale-110" />
                        <TwitterIcon className="  h-6 w-6 hover:scale-110" />
                        <LinkedinIcon className=" h-6 w-6 hover:scale-110" />
                    </span>
                </div>
            </div>

            {/* ====== #TAB section start */}
            <section>
                <div className="w1/1  flex items-center flex-col pt-8 gap-5">
                    <nav className="flex justify-between w-2/6 items-center pb-24">
                        <h1 className="headline cursor-pointer">PROJECTS</h1>
                        <h1 className="headline cursor-pointer">SCRAPBOOK</h1>
                    </nav>
                    <div className="grid grid-cols-2 gap-10">
                        {user &&
                            user.projects.map((project, index) => {
                                return (
                                    <ProfileProjectCard
                                        key={index}
                                        bubbles={bubbleTrimmer(project.bubbles, 0, 3)}
                                        date="ferbrary 28, 2020"
                                        title="Web Scrapper"
                                        likes={93}
                                        image={project.image}
                                        comments={27}
                                        tags={bubbleTrimmer(project.tags, 0, 4)}
                                        desc={project.desc}
                                    />
                                );
                            })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export async function getServerSideProps(context) {
    // TODO: Call API for User profile data
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
                projects: [
                    {
                        bubbles: [1, 2, 3, 4, 5, 6],
                        date: "ferbrary 28, 2020",
                        title: "Web Scrapper",
                        desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
                        image: "/assets/TEST/user_projects/img-1.png",
                        comments: 22222,
                        likes: 33333333,
                        tags: ["NextJs", "Figma"]
                    },
                    {
                        bubbles: [1, 2, 3],
                        date: "ferbrary 28, 2020",
                        title: "Tesla",
                        desc: "Launched the first prototype of the world’s firts self-driving vehicle. Best part: 100% AI",
                        image: "/assets/TEST/user_projects/img-2.png",
                        comments: 22222,
                        likes: 33333333,
                        tags: ["React", "Vue", "Express", "Laravel"]
                    },
                    {
                        bubbles: [2],
                        date: "ferbrary 28, 2020",
                        title: "Codetivate",
                        desc: "The world’s largest diversity-focused hackhon web application built for this fall 2022",
                        image: "/assets/TEST/user_projects/img-3.png",
                        comments: 22222,
                        likes: 33333333,
                        tags: ["PHP", "Golang", "Adobe XD"]
                    },
                    {
                        bubbles: [],
                        date: "ferbrary 28, 2020",
                        title: "Command tech",
                        desc: "Advancing the partcipation of non-binary and female students in STEM worlwide ",
                        image: "/assets/TEST/user_projects/img-4.png",
                        comments: 22222,
                        likes: 33333333,
                        tags: ["Python"]
                    },
                    {
                        bubbles: [1, 2, 3, 4, 5, 6],
                        date: "ferbrary 28, 2020",
                        title: "Frelapay",
                        desc: "Get payments from all your freelance work converted into the highest selling cryptos",
                        image: "/assets/TEST/user_projects/img-5.png",
                        comments: 22222,
                        likes: 33333333,
                        tags: ["HTML", "CSS", "JSON"]
                    },
                    {
                        bubbles: [1, 2],
                        date: "ferbrary 28, 2020",
                        title: "Microsoft",
                        desc: "Coded Windows 7 a new OS from my dorm room, probably gonna dropout soon :(",
                        image: "/assets/TEST/user_projects/img-6.png",
                        comments: 22222,
                        likes: 33333333,
                        tags: ["Git", "Flask", "Django"]
                    }
                ]
            }
        }
    };
}
