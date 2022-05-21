import Like from "../../components/Like";
import CommentIcon from "../icons/Comment";
import Image from "next/image";
import Avatar from "../Avatar";
import React, { HTMLAttributes, useContext } from "react";
import TimeIcon from "../icons/Time";
import GithubIcon from "../icons/Github";
import FigmaIcon from "../icons/Figma";
import AdobeIcon from "../icons/Adobe";
import { IProject } from "../../server/modules/projects/project.model";
import DarkModeContext from "../DarkModeContext";
import Link from 'next/link';

export const bubbleTrimmer = (bubbles, start = 0, end = 0): number[] => {
  return bubbles && bubbles.length > end ? bubbles.slice(start, end) : bubbles;
};

export default function ProjectGalleryProjectCard({
  project,
  ...props
}: { project: IProject } & HTMLAttributes<any>) {
  const { uniqueId, name, image, description, collaborators, creator, tools, publishedAt } =
    project;
  const { darkMode } = useContext(DarkModeContext);
  const trimmed = bubbleTrimmer(collaborators, 0, 3);

  const likes = Math.floor(Math.random() * 100);
  const comments = Math.floor(Math.random() * 100);

  return (
    <div className="w-full flex flex-col bg-[#f8fbff] dark:bg-[#2D2D2D] rounded-xl overflow-hidden shadow-xl hover:shadow-xxl p-3">
      {/* ====== #TOP SECTION */}
      <div className="w-full flex items-center justify-between relative pr-4 pt-[8px] pb-[20px]">
        <div className="flex justify-between items-center w-full h-[52.2px]">
          <div className="relative flex gap-4 items-center pl-4">
            {trimmed &&
              trimmed.map((bubble, index) => {
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
              {trimmed.length === 1 ? (
                <p className="ml-4 font-semibold text-[23.2px]">{name}</p>
              ) : (
                <p className="ml-4 font-semibold text-[23.2px]">{`+ ${
                  collaborators.length - 3
                } more`}</p>
              )}
              <p className="ml-4 caption text-[11.6px] flex items-center gap-[6px] dark:text-[#7D7D7D]">
                <TimeIcon width={10} height={10} /> <span>{publishedAt}</span>
              </p> 
            </div>
          </div>
          <div className="flex gap-[10px]">
            {tools &&
              tools.map((tool, index) => {
                switch (tool) {
                  case "github":
                    return (
                      <GithubIcon
                        key={index}
                        fill={darkMode ? "white" : "black"}
                        width={21}
                        height={21}
                      />
                    );
                  case "figma":
                    return (
                      <FigmaIcon
                        key={index}
                        fill={darkMode ? "white" : "black"}
                        width={21}
                        height={21}
                      />
                    );
                  case "adobexd":
                    return (
                      <AdobeIcon
                        key={index}
                        fill={darkMode ? "white" : "black"}
                        width={21}
                        height={21}
                      />
                    );
                  default:
                    break;
                }
              })}
          </div>
        </div>
        <span></span>
      </div>

      {/* ====== #IMAGE */}
      <div className="w-full h-[178px]  flex items-center justify-center relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="object-cover" />
      </div>

      {/* ====== #TEXT SECTION */}
      <div className="w-full mt-[5px]">
      <Link href={`/project-details?id=${uniqueId}`}>
        <h4 className=" text-[20.3px] font-semibold">{name}</h4>
      </Link>
        <p className="text-[13.5px] mt-[10px]">{description}</p>
      </div>

      {/* ====== #BOTTOM SECTION */}

      <div className="flex w-full h-[7%] gap-2 items-center justify-between mt-5">
        <span className="flex items-center gap-2">
          <p className="caption dark:text-[#B4B4B4]">Tags:</p>
          {tools &&
            tools.map((tool, index) => {
              let color;
              if (index === 0) color = "bg-blue-600";
              if (index === 1) color = "bg-orange-400";
              if (index === 2) color = "bg-green-500";
              if (index === 3) color = "bg-cyan-400";
              return (
                <p
                  key={index}
                  className={`pl-2  pr-2 pt-1 pb-1 text-[11px] rounded-sm text-white ${color} caption font-bold`}>
                  {tool}
                </p>
              );
            })}
        </span>
        <span>
          <span className="flex items-center justify-center gap-[8px]">
            <Like
              width="20px"
              height="20px"
              fill="#C50000"
              className="transition-all hover:scale-[1.2]"
            />
            <p className="font-semibold text-[17px]">{likes}</p>
            <CommentIcon
              width="20px"
              height="20px"
              fill={darkMode ? "white" : "black"}
              className="transition-all hover:scale-[1.2]"
            />
            <p className="font-semibold text-[17px]">{comments}</p>
          </span>
        </span>
      </div>
    </div>
  );
}
