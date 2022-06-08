import { useRouter } from "next/router";
import Logo from "../Logo";
import DarkModeToggle from "../DarkModeToggle";
import Link from "next/link";
import HomeIcon from "../icons/HomeIcon";
import { useState } from "react";

export const TopNav = ({ setSearchValue, setSearchPageIsShowing }) => {
  const [input, setInput] = useState("");

  return (
    <div className="dark:text-white">
      <nav className="flex items-center justify-between pl-[10px] lg:pl-8 pr-[12px] lg:pr-12">
        <Logo className="w-[80px] md:w-[120px] py-5" />
        <form className="bg-transparent flex items-center ml-auto m-0 justify-center mt-1 pr-2 dark:bg-transparent text-white dark:bg-white">
          <div className="relative rounded-md flex  items-center p-1 border-[#03A9F4] border-[3px]">
            <div
              onClick={
                setSearchValue && setSearchPageIsShowing
                  ? () => {
                      setSearchValue(input);
                      setSearchPageIsShowing(true);
                    }
                  : () => null
              }
              className="absolute pl-3 z-10 top-0 inset-y-0  flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#A5A5A5] flex items-center dark:text-white"
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
              className="dark:placeholder:text-white block w-full pl-10  dark:bg-transparent rounded-lg form-input border-none p-0 m-0 py-2 dark:text-white text-black"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </div>
        </form>
        <div className="flex gap-x-[0px] md:gap-x-3 lg:gap-x-5 items-center">
          <DarkModeToggle
            className="mx-0 w-[25px] md:w-[44px] lg:scale-[1.24] lg:mr-[10px]"
            darkClassName="mx-0 w-[25px] md:w-[33px] lg:w-[40px] h-[25px] md:h-[48px] lg:h-[60px]"
          />
          <Link href="/">
            <div>
              <HomeIcon className="scale-[0.53] lg:scale-[1] md:scale-[0.82] cursor-pointer" />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

interface FullNavProps {
  setSearchValue?: any;
  setSearchPageIsShowing?: any;
}
const FullNav : React.FC<FullNavProps> = ({ setSearchValue, setSearchPageIsShowing }) => {
  const { pathname } = useRouter();
  return (
    <div className="dark:bg-[#202020] dark:text-white pb-10">
      <TopNav setSearchValue={setSearchValue} setSearchPageIsShowing={setSearchPageIsShowing} />
      <nav className="w-[max-content] mx-auto mt-3">
        <ul className="flex gap-x-[15px] xs:gap-x-[20px] md:gap-x-[3rem] w-[max-content] text-[16px] xs:text-20px">
          <Link href="/newsfeed">
            <li
              className={`${
                pathname === "/newsfeed"
                  ? "font-bold border-b-[3px] border-b-orange-peel"
                  : "font-bold text-[#7D7D7D]"
              } cursor-pointer`}>
              SCRAPBOOK
            </li>
          </Link>

          <Link href="/newsfeed/projects">
            <li
              className={`${
                pathname === "/newsfeed/projects"
                  ? "font-bold border-b-[3px] border-b-orange-peel"
                  : "font-bold text-[#7D7D7D]"
              } cursor-pointer`}>
              PROJECTS
            </li>
          </Link>

          <Link href="/newsfeed/people">
            <li
              className={`${
                pathname === "/newsfeed/people"
                  ? "font-bold border-b-[3px] border-b-orange-peel"
                  : "font-bold text-[#7D7D7D]"
              } cursor-pointer`}>
              PEOPLE
            </li>
          </Link>

          <Link href="/newsfeed/jobs">
            <li
              className={`${
                pathname === "/newsfeed/jobs"
                  ? "font-bold border-b-[3px] border-b-orange-peel"
                  : "font-bold text-[#7D7D7D]"
              } cursor-pointer`}>
              JOBS
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default FullNav;
