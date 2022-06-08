import { useState } from "react";
import VerifiedIcon from "../icons/VerifiedIcon";

interface PeopleSearchPersonProps {
  followed?: boolean;
  hasBottomBorder?: boolean;
  name: string;
  roles: string;
  verified: boolean;
  image: string;
}

const PeopleSearchPerson: React.FC<PeopleSearchPersonProps> = ({
  followed,
  hasBottomBorder,
  name,
  roles,
  verified,
  image
}) => {
  const [isFollowing, setIsFollowing] = useState(followed ? followed : false);
  return (
    <div
      style={{ borderBottom: hasBottomBorder ? "1px solid #C9C9C9" : "0" }}
      className="border-t border-[#C9C9C9] py-[18px] xs:py-[28px]">
      <div className=" max-w-[370px] xs:max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[980px] mx-auto pl-[10px] pr-[35px] xs:pl-[15px] xs:pr-[32px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-[18px] items-center">
            <figure className="w-[50px] h-[50px] xs:w-[60px] xs:h-[60px] sm:w-[80px] sm:h-[80px]">
              <img className="w-full h-full" src={image} />
            </figure>
            <div className="flex flex-col">
              <div className="flex gap-x-2 items-center">
                <p className="text-[16px] xs:text-[24px] sm:text-[30px] lg:text-[36px] dark:text-white sm:leading-[38px] lg:leading-[40px] font-semibold">{name}</p>
                {verified ? <VerifiedIcon className="w-[18px] h-[18px] sm:w-[27px] sm:h-[27px]" /> : null}
              </div>
              <p className="text-[#2D2D2D] dark:text-[#A5A5A5] text-[13px] xs:text-[16px] sm:text-[20px]">{roles}</p>
            </div>
          </div>
          {!isFollowing && (
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className="dark:text-white h-[40px] sm:h-[52px] px-[16px] sm:px-[30px] text-[16px] xs:text-[18px] sm:text-[24px] border border-[#C9C9C9] rounded-[10px]">
              Follow
            </button>
          )}
          {isFollowing && (
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className="relative left-[16px] xs:left-[19px] sm:left-[24px] h-[40px] sm:h-[52px] bg-[#03A9F4] text-white px-[16px] sm:px-[30px] text-[16px] xs:text-[18px] sm:text-[24px] border-[#C9C9C9] rounded-[10px]">
              Unfollow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default PeopleSearchPerson;
