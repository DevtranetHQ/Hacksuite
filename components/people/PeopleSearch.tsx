import { useEffect, useState } from "react";
import ArrowIcon from "../icons/Arrow";
import PeopleSearchPerson from "./PeopleSearchPerson";
import NotifEmpty from "../NotifEmpty";

const PeopleSearch = ({ people, searchValue }) => {
  const reducedPeopleObj = people.slice(0, 5);
  const [peopleObj, setPeopleObj] = useState(reducedPeopleObj);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filtered = people.filter(person =>
      person.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchValue]);

  const handleShowMore = () => {
    setPeopleObj(people);
  };

  return (
    <>
      <div>
        <p className="text-[24px] xs:text-[30px] sm:text-[36px] md:text-[40px] xl:text-[48px] font-semibold text-center mt-[40px] xs:mt-[50px] sm:mt-[80px] md:mt-[92px] mb-[15px] xs:mb-[20px] md:mb-[31px] dark:text-white">{`Search results for "${searchValue}"`}</p>
        {searchResults.length && (
          <>
            <p className="text-[20px] xs:text-[26px] sm:text-[36px] text-[#A5A5A5] font-normal text-center mb-[30px]">{`${
              searchResults.length
            } result${searchResults.length > 0 ? "s" : ""}`}</p>
            {searchResults.map(personResult => (
              <PeopleSearchPerson
                image={personResult.image}
                key={personResult.id}
                verified={personResult.verified}
                name={personResult.name}
                followed={personResult.followed}
                roles={personResult.roles}
                hasBottomBorder={searchResults.indexOf(personResult) + 1 == searchResults.length}
              />
            ))}
          </>
        )}
        {!searchResults.length && <NotifEmpty />}
        <div className="pt-[40px] xs:pt-[50px] sm:pt-[80px] md:pt-[111px]">
          <p className="text-center mb-[31px] dark:text-white text-[24px] xs:text-[30px] sm:text-[36px] md:text-[40px] xl:text-[48px] font-semibold">
            Featured people
          </p>
          {peopleObj.map(person => (
            <PeopleSearchPerson
              image={person.image}
              key={person.id}
              name={person.name}
              verified={person.verified}
              roles={person.roles}
              followed={person.followed}
              hasBottomBorder={peopleObj.indexOf(person) + 1 == peopleObj.length}
            />
          ))}
          <div className="w-full flex justify-center items-center mt-[70px] lg:mt-[80px] mb-[45px] lg:mb-[64px]">
            {peopleObj.length <= 6 && (
              <button
                onClick={handleShowMore}
                className="text-white text-[16px] lg:text-[48px] py-[13px] lg:py-[48px] px-[17px] lg:px-[44px] font-bold rounded-lg lg:rounded-[15px] bg-[#03a9f4] lg:button-big button-deep-sky-blue inline-flex items-center gap-x-3 lg:gap-x-[48px]">
                <span>View more</span>
                <div className="lg:scale-[2] relative lg:top-1">
                  <ArrowIcon />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default PeopleSearch;
