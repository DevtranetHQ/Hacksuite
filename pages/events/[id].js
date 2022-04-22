import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Avatar from "../../components/Avatar";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import showdownConverter from "../../components/showdownConverter";
import ArrowIcon from "../../components/icons/Arrow";
import CalendarIcon from "../../components/icons/Calendar";
import GithubIcon from "../../components/icons/Github";

// NOTE: TESTING
import { useRouter } from "next/router";

export default function Event({ loggedIn, recaptchaSitekey, event }) {
    const router = useRouter();
    loggedIn = router.query.ref === "dash" ? true : loggedIn;

    const eventDescription = () => {
        return {
            __html: showdownConverter.makeHtml(event.description)
        };
    };

    const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
    async function register(e) {
        e.preventDefault();
        if (loggedIn) {
            // TODO: Register logged in user
            setRegistrationSuccessful(true);
        } else {
            // TODO: Register not logged in user
            const name = e.target.name.value;
            const email = e.target.email.value;
            if (!name || !email) {
            }
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
                    <Image layout="fill" objectFit="cover" src={event.image} />
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
                                image={event.organizerImage}
                            />
                            <p className="caption font-bold text-[#a5a5a5]">
                                Posted by {event.organizerName} | {event.datePosted}
                            </p>
                        </div>
                    </header>
                </div>
            </div>
            <section className="flex flex-col gap-y-3 items-center px-24 py-10">
                <h1 className="flex gap-x-2 items-center headline">
                    <CalendarIcon fill="#FF9700" width={100} height={100} />
                    <span className="pt-3">{event.date}</span>
                </h1>
                <div
                    className="prose prose-lg dark:prose-invert"
                    dangerouslySetInnerHTML={eventDescription()}
                />
                {loggedIn ? (
                    <>
                        {registrationSuccessful && (
                            <h2 className="heading text-fruit-salad">
                                Registration successful! 🎉
                            </h2>
                        )}
                        <button
                            className="button-big button-deep-sky-blue inline-flex gap-2 rounded-[4.65px] text-24px h-[54px]"
                            onClick={register}>
                            <CalendarIcon width={32} height={32} />
                            <span className="pt-2">Add to my calendar</span>
                        </button>
                    </>
                ) : (
                    <>
                        <form
                            className="bg-transparent dark:bg-transparent mt-14 w-1/2"
                            onSubmit={register}>
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
                                    sitekey={recaptchaSitekey}
                                    onChange={i => console.log(i)}
                                />
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
                            <div className="text-12px md:text-18px">Or register using</div>
                            <div className="w-1/4 h-4 border-gray-400 border-b-4"></div>
                        </div>
                        <div className="my-10">
                            <button
                                className="button-big button-deep-sky-blue inline-flex gap-2 rounded-[4.65px] text-24px"
                                onClick={register}>
                                The Dynamics account
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

export async function getServerSideProps(context) {
    // TODO: Use id to get event info from database
    // NOTE: Not tested yet, waiting for MONGODB_URL
    const { id } = context.query;
    const url = process.env.CLIENT_URL || "http://localhost:3000";
    const res = await fetch(`${url}/api/events/${id}`);
    const data = await res.json();
    return {
        props: {
            data
            // recaptchaSitekey: process.env.RECAPTCHA_SITEKEY,
            // loggedIn: false,
            // event: {
            //     name: "Hackathon on Elon Musk's private jet",
            //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, [sed do eiusmod](https://github.com) tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            //     image: "https://s3-alpha-sig.figma.com/img/4b43/2034/088ffd519dbd6fbc1ff2b2dd85131fd3?Expires=1648425600&Signature=XODy7DnFDhubGjAjTs3UCGIBblCDNnjhygPLf3uIKnE~K8aCArScubdCNbyCr9SH81HEYTo66E58V6-bjqhetPXCKxnVlaNL~yjgKLxPOO4uWKxc0wf5f6q7EbM40ShRH8egwNVyyr~htvSadFIt-9wQlsrqhsNwApTjKq9P5tNJx7w2HEtHzXIulzvg1R9BkwnOiRJDyMGzYBIe0eYW4xTjclvw1c6D0FGJP4Tv0oT5PlzeF-1gJh4KTi0M6EQxw92jfO-THopNYL1VSYfbUF2ncDAaWd7ZA2pWWDEct8vhrpriADLEtgCD~WXSljG8hyypfvZ26o1oMc0owZHdEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            //     date: "January 15, 2:00-3:00 PM",
            //     datePosted: "December 30, 2022",
            //     organizerName: "Zach Latta",
            //     organizerImage:
            //         "https://s3-alpha-sig.figma.com/img/4d26/2767/d0b64dcacf31bfa508adcc47aea65677?Expires=1648425600&Signature=BHMNOhVF9EQOSs09rh7Ot1GJBIjwiP1Vm86GNt~do1Zj5KFVYaVo0uCaL6umlWfrzhuOZ-tt3VaDqA-JSAU1PJGCMLnJWU2gXn6fZR4vPExQY2yPduYPxctiooLF7qJKEnw3RJS9GSH~pcr-7Ux5nb6FG40z799PuKbiSjbq0E5mB8~0FlOolFN62nQ9~BD6K4FNrr9FXBYV~k4gpSEW-YFCDwE0vi8PnDD0baN-J0JddjcDEwF6QnL6K9cJ5~Jxtc6qTaBpvnHPZOMLtnydOuiGK43Gys2fJBI60FMxtaNx5hsm4REJG396RsXKmvuVGbFh08i6uM~SdGeCU4feOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            // }
        }
    };
}
