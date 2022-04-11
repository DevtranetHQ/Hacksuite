import Link from "next/link";
import DarkModeToggle from "../components/DarkModeToggle";
import EventCard from "../components/event/EventCard";
import Logo from "../components/Logo";

export default function Events({ events }) {
    // TODO: Replace const with actual state (whether that be React context, getServerSideProps, etc.)
    const loggedIn = false;
    return (
        <div className="dark:bg-[#202020] dark:text-white">
            <nav className="flex items-center justify-between pl-8 pr-12">
                <Logo className="w-[120px] py-5" />
                <div className="flex gap-x-2">
                    <DarkModeToggle
                        className="mx-0 w-[40x] h-[40px]"
                        darkClassName="mx-0 w-[40px] h-[42px]"
                    />
                    <a href="https://github.com/TheDynamics">
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 63 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M31.501 0.479004C27.3972 0.479004 23.3335 1.31692 19.5421 2.94492C15.7507 4.57292 12.3057 6.95912 9.40389 9.96727C3.54338 16.0425 0.250977 24.2823 0.250977 32.874C0.250977 47.1925 9.21973 59.3406 21.626 63.6492C23.1885 63.9083 23.6885 62.9041 23.6885 62.0294V56.5547C15.0322 58.4984 13.1885 52.2137 13.1885 52.2137C11.751 48.4559 9.71973 47.4517 9.71973 47.4517C6.87598 45.4432 9.93848 45.508 9.93848 45.508C13.0635 45.7348 14.7197 48.8447 14.7197 48.8447C17.4385 53.7687 22.0322 52.3109 23.8135 51.5335C24.0947 49.4278 24.9072 48.0024 25.7822 47.1925C18.8447 46.3827 11.5635 43.5967 11.5635 31.2542C11.5635 27.6584 12.751 24.7752 14.7822 22.4752C14.4697 21.6653 13.376 18.2962 15.0947 13.9229C15.0947 13.9229 17.7197 13.0482 23.6885 17.2272C26.1572 16.5145 28.8447 16.1582 31.501 16.1582C34.1572 16.1582 36.8447 16.5145 39.3135 17.2272C45.2822 13.0482 47.9072 13.9229 47.9072 13.9229C49.626 18.2962 48.5322 21.6653 48.2197 22.4752C50.251 24.7752 51.4385 27.6584 51.4385 31.2542C51.4385 43.6291 44.126 46.3503 37.1572 47.1601C38.2822 48.1644 39.3135 50.1405 39.3135 53.1532V62.0294C39.3135 62.9041 39.8135 63.9407 41.4072 63.6492C53.8135 59.3082 62.751 47.1925 62.751 32.874C62.751 28.6198 61.9427 24.4073 60.3722 20.4769C58.8018 16.5466 56.4999 12.9754 53.5981 9.96727C50.6962 6.95912 47.2513 4.57292 43.4598 2.94492C39.6684 1.31692 35.6048 0.479004 31.501 0.479004Z"
                                fill="#03A9F4"
                            />
                        </svg>
                    </a>
                    <Link href="/">
                        <button className="button-medium button-deep-sky-blue inline-flex gap-x-3 items-center mx-2">
                            {loggedIn ? "Go back home" : "Join us"}
                            <svg
                                width="41"
                                height="16"
                                viewBox="0 0 41 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M28.2 15.7001V10.8H-1.70001V5.20005H28.2V0.300049L40.275 8.00005L28.2 15.7001Z"
                                    fill="white"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </nav>
            <header className="bg-[#F8FBFF] container-gray-dark border-b-4 dark:border-gray-dark p-14 rounded-2xl text-center">
                <h1 className="text-deep-sky-blue title">The Dynamics Events</h1>
                <h2 className="lead mb-2">
                    Don’t miss any workshop, hackathon, AMA, networking event, mentorship program,
                    and more! Events dates and times are in your local timezone.
                </h2>
                <div className="inline-flex">
                    <button className="button-medium button-fruit-salad">All events</button>
                    <button className="button-medium button-deep-sky-blue">Host with us</button>
                </div>
            </header>
            <nav className="border-b-2 flex gap-x-2 items-center justify-center pt-7 pb-3 heading">
                <svg
                    width="42"
                    height="42"
                    viewBox="0 0 61 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M45.4113 35.2497L41.9221 31.5838L25.8588 48.4607L18.8804 41.1289L15.3912 44.7948L25.8588 55.7925L45.4113 35.2497ZM53.5417 7.37514H50.25V0.458385H43.6667V7.37514H17.3333V0.458385H10.75V7.37514H7.45833C3.80458 7.37514 0.907917 10.4877 0.907917 14.2919L0.875 62.7092C0.875 64.5437 1.5686 66.303 2.80321 67.6001C4.03783 68.8972 5.71232 69.626 7.45833 69.626H53.5417C57.1625 69.626 60.125 66.5134 60.125 62.7092V14.2919C60.125 10.4877 57.1625 7.37514 53.5417 7.37514ZM53.5417 62.7092H7.45833V24.667H53.5417V62.7092Z"
                        fill="#03A9F4"
                    />
                </svg>
                <span className="pt-3">Upcoming Events</span>
            </nav>
            <section>
                {events && events.map((event, key) => <EventCard key={key} {...event} />)}
            </section>
            <section className="p-14 text-center">
                <button className="button-big button-deep-sky-blue inline-flex gap-2">
                    View past events
                    <svg
                        width="55"
                        height="40"
                        viewBox="0 0 41 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M28.2 15.7001V10.8H-1.70001V5.20005H28.2V0.300049L40.275 8.00005L28.2 15.7001Z"
                            fill="white"></path>
                    </svg>
                </button>
            </section>
            <footer className="bg-[#f4f4f4] dark:bg-[#444444] px-14 py-7 text-center">
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
    // TODO: Update with actual information from database
    // TODO: Change page based on whether user is administrator or not
    return {
        props: {
            events: [
                {
                    name: "Hackathon on Elon Musk's private jet",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    organizerName: "Zach Latta",
                    organizerImage:
                        "https://s3-alpha-sig.figma.com/img/4d26/2767/d0b64dcacf31bfa508adcc47aea65677?Expires=1648425600&Signature=BHMNOhVF9EQOSs09rh7Ot1GJBIjwiP1Vm86GNt~do1Zj5KFVYaVo0uCaL6umlWfrzhuOZ-tt3VaDqA-JSAU1PJGCMLnJWU2gXn6fZR4vPExQY2yPduYPxctiooLF7qJKEnw3RJS9GSH~pcr-7Ux5nb6FG40z799PuKbiSjbq0E5mB8~0FlOolFN62nQ9~BD6K4FNrr9FXBYV~k4gpSEW-YFCDwE0vi8PnDD0baN-J0JddjcDEwF6QnL6K9cJ5~Jxtc6qTaBpvnHPZOMLtnydOuiGK43Gys2fJBI60FMxtaNx5hsm4REJG396RsXKmvuVGbFh08i6uM~SdGeCU4feOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    datePosted: "December 30, 2022",
                    dateEvent: "January 15, 2:00-3:00 PM",
                    id: "123",
                    image: "https://s3-alpha-sig.figma.com/img/4b43/2034/088ffd519dbd6fbc1ff2b2dd85131fd3?Expires=1648425600&Signature=XODy7DnFDhubGjAjTs3UCGIBblCDNnjhygPLf3uIKnE~K8aCArScubdCNbyCr9SH81HEYTo66E58V6-bjqhetPXCKxnVlaNL~yjgKLxPOO4uWKxc0wf5f6q7EbM40ShRH8egwNVyyr~htvSadFIt-9wQlsrqhsNwApTjKq9P5tNJx7w2HEtHzXIulzvg1R9BkwnOiRJDyMGzYBIe0eYW4xTjclvw1c6D0FGJP4Tv0oT5PlzeF-1gJh4KTi0M6EQxw92jfO-THopNYL1VSYfbUF2ncDAaWd7ZA2pWWDEct8vhrpriADLEtgCD~WXSljG8hyypfvZ26o1oMc0owZHdEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                },
                {
                    name: "Women in Tech mentorship program this fall",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    organizerName: "Kim Kardashian",
                    organizerImage:
                        "https://s3-alpha-sig.figma.com/img/d918/ced4/d006edb135bca7573615fc4beb6858bc?Expires=1648425600&Signature=Btn3yFOVIOTBiQXdIbLyLbskqCIX3n45E7cqQVRGiLek98AmMBCe8IcPBWvJm9wtvlMVh0BknU1cvbYXOqtLRkmE1-Ov2oufJBueslamDuJZGAJWd5sYEAC65CEm41ClkvS-qrXcaPspT6SiGFd7J6vigA2T07Nr5GC3Ui8ppj6Jg-WlAnZ3y0HAUuZ11gBS7uY8BfzWFCr7jq8wSlc8FDa3EflixoQW7bcK3FK4Jr6lJn41P-jXa72t2W1dcCYmA1mNNJIvNcKKwFjIpELuLNtlMlur7TpTa-BUjuh0LgrLAQwjxL1KvmFkXv2PYtylurNHBSM3gOu3PxwvFtlMww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    datePosted: "March 10, 2023",
                    dateEvent: "August 12, 1:00-2:00 PM",
                    id: "456",
                    image: "https://s3-alpha-sig.figma.com/img/d5cd/5303/2cfc66bf4ed9c71318278d2bbcd726f4?Expires=1648425600&Signature=ebU9EXir-LL-popFV~g0vc7e2JXCbTSCnnppiBpSdIOQsEr58yGcD8s0ZKPfTZpkhIsPuNeWf2oe7wOBTDV5tYev6SsY1SkvVjJprO76p-vHw4jw~TMxAD7X1AflPSGhPMmwBpHqmHGUTmovPl7QgjejNpOWzKSlDBtlGzsX7Z2IzDO98hyIoGqq-x564cl9MnZsDA6otCcBJ2UwddLErsFkDQFpU1JdEaFQ29MIs-WFRwEJLjdqEiQMYxtUnrmfG9yvkBodae1yJZlTpF4wU0SIBOwQLr11iGEqkqPg8S9r20EcD4MAu2VwBP~IfaJHXuBifUuvMhcJAGNfMSXdVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                },
                {
                    name: "Maintaining good work-life balance as parents",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    organizerName: "Jeff Bezos",
                    organizerImage:
                        "https://s3-alpha-sig.figma.com/img/939f/d722/70ffd81364346efa0b542910aed37b59?Expires=1648425600&Signature=JBOyrw8Rhjy0NI1VJQSWri3z81wIC1CdUQj17FOXRW53R9nBiovIs7CtVSc5SJqgpWC6EoM~4Ut9C2sCOkApOU3RTP7GZkpGWoe5N3rOdH3bB30hdSomKiWPoTMRP0Nc0MJz~lgzvX5BJydkgNVqY5KJ22N9uTRbUbJJTigmj5WcKT3SW7S-J5mTErkgBkLfj8-junvZhrjofqTykyLbKJvqQnOQXeoawBdotCGILvI8n9gmUPiiyStRatiT6u9NfrI-41I3jYQu-RzCVFO6pJP0F5xLv1kLADLe7qk8gdnEunQ6fyEwJdhPBRoCrKCL~JMHbvTViQ-FfO29sK3-aw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    datePosted: "June 25, 2022",
                    dateEvent: "December 19, 10:00 AM-3:00 PM",
                    id: "789",
                    image: "https://s3-alpha-sig.figma.com/img/ad1d/7340/a52269411e7ca1737a4c593411722416?Expires=1648425600&Signature=Kw9kRFXH2B5MOD3HrJyiFA58FqWGRJSeEQRq56Pz-WNvWyY1zzBfq6aHcDvQs4SqUyRp9SPA5VeBWJSYjfUcytVWLyq6euaXg8kgvU45BmtYh1YYudGVPpRk8L0nXbIl1UQdf5hM88QUJRgu1ZtmFOxRFzxjnnBOjPRUFXWrDAl2Yq7dUmd1PxqOZhjXZdrN3qZKtxsYwMvGWYiegx6NQenCtpgcGngLW64RekdMyIgmqkekKjisqEs2Kk7RI~AiVZInqOqL0GGBFLgfIV7UG2Dgt1~oR-b2wlgTD39AqwnZM5Za5IPwWk04ssX5AuHRNNrBHnDklGTmb9yOjwxNxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                }
            ]
        }
    };
}
