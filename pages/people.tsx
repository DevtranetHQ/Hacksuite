import { useState } from "react";
import FullNav from "../components/newsfeed/index";
import ArrowIcon from "../components/icons/Arrow";
import { availableFor} from "../enums/availableFor";
import { describes} from "../enums";
import Select, {components} from 'react-select';
import ReCAPTCHA from "react-google-recaptcha";



const availableForOpts = availableFor.map(level => ({ value: level, label: level }));
const describeOpts = describes.map(describe => ({ value: describe, label: describe }));

const searchingForStyles = {
  control: styles => ({ 
    ...styles, 
    backgroundColor: 'white', 
    paddingTop: 3.5, 
    width: '256px', 
    paddingBottom: 3.5, 
    border: '3px solid #03A9F4', 
    borderRadius: 0, 
    borderTopLeftRadius: 5, 
    borderBottomLeftRadius: 5, 
    marginTop: 2, 
    "&:hover": {
      borderColor: "#03A9F4"
    }
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles
    };
  },
};

const availableForStyles = {
  control: styles => ({ 
    ...styles, backgroundColor: 'white', 
    paddingTop: 3.5, 
    width: '256px', 
    paddingBottom: 3.5, 
    border: '3px solid #03A9F4', 
    borderRadius: 0, 
    marginTop: 2, 
    "&:hover": {
      borderColor: "#03A9F4"
    }
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles
    };
  },
};

const SearchPeopleIcon = ({ className }) => (
  <svg
    width="35"
    height="33"
    viewBox="0 0 35 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}>
    <path
      d="M22.832 13.9998C26.9987 13.9998 30.332 17.3332 30.332 21.4998C30.332 22.9665 29.9154 24.3498 29.182 25.4998L34.3154 30.6665L31.9987 32.9832L26.7987 27.8665C25.6487 28.5832 24.282 28.9998 22.832 28.9998C18.6654 28.9998 15.332 25.6665 15.332 21.4998C15.332 17.3332 18.6654 13.9998 22.832 13.9998ZM22.832 17.3332C21.727 17.3332 20.6672 17.7722 19.8858 18.5536C19.1044 19.335 18.6654 20.3948 18.6654 21.4998C18.6654 22.6049 19.1044 23.6647 19.8858 24.4461C20.6672 25.2275 21.727 25.6665 22.832 25.6665C23.9371 25.6665 24.9969 25.2275 25.7783 24.4461C26.5597 23.6647 26.9987 22.6049 26.9987 21.4998C26.9987 20.3948 26.5597 19.335 25.7783 18.5536C24.9969 17.7722 23.9371 17.3332 22.832 17.3332ZM13.6654 0.666504C15.4335 0.666504 17.1292 1.36888 18.3794 2.61913C19.6297 3.86937 20.332 5.56506 20.332 7.33317C20.332 8.84984 19.8154 10.2498 18.9654 11.3832C17.532 11.9165 16.2487 12.7665 15.182 13.8332L13.6654 13.9998C11.8973 13.9998 10.2016 13.2975 8.95132 12.0472C7.70108 10.797 6.9987 9.10128 6.9987 7.33317C6.9987 5.56506 7.70108 3.86937 8.95132 2.61913C10.2016 1.36888 11.8973 0.666504 13.6654 0.666504ZM0.332031 27.3332V23.9998C0.332031 20.4665 5.8487 17.5665 12.832 17.3332C12.2987 18.6332 11.9987 20.0332 11.9987 21.4998C11.9987 23.6498 12.632 25.6665 13.6654 27.3332H0.332031Z"
      fill="white"
    />
  </svg>
);

const VerifiedIcon = ({ className }) => (
  <svg
    width="28"
    height="27"
    viewBox="0 0 28 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}>
    <path
      d="M27.5 13.075L24.45 9.6L24.875 5L20.3625 3.975L18 0L13.75 1.825L9.5 0L7.1375 3.975L2.625 4.9875L3.05 9.5875L0 13.075L3.05 16.55L2.625 21.1625L7.1375 22.1875L9.5 26.1625L13.75 24.325L18 26.15L20.3625 22.175L24.875 21.15L24.45 16.55L27.5 13.075ZM11.25 19.325L6.25 14.325L8.0125 12.5625L11.25 15.7875L19.4875 7.55L21.25 9.325L11.25 19.325Z"
      fill="#03A9F4"
    />
  </svg>
);

const ArrowRight = ({ className }) => (
  <svg
    width="92"
    height="37"
    viewBox="0 0 92 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}>
    <path
      d="M64.562 36.5904V25.1299H-2.85547V12.0322H64.562V0.571777L91.7882 18.5811L64.562 36.5904Z"
      fill="white"
    />
  </svg>
);

