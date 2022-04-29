import HeartIcon from "../../components/icons/Heart";
import CommentIcon from "../../components/icons/Comment";
import Image from "next/image";
import Avatar from "../Avatar";
import React from "react";
import { Icon } from "@iconify/react";
import AdobeIcon from "../icons/Adobe";
import GithubIcon from "../icons/Github";
import FigmaIcon from "../icons/Figma";

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
export default function ProfileProjectCard({ ...props }) {
  const { date, image, title, desc, tags, likes, comments, bubbles, className } = props;
  return (
    <div
      className={
        className
          ? className
          : "w-[370px] h-[580px] flex bg-[#f8fbff] flex-col rounded-xl overflow-hidden p-3 shadow-xl hover:shadow-xxl dark:bg-[#2D2D2D] sm:w-3/4 md:w-1/1 lg:w-[520px] xl:w-[600px] 2xl-[700px]"
      }>
      {/* ====== #TOP SECTION */}
      {bubbles.length === 0 ? (
        <div className="w-full h-[20%]  flex items-center justify-between relative  pr-4 ">
          <span className="relative flex items-center">
            {bubbles &&
              bubbles.map((bubble, index) => {
                return (
                  <Avatar
                    key={index}
                    image="/assets/TEST/img-8.jpg"
                    className="w-11 h-11 relative -m-4"
                  />
                );
              })}
            <p className="caption flex items-center gap-2 text-12px md:text-18px">
              <Icon icon="mdi:clock-time-four-outline" color="#03a9f4" inline={true} />
              {date}
            </p>
          </span>
          <span className="flex items-center space-x-2">
            <a href="https://github.com/TheDynamics" style={{color: "currentColor"}}>
            <GithubIcon fill={"currentColor"} width={20} height={20} />
            </a>
            <a href="https://github.com/TheDynamics" style={{color: "currentColor"}}>
            <AdobeIcon fill={"currentColor"} width={20} height={20} />
            </a>
            <a href="https://github.com/TheDynamics" style={{color: "currentColor"}}>
            <FigmaIcon fill={"currentColor"} width={20} height={20} />
            </a>
          </span>
        </div>
      ) : (
        <div className="w-full h-[20%]  flex items-center justify-between relative pl-4 pr-4 ">
          <span className="relative flex gap-4 items-center">
            {bubbles &&
              bubbles.map((bubble, index) => {
                return (
                  <Avatar
                    key={index}
                    image="/assets/TEST/img-8.jpg"
                    className="w-11 h-11 relative -m-4"
                  />
                );
              })}
            <div className="flex-col items-center justify-start ml-4">
              <p className="font-semibold">+{bubbles.length} More</p>
              <p className=" caption flex items-center gap-2 font-normal text-12px md:text-18px">
                <Icon icon="mdi:clock-time-four-outline" color="#03a9f4" inline={true} />
                {date}
              </p>
            </div>
          </span>
          <span className="flex items-center space-x-2">
            <a href="https://github.com/TheDynamics" style={{color: "currentColor"}}>
            <GithubIcon fill={"currentColor"} width={20} height={20} />
            </a>
            <a href="https://github.com/TheDynamics" style={{color: "currentColor"}}>
            <AdobeIcon fill={"currentColor"} width={20} height={20} />
            </a>
            <a href="https://github.com/TheDynamics" style={{color: "currentColor"}}>
            <FigmaIcon fill={"currentColor"} width={20} height={20} />
            </a>
          </span>
        </div>
      )}

      {/* ====== #IMAGE */}
      <div className="w-full h-[50%]  flex items-center justify-center relative">
        <Image src={image} alt="" layout="fill" className="object-cover" />
      </div>

      {/* ====== #TEXT SECTION */}
      <div className="w-full ">
        <h4 className="subheadline font-semibold">{title}</h4>
        <p className="caption font-semibold italic">{desc}</p>
      </div>

      {/* ====== #BOTTOM SECTION */}

      <div className="flex w-full h-[7%] gap-2 items-center justify-between mt-5">
        <span className="flex items-center md:gap-2 gap-1">
          <p className="caption text-18px md:text-24px font-semibold">Tags:</p>
          {tags &&
            tags.map((tag, index) => {
              let color;
              if (index === 0) color = "bg-blue-600";
              if (index === 1) color = "bg-orange-400";
              if (index === 2) color = "bg-green-500";
              if (index === 3) color = "bg-cyan-400";
              return (
                <p
                  key={index}
                  className={`pl-2  pr-2 pt-1 pb-1 text-white ${color} caption rounded font-bold md:text-16px text-10px`}>
                  {tag}
                </p>
              );
            })}
        </span>
        <span className="flex items-center justify-between md:space-x-5 space-x-2">
          <p className="flex items-center gap-2">
            <HeartIcon  fill="#C50000" className ="md:w-8 md:h-8 h-3 w-3"/>
            <span className="md:text-24px text-16px font-bold">{likes}</span>
          </p>
          <p className="flex items-center gap-2">
            <CommentIcon  fill="#000000" className ="md:w-8 md:h-8 h-3 w-3" />
            <span className="md:text-24px text-16px font-bold">{comments}</span>
          </p>
        </span>
      </div>
    </div>
  );
}
