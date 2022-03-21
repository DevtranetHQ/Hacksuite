import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import DarkModeToggle from "../components/DarkModeToggle";
import Logo from "../components/Logo";
import authImage from "../public/assets/auth/auth-background.svg";
import discordImage from "../public/assets/discord.svg";

export default function Login() {
    const [revealPassword, setRevealPassword] = useState(false);

    const toggleReveal = () => {
        setRevealPassword(!revealPassword);
        var id = document.getElementById("password");
        id.type = id.type === "password" ? "text" : "password";
    };
    return (
        <div className="dark:bg-[#202020] dark:text-white relative">
            <div className="flex items-center justify-between pl-8 pr-12">
                <Logo className="w-[120px] pt-5" />
                <div className="pt-2">
                    <DarkModeToggle
                        className="w-[34px] h-[31px]"
                        darkClassName="w-[25px] h-[35px]"
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex">
                    <div className="w-1/2 -m-[1px] hidden xs:block p-0 lg:pl-4 xl:pl-20 2xl:pl-0 mx-auto 2xl:mx-0 pt-9">
                        <Image src={authImage} layout="responsive" alt="Dash" />
                    </div>
                    <div className="w-full xs:w-1/2 sm:w-2/5 lg:w-1/3 2xl:w-1/4 sm:mx-12 lg:mx-20 xl:ml-44 xl:mr-40 2xl:mx-auto 2xl:mt-20">
                        <h1 className="text-30px mb-3 text-center font-black mb-1">
                            LOG IN
                        </h1>
                        <form className="lg:pt-12 lg:pb-6 lg:px-12 rounded-3xl">
                            <div>
                                <div>
                                    <label
                                        className="text-12px md:text-18px font-bold"
                                        htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        className="form-input text-12px md:text-16px rounded-lg py-1"
                                        name="email"
                                        id="email"
                                        type="email"
                                        maxLength="80"
                                        placeholder="Email Address"
                                        required
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <label
                                            className="text-12px md:text-18px font-bold"
                                            htmlFor="password">
                                            Password
                                        </label>
                                        <a
                                            href="#"
                                            className="text-[#595959] dark:text-[#DDDDDD] text-8px md:text-12px font-bold pt-2">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <input
                                        className="form-input text-12px md:text-16px rounded-lg py-1"
                                        name="password"
                                        id="password"
                                        type="password"
                                        minLength="6"
                                        maxLength="100"
                                        placeholder="Password"
                                        required
                                    />
                                    <Icon
                                        className="text-[#A5A5A5] dark:text-[#7D7D7D] -mt-11 mr-4 float-right inline text-gray-500"
                                        onClick={toggleReveal}
                                        width="1.3em"
                                        height="1.3em"
                                        icon={
                                            revealPassword
                                                ? "ant-design:eye-invisible-outlined"
                                                : "ant-design:eye-outlined"
                                        }
                                    />
                                </div>
                                <button
                                    className="w-36 button-small button-deep-sky-blue mx-auto text-12px md:text-16px py-1 rounded mt-8 h-8"
                                    type="submit">
                                    Log in
                                </button>
                                <div className="flex justify-between -mx-10 lg:-mx-12 my-8">
                                    <div className="w-1/4 h-4 border-[#A0A0A0] border-b-4"></div>
                                    <div className="text-[#595959] dark:text-[#FFFFFF] text-12px md:text-18px">
                                        Or log in with
                                    </div>
                                    <div className="w-1/4 h-4 border-[#A0A0A0] border-b-4"></div>
                                </div>
                                <a
                                    href="#"
                                    className="button-small button-deep-sky-blue rounded-md mx-auto text-12px lg:text-16px pl-8 sm:pr-0 lg:pr-auto">
                                    The Dynamics Discord
                                    <Image src={discordImage} height={24} />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <footer className="bg-deep-sky-blue lead text-white py-3">
                    <div className="flex items-center justify-center">
                        Don&#x27;t have an account?&nbsp;
                        <a className="underline text-white" href="#">
                            Become a member!
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
}