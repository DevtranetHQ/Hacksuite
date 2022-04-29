import HeartIcon from "../../components/icons/Heart";
import CommentIcon from "../../components/icons/Comment";
import Image from "next/image";
import Avatar from "../Avatar";
import React from "react";
import TimeIcon from "../icons/Time";
import GithubIcon from "../icons/Github";
import FigmaIcon from "../icons/Figma";
import AdobeIcon from "../icons/Adobe";

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
export default function ProjectGalleryProjectCard({ ...props }) {
  const {name, date, image, title, desc, tags, likes, tools, comments, bubbles, className, bubbleNumber } = props;
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
                  {bubbles.length === 1 ? <p className="ml-4 font-semibold text-[23.2px]">{name}</p> : <p className="ml-4 font-semibold text-[23.2px]">{`+ ${bubbleNumber - 3} more`}</p>}
                  <p className="ml-4 caption text-[11.6px] flex items-center gap-[6px] dark:text-[#7D7D7D]"><TimeIcon width={10} height={10} /> <span>{date}</span></p>
              </div>
            </div>
            <div className="flex gap-[10px]">
                {tools && tools.map(tool => {
                    switch (tool) {
                        case 'github':
                            return <GithubIcon fill="black" width={21} height={21} />
                        case 'figma':
                            return <FigmaIcon fill="black" width={21} height={21} />
                        case 'adobexd':
                            return <AdobeIcon fill="black" width={21} height={21} />
                        default:
                            break;
                    }
                })
                }
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
        <h4 className=" text-[20.3px] font-semibold">{title}</h4>
        <p className="text-[11.6px] mt-[10px]">{desc}</p>
      </div>

      {/* ====== #BOTTOM SECTION */}

      <div className="flex w-full h-[7%] gap-2 items-center justify-between mt-5">

      
        <span className="flex items-center gap-2">
          <p className="caption">Tags:</p>
          {tags &&
            tags.map((tag, index) => {
              let color;
              if (index === 0) color = "bg-blue-600";
              if (index === 1) color = "bg-orange-400";
              if (index === 2) color = "bg-green-500";
              if (index === 3) color = "bg-cyan-400";
              return (
                <p key={index} className={`pl-2  pr-2 pt-1 pb-1 text-[11px] rounded-sm text-white ${color} caption font-bold`}>
                  {tag}
                </p>
              );
            })}
        </span>
        <span>
          <span className="flex items-center justify-center gap-[5px]">
            <HeartIcon width="20px" height="20px" fill="#C50000" />
            <p className="font-semibold text-[17px]">{likes}</p>
            <CommentIcon width="20px" height="20px" fill="#000000" />
            <p className="font-semibold text-[17px]">{comments}</p>
          </span>
        </span>
      </div>
    </div>
  );
}
