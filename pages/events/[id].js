import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { useState } from "react";
import Avatar from "../../components/Avatar";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import showdownConverter from "../../components/showdownConverter";
import ArrowIcon from "../../components/icons/Arrow";
import CalendarIcon from "../../components/icons/Calendar";
import GithubIcon from "../../components/icons/Github";
import avatarImage from "../../public/assets/avatar.webp";
import { withAuth } from "../../server/middlewares/auth.middleware";
import eventService from "../../server/services/event.service";
import DisplayDate from "../../components/DisplayDate";
import EventTime from "../../components/event/EventTime";
import Image from "next/image";
import registrationService from "../../server/modules/registration/registration.service";
import { useRegistration } from "./../../hooks/useRegistration";
import { useRouter } from "next/router";
import { AddToCalendar } from "../../components/event/AddToCalendar";

export default function Event({ loggedIn, event, isRegistered }) {
    const router = useRouter();
    const { register } = useRegistration();

    const eventDescription = () => {
        return {
            __html: showdownConverter.makeHtml(event.description)
        };
    };

    function registerWithAccount(e) {
        e.preventDefault();
        if (loggedIn) {
            register.execute(event._id);
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
            register.execute(event._id, name, email);
        }
    }

    return (
        <div className="dark:bg-[#202020] dark:text-white min-h-screen">
            <nav className="flex items-center justify-between pl-8 pr-12">
                <Logo className="w-[120px] py-5" />
                <div className="flex gap-x-2">
                    <DarkModeToggle
                        className="mx-0 w-[40px] h-[40px]"
                        darkClassName="mx-0 w-[40px] h-[42px]"
                    />
                    <a href="https://github.com/TheDynamics">
                        <GithubIcon />
                    </a>
                    <Link href="/">
                        <button className="button-medium button-deep-sky-blue inline-flex gap-x-3 items-center mx-2">
                            {loggedIn ? "Go back home" : "All Events"}
                            <ArrowIcon />
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
                    <header className="absolute -bottom-14 left-0 bg-[#f8fbff] container-gray-dark p-5 relative rounded-r w-1/2">
                        <h1 className="title text-deep-sky-blue">{event.name}</h1>
                        <div className="flex gap-2 items-center">
                            <Avatar
                                className="relative w-[50px] h-[50px]"
                                border="!border-[3px]"
                                image={event.creator.image || avatarImage}
                            />
                            <p className="caption font-bold text-[#a5a5a5]">
                                Posted by {event.creator.firstName} {event.creator.lastName} |{" "}
                                <DisplayDate date={new Date(event.posted)} show="date" />
                            </p>
                        </div>
                    </header>
                </div>
            </div>
            <section className="flex flex-col gap-y-3 items-center px-24 py-10">
                <h1 className="flex gap-x-2 items-center headline">
                    <CalendarIcon fill="#FF9700" width={100} height={100} />
                    <span className="pt-3">
                        <EventTime start={event.start} end={event.end} />
                    </span>
                </h1>
                <div
                    className="prose prose-lg dark:prose-invert"
                    dangerouslySetInnerHTML={eventDescription()}
                />

                {isRegistered ? (
                    <>
                        <h2 className="heading text-fruit-salad">
                            You are registered for this event.
                        </h2>
                        <AddToCalendar event={event} />
                    </>
                ) : register.status === "success" ? (
                    <>
                        <h2 className="heading text-fruit-salad">Registration successful! 🎉</h2>
                        <AddToCalendar event={event} />
                    </>
                ) : register.status === "pending" ? (
                    <h2 className="heading text-fruit-salad">Registering you for the event...</h2>
                ) : (
                    <>
                        {!loggedIn && (
                            <>
                                <form
                                    className="bg-transparent dark:bg-transparent mt-14 w-1/2"
                                    onSubmit={registerWithEmail}>
                                    <div>
                                        <label className="form-label font-normal" htmlFor="name">
                                            Name *
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
                                            Email Address *
                                        </label>
                                        <input
                                            className="form-input px-5 py-3"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            required
                                            type="email"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <ReCAPTCHA
                                            className="inline-block mb-3"
                                            sitekey="6LexReUeAAAAAF5a0KmF1tz26MWEFUwnhQ7crZAL"
                                            onChange={i => console.log(i)}
                                        />
                                        <br />
                                        <button
                                            className="button-big button-deep-sky-blue inline-flex gap-2 rounded-[4.65px] text-24px"
                                            type="submit">
                                            <CalendarIcon width={32} height={32} />
                                            <span className="pt-2">Register for this event</span>
                                        </button>
                                    </div>
                                </form>
                                <div className="flex justify-between caption w-screen">
                                    <div className="w-1/4 h-4 border-gray-400 border-b-4"></div>
                                    <div className="text-12px md:text-18px">OR</div>
                                    <div className="w-1/4 h-4 border-gray-400 border-b-4"></div>
                                </div>
                            </>
                        )}
                        <div className="my-10">
                            <button
                                className="button-big button-deep-sky-blue inline-flex gap-2 rounded-[4.65px] text-24px"
                                onClick={registerWithAccount}>
                                {loggedIn ? "Register now" : "Register with The Dynamics account"}
                                <ArrowIcon />
                            </button>
                        </div>
                    </>
                )}
            </section>
            <footer className="bg-[#f4f4f4] dark:bg-[#444444] px-14 py-3 text-center">
                <p className="sm">
                    All events are hosted and maintained by The Dynamics, the official network of
                    young makers, developers, innovators, and founders using our{" "}
                    <Link href="/">
                        <a>Code of Conduct</a>
                    </Link>
                </p>
            </footer>
        </div>
    );
}

export async function getServerSideProps({ req, res, query }) {
    const user = await withAuth(req => req.$user)(req, res);
    const { id } = query;
    const event = await eventService.getOne(id);

    const isRegistered = user && (await registrationService.checkRegistration(user.id, event._id));

    return {
        props: {
            event,
            isRegistered: !!isRegistered,
            loggedIn: !!user
        }
    };
}
