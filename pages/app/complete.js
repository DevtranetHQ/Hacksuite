import Image from "next/image";
import Link from "next/link";
import CountryInput from "../../components/form/CountryInput";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import TelInput from "../../components/form/TelInput";
import authImage from "../../public/assets/auth/auth-background.svg";
import { withAuth } from "../../server/middlewares/auth.middleware";

export default function Complete({ user }) {
    return (
        <div className="dark:bg-[#202020] dark:text-white flex flex-col min-h-screen">
            <div className="flex items-center justify-between px-12 py-5">
                <Logo />
                <DarkModeToggle className="w-[34px] h-[31px]" darkClassName="w-[25px] h-[35px]" />
            </div>
            <div className="flex grow shrink basis-[auto] justify-center">
                <form className="min-w-[60%] mb-14">
                    <h1 className="headline text-center">
                        Complete your profile{" "}
                        <span className="text-fruit-salad">{user.firstName}</span>
                    </h1>
                    <section className="my-5">
                        <h2 className="subheadline text-center">Demographic information</h2>
                        <div className="md:grid md:grid-cols-2 md:gap-4 my-4">
                            <div>
                                <label className="form-label font-normal" htmlFor="dob">
                                    Date of birth
                                    <span className="text-red-500">*</span>
                                </label>
                                <input className="form-input" id="dob" required type="date" />
                            </div>
                            <div>
                                <label className="form-label font-normal" htmlFor="gender">
                                    Gender
                                    <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="form-select"
                                    defaultValue="Prefer not to say"
                                    id="gender"
                                    required>
                                    <option value="Prefer not to say">Prefer not to say</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-4 my-4">
                            <div>
                                <label className="form-label font-normal" htmlFor="country">
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
                        <h2 className="subheadline text-center">Work and education</h2>
                        <div className="md:grid md:grid-cols-2 md:gap-4 my-4">
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="personal-describe">
                                    What describes you the best?
                                    <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="form-select"
                                    defaultValue="N/A"
                                    id="personal-describe"
                                    required>
                                    <option disabled value="N/A">
                                        Tell us who you are
                                    </option>
                                    <option value="Hacker">Hacker</option>
                                    <option value="Organizer">Organizer</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="personal-skills-and-interests">
                                    Skills and interests
                                    <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="form-select"
                                    defaultValue="N/A"
                                    id="personal-skills-and-interests">
                                    <option disabled value="N/A">
                                        Select your skills and interests
                                    </option>
                                    <option value="Web development">Web development</option>
                                    <option value="UI/UX">UI/UX</option>
                                </select>
                            </div>
                            <div>
                                <label className="form-label font-normal" htmlFor="study-level">
                                    Level of study
                                    <span className="text-red-500">*</span>
                                </label>
                                <select className="form-select" defaultValue="N/A" id="study-level">
                                    <option disabled value="N/A">
                                        Select level
                                    </option>
                                    <option value="High school or equivalent">
                                        High school or equivalent
                                    </option>
                                    <option value="Undergraduate degree">
                                        Undergraduate degree
                                    </option>
                                </select>
                            </div>
                        </div>
                    </section>
                    <div className="flex my-5 -mx-10">
                        <div className="w-1/2 h-4 border-gray-400 border-b-4"></div>
                        <button className="button-small button-deep-sky-blue block w-full self-center">
                            Complete your profile
                        </button>
                        <div className="w-1/2 h-4 border-gray-400 border-b-4"></div>
                    </div>
                </form>
            </div>
            {/* <footer className="block bg-deep-sky-blue py-2 lead text-white w-full">
                <div className="flex items-center justify-center">
                    Need to edit something?&nbsp;
                    <Link href="/signup">
                        <a className="underline text-white">Go back</a>
                    </Link>
                </div>
            </footer> */}
        </div>
    );
}

export const getServerSidePropsHandler = async ({ req, res }) => {
    const user = withAuth(req => req.$user)(req, res);

    return { props: { user } };
};
