import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import CountryInput from "../../components/form/CountryInput";
import TelInput from "../../components/form/TelInput";
import { useAuth } from "../../hooks/useAuth";
// Animation Package for the trigger messages
import Fade from "react-reveal/Fade";

export default function Profile() {
  return (
    <div className="dark:bg-[#202020] dark:text-white relative">
      <div className="flex items-center justify-between pl-8 pr-12">
        <Logo className="w-[120px] pt-5" />
        <div className="pt-2">
          <DarkModeToggle className="w-[34px] h-[31px]" darkClassName="w-[25px] h-[35px]" />
        </div>
      </div>

      {/* Successful Email Verification Trigger Message */}
      {verifyEmail !== "success" && (
        <Fade top>
          <p className="font-body font-semibold text-20px text-white bg-[#4CB050] text-center w-screen mb-5">
            Email Verification Successful!
          </p>
        </Fade>
      )}

      <div className="rounded-3xl bg-[#F4F4F4] dark:bg-[#444444] pt-12 pb-20 px-6 xs:pl-14 xs:pr-6 mx-6 xs:mx-8 lg:mx-32 xl:mx-64 mt-12 mb-20">
        <p className="text-24px xs:text-42px font-bold text-center">
          Complete your profile <span className="text-[#4cb050]">John</span>
        </p>
        <p className="text-18px xs:text-30px font-semibold mt-16 mb-9 xs:text-center">
          Demographic information
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 sm:gap-y-0">
          <div>
            <label className="form-label font-normal" htmlFor="dob">
              Date of birth
              <span className="text-[#ff0000]">*</span>
            </label>
            <input
              className="form-input unstyled text-[#6e7180]"
              id="dob"
              name="dob"
              type="text"
              placeholder="MM/DD/YYYY"
              onFocus={e => (e.target.type = "date")}
              // onBlur={(e) => (e.target.type = "text")}
            />
            <style jsx>{`
              .unstyled::-webkit-inner-spin-button,
              .unstyled::-webkit-calendar-picker-indicator {
                display: none;
                -webkit-appearance: none;
              }
            `}</style>
          </div>
          <div>
            <label className="form-label font-normal" htmlFor="gender">
              Gender
            </label>
            <select className="form-select" defaultValue="Select gender" id="gender" name="gender">
              <option value="Select gender" disabled hidden>
                Select gender
              </option>
              <option value="Prefer not to say">Prefer not to say</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="form-label font-normal" htmlFor="country">
              Country of residence
              <span className="text-[#ff0000]">*</span>
            </label>
            <CountryInput />
          </div>
          <div>
            <label className="form-label font-normal" htmlFor="phoneNumber">
              Phone number
            </label>
            <TelInput />
          </div>
        </div>

        <p className="text-18px xs:text-30px font-semibold my-12 xs:text-center">
          Work and education
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
          <div>
            <label className="form-label font-normal" htmlFor="personalDescription">
              What describes you the best?
              <span className="text-[#ff0000]">*</span>
            </label>
            <select className="form-select" id="personalDescription">
              <option>Mentor</option>
            </select>
          </div>
          <div>
            <label className="form-label font-normal" htmlFor="skillsAndInterests">
              Skills and interests
              <span className="text-[#ff0000]">*</span>
            </label>
            <select className="form-select" id="skillsAndInterests">
              <option value="some option">Skipping</option>
            </select>
          </div>
          <div>
            <label className="form-label font-normal" htmlFor="levelOfStudy">
              Level of study?
              <span className="text-[#ff0000]">*</span>
            </label>
            <select
              className="form-select"
              defaultValue="High school"
              id="levelOfStudy"
              name="levelOfStudy">
              <option value="High school">High school</option>
              <option value="College">College</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="-ml-6 w-6 xs:-ml-14 xs:w-14 border-b-4 border-[#A0A0A0] z-0"></div>
          <div className="w-full border-b-4 border-[#A0A0A0] z-0">
            <button className="w-5/6 md:w-1/2 button-medium button-deep-sky-blue rounded-md mt-12 mx-auto z-10 -mb-6 text-16px xs:text-24px py-2">
              Complete your profile
            </button>
          </div>
          <div className="-mr-6 w-6 border-b-4 border-[#A0A0A0] z-0"></div>
        </div>
      </div>

      <footer className="bg-deep-sky-blue lead text-white py-4">
        <div className="flex items-center justify-center">
          Need to edit something?&nbsp;
          <a className="underline text-white" href="#">
            Go back
          </a>
        </div>
      </footer>
    </div>
  );
}
