// TODO: Add reCAPTCHA
import Link from "next/link";
import { useState } from "react";
import CountryInput from "../components/form/CountryInput";
import TelInput from "../components/form/TelInput";
import DashNav from "../components/dash/DashNav";
import DarkModeToggle from "../components/DarkModeToggle";
import NotificationsLink from "../components/dash/NotificationsLink";
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
    const [personalDescribe, setPersonalDescribe] = useState([]); // What describes you the best?
    const [
        personalSkillsAndInterests,
        setPersonalSkillsAndInterests
    ] = useState([]); // Skills and interests
    const [studyLevel, setStudyLevel] = useState("");
    const [resumeFiles, setResumeFiles] = useState([]);

    async function uploadProfile(e) {
        e.preventDefault();
        // TODO: Update profile image in database
    }

    async function handleSubmission(e) {
        e.preventDefault();
        // TODO: Edit account settings with above state
        // NOTE: If user changes password, make sure that password and password confirmation are the same
    }

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <DashNav active="/settings" />
            </div>
            <div className="dark:bg-[#202020] dark:text-white col-span-10 p-10 relative">
                <div className="flex items-center justify-center pb-10">
                    <h1 className="ml-auto title">Account Settings</h1>
                    <div className="ml-auto">
                        <DarkModeToggle />
                        <NotificationsLink />
                    </div>
                </div>
                <Avatar image={profileImage} />
                <label
                    className="button-small button-deep-sky-blue cursor-pointer inline-flex gap-2"
                    htmlFor="profile-upload">
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
                </label>
                <input
                    className="hidden"
                    id="profile-upload"
                    onChange={uploadProfile}
                    type="file"
                />
                <div className="flex gap-3 items-center my-1">
                    <svg
                        width="41"
                        height="40"
                        viewBox="0 0 41 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.4998 0.916656C17.9281 0.916656 15.3816 1.42319 13.0056 2.40735C10.6297 3.3915 8.47081 4.834 6.65233 6.65248C2.97974 10.3251 0.916504 15.3062 0.916504 20.5C0.916504 29.1558 6.53692 36.4996 14.3115 39.1042C15.2907 39.2608 15.604 38.6537 15.604 38.125V34.8154C10.1794 35.9904 9.024 32.1912 9.024 32.1912C8.12317 29.9196 6.85025 29.3125 6.85025 29.3125C5.06817 28.0983 6.98734 28.1375 6.98734 28.1375C8.94567 28.2746 9.98359 30.1546 9.98359 30.1546C11.6873 33.1312 14.5661 32.25 15.6823 31.78C15.8586 30.5071 16.3678 29.6454 16.9161 29.1558C12.5686 28.6662 8.00567 26.9821 8.00567 19.5208C8.00567 17.3471 8.74984 15.6042 10.0228 14.2137C9.82692 13.7242 9.1415 11.6875 10.2186 9.04374C10.2186 9.04374 11.8636 8.51499 15.604 11.0412C17.1511 10.6104 18.8353 10.395 20.4998 10.395C22.1644 10.395 23.8486 10.6104 25.3957 11.0412C29.1361 8.51499 30.7811 9.04374 30.7811 9.04374C31.8582 11.6875 31.1728 13.7242 30.9769 14.2137C32.2498 15.6042 32.994 17.3471 32.994 19.5208C32.994 27.0017 28.4115 28.6467 24.0444 29.1362C24.7494 29.7433 25.3957 30.9379 25.3957 32.7592V38.125C25.3957 38.6537 25.709 39.2804 26.7078 39.1042C34.4823 36.48 40.0832 29.1558 40.0832 20.5C40.0832 17.9283 39.5766 15.3817 38.5925 13.0058C37.6083 10.6298 36.1658 8.47096 34.3473 6.65248C32.5289 4.834 30.37 3.3915 27.9941 2.40735C25.6181 1.42319 23.0716 0.916656 20.4998 0.916656Z"
                            fill="#03A9F4"
                        />
                    </svg>
                    <svg
                        width="41"
                        height="35"
                        viewBox="0 0 41 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M40.984 4.75001C39.476 5.43543 37.8506 5.88584 36.1665 6.10126C37.8898 5.06334 39.2215 3.41834 39.8481 1.44043C38.2227 2.41959 36.421 3.10501 34.5215 3.49668C32.9744 1.81251 30.8006 0.833344 28.3331 0.833344C23.731 0.833344 19.971 4.59334 19.971 9.23459C19.971 9.90043 20.0494 10.5467 20.1865 11.1538C13.2148 10.8013 7.00688 7.45251 2.87479 2.38043C2.15021 3.61418 1.73896 5.06334 1.73896 6.59084C1.73896 9.50876 3.20771 12.0938 5.47937 13.5625C4.08896 13.5625 2.79646 13.1708 1.66063 12.5833V12.6421C1.66063 16.7154 4.55896 20.1229 8.39729 20.8867C7.16497 21.2239 5.87123 21.2708 4.61771 21.0238C5.1496 22.6932 6.1913 24.154 7.59637 25.2007C9.00143 26.2475 10.6992 26.8277 12.451 26.8596C9.48148 29.2105 5.80053 30.4812 2.01313 30.4629C1.34729 30.4629 0.681458 30.4238 0.015625 30.3454C3.73646 32.7346 8.16229 34.125 12.9015 34.125C28.3331 34.125 36.8127 21.3175 36.8127 10.2138C36.8127 9.84168 36.8127 9.48918 36.7931 9.11709C38.4381 7.94209 39.8481 6.45376 40.984 4.75001Z"
                            fill="#03A9F4"
                        />
                    </svg>
                    <svg
                        width="37"
                        height="37"
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M32.2083 0.875C33.2471 0.875 34.2433 1.28765 34.9778 2.02216C35.7124 2.75668 36.125 3.7529 36.125 4.79167V32.2083C36.125 33.2471 35.7124 34.2433 34.9778 34.9778C34.2433 35.7124 33.2471 36.125 32.2083 36.125H4.79167C3.7529 36.125 2.75668 35.7124 2.02216 34.9778C1.28765 34.2433 0.875 33.2471 0.875 32.2083V4.79167C0.875 3.7529 1.28765 2.75668 2.02216 2.02216C2.75668 1.28765 3.7529 0.875 4.79167 0.875H32.2083ZM31.2292 31.2292V20.85C31.2292 19.1568 30.5566 17.533 29.3593 16.3357C28.162 15.1384 26.5382 14.4658 24.845 14.4658C23.1804 14.4658 21.2417 15.4842 20.3017 17.0117V14.8379H14.8379V31.2292H20.3017V21.5746C20.3017 20.0667 21.5158 18.8329 23.0238 18.8329C23.7509 18.8329 24.4482 19.1218 24.9624 19.6359C25.4766 20.1501 25.7654 20.8474 25.7654 21.5746V31.2292H31.2292ZM8.47333 11.7633C9.3459 11.7633 10.1827 11.4167 10.7997 10.7997C11.4167 10.1827 11.7633 9.3459 11.7633 8.47333C11.7633 6.65208 10.2946 5.16375 8.47333 5.16375C7.59558 5.16375 6.75377 5.51244 6.1331 6.1331C5.51244 6.75377 5.16375 7.59558 5.16375 8.47333C5.16375 10.2946 6.65208 11.7633 8.47333 11.7633ZM11.1954 31.2292V14.8379H5.77083V31.2292H11.1954Z"
                            fill="#03A9F4"
                        />
                    </svg>
                </div>
                <form
                    className="bg-transparent dark:bg-transparent pl-0"
                    onSubmit={handleSubmission}>
                    <h2 className="mb-5 subheadline">Personal Information</h2>
                    <section className="grid grid-cols-2 gap-x-10">
                        <div>
                            <label
                                className="form-label font-normal"
                                htmlFor="firstName">
                                First name
                            </label>
                            <input
                                autoComplete="off"
                                className="form-input"
                                onChange={event =>
                                    setFirstName(event.target.value)
                                }
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
                                onChange={event =>
                                    setLastName(event.target.value)
                                }
                                placeholder="Doe"
                                id="lastName"
                                type="text"
                            />
                        </div>
                    </section>
                    <section>
                        <label
                            className="form-label font-normal"
                            htmlFor="email">
                            Email address
                        </label>
                        <input
                            autoComplete="off"
                            className="form-input"
                            onChange={event => setEmail(event.target.value)}
                            placeholder="johndoe@thedynamics.com"
                            id="email"
                            type="email"
                        />
                    </section>
                    <section>
                        <label
                            className="form-label font-normal"
                            htmlFor="phoneNumber">
                            Phone number
                        </label>
                        <TelInput
                            onChange={phoneNum => setPhoneNumber(phoneNum)}
                        />
                    </section>
                    <section className="grid grid-cols-2 gap-x-10 mb-5">
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
                                onChange={event =>
                                    setPassword(event.target.value)
                                }
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
                                onChange={event =>
                                    setPasswordConfirmation(event.target.value)
                                }
                                type="password"
                            />
                        </div>
                    </section>
                    <div className="form-checkbox mb-10">
                        <input
                            id="checkbox"
                            onClick={event =>
                                setRecieveEmails(
                                    event.target.value === "on" ? true : false
                                )
                            }
                            type="checkbox"
                        />
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
                                onChange={event => setDob(event.target.value)}
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
                                id="gender"
                                onChange={event =>
                                    setGender(event.target.value)
                                }>
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
                            <CountryInput
                                onChange={event =>
                                    setCountry(event.target.value)
                                }
                            />
                        </div>
                    </div>
                    <h2 className="mb-5 subheadline">Work and Education</h2>
                    <div className="grid grid-cols-2 gap-10 mb-5">
                        <div>
                            <label
                                className="form-label font-normal"
                                htmlFor="personal-describe">
                                What describes you the best?
                            </label>
                            <div className="form-input">
                                <button className="bg-[#e5e5e5] border-[#505050] px-10 rounded text-12px text-left h-[20px]">
                                    Student
                                </button>
                            </div>
                        </div>
                        <div>
                            <label
                                className="form-label font-normal"
                                htmlFor="personal-skills-and-interests">
                                Skills and interests
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
    );
}
