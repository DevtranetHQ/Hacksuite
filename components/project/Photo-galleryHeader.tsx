import Link from "next/link";
import Logo from "../Logo";
import DarkModeToggle from "../DarkModeToggle";
import GithubIcon from "../icons/Github";
import ArrowIcon from "../icons/Arrow";

const PhotoGalleryHeader = ({ title, contentText, firstBtn, secondBtn, href, navHref, navText }: any) => {
    return (
        <>
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
          <Link href={navHref}>
            <button className="px-[10px] py-[6px] md:py-[2px] bg-[#03a9f4] text-white rounded-[6px] text-[12px] md:text-[23px] lg:text-[28px] lg:button-big button-deep-sky-blue inline-flex gap-x-1 md:gap-x-3 items-center mx-2 my-0 md:my-0 focus:outline-none">
              {navText}
              <div className="scale-75 md:scale-100 lg:relative lg:top-[2px]">
                <ArrowIcon />
              </div>
            </button>
          </Link>
        </div>
      </nav>
        <header className="bg-[#F8FBFF] container-gray-dark border-b-4 dark:border-gray-dark py-14 px-6 xs:p-14 rounded-b-2xl text-center">
            <h1 className="text-[30px] font-bold lg:title md:text-[65px] lg:text-[90px] text-deep-sky-blue">{title}</h1>
            <h2 className="text-[16px] lg:lead mb-2 w-full mt-[16px] md:mt-[36px] md:mb-[28px] lg:text-[21px] xl:text-[26px] 2xl:text-[30px]">{contentText}</h2>
            <div className="inline-flex my-2 gap-x-4  lg:gap-x-[36px] mt-[20px] lg:mt-[30px]">
                <button className="text-white font-bold rounded-md bg-[#4CB050] py-[15px] text-[16px] px-[15px] lg:px-[70px] lg:py-[10px] lg:text-[30px]  inline-flex gap-x-2 transition-all hover:scale-[1.06] focus:outline-none items-center">
                    {firstBtn}
                </button>
                <a className="text-white font-bold rounded-md bg-[#03A9F4] py-[15px] text-[16px] px-[15px] lg:px-[70px] lg:py-[10px] lg:text-[30px]  inline-flex gap-x-2 transition-all hover:scale-[1.06] focus:outline-none items-center cursor-pointer" href={href}>
                    {secondBtn}
                </a>
            </div>
        </header>
        </>
    );
}

export default PhotoGalleryHeader;
