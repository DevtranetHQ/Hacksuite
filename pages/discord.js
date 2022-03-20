import Image from "next/image";
import Link from "next/link";
import Logo from "../components/Logo";
import DarkModeToggle from "../components/DarkModeToggle";
import ArrowIcon from "../components/icons/Arrow";
import GithubIcon from "../components/icons/Github";
import foxImage from "../public/assets/discord/fox.svg";

export default function Discord() {
    async function handleSubmission(e) {
        e.preventDefault();
    }

    return (
        <div className="dark:bg-[#202020] dark:text-white">
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
                            Go back
                            <ArrowIcon />
                        </button>
                    </Link>
                </div>
            </nav>
            <header className="bg-[#F8FBFF] container-gray-dark border-b-4 dark:border-gray-dark p-14 rounded-b-2xl text-center">
                <div className="grid grid-cols-2"></div>
            </header>
            <section className="flex flex-col p-7 py-14 text-center">
                <style jsx>{`
                    .button-big {
                        margin: auto;
                    }
                `}</style>
                <h1 className="title">
                    A place for every{" "}
                    <span className="text-orange-peel">int</span>
                    <span className="text-deep-sky-blue">ere</span>
                    <span className="text-fruit-salad">st</span>
                </h1>
                <p>
                    With more than 40 channels on our Discord server, you’ll fit
                    in somewhere perfectly! Whether you are looking for
                    developers to collaborate with, seeking for start-up
                    fundrasing advice, or just simply interested in hanging out
                    with makers like you.
                </p>
                <div className="py-24">
                    <div className="mb-7">
                        <button className="button-big bg-black" disabled={true}>
                            #blockchain
                        </button>
                    </div>
                    <div className="grid grid-cols-3">
                        <div>
                            <button
                                className="button-big button-deep-sky-blue"
                                disabled={true}>
                                #startups
                            </button>
                        </div>
                        <div className="pt-24">
                            <button
                                className="button-big button-orange-peel"
                                disabled={true}>
                                #job-chat
                            </button>
                        </div>
                        <div>
                            <button
                                className="button-big button-link"
                                disabled={true}>
                                #robotics
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div>
                            <button
                                className="button-big bg-[#ED4245]"
                                disabled={true}>
                                #web-dev
                            </button>
                        </div>
                        <div className="pt-24">
                            <button
                                className="button-big bg-[#FEE75C]"
                                disabled={true}>
                                #design
                            </button>
                        </div>
                        <div>
                            <button
                                className="button-big button-fruit-salad"
                                disabled={true}>
                                #game-dev
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mb-7">
                        <div>
                            <button
                                className="button-big bg-[#57F287]"
                                disabled={true}>
                                #prototyping
                            </button>
                        </div>
                        <div>
                            <button
                                className="button-big bg-[#EB459E]"
                                disabled={true}>
                                #app-dev
                            </button>
                        </div>
                    </div>
                    <div>
                        <button
                            className="button-big bg-[#A633D6]"
                            disabled={true}>
                            #bot-commands
                        </button>
                    </div>
                </div>
                <h1 className="title">
                    <span className="text-orange-peel">And</span>{" "}
                    <span className="text-deep-sky-blue">many</span>{" "}
                    <span className="text-fruit-salad">more</span>
                    ...
                </h1>
                <p className="mb-7">
                    Stuck with something? Looking for constructive project
                    feedbacks? Want to make friends with like-minded makers?
                    You’ll find amazing people to chat with here!
                </p>
                <button className="button-big button-deep-sky-blue inline-flex gap-x-2 w-fit">
                    Join right now
                    <ArrowIcon width={56} height={36} />
                </button>
            </section>
            <footer className="bg-[#f4f4f4] dark:bg-[#444444] px-14 py-7 text-center">
                <p className="sm">
                    All members of The Dynamics Discord server must abide by our{" "}
                    <Link href="/">
                        <a>Code of Conduct</a>
                    </Link>
                </p>
            </footer>
        </div>
    );
}
