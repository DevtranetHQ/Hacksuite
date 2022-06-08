import Image from "next/image";
import React from "react";
import Avatar from "../../components/Avatar";
import ProfileImg from "../../public/assets/TEST/profile.jpg";

function ScrapbookCard({ ...props }) {
  const { time, text, image, code, userimg, username } = props;

  return (
    <section className="shadow-lg rounded-lg">
      <div className="p-5 bg-[#F8FBFF] dark:bg-[#2D2D2D] rounded-lg mb-10 shadow-md dark:text-white">
        <div className="flex items-center gap-x-2 mb-5">
          <Avatar image={userimg} className="relative md:w-16 md:h-16 w-20 h-20" border="1px" />
          <div className="flex-col">
            <p className="font-bold text-22px">@{username}</p>
            <h1 className=" text-[#7D7D7D] -mt-1">{time}</h1>
          </div>
        </div>

        <p className="mb-10 dark:text-white break-words text-16px 2xl:text-20px">{text}</p>
        <div>
          <img src={image} alt="" className=" rounded-lg mb-5 w-full" />
        </div>
      </div>
    </section>
  );
}

export default ScrapbookCard;
