import Select from "react-select";
import Link from "next/link";
import MessageForm from "../MessageForm";
import SearchPeopleIcon from "../icons/SearchPeopleIcon";
import { searchingForStyles, availableForStyles } from "./SelectStyles";
import { availableFor } from "../../enums/availableFor";
import { describes } from "../../enums";
import { Dispatch, SetStateAction } from "react";

const availableForOpts = availableFor.map(level => ({ value: level, label: level }));
const describeOpts = describes.map(describe => ({ value: describe, label: describe }));

const LookingForSelect: React.FC = () => {
  return (
    <div className="flex justify-center items-end w-full ml-[1%] text-16px lg:text-18px xl:text-22px 2xl:text-24px">
      <div className="basis-[42%] md:basis-[28%] lg:basis-[23%] 2xl:basis-[18%]">
        <p className=" pl-4 mb-3 font-semibold">Searching for</p>
        <div className="flex">
          <Select
            className="basis-full "
            options={describeOpts}
            styles={searchingForStyles}
            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            placeholder="Developers, Angel Investors"
          />
          <div className="bg-[#FF9700] w-2 xs:w-3"></div>
        </div>
      </div>

      <div className="basis-[54%] md:basis-[34%] lg:basis-[28%] 2xl:basis-[22%]">
        <p className=" pl-4 mb-3 font-semibold">Available for</p>
        <div className="flex">
          <Select
            className="basis-full "
            options={availableForOpts}
            styles={availableForStyles}
            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            placeholder="Full-time Job, Investing"
          />
          <Link href="">
            <div className="flex items-center px-2 xs:px-4 xl:px-6 bg-[#03A9F4] rounded-br-[6px] xs:rounded-br-[8px] xl:rounded-br-[10px] rounded-tr-[6px] xs:rounded-tr-[8px] xl:rounded-tr-[10px]">
              <svg
                className=""
                width="35"
                height="33"
                viewBox="0 0 35 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.832 14.0001C26.9987 14.0001 30.332 17.3334 30.332 21.5001C30.332 22.9667 29.9154 24.3501 29.182 25.5001L34.3154 30.6667L31.9987 32.9834L26.7987 27.8667C25.6487 28.5834 24.282 29.0001 22.832 29.0001C18.6654 29.0001 15.332 25.6667 15.332 21.5001C15.332 17.3334 18.6654 14.0001 22.832 14.0001ZM22.832 17.3334C21.727 17.3334 20.6672 17.7724 19.8858 18.5538C19.1044 19.3352 18.6654 20.395 18.6654 21.5001C18.6654 22.6051 19.1044 23.665 19.8858 24.4464C20.6672 25.2278 21.727 25.6667 22.832 25.6667C23.9371 25.6667 24.9969 25.2278 25.7783 24.4464C26.5597 23.665 26.9987 22.6051 26.9987 21.5001C26.9987 20.395 26.5597 19.3352 25.7783 18.5538C24.9969 17.7724 23.9371 17.3334 22.832 17.3334ZM13.6654 0.666748C15.4335 0.666748 17.1292 1.36913 18.3794 2.61937C19.6297 3.86961 20.332 5.5653 20.332 7.33341C20.332 8.85008 19.8154 10.2501 18.9654 11.3834C17.532 11.9167 16.2487 12.7667 15.182 13.8334L13.6654 14.0001C11.8973 14.0001 10.2016 13.2977 8.95132 12.0475C7.70108 10.7972 6.9987 9.10152 6.9987 7.33341C6.9987 5.5653 7.70108 3.86961 8.95132 2.61937C10.2016 1.36913 11.8973 0.666748 13.6654 0.666748V0.666748ZM0.332031 27.3334V24.0001C0.332031 20.4667 5.8487 17.5667 12.832 17.3334C12.2987 18.6334 11.9987 20.0334 11.9987 21.5001C11.9987 23.6501 12.632 25.6667 13.6654 27.3334H0.332031Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LookingForSelect;
