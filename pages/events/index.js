import Link from "next/link";
import DarkModeToggle from "../../components/DarkModeToggle";
import EventCard from "../../components/event/EventCard";
import Logo from "../../components/Logo";
import eventService from "../../server/modules/events/event.service";
import { withAuth } from "./../../server/middlewares/auth.middleware";
import GithubIcon from "../../components/icons/Github";
import ArrowRightIcon from "../../components/icons/ArrowRight";
import registrationService from "../../server/modules/registration/registration.service";
import PhotoGalleryHeader from "../../components/project/Photo-galleryHeader";

export default function Events({ events, loggedIn }) {
  return (
    <div className="dark:bg-[#202020] dark:text-white">
      <PhotoGalleryHeader
        title="The Dynamics Events"
        navText={<>{loggedIn ? "Go back home" : "Join us"}</>}
        contentText={
          <>
            <p className="text-[16px] lg:text-[21px] xl:text-[26px] 2xl:text-[30px]">
              Don’t miss any workshop, hackathon, AMA, networking event, mentorship program, and
              more!
            </p>
            <p className="text-[16px] lg:text-[21px] xl:text-[26px] 2xl:text-[30px]">
              Events dates and times are in your local timezone.
            </p>
          </>
        }
        firstBtn="All events"
        secondBtn="Host with us"
        href="/events"
        navHref={`${loggedIn ? "/" : "/events"}`}>
        <nav className="border-b-2 flex gap-x-2 lg:gap-x-4 items-center justify-center mt-10 lg:mt-24 pb-5 lg:pb-[50px]  heading">
          <svg
            width="55"
            height="55"
            viewBox="0 0 61 70"
            fill="none"
            className="w-9 h-9 md:w-14 md:h-14"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M45.4113 35.2497L41.9221 31.5838L25.8588 48.4607L18.8804 41.1289L15.3912 44.7948L25.8588 55.7925L45.4113 35.2497ZM53.5417 7.37514H50.25V0.458385H43.6667V7.37514H17.3333V0.458385H10.75V7.37514H7.45833C3.80458 7.37514 0.907917 10.4877 0.907917 14.2919L0.875 62.7092C0.875 64.5437 1.5686 66.303 2.80321 67.6001C4.03783 68.8972 5.71232 69.626 7.45833 69.626H53.5417C57.1625 69.626 60.125 66.5134 60.125 62.7092V14.2919C60.125 10.4877 57.1625 7.37514 53.5417 7.37514ZM53.5417 62.7092H7.45833V24.667H53.5417V62.7092Z"
              fill="#03A9F4"
            />
          </svg>
          <span className="text-[28px] md:text-[36px] lg:text-[50px]">Upcoming Events</span>
        </nav>
      </PhotoGalleryHeader>
      <section>{events && events.map((event, key) => <EventCard key={key} {...event} />)}</section>
      <div className="w-full flex justify-center items-center mt-[70px] lg:mt-[167px] mb-[45px] lg:mb-[90px]">
        <button className="text-white text-[16px] lg:text-[48px] py-[13px] lg:py-[48px] px-[17px] lg:px-[44px] font-bold rounded-lg lg:rounded-[15px] bg-[#03a9f4] lg:button-big button-deep-sky-blue inline-flex items-center gap-x-3 lg:gap-x-[48px]">
          <span>View past events</span>
          <div className="lg:scale-[2] relative lg:top-1">
            <ArrowRightIcon />
          </div>
        </button>
      </div>
      <footer className="bg-[#F4F4F4] dark:bg-[#444444] py-[32px]">
        <p className="text-[16px] md:text-[24px] lg:text-[32px] px-[20px] lg:px-[40px] 2xl:px-[100px] text-center">
          All events are hosted and maintained by The Dynamics, the official network of young
          makers, <br className="hidden md:block"></br>developers, innovators, and founders using
          our{" "}
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

  const events = await eventService.getUpcomingEvents();

  if (user) {
    const eventsWithRegistration = await Promise.all(
      events.map(async event => {
        const isRegistered = await registrationService.checkRegistration(user.id, event.uniqueId);
        return { ...event, isRegistered };
      })
    );

    return { props: { events: eventsWithRegistration, loggedIn: true } };
  }

  // TODO: Change page based on whether user is administrator or not
  return { props: { events } };
}
