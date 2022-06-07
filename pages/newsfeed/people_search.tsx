import { useState } from "react";
import FullNav from "../../components/newsfeed/index";
import ArrowIcon from "../../components/icons/Arrow";
import MessageForm from "../../components/MessageForm";
import { PeopleData } from "../../components/people/PeopleInfo";
import PersonCard from "../../components/people/PersonCard";
import LookingForSelect from "../../components/people/LookingFor";
import PeopleSearchPerson from "../../components/people/PeopleSearchPerson";
import NotifEmpty from "../../components/NotifEmpty";

const PeopleSearch : React.FC = () => {
    const reducedPeopleObj = PeopleData.slice(0, 5);
    const [peopleObj, setPeopleObj] = useState(reducedPeopleObj);

    const [searchResults, setSearchResults] = useState([
        {
            id: 1,
            image: "/assets/TEST/people.png",
            name: "Belle See",
            verified: true,
            roles: "Founder, CommandTech", 
            followed: false
          },
        {
            id: 1,
            image: "/assets/TEST/people.png",
            name: "Belle",
            verified: true,
            roles: "Founder, CommandTech", 
            followed: false
          },
    ])
  
    const handleShowMore = () => {
        setPeopleObj([...peopleObj, ...PeopleData.slice(5)]);
      };

    return (
        <>
            <FullNav />
            <section className="dark:bg-black pb-[60px]">
                <div className="bg-[#F8FBFF] dark:bg-[#2D2D2D] w-[100%] text-center flex flex-col items-center justify-center pt-[71px] pb-[83px] rounded-b-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <h2 className="text-[90px] text-deep-sky-blue font-bold">Who are you looking for?</h2>
                <LookingForSelect />
                </div>
                <div>
                    <p className="text-[48px] font-semibold text-center mt-[92px] mb-[31px] dark:text-white">Search result for "Zach Latta"</p>
                    {
                        searchResults.length && 
                        <>
                            <p className="text-[36px] text-[#A5A5A5] font-normal text-center mb-[30px]">{`${searchResults.length} result${searchResults.length > 0 ? 's' : ''}`}</p>
                            {   searchResults.map(personResult => (
                                <PeopleSearchPerson 
                                image={personResult.image}
                                key={personResult.id}
                                verified={personResult.verified} 
                                name={personResult.name} 
                                followed={personResult.followed} 
                                roles={personResult.roles} 
                                hasBottomBorder={searchResults.indexOf(personResult) + 1 == searchResults.length}
                                />
                            ))
                            }
                        </>
                    }
                    {
                        !searchResults.length &&
                            <NotifEmpty />
                    }
                    <div className="pt-[111px]">
                        <p className="text-[48px] font-semibold text-center mb-[40px] dark:text-white">Featured people</p>
                        {
                            peopleObj.map(person => (
                                <PeopleSearchPerson 
                                image={person.image}
                                key={person.id} 
                                name={person.name} 
                                verified={person.verified} 
                                roles={person.roles} 
                                followed={person.followed} 
                                hasBottomBorder={PeopleData.indexOf(person) + 1 == PeopleData.length}
                                />
                            ))
                        }
                        <div className="w-full flex justify-center items-center mt-[70px] lg:mt-[80px] mb-[45px] lg:mb-[64px]">
                            {peopleObj.length <= 6 &&
                                <button
                                onClick={handleShowMore}
                                className="text-white text-[16px] lg:text-[48px] py-[13px] lg:py-[48px] px-[17px] lg:px-[44px] font-bold rounded-lg lg:rounded-[15px] bg-[#03a9f4] lg:button-big button-deep-sky-blue inline-flex items-center gap-x-3 lg:gap-x-[48px]">
                                <span>View more</span>
                                <div className="lg:scale-[2] relative lg:top-1">
                                <ArrowIcon />
                                </div>
                            </button>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default PeopleSearch;