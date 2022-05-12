import Image from "next/image";
import Avatar from "./Avatar";
import React from "react";
import TimeIcon from "./icons/Time";
import GithubIcon from "./icons/Github";
import FigmaIcon from "./icons/Figma";
import AdobeIcon from "./icons/Adobe";
import { useState, useContext } from "react";
import DarkModeContext from "./DarkModeContext";

/**
 * User profile project Card component
 *
 * @param {Date} date - Project date
 * @param {String} image - Path to project image
 * @param {String} title - Project title
 * @param {String} desc - Project description
 * @param {String[]} tags - Array of related project tags
 * @param {Number} likes - Number of like
 * @param {Number} comments - Number of comments
 * @param {String} className - Optional classname for card
 * @returns  Card Component
 */
export default function WorkshopProfileCard({ ...props }) {
  const {
    name,
    date,
    image,
    title,
    desc,
    tags,
    likes,
    tools,
    comments,
    bubbles,
    className,
    bubbleNumber,
    liked
  } = props;
  const { darkMode } = useContext(DarkModeContext);
  const [isLiked, setLiked] = useState(liked);
  return (
    <div
      className={
        className
          ? className
          : "w-[370px] h-[580px] flex bg-[#f8fbff] flex-col rounded-xl overflow-hidden p-3 shadow-xl hover:shadow-xxl dark:bg-[#2D2D2D] sm:w-3/4 md:w-1/1 lg:w-[520px] xl:w-[600px] 2xl-[700px]"
      }>
      {/* ====== #TOP SECTION */}
      <div className="w-full flex items-center justify-between relative pl-4 pr-4 pt-[8px] pb-[20px]">
        <div className="flex justify-between items-center w-full">
          <div className="relative flex gap-4 items-center">
            {bubbles &&
              bubbles.map((bubble, index) => {
                return (
                  <Avatar
                    key={index}
                    image="/assets/TEST/img-8.jpg"
                    className="w-[50px] h-[50px] relative -m-4"
                    border="border-[3px]"
                  />
                );
              })}
            <div>
              {bubbles.length === 1 ? (
                <p className="ml-4 font-semibold text-[23.2px]">{name}</p>
              ) : (
                <p className="ml-4 font-semibold text-[23.2px]">{`+ ${bubbleNumber - 3} more`}</p>
              )}
              <p className="ml-4 caption text-[11.6px] flex items-center gap-[6px] dark:text-[#7D7D7D]">
                <TimeIcon width={10} height={10} /> <span>{date}</span>
              </p>
            </div>
          </div>
        </div>
        <span></span>
      </div>

      {/* ====== #IMAGE */}
      <div className="w-full h-[178px]  flex items-center justify-center relative">
        <Image src={image} alt="" layout="fill" className="object-cover" />
      </div>

      {/* ====== #TEXT SECTION */}
      <div className="w-full mt-[5px]">
        <h4 className=" text-[22px] font-semibold">{title}</h4>
        <p className="text-[18px] mt-[10px]">{desc}</p>
      </div>
    </div>
  );
}
