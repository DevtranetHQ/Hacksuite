import Select from 'react-select';
import MessageForm from "../components/MessageForm";
import SearchPeopleIcon from "../components/icons/SearchPeopleIcon";
import {searchingForStyles, availableForStyles} from '../pages/people/SelectStyles';
import { availableFor} from "../enums/availableFor";
import { describes} from "../enums";
import { Dispatch, SetStateAction } from 'react';


const availableForOpts = availableFor.map(level => ({ value: level, label: level }));
const describeOpts = describes.map(describe => ({ value: describe, label: describe }));


const LookingForSelectBoxes : React.FC = () => {
  return (
    <div className="flex mt-10">
    <div className="flex flex-col items-start gap-y-[.2rem] w-[16rem]">
      <label htmlFor="search" className="ml-3 text-[1.3rem] dark:text-white">
        Searching for{" "}
      </label>
      <Select 
        options={describeOpts} 
        styles={searchingForStyles}
        components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
        placeholder="Developers, Angel Investors"
        />
    </div>
    <span className="w-[.7rem] bg-orange-peel h-[49.4px] self-end"></span>

    <div className="flex flex-col items-start gap-y-[.2rem] w-[16rem]">
      <label htmlFor="available" className="ml-3 text-[1.3rem] dark:text-white">
        Available for
      </label>
      <Select 
        options={availableForOpts} 
        styles={availableForStyles}
        components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
        placeholder="Full-time Job, Investing"
        />
    </div>

    <button className="bg-deep-sky-blue h-[49.47px] self-end px-3 rounded-r">
      <SearchPeopleIcon className="w-[1.5rem] h-[1.5rem]" />
    </button>
  </div>
  );
}
export default LookingForSelectBoxes;