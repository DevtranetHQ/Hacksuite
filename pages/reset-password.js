import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import DarkModeToggle from "../components/DarkModeToggle";
import Logo from "../components/Logo";
import authImage from "../public/assets/auth/auth-background.svg";
import { useRouter } from "next/router";
import { useAuth } from "../components/AuthContext";
import authService from "../server/modules/auth/auth.service";
import ReCAPTCHA from "react-google-recaptcha";
import DarkModeContext from "../components/DarkModeContext";
import { useContext } from "react";

export default function ResetPassword() {
  const router = useRouter();
  const { resetPassword } = useAuth();
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const { darkMode } = useContext(DarkModeContext);
  const [revealPassword, setRevealPassword] = useState(false);

  const toggleReveal = () => {
    setRevealPassword(r => !r);
    const id = document.getElementById("password");
    id.type = id.type === "password" ? "text" : "password";
  };

  const submitReset = async e => {
    e.preventDefault();

    const pass1 = e.target.password.value;
    const pass2 = e.target.password2.value;

    if (router.query.uid && router.query.resetToken) {
      await resetPassword.execute({
        userId: router.query.uid,
        resetToken: router.query.resetToken,
        password: pass1,
        confirmPassword: pass2
      });
    }
  };

  if (resetPassword.status === "success") {
    return "Password Reset Successfully";
  }

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

      {resetPassword.status === "success" && (
        <div className="bg-green-500 slide-bottom text-center text-white p-1 font-semibold md:text-24px text-[17px] mt-3 w-screen mb-5">
          <p>Password Successfully Changed! Redirecting...</p>
        </div>
      )}
      {resetPassword.status === "error" && (
        <div className="bg-[#D0342C] slide-bottom text-center text-white p-1 font-semibold md:text-24px text-16px mt-3 w-screen mb-5">
          <p>{resetPassword.error.response?.data.message || resetPassword.error.message}</p>
        </div>
      )}

      <div className="flex mxs:bg-mobile-login dark:mxs:bg-mobile-login-dark mxs:-mb-0.5">
        <div className="xs:block xs:w-1/2 xs:-m-[1px] xs:p-0 xs:pt-9 xs:mx-auto lg:pl-4 xl:pl-20 2xl:pl-0 2xl:mx-0">
          <Image src={authImage} layout="responsive" alt="Dash" />
        </div>
        <div className="w-full mxs:mb-[10.8rem] mxs:mt-12 xs:w-1/2 sm:w-2/5 lg:w-1/3 2xl:w-1/4 sm:mx-12 lg:mx-20 xl:ml-44 xl:mr-40 2xl:mx-auto 2xl:mt-20">
          <h1 className="text-36px mb-14 text-center font-black xs:text-30px xs:mb-4">
            RESET PASSWORD
          </h1>
          <form
            className="rounded-3xl mxs:pb-5 mxs:mx-2 lg:pt-12 lg:pb-6 lg:px-12"
            onSubmit={submitReset}>
            <div>
              <div>
                <label
                  className="font-semibold xs:text-12px md:text-18px xs:font-bold xs:mb-1"
                  htmlFor="password">
                  New Password
                </label>
                <input
                  className="form-input text-12px rounded-lg dark:bg-[#E9E9E9] xs:py-1 md:text-16px"
                  name="password"
                  id="password"
                  type="password"
                  minLength="6"
                  maxLength="100"
                  placeholder="Enter new password"
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
              <div>
                <label
                  className="font-semibold xs:text-12px md:text-18px xs:font-bold xs:mb-1"
                  htmlFor="password2">
                  Confirm Password
                </label>
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
                  placeholder="Confirm new password"
                  required
                />
                {passwordMismatch && (
                  <p className="font-body font-normal text-18px text-[#D0342C] flex items-center mx-auto justify-center -mt-3">
                    Password must match!
                  </p>
                )}
              </div>
              <div className="mxs:mr-14 relative scale-50 md:scale-67 xl:scale-70 mx-auto mt-6">
                <ReCAPTCHA
                  className="w-fit mx-auto"
                  sitekey="6LexReUeAAAAAF5a0KmF1tz26MWEFUwnhQ7crZAL"
                  size="normal"
                  theme={darkMode ? "dark" : "light"}
                />
              </div>
              <button
                className="rounded-md button-small button-deep-sky-blue mx-auto text-15px md:text-16px mt-5 h-8 py-0 xs:py-1 px-6 md:px-10"
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

export async function getServerSideProps({ query, req, res }) {
  if (req.cookies.token) {
    res.writeHead(302, {
      Location: `/app`
    });
    res.end();
  }

  try {
    await authService.verifyResetToken({ userId: query.uid, resetToken: query.resetToken });
  } catch (err) {
    console.error(err);
    const params = new URLSearchParams({ resetError: `Invalid or expired reset link.` });

    res.writeHead(302, {
      Location: `/login?${params}`
    });
    res.end();
  }

  return {
    props: {}
  };
}
