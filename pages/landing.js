import Image from "next/image";
import Link from "next/link";
import logoLight from "../public/assets/logo.svg";
import Discord from "../components/icons/Discord";
import landing from "../public/assets/landing/landing.svg";

import aws from "../public/assets/landing/aws.svg";
import digitalocean from "../public/assets/landing/digitalocean.svg";
import jetbrains from "../public/assets/landing/jetbrains.svg";
import sketch from "../public/assets/landing/sketch.svg";
import linode from "../public/assets/landing/linode.svg";
import wolfram from "../public/assets/landing/wolfram.svg";
import replit from "../public/assets/landing/replit.svg";
import stellar from "../public/assets/landing/stellar.svg";

import peopleImage from "../public/assets/TEST/people.png";
import Scrapbookfile from "./scrapbook/Scrapbookfile";
import ProjectGalleryProjectCard from "../components/project/ProjectGalleryProjectCard";
import EventCard from "../components/event/EventCard";

export default function Landing({ user, projects, events, loggedIn }) {
  return (
    <div className="">
      <div id="header" className="flex items-center justify-between px-1 md:px-8 2xl:px-12">
        <div className="relative w-[40px] md:w-[70px] lg:w-[100px] xl:w-[120px] mt-2 md:mt-3 lg:mt-4 xl:mt-6">
          <Image src={logoLight} />
        </div>
        <div className="flex items-center text-10px md:text-[14px] lg:text-[16.5px] xl:text-[20px]">
          <div className="flex items-center space-x-2 mx-2 md:space-x-8 lg:space-x-12 xl:space-x-16 md:mx-8 lg:mx-12 xl:mx-16">
            <Link href="/scrapbook">
              <p className="text-10px text-[#7D7D7D] md:text-16px lg:text-18px xl:text-22px cursor-pointer hover:text-[#ff9700]">
                Scrapbook
              </p>
            </Link>
            <Link href="/project-gallery">
              <p className="text-10px text-[#7D7D7D] md:text-16px lg:text-18px xl:text-22px cursor-pointer hover:text-[#ff9700]">
                Projects
              </p>
            </Link>
            <Link href="#">
              <p className="text-10px text-[#7D7D7D] md:text-16px lg:text-18px xl:text-22px cursor-pointer hover:text-[#ff9700]">
                People
              </p>
            </Link>
            <Link href="/events">
              <p className="text-10px text-[#7D7D7D] md:text-16px lg:text-18px xl:text-22px cursor-pointer hover:text-[#ff9700]">
                Events
              </p>
            </Link>
            <Link href="#">
              <p className="text-10px text-[#7D7D7D] md:text-16px lg:text-18px xl:text-22px cursor-pointer hover:text-[#ff9700]">
                Jobs
              </p>
            </Link>
          </div>
          <div className="flex items-center space-x-1 md:space-x-5">
            <Link href="#">
              <button className="px-1 py-0.5 rounded-sm md:px-5 2xl:px-6 md:py-1.5 xl:py-2 2xl:py-3.5 md:rounded-md border-[1.5px] border-[#4CB050] text-[#4CB050] bg-white font-bold transition-all hover:scale-105 focus:scale-105">
                Hire Talents
              </button>
            </Link>
            <Link href="#">
              <button className="px-1 py-0.5 rounded-sm md:px-5 2xl:px-6 md:py-1.5 xl:py-2 2xl:py-3.5 md:rounded-md bg-[#03A9F4] text-white font-bold transition-all hover:scale-105 focus:scale-105">
                Sponsor Events
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div id="main" className="mt-1 mx-1 md:mt-1.5 lg:mt-2.5 xl:mt-3.5 md:mx-5 2xl:mx-12 grid grid-cols-2">
        <div className="ml-1 pt-2 md:ml-3 2xl:ml-0 flex flex-col md:pt-8 lg:pt-10 lgm:pt-[4.5rem] xl:pt-16 2xl:pt-[4.5rem]">
          <p className="font-bold leading-[1.3] text-16px md:text-[32px] lg:text-[36px] xl:text-[44px] 2xl:text-48px">
            Where <span className="text-[#ff9700]">makers</span>,{" "}
            <span className="text-[#03a9f4]">developers</span>, and{" "}
            <span className="text-[#4cb050]">technologists</span> call home.
          </p>
          <p className="text-12px mt-1 md:text-16px lg:text-18px xl:text-22px 2xl:text-24px md:mt-2 lg:mt-3.5 xl:mt-[1.125rem] 2xl:mt-7">
            The Dynamics is a global network of makers, developers, and technologists where
            enthusiastic minds connect, build, share, and launch.
          </p>
          <div className="flex items-center space-x-1 mt-1 md:space-x-5 text-10px md:text-16px lg:text-18px xl:text-22px 2xl:text-24px md:mt-3 lg:mt-[1.125rem] xl:mt-[1.375rem] 2xl:mt-8">
            <Link href="/signup">
              <button className="px-1 py-0.5 rounded-sm md:px-5 2xl:px-6 md:py-1.5 lg:py-2.5 2xl:py-3.5 md:rounded-md bg-[#03A9F4] text-white font-bold transition-all hover:scale-105 focus:scale-105">
                Become a Member
              </button>
            </Link>
            <Link href="#">
              <button className="px-1 py-0.5 rounded-sm flex items-center md:px-5 2xl:px-6 md:py-1.5 lg:py-2.5 2xl:py-3.5 md:rounded-md border-[1.5px] border-[#03A9F4] text-[#03A9F4] bg-white font-bold transition-all hover:scale-105 focus:scale-105">
                Join our Discord&nbsp;&nbsp;
                <Discord className="mmd:w-[15px] mmd:h-[12px]" fill={"#03A9F4"} />
              </button>
            </Link>
          </div>
          <p className="mt-1 flex items-center font-semibold text-[8px] md:text-[14px] lg:text-[15.5px] xl:text-18px 2xl:text-20px text-[#7D7D7D] md:mt-[0.3rem] lg:mt-[0.5rem] xl:mt-3 2xl:mt-5">
            Already a member?&nbsp;
            <Link href="/login">
              <span className="text-[#3B4FE4] flex items-center cursor-pointer">
                Login&nbsp;
                <svg
                  className="mmd:h-[6px] mmd:w-[12px] mxl:h-[9.6px] mxl:w-[20px] mt-0.5"
                  width="25"
                  height="12"
                  viewBox="0 0 25 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.8082 11.5386V7.96917H0V3.88978H17.8082V0.320312L25 5.92947L17.8082 11.5386Z"
                    fill="#3B4FE4"
                  />
                </svg>
              </span>
            </Link>
          </p>
        </div>
        <div className="">
          <Image className="mmd:scale-[0.7]" src={landing} alt="landing" />
        </div>
      </div>

      <div id="worked-with" className="mt-1 md:mt-2.5 lg:mt-3.5 lgm:mt-8 xl:mt-[1.375rem] 2xl:mt-8 mb-0 2xl:mb-4 flex flex-col">
        <p className="text-center text-[8px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-18px font-bold text-[#A5A5A5]">
          WORKED WITH
        </p>
        <div className="mxl:-mt-2 m2xl:-mt-1 mx-[10px] md:mx-[30px] lg:mx-[60px] xl:mx-[140px] flex items-center justify-between">
          <Image src={aws} alt="aws" />
          <Image src={digitalocean} alt="digitalocean" />
          <Image src={jetbrains} alt="jetbrains" />
          <Image src={sketch} alt="sketch" />
          <Image src={linode} alt="linode" />
          <Image src={wolfram} alt="wolfram" />
          <Image src={replit} alt="replit" />
          <Image src={stellar} alt="stellar" />
        </div>
      </div>

      <div id="scrapbook" className="mx-8 2xl:mx-12 mt-16">
        <p className="text-[36px] text-[#A5A5A5] font-bold">LIVE FROM OUR SCRAPBOOK</p>
        <p className="text-[48px] font-bold">Stay connected with like-minded people</p>
        <p className="text-24px">
          Made your first open-source contribution? Landed a job? Won a hackathon? Launched a
          startup? We'd love to know, tell us about it!
        </p>
        <section className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 md:space-x-5 dark:text-white">
            {user &&
              user.scrapbookItem.map((scrapbookItem, index) => {
                if (user.scrapbookItem.indexOf(scrapbookItem) % 4 === 0 || true)
                  return (
                    <div className="dark:text-white">
                      <Scrapbookfile
                        key={index}
                        username={scrapbookItem.username}
                        userimg={scrapbookItem.userimg}
                        time={scrapbookItem.time}
                        text={scrapbookItem.text}
                        image={scrapbookItem.image}
                      />
                    </div>
                  );
              })}
          </div>
        </section>
      </div>

      <div id="project-gallery" className="mx-8 2xl:mx-12 mt-16 text-center">
        <p className="text-[36px] text-[#A5A5A5] font-bold">IMAGINE AN EVERYDAY DEVPOST</p>
        <p className="text-[48px] font-bold">Share and take your projects globally.</p>
        <p className="text-24px">
          After countless days of brainstorming, learning, and building, you've finally shipped
          something. Get constructive feedback and ideas to make it even better. In the future, you
          can get funding and support to scale it through Launchtivate CLOSED BETA
        </p>
        <div className="grid md:gap-10 gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 content-center justify-center md:px-5 px-3 md:py-5 py-3  md:mt-12 mt-5">
          {projects.map((project, index) => {
            if (index < 3) {
              return (
                <ProjectGalleryProjectCard
                  key={index}
                  project={project}
                  className="w-full h-[580px] flex flex-col bg-[#f8fbff] dark:bg-[#2D2D2D] rounded-xl overflow-hidden shadow-xl hover:shadow-xxl p-3"
                />
              );
            }
          })}
        </div>
      </div>

      <div id="networking" className="mt-16">
        <div className="mx-8 2xl:mx-12">
          <p className="text-[36px] text-[#A5A5A5] font-bold">NETWORKING MADE AS EASY AS ABC</p>
          <p className="text-[48px] font-bold">Find amazing people to bring your ideas to live.</p>
          <p className="text-24px">
            Stuck with something? Looking for a co-founder? Building a team for a hackathon?
            Searching for open-source contributors? Need a mentor? We got you covered!
          </p>
        </div>
        <div className="mt-9 py-20 rounded-bl-[20px] rounded-br-[20px] bg-[#F8FBFF] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <p className="text-[90px] text-[#03A9F4] text-center mb-12">Who are you looking for?</p>
          <div className="flex justify-center items-end">
            <div>
              <p className="text-[24px] pl-4 mb-3 font-semibold">Searching for</p>
              <div className="flex">
                <input
                  className="rounded-bl-[10px] rounded-tl-[10px] border-[3px] border-[#03A9F4] py-6 px-6"
                  placeholder="Developers, Angel Investors"
                />
                <div className="bg-[#FF9700] w-3 py-6"></div>
              </div>
            </div>

            <div>
              <p className="text-[24px] pl-4 mb-3 font-semibold">Available for</p>
              <div className="flex">
                <input
                  className="border-[3px] border-[#03A9F4] py-6 px-6"
                  placeholder="Full-time Job, Investing"
                />
                <div className="p-[1.390rem] bg-[#03A9F4] rounded-br-[10px] rounded-tr-[10px]">
                  <svg
                    width="35"
                    height="33"
                    viewBox="0 0 35 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.832 14.0001C26.9987 14.0001 30.332 17.3334 30.332 21.5001C30.332 22.9667 29.9154 24.3501 29.182 25.5001L34.3154 30.6667L31.9987 32.9834L26.7987 27.8667C25.6487 28.5834 24.282 29.0001 22.832 29.0001C18.6654 29.0001 15.332 25.6667 15.332 21.5001C15.332 17.3334 18.6654 14.0001 22.832 14.0001ZM22.832 17.3334C21.727 17.3334 20.6672 17.7724 19.8858 18.5538C19.1044 19.3352 18.6654 20.395 18.6654 21.5001C18.6654 22.6051 19.1044 23.665 19.8858 24.4464C20.6672 25.2278 21.727 25.6667 22.832 25.6667C23.9371 25.6667 24.9969 25.2278 25.7783 24.4464C26.5597 23.665 26.9987 22.6051 26.9987 21.5001C26.9987 20.395 26.5597 19.3352 25.7783 18.5538C24.9969 17.7724 23.9371 17.3334 22.832 17.3334ZM13.6654 0.666748C15.4335 0.666748 17.1292 1.36913 18.3794 2.61937C19.6297 3.86961 20.332 5.5653 20.332 7.33341C20.332 8.85008 19.8154 10.2501 18.9654 11.3834C17.532 11.9167 16.2487 12.7667 15.182 13.8334L13.6654 14.0001C11.8973 14.0001 10.2016 13.2977 8.95132 12.0475C7.70108 10.7972 6.9987 9.10152 6.9987 7.33341C6.9987 5.5653 7.70108 3.86961 8.95132 2.61937C10.2016 1.36913 11.8973 0.666748 13.6654 0.666748V0.666748ZM0.332031 27.3334V24.0001C0.332031 20.4667 5.8487 17.5667 12.832 17.3334C12.2987 18.6334 11.9987 20.0334 11.9987 21.5001C11.9987 23.6501 12.632 25.6667 13.6654 27.3334H0.332031Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="featured-people" className="mx-8 2xl:mx-12 mt-20">
        <p className="text-[48px] pb-[72px] text-center font-semibold">Featured people</p>
        <div className="flex justify-around">
          <div className="px-12 flex flex-col items-center  rounded-[10px] bg-[#F8FBFF]">
            <div className="pt-6">
              <Image
                className="border-[2.19048px] border-[#FF9700] rounded-[56.0762px]"
                src={peopleImage}
              />
            </div>
            <div className="flex items-center">
              <p className="text-[36px] font-semibold">Belle See </p>
              <svg
                width="28"
                height="27"
                viewBox="0 0 28 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M27.5 13.075L24.45 9.6L24.875 5L20.3625 3.975L18 0L13.75 1.825L9.5 0L7.1375 3.975L2.625 4.9875L3.05 9.5875L0 13.075L3.05 16.55L2.625 21.1625L7.1375 22.1875L9.5 26.1625L13.75 24.325L18 26.15L20.3625 22.175L24.875 21.15L24.45 16.55L27.5 13.075ZM11.25 19.325L6.25 14.325L8.0125 12.5625L11.25 15.7875L19.4875 7.55L21.25 9.325L11.25 19.325Z"
                  fill="#03A9F4"
                />
              </svg>
            </div>
            <p className="text-[24px] mb-9">Founder, CommandTech</p>
            <button className="-mb-6 z-10 text-[#03A9F4] rounded-[10px] border border-[#03A9F4] py-4 px-6 bg-white">
              Reach out
            </button>
          </div>

          <div className="px-12 flex flex-col items-center  rounded-[10px] bg-[#F8FBFF]">
            <div className="pt-6">
              <Image
                className="border-[2.19048px] border-[#FF9700] rounded-[56.0762px]"
                src={peopleImage}
              />
            </div>
            <div className="flex items-center">
              <p className="text-[36px] font-semibold">Belle See </p>
              <svg
                width="28"
                height="27"
                viewBox="0 0 28 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M27.5 13.075L24.45 9.6L24.875 5L20.3625 3.975L18 0L13.75 1.825L9.5 0L7.1375 3.975L2.625 4.9875L3.05 9.5875L0 13.075L3.05 16.55L2.625 21.1625L7.1375 22.1875L9.5 26.1625L13.75 24.325L18 26.15L20.3625 22.175L24.875 21.15L24.45 16.55L27.5 13.075ZM11.25 19.325L6.25 14.325L8.0125 12.5625L11.25 15.7875L19.4875 7.55L21.25 9.325L11.25 19.325Z"
                  fill="#03A9F4"
                />
              </svg>
            </div>
            <p className="text-[24px] mb-9">Founder, CommandTech</p>
            <button className="-mb-6 z-10 text-[#03A9F4] rounded-[10px] border border-[#03A9F4] py-4 px-6 bg-white">
              Reach out
            </button>
          </div>

          <div className="px-12 flex flex-col items-center  rounded-[10px] bg-[#F8FBFF]">
            <div className="pt-6">
              <Image
                className="border-[2.19048px] border-[#FF9700] rounded-[56.0762px]"
                src={peopleImage}
              />
            </div>
            <div className="flex items-center">
              <p className="text-[36px] font-semibold">Belle See </p>
              <svg
                width="28"
                height="27"
                viewBox="0 0 28 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M27.5 13.075L24.45 9.6L24.875 5L20.3625 3.975L18 0L13.75 1.825L9.5 0L7.1375 3.975L2.625 4.9875L3.05 9.5875L0 13.075L3.05 16.55L2.625 21.1625L7.1375 22.1875L9.5 26.1625L13.75 24.325L18 26.15L20.3625 22.175L24.875 21.15L24.45 16.55L27.5 13.075ZM11.25 19.325L6.25 14.325L8.0125 12.5625L11.25 15.7875L19.4875 7.55L21.25 9.325L11.25 19.325Z"
                  fill="#03A9F4"
                />
              </svg>
            </div>
            <p className="text-[24px] mb-9">Founder, CommandTech</p>
            <button className="-mb-6 z-10 text-[#03A9F4] rounded-[10px] border border-[#03A9F4] py-4 px-6 bg-white">
              Reach out
            </button>
          </div>
        </div>
      </div>

      <div id="upcoming-events" className="mt-16 mb-12">
        <nav className="border-b-2 flex gap-x-2 lg:gap-x-4 items-center justify-center mt-10 lg:mt-24 pb-5 lg:pb-[50px]  heading">
          <svg
            width="55"
            height="55"
            viewBox="0 0 61 70"
            fill="none"
            className="w-9 h-9 md:w-14 md:h-14"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M45.4113 35.2497L41.9221 31.5838L25.8588 48.4607L18.8804 41.1289L15.3912 44.7948L25.8588 55.7925L45.4113 35.2497ZM53.5417 7.37514H50.25V0.458385H43.6667V7.37514H17.3333V0.458385H10.75V7.37514H7.45833C3.80458 7.37514 0.907917 10.4877 0.907917 14.2919L0.875 62.7092C0.875 64.5437 1.5686 66.303 2.80321 67.6001C4.03783 68.8972 5.71232 69.626 7.45833 69.626H53.5417C57.1625 69.626 60.125 66.5134 60.125 62.7092V14.2919C60.125 10.4877 57.1625 7.37514 53.5417 7.37514ZM53.5417 62.7092H7.45833V24.667H53.5417V62.7092Z"
              fill="#03A9F4"
            />
          </svg>
          <span className="text-[28px] md:text-[36px] lg:text-[50px]">Upcoming Events</span>
        </nav>
        <section>
          {events && events.map((event, key) => <EventCard key={key} {...event} />)}
        </section>
      </div>
    </div>
  );
}
