import React from "react";
import Avatar from "./Avatar";
import ArrowIcon from "./icons/Arrow";
import VerifiedIcon from "./icons/VerifiedIcon";

export default function FeaturedPeople({ ...props }) {
  const { headline, following, userimg, username, verified, people } = props;
  return (
    <div>
      <div className="bg-[#F8FBFF] h-screen rounded-md dark:bg-[#2D2D2D]">
        <div className="flex items-center justify-between p-4  border-b">
          <div className="flex gap-2">
            <Avatar image={userimg} className="relative h-10 w-10" />
            <div className="flex flex-col justify-start">
              <span className="text-left font-bold text-16px flex items-center">
                {username} {verified && <VerifiedIcon className="h-5 w-5 ml-2" />}
              </span>
              <span className="-mt-1 text-14px">{headline}</span>
            </div>
          </div>
          <p
            className={`px-2 py-1 rounded-md ${
              following
                ? "bg-deep-sky-blue text-white"
                : "bg-[#FFFFFF] text-black border border-[#C9C9C9]"
            } text-14px`}>
            {following ? "Unfollow" : "Follow"}
          </p>
        </div>
        <button className="button-deep-sky-blue button-small mx-auto mt-8 items-center ">
          View more{" "}
          <div className="ml-2 pt-1">
            <ArrowIcon />
          </div>
        </button>
      </div>
    </div>
  );
}
