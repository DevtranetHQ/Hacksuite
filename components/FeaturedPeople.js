import React from "react";
import Avatar from "./Avatar";
import ArrowIcon from "./icons/Arrow";
import VerifiedIcon from "./icons/VerifiedIcon";

export default function FeaturedPeople({ people }) {
  return (
    <div className="shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-tl-[5px] bg-[#F8FBFF] h-screen rounded-md dark:bg-[#2D2D2D] ">
      {people.slice(0, 5).map(person => {
        return (
          <div key={person.id}>
            <div className="flex items-center px-4 lg:px-6 py-2 lg:py-3 text-[10px] lg:text-12px xl:text-16px 2xl:text-20px">
              <div>
                <Avatar
                  image={person.image}
                  className="relative w-[30px] h-[30px] lg:w-[30px] lg:h-[30px] xl:w-[50px] xl:h-[50px] 2xl:w-[70px] 2xl:h-[70px] mr-2"
                  border="1px"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col justify-start w-full ">
                  <span className="text-left font-bold   flex items-center">
                    {person.username}{" "}
                    {person.verified && (
                      <VerifiedIcon className=" ml-2 md:h-4 md:w-4 lg:h-3 lg:w-3 xl:h-4 xl:w-4 2xl:w-5 2xl:h-5" />
                    )}
                  </span>
                  <span className="-mt-1 lg:mt-0 flex flex-wrap text-left ">{person.roles}</span>
                </div>
                <p
                  className={`px-2 py-1 rounded-md lg:text-10px md:text-12px xl:text-16px 2xl:text-20px ${
                    person.following
                      ? "bg-deep-sky-blue text-white"
                      : "bg-[#FFFFFF] text-black border border-[#C9C9C9]"
                  }`}>
                  {person.following ? "Unfollow" : "Follow"}
                </p>
              </div>
            </div>
            {people[people.length - 1] ? <hr /> : null}
          </div>
        );
      })}
      <div className="h-max flex items-center justify-center relative">
        <button className="button-small md:py-0.5 lg:py-2 text-12px lg:text-18px 2xl:text-20px mt-2 lg:mt-4 xl:mt-9 button-deep-sky-blue mx-auto justify-center items-center">
          View more{" "}
          <div className="ml-2 lg:pt-1">
            <ArrowIcon className="w-[20px] lg:w-[41px]" />
          </div>
        </button>
      </div>
    </div>
  );
}
