import React from "react";
import DarkModeToggle from "../../../components/DarkModeToggle";
import Logo from "../../../components/Logo";
import GithubIcon from "../../../components/icons/Github";
import Link from "next/link";
import { withAuth } from "../../../server/middlewares/auth.middleware";
import { projectService } from "../../../server/modules/projects/project.service";
import ArrowIcon from "../../../components/icons/Arrow";
import HeartIcon from "../../../components/icons/Heart";
import CommentIcon from "../../../components/icons/Comment";
import FollowerIcon from "../../../components/icons/Follower";
import TimeIcon from "../../../components/icons/Time";
import Avatar from "../../../components/Avatar";
import TwitterIcon from "../../../components/icons/Twitter";
import FacebookIcon from "../../../components/icons/Facebook";
import LinkedInIcon from "../../../components/icons/Linkedin";
import Share from "../../../components/icons/Share";
import styles from "../../../components/project/PersonalProject.module.css";
// TODO: image should be gotten from the server, not hardcoded
// import Img from "../public/assets/TEST/user_projects/img-1.jpg";
// const Img = require("../public/assets/TEST/user_projects/img-1.jpg");

export default function ProjectDetails(props: any) {
  const { data } = props;
  return (
    <div className="dark:bg-[#202020] dark:text-white pl-3  pr-3 ">
      <nav className="flex items-center justify-between pl-[10px] lg:pl-8 pr-[12px] lg:pr-12">
        <Logo className="w-[80px] md:w-[120px] py-5" />
        <div className="flex gap-x-[0px] md:gap-x-3 lg:gap-x-5 items-center">
          <DarkModeToggle
            className="mx-0 w-[25px] md:w-[44px] lg:scale-[1.24] lg:mr-[10px]"
            darkClassName="mx-0 w-[25px] md:w-[33px] lg:w-[40px] h-[25px] md:h-[48px] lg:h-[60px]"
          />
          <a
            href="https://github.com/TheDynamics"
            className="scale-75 lg:scale-[1.4] md:scale-[1.15]">
            <GithubIcon />
          </a>
          <Link href="/project-gallery">
            <button className="px-[10px] py-[6px] md:py-[2px] bg-[#03a9f4] text-white rounded-[6px] text-[12px] md:text-[23px] lg:text-[28px] lg:button-big button-deep-sky-blue inline-flex gap-x-1 md:gap-x-3 items-center mx-2 my-0 md:my-0 focus:outline-none">
              Other projects
              <div className="scale-75 md:scale-100 lg:relative lg:top-[2px]">
                <ArrowIcon />
              </div>
            </button>
          </Link>
        </div>
      </nav>

      <header className="bg-[#F8FBFF] container-gray-dark border-b-4 dark:border-gray-dark py-14 px-6 xs:p-14 rounded-b-2xl text-center">
        <h1 className="text-[30px] font-bold lg:title md:text-[65px] lg:text-[90px] text-deep-sky-blue">
          {data.title}
        </h1>
        <h2 className="text-[16px] lg:lead mb-2 w-full mt-[16px] md:mt-[36px] md:mb-[28px] lg:text-[21px] xl:text-[26px] 2xl:text-[30px]">
          {data.tag}
        </h2>
        <div className="inline-flex my-2 gap-x-4  lg:gap-x-[36px] mt-[20px] lg:mt-[30px]">
          <button className="text-white font-bold rounded-md bg-[#4CB050] py-[15px] text-[16px] px-[15px] lg:px-[70px] lg:py-[10px] lg:text-[30px]  inline-flex gap-x-2 transition-all hover:scale-[1.06] focus:outline-none">
            {data.likes} Likes <HeartIcon fill="white" width={"30px"} height={"30px"} />
          </button>
          <a className="text-white font-bold rounded-md bg-[#03A9F4] py-[15px] text-[16px] px-[15px] lg:px-[70px] lg:py-[10px] lg:text-[30px]  inline-flex gap-x-2 transition-all hover:scale-[1.06] focus:outline-none">
            {data.comments} Comments <CommentIcon fill="white" width={"30px"} height={"30px"} />
          </a>
        </div>
      </header>

      {/* Project image, creator names and time created  */}

      <div className="flex my-2 gap-x-2  lg:gap-x-[36px] mt-[10px] lg:mt-[10px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={data.image} alt="" width="100%" height="200px" className="object-cover mr-auto" />
        <div>
          <p className="font-bold text-[23.2px]">Made by</p>
          <span className="flex items-center gap-2">
            {" "}
            <Avatar
              image="/assets/TEST/img-8.jpg"
              className="w-[40px] h-[40px] relative "
              border="border-[3px]"
            />{" "}
            <span>{data.doc.author}</span> <FollowerIcon />
          </span>

          <p className="mt-[20px]">
            <span className="flex items-center gap-2">
              {" "}
              <TimeIcon />{" "}
              <span>
                {data.doc.time}, {data.doc.day}
              </span>
            </span>
          </p>
        </div>
      </div>

      {/* Description of projects */}
      {data.description &&
        data.description.map((val: any, i: number) => {
          return (
            <div key={i} className={styles.default_font}>
              <h2 className="text-[16px] font-bold lg:lead mb-1 w-full mt-[16px] md:mt-[36px] md:mb-[28px] lg:text-[21px] xl:text-[26px] 2xl:text-[30px]">
                {val.title}
              </h2>
              <p>{val.desc}</p>
            </div>
          );
        })}

      {/* Technologies project made with */}
      <div>
        <h2 className="text-[16px] font-bold lg:lead mb-1 w-full mt-[6px] md:mt-[36px] md:mb-[6px] lg:text-[21px] xl:text-[26px] 2xl:text-[30px]">
          Made with
        </h2>
        <span className="flex items-center gap-5">
          {data.tools &&
            data.tools.map((tool, index) => {
              let color: string;
              if (index === 0) color = "bg-blue-600";
              if (index === 1) color = "bg-orange-400";
              if (index === 2) color = "bg-green-500";
              if (index === 3) color = "bg-cyan-400";
              return (
                <p
                  key={index}
                  className={`pl-2  pr-2 pt-1 pb-1 text-[11px] rounded-sm text-white ${color} caption font-bold`}>
                  {tool}
                </p>
              );
            })}
        </span>
      </div>

      {/* Vieew Github and share */}
      <span className="mt-[20px] flex items-end gap-5">
        <span>
          <p className="font-bold text-[23.2px]">Check it out</p>
          <span className="flex items-center gap-1">
            <GithubIcon width={25} height={25} /> <a href={data.link}>On Github</a>
          </span>
        </span>

        <span className="ml-auto">
          <p className="font-bold text-[23.2px]">Share it</p>
          <span className="flex items-center gap-3">
            <TwitterIcon width={25} height={25} /> <FacebookIcon width={25} height={25} />{" "}
            <LinkedInIcon width={25} height={25} /> <Share width={25} height={25} />
          </span>
        </span>
      </span>

      {/* Comments */}
      <div className="mt-[50px]">
        <h2 className="text-[16px] font-bold lg:lead mb-1 w-full mt-[16px] md:mt-[36px] md:mb-[28px] lg:text-[21px] xl:text-[26px] 2xl:text-[30px]">
          Comments
        </h2>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      data: {
        title: "Web Scraper",
        tag: "A chrome extension that gathers vital information at the tap of a button, easy as ABC",
        doc: {
          author: "Zach Latte",
          time: "11:00 am",
          day: "Today"
        },
        link: "https://github.com/webScraper",
        likes: 3,
        comments: 2,
        // image: projects[0],
        image: "/assets/TEST/user_projects/img-1.png",
        tools: ["NextJS", "JavaScript", "HTML", "Python"],
        description: [
          {
            title: "Lorem Ipsum",
            desc: "LoremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiaIpsum"
          },
          {
            title: "Lorem Ipsum",
            desc: "LoremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiaIpsum"
          }
        ]
      }
    }
  };
}
