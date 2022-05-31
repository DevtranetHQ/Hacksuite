import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
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

export default function Landing({}) {
  return (
    <div className="">
      <div className="flex items-center justify-between mxs:px-1 mxs:pt-2 px-8">
        <div className="relative mxs:w-[80px] w-[100px] xl:w-[120px] mt-4 xl:mt-6">
          <Image src={logoLight} />
        </div>
        <div className="flex items-center mxs:text-10px text-[16.5px] xl:text-[20px]">
          <div className="flex items-center mxs:space-x-2 mxs:mx-2 space-x-12 xl:space-x-16 mx-12 xl:mx-16">
            <Link href="/scrapbook">
              <p className="mxs:text-10px text-[#7D7D7D] text-18px xl:text-22px cursor-pointer hover:text-[#ff9700]">
                Scrapbook
              </p>
            </Link>
            <Link href="/project-gallery">
              <p className="mxs:text-10px text-[#7D7D7D] text-18px xl:text-22px cursor-pointer hover:text-[#ff9700]">
                Projects
              </p>
            </Link>
            <Link href="#">
              <p className="mxs:text-10px text-[#7D7D7D] text-18px xl:text-22px cursor-pointer hover:text-[#ff9700]">
                People
              </p>
            </Link>
            <Link href="/events">
              <p className="mxs:text-10px text-[#7D7D7D] text-18px xl:text-22px cursor-pointer hover:text-[#ff9700]">
                Events
              </p>
            </Link>
            <Link href="#">
              <p className="mxs:text-10px text-[#7D7D7D] text-18px xl:text-22px cursor-pointer hover:text-[#ff9700]">
                Jobs
              </p>
            </Link>
          </div>
          <div className="flex items-center mxs:space-x-1 space-x-5">
            <Link href="#">
              <button className="mxs:px-1 mxs:py-0.5 mxs:rounded-sm px-5 2xl:px-6 py-1.5 xl:py-2 2xl:py-3.5 rounded-md border-[1.5px] border-[#4CB050] text-[#4CB050] bg-white font-bold transition-all hover:scale-105 focus:scale-105">
                Hire Talents
              </button>
            </Link>
            <Link href="#">
              <button className="mxs:px-1 mxs:py-0.5 mxs:rounded-sm px-5 2xl:px-6 py-1.5 xl:py-2 2xl:py-3.5 rounded-md bg-[#03A9F4] text-white font-bold transition-all hover:scale-105 focus:scale-105">
                Sponsor Events
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mxs:mt-2 mxs:mx-1 mt-2.5 xl:mt-4 mx-5 flex grid grid-cols-2">
        <div className="mxs:ml-1 mxs:pt-2 ml-3 flex flex-col pt-10 lgm:pt-[4.5rem] xl:pt-14 2xl:pt-[4.5rem]">
          <p className="font-bold leading-[1.3] mxs:text-16px text-[36px] xl:text-48px">
            Where <span className="text-[#ff9700]">makers</span>,{" "}
            <span className="text-[#03a9f4]">developers</span>, and{" "}
            <span className="text-[#4cb050]">technologists</span> call home.
          </p>
          <p className="mxs:text-12px mxs:mt-1 text-18px xl:text-24px mt-3.5 xl:mt-5 2xl:mt-7">
            The Dynamics is a global network of makers, developers, and technologists where
            enthusiastic minds connect, build, share, and launch.
          </p>
          <div className="flex items-center mxs:space-x-1 mxs:mt-1 space-x-5 mxs:text-10px text-18px xl:text-24px mt-[1.125rem] xl:mt-6 2xl:mt-8">
            <Link href="/signup">
              <button className="mxs:px-1 mxs:py-0.5 mxs:rounded-sm px-5 2xl:px-6 py-2.5 2xl:py-3.5 rounded-md bg-[#03A9F4] text-white font-bold transition-all hover:scale-105 focus:scale-105">
                Become a Member
              </button>
            </Link>
            <Link href="#">
              <button className="mxs:px-1 mxs:py-0.5 mxs:rounded-sm flex items-center px-5 2xl:px-6 py-2.5 2xl:py-3.5 rounded-md border-[1.5px] border-[#03A9F4] text-[#03A9F4] bg-white font-bold transition-all hover:scale-105 focus:scale-105">
                Join our Discord&nbsp;&nbsp;
                <Discord fill={"#03A9F4"} />
              </button>
            </Link>
          </div>
          <p className="mxs:mt-1 flex items-center font-semibold mxs:text-[8px] text-[15.5px] xl:text-20px text-[#7D7D7D] mt-[0.5rem] xl:mt-3.5 2xl:mt-5">
            Already a member?&nbsp;
            <Link href="/login">
              <span className="text-[#3B4FE4] flex items-center cursor-pointer">
                Login&nbsp;
                <svg
                  className="mxs:h-[6px] mxs:w-[12px] mxl:h-[9.6px] mxl:w-[20px] mt-0.5"
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
          <Image src={landing} alt="landing" />
        </div>
      </div>

      <div className="mxs:mt-1 mt-3.5 lgm:mt-8 xl:mt-6 2xl:mt-8 mb-0 2xl:mb-4 flex flex-col">
        <p className="text-center mxs:text-[8px] text-[14px] xl:text-[18px] font-bold text-[#A5A5A5]">
          WORKED WITH
        </p>
        <div className="mxl:-mt-2 mxs:mx-[10px] mx-[60px] xl:mx-[140px] flex items-center justify-between">
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
    </div>
  );
}
