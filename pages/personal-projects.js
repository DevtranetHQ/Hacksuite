import Link from "next/link";
import { useState } from "react";
import DashNav from "../components/dash/DashNav";
import DarkModeToggle from "../components/DarkModeToggle";
import ProjectCard from "../components/project/ProjectCard";

export default function PersonalProjects({ name, projects }) {
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
                    {projects.map((project, key) => (
                        <ProjectCard key={key} {...project} />
                    ))}
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
                        "https://s3-alpha-sig.figma.com/img/ed76/0bd2/dc09e6a239152f3692e81f49e87d94ed?Expires=1648425600&Signature=SH5jfL4wpxDK9owW63TVmcEX50ridBg7eLXkDa3RhBiCnTR~2WNrtBk-msr4RNRoYYRS~YfdposbXQqU2mLbWTCPk1plAnY~NIGg5moaKvRmYS4dKsHLvWmw~yE6R948kU4fRb8jhHgyIImyeTcoTL3UUZAv~ndSe31W4mvwqM~ov6NodRIFLDB02PEGoMdpERHVv-iXJ4dOS~k3DW06B0VDzNDhPfG543D0fzBcub7DGou7ocYkBOpC-Majx6amUPGcV5oyc5JVFEZCqH226y2dfm-J-7izNcd0vhQLp8ByDmP0FLjmotz7jLcCeyW-ZcIrufurzmSJRHEBmNhWvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    published: true,
                    date: "11:00 am, Today",
                    id: "123"
                },
                {
                    name: "Codetivate",
                    description:
                        "The world’s largest diversity-focused hackhon web application built for this fall 2022",
                    image:
                        "https://s3-alpha-sig.figma.com/img/78d4/efac/c44a334a75277618bda0bcfd3c0ea43f?Expires=1648425600&Signature=NGSq08i8rz6k5PmaI9uOm0CC3vr3IZ0te7X5mhawjdGTQl31rxHGmZxf~hupMD7MdPgRhR90F5efysOVBSCDuhxho0dq5aOmqvpSc89LB3yqgK1pBwBiUVpdEWnXBIL2cOLjDR34skpohhkXk~0qyagq~fOAxkG0bn~VJBu3EpNEbuQyVamfZHGpHqzcgAIz7wa1CFMpx1yim7cZRpEavFQRZqMbBD68LI1PFOnCU9dUygOMNlNnN4ekTQBUjr17fkh3tHKSIhNbXYa0e~dV-pRfAbKIIGBLRpdQHePTX9vUrGKaSxLqDfekYUI~~SXDHy9GMMI6xR-iDnY0Olft3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    published: true,
                    date: "February 28, 2022",
                    id: "456"
                },
                {
                    name: "Lorum Ipsum",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                    image:
                        "https://s3-alpha-sig.figma.com/img/351b/8a4f/c18dfbda233aa2436e53dcd3628893ee?Expires=1648425600&Signature=a6Z0G2v2~LL4qz-0CtyuBrCthVZcOfuSoAel6n7xhAn6vzEaL8NEEYUdifr8wmoIbelcyupc2s0c1qsT2Vt~PELGoIQGRpNYno17AvB7EMAR3yGgjjjw6ABr4kw8Un1c7YYi7FpoBIzNpBnQ4jZTikLqtsBm2OqWId5jEAzNas~yBBgTBWLUw0JVdx-IDGVjWzWXRACD2~~ei6jK~abVX58zGegK4EiDzAXl9GOpaSR9xtolt4ivjljmI-afMS2BogEX9nHOxBqaLYQ3MasXASN9yzEvNSoDbYIRuQlu5vhMQOt-GGLDrFWU1GBtxj7jFbI1WrFfUQiq73b4t54kyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    published: false,
                    date: "January 1, 2022",
                    id: "789"
                }
            ]
        }
    };
}
