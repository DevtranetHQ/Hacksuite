import { useState } from "react";
import FullNav from "../../components/newsfeed/index";
import MessageForm from "../../components/MessageForm";
import { PeopleData } from "../../components/people/PeopleInfo";
import LookingForSelect from "../../components/people/LookingFor";
import PeoplePage from "../../components/people/PeoplePage";
import PeopleSearch from "../../components/people/PeopleSearch";

const People = ({ people }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [searchPageIsShowing, setSearchPageIsShowing] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <FullNav setSearchPageIsShowing={setSearchPageIsShowing} setSearchValue={setSearchValue} />
      {showMessage ? <MessageForm setShowMessage={setShowMessage} /> : null}
      <section className="dark:bg-black pb-[60px]">
        <div className="bg-[#F8FBFF] dark:bg-[#2D2D2D] w-[100%] text-center flex flex-col items-center justify-center pt-[71px] pb-[83px] rounded-b-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <h2 className="text-[28px] xs:text-[36px] sm:text-[52px] md:text-[64px] lg:text-[80px] xl:text-[90px] mb-[20px] md:mb-[25px] lg:mb-[40px] xl:mb-[50px] text-deep-sky-blue font-bold ">Who are you looking for?</h2>
          <LookingForSelect />
        </div>
        {searchPageIsShowing && <PeopleSearch people={people} searchValue={searchValue} />}
        {!searchPageIsShowing && <PeoplePage people={people} setShowMessage={setShowMessage} />}
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
