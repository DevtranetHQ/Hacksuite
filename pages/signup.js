// TODO: Add name attribute to checkbox for "Notify me of upcoming events"
// TODO: Add reCAPTCHA
import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "../components/DarkModeToggle";
import Logo from "../components/Logo";
import authImage from "../public/assets/auth/auth-background.svg";
import LoadingButton from "../components/LoadingButton";
import {useState} from "react"
import {axios} from '../config/config';


//TODO: display message when user already exists and handle errors
//TODO: redirect to another page after the request returns suuccessfully

export default function Signup({ darkMode, toggleDarkMode }) {
    //states
    const [isLoading, setIsLoading] = useState(false);
    
    //constant values for the request
    const method = "POST";
 
    async function handleSubmission(e){
        e.preventDefault();

        setIsLoading(true)

        const endpoint = "/auth/register";
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const password = e.target.password.value;
        const email = e.target.email.value;

        try{
            const response = await axios({
                url: endpoint,
                method: method,
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    password: password,
                    email: email
                }
            })
            console.log(response.data);
        }
        catch(e){
            console.log("something went wrong");
            console.log(e.message);
        }
    }

    return (
        <div className="dark:bg-[#202020] dark:text-white flex flex-col min-h-screen">
            <div className="flex items-center justify-between px-12 py-5">
                <Logo darkMode={darkMode} />
                <DarkModeToggle
                    className="w-[34px] h-[31px]"
                    darkClassName="w-[25px] h-[35px]"
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />
            </div>
            <div className="flex grow shrink basis-[auto] grid grid-cols-5">
                <div className="col-span-2 flex items-end relative">
                    <Image src={authImage} />
                </div>
                <div className="col-span-3 md:p-7">
                    <h1 className="eyebrow text-center">Sign Up</h1>
                    <form onSubmit={handleSubmission} method={method}>
                        <div className="md:grid md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="form-label"
                                    htmlFor="firstName">
                                    First name
                                </label>
                                <input
                                    autoComplete="off"
                                    className="form-input"
                                    name="firstName"
                                    id="firstName"
                                    type="text"
                                    maxLength="50"
                                    placeholder="First name"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="form-label"
                                    htmlFor="lastName">
                                    Last name
                                </label>
                                <input
                                    autoComplete="off"
                                    className="form-input"
                                    name="lastName"
                                    id="lastName"
                                    type="text"
                                    maxLength="50"
                                    placeholder="Last name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="form-label" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    autoComplete="off"
                                    className="form-input"
                                    name="email"
                                    id="email"
                                    type="email"
                                    maxLength="80"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="form-label"
                                    htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="form-input"
                                    name="password"
                                    id="password"
                                    type="password"
                                    minLength="6"
                                    maxLength="100"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-between caption my-5 -mx-10">
                            <div className="w-1/4 h-4 border-gray-400 border-b-4"></div>
                            <div className="dark:text-white">
                                <div className="form-checkbox">
                                    <input id="checkbox" type="checkbox" />
                                    <label>
                                        Notify me about upcoming events
                                    </label>
                                </div>
                            </div>
                            <div className="w-1/4 h-4 border-gray-400 border-b-4"></div>
                        </div>
                        <LoadingButton className="button-small button-deep-sky-blue w-full mt-12 xl:w-64 xl:m-auto" isLoading={isLoading}>
                            Sign up
                        </LoadingButton>
                    </form>
                </div>
            </div>
            <footer className="block bg-deep-sky-blue py-2 lead text-white w-full">
                <div className="flex items-center justify-center">
                    Already a member?&nbsp;
                    <Link href="/login">
                        <a className="underline text-white">Log in</a>
                    </Link>
                </div>
            </footer>
        </div>
    );
}
