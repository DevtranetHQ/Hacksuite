import HeartIcon from "../../components/icons/Heart";
import CommentIcon from "../../components/icons/Comment";
import Image from "next/image";
import Avatar from "../Avatar";
import React from "react";

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
          : "w-[800px] h-[580px] flex bg-[#f8fbff] flex-col rounded-xl overflow-hidden p-3 shadow-xl hover:shadow-xxl dark:bg-[#2D2D2D] sm:w-3/4 md:w-1/1 lg:w-[550px] xl:w-[680px] 2xl-[800px] "
      }>
      {/* ====== #TOP SECTION */}
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
          <p className="ml-4 caption">{date}</p>
        </span>
        <span></span>
      </div>

      {/* ====== #IMAGE */}
      <div className="w-full h-[60%]  flex items-center justify-center relative">
        <Image src={image} alt="" layout="fill" className="object-cover" />
      </div>

      {/* ====== #TEXT SECTION */}
      <div className="w-full ">
        <h4 className="subheadline">{title}</h4>
        <p className="caption">{desc}</p>
      </div>

      {/* ====== #BOTTOM SECTION */}
      <div className="flex w-full gap-2 items-center justify-between">
        <span className="flex items-center gap-2">
          <p className="caption">tags:</p>
          {tags &&
            tags.map((tag, index) => {
              let color;
              if (index === 0) color = "bg-blue-600";
              if (index === 1) color = "bg-orange-400";
              if (index === 2) color = "bg-green-500";
              if (index === 3) color = "bg-cyan-400";
              return (
                <p key={index} className={`pl-2  pr-2 pt-1 pb-1 text-white ${color} caption`}>
                  {tag}
                </p>
              );
            })}
        </span>
        <span>
          <span className="flex items-center justify-center gap-3">
            <HeartIcon width="30px" height="30px" fill="#C50000" />
            <p>{likes}</p>
            <CommentIcon width="30px" height="30px" fill="#000000" />
            <p>{comments}</p>
          </span>
        </span>
      </div>
    </div>
  );
}
