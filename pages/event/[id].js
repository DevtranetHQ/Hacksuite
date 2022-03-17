// TODO: Add reCAPTCHA
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Avatar from "../../components/Avatar";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";

export default function Event({
    name,
    description,
    organizerName,
    organizerImage,
    datePosted,
    dateEvent,
    link,
    image
}) {
    // TODO: Replace const with actual state (whether that be React context, getServerSideProps, etc.)
    const loggedIn = false;
    return (
        <div className="dark:bg-[#202020] dark:text-white min-h-screen">
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
                            {loggedIn ? "Go back home" : "All Events"}
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
            <div className="pb-14">
                <div className="pt-14 relative">
                    <Image layout="fill" objectFit="cover" src={image} />
                    <style jsx>{`
                        header {
                            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        }
                    `}</style>
                    <header className="absolute -bottom-14 left-0 bg-[#f8fbff] container-gray-dark p-5 relative rounded-r w-1/2">
                        <h1 className="title text-deep-sky-blue">{name}</h1>
                        <div className="flex gap-2 items-center">
                            <Avatar
                                border="!border-[3px]"
                                className="relative w-[50px] h-[50px]"
                                image={organizerImage}
                            />
                            <p className="font-bold caption text-[#a5a5a5]">
                                Posted by {organizerName} | {datePosted}
                            </p>
                        </div>
                    </header>
                </div>
            </div>
            <section className="flex flex-col gap-y-3 px-24 py-5">
                <h1 className="flex gap-x-2 items-center justify-center headline">
                    <svg
                        width="60"
                        height="60"
                        viewBox="0 0 34 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M25.305 20.2016L23.3617 18.1599L14.415 27.5597L10.5283 23.4761L8.585 25.5179L14.415 31.6432L25.305 20.2016V20.2016ZM29.8333 4.67653H28V0.824158H24.3333V4.67653H9.66667V0.824158H6V4.67653H4.16667C2.13167 4.67653 0.518333 6.4101 0.518333 8.52891L0.5 35.4956C0.5 36.5173 0.886308 37.4971 1.57394 38.2196C2.26158 38.9421 3.19421 39.3479 4.16667 39.3479H29.8333C31.85 39.3479 33.5 37.6144 33.5 35.4956V8.52891C33.5 6.4101 31.85 4.67653 29.8333 4.67653ZM29.8333 35.4956H4.16667V14.3075H29.8333V35.4956Z"
                            fill="#FF9700"
                        />
                    </svg>
                    <span className="pt-3">{dateEvent}</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                {loggedIn ? (
                    <button className="button-medium button-deep-sky-blue inline-flex gap-2 mx-auto w-fit">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 60 70"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M44.7225 35.2492L41.2775 31.5833L25.4175 48.46L18.5275 41.1283L15.0825 44.7942L25.4175 55.7917L44.7225 35.2492ZM52.75 7.37498H49.5V0.458313H43V7.37498H17V0.458313H10.5V7.37498H7.25C3.6425 7.37498 0.7825 10.4875 0.7825 14.2916L0.75 62.7083C0.75 64.5427 1.43482 66.302 2.65381 67.5991C3.87279 68.8963 5.52609 69.625 7.25 69.625H52.75C56.325 69.625 59.25 66.5125 59.25 62.7083V14.2916C59.25 10.4875 56.325 7.37498 52.75 7.37498ZM52.75 62.7083H7.25V24.6667H52.75V62.7083Z"
                                fill="white"
                            />
                        </svg>
                        <span className="pt-2">Add to my calendar</span>
                    </button>
                ) : (
                    <form className="bg-transparent dark:bg-transparent flex flex-col justify-center">
                        <label className="form-label font-normal" for="name">
                            Name *
                        </label>
                        <input
                            className="form-input"
                            id="name"
                            placeholder="Name"
                            type="text"
                        />
                        <label className="form-label font-normal" for="email">
                            Email *
                        </label>
                        <input
                            className="form-input"
                            id="email"
                            placeholder="Email"
                            type="email"
                        />
                        <button
                            className="button-medium button-deep-sky-blue inline-flex gap-2 mx-auto rounded-none w-fit"
                            type="submit">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 60 70"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M44.7225 35.2492L41.2775 31.5833L25.4175 48.46L18.5275 41.1283L15.0825 44.7942L25.4175 55.7917L44.7225 35.2492ZM52.75 7.37498H49.5V0.458313H43V7.37498H17V0.458313H10.5V7.37498H7.25C3.6425 7.37498 0.7825 10.4875 0.7825 14.2916L0.75 62.7083C0.75 64.5427 1.43482 66.302 2.65381 67.5991C3.87279 68.8963 5.52609 69.625 7.25 69.625H52.75C56.325 69.625 59.25 66.5125 59.25 62.7083V14.2916C59.25 10.4875 56.325 7.37498 52.75 7.37498ZM52.75 62.7083H7.25V24.6667H52.75V62.7083Z"
                                    fill="white"
                                />
                            </svg>
                            <span className="pt-2">
                                Register for this event
                            </span>
                        </button>
                    </form>
                )}
            </section>
        </div>
    );
}

export async function getServerSideProps(context) {
    // TODO: Use id to retrieve event information from database
    const { id } = context.query;
    return {
        props: {
            name: "Hackathon on Elon Musk's private jet",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            organizerName: "Zach Latta",
            organizerImage:
                "https://s3-alpha-sig.figma.com/img/4d26/2767/d0b64dcacf31bfa508adcc47aea65677?Expires=1648425600&Signature=BHMNOhVF9EQOSs09rh7Ot1GJBIjwiP1Vm86GNt~do1Zj5KFVYaVo0uCaL6umlWfrzhuOZ-tt3VaDqA-JSAU1PJGCMLnJWU2gXn6fZR4vPExQY2yPduYPxctiooLF7qJKEnw3RJS9GSH~pcr-7Ux5nb6FG40z799PuKbiSjbq0E5mB8~0FlOolFN62nQ9~BD6K4FNrr9FXBYV~k4gpSEW-YFCDwE0vi8PnDD0baN-J0JddjcDEwF6QnL6K9cJ5~Jxtc6qTaBpvnHPZOMLtnydOuiGK43Gys2fJBI60FMxtaNx5hsm4REJG396RsXKmvuVGbFh08i6uM~SdGeCU4feOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            datePosted: "December 30, 2022",
            dateEvent: "January 15, 2:00-3:00 PM",
            link: "/event/123",
            image:
                "https://s3-alpha-sig.figma.com/img/4b43/2034/088ffd519dbd6fbc1ff2b2dd85131fd3?Expires=1648425600&Signature=XODy7DnFDhubGjAjTs3UCGIBblCDNnjhygPLf3uIKnE~K8aCArScubdCNbyCr9SH81HEYTo66E58V6-bjqhetPXCKxnVlaNL~yjgKLxPOO4uWKxc0wf5f6q7EbM40ShRH8egwNVyyr~htvSadFIt-9wQlsrqhsNwApTjKq9P5tNJx7w2HEtHzXIulzvg1R9BkwnOiRJDyMGzYBIe0eYW4xTjclvw1c6D0FGJP4Tv0oT5PlzeF-1gJh4KTi0M6EQxw92jfO-THopNYL1VSYfbUF2ncDAaWd7ZA2pWWDEct8vhrpriADLEtgCD~WXSljG8hyypfvZ26o1oMc0owZHdEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        }
    };
}
