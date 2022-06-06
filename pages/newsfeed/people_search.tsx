import { useState } from "react";
import FullNav from "../../components/newsfeed/index";
import ArrowIcon from "../../components/icons/Arrow";
import MessageForm from "../../components/MessageForm";
import { PeopleData } from "../../components/people/PeopleInfo";
import PersonCard from "../../components/people/PersonCard";
import LookingForSelect from "../../components/people/LookingFor";

const PeopleSearch : React.FC = () => {
    return (
        <>
            <FullNav />
            <section className="dark:bg-black pb-[60px]">
                <div className="bg-[#F8FBFF] dark:bg-[#2D2D2D] w-[100%] text-center flex flex-col items-center justify-center pt-[71px] pb-[83px] rounded-b-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <h2 className="text-[90px] text-deep-sky-blue font-bold">Who are you looking for?</h2>
                <LookingForSelect />
                </div>
                <div>
                    <p className="text-[48px] font-semibold text-center mt-[92px] mb-[31px]">Search result for "Zach Latta"</p>
                </div>
            </section>
        </>
    );
}
export default PeopleSearch;