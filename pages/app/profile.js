import Link from "next/link";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import TelInput from "../../components/form/TelInput";
import CountryInput from "../../components/form/CountryInput";
import { withAuth } from "../../server/middlewares/auth.middleware";
import { useAuth } from "../../components/AuthContext";
import { useRouter } from "next/router";
import TextareaAutosize from "react-textarea-autosize";
import AvailableForSelect from "../../components/profile/LevelOfStudy";
import DescribeSelect from "../../components/profile/ProfileDescribeInput";

export default function Profile({ user }) {
  const { completeProfile } = useAuth();
  const router = useRouter();

  const onSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    completeProfile.execute(user.id, data);
  };

  return (
    <div className="dark:bg-[#202020] dark:text-white relative">
      <div className="flex items-center justify-between px-6 xs:pl-8 xs:pr-12">
        <Logo className="w-[80px] xs:w-[120px] pt-5" />
        <div className="pt-2">
          <DarkModeToggle
            className="w-[24px] h-[22px] xs:w-[34px] xs:h-[31px]"
            darkClassName="w-[18px] h-[25px] xs:w-[25px] xs:h-[35px]"
          />
        </div>
      </div>

      {router.query.verified && (
        <p className="font-body font-semibold text-20px text-white bg-[#4CB050] text-center w-screen mb-5">
          Email Verification Successful!
        </p>
      )}

      <form
        className="mxs:my-16 mxs:pt-7 mxs:pb-14 mxs:rounded-[20px] rounded-3xl bg-[#F4F4F4] dark:bg-[#444444] pt-12 pb-20 px-8 xs:pl-14 xs:pr-6 mx-4 xs:mx-8 lg:mx-32 xl:mx-64 mt-12 mb-20"
        onSubmit={onSubmit}>
        <p className="text-36px xs:text-42px font-bold text-center">
          Complete your profile <span className="text-[#4cb050]">{user.firstName}</span>
        </p>
        <p className="mxs:-mr-4 text-24px xs:text-30px font-semibold mt-16 mb-9 xs:text-center">
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
              onBlur={e => (e.target.type = "text")}
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
            <select
              className="form-select rounded-lg"
              defaultValue="Select gender"
              id="gender"
              name="gender">
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
            <label className="form-label font-normal" htmlFor="countryOfResidence">
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

        <p className="mxs:mt-[52px] mxs:mb-9 text-24px xs:text-30px font-semibold my-12 xs:text-center">
          Work and education
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mxs:gap-y-4 gap-y-2">
          <div>
            <label className="form-label font-normal" htmlFor="describe">
              What describes you the best?
              <span className="text-[#ff0000]">*</span>
            </label>
            <DescribeSelect />
          </div>
          <div>
            <label className="form-label font-normal" htmlFor="skillsAndInterests">
              Skills and interests
            </label>
            <TextareaAutosize
              className="resize-none form-input box-border"
              minRows={1}
              maxRows={6}
              maxLength={120}
              placeholder="Coding languages, frameworks or soft skills..."
            />
          </div>
          <div>
            <label className="form-label font-normal" htmlFor="levelOfStudy">
              I'm available for
            </label>
            <AvailableForSelect />
          </div>
          <div>
            <label className="form-label font-normal" htmlFor="">
              Your headline
            </label>
            <input
              autoComplete="off"
              className="form-input"
              placeholder="Write something..."
              type="text"
              maxLength={50}
              // {...register("headline")}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="-ml-8 xs:-ml-14 w-8 xs:w-14 border-b-4 border-[#A0A0A0] z-0"></div>
          <div className="w-full border-b-4 border-[#A0A0A0] z-0">
            <button className="w-full md:w-1/2 button-medium button-deep-sky-blue rounded-md mt-12 mx-auto z-10 -mb-6 text-16px xs:text-24px py-2">
              Complete your profile
            </button>
          </div>
          <div className="-mr-8 xs:-mr-6 w-8 xs:w-6 border-b-4 border-[#A0A0A0] z-0"></div>
        </div>
      </form>

      <footer className="">
        <div className="mxs:text-18px text-28px py-1.5 xs:py-3 bg-deep-sky-blue flex items-center justify-center text-white font-medium xs:font-semibold">
          Need help with something?&nbsp;
          <Link href="mailto:team@thedynamics.tech">
            <a className="underline text-white">Contact us</a>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const user = await withAuth(req => req.$user)(req, res);

  return { props: { user } };
};
