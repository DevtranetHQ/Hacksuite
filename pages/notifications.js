import Image from "next/image";
import Link from "next/link";
import DashNav from "../components/dash/DashNav";
import Notification from "../components/dash/Notification";

export default function Notifications() {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <DashNav/>
            </div>
            <div className="col-span-10 p-10 relative">
                <div className="border-b-2 flex items-center justify-center pb-10">
                    <h1 className="ml-auto title">Notifications</h1>
                    <div className="ml-auto">
                        <svg className="cursor-pointer inline fill-deep-sky-blue mx-2" width="32" height="41" viewBox="0 0 32 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.58399 25.5685C2.37965 28.5387 3.86354 31.2797 5.91552 33.5698C7.96751 35.8598 10.5299 37.6345 13.3953 38.7501C16.2607 39.8657 19.3485 40.2909 22.4087 39.9912C25.469 39.6916 28.4157 38.6755 31.0102 37.0253C26.8461 36.8474 22.8473 35.3456 19.5955 32.7383C16.3438 30.1311 14.0087 26.5543 12.93 22.5284C11.8512 18.5024 12.0851 14.2373 13.5975 10.3535C15.11 6.46962 17.8221 3.16962 21.3395 0.933495C18.2674 0.801644 15.2075 1.39505 12.4074 2.66568C9.60729 3.9363 7.14576 5.84843 5.22208 8.24726C3.29839 10.6461 1.96662 13.4642 1.33457 16.4734C0.70252 19.4827 0.787965 22.5984 1.58399 25.5685Z"/></svg>
                        <Link href="/notifications">
                            <svg className="cursor-pointer inline fill-deep-sky-blue mx-2" width="37" height="43" viewBox="0 0 37 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5833 38.125H22.4167C22.4167 40.2792 20.6542 42.0417 18.5 42.0417C16.3458 42.0417 14.5833 40.2792 14.5833 38.125ZM36.125 34.2084V36.1667H0.875V34.2084L4.79167 30.2917V18.5417C4.79167 12.4709 8.70833 7.18335 14.5833 5.42085V4.83335C14.5833 2.67919 16.3458 0.916687 18.5 0.916687C20.6542 0.916687 22.4167 2.67919 22.4167 4.83335V5.42085C28.2917 7.18335 32.2083 12.4709 32.2083 18.5417V30.2917L36.125 34.2084ZM28.2917 18.5417C28.2917 13.0584 23.9833 8.75002 18.5 8.75002C13.0167 8.75002 8.70833 13.0584 8.70833 18.5417V32.25H28.2917V18.5417Z"/></svg>
                        </Link>
                    </div>
                </div>
                <div>
                    <Notification
                        unread={true}
                        type="Workshop"
                        title="Introduction to Robotics and Artificial Intelligence"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        who="Elon Musk"
                        time="1:00 PM at March 14, 2022"
                    />
                    <Notification
                        unread={true}
                        type="Announcement"
                        title="The next edition of Codetivate Hackathon in two months"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        who="Ibrahim Salami"
                        time="12:00 PM at March 10, 2022"
                    />
                    <Notification
                        unread={false}
                        type="Event"
                        title="AMA with Bill Gates, Founder of Microsoft"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        who="Bill Gates"
                        time="11:00 AM at December 14, 2021"
                    />
                    <Notification
                        unread={false}
                        type="Feature update"
                        title="Web-based chat app integration with The Dynamics account"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        who="Engineering Team"
                        time="1:00 PM at January 19, 2021"
                    />
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    // TODO: Alter to get notifications
    return {
        props: {}
    };
}
