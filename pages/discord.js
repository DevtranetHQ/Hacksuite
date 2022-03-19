import Link from "next/link";
import Logo from "../components/Logo";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Discord() {
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
                            {loggedIn ? "Go back home" : "Go back"}
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
                <h1 className="text-deep-sky-blue title">
                    The Dynamics Projects
                </h1>
                <h2 className="lead mb-2">
                    A gallery of all the awesome things the makers at The
                    Dynamics are building and launching everyday.
                </h2>
                <div className="inline-flex">
                    <button className="button-medium button-fruit-salad">
                        All projects
                    </button>
                    <button className="button-medium button-deep-sky-blue">
                        Add your project
                    </button>
                </div>
            </header>
        </div>
    );
}
