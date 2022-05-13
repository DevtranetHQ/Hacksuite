import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import DarkModeToggle from "../components/DarkModeToggle";
import Logo from "../components/Logo";
import authImage from "../public/assets/auth/auth-background.svg";
import discordImage from "../public/assets/discord.svg";
import { useRouter } from "next/router";
import { useAuth } from "../components/AuthContext";
import LoadingButton from "../components/LoadingButton";
import { decodeToken } from "../server/utils/auth";

export default function Login({ loginError, token, resetError, reset }) {
  const [revealPassword, setRevealPassword] = useState(false);
  const router = useRouter();
  const { login, setToken } = useAuth();
  const onLogin = async e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login.execute(email, password);
  };
  const toggleReveal = () => {
    setRevealPassword(r => !r);
    const id = document.getElementById("password");
    id.type = id.type === "password" ? "text" : "password";
  };
  useEffect(() => {
    if (token) {
      setToken(token);
      router.push("/");
    }
  }, [setToken, router, token]);
  return (
    <div className="dark:bg-[#000000] dark:text-white relative">
      <div className="flex items-center justify-between px-6 xs:pl-8 xs:pr-12">
        <Logo className="w-[80px] xs:w-[120px] pt-5" />
        <div className="pt-1.5">
          <DarkModeToggle
            className="w-[26px] h-[24px] xs:w-[34px] xs:h-[31px]"
            darkClassName="w-[19px] h-[27px] xs:w-[25px] xs:h-[35px]"
          />
        </div>
      </div>
      {login.status === "error" && (
        <p className="font-body slide-bottom font-semibold md:text-20px text-[18px]  text-white text-center bg-[#D0342C] mx-auto mb-3 w-screen">
          Login Failed! {login.error.response?.data.message || login.error.message}
        </p>
      )}
      {token && (
        <p className="font-body slide-bottom font-semibold md:text-20px text-[18px]  text-white text-center bg-[#4CB050] mx-auto mb-3 w-screen">
          Login successful! Redirecting...
        </p>
      )}
      {loginError && (
        <p className="font-body slide-bottom font-semibold md:text-20px text-[18px]  text-white text-center bg-[#D0342C] mx-auto mb-3 w-screen">
          {loginError}
        </p>
      )}
      {reset && (
        <p className="font-body slide-bottom font-semibold md:text-20px text-[18px]  text-white text-center bg-[#4CB050] mx-auto mb-3 w-screen">
          Password reset successful! Login with your new password.
        </p>
      )}
      {resetError && (
        <p className="font-body slide-bottom font-semibold md:text-20px text-[18px]  text-white text-center bg-[#D0342C] mx-auto mb-3 w-screen">
          {resetError}
        </p>
      )}
      <div className="flex mxs:bg-mobile-login dark:mxs:bg-mobile-login-dark mxs:-mb-0.5">
        <div className="xs:block xs:w-1/2 xs:-m-[1px] xs:p-0 xs:pt-9 xs:mx-auto lg:pl-4 xl:pl-20 2xl:pl-0 2xl:mx-0">
          <Image src={authImage} layout="responsive" alt="Dash" />
        </div>
        <div className="w-full mxs:mb-[10.8rem] mxs:mt-12 xs:w-1/2 sm:w-2/5 lg:w-1/3 2xl:w-1/4 sm:mx-12 lg:mx-20 xl:ml-44 xl:mr-40 2xl:mx-auto 2xl:mt-20">
          <h1 className="text-36px mb-14 text-center font-black xs:text-30px xs:mb-1">LOG IN</h1>
          <form
            className="rounded-3xl mxs:pb-5 mxs:mx-2 lg:pt-12 lg:pb-6 lg:px-12"
            onSubmit={onLogin}>
            <div>
              <div>
                <label
                  className="font-semibold xs:text-12px md:text-18px xs:font-bold xs:mb-1"
                  htmlFor="email">
                  Email Address
                </label>
                <input
                  className="form-input text-12px rounded-lg dark:bg-[#E9E9E9] xs:py-1 md:text-16px"
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
                    className="font-semibold xs:text-12px md:text-18px xs:font-bold xs:mb-1"
                    htmlFor="password">
                    Password
                  </label>
                  <Link href="/forgot-password">
                    <a className="text-[#595959] dark:text-[#DDDDDD] text-8px font-bold pt-2 md:text-12px">
                      Forgot Password?
                    </a>
                  </Link>
                </div>
                <input
                  className="form-input text-12px rounded-lg dark:bg-[#E9E9E9] xs:py-1 md:text-16px"
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
                    revealPassword ? "ant-design:eye-invisible-outlined" : "ant-design:eye-outlined"
                  }
                />
              </div>
              <LoadingButton
                className="w-28 xs:w-36 py-0 button-small button-deep-sky-blue mx-auto text-15px md:text-16px rounded mt-6 h-8 xs:mt-8 xs:h-8 xs:py-1 "
                type="submit"
                isLoading={login.status === "pending"}>
                Login
              </LoadingButton>
              <div className="flex justify-between -mx-10 my-6 lg:-mx-12 xs:my-8">
                <div className="w-1/4 h-4 border-[#A0A0A0] border-b-4"></div>
                <div className="text-[#595959] dark:text-[#FFFFFF] text-15px md:text-18px mxs:pt-1">
                  Or log in with
                </div>
                <div className="w-1/4 h-4 border-[#A0A0A0] border-b-4"></div>
              </div>
              <Link href="/discord/login">
                <a className="button-small button-deep-sky-blue rounded-md mx-auto text-15px pr-0.5 lg:text-16px xs:pl-8 lg:pr-0">
                  The Dynamics Discord
                  <Image src={discordImage} height={24} alt="Join The Dynamics Discord" />
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <footer className="bg-deep-sky-blue text-white py-1.5 xs:py-3">
        <div className="flex items-center justify-center mxs:text-16px xs:lead">
          Don&#x27;t have an account?&nbsp;
          <Link href="/signup">
            <a className="underline text-white">Become a member!</a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
export async function getServerSideProps({ req, res, query }) {
  if (req.cookies.token) {
    res.writeHead(302, {
      Location: `/app`
    });
    res.end();
  }
  if (query.loginError) {
    return {
      props: {
        loginError: query.loginError
      }
    };
  }
  if (query.resetError) {
    return {
      props: {
        resetError: query.resetError
      }
    };
  }
  if (query.reset) {
    return {
      props: {
        reset: true
      }
    };
  }
  if (query.token) {
    try {
      const valid = await decodeToken(query.token);
      if (valid) {
        return {
          props: {
            token: query.token
          }
        };
      }
    } catch (error) {
      return { props: {} };
    }
  }
  return { props: {} };
}
