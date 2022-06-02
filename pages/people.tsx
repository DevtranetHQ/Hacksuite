import { useState } from "react";
import FullNav from "../components/newsfeed/index";
import ArrowIcon from "../components/icons/Arrow";
import { availableFor} from "../enums/availableFor";
import { describes} from "../enums";
import Select from 'react-select';
import MessageForm from "../components/MessageForm";
import {PeopleData} from "../components/People/PeopleInfo";
import {searchingForStyles, availableForStyles} from '../styles/SelectStyles';
import PersonCard from "../components/People/PersonCard";
import SearchPeopleIcon from "../components/icons/SearchPeopleIcon";



const availableForOpts = availableFor.map(level => ({ value: level, label: level }));
const describeOpts = describes.map(describe => ({ value: describe, label: describe }));


const People = ({ people }) => {
  const verifiedPeopleObj = people.filter(person => person.verified === true);

  const reducedPeopleObj = verifiedPeopleObj.slice(0, 6);
  const [peopleObj, setPeopleObj] = useState(reducedPeopleObj);

  const unVerifiedPeopleObj = people.filter(person => person.verified !== true);
  const [showMessage, setShowMessage] = useState(false);


  const handleShowMore = () => {
    setPeopleObj([...verifiedPeopleObj, ...unVerifiedPeopleObj]);
  };
  return (
    <>
      <FullNav />
      <section className="dark:bg-black pb-[60px]">
        <div className="bg-[#F8FBFF] dark:bg-[#2D2D2D] w-[100%] text-center flex flex-col items-center justify-center pt-[71px] pb-[83px] rounded-b-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <h2 className="text-[90px] text-deep-sky-blue font-bold">Who are you looking for?</h2>

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
            {showMessage ? (<MessageForm setShowMessage={setShowMessage}/>) : null}

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
        </div>

        <div className="mt-20 w-[70%] mx-auto grid mb-10">
          <h1 className="text-center dark:text-white lg:text-[40px] xl:text-[48px] font-semibold">Featured people</h1>

          <div className="grid grid-cols-3 justify-items-center mt-12 gap-y-[111px] lg:gap-x-[60px] xl:gap-x-[80px]">
            {peopleObj.map(person => {
              return (
                <PersonCard key={person.id} id={person.id} image={person.image} name={person.name} verified={person.verified} roles={person.roles} setShowMessage={setShowMessage}/>
              );
            })}
          </div>
          {peopleObj.length <= 6 ? (
                  <div className="w-full flex justify-center items-center mt-[70px] lg:mt-[160px] mb-[45px] lg:mb-[90px]">
                  <button onClick={handleShowMore} className="text-white text-[16px] lg:text-[48px] py-[13px] lg:py-[48px] px-[17px] lg:px-[44px] font-bold rounded-lg lg:rounded-[15px] bg-[#03a9f4] lg:button-big button-deep-sky-blue inline-flex items-center gap-x-3 lg:gap-x-[48px]">
                    <span>View more</span>
                    <div className="lg:scale-[2] relative lg:top-1">
                      <ArrowIcon />
                    </div>
                  </button>
                </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default People;

export const getServerSideProps = async () => {
  const people = PeopleData;
  return {
    props: {
      people
    }
  };
};
