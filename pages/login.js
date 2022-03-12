import { useState } from "react";
import { Helmet } from "react-helmet";
import Image from 'next/image';
import Logo from "../public/assets/logo.svg";
import Dash from "../public/assets/login-page-image.svg";
import Discord from "../public/assets/discord.svg"

export default function Login() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleDarkTheme = () => setDarkTheme(!darkTheme);

  return (
    <div className={`${darkTheme ? "dark" : ""}`}>
      <Helmet
        meta={[
          {
            name: "theme-color",
            content: darkTheme ? "#202020" : "#ffffff"
          }
        ]}
      />
      <div className="dark:bg-dark">
        <div className="flex flex-col">


<header className="flex justify-between">
  <div>
  <Image src={Logo} height={100} width={100} />
  </div>
  <h1 className="w-1/12 flex justify-center items-center cursor-pointer md:rotate-[-25deg] subheadline md:headline" onClick={toggleDarkTheme}>
    {!darkTheme &&
      <svg className="float-right text-black" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width=".7em" height=".7em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M31 27.19a1 1 0 0 0-1-.56h-.85a11 11 0 0 1-4.23-21.02a1 1 0 0 0 .61-1a1 1 0 0 0-.67-.91a14.7 14.7 0 0 0-5-.87a15.12 15.12 0 0 0 0 30.24a14.78 14.78 0 0 0 11-4.81a1 1 0 0 0 .14-1.07Zm-11.11 3.93a13.12 13.12 0 0 1 0-26.24a11.81 11.81 0 0 1 2 .16a13 13 0 0 0 5.72 23.53a12.75 12.75 0 0 1-7.72 2.55Z" /><path fill="none" d="M0 0h36v36H0z" /></svg>
    }
    {darkTheme &&
      <svg className="float-right text-white " xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width=".7em" height=".7em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007s-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414l2.121-2.121l1.414 1.414zM16.242 6.344l2.122-2.122l1.414 1.414l-2.122 2.122zM6.344 7.759L4.223 5.637l1.415-1.414l2.12 2.122zm13.434 10.605l-1.414 1.414l-2.122-2.122l1.414-1.414z" /></svg>
    }
  </h1>
</header>


<section className="flex -mt-10">
  <div className="w-1/2 hidden xs:block md:pl-6 xs:pl-0">
    <Image src={Dash} layout="responsive" />
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