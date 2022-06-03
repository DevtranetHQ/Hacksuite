import { useState } from "react";
import FullNav from "../../components/newsfeed/index";
import ArrowIcon from "../../components/icons/Arrow";
import MessageForm from "../../components/MessageForm";
import {PeopleData} from "../../components/People/PeopleInfo";
import PersonCard from "../../components/People/PersonCard";
import LookingForSelectBoxes from "../../components/LookingForSelectBoxes";


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
      {showMessage ? (<MessageForm setShowMessage={setShowMessage}/>) : null}
      <section className="dark:bg-black pb-[60px]">
        <div className="bg-[#F8FBFF] dark:bg-[#2D2D2D] w-[100%] text-center flex flex-col items-center justify-center pt-[71px] pb-[83px] rounded-b-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <h2 className="text-[90px] text-deep-sky-blue font-bold">Who are you looking for?</h2>
          <LookingForSelectBoxes />
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
