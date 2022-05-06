import Link from "next/link";
import Fade from "react-reveal/Fade";
import CountryInput from "../../components/form/CountryInput";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import TelInput from "../../components/form/TelInput";
import { withAuth } from "../../server/middlewares/auth.middleware";
import { useAuth } from "../../components/AuthContext";
import { useRouter } from "next/router";

export default function Complete({ user }) {
  const { completeProfile } = useAuth();
  const router = useRouter();

  const onSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    completeProfile.execute(user.id, data);
  };

  return (
    <div className="dark:bg-[#202020] dark:text-white flex flex-col min-h-screen">
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
        <Fade top>
          <p className="font-body font-semibold text-20px text-white bg-[#4CB050] text-center w-screen mb-5">
            Email Verification Successful!
          </p>
        </Fade>
      )}
      <div className="flex grow shrink basis-[auto] justify-center">
        <form className="mxs:my-16 mxs:mx-4 min-w-[60%] mb-14 pb-20" onSubmit={onSubmit}>
          <h1 className="headline text-center">
            Complete your profile <span className="text-fruit-salad">{user.firstName}</span>
          </h1>
          <section className="my-5">
            <h2 className="subheadline text-center mt-16 mb-9">Demographic information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div>
                <label className="form-label font-normal" htmlFor="dob">
                  Date of birth
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className="form-input text-[#A5A5A5]"
                  id="dob"
                  name="dob"
                  type="text"
                  placeholder="MM/DD/YYYY"
                  onFocus={e => (e.target.type = "date")}
                  onBlur={e => (e.target.type = "text")}
                  required
                />
              </div>
              <div>
                <label className="form-label font-normal" htmlFor="gender">
                  Gender
                  <span className="text-red-500">*</span>
                </label>
                <select
                  className="form-select"
                  defaultValue="Prefer not to say"
                  name="gender"
                  id="gender"
                  required>
                  <option value="Prefer not to say">Prefer not to say</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="form-label font-normal" htmlFor="countryOfResidence">
                  Country of residence
                  <span className="text-red-500">*</span>
                </label>
                {/* NOTE: Receive data from this component? */}
                <CountryInput />
              </div>
              <div>
                <label className="form-label font-normal" htmlFor="phoneNumber">
                  Phone number
                </label>
                <TelInput />
              </div>
            </div>
          </section>
          <section className="my-5">
            <h2 className="subheadline text-center my-12">Work and education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div>
                <label className="form-label font-normal" htmlFor="describe">
                  What describes you the best?
                  <span className="text-red-500">*</span>
                </label>
                <select className="form-select" defaultValue="N/A" id="describe" required>
                  <option disabled value="N/A">
                    Tell us who you are
                  </option>
                  <option value="Hacker">Hacker</option>
                  <option value="Organizer">Organizer</option>
                </select>
              </div>
              <div>
                <label className="form-label font-normal" htmlFor="skills">
                  Skills and interests
                  <span className="text-red-500">*</span>
                </label>
                <select
                  className="form-select"
                  defaultValue="N/A"
                  id="skills"
                  name="skills"
                  required>
                  <option disabled value="N/A">
                    Select your skills and interests
                  </option>
                  <option value="Web development">Web development</option>
                  <option value="UI/UX">UI/UX</option>
                </select>
              </div>
              <div>
                <label className="form-label font-normal" htmlFor="levelOfStudy">
                  Level of study
                  <span className="text-red-500">*</span>
                </label>
                <select
                  className="form-select"
                  defaultValue="N/A"
                  id="levelOfStudy"
                  name="levelOfStudy"
                  required>
                  <option disabled value="N/A">
                    Select level
                  </option>
                  <option value="High school or equivalent">High school or equivalent</option>
                  <option value="Undergraduate degree">Undergraduate degree</option>
                </select>
              </div>
            </div>
          </section>

          <div className="flex justify-between -mx-10">
            <div className="w-8 xs:w-14 border-b-4 border-[#A0A0A0] z-0"></div>
            <div className="w-full border-b-4 border-[#A0A0A0] z-0">
              <button className="w-full md:w-1/2 button-medium button-deep-sky-blue rounded-md mt-12 mx-auto z-10 -mb-6 text-16px xs:text-24px py-2">
                Complete your profile
              </button>
            </div>
            <div className="w-8 xs:w-6 border-b-4 border-[#A0A0A0] z-0"></div>
          </div>
        </form>
      </div>
      <footer className="bg-deep-sky-blue py-1.5 xs:py-3">
        <div className="mxs:text-18px text-28px flex items-center justify-center text-white font-medium xs:font-semibold">
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
