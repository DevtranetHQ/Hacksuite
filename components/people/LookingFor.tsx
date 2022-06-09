import Select from "react-select";
import SearchPeopleIcon from "../icons/SearchPeopleIcon";
import Link from 'next/link';
import { searchingForStyles, availableForStyles } from "./SelectStyles";
import { availableFor } from "../../enums/availableFor";
import { describes } from "../../enums";
import { useState } from 'react';

const availableForOpts = availableFor.map(level => ({ value: level, label: level }));
const describeOpts = describes.map(describe => ({ value: describe, label: describe }));

interface LookingForSelectProps {
  setCurrentPage?: any;
  setSearchValue?: any;
}
const LookingForSelect: React.FC<LookingForSelectProps> = ({setCurrentPage, setSearchValue}) => {
  const [searchingFor, setSearchingFor] = useState<string>("");
  const [availableFor, setAvailableFor] = useState<string>("");
  return (
    <div className="flex justify-center items-end w-full ml-[1%] text-16px lg:text-18px xl:text-22px 2xl:text-24px">
      <div className="basis-[42%] md:basis-[28%] lg:basis-[23%] 2xl:basis-[18%]">
        <p className=" pl-4 mb-3 font-semibold dark:text-white">Searching for</p>
        <div className="flex">
          <Select
            className="basis-full "
            options={describeOpts}
            styles={searchingForStyles}
            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            placeholder="Developers, Angel Investors"
            onChange={({value}) => setSearchingFor(value)}
          />
          <div className="bg-[#FF9700] w-2 xs:w-3"></div>
        </div>
      </div>

      <div className="basis-[54%] md:basis-[34%] lg:basis-[28%] 2xl:basis-[22%]">
        <p className=" pl-4 mb-3 font-semibold dark:text-white">Available for</p>
        <div className="flex">
          <Select
            className="basis-full "
            options={availableForOpts}
            styles={availableForStyles}
            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            placeholder="Full-time Job, Investing"
            onChange={({value}) => setAvailableFor(value)}
          />
          <Link href="#">
            <div onClick={setCurrentPage && setSearchValue ? () => {
              setCurrentPage("lookingFor_search");
              setSearchValue({availableFor, occupation: searchingFor});
            } : () => null} className="cursor-pointer flex items-center px-2 xs:px-4 xl:px-6 bg-[#03A9F4] rounded-br-[6px] xs:rounded-br-[8px] xl:rounded-br-[10px] rounded-tr-[6px] xs:rounded-tr-[8px] xl:rounded-tr-[10px]">
              <SearchPeopleIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LookingForSelect;
