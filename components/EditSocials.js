import React, { useState } from "react";
import FacebookIcon from "./icons/Facebook";
import RedditIcon from "./icons/Reddit";
import InstagramIcon from "./icons/Instagram";
import LinkedinIcon from "./icons/Linkedin";
import GithubIcon from "./icons/Github";
import TwitterIcon from "./icons/Twitter";

export default function EditSocials() {
  // To show if users uploaded his socials accounts
  const [socials, setSocials] = useState(true);

  // Responsible for opening and close the form modal
  const [editSocials, setEditSocials] = useState(false);
  return (
    <>
      <div className="mxs:space-x-5 flex gap-5 items-center my-6">
        <span className="cursor-pointer">
          <GithubIcon className="mxs:w-[32px]" width={32} fill={socials ? "" : "#C9C9C9"} />
        </span>
        <span className="mxs:w-[32px] cursor-pointer">
          <TwitterIcon width={41} height={33} fill={socials ? "" : "#C9C9C9"} />
        </span>
        <span className="mxs:w-[30px] cursor-pointer">
          <LinkedinIcon width={35} height={31} fill={socials ? "" : "#C9C9C9"} />
        </span>
      </div>
      <span
        className={`border-2 font-semibold  border-[#C9C9C9] text-[#C9C9C9] px-3 py-1 rounded-md cursor-pointer hover:text-black hover:border-black dark:hover:text-white dark:hover:border-white ${
          socials ? "" : "dark:bg-dark dark:border-none"
        }`}
        onClick={() => setEditSocials(true)}>
        {socials ? "EDIT" : "ADD SOCIALS"}
      </span>
      {editSocials ? (
        <div className="flex justify-center items-center  fixed inset-0 z-50 outline-none focus:outline-none rounded-lg w-full mx-auto slide-bottom backdrop-blur-sm">
          <div
            className={`relative  my-6 mx-auto xs:w-max w-full bg-white rounded-lg xs:px-10  ${
              socials ? "dark:bg-dark" : ""
            }`}>
            <div
              className="flex justify-end top-0 font-bold text-36px cursor-pointer text-[#C9C9C9] hover:text-black dark:hover:text-white transition-all px-5 xs:px-0"
              onClick={() => setEditSocials(false)}>
              x
            </div>
            <form className=" bg-white dark:bg-dark w-full">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-10 gap-y-10">
                <div className="flex gap-x-5 items-center">
                  <span className="cursor-pointer">
                    <LinkedinIcon width={35} height={31} />
                  </span>
                  <input
                    type="text"
                    className="form-input pl-3 p-1 m-0 pr-10 "
                    placeholder="Enter your linkedin url... "
                  />
                </div>
                <div className="flex gap-x-5 items-center">
                  <span className="cursor-pointer">
                    <RedditIcon className="mxs:w-[32px]" width={32} />
                  </span>
                  <input
                    type="text"
                    className="form-input pl-3 p-1 m-0 pr-10"
                    placeholder="Enter your reddit url..."
                  />
                </div>
                <div className="flex gap-x-5 items-center">
                  <span className="cursor-pointer">
                    <TwitterIcon width={35} height={30} />
                  </span>
                  <input
                    type="text"
                    className="form-input pl-3 p-1 m-0 pr-10"
                    placeholder="Enter your twitter url..."
                  />
                </div>
                <div className="flex gap-x-5 items-center">
                  <span className="cursor-pointer">
                    <FacebookIcon className="mxs:w-[32px]" width={32} />
                  </span>
                  <input
                    type="text"
                    className="form-input pl-3 p-1 m-0 pr-10"
                    placeholder="Enter your facebook url..."
                  />
                </div>
                <div className="flex gap-x-5 items-center">
                  <span className="cursor-pointer">
                    <GithubIcon className="mxs:w-[32px]" width={32} />
                  </span>
                  <input
                    type="text"
                    className="form-input pl-3 p-1 m-0 pr-10"
                    placeholder="Enter your github url..."
                  />
                </div>
                <div className="flex gap-x-5 items-center">
                  <span className="cursor-pointer flex items-center">
                    <InstagramIcon className="mxs:w-[32px]" width={32} />
                  </span>
                  <input
                    type="text"
                    className="form-input pl-3 p-1 m-0 w-11/12"
                    placeholder="Enter your instagram url..."
                  />
                </div>
              </div>
            </form>
            <button
              className="button-big button-deep-sky-blue mx-auto my-5 w-[230px] text-22px"
              onClick={() => {}}>
              Done
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
