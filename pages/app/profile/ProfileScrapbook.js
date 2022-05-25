import Image from "next/image";
import React from "react";
function ProfileScrapbook({ ...props }) {
  const { time, text, image, code } = props;

  return (
    <section className="shadow-lg rounded-lg">
      <div className="p-5 bg-[#F8FBFF] dark:bg-[#2D2D2D] rounded-lg mb-5 shadow-md dark:text-white">
        <h1 className="font-bold text-30px mb-3 dark:text-white">{time}</h1>
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

export default ProfileScrapbook;
