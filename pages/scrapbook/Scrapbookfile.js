import Image from "next/image";
import React from "react";
import Avatar from "../../components/Avatar";
import ProfileImg from "../../public/assets/TEST/profile.jpg";
function Scrapbookfile({ ...props }) {
  const { time, text, image, code, userimg, username } = props;

  return (
    <section className="shadow-lg rounded-lg">
      <div className="p-5 bg-[#F8FBFF] dark:bg-[#2D2D2D] rounded-lg mb-5 shadow-md dark:text-white">
        <div className="flex items-center gap-x-5 mb-5">
          <Avatar image={userimg} className="relative  w-20 h-20" border="!border-[3px]" />
          <div className="flex-col">
            <p className="font-bold text-22px">@{username}</p>
            <h1 className="dark:text-white text-[#7D7D7D] -mt-1">{time}</h1>
          </div>
        </div>

        <p className="mb-10 dark:text-white break-words">{text}</p>
        <div>
          {/* {image.map((img, index, image) => {
                return (
                    <Image src={image} key={index} />
            )})} */}
          <img src={image} alt="" className=" rounded-lg mb-5" />
        </div>
      </div>
    </section>
  );
}

export default Scrapbookfile;
