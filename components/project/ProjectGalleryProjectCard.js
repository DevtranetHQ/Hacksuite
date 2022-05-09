import Like from "../../components/Like";
import CommentIcon from "../../components/icons/Comment";
import Image from "next/image";
import Avatar from "../Avatar";
import React from "react";
import TimeIcon from "../icons/Time";
import GithubIcon from "../icons/Github";
import FigmaIcon from "../icons/Figma";
import AdobeIcon from "../icons/Adobe";
import { useState, useContext } from "react";
import DarkModeContext from "../DarkModeContext";

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
  const {name, date, image, title, desc, tags, likes, tools, comments, bubbles, className, bubbleNumber, liked } = props;
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
      <div className="w-full flex items-center justify-between relative pr-4 pt-[8px] pb-[20px]">
        <div className="flex justify-between items-center w-full h-[52.2px]">
            <div className="relative flex gap-4 items-center pl-4">
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
              {bubbles.length === 1 ? <p className="ml-4 font-semibold text-[23.2px]">{name}</p> : (bubbles.length === 0 ? '' : <p className="ml-4 font-semibold text-[23.2px]">{`+ ${bubbleNumber - 3} more`}</p>)}
                  <p style={{paddingLeft: bubbles.length === 0 ? 0 : 16, top: bubbles.length === 0 ? 12 : 0 }} className="relative caption text-[11.6px] flex items-center gap-[6px] dark:text-[#7D7D7D]"><TimeIcon width={10} height={10} /> <span>{date}</span></p>
              </div>
            </div>
            <div className="flex gap-[10px]">
            {tools && tools.map((tool, index) => {
                    switch (tool) {
                        case 'github':
                          return <GithubIcon key={index} fill={darkMode ? "white" : "black"} width={21} height={21} />
                        case 'figma':
                          return <FigmaIcon key={index} fill={darkMode ? "white" : "black"} width={21} height={21} />
                        case 'adobexd':
                          return <AdobeIcon key={index} fill={darkMode ? "white" : "black"} width={21} height={21} />
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
        <p className="text-[13.5px] mt-[10px]">{desc}</p>
      </div>

      {/* ====== #BOTTOM SECTION */}

      <div className="flex w-full h-[7%] gap-2 items-center justify-between mt-5">

      
        <span className="flex items-center gap-2">
          <p className="caption dark:text-[#B4B4B4]">Tags:</p>
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
          <span className="flex items-center justify-center gap-[8px]">
            <Like width="20px" height="20px" fill="#C50000" className='transition-all hover:scale-[1.2]' liked={isLiked} setLiked={setLiked}/>
            <p className="font-semibold text-[17px]">{isLiked? likes + 1 : likes}</p>
            <CommentIcon width="20px" height="20px" fill={darkMode ? "white" : "black"} className='transition-all hover:scale-[1.2]'/>
            <p className="font-semibold text-[17px]">{comments}</p>
          </span>
        </span>
      </div>
    </div>
  );
}
