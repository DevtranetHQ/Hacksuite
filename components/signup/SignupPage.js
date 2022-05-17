// TODO: Add name attribute to checkbox for "Notify me of upcoming events"
// TODO: Add reCAPTCHA
import Image from "next/image";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { Icon } from "@iconify/react";
import DarkModeToggle from "../DarkModeToggle";
import Logo from "../Logo";
import authImage from "../../public/assets/auth/auth-background.svg";
import LoadingButton from "../LoadingButton";
import { useContext } from "react";
import DarkModeContext from "../DarkModeContext";

export default function SignupPage({ handleSubmission, isLoading, signup }) {
  const { darkMode } = useContext(DarkModeContext);
  const [revealPassword, setRevealPassword] = useState(false);

  const toggleReveal = () => {
    setRevealPassword(!revealPassword);
    var id = document.getElementById("password");
    id.type = id.type === "password" ? "text" : "password";
  };
  return (
    <div className="dark:bg-[#000000] dark:text-white flex flex-col min-h-screen">
      <div className="flex items-center justify-between px-6 xs:pl-8 xs:pr-12">
        <Logo className="w-[80px] xs:w-[120px] pt-5" />
        <div className="pt-2">
          <DarkModeToggle
            className="w-[24px] h-[22px] xs:w-[34px] xs:h-[31px]"
            darkClassName="w-[18px] h-[25px] xs:w-[25px] xs:h-[35px]"
          />
        </div>
      </div>
      {signup.status === "error" && (
        <p className="font-body slide-bottom font-semibold md:text-20px text-[18px]  text-white text-center bg-[#D0342C] mx-auto mb-3 w-screen">
          Signup Failed! {signup.error.response?.data.message || signup.error.message}
        </p>
      )}
      <div className=" grow shrink grid grid-cols-1 md:grid-cols-20 dark:mxs:bg-mobile-login-dark mxs:bg-mobile-login mxs:mobile-signup">
        <div className="hidden xs:mt-48 xs:-mb-0.5 xs:self-end md:block md:col-span-9 sm:ml-2 lg:ml-6 xl:mt-36 xl:self-auto">
          <Image src={authImage} layout="responsive" alt="Dash" />
        </div>
        <div className="col-span-full mxs:mb-48 mxs:mt-12 md:col-span-11 xs:mx-4 lg:mx-12 2xl:w-1/2 2xl:mx-auto">
          <h1 className="text-42px text-center mb-14 xs:mb-10 font-bold">SIGN UP</h1>
          <form
            className="rounded-3xl mxs:pb-6 mxs:mx-1 xs:pl-10 xs:pr-8 lg:pt-14 lg:pb-9"
            onSubmit={handleSubmission}
            encType="multipart/form-data">
            <div className="xs:grid xs:grid-cols-2 gap-4">
              <div>
                <label className="form-label" htmlFor="firstName">
                  First name
                </label>
                <input
                  autoComplete="off"
                  className="form-input mxs:rounded-md mxs:text-16px dark:bg-[#E9E9E9]"
                  name="firstName"
                  id="firstName"
                  type="text"
                  maxLength="50"
                  placeholder="First name"
                  required
                />
              </div>
              <div>
                <label className="form-label" htmlFor="lastName">
                  Last name
                </label>
                <input
                  autoComplete="off"
                  className="form-input mxs:rounded-md mxs:text-16px dark:bg-[#E9E9E9]"
                  name="lastName"
                  id="lastName"
                  type="text"
                  maxLength="50"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div className="xs:grid xs:grid-cols-2 gap-4">
              <div>
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                <input
                  autoComplete="off"
                  className="form-input mxs:rounded-md mxs:text-16px dark:bg-[#E9E9E9]"
                  name="email"
                  id="email"
                  type="email"
                  maxLength="80"
                  placeholder="Email address"
                  required
                />
              </div>
              <div>
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-input mxs:rounded-md mxs:text-16px dark:bg-[#E9E9E9]"
                  name="password"
                  id="password"
                  type="password"
                  minLength="6"
                  maxLength="100"
                  placeholder="Password"
                  required
                />
                <Icon
                  className="text-[#A5A5A5] dark:text-[#7D7D7D] -mt-12 mr-4 float-right inline"
                  onClick={toggleReveal}
                  width="1.3em"
                  height="1.3em"
                  icon={
                    revealPassword ? "ant-design:eye-invisible-outlined" : "ant-design:eye-outlined"
                  }
                />
              </div>
            </div>
            <div className="mxs:-mx-10 flex justify-between mt-12 mb-5 -mr-8 -ml-10">
              <div className="mxs:w-12 w-20 xl:w-32 2xl:w-40 border-gray-400 h-4 border-b-4"></div>
              <div className="mxs:text-12px form-checkbox mt-1 2xl:ml-4 text-center">
                <input className="mxs:ml-0.5 mxs:mr-1" id="notify" type="checkbox" name="notify" />
                <label htmlFor="checkbox">Notify me about upcoming events & news</label>
              </div>
              <div className="mxs:w-12 w-20 xl:w-32 2xl:w-40 border-gray-400 h-4 border-b-4"></div>
            </div>
            <div className="mxs:mr-14 relative scale-67 xs:scale-75 xl:scale-80 mx-auto">
              <ReCAPTCHA
                className="w-fit mx-auto"
                sitekey="6LexReUeAAAAAF5a0KmF1tz26MWEFUwnhQ7crZAL"
                size="normal"
                theme={darkMode ? "dark" : "light"}
              />
            </div>
            <LoadingButton
              className="w-full mxs:rounded mxs:text-15px mxs:h-9 xs:w-56 lg:w-80 button-small button-deep-sky-blue mt-5 mx-auto"
              isLoading={isLoading}>
              Sign up
            </LoadingButton>
          </form>
        </div>
      </div>
      <footer className="block bg-deep-sky-blue py-1.5 xs:py-2 text-white w-full">
        <div className="mxs:text-16px flex items-center justify-center xs:lead">
          Already a member?&nbsp;
          <Link href="/login">
            <a className="underline text-white">Log in</a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
