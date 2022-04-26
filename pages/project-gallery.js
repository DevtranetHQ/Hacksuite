import Logo from "../components/Logo";
import DarkModeToggle from "../components/DarkModeToggle";
import GithubIcon from "../components/icons/Github";
import Link from "next/link";
import ArrowIcon from "../components/icons/Arrow";



export default function ProjectGallery(props) {
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
            <Link href="/profile/1">
                <button className="button-medium button-deep-sky-blue inline-flex gap-x-3 items-center mx-2">
                    Go back home
                <ArrowIcon />
                </button>
            </Link>
            </div>
        </nav>
        <header className="bg-[#F8FBFF] container-gray-dark border-b-4 dark:border-gray-dark p-14 rounded-b-2xl text-center">
            <h1 className="title text-deep-sky-blue">The Dynamics Projects</h1>
            <h2 className="lead mb-2">A gallery of all the awesome things the makers at The Dynamics are building and launching everyday.</h2>
            <div className="inline-flex my-2">
            <button className="button-medium button-fruit-salad inline-flex gap-x-2">
                All Projects
            </button>
            <a className="button-medium button-deep-sky-blue inline-flex gap-x-2" href="#comments">
                Add your project
            </a>
            </div>
      </header>
        </div>
    )
}