import Image from "next/image";
import { useState, useContext } from "react";
import DashNav from "../../components/dash/DashNav";
import DashHeader from "../../components/dash/DashHeader";
import { DashNavMobile } from "../../components/dash/DashNavMobile";
import DarkModeContext from "../../components/DarkModeContext";
import placeholder from "../../public/assets/dash/placeholder.svg";
import robotLight from "../../public/assets/dash/robotLight.svg";
import robotDark from "../../public/assets/dash/robotDark.svg";
import { withAuth } from "../../server/middlewares/auth.middleware";
import { profileService } from "./../../server/modules/social/profile.service";
import Link from "next/link";
import ProjectGllery from "../project-gallery";
import ProjectGalleryProjectCard from "../../components/project/ProjectGalleryProjectCard";
import ProfileProjectCard from "../../components/project/ProfileProjectCard";
import Avatar from "../../components/Avatar";
import ProfileImg from "../../public/assets/TEST/profile.jpg";
import FeaturedPeople from "../../components/FeaturedPeople";
import ArrowIcon from "../../components/icons/Arrow";
export const bubbleTrimmer = (bubbles, start = 0, end = 0) => {
  return bubbles && bubbles.length > end ? bubbles.slice(start, end) : bubbles;
};

export default function Dash({ admin, name, projects }) {
  const { darkMode } = useContext(DarkModeContext);
  // ======= Tab state -->
  // TODO: Set top nav state
  const [openTab, setOpenTab] = useState(0);

  return (
    <div className="xs:grid xs:grid-cols-12 dark:bg-[#202020]">
      <div className="mxs:hidden col-span-1 mx-auto z-50 relative">
        <DashNav admin={admin} />
      </div>

      <div className="mxs:flex mxs:flex-col mxs:justify-between mxs:px-0 mxs:pt-4 dark:bg-[#202020] dark:text-white col-span-11 p-10   content-center min-w-full min-h-screen">
        <div className="flex items-center pl-32 mb-10 fixed  right-0  z-40 bg-white dark:bg-dark justify-center top-0 pt-10 w-full">
          <div className="flex mx-auto gap-16 items-center font-bold text-[#7D7D7D] text-24px mr-16">
            <p
              className={
                openTab === 1
                  ? "transition-all cursor-pointer border-b-4 border-orange-peel text-black dark:text-white"
                  : " transition-all cursor-pointer border-b-4 border-transparent hover:border-orange-peel hover:text-black hover:dark:text-white"
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(1);
              }}>
              SCRAPBOOK
            </p>

            <p
              className={
                openTab === 2
                  ? "transition-all cursor-pointer border-b-4 border-orange-peel text-black dark:text-white"
                  : " transition-all cursor-pointer border-b-4 border-transparent hover:border-orange-peel hover:text-black hover:dark:text-white"
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(2);
              }}>
              PROJECTS
            </p>

            <p
              className={
                openTab === 3
                  ? "transition-all cursor-pointer border-b-4 border-orange-peel text-black dark:text-white"
                  : " transition-all cursor-pointer border-b-4 border-transparent hover:border-orange-peel hover:text-black hover:dark:text-white"
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(3);
              }}>
              PEOPLE
            </p>

            <p
              className={
                openTab === 4
                  ? "transition-all cursor-pointer border-b-4 border-orange-peel text-black dark:text-white"
                  : " transition-all cursor-pointer border-b-4 border-transparent hover:border-orange-peel hover:text-black hover:dark:text-white"
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(4);
              }}>
              JOBS
            </p>
          </div>
          <form className="bg-transparent flex items-center mx-2  justify-end pl-5 dark:bg-transparent text-white dark:bg-white p-0">
            <div className="relative rounded-md flex items-center p-0 border-[#03A9F4] border-[3px] md:w-full ml-auto">
              <div className="absolute md:pl-3 pl-1 z-10 top-0 inset-y-0  flex items-center pointer-events-none md:w-full w-2/4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#7D7D7D] flex items-center dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="I’m looking for..."
                className=" block w-full md:pl-10 pl-8  dark:bg-transparent rounded-lg form-input border-none p-0 m-0 md:py-1 dark:text-white text-black dark:placeholder:text-white"
              />
            </div>
          </form>
          <div className=" pr-5">
            <DashHeader />
          </div>
        </div>
        {openTab === 0 && (
          <div className="text-center mt-20">
            <h1 className="mxs:text-24px font-semibold text-42px -mt-3">
              Hey there, <span className="text-fruit-salad">{name}.</span>
            </h1>
            <div className="mx-auto -mt-2 xs:-mt-8">
              <Image src={placeholder} alt="" width={700} height={398} />
            </div>
            <div className="-mt-6 xs:-mt-14">
              <h1 className="mxs:text-24px text-48px -rotate-6">Welcome to</h1>
              <h1 className="mxs:text-26px text-48px font-semibold uppercase -mt-3">
                The Dynamics
              </h1>
            </div>
          </div>
        )}

        <div className=""></div>
        <div className=""></div>
        {openTab === 0 ? (
          <div className="mxs:w-[150px] fixed mxs:bottom-20 bottom-0 right-0 xs:pb-3 xs:pr-10 z-20 hover:scale-105 focus:scale-105 transition-all">
            {darkMode ? (
              <Image className="" src={robotDark} alt="" />
            ) : (
              <Image className="" src={robotLight} alt="" />
            )}
          </div>
        ) : null}

        {openTab === 2 && (
          <div className="mt-20 text-center grid grid-cols-3 pl-20 gap-5">
            <div className="col-span-2 text-left">
              {projects.map((project, index) => {
                return (
                  <ProfileProjectCard
                    key={index}
                    bubbles={project.bubbles}
                    date="ferbrary 28, 2020"
                    title="Web Scrapper"
                    likes={93}
                    image={project.image}
                    comments={27}
                    tags={bubbleTrimmer(project.tags, 0, 4)}
                    desc={project.desc}
                    tools={project.tools}
                  />
                );
              })}
            </div>
            <div className="h-screen fixed right-0 w-[27%] top-26">
              <FeaturedPeople />
            </div>
          </div>
        )}
      </div>
      <div className="xs:hidden">
        <DashNavMobile />
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const user = await withAuth(req => req.$user)(req, res);
  const profile = await profileService.getCompletedProfile(user.uniqueId);

  return {
    props: {
      admin: false,
      name: profile.firstName,
      projects: [
        {
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
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
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
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
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
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
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
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
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
          date: "11:00 am, Today",
          title: "Web Scrapper",
          desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
          image: "/assets/TEST/user_projects/img-1.png",
          comments: 22222,
          likes: 33333333,
          tags: ["NextJs", "Figma"],
          liked: true
        }
      ]
    }
  };
}
