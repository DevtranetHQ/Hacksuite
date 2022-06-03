import HeartIcon from "../icons/Heart";
import CommentIcon from "../icons/Comment";
import Image from "next/image";
import Avatar from "../Avatar";
import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import AdobeIcon from "../icons/Adobe";
import GithubIcon from "../icons/Github";
import FigmaIcon from "../icons/Figma";
import ShareIcon from "../icons/Share";
import { bubbleTrimmer } from "../../pages/app/profile/[id]";
import DarkModeContext from "../DarkModeContext";
import TwitterIcon from "../../components/icons/Twitter";
import Facebook from "../../components/icons/Facebook";
import LinkedinIcon from "../../components/icons/Linkedin";
import FacebookIcon from "../../components/icons/Facebook";
import Like from "../Like";

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
  const { date, image, title, desc, tags, likes, comments, bubbles, className, tools } = props;
  const { darkMode } = useContext(DarkModeContext);
  const [share, setShare] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div
      className={
        className
          ? className
          : "w-full h-[580px] flex bg-[#f8fbff] flex-col rounded-xl overflow-hidden shadow-xl hover:shadow-xxl dark:bg-[#2D2D2D] justify-between p-5 mb-10"
      }>
      {/* ====== #TOP SECTION */}
      {bubbles.length === 0 ? (
        <div className="w-full h-max  flex items-center justify-between relative ">
          <span className="relative flex items-center">
            <p className="caption flex items-center gap-2 text-12px md:text-16px lg-text-18px">
              <Icon icon="mdi:clock-time-four-outline" color="#03a9f4" inline={true} />
              {date}
            </p>
          </span>
          <span className="flex items-center space-x-2">
            {tools &&
              tools.map(tool => {
                switch (tool) {
                  case "github":
                    return (
                      <GithubIcon fill={darkMode ? "white" : "black"} width={21} height={21} />
                    );
                  case "figma":
                    return <FigmaIcon fill={darkMode ? "white" : "black"} width={21} height={21} />;
                  case "adobexd":
                    return <AdobeIcon fill={darkMode ? "white" : "black"} width={21} height={21} />;
                  default:
                    break;
                }
              })}
          </span>
        </div>
      ) : (
        <div className="w-full h-max  flex items-center justify-between relative pl-4 pr-4 ">
          <span className="relative flex gap-4 items-center">
            {bubbles && !bubbles.length > 3
              ? bubbles.map((bubble, index) => {
                  return (
                    <Avatar
                      border="1px"
                      key={index}
                      image="/assets/TEST/img-8.jpg"
                      className="w-11 h-11 relative -m-3"
                    />
                  );
                })
              : bubbleTrimmer(bubbles, 0, 3).map((bubble, index) => {
                  return (
                    <Avatar
                      border="1px"
                      key={index}
                      image="/assets/TEST/img-8.jpg"
                      className="w-11 h-11 relative -m-4"
                    />
                  );
                })}
            <div className="flex-col items-center justify-start ml-4">
              <p className="font-semibold lg:text-22px md:text-18px text-18px md:ml-1 text-left">
                {bubbles.length > 3 ? `+ ${bubbles.length} more` : ""}
              </p>
              <p className=" caption flex items-center gap-2 font-normal text-12px md:text-16px lg:text-18px md:mx-1">
                <Icon icon="mdi:clock-time-four-outline" color="#03a9f4" inline={true} />
                {date}
              </p>
            </div>
          </span>
          <span className="flex items-center space-x-2">
            {tools &&
              tools.map(tool => {
                switch (tool) {
                  case "github":
                    return (
                      <GithubIcon fill={darkMode ? "white" : "black"} width={21} height={21} />
                    );
                  case "figma":
                    return <FigmaIcon fill={darkMode ? "white" : "black"} width={21} height={21} />;
                  case "adobexd":
                    return <AdobeIcon fill={darkMode ? "white" : "black"} width={21} height={21} />;
                  default:
                    break;
                }
              })}
          </span>
        </div>
      )}

      {/* ====== #IMAGE */}
      <div className="w-full h-[50%] flex items-center justify-center relative">
        <Image src={image} alt="" layout="fill" className="object-cover" />
      </div>

      {/* ====== #TEXT SECTION */}
      <div className="-mt-10">
        <h4 className="subheadline font-semibold">{title}</h4>
        <p className="caption font-semibold italic">{desc}</p>
      </div>

      {/* ====== #BOTTOM SECTION */}

      <div className="flex w-full h-max gap-2 items-center justify-between  ">
        <span className="flex items-center md:gap-1 lg:gap-2 gap-1">
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
                  className={`pl-2  pr-2 pt-1 pb-1 text-white ${color} caption rounded font-bold md:text-12px lg:text-16px text-10px `}>
                  {tag}
                </p>
              );
            })}
        </span>
        <span className="flex items-center justify-between lg:space-x-5 md:space-x-2 space-x-2">
          <p className="flex items-center gap-2">
            {/* <HeartIcon fill="#C50000" className="lg:h-8 lg:w-8 md:w-3 md:h-3 h-3 w-3" /> */}
            <Like
              width="32px"
              height="32px"
              fill="#C50000"
              className="transition-all md:hover:scale-[0.45]  lg:hover:scale-[1.2] scale-[0.375] md:relative md:left-[11px] lg:left-0 md:scale-[0.375] lg:scale-100"
              liked={liked}
              setLiked={setLiked}
            />
            <span className="lg:text-24px md:text-16px text-16px font-bold">
              {liked ? likes + 1 : likes}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <CommentIcon fill="currentColor" className="lg:h-8 lg:w-8 md:w-3 md:h-3 h-3 w-3" />
            <span className="lg:text-24px md:text-16px text-16px font-bold">{comments}</span>
          </p>
          <p className="flex items-center gap-2">
            <svg
              onClick={() => setShare(true)}
              width="40"
              height="39"
              viewBox="0 0 24 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5 0.25V5.25C5.75 6.5 2 12.75 0.75 19C3.875 14.625 8.25 12.625 14.5 12.625V17.75L23.25 9L14.5 0.25ZM17 6.2875L19.7125 9L17 11.7125V10.125H14.5C11.9125 10.125 9.5875 10.6 7.425 11.3125C9.175 9.575 11.425 8.2125 14.85 7.75L17 7.4125V6.2875Z"
                fill="currentColor"
              />
            </svg>
            {share ? (
              <div
                className="flex justify-center items-center  fixed inset-0 z-50 outline-none focus:outline-none rounded-lg w-full mx-auto slide-bottom backdrop-blur-sm"
                onClick={() => setShare(false)}>
                <div className="relative  my-6 mx-auto p-5 w-max px-10 bg-white dark:bg-dark rounded-lg cursor-pointer">
                  <div>
                    <h1 className="text-center font-semibold text-28px mb-5">Share it </h1>
                    <div className="flex gap-x-10 items-center justify-center">
                      <TwitterIcon />
                      <FacebookIcon />
                      <LinkedinIcon />
                      <svg
                        width="44"
                        height="49"
                        viewBox="0 0 44 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M36.5 34.8602C34.6633 34.8602 33.02 35.5852 31.7633 36.721L14.5325 26.6918C14.6533 26.136 14.75 25.5802 14.75 25.0002C14.75 24.4202 14.6533 23.8643 14.5325 23.3085L31.57 13.376C32.875 14.5843 34.5908 15.3335 36.5 15.3335C38.4228 15.3335 40.2669 14.5697 41.6265 13.21C42.9862 11.8504 43.75 10.0063 43.75 8.0835C43.75 6.16068 42.9862 4.31661 41.6265 2.95697C40.2669 1.59733 38.4228 0.833496 36.5 0.833496C34.5772 0.833496 32.7331 1.59733 31.3735 2.95697C30.0138 4.31661 29.25 6.16068 29.25 8.0835C29.25 8.6635 29.3467 9.21933 29.4675 9.77516L12.43 19.7077C11.125 18.4993 9.40917 17.7502 7.5 17.7502C5.57718 17.7502 3.73311 18.514 2.37348 19.8736C1.01384 21.2333 0.25 23.0773 0.25 25.0002C0.25 26.923 1.01384 28.767 2.37348 30.1267C3.73311 31.4863 5.57718 32.2502 7.5 32.2502C9.40917 32.2502 11.125 31.501 12.43 30.2927L29.6367 40.3218C29.5158 40.8293 29.4433 41.361 29.4433 41.9168C29.4433 45.8077 32.6092 48.9493 36.5 48.9493C40.3908 48.9493 43.5567 45.8077 43.5567 41.9168C43.5567 40.0453 42.8132 38.2504 41.4898 36.927C40.1664 35.6036 38.3715 34.8602 36.5 34.8602Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </p>
        </span>
      </div>
    </div>
  );
}
