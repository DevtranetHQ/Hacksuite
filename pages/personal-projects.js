import Link from "next/link";
import { useState } from "react";
import DashNav from "../components/dash/DashNav";
import DarkModeToggle from "../components/DarkModeToggle";

export default function PersonalProjects({ name }) {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <DashNav active="/personal-projects" />
            </div>
            <div className="dark:bg-[#202020] dark:text-white col-span-10 p-10 relative">
                <header className="border-b-2 flex items-center justify-center pb-10">
                    <h1 className="ml-auto title">Projects</h1>
                    <div className="ml-auto">
                        <DarkModeToggle />
                        <Link href="/notifications">
                            <svg
                                className="cursor-pointer inline fill-deep-sky-blue mx-2"
                                width="37"
                                height="43"
                                viewBox="0 0 37 43"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5833 38.125H22.4167C22.4167 40.2792 20.6542 42.0417 18.5 42.0417C16.3458 42.0417 14.5833 40.2792 14.5833 38.125ZM36.125 34.2084V36.1667H0.875V34.2084L4.79167 30.2917V18.5417C4.79167 12.4709 8.70833 7.18335 14.5833 5.42085V4.83335C14.5833 2.67919 16.3458 0.916687 18.5 0.916687C20.6542 0.916687 22.4167 2.67919 22.4167 4.83335V5.42085C28.2917 7.18335 32.2083 12.4709 32.2083 18.5417V30.2917L36.125 34.2084ZM28.2917 18.5417C28.2917 13.0584 23.9833 8.75002 18.5 8.75002C13.0167 8.75002 8.70833 13.0584 8.70833 18.5417V32.25H28.2917V18.5417Z" />
                            </svg>
                        </Link>
                    </div>
                </header>
                <section className="pt-7 px-7">
                    <p>
                        Hey <span className="text-fruit-salad">{name}</span>,
                        here are all the cool things you’ve built, launched,
                        designed, and shared with The Dynamics Community. We’re
                        proud of you!
                    </p>
                    <button className="button-small button-orange-peel ml-auto">
                        Add new
                    </button>
                </section>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    // TODO: Alter to work with backend
    return {
        props: {
            name: "John",
            projects: [
                {
                    name: "Web scraper",
                    description:
                        "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
                    image:
                        "https://s3-alpha-sig.figma.com/img/4b43/2034/088ffd519dbd6fbc1ff2b2dd85131fd3?Expires=1648425600&Signature=XODy7DnFDhubGjAjTs3UCGIBblCDNnjhygPLf3uIKnE~K8aCArScubdCNbyCr9SH81HEYTo66E58V6-bjqhetPXCKxnVlaNL~yjgKLxPOO4uWKxc0wf5f6q7EbM40ShRH8egwNVyyr~htvSadFIt-9wQlsrqhsNwApTjKq9P5tNJx7w2HEtHzXIulzvg1R9BkwnOiRJDyMGzYBIe0eYW4xTjclvw1c6D0FGJP4Tv0oT5PlzeF-1gJh4KTi0M6EQxw92jfO-THopNYL1VSYfbUF2ncDAaWd7ZA2pWWDEct8vhrpriADLEtgCD~WXSljG8hyypfvZ26o1oMc0owZHdEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    published: false,
                    date: "11:00 am, Today",
                    id: "123"
                },
                {
                    name: "Codetivate",
                    description:
                        "The world’s largest diversity-focused hackhon web application built for this fall 2022",
                    image:
                        "https://s3-alpha-sig.figma.com/img/d5cd/5303/2cfc66bf4ed9c71318278d2bbcd726f4?Expires=1648425600&Signature=ebU9EXir-LL-popFV~g0vc7e2JXCbTSCnnppiBpSdIOQsEr58yGcD8s0ZKPfTZpkhIsPuNeWf2oe7wOBTDV5tYev6SsY1SkvVjJprO76p-vHw4jw~TMxAD7X1AflPSGhPMmwBpHqmHGUTmovPl7QgjejNpOWzKSlDBtlGzsX7Z2IzDO98hyIoGqq-x564cl9MnZsDA6otCcBJ2UwddLErsFkDQFpU1JdEaFQ29MIs-WFRwEJLjdqEiQMYxtUnrmfG9yvkBodae1yJZlTpF4wU0SIBOwQLr11iGEqkqPg8S9r20EcD4MAu2VwBP~IfaJHXuBifUuvMhcJAGNfMSXdVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    published: false,
                    date: "February 28, 2022",
                    id: "456"
                },
                {
                    name: "Lorum Ipsum",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                    image:
                        "https://s3-alpha-sig.figma.com/img/ad1d/7340/a52269411e7ca1737a4c593411722416?Expires=1648425600&Signature=Kw9kRFXH2B5MOD3HrJyiFA58FqWGRJSeEQRq56Pz-WNvWyY1zzBfq6aHcDvQs4SqUyRp9SPA5VeBWJSYjfUcytVWLyq6euaXg8kgvU45BmtYh1YYudGVPpRk8L0nXbIl1UQdf5hM88QUJRgu1ZtmFOxRFzxjnnBOjPRUFXWrDAl2Yq7dUmd1PxqOZhjXZdrN3qZKtxsYwMvGWYiegx6NQenCtpgcGngLW64RekdMyIgmqkekKjisqEs2Kk7RI~AiVZInqOqL0GGBFLgfIV7UG2Dgt1~oR-b2wlgTD39AqwnZM5Za5IPwWk04ssX5AuHRNNrBHnDklGTmb9yOjwxNxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    published: false,
                    date: "January 1, 2022",
                    id: "789"
                }
            ]
        }
    };
}
