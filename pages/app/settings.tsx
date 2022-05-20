import Image from "next/image";
import { useState, ChangeEvent, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import TelInput from "../../components/form/TelInput";
import DashNav from "../../components/dash/DashNav";
import DashHeader from "../../components/dash/DashHeader";
import { DashNavMobile } from "../../components/dash/DashNavMobile";
import Avatar from "../../components/Avatar";
import GithubIcon from "../../components/icons/Github";
import LinkedinIcon from "../../components/icons/Linkedin";
import TwitterIcon from "../../components/icons/Twitter";
import UploadIcon from "../../components/icons/Upload";
import { components, StylesConfig } from "react-select";
import { Icon } from "@iconify/react";
import { handleAuth } from "../../server/utils/auth";
import userService from "../../server/modules/auth/user.service";
import { IUser } from "../../server/modules/auth/user.model";
import { useForm, FormProvider } from "react-hook-form";
import { useAuth } from "../../components/AuthContext";
import {
  CountrySelect,
  DescribeSelect,
  GenderSelect,
  LevelOfStudySelect,
  SkillsAndInterestSelect
} from "../../components/profile/inputs";
import TextareaAutosize from "react-textarea-autosize";

interface Props {
  user: IUser;
}

type FormData = Partial<IUser & { passwordConfirmation: string }>;

type SelectOption = { value: string; label: string; color?: string };

export default function Settings({ user }: Props) {
  // Clear file input
  const fileInputRef = useRef<HTMLInputElement>();
  const resetFileInput = () => {
    fileInputRef.current.value = "";
  };
  const hookFormMethods = useForm<FormData>({ defaultValues: user });
  const { register, handleSubmit } = hookFormMethods;

  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const { updateProfile } = useAuth();

  const handleSelectFile =
    (cb: (file: File | null) => void) => (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const file = e.target.files?.[0];
      if (!file) return cb(null);

      cb(file);
    };

  async function handleSubmission(data: FormData) {
    await updateProfile.execute(data, { image: profilePhoto, resume: resumeFile });
  }

  return (
    <div className="xs:grid xs:grid-cols-12 dark:bg-[#202020]">
      <div className="mxs:hidden col-span-1 mx-auto">
        <DashNav />
      </div>
      <div className="mxs:flex mxs:flex-col mxs:justify-between mxs:px-0 mxs:pt-4 dark:bg-[#202020] dark:text-white col-span-11 pl-32 pt-10 pr-10 content-center min-w-full min-h-screen">
        <DashHeader />

        {updateProfile.status === "error" && (
          <p className="font-body slide-bottom font-semibold md:text-20px text-[18px]  text-white text-center bg-[#D0342C] mx-auto mb-3 w-screen">
            Failed to save profile:{" "}
            {updateProfile.error?.response?.data?.message || updateProfile.error?.message}
          </p>
        )}
        {updateProfile.status === "success" && (
          <p className="font-body slide-bottom font-semibold md:text-20px text-[18px]  text-white text-center bg-[#4CB050] mx-auto mb-3 w-screen">
            Profile saved successfully!
          </p>
        )}

        <h1 className="xs:hidden mx-auto font-semibold text-[30px] xs:text-42px mt-12">
          Account Settings
        </h1>
        <hr className="mb-5 border-t-[1.4px] border-solid border-[#C9C9C9]" />
        <div className="mxs:pl-6">
          <Avatar
            image={profilePhoto ? URL.createObjectURL(profilePhoto) : user.image}
            className="relative mxs:w-[150px] mxs:h-[150px] w-[170px] h-[170px]"
            border="!border-[3px]"
          />
          <label className="cursor-pointer flex mt-5" htmlFor="profile-upload">
            <div className="mxs:space-x-0 button-small button-deep-sky-blue gap-x-2">
              <UploadIcon />
              <span className="text-[16px]">Upload a picture</span>
            </div>
          </label>
          <input
            className="hidden"
            id="profile-upload"
            onChange={handleSelectFile(setProfilePhoto)}
            type="file"
            accept="image/*"
          />
          <div className="mxs:space-x-5 flex gap-5 items-center my-6">
            <span className="cursor-pointer">
              <GithubIcon className="mxs:w-[32px]" width={32} />
            </span>
            <span className="mxs:w-[32px] cursor-pointer">
              <TwitterIcon width={41} height={33} />
            </span>
            <span className="mxs:w-[30px] cursor-pointer">
              <LinkedinIcon width={35} height={31} />
            </span>
          </div>
        </div>
        <form
          className="mxs:px-6 bg-transparent dark:bg-transparent pl-0 xs:w-11/12"
          onSubmit={handleSubmit(handleSubmission)}>
          <FormProvider {...hookFormMethods}>
            <h2 className="mxs:text-[22px] mb-5 subheadline">Personal Information</h2>
            <section className="grid grid-cols-1 xs:grid-cols-2 gap-x-10 ">
              <div>
                <label className="form-label font-normal" htmlFor="firstName">
                  First name
                </label>
                <input
                  autoComplete="off"
                  className="form-input"
                  id="firstName"
                  name="firstName"
                  placeholder="Zach"
                  type="text"
                  {...register("firstName", { required: true })}
                />
              </div>
              <div>
                <label className="form-label font-normal" htmlFor="lastName">
                  Last name
                </label>
                <input
                  autoComplete="off"
                  className="form-input"
                  id="lastName"
                  name="lastName"
                  placeholder="Latta"
                  type="text"
                  {...register("lastName", { required: true })}
                />
              </div>
            </section>
            <section>
              <label className="form-label font-normal" htmlFor="email">
                Email address
              </label>
              <input
                autoComplete="off"
                className="form-input"
                id="email"
                name="email"
                type="email"
                value={user.email}
                disabled
              />
            </section>
            <section>
              <label className="form-label font-normal" htmlFor="phoneNumber">
                Phone number
              </label>
              <TelInput {...register("phoneNumber")} />
            </section>
            <section className="grid gird-cols-1 xs:grid-cols-2 gap-x-10 mb-5">
              <div>
                <label className="form-label font-normal" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-input"
                  id="password"
                  name="password"
                  placeholder="*********"
                  type="password"
                  {...register("password")}
                />
                <p className="caption xs mt-1.5">
                  Leave blank if you don't want to change your password
                </p>
              </div>
              <div>
                <label className="form-label font-normal" htmlFor="passwordConfirmation">
                  Password confirmation
                </label>
                <input
                  autoComplete="password"
                  className="form-input"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  placeholder="*********"
                  type="password"
                  {...register("passwordConfirmation")}
                />
              </div>
            </section>
            <section className="mxs:space-x-1 form-checkbox mb-10">
              <input id="checkbox" name="receiveEmails" type="checkbox" />
              <label htmlFor="checkbox">Notify me about upcoming news & events</label>
            </section>
            <h2 className="mxs:text-[22px] mb-5 subheadline">Demographic Information</h2>
            <section className="grid grid-cols-1 xs:grid-cols-2 gap-x-10 mb-10">
              <div className="mxs:w-full" style={{ width: "90%" }}>
                <label className="form-label font-normal" htmlFor="dob">
                  Date of birth
                </label>
                <input
                  className="form-input"
                  id="dob"
                  name="dob"
                  type="date"
                  {...register("dob")}
                />
              </div>
              <div>
                <label className="form-label font-normal" htmlFor="gender">
                  Gender
                </label>
                <GenderSelect />
              </div>
              <div>
                <label className="form-label font-normal" htmlFor="country">
                  Country of residence
                </label>
                <CountrySelect />
              </div>
            </section>
            <h2 className="mxs:text-[22px] mb-5 subheadline">Work and Education</h2>
            <section className="grid grid-cols-1 xs:grid-cols-2 gap-x-10 gap-y-1 mb-5">
              <div>
                <label className="form-label font-normal" htmlFor="personalDescription">
                  What describes you the best?
                </label>
                <DescribeSelect />
              </div>
              <div>
                <label className="form-label font-normal" htmlFor="skillsAndInterests">
                  Skills and interests
                </label>
                {/* <SkillsAndInterestSelect /> */}
                <TextareaAutosize
                  className="resize-none form-input box-border py-[6px]"
                  maxRows={6}
                  maxLength={120}
                  placeholder="Coding languages, frameworks, or soft skills..."
                />
              </div>
              <div>
                <label className="form-label font-normal" htmlFor="levelOfStudy">
                  I’m available for
                </label>
                <LevelOfStudySelect />
              </div>
              <div>
                <label className="form-label font-normal" htmlFor="">
                  Your headline
                </label>
                <input
                  autoComplete="off"
                  className="form-input py-[6px]"
                  placeholder="Write something.."
                  type="text"
                  maxLength={50}
                />
              </div>
              <div>
                <label className="form-label font-normal" htmlFor="resume">
                  Upload Resume/CV
                </label>
                <div className="flex form-input items-center justify-between h-[41%]">
                  <input
                    className="text-18px text-[#3B4FE4]"
                    id="resume"
                    name="resume"
                    type="file"
                    onChange={handleSelectFile(setResumeFile)}
                    ref={fileInputRef}
                  />
                  <span className="cursor-pointer">
                    <Icon
                      icon="iconoir:cancel"
                      color="black"
                      width={25}
                      height={25}
                      inline={true}
                      onClick={resetFileInput}
                    />
                  </span>
                </div>
              </div>
            </section>
            <section className="mxs:mt-4 text-center mt-10">
              <ReCAPTCHA
                className="inline-block mb-3"
                sitekey="6LexReUeAAAAAF5a0KmF1tz26MWEFUwnhQ7crZAL"
                onChange={i => console.log(i)}
              />
              <button
                className="mxs:mt-6 button-big button-deep-sky-blue mx-auto px-20 w-[230px] text-22px mt-3"
                type="submit">
                Save
              </button>
              {/* <button
              className="button-big button-fruit-salad mx-auto px-20 w-[230px] text-22px mt-3"
              type="reset"
            >
              Cancel
            </button> */}
            </section>
          </FormProvider>
        </form>
      </div>
      <div className="mxs:mb-20 xs:hidden">
        <DashNavMobile />
      </div>
    </div>
  );
}

const styles: StylesConfig<SelectOption, true> = {
  control: provided => ({
    ...provided,
    border: 0,
    outline: "none",
    boxShadow: "none"
  }),
  option: provided => ({
    ...provided,
    "&:hover": {
      backgroundColor: "#03A9F4",
      color: "white"
    },
    "padding": 3
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    "color": data.color,
    ":hover": {
      backgroundColor: " #03A9F4",
      color: "white"
    }
  })
};

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon="bxs:down-arrow" color="#8a8a8a" width={15} height={20} inline={true} />
    </components.DropdownIndicator>
  );
};
export async function getServerSideProps({ req, res }) {
  const payload = await handleAuth(req);
  if (!payload) {
    res.writeHead(302, {
      Location: "/login"
    });
    res.end();
    return { props: {} };
  }

  const props: Props = { user: await userService.getOne(payload.id) };

  return { props };
}
