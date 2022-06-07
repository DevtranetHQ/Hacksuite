import { useState } from "react";
import FullNav from "../../components/newsfeed/index";
import ArrowIcon from "../../components/icons/Arrow";
import MessageForm from "../../components/MessageForm";
import { PeopleData } from "../../components/people/PeopleInfo";
import PersonCard from "../../components/people/PersonCard";
import LookingForSelect from "../../components/people/LookingFor";
import PeoplePage from "../../components/people/PeoplePage";
import SearchContextProvider from "../../components/SearchContext";
import PeopleSearch from "../../components/people/PeopleSearch";

const People = ({ people }) => {
  const [showMessage, setShowMessage] = useState(false);


  return (
        <SearchContextProvider>
    <>
      <FullNav />
      {showMessage ? <MessageForm setShowMessage={setShowMessage} /> : null}
      <section className="dark:bg-black pb-[60px]">
        <div className="bg-[#F8FBFF] dark:bg-[#2D2D2D] w-[100%] text-center flex flex-col items-center justify-center pt-[71px] pb-[83px] rounded-b-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <h2 className="text-[90px] text-deep-sky-blue font-bold">Who are you looking for?</h2>
          <LookingForSelect />
        </div>
          <PeoplePage people={people} setShowMessage={setShowMessage}/>
          <PeopleSearch people={people}/>

      </section>
    </>
        </SearchContextProvider>
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
