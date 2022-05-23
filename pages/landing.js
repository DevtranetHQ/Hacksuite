import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Logo from "../components/Logo";
import Discord from "../components/icons/Discord";
import landing from "../public/assets/landing/landing.svg";

export default function Landing({}) {
  return (
    <div className="">
      <div className="flex items-center justify-between px-8 pt-5">
        <Logo className="w-[80px] xs:w-[120px]" />
        <div className="flex items-center text-24px">
          <div className="flex items-center space-x-16 mx-16">
            <Link href="/scrapbook">
              <p className="text-[#7D7D7D]  cursor-pointer hover:opacity-80">Scrapbook</p>
            </Link>
            <Link href="#">
              <p className="text-[#7D7D7D]  cursor-pointer hover:opacity-80">Projects</p>
            </Link>
            <Link href="#">
              <p className="text-[#7D7D7D]  cursor-pointer hover:opacity-80">People</p>
            </Link>
            <Link href="#">
              <p className="text-[#7D7D7D]  cursor-pointer hover:opacity-80">Events</p>
            </Link>
            <Link href="#">
              <p className="text-[#7D7D7D]  cursor-pointer hover:opacity-80">Jobs</p>
            </Link>
          </div>
          <div className="flex items-center space-x-5">
            <Link href="#">
              <button className="px-5 py-3 rounded-[10px] border border-[#4CB050] text-[#4CB050] bg-white font-bold transition-all hover:scale-105 focus:scale-105">
                Hire Talents
              </button>
            </Link>
            <Link href="#">
              <button className="px-5 py-3 rounded-[10px] bg-[#03A9F4] text-white font-bold transition-all hover:scale-105 focus:scale-105">
                Sponser Events
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 mx-5 flex grid grid-cols-2">
        <div className="ml-7 flex flex-col pt-12">
          <p className="moving_background_gradient font-bold leading-[1.3] text-48px">
            Where makers, developers, and technologists call home.
            <style jsx>{`
              .moving_background_gradient {
                background: url(https://media.giphy.com/media/l41lGIoEJCWnG7izS/giphy.gif);
                background-size: cover;
                background-position: 50%;
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            `}</style>
          </p>
          <p className="text-24px mt-7">
            The Dynamics is a global network of makers, developers, and technologists where
            enthusiastic minds connect, build, share, and launch.
          </p>
          <div className="flex items-center space-x-5 text-24px mt-8">
            <Link href="#">
              <button className="px-5 py-3 rounded-[10px] bg-[#03A9F4] text-white font-bold transition-all hover:scale-105 focus:scale-105">
                Become a Member
              </button>
            </Link>
            <Link href="#">
              <button className="flex items-center px-5 py-3 rounded-[10px] border border-[#03A9F4] text-[#03A9F4] bg-white font-bold transition-all hover:scale-105 focus:scale-105">
                Join our Discord&nbsp;&nbsp;
                <Discord fill={"#03A9F4"} />
              </button>
            </Link>
          </div>
          <p className="flex items-center font-semibold text-20px text-[#7D7D7D] mt-5">
            Already a member?&nbsp;
            <span className="text-[#3B4FE4] flex items-center cursor-pointer">
              Login&nbsp;
              <svg
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
          </p>
        </div>
        <div className="">
          <Image src={landing} alt="landing" />
        </div>
      </div>
    </div>
  );
}
