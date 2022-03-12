import Image from 'next/image';
import Link from 'next/link'
import Logo from "../public/assets/logo.svg";
import Dash from "../public/assets/login-page-image.svg";
import Discord from "../public/assets/discord.svg"

import DarkModeToggle from "../components/DarkModeToggle";

export default function Login({ darkMode, toggleDarkMode }) {
  return (
    <div>
      <div className="dark:bg-[#202020] dark:text-white relative">
        <div className="flex items-center justify-between">
          <div className="relative w-[150px]">
            <Image src={Logo} alt="Logo"/>
          </div>
          <div className="ml-auto">
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
          </div>
        </div>
        <div className="flex flex-col">


<section className="flex -mt-10">
  <div className="w-1/2 hidden xs:block md:pl-6 xs:pl-0">
    <Image src={Dash} layout="responsive" alt="Dash" />
  </div>
  <div className="w-full xs:w-1/2 lg:w-1/3 2xl:w-1/4 sm:mx-0 md:mx-6 lg:mx-24 xl:mx-36 mt-10">
    <h1 className="text-30px font-black mb-3 text-center">LOG IN</h1>
    <form className="pt-12 pb-6 px-12">
      <div>
        <div>
          <label className="text-18px font-black" htmlFor="email">Email Address</label>
          <input
            className="form-input text-16px py-1"
            name="email"
            id="email"
            type="email"
            maxLength="80"
            placeholder="Email Address"
            required/>
        </div>
        <div>
          <div className="flex justify-between">
            <label className="text-18px font-black" htmlFor="password">Password</label>
            <a href="#" className="text-gray-500 text-12px font-bold pt-2">Forgot Password?</a>
          </div>
          <input
            className="form-input text-16px py-1"
            name="password"
            id="password"
            type="password"
            minLength="6"
            maxLength="100"
            placeholder="Password"
            required/>
        </div>
        <button className="button-small button-deep-sky-blue mx-auto w-1/2 text-16px py-1 rounded mt-8" type="submit">Log in</button>
        <div className="flex justify-between caption -mx-10 my-8">
          <div className="w-1/4 h-4 border-gray-400 border-b-4"></div>
          <div className="">Or log in with</div>
          <div className="w-1/4 h-4 border-gray-400 border-b-4"></div>
        </div>
        <a className="button-small button-deep-sky-blue mx-auto text-16px pl-8">The Dynamics Discord<Image src={Discord} height={24} />
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