import Link from "next/link";
import DarkModeToggle from "../../components/DarkModeToggle";
import EventCard from "../../components/event/EventCard";
import Logo from "../../components/Logo";
import eventService from "../../server/services/event.service";
import { withAuth } from "./../../server/middlewares/auth.middleware";
import GithubIcon from "../../components/icons/Github";
import ArrowIcon from "../../components/icons/Arrow";


export default function Events({ events, loggedIn }) {
  return (
    <div className="dark:bg-[#202020] dark:text-white">
      <nav className="flex items-center justify-between pl-[10px] lg:pl-8 pr-[12px] lg:pr-12">
        <Logo className="w-[80px] md:w-[120px] py-5" />
        <div className="flex gap-x-[0px] md:gap-x-2 lg:gap-x-4 items-center">
          <DarkModeToggle
            className="mx-0 w-[25px] md:w-[44px] lg:scale-[1.24] lg:mr-[10px]"
            darkClassName="mx-0 w-[25px] md:w-[33px] lg:w-[40px] h-[25px] md:h-[48px] lg:h-[60px]"
          />
          <a href="https://github.com/TheDynamics" className="scale-75 lg:scale-[1.4] md:scale-[1.15]">
            <GithubIcon />
          </a>
          <Link href="/">
            <button className="px-[10px] py-[6px] md:py-[2px] bg-[#03a9f4] text-white rounded-[6px] text-[12px] md:text-[23px] lg:text-[28px] lg:py-[10px] button-deep-sky-blue inline-flex gap-x-1 md:gap-x-3 items-center mx-2 my-0 md:my-0">
              {loggedIn ? "Go back home" : "Join us"}
              <div className="scale-75 md:scale-100 lg:relative lg:top-[2px]">
                  <ArrowIcon />
              </div>
            </button>
          </Link>
        </div>
      </nav>
      <header className="bg-[#F8FBFF] container-gray-dark border-b-4 dark:border-gray-dark py-14 px-6 xs:p-14 rounded-b-2xl text-center">
        <h1 className="text-[30px] font-bold lg:title md:text-[65px] lg:text-[90px] text-deep-sky-blue">The Dynamics Events</h1>
        <h2 className="text-[16px] lg:lead mb-2 w-full mt-[16px] md:mt-[36px] md:mb-[28px] lg:text-[21px] xl:text-[26px] 2xl:text-[30px]">
          <p className="text-[16px] lg:text-[21px] xl:text-[26px] 2xl:text-[30px]">Don’t miss any workshop, hackathon, AMA, networking event, mentorship program, and more!</p>
          <p className="text-[16px] lg:text-[21px] xl:text-[26px] 2xl:text-[30px]">Events dates and times are in your local timezone.</p>
        </h2>
        <div className="inline-flex my-2 gap-x-4  lg:gap-x-[36px] mt-[20px] lg:mt-[30px]">
          <button className="text-white font-bold rounded-md bg-[#4CB050] py-[15px] text-[16px] px-[15px] lg:px-[70px] lg:py-[10px] lg:text-[30px]  inline-flex gap-x-2 transition-all hover:scale-[1.06] focus:outline-none">All events</button>
          <a className="text-white font-bold rounded-md bg-[#03A9F4] py-[15px] text-[16px] px-[15px] lg:px-[70px] lg:py-[10px] lg:text-[30px]  inline-flex gap-x-2 transition-all hover:scale-[1.06] focus:outline-none">
                Host with us
            </a>
        </div>
      </header>
      <nav className="border-b-2 flex gap-x-2 lg:gap-x-7 items-center justify-center mt-7 mb-3 heading">
        <svg
          width="42"
          height="42"
          viewBox="0 0 61 70"
          fill="none"
          className="lg:scale-[1.45]"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M45.4113 35.2497L41.9221 31.5838L25.8588 48.4607L18.8804 41.1289L15.3912 44.7948L25.8588 55.7925L45.4113 35.2497ZM53.5417 7.37514H50.25V0.458385H43.6667V7.37514H17.3333V0.458385H10.75V7.37514H7.45833C3.80458 7.37514 0.907917 10.4877 0.907917 14.2919L0.875 62.7092C0.875 64.5437 1.5686 66.303 2.80321 67.6001C4.03783 68.8972 5.71232 69.626 7.45833 69.626H53.5417C57.1625 69.626 60.125 66.5134 60.125 62.7092V14.2919C60.125 10.4877 57.1625 7.37514 53.5417 7.37514ZM53.5417 62.7092H7.45833V24.667H53.5417V62.7092Z"
            fill="#03A9F4"
          />
        </svg>
        <span className="sm:text-[36px] lg:text-[66px]">Upcoming Events</span>
      </nav>
      <section>{events && events.map((event, key) => <EventCard key={key} {...event} />)}</section>
      <section className="p-14 text-center">
        <button className="text-white text-[16px] lg:text-[48px] py-[13px] lg:py-[48px] px-[17px] lg:px-[44px] font-bold rounded-lg lg:rounded-[15px] bg-[#03a9f4] lg:button-big button-deep-sky-blue inline-flex items-center gap-x-3 lg:gap-x-[48px]">
          <span>View past events</span>
          <div className="lg:scale-[2] relative lg:top-1">
            <ArrowIcon />
          </div>
        </button>
      </section>
      <footer className="bg-[#F4F4F4] dark:bg-[#444444] py-[32px]">
        <p className="text-[16px] md:text-[24px] lg:text-[32px] px-[20px] lg:px-[40px] 2xl:px-[100px] text-center">
          All events are hosted and maintained by The Dynamics, the official network of young
          makers, <br className="hidden md:block"></br>developers, innovators, and founders using our{" "}
          <Link href="/">
            <a>Code of Conduct</a>
          </Link>
        </p>
      </footer>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const user = await withAuth(req => req.$user)(req, res);

  const events = await eventService.getAll();

  // TODO: Change page based on whether user is administrator or not
  return {
    props: {
      loggedIn: !!user,
      events
    }
  };
}
