import Image from 'next/image';
import Link from 'next/link'
import { useState } from "react";
import LogoDark from "../public/assets/logo-dark.svg";
import Logo from "../public/assets/logo.svg";
import Dash from "../public/assets/login-page-image.svg";
import Discord from "../public/assets/discord.svg"

import DarkModeToggle from "../components/DarkModeToggle";

export default function Login({ darkMode, toggleDarkMode }) {
    return (
        <div>
            <div className="dark:bg-[#202020] dark:text-white relative">
                <div className="flex items-center justify-between pl-8 pr-12">
                    <div className="relative w-[120px] pt-5">
                        <Image src={darkMode ? LogoDark : Logo} alt="Logo" />
                    </div>
                    <div className="pt-2">
                        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} isLogin={true} />
                    </div>
                </div>
                <div className="flex flex-col">


                    <section className="flex">
                        <div className="w-1/2 hidden xs:block p-0 lg:pl-6 xl:pl-20 2xl:pl-0 mx-auto 2xl:mx-10">
                            <Image src={Dash} layout="responsive" alt="Dash" />
                        </div>
                        <div className="w-full xs:w-1/2 sm:w-2/5 lg:w-1/3 2xl:w-1/4 sm:mx-12 lg:mx-20 xl:mx-40 2xl:mx-auto">
                            <h1 className="text-30px font-black mb-3 text-center">LOG IN</h1>
                            <form className="lg:pt-12 lg:pb-6 lg:px-12 rounded-3xl">
                                <div>
                                    <div>
                                        <label className="text-12px md:text-18px font-black" htmlFor="email">Email Address</label>
                                        <input
                                            className="form-input text-12px md:text-16px py-1"
                                            name="email"
                                            id="email"
                                            type="email"
                                            maxLength="80"
                                            placeholder="Email Address"
                                            required />
                                    </div>
                                    <div>
                                        <div className="flex justify-between">
                                            <label className="text-12px md:text-18px font-black" htmlFor="password">Password</label>
                                            <a href="#" className="text-gray-500 text-8px md:text-12px font-bold pt-2">Forgot Password?</a>
                                        </div>
                                        <input
                                            className="form-input text-12px md:text-16px py-1"
                                            name="password"
                                            id="password"
                                            type="password"
                                            minLength="6"
                                            maxLength="100"
                                            placeholder="Password"
                                            required />
                                    </div>
                                    <button className="w-1/2 button-small button-deep-sky-blue mx-auto text-16px py-1 rounded-sm mt-8" type="submit">Log in</button>
                                    <div className="flex justify-between caption -mx-10 lg:-mx-12 my-8">
                                        <div className="w-1/4 h-4 border-gray-400 border-b-4"></div>
                                        <div className="">Or log in with</div>
                                        <div className="w-1/4 h-4 border-gray-400 border-b-4"></div>
                                    </div>
                                    <a href="#" className="button-small button-deep-sky-blue rounded-sm mx-auto text-12px md:text-16px pl-8">The Dynamics Discord<Image src={Discord} height={24} />
                                    </a>
                                </div>
                            </form>
                        </div>
                    </section>


                    <footer className="bg-deep-sky-blue lead text-white py-3">
                        <div className="flex items-center justify-center">
                            Don&#x27;t have an account?&nbsp;<a className="underline text-white" href="#">Become a member!</a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}