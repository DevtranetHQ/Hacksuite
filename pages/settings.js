import Link from "next/link";
import { useState } from "react";
import CountryInput from "../components/form/CountryInput";
import TelInput from "../components/form/TelInput";
import DashNav from "../components/dash/DashNav";
import Avatar from "../components/Avatar";

// TODO: Remove test file
import profileImage from "../public/assets/TEST/profile.jpg";

export default function Settings() {
    // TODO: Get server-side props and fill these in with initial states so if user doesn't change value, it won't change when submitted to database
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [receiveEmails, setRecieveEmails] = useState(false);
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");

    async function handleSubmission(e) {
        e.preventDefault();
        // TODO: Edit account settings with above state
    }

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <DashNav active="/settings" />
            </div>
            <div className="col-span-10 p-10 relative">
                <div className="flex items-center justify-center pb-10">
                    <h1 className="ml-auto title">Account Settings</h1>
                    <div className="ml-auto">
                        <Link href="/notifications">
                            <div className="inline relative">
                                <svg
                                    className="cursor-pointer inline fill-deep-sky-blue mx-2"
                                    width="37"
                                    height="43"
                                    viewBox="0 0 37 43"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5833 38.125H22.4167C22.4167 40.2792 20.6542 42.0417 18.5 42.0417C16.3458 42.0417 14.5833 40.2792 14.5833 38.125ZM36.125 34.2084V36.1667H0.875V34.2084L4.79167 30.2917V18.5417C4.79167 12.4709 8.70833 7.18335 14.5833 5.42085V4.83335C14.5833 2.67919 16.3458 0.916687 18.5 0.916687C20.6542 0.916687 22.4167 2.67919 22.4167 4.83335V5.42085C28.2917 7.18335 32.2083 12.4709 32.2083 18.5417V30.2917L36.125 34.2084ZM28.2917 18.5417C28.2917 13.0584 23.9833 8.75002 18.5 8.75002C13.0167 8.75002 8.70833 13.0584 8.70833 18.5417V32.25H28.2917V18.5417Z" />
                                </svg>
                                <span className="absolute bg-[#FF9800] dark:bg-white h-4 w-4 rounded-full -top-3 right-2" />
                            </div>
                        </Link>
                    </div>
                </div>
                <Avatar image={profileImage} />
                <button className="button-small button-deep-sky-blue flex gap-2">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.50016 15.6667V8.66667H0.833496L9.00016 0.5L17.1668 8.66667H12.5002V15.6667H5.50016ZM0.833496 20.3333V18H17.1668V20.3333H0.833496Z"
                            fill="white"
                        />
                    </svg>
                    <span className="mt-1.5">Upload a picture</span>
                </button>
                <div className="my-5">
                    <form className="bg-transparent pl-0">
                        <h2 className="mb-5 subheadline">
                            Personal Information
                        </h2>
                        <div className="grid grid-cols-2 gap-10 mb-5">
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="firstName">
                                    First name
                                </label>
                                <input
                                    autoComplete="off"
                                    className="form-input"
                                    placeholder="John"
                                    id="firstName"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="lastName">
                                    Last name
                                </label>
                                <input
                                    autoComplete="off"
                                    className="form-input"
                                    placeholder="Doe"
                                    id="lastName"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label
                                className="form-label font-normal"
                                htmlFor="email">
                                Email address
                            </label>
                            <input
                                autoComplete="off"
                                className="form-input"
                                placeholder="johndoe@thedynamics.com"
                                id="email"
                                type="email"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                className="form-label font-normal"
                                htmlFor="phoneNumber">
                                Phone number
                            </label>
                            <TelInput />
                        </div>
                        <div className="grid grid-cols-2 gap-10 mb-5">
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="form-input"
                                    placeholder="*********"
                                    id="password"
                                    type="password"
                                />
                                <p className="caption xs mt-1.5">
                                    Leave blank if you don't want to change your
                                    password
                                </p>
                            </div>
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="passwordConfirmation">
                                    Password confirmation
                                </label>
                                <input
                                    className="form-input"
                                    placeholder="*********"
                                    id="passwordConfirmation"
                                    type="password"
                                />
                            </div>
                        </div>
                        <div className="form-checkbox mb-10">
                            <input id="checkbox" type="checkbox" />
                            <label htmlFor="checkbox">
                                Notify me about upcoming events & news
                            </label>
                        </div>
                        <h2 className="mb-5 subheadline">
                            Demographic Information
                        </h2>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-5 mb-10">
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="dob">
                                    Date of birth
                                </label>
                                <input
                                    className="form-input"
                                    id="dob"
                                    type="date"
                                />
                            </div>
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="gender">
                                    Gender
                                </label>
                                <select
                                    className="form-select"
                                    defaultValue="Prefer not to say"
                                    id="gender">
                                    <option value="Prefer not to say">
                                        Prefer not to say
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="country">
                                    Country of residence
                                </label>
                                <CountryInput />
                            </div>
                        </div>
                        <h2 className="mb-5 subheadline">Work and Education</h2>
                        <div className="grid grid-cols-2 gap-10 mb-5">
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="form-input"
                                    placeholder="*********"
                                    id="password"
                                    type="password"
                                />
                                <p className="caption xs mt-1.5">
                                    Leave blank if you don't want to change your
                                    password
                                </p>
                            </div>
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="passwordConfirmation">
                                    Password confirmation
                                </label>
                                <input
                                    className="form-input"
                                    placeholder="*********"
                                    id="passwordConfirmation"
                                    type="password"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
