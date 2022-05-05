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
import Empty from "../../components/Empty";
import ProjectGalleryProjectCard from "../../components/project/ProjectGalleryProjectCard";


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
      <nav className="flex items-center justify-between pl-[10px] lg:pl-[37px] pr-[10px] lg:pr-[37px]">
        <Logo className="md:w-[120px] py-5 w-[100px]" />
        <div className="flex gap-x-[0px] md:gap-x-3 lg:gap-x-5 items-center">
          <DarkModeToggle
                  className="mx-0 w-[25px] md:w-[44px] lg:scale-[1.24] lg:mr-[10px]"
                  darkClassName="mx-0 w-[25px] md:w-[33px] lg:w-[40px] h-[25px] md:h-[48px] lg:h-[60px]"
              />
            <a href="https://github.com/TheDynamics" className="scale-75 lg:scale-[1.4] md:scale-[1.15]">
                <GithubIcon />
            </a>
          <Link href="https://thedynamics.tech">
            <button className="px-[10px] py-[6px] md:py-[2px] bg-[#03a9f4] text-white rounded-[6px] text-[12px] md:text-[23px] lg:text-[28px] lg:button-big button-deep-sky-blue inline-flex gap-x-1 md:gap-x-3 items-center mx-0 my-0 md:my-0 focus:outline-none">
              {loggedIn ? "Go back home" : "All Events"}
              <div className="scale-75 md:scale-100 lg:relative lg:top-[2px]">
                  <ArrowIcon />
              </div>
            </button>
          </Link>
        </div>
      </nav>

      {/* ====== #PROFILE head start */}
      <div className=" flex items-center justify-center w-1/1 h-[350px] md:gap-10 gap-4 relative bg-[#f8fbff] dark:bg-[#2D2D2D]">
        <Avatar image={ProfileImg} className="md:h-72 relative md:w-72 h-[170px] w-[170px]" />
        <div className=" h-60 flex p-2 flex-col justify-center md:gap-2 gap-0">
          <h1 className="text-heading md:title subtitle dark:text-white">{user.name} </h1>
          {user.no_of_followers === 0 ? (
            <div className="flex items-center">
              <h2 className="text-deep-sky-blue text-16px">
                Follow {user.name}{" "}
                <span>
                  <FollowerIcon className="md:ml-4 hover:scale-110  md:inline-flex hidden" />
                </span>
              </h2>
            </div>
          ) : (
            <div>
              <h2 className="text-deep-sky-blue md:subtitle text-16px">
                {user.no_of_followers} followers
              </h2>
              <span className="flex pt-4 gap-3 cursor-pointer h-16 pl-4">
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
                <FollowerIcon className="ml-4 hover:scale-110 hidden md:inline-flex" />
              </span>
            </div>
          )}

          <span className="flex gap-2 items-center h-16 md:mt-4 mt-0 ">
            <GithubIcon className=" h-6 w-6 hover:scale-110" />
            <TwitterIcon className="  h-6 w-6 hover:scale-110" />
            <LinkedinIcon className=" h-6 w-6 hover:scale-110" />
          </span>
        </div>
      </div>

      {/* ====== #TAB section start */}
      <section className="flex itens-center flex-col pb-16 items-center dark:bg-[#202020]">
        <nav className="flex justify-between w-3/6 items-center md:pb-24 md:pt-24 pb-12 pt-12">
          <h1 className="md:headline font-bold cursor-pointer tab-option relative border-b-4 border-orange-peel">
            PROJECTS
          </h1>
          <h1 className="md:headline font-bold cursor-pointer tab-option relative">SCRAPBOOK</h1>
        </nav>
        {user.projects.length === 0 ? (
          <Empty />
        ) : (
          <div className="grid gap-5  xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  content-center justify-center">
            {user &&
              user.projects.map((project, index) => {
                return (
                  <ProjectGalleryProjectCard
                    key={index}
                    name={project.name}
                    tools={project.tools}
                    bubbles={bubbleTrimmer(project.bubbles, 0, 3)}
                    bubbleNumber={project.bubbles.length}
                    date={project.date}
                    title="Web Scrapper"
                    likes={93}
                    image={project.image}
                    comments={27}
                    tags={bubbleTrimmer(project.tags, 0, 4)}
                    desc={project.desc}
                    className="w-full flex flex-col bg-[#f8fbff] dark:bg-[#2D2D2D] rounded-xl overflow-hidden shadow-xl hover:shadow-xxl p-3"

                  />
                );
              })}
          </div>
        )}
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
        name: "Zach Latta",
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
            name: "Zach Latta",
            tools: ['github'],
            bubbles: [],
            date: "11:00 am, Today",
            title: "Web Scrapper",
            desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
            image: "/assets/TEST/user_projects/img-1.png",
            comments: 22222,
            likes: 33333333,
            tags: ["NextJs", "Figma"], 
            liked: true
          },
          {
            name: "Elon Musk",
            tools: ['figma', 'github'],
            bubbles: [],
            date: "12:00 pm, Today, 2020",
            title: "Tesla",
            desc: "Launched the first prototype of the world’s firts self-driving vehicle. Best part: 100% AI",
            image: "/assets/TEST/user_projects/img-2.png",
            comments: 22222,
            likes: 33333333,
            tags: ["React", "Vue", "Laravel"]
          },
          {
            name: "Dora Palfi",
            tools: ['figma', 'github'],
            bubbles: [1, 2, 3, 4, 5],
            date: "2:00 pm, Today",
            title: "Codetivate",
            desc: "The world’s largest diversity-focused hackhon web application built for this fall 2022",
            image: "/assets/TEST/user_projects/img-3.png",
            comments: 22222,
            likes: 33333333,
            tags: ["PHP", "Golang", "Adobe XD"]
          },
          {
            name: "Bill gates",
            tools: ['adobexd', 'github'],
            bubbles: [],
            date: "February 28, 2022",
            title: "Command tech",
            desc: "Advancing the partcipation of non-binary and female students in STEM worlwide ",
            image: "/assets/TEST/user_projects/img-4.png",
            comments: 22222,
            likes: 33333333,
            tags: ["Python"]
          },
          {
            name: "Ronald",
            tools: ['figma', 'github'],
            bubbles: [],
            date: "February 27, 2022",
            title: "Frelapay",
            desc: "Get payments from all your freelance work converted into the highest selling cryptos",
            image: "/assets/TEST/user_projects/img-5.png",
            comments: 22222,
            likes: 33333333,
            tags: ["HTML", "CSS", "JSON"]
          },
          {
            name: "Mark Zuckerburg",
            tools: ['adobexd', 'github'],
            bubbles: [],
            date: "February 28, 2020",
            title: "Microsoft",
            desc: "Coded Windows 7 a new OS from my dorm room, probably gonna dropout soon :(",
            image: "/assets/TEST/user_projects/img-6.png",
            comments: 22222,
            likes: 33333333,
            tags: ["Git", "Flask", "Django"]
          },
        ]
      }
    }
  };
}
