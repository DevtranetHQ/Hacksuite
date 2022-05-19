import React from "react";
import DarkModeToggle from "../../components/DarkModeToggle";
import GithubIcon from "../../components/icons/Github";
import Logo from "../../components/Logo";
import ArrowRightIcon from "../../components/icons/ArrowRight";
import Link from "next/link";
import Avatar from "../../components/Avatar";
import ProfileImg from "../../public/assets/TEST/profile.jpg";
import FollowerIcon from "../../components/icons/Follower";
import TimeIcon from "../../components/icons/Time";
import { useRouter } from "next/router";

export default function SampleWorkshop({ loggedIn, user }) {
  // Code to be written in the Page
  const code = `e.add({
            sprite: player,
            scale: 4, // we can size up the sprite with scale
            x: 40, // position it with x and y
            update: (me) => { // this will run each step in the game loop
              me.vy += 1; // velocity changing every frame is acceleration
            }
        })`;

  return (
    <div className="dark:bg-[#202020] dark:text-white">
      {/* ====== NavBar start */}
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
          <Link href="/workshop/workshop">
            <button className="px-[10px] py-[6px] md:py-[2px] bg-[#03a9f4] text-white rounded-[6px] text-[12px] md:text-[23px] lg:text-[28px] lg:button-big button-deep-sky-blue inline-flex gap-x-1 md:gap-x-3 items-center mx-2 my-0 md:my-0 focus:outline-none">
              {loggedIn ? "All workshops" : "All workshops"}
              <span className="md:mt-1">
                <ArrowRightIcon />
              </span>
            </button>
          </Link>
        </div>
      </nav>
      <header className="bg-[#F8FBFF] container-gray-dark  py-5 md:py-14 px-6 xs:p-14 text-center mb-10">
        <h1 className="text-[30px] font-bold lg:title md:text-[65px] lg:text-[90px] text-deep-sky-blue">
          Web Scrapper
        </h1>
        <h2 className="text-[18px] md:text-[28px] lg:lead mb-2 w-full mt-[16px] lg:mt-[36px] md:mb-[28px]  xl:text-[26px] 2xl:text-[30px]">
          A chrome extension that gathers vital information at the tap of a button, easy as ABC
        </h2>
      </header>

      <section className="md:p-10 p-3 flex justify-between gap-x-5 relative">
        <div className="lg:w-9/12 w-full shadow-lg">
          <iframe
            width="100%"
            height="400"
            className="h-[300px] lg:h-[400px]"
            src="https://www.youtube.com/embed/Sklc_fQBmcs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="bg-[#F8FBFF] dark:bg-[#2D2D2D] flex-col lg:justify-between items-center md:px-5 px-2 lg:relative lg:w-3/12 w-6/12 absolute bottom-0 md:right-0 right-3 shadow-lg">
          <div>
            <h1 className="md:headline text-[22px] font-normal md:mb-7 mb-1">Hosted By</h1>

            <div className="flex items-center gap-x-4 mb-2">
              <Avatar
                className="relative md:w-[45px] md:h-[45px] w-[32px] h-[32px]"
                border="!border-[3px]"
                image={ProfileImg}
              />
              <h2 className="inline-flex gap-2 items-center self-center md:subheadline text-[16px] font-semibold">
                Zach Latta
                <a className="cursor-pointer">
                  <FollowerIcon className="hover:scale-[1.06] md:w-[25px] md:h-[25px] w-[20px] h-[20px] transition-all" />
                </a>
              </h2>
            </div>
            <div className="flex gap-4 items-center my-4 md:mt-7 md:ml-3 ml-1 bottom-0 lg:absolute ">
              <TimeIcon className="md:w-[25px] md:h-[25px] w-[15px] h-[15px] transition-all" />
              <h2 className="md:caption text-[15px]">11:00 am, Today</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="p-10 mb-5">
        <h4 className="md:text-48px text-28px font-semibold mb-3">Lorem Ipsum</h4>
        <p className="md:text-28px text-20px">
          LoremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiaIpsum
        </p>
      </section>
      <section className="p-10 mb-5">
        <pre>
          <code className="bg-transparent dark:bg-transparent md:text-24px text-20px">{code}</code>
        </pre>
      </section>
      <section className="p-10 mb-5">
        <h4 className="md:text-48px text-28px font-semibold mb-3">Lorem Ipsum</h4>
        <p className="md:text-28px text-20px">
          LoremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiaIpsum
        </p>
      </section>

      <footer className="bg-[#F4F4F4] dark:bg-[#444444] py-[32px]">
        <p className="text-[16px] lg:text-[32px] px-[40px] text-center">
          You’ve reached the end, why not <a href="">become a member</a> and show us all the cool{" "}
          <br />
          things you’ve made?
        </p>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      loggedIn: true
    }
  };
}