const People = ({ people }) => {
  const verifiedPeopleObj = people.filter(person => person.verified === true);

  const reducedPeopleObj = verifiedPeopleObj.slice(0, 6);
  const [peopleObj, setPeopleObj] = useState(reducedPeopleObj);

  const unVerifiedPeopleObj = people.filter(person => person.verified !== true);
  const [showMessage, setShowMessage] = useState(false);


  const handleShowMore = () => {
    setPeopleObj([...verifiedPeopleObj, ...unVerifiedPeopleObj]);
  };
  console.log(availableForOpts)
  return (
    <>
      <FullNav />
      <section className="dark:bg-black pb-6">
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
            {showMessage ? (
            <div className="flex justify-center items-center  fixed inset-0 z-50 outline-none focus:outline-none rounded-lg w-full mx-auto slide-bottom backdrop-blur-sm">
              <div className="relative  my-6 mx-auto p-5 w-6/12 bg-white dark:bg-dark rounded-lg">
                <form className="form bg-white dark:bg-dark">
                  <div>
                    <label className="form-label font-normal">Enter Subject</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div>
                    <textarea
                      style={{ height: "150px", resize: "none" }}
                      className="form-input"
                      placeholder="Write something..."
                    />
                  </div>
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      className="inline-block my-3"
                      sitekey="6LexReUeAAAAAF5a0KmF1tz26MWEFUwnhQ7crZAL"
                      onChange={i => console.log(i)}
                    />
                  </div>

                  <div className="flex justify-center gap-x-5 mt-5">
                    <button
                      className="button-big button-deep-sky-blue px-20 w-[150px] text-22px mt-3 "
                      onClick={() => setShowMessage(false)}>
                      Close
                    </button>
                    <button
                      className="button-big button-orange-peel px-20 w-[150px] text-22px mt-3"
                      onClick={() => {}}>
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : null}

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
            {peopleObj.map(people => {
              return (
                <div
                  key={people.id}
                  className="relative flex flex-col items-center justify-center bg-[#F8FBFF] dark:bg-[#2D2D2D] px-4 py-8 pb-[35px] rounded-lg w-full max-w-[300px]">
                  <img src={people.image} className="w-[82px] h-[82px]" />

                  <div className="flex gap-x-2 items-center mt-1">
                    <p className="font-semibold dark:text-white text-[22px]   ">{people.name}</p>
                    {people.verified ? <VerifiedIcon className="w-[1.2rem] h-[1.2rem]" /> : null}
                  </div>

                  <p className="text-[1rem] mb-3 dark:text-white">{people.roles}</p>

                  <button onClick={() => setShowMessage(true)} className="bg-white text-[18px] hover:scale-[1.08] transition-all dark:bg-black absolute -bottom-[20px] text-deep-sky-blue border border-deep-sky-blue px-4 py-[.4rem] rounded-lg place-self-center">
                    Reach out
                  </button>
                </div>
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
  const people = [
    {
      id: 1,
      image: "/assets/TEST/people.png",
      name: "Belle See",
      verified: true,
      roles: "Founder, CommandTech"
    },
    {
      id: 2,
      image: "/assets/TEST/people.png",
      name: "Agnes M. Reilly",
      verified: false,
      roles: "Founder, CommandTech"
    },
    {
      id: 3,
      image: "/assets/TEST/people.png",
      name: "Timothy D. Jones",
      verified: false,
      roles: "Founder, CommandTech"
    },
    {
      id: 4,
      image: "/assets/TEST/people.png",
      name: "Megan A. Lear",
      verified: false,
      roles: "Founder, CommandTech"
    },
    {
      id: 5,
      image: "/assets/TEST/people.png",
      name: "Lillian T. Bell",
      verified: true,
      roles: "Founder, CommandTech"
    },
    {
      id: 6,
      image: "/assets/TEST/people.png",
      name: "Constance A. Klemm",
      verified: true,
      roles: "Founder, CommandTech"
    },
    {
      id: 7,
      image: "/assets/TEST/people.png",
      name: "Karen J. Waugh",
      verified: true,
      roles: "Founder, CommandTech"
    },
    {
      id: 8,
      image: "/assets/TEST/people.png",
      name: "Lucas A. Garrison",
      verified: true,
      roles: "Founder, CommandTech"
    },
    {
      id: 9,
      image: "/assets/TEST/people.png",
      name: "Harry B. Carpenter",
      verified: true,
      roles: "Founder, CommandTech"
    },
    {
      id: 10,
      image: "/assets/TEST/people.png",
      name: "Harmony J. Ware",
      verified: false,
      roles: "Founder, CommandTech"
    },
    {
      id: 11,
      image: "/assets/TEST/people.png",
      name: "Ruth D. Geter",
      verified: false,
      roles: "Founder, CommandTech"
    }
  ];

  return {
    props: {
      people
    }
  };
};
