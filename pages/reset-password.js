import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import DarkModeToggle from "../components/DarkModeToggle";
import Logo from "../components/Logo";
import authImage from "../public/assets/auth/auth-background.svg";
import { useRouter } from "next/router";
// Animation Package for the trigger messages
import Fade from "react-reveal/Fade";
import { useAuth } from "../components/AuthContext";

export default function ResetPassword() {
  const router = useRouter();
  const [revealPassword, setRevealPassword] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  // To enable trigger message for the password reset
  const [passwordReset, setPasswordReset] = useState(true);

  const toggleReveal = () => {
    setRevealPassword(!revealPassword);
    var id = document.getElementById("password");
    id.type = id.type === "password" ? "text" : "password";
  };

  const { resetPassword } = useAuth();
  const submitReset = async e => {
    e.preventDefault();

    const pass1 = e.target.password.value;
    const pass2 = e.target.password2.value;

    // If Password and Confirm Passowrd do not match
    if (pass1 !== pass2) {
        setPasswordMismatch(true);
    }

    if (router.query.uid && router.query.resetToken) {
      const data = {
        userId: router.query.uid,
        resetToken: router.query.resetToken,
        password: pass1
      };

      await resetPassword.execute(data);
    }

    // Condition for the trigger message 
    if (resetPassword.status === "success") {
      setPasswordReset(false);
    }
  };

  if (resetPassword.status === "success") {
    return "Password Reset Successfully";
  }
  

  return (
    <div className="dark:bg-[#202020] dark:text-white relative">
      <div className="flex items-center justify-between px-6 xs:pl-8 xs:pr-12">
        <Logo className="w-[80px] xs:w-[120px] pt-5" />
        <div className="pt-1.5">
          <DarkModeToggle
            className="w-[26px] h-[24px] xs:w-[34px] xs:h-[31px]"
            darkClassName="w-[19px] h-[27px] xs:w-[25px] xs:h-[35px]"
          />
        </div>
      </div>

      {/* Trigger Messages for successful/failed pasword */}    
      {/* // <Fade top>
      //   <div className="bg-green-500 text-center text-white p-1 font-semibold md:text-24px text-[17px] mt-3 w-screen mb-5">
      //     <p>Password Successfully Changed! Redirceting...</p>
      //   </div>
      // </Fade> */}
      {!passwordReset && (
        <Fade top>
          <div className="bg-[#D0342C] text-center text-white p-1 font-semibold md:text-24px text-16px mt-3 w-screen mb-5">
            <p>Password Reset Failed! Try again...</p>
          </div>
        </Fade>
      )}

      <div className="flex mmd:bg-mobile-login justify-center">
        <div className="md:block md:w-1/2 md:-m-[1px] md:p-0 xs:pt-9 md:mx-auto lg:pl-4 xl:pl-20 2xl:pl-0 2xl:mx-0">
          <Image src={authImage} layout="responsive" alt="Dash" />
        </div>
        <div className="w-full mmd:mb-[10.8rem] px-6 pb-8 mxs:mt-12 sm:w-4/5 lg:w-3/6 2xl:w-1/4 sm:mx-12 lg:mx-20 xl:ml-44 xl:mr-40 2xl:mx-auto 2xl:mt-20">
          <h1 className="text-36px mb-14 text-center font-black xs:text-30px xs:mb-10">
            RESET PASSWORD
          </h1>
          <form
            className="rounded-3xl mxs:pb-5 mxs:mx-2 lg:pt-12 lg:pb-6 lg:px-12"
            onSubmit={submitReset}>
            <div>
              <div>
                <div className="flex justify-between">
                  <label
                    className="font-semibold xs:text-12px md:text-18px xs:font-bold xs:mb-1"
                    htmlFor="password">
                    New Password
                  </label>
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
                  className="dark:text-[#7D7D7D] -mt-11 mr-4 float-right inline text-gray-500"
                  onClick={toggleReveal}
                  width="1.3em"
                  height="1.3em"
                  icon={
                    revealPassword ? "ant-design:eye-invisible-outlined" : "ant-design:eye-outlined"
                  }
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    className="font-semibold xs:text-12px md:text-18px xs:font-bold xs:mb-1"
                    htmlFor="password2">
                    Confirm Password
                  </label>
                </div>
                <input
                  className={
                    !passwordMismatch
                      ? "form-input text-12px rounded-lg dark:bg-[#E9E9E9] xs:py-1 md:text-16px"
                      : "border-2 border-red-600 form-input text-12px rounded-lg dark:bg-[#E9E9E9] xs:py-1 md:text-16px"
                  }
                  name="password2"
                  id="password2"
                  type="password"
                  minLength="6"
                  maxLength="100"
                  placeholder="Confirm New Password"
                  required
                />
                <Icon
                  className="dark:text-[#7D7D7D] -mt-11 mr-4 float-right inline text-gray-500"
                  onClick={toggleReveal}
                  width="1.3em"
                  height="1.3em"
                  icon={
                    revealPassword ? "ant-design:eye-invisible-outlined" : "ant-design:eye-outlined"
                  }
                />
                {passwordMismatch && (
                  <p className="font-body font-normal text-18px text-[#D0342C] flex items-center mx-auto justify-center -mt-3">
                    Password must match!
                  </p>
                )}
              </div>
              <button
                className="w-4/5 py-0 button-small button-deep-sky-blue mx-auto text-15px md:text-16px rounded mt-6 h-8 xs:mt-8 xs:h-8 xs:py-1"
                type="submit">
                Update my password
              </button>
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

export async function getServerSideProps(context) {
  if (context.req.cookies.token) {
    context.res.writeHead(302, {
      Location: `/app`
    });
    context.res.end();
  }

  return {
    props: {}
  };
}
