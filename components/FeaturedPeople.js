import React from "react";
import Avatar from "./Avatar";
import ArrowIcon from "./icons/Arrow";
import VerifiedIcon from "./icons/VerifiedIcon";

export default function FeaturedPeople({ ...props }) {
  const { people } = props;
  return (
    <div className="bg-[#F8FBFF] h-screen rounded-md dark:bg-[#2D2D2D] ">
      {people.slice(0, 5).map(person => {
        return (
          <div key={person.id}>
            <div className="flex items-center px-3 py-2 lg:text-12px xl:text-16px 2xl:text-20px">
              <div>
                <Avatar
                  image={person.image}
                  className="relative w-[40px] h-[40px] lg:w-[30px] lg:h-[30px] xl:w-[50px] xl:h-[50px] 2xl:w-[70px] 2xl:h-[70px] mr-2"
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
        <button className="button-deep-sky-blue button-small mx-auto justify-center items-center mt-5 lg:mt-4 xl:mt-9 md:mt-10 ">
          View more{" "}
          <div className="ml-2 pt-1 md:text-10px">
            <ArrowIcon />
          </div>
        </button>
      </div>
    </div>
  );
}
