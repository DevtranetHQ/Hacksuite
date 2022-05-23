import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState } from "react";
import Logo from "../Logo";
import DarkModeContext from "../DarkModeContext";
import DarkModeToggle from "../DarkModeToggle";
import NotificationsLink from "./NotificationsLink";
import { DashNavMobile, MenuMobile } from "./DashNavMobile";
import bars from "../../public/assets/dash/bars-solid.svg";

export default function DashHeader({}) {
  const router = useRouter();
  const { pathname } = router;
  const { darkMode } = useContext(DarkModeContext);
  const [menu, setMenu] = useState(true);

  const handleBars = () => {
    setMenu(r => !r);
  };

  let title = "";

  switch (pathname) {
    case "/app/notifications":
      title = "Notifications";
      break;
    case "/app/settings":
      title = "Account Settings";
      break;
    case "/app/personal-projects":
      title = "Projects";
      break;
    case "/app/create-project":
      title = "Projects";
      break;
  }

  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-end xs:pb-10 mxs:justify-between mxs:px-5 gap-20">
        <h1
          className={`${
            pathname === "/app" ? "hidden" : ""
          } mxs:hidden mx-auto font-semibold text-42px`}>
          {title}
        </h1>
        <Logo className="xs:hidden w-[80px] xs:w-[120px] pt-1" />
        <div className="flex justify-center  gap-20 items-center font-bold text-[#7D7D7D] text-24px ">
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
        <div className="text-right flex items-center justify-end  mxs:mb-0.5">
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
          <DarkModeToggle
            className="mxs:mr-1 h-[22px] xs:h-[30px]"
            darkClassName="mxs:mr-1 mxs:mb-[2px] h-[20px] xs:h-[30px]"
          />
          <NotificationsLink />
          <div onClick={handleBars} className="xs:hidden relative w-[22px] -mb-1 ml-1">
            <Image src={bars} alt="bars-solid" />
          </div>
        </div>
      </header>
      <MenuMobile menu={menu} onClick={handleBars} />
    </div>
  );
}
