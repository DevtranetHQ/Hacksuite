import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { useState } from "react";
import Avatar from "../../components/Avatar";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import showdownConverter from "../../components/showdownConverter";
import ArrowRightIcon from "../../components/icons/ArrowRight";
import CalendarIcon from "../../components/icons/Calendar";
import GithubIcon from "../../components/icons/Github";
import avatarImage from "../../public/assets/avatar.webp";
import { withAuth } from "../../server/middlewares/auth.middleware";
import eventService from "../../server/modules/events/event.service";
import DisplayDate from "../../components/DisplayDate";
import EventTime from "../../components/event/EventTime";
import Image from "next/image";
import registrationService from "../../server/modules/registration/registration.service";
import { useRegistration } from "../../hooks/useRegistration";
import { useRouter } from "next/router";
import { AddToCalendar } from "../../components/event/AddToCalendar";
import { JoinHere } from "../../components/event/JoinHere";

export default function Event({ loggedIn, event, isRegistered }) {
  const router = useRouter();
  const { register } = useRegistration();

  const eventDescription = () => {
    return { __html: showdownConverter.makeHtml(event.description) };
  };

  function registerWithAccount(e) {
    e.preventDefault();
    if (loggedIn) {
      register.execute(event.uniqueId);
    } else {
      router.push("/login");
    }
  }

  function registerWithEmail(e) {
    e.preventDefault();

    if (window.location.hostname !== "localhost" && grecaptcha.getResponse() === "") {
      alert("Please click <I'm not a robot> before sending the job");
      return false;
    }

    const name = e.target.name.value;
    const email = e.target.email.value;

    if (email && name) {
      register.execute(event.uniqueId, name, email);
    }
  }

  return (
    <div className="dark:bg-[#202020] dark:text-white min-h-screen">
      <nav className="flex items-center justify-between pl-[10px] lg:pl-8 pr-[12px] lg:pr-12">
        <Logo className="w-[50px] md:w-[120px] py-5" />
        <div className="flex gap-x-[0px] md:gap-x-3 lg:gap-x-5 items-center">
          <DarkModeToggle
            className="!mx-0 w-[27px] md:w-[44px] lg:scale-[1.24] lg:mr-[10px]"
            darkClassName="!mx-0 w-[17px] md:w-[33px] lg:w-[40px] h-[25px] md:h-[48px] lg:h-[60px]"
          />
          <a
            href="https://github.com/TheDynamics"
            className="scale-[.6] lg:scale-[1.4] md:scale-[1.15]">
            <GithubIcon />
          </a>
          <Link href={`${loggedIn ? "/" : "/events"}`}>
            <button className="md:px-[10px] px-2 py-[6px] lg:py-[2px] bg-[#03a9f4] text-white rounded-[6px] text-[11px] md:text-[23px] lg:text-[28px] lg:button-big button-deep-sky-blue inline-flex md:gap-x-3 items-center md:mx-2 md:mr-1 my-0 md:my-0 focus:outline-none">
              {loggedIn ? "Go back home" : "All Events"}
              <div className="scale-50 md:scale-100 lg:relative lg:top-[2px] justify-self-start">
                <ArrowRightIcon />
              </div>
            </button>
          </Link>
        </div>
      </nav>
      <div className="pb-14">
        <div className="pt-14 relative">
          <Image
            layout="fill"
            objectFit="cover"
            src={event.image}
            alt={`image for event ${event.name}`}
          />
          <style jsx>{`
            header {
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
          `}</style>
          <header className="absolute md:-bottom-14 -bottom-24 left-0 bg-[#f8fbff] container-gray-dark p-5 relative rounded-r lg:w-1/2 w-11/12 ">
            <h1 className="md:title font-bold text-28px text-deep-sky-blue mb-3">{event.name}</h1>
            <div className="flex md:gap-2 gap-2 items-center">
              <Avatar
                className="relative md:w-[50px] md:h-[50px] h-[40px] w-[45px]"
                border="md:!border-[3px] !border-[4px]"
                image={event.creator.image || avatarImage}
              />
              <p className="md:caption text-16px font-bold text-[#a5a5a5]">
                Posted by {event.creator.firstName} {event.creator.lastName} |{" "}
                <DisplayDate date={new Date(event.posted)} show="date" />
              </p>
            </div>
          </header>
        </div>
      </div>
      <section className="flex flex-col gap-y-3 items-center md:px-24 px-10 py-10 mt-5">
        <h1 className="flex md:gap-x-2 gap-x-5 items-center md:headline font-semibold text-20px">
          <CalendarIcon fill="#FF9700" width={100} height={100} />
          <span className="md:pt-3">
            <EventTime start={event.start} end={event.end} />
          </span>
        </h1>
        <div
          className="prose prose-lg dark:prose-invert mt-5 "
          dangerouslySetInnerHTML={eventDescription()}
        />

        {isRegistered ? (
          <>
            <h2 className="heading text-fruit-salad">You are registered for this event.</h2>
            <AddToCalendar event={event} />
            <JoinHere event={event} />
          </>
        ) : register.status === "success" ? (
          <>
            <h2 className="heading text-fruit-salad">Registration successful! 🎉</h2>
            <AddToCalendar event={event} />
            <JoinHere event={event} />
          </>
        ) : register.status === "pending" ? (
          <h2 className="heading text-fruit-salad">Registering you for the event...</h2>
        ) : (
          <>
            {!loggedIn && (
              <>
                <form
                  className="bg-transparent dark:bg-transparent mt-14 md:w-1/2 "
                  onSubmit={registerWithEmail}>
                  <div>
                    <label className="form-label font-normal" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-input px-5 py-3"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="form-label font-normal" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="form-input px-5 py-3"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      type="email"
                    />
                  </div>
                  <div className="text-center mx-auto mt-10 mb-10">
                    <ReCAPTCHA
                      className="inline-block mb-3"
                      sitekey="6LexReUeAAAAAF5a0KmF1tz26MWEFUwnhQ7crZAL"
                      onChange={i => console.log(i)}
                    />
                    <br />
                    <button
                      className="lg:button-big button-medium button-deep-sky-blue flex gap-2 rounded-[4.65px] lg:text-24px text-18px mt-10 mx-auto items-center "
                      type="submit">
                      <CalendarIcon width={32} height={32} />
                      <span className="">Register for this event</span>
                    </button>
                  </div>
                </form>
                <div className="flex justify-between caption w-screen">
                  <div className="w-1/4 h-4 border-gray-400 border-b-4"></div>
                  <div className="text-12px md:text-22px">Or register using</div>
                  <div className="w-1/4 h-4 border-gray-400 border-b-4"></div>
                </div>
              </>
            )}
            <div className="my-10">
              <button
                className="lg:button-big button-medium  button-deep-sky-blue flex gap-2 rounded-[4.65px] lg:text-24px text-18px items-center"
                onClick={registerWithAccount}>
                {loggedIn ? "Register now" : "The Dynamics account"}
                <div className="lg:scale-[1] relative flex items-center top-[2px]">
                  <ArrowRightIcon />
                </div>
              </button>
            </div>
          </>
        )}
      </section>
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

export async function getServerSideProps({ req, res, query: { uniqueId } }) {
  const user = await withAuth(req => req.$user)(req, res);
  const event = await eventService.getOne(uniqueId);

  const isRegistered = user && (await registrationService.checkRegistration(user.id, uniqueId));

  return {
    props: {
      event,
      isRegistered: !!isRegistered,
      loggedIn: !!user
    }
  };
}
