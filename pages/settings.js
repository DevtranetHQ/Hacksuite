// TODO: Set up for admin
import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import CountryInput from "../components/form/CountryInput";
import TelInput from "../components/form/TelInput";
import DashNav from "../components/dash/DashNav";
import DarkModeToggle from "../components/DarkModeToggle";
import NotificationsLink from "../components/dash/NotificationsLink";
import Avatar from "../components/Avatar";
import GithubIcon from "../components/icons/Github";
import LinkedinIcon from "../components/icons/Linkedin";
import TwitterIcon from "../components/icons/Twitter";
import UploadIcon from "../components/icons/Upload";

export default function Settings({ recaptchaSitekey, choices, profileImage }) {
    const [personalDescription, setPersonalDescription] = useState(new Set());
    const removePersonalDescription = val => {
        let arr = Array.from(personalDescription);
        arr.splice(arr.indexOf(val), 1);
        setPersonalDescription(new Set(arr));
    };

    const [skillsAndInterests, setSkillsAndInterests] = useState(new Set());
    const removeSkillsAndInterests = val => {
        let arr = Array.from(skillsAndInterests);
        arr.splice(arr.indexOf(val), 1);
        setSkillsAndInterests(new Set(arr));
    };

    const [recaptchaSuccess, setRecaptchaSuccess] = useState(false);

    async function uploadProfile(e) {
        e.preventDefault();
        // TODO: Update profile image in database (event is onChange from <input type="file"/>)
    }

    async function handleSubmission(e) {
        e.preventDefault();
        // TODO: Edit account settings with default being values passed from getServerSideProps (so no if statements are needed if certain things aren't changed)
        // NOTE: If user changes password, make sure that password and password confirmation are the same
        if (!recaptchaSuccess) {
        }

        const password = e.target.password.value;
        const passwordConfirmation = e.target.passwordConfirmation.value;

        if (!(password === passwordConfirmation)) {
        }

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const phoneNumber = e.target.phoneNumber.value;
        const receiveEmails = e.target.receiveEmails.value;
        const dob = e.target.dob.value;
        const gender = e.target.gender.value;
        const country = e.target.country.value;
        const levelOfStudy = e.target.levelOfStudy.value;
        const resume = e.target.resume.value; // TODO: Read resume file with FileReader() or semething
    }

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <DashNav />
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
                    className="button-small button-deep-sky-blue cursor-pointer inline-flex gap-x-2"
                    htmlFor="profile-upload">
                    <UploadIcon />
                    <span className="pt-1.5">Upload a picture</span>
                </label>
                <input
                    className="hidden"
                    id="profile-upload"
                    onChange={uploadProfile}
                    type="file"
                />
                <div className="flex gap-3 items-center my-1">
                    <span className="cursor-pointer">
                        <GithubIcon width={41} />
                    </span>
                    <span className="cursor-pointer">
                        <TwitterIcon width={41} height={35} />
                    </span>
                    <span className="cursor-pointer">
                        <LinkedinIcon width={37} height={37} />
                    </span>
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
                                id="firstName"
                                name="firstName"
                                placeholder="John"
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
                                id="lastName"
                                name="lastName"
                                placeholder="Doe"
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
                            id="email"
                            name="email"
                            placeholder="johndoe@thedynamics.com"
                            type="email"
                        />
                    </section>
                    <section>
                        <label
                            className="form-label font-normal"
                            htmlFor="phoneNumber">
                            Phone number
                        </label>
                        <TelInput />
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
                                id="password"
                                name="password"
                                placeholder="*********"
                                type="password"
                            />
                            <p className="caption xs mt-1.5">
                                Leave blank if you don't want to change your
                                password
                            </p>
                        </div>
                        <div>
                            <label
                                className="font-label font-normal"
                                htmlFor="passwordConfirmation">
                                Password confirmation
                            </label>
                            <input
                                className="form-input"
                                id="passwordConfirmation"
                                name="passwordConfirmation"
                                placeholder="*********"
                                type="password"
                            />
                        </div>
                    </section>
                    <section className="form-checkbox mb-10">
                        <input
                            id="checkbox"
                            name="receiveEmails"
                            type="checkbox"
                        />
                        <label htmlFor="checkbox">
                            Notify me about upcoming news & events
                        </label>
                    </section>
                    <h2 className="mb-5 subheadline">
                        Demographic Information
                    </h2>
                    <section className="grid grid-cols-2 gap-x-10 mb-10">
                        <div>
                            <label
                                className="form-label font-normal"
                                htmlFor="dob">
                                Date of birth
                            </label>
                            <input
                                className="form-input"
                                id="dob"
                                name="dob"
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
                                name="gender">
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
                    </section>
                    <h2 className="mb-5 subheadline">Work and Education</h2>
                    <section className="grid grid-cols-2 gap-10 mb-5">
                        <div className="flex flex-col gap-y-3">
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="personalDescription">
                                    What describes you the best?
                                </label>
                                <div className="grid grid-cols-12 form-input items-start relative min-h-[47px]">
                                    <div className="col-span-11 flex flex-wrap gap-2 z-[2]">
                                        {Array.from(personalDescription).map(
                                            (value, key) => (
                                                <button
                                                    className="bg-[#E6E6E6] border border-[#442929] cursor-default inline-flex gap-x-4 items-center justify-between px-3 rounded text-15px h-fit"
                                                    key={key}>
                                                    <span className="pt-0.5">
                                                        {value}
                                                    </span>
                                                    <span
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            removePersonalDescription(
                                                                value
                                                            )
                                                        }>
                                                        &times;
                                                    </span>
                                                </button>
                                            )
                                        )}
                                    </div>
                                    <select
                                        className="absolute top-0 right-2 col-span-1 form-select bg-transparent border-0 text-transparent w-fit z-[1]"
                                        id="personalDescription">
                                        {choices.personalDescription.map(
                                            (value, key) => (
                                                <option
                                                    key={key}
                                                    onClick={event =>
                                                        setPersonalDescription(
                                                            new Set([
                                                                ...personalDescription,
                                                                event.target
                                                                    .value
                                                            ])
                                                        )
                                                    }
                                                    value={value}>
                                                    {value}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="levelOfStudy">
                                    Level of study
                                </label>
                                <select
                                    className="form-select"
                                    defaultValue="High school"
                                    id="levelOfStudy"
                                    name="levelOfStudy">
                                    <option value="High school">
                                        High school
                                    </option>
                                    <option value="College">College</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="skillsAndInterests">
                                    Skills and interests
                                </label>
                                <div className="grid grid-cols-12 form-input items-start relative min-h-[47px]">
                                    <div className="col-span-11 flex flex-wrap gap-2 z-[2]">
                                        {Array.from(skillsAndInterests).map(
                                            (value, key) => (
                                                <button
                                                    className="bg-[#E6E6E6] border border-[#442929] cursor-default inline-flex gap-x-4 items-center justify-between px-3 rounded text-15px h-fit"
                                                    key={key}>
                                                    <span className="pt-0.5">
                                                        {value}
                                                    </span>
                                                    <span
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            removeSkillsAndInterests(
                                                                value
                                                            )
                                                        }>
                                                        &times;
                                                    </span>
                                                </button>
                                            )
                                        )}
                                    </div>
                                    <select
                                        className="absolute top-0 right-2 col-span-1 form-select bg-transparent border-0 text-transparent w-fit z-[1]"
                                        id="skillsAndInterests">
                                        {choices.skillsAndInterests.map(
                                            (value, key) => (
                                                <option
                                                    key={key}
                                                    onClick={event =>
                                                        setSkillsAndInterests(
                                                            new Set([
                                                                ...skillsAndInterests,
                                                                event.target
                                                                    .value
                                                            ])
                                                        )
                                                    }
                                                    value={value}>
                                                    {value}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label
                                    className="form-label font-normal"
                                    htmlFor="resume">
                                    Upload Resume/CV
                                </label>
                                <div className="flex form-input">
                                    <input
                                        className="text-18px"
                                        id="resume"
                                        name="resume"
                                        type="file"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="text-center">
                        <ReCAPTCHA
                            className="inline-block mb-3"
                            sitekey={recaptchaSitekey}
                            onChange={i => console.log(i)}
                        />
                        <button
                            className="button-big button-deep-sky-blue mx-auto px-14 text-24px"
                            type="submit">
                            Save
                        </button>
                    </section>
                </form>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            recaptchaSitekey: process.env.RECAPTCHA_SITEKEY,
            choices: {
                personalDescription: ["Developer", "Founder", "Student"],
                skillsAndInterests: [
                    "AI/ML",
                    "App development",
                    "Arduino",
                    "Blockchain",
                    "Competitive programming",
                    "Hackathons",
                    "Web development"
                ]
            },
            profileImage:
                "https://s3-alpha-sig.figma.com/img/4d26/2767/d0b64dcacf31bfa508adcc47aea65677?Expires=1648425600&Signature=BHMNOhVF9EQOSs09rh7Ot1GJBIjwiP1Vm86GNt~do1Zj5KFVYaVo0uCaL6umlWfrzhuOZ-tt3VaDqA-JSAU1PJGCMLnJWU2gXn6fZR4vPExQY2yPduYPxctiooLF7qJKEnw3RJS9GSH~pcr-7Ux5nb6FG40z799PuKbiSjbq0E5mB8~0FlOolFN62nQ9~BD6K4FNrr9FXBYV~k4gpSEW-YFCDwE0vi8PnDD0baN-J0JddjcDEwF6QnL6K9cJ5~Jxtc6qTaBpvnHPZOMLtnydOuiGK43Gys2fJBI60FMxtaNx5hsm4REJG396RsXKmvuVGbFh08i6uM~SdGeCU4feOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        }
    };
}
