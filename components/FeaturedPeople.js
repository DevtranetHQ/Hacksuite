import React from "react";
import Avatar from "./Avatar";
import ProfileImg from "../public/assets/TEST/profile.jpg";

export default function FeaturedPeople() {
  return (
    <div>
      <h1 className="font-semibold text-20px text-left mb-2">Featured People</h1>
      <div className="bg-[#F8FBFF] h-screen rounded-md dark:bg-[#2D2D2D]">
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-2">
            <Avatar image={ProfileImg} className="relative h-10 w-10" border="1px" />
            <div className="flex flex-col justify-start">
              <span className="text-left font-bold">Bella See</span>
              <span className="-mt-1">Founder, CommandTech</span>
            </div>
          </div>
          <p className="bg-deep-sky-blue px-2 py-1 rounded-md text-white text-14px ">Unfollow</p>
        </div>
        <hr />
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-2">
            <Avatar image={ProfileImg} className="relative h-10 w-10" border="1px" />
            <div className="flex flex-col justify-start ">
              <span className="text-left font-bold">Ibrahim Salami</span>
              <span className="-mt-1">Founder, CommandTech</span>
            </div>
          </div>
          <p className="bg-transparent border border-[#C9C9C9] px-2 py-1 rounded-md  text-14px ">
            Follow
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-2">
            <Avatar image={ProfileImg} className="relative h-10 w-10" border="1px" />
            <div className="flex flex-col justify-start ">
              <span className="text-left font-bold">Dora Palfi</span>
              <span className="-mt-1">Founder, CommandTech</span>
            </div>
          </div>
          <p className="bg-transparent border border-[#C9C9C9] px-2 py-1 rounded-md  text-14px ">
            Follow
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-2">
            <Avatar image={ProfileImg} className="relative h-10 w-10" border="1px" />
            <div className="flex flex-col justify-start ">
              <span className="text-left font-bold">Dev Agrawal</span>
              <span className="-mt-1">Founder, CommandTech</span>
            </div>
          </div>
          <p className="bg-transparent border border-[#C9C9C9] px-2 py-1 rounded-md  text-14px ">
            Follow
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-2">
            <Avatar image={ProfileImg} className="relative h-10 w-10" border="1px" />
            <div className="flex flex-col justify-start ">
              <span className="text-left font-bold">Melinda Gates</span>
              <span className="-mt-1">Founder, CommandTech</span>
            </div>
          </div>
          <p className="bg-transparent border border-[#C9C9C9] px-2 py-1 rounded-md  text-14px ">
            Follow
          </p>
        </div>
        <hr />
        <button className="button-deep-sky-blue button-small mx-auto mt-10 ">View more</button>
      </div>
    </div>
  );
}
