import { Dispatch, SetStateAction } from "react";
import VerifiedIcon from "../icons/VerifiedIcon";

interface PersonCardProps {
  setShowMessage: Dispatch<SetStateAction<boolean>>;
  id: number;
  image: string;
  name: string;
  verified: boolean;
  roles: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  id,
  image,
  name,
  verified,
  roles,
  setShowMessage
}) => {
  return (
    <div
      key={id}
      className="relative flex flex-col items-center justify-center bg-[#F8FBFF] dark:bg-[#2D2D2D] px-1 py-8 pb-[35px] rounded-lg w-full max-w-[250px] xs:max-w-[300px]">
      <img src={image} className="w-[60px] h-[60px] xs:w-[82px] xs:h-[82px]" />

      <div className="flex gap-x-2 items-center mt-1">
        <p className="font-semibold dark:text-white text-[20px] xs:text-[22px]   ">{name}</p>
        {verified ? <VerifiedIcon className="w-[1.2rem] h-[1.2rem]" /> : null}
      </div>

      <p className="text-[15px] xxs:text-[1rem] mb-3 dark:text-white">{roles}</p>

      <button
        onClick={() => setShowMessage(true)}
        className="bg-white text-[16px] xs:text-[18px] hover:scale-[1.08] transition-all dark:bg-black absolute -bottom-[20px] text-deep-sky-blue border border-deep-sky-blue px-4 py-[.4rem] rounded-lg place-self-center">
        Reach out
      </button>
    </div>
  );
};
export default PersonCard;
