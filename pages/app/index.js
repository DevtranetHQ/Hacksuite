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

export default function Dash({ admin, name }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="xs:grid xs:grid-cols-12 dark:bg-[#202020]">
      <div className="mxs:hidden col-span-1 mx-auto z-50">
        <DashNav admin={admin} />
      </div>

      <div className="mxs:flex mxs:flex-col mxs:justify-between mxs:px-0 mxs:pt-4 dark:bg-[#202020] dark:text-white col-span-11 p-10  mx-auto content-center min-w-full min-h-screen">
        <div className="flex items-center pl-32 mb-10 fixed left-40 right-0  z-40 bg-white dark:bg-dark">
          <div className="flex mx-auto gap-20 items-center font-bold text-[#7D7D7D] text-24px ">
            <Link href="/scrapbook">
              <p className="hover:text-orange-peel transition-all cursor-pointer">SCRAPBOOK</p>
            </Link>
            <Link href="/project-gallery">
              <p className="hover:text-orange-peel transition-all cursor-pointer">PROJECTS</p>
            </Link>
            <Link href="/">
              <p className="hover:text-orange-peel transition-all cursor-pointer">PEOPLE</p>
            </Link>
            <Link href="/">
              <p className="hover:text-orange-peel transition-all cursor-pointer">JOBS</p>
            </Link>
          </div>
          <form className="bg-transparent flex items-center ml-auto m-0 justify-center pr-2 dark:bg-transparent text-white dark:bg-white p-0">
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
                className=" block w-full md:pl-10 pl-8  dark:bg-transparent rounded-lg form-input border-none p-0 m-0 md:py-1 dark:text-white text-black"
              />
            </div>
          </form>
          <DashHeader />
        </div>

        <div className="text-center mt-20">
          <h1 className="mxs:text-24px font-semibold text-42px -mt-3">
            Hey there, <span className="text-fruit-salad">{name}.</span>
          </h1>
          <div className="mx-auto -mt-2 xs:-mt-8">
            <Image src={placeholder} alt="" width={700} height={430} />
          </div>
          <div className="-mt-6 xs:-mt-14">
            <h1 className="mxs:text-24px text-54px -rotate-6">Welcome to</h1>
            <h1 className="mxs:text-26px text-54px font-semibold uppercase -mt-3">The Dynamics</h1>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className="mxs:w-[150px] fixed mxs:bottom-20 bottom-0 right-0 xs:pb-3 xs:pr-10 z-20 hover:scale-105 focus:scale-105 transition-all">
          {darkMode ? (
            <Image className="" src={robotDark} alt="" />
          ) : (
            <Image className="" src={robotLight} alt="" />
          )}
        </div>
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
      name: profile.firstName
    }
  };
}
