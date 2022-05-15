import React from "react";
import { useContext } from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import Logo from "../components/Logo";
import ReCAPTCHA from "react-google-recaptcha";
import InboxIcon from "../components/icons/Inbox";
import GithubIcon from "../components/icons/Github";
import UploadIcon from "../components/icons/Upload";
import FigmaIcon from "../components/icons/Figma";
import AdobeIcon from "../components/icons/Adobe";
import LinkIcon from "../components/icons/Link";
import DarkModeContext from "../components/DarkModeContext";
import Link from "next/link";

export default function CreateProject() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="dark:bg-[#202020] dark:text-white pl-3  pr-3 ">
      <nav className="flex items-center justify-between pl-[10px] lg:pl-8 pr-[12px] lg:pr-12">
        <Logo className="w-[80px] md:w-[120px] py-5" />
        <h1 className="text-[30px] font-bold lg:title md:text-[65px] lg:text-[90px] ">Projects</h1>
        <div className="flex gap-x-[0px] md:gap-x-3 lg:gap-x-5 items-center">
          <DarkModeToggle
            className="mx-0 w-[25px] md:w-[44px] lg:scale-[1.24] lg:mr-[10px]"
            darkClassName="mx-0 w-[25px] md:w-[33px] lg:w-[40px] h-[25px] md:h-[48px] lg:h-[60px]"
          />
          <a href="#" className="scale-75 lg:scale-[1.4] md:scale-[1.15]">
            <InboxIcon fill="black" />
          </a>
        </div>
      </nav>

      <header className="bg-[#F8FBFF] container-gray-dark dark:border-gray-dark py-14 px-6 xs:p-14 rounded-b-2xl text-center text-[30px]">
        Here you can share all the cool things you're making and launching with{" "}
        <span className="font-bold">The Dynamics Community</span>, and beyond
      </header>

      {/* Form */}
      <form onSubmit={e => e.preventDefault()}>
        <div>
          <label
            className="font-semibold xs:text-12px md:text-24px xs:font-bold xs:mb-1"
            htmlFor="name">
            Project Name <span className="text-[#f54242]">*</span>
          </label>
          <input
            className="form-input text-24px rounded-lg dark:bg-[#E9E9E9] xs:py-1 md:text-16px"
            name="name"
            id="name"
            type="text"
            maxLength={80}
            placeholder="Describe your project in one or two words"
            required
          />
          <p className="font-bold text-[12px] font-italic">Max words 3</p>
        </div>

        <div className="mt-7">
          <label
            className="font-semibold xs:text-12px md:text-24px xs:font-bold xs:mb-1"
            htmlFor="name">
            Project Picture <span className="text-[#f54242]">*</span>
          </label>

          <div className="border-2 border-orange-peel pt-10 pb-10 my-5 text-center rounded-md">
            <label
              className="mxs:mx-10 mxs:mt-5 button-small button-deep-sky-blue cursor-pointer inline-flex gap-x-2 mt-3.5 h-14 xs:w-52"
              htmlFor="profile-upload">
              <UploadIcon />
              <span className="">Upload a picture</span>
            </label>
            <input className="hidden" id="profile-upload" type="file" />
          </div>
        </div>

        <div className="mt-7">
          <label
            className="font-semibold xs:text-12px md:text-24px xs:font-bold xs:mb-1"
            htmlFor="name">
            Description <span className="text-[#f54242]">*</span>
          </label>

          <div className="border-2 h-[200px] pt-10 pb-10 my-5 text-center rounded-md"></div>
          <p className="font-bold text-[12px] font-italic">
            Tell us more about this project, a typical description talks about what it does, how it
            works, how it was built, some challenges encountered during the process, or future plans
            for it, 500 words max.
          </p>
        </div>

        <div className="mt-7">
          <label
            className="font-semibold xs:text-12px md:text-24px xs:font-bold xs:mb-1"
            htmlFor="name">
            Add Collaborators <span className="text-[#f54242]">*</span>
          </label>

          <input
            className="form-input text-24px rounded-lg dark:bg-[#E9E9E9] xs:py-1 md:text-16px"
            name="name"
            id="name"
            type="text"
            maxLength={80}
            placeholder="Describe your project in one or two words"
            required
          />

          <p className="font-bold text-[12px] font-italic">
            Tell us the team behind this amazing project, if it’s just you leave this section blank.
          </p>
        </div>

        <div className="mt-7">
          <label
            className="font-semibold xs:text-12px md:text-24px xs:font-bold xs:mb-1"
            htmlFor="name">
            Technology/Tools used or project domain <span className="text-[#f54242]">*</span>
          </label>

          <select className="appearance-none text-18px text-body bg-white border-[#c1c1c1] border-2 block w-full px-3 py-2 rounded">
            <option></option>
          </select>

          <p className="font-bold text-[12px] font-italic">
            Select in order of relevance, the first four will be displayed on the project preview
            page.{" "}
          </p>
        </div>

        <div className="mt-7">
          <label
            className="font-semibold xs:text-12px md:text-24px xs:font-bold xs:mb-1"
            htmlFor="name">
            Project Development stage <span className="text-[#f54242]">*</span>
          </label>

          <select className="appearance-none text-18px text-body bg-white border-[#c1c1c1] border-2 block w-full px-3 py-2 rounded">
            <option></option>
          </select>

          <p className="font-bold text-[12px] font-italic">
            Tell us about the current state of this project, e.g Beta, feature update, completed,
            bug fixes, etc.
          </p>
        </div>

        <div className="mt-7">
          <label
            className="font-semibold xs:text-12px md:text-24px xs:font-bold xs:mb-1"
            htmlFor="name">
            Project Links <span className="text-[#f54242]">*</span>
          </label>

          <div className="border-2 h-[200px] pt-10 pb-10 my-5 text-center rounded-md">
            <div className="flex items-center gap-5 mt-2 mb-3 ml-5 text-18px">
              {" "}
              <GithubIcon fill="black" height={"18px"} width="18px" />{" "}
              <input type="text" placeholder="Github Link" />
            </div>
            <div className="flex items-center gap-5 mt-2 mb-3 ml-5 text-18px">
              {" "}
              <FigmaIcon fill="black" height={"18px"} width="18px" />{" "}
              <input type="text" placeholder="Figma Link" />
            </div>
            <div className="flex items-center gap-5 mt-2 mb-3 ml-5 text-18px">
              {" "}
              <AdobeIcon fill="black" height={"18px"} width="18px" />{" "}
              <input type="text" placeholder="AdobeXD Link" />
            </div>
            <div className="flex items-center gap-5 mt-2 mb-3 ml-5 text-18px">
              {" "}
              <LinkIcon fill="black" height={"18px"} width="18px" />{" "}
              <input type="text" placeholder="Other Links..." />
            </div>
          </div>
          <p className="font-bold text-[12px] font-italic">Max of 3 please.</p>
        </div>

        {/* ReCAPTCHA */}
        <ReCAPTCHA
          className="w-fit mx-auto"
          sitekey="6LexReUeAAAAAF5a0KmF1tz26MWEFUwnhQ7crZAL"
          size="normal"
          theme={darkMode ? "dark" : "light"}
        />

        <div className="flex items-center justify-center my-2 gap-x-4  lg:gap-x-[36px] mt-[20px] lg:mt-[30px]">
          <button className="mx-0 py-0 button-medium button-orange-peel text-24px rounded ">
            Save for Later
          </button>
          <a className="mx-0 py-0 button-medium button-deep-sky-blue text-24px rounded ">
            Publish now
          </a>
        </div>
      </form>
    </div>
  );
}
