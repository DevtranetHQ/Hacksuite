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
import { Icon } from "@iconify/react";
import { handleAuth } from "../../server/utils/auth";
import userService from "../../server/modules/auth/user.service";
import { IUser } from "../../server/modules/auth/user.model";
import { useForm, FormProvider } from "react-hook-form";
import { CountrySelect, DescribeSelect, GenderSelect } from "../../components/profile/inputs";
import TextareaAutosize from "react-textarea-autosize";
import { IProfile } from "../../server/modules/social/profile.model";
import { profileService } from "./../../server/modules/social/profile.service";
import { useProfile } from "./../../hooks/useProfile";
import AvailableForSelect from "../../components/profile/LevelOfStudy";
import EditSocials from "../../components/EditSocials";

interface Props {
  profile: IProfile;
}

type FormData = Partial<IProfile & { password: string; passwordConfirmation: string }>;

export default function Settings({ profile }: Props) {
  // Clear file input
  const fileInputRef = useRef<HTMLInputElement>();
  const resetFileInput = () => {
    fileInputRef.current.value = "";
    setResumeUpload(false);
  };
  const hookFormMethods = useForm<FormData>({ defaultValues: profile });
  const { register, handleSubmit } = hookFormMethods;

  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeUpload, setResumeUpload] = useState<boolean>(false);

  const { updateProfile } = useProfile();

  const handleSelectFile =
    (cb: (file: File | null) => void) => (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const file = e.target.files?.[0];
      if (!file) return cb(null);
      if (fileInputRef.current.value) setResumeUpload(true);
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
        {/* Image, Upload button, Social media icons */}
        <div className="mlg:pl-6">
          <div className="flex items-center justify-between w-[88%]">
            <Avatar
              image={profilePhoto ? URL.createObjectURL(profilePhoto) : profile.image}
              className="relative mxs:w-[150px] mxs:h-[150px] w-[170px] h-[170px]"
              border="!border-[3px]"
            />
            <div className="hover:text-black dark:hover:text-white text-[#C9C9C9]">
              <svg
                className="cursor-pointer fill-current"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4167 0.375V3.29167H21.6521L7.31667 17.6271L9.37292 19.6833L23.7083 5.34792V10.5833H26.625V0.375H16.4167ZM23.7083 23.7083H3.29167V3.29167H13.5V0.375H3.29167C2.51812 0.375 1.77625 0.682291 1.22927 1.22927C0.682291 1.77625 0.375 2.51812 0.375 3.29167V23.7083C0.375 24.4819 0.682291 25.2237 1.22927 25.7707C1.77625 26.3177 2.51812 26.625 3.29167 26.625H23.7083C24.4819 26.625 25.2237 26.3177 25.7707 25.7707C26.3177 25.2237 26.625 24.4819 26.625 23.7083V13.5H23.7083V23.7083Z" />
              </svg>
            </div>
          </div>

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

          {/* SOCIALS Section */}
          <div className="flex items-center flex-wrap justify-between w-[89%] xs:w-[51%]">
            <EditSocials />
          </div>
        </div>
        {/* Input Form */}
        <form
          className="mlg:px-6 bg-transparent dark:bg-transparent pl-0 lg:w-11/12"
          onSubmit={handleSubmit(handleSubmission)}>
          <FormProvider {...hookFormMethods}>
            {/* Personal Information */}
            <h2 className="mxs:text-[22px] mb-5 subheadline">Personal Information</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              <div className="col-span-1">
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
              <div className="col-span-1">
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
              <div className="col-span-1 sm:col-span-2">
                <label className="form-label font-normal" htmlFor="email">
                  Email address
                </label>
                <input
                  autoComplete="off"
                  className="form-input"
                  id="email"
                  name="email"
                  type="email"
                  value={profile.email}
                  placeholder="zach@hackclub.com"
                />
              </div>
              <div className="col-span-1 sm:col-span-2">
                <label className="form-label font-normal" htmlFor="phoneNumber">
                  Phone number
                </label>
                <TelInput {...register("phoneNumber")} />
              </div>
              <div className="col-span-1">
                <label className="form-label font-normal" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-input mb-0"
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
              <div className="col-span-1">
                <label className="form-label font-normal" htmlFor="passwordConfirmation">
                  Password confirmation
                </label>
                <input
                  autoComplete="password"
                  className="form-input mb-0"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  placeholder="*********"
                  type="password"
                  {...register("passwordConfirmation")}
                />
              </div>
            </section>
            <section className="mxs:space-x-1 form-checkbox mb-10 mt-4">
              <input id="checkbox" name="receiveEmails" type="checkbox" />
              <label htmlFor="checkbox">Notify me about upcoming news & events</label>
            </section>
            {/* Demographic Information */}
            <h2 className="mxs:text-[22px] mb-5 subheadline">Demographic Information</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-10">
              <div>
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
            {/* Work and Education */}
            <h2 className="mxs:text-[22px] mb-5 subheadline">Work and Education</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-5">
              <div className="sm:col-span-2 lg:col-span-1">
                <label className="form-label font-normal" htmlFor="personalDescription">
                  What describes you the best?
                </label>
                <DescribeSelect />
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <label className="form-label font-normal" htmlFor="skillsAndInterests">
                  Skills and interests
                </label>
                <TextareaAutosize
                  className="resize-none form-input box-border"
                  maxRows={6}
                  maxLength={120}
                  placeholder="Coding languages, frameworks, or soft skills..."
                />
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
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
                  {...register("headline")}
                />
              </div>
              <div>
                <label className="form-label font-normal" htmlFor="resume">
                  Upload Resume/CV
                </label>
                <div className="flex form-input items-center justify-between px-3.5 py-2 rounded-lg">
                  <input
                    className="text-14px text-[#3B4FE4] w-full"
                    id="resume"
                    name="resume"
                    type="file"
                    onChange={handleSelectFile(setResumeFile)}
                    ref={fileInputRef}
                  />
                  <span
                    className="cursor-pointer text-24px leading-[14px]"
                    onClick={resetFileInput}>
                    <svg
                      className={`${resumeUpload ? "fill-[#ccc] hover:fill-[#999999]" : "hidden"}`}
                      height="20"
                      width="20"
                      viewBox="0 0 20 20">
                      <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </section>
            {/* Recaptcha and Save Button */}
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

export async function getServerSideProps({ req, res }) {
  const payload = await handleAuth(req);
  if (!payload) {
    res.writeHead(302, {
      Location: "/login"
    });
    res.end();
    return { props: {} };
  }

  const props: Props = {
    profile: await profileService.getCompletedProfile(payload.uniqueId)
  };

  return { props };
}
