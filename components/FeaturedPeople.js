import React from "react";
import Avatar from "./Avatar";
import ArrowIcon from "./icons/Arrow";
import VerifiedIcon from "./icons/VerifiedIcon";

export default function FeaturedPeople({ ...props }) {
  const { people } = props;
  return (
    <div className="bg-[#F8FBFF] h-screen rounded-md dark:bg-[#2D2D2D] ">
      {people.slice(0, 5).map((person) => {
        return (
          <div key={person.id}>
            <div className="flex items-center justify-between px-3 py-2 lg:text-12px xl:text-16px" >
              <div className="flex gap-2 items-center">
                <Avatar image={person.image} className="relative h-10 w-10 object-cover lg:w-7 lg:h-7 xl:h-10 xl:w-10 md:h-8 md:w-8"/>
                <div className="flex flex-col justify-start">
                  <span className="text-left font-bold  flex items-center">
                    {person.username} {person.verified && <VerifiedIcon className=" ml-2 lg:h-3 lg:w-3 xl:h-4 xl:w-4" />}
                  </span>
                  <span className="-mt-1 lg:mt-0 ">{person.roles}</span>
                </div>
              </div>
              <p
                className={`px-2 py-1 rounded-md ${
                  person.following
                    ? "bg-deep-sky-blue text-white"
                    : "bg-[#FFFFFF] text-black border border-[#C9C9C9]"
                }`}>
                {person.following ? "Unfollow" : "Follow"}
              </p>
            </div>
            {people[people.length -1] ? <hr/> : null}
            
          </div>
        
        );
      })}
      <button className="button-deep-sky-blue button-small mx-auto justify-center items-center mt-5 xl:mt-9">
        View more{" "}
        <div className="ml-2 pt-1 md:text-10px">
          <ArrowIcon />
        </div>
      </button>
    </div>
  );
}
