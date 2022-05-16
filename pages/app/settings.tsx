// TODO: Set up for admin
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, ChangeEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import CountryInput from "../../components/form/CountryInput";
import TelInput from "../../components/form/TelInput";
import DashNav from "../../components/dash/DashNav";
import { DashNavMobile, MenuMobile } from "../../components/dash/DashNavMobile";
import Logo from "../../components/Logo";
import DarkModeToggle from "../../components/DarkModeToggle";
import NotificationsLink from "../../components/dash/NotificationsLink";
import Avatar from "../../components/Avatar";
import GithubIcon from "../../components/icons/Github";
import LinkedinIcon from "../../components/icons/Linkedin";
import TwitterIcon from "../../components/icons/Twitter";
import UploadIcon from "../../components/icons/Upload";
import Select, { components, StylesConfig } from "react-select";
import { Icon } from "@iconify/react";
import bars from "../../public/assets/dash/bars-solid.svg";
import { handleAuth } from "../../server/utils/auth";
import userService from "../../server/modules/auth/user.service";
import { IUser } from "../../server/modules/auth/user.model";
import { useForm, Controller } from 'react-hook-form'

interface Props { user: IUser }

type FormData = Partial<IUser & { passwordConfirmation: string }>

type SelectOption = { value: string; label: string, color?: string }

export default function Settings({ user }: Props) {
  const [menu, setMenu] = useState(true);
  const { register, control, handleSubmit, reset } = useForm<FormData>()
  const [profilePhotoPreview, setProfilePhotoPreview] = useState<string | null>(null)

  const handleBars = () => {
    setMenu(r => !r);
  };

  // Clear file input
  const fileInputRef = useRef<HTMLInputElement>();
  const resetFileInput = () => {
    fileInputRef.current.value = "";
  };

  // Multiple Select Functions
  const options = [
    { value: "Developer", label: "Developer" },
    { value: "Founder", label: "Founder" },
    { value: "Student", label: "Student" },
    { value: "Designer", label: "Designer" }
  ];
  const options2 = [
    { value: "TypeScripts", label: "Typescripts" },
    { value: "Python", label: "Python" },
    { value: "React", label: "React" },
    { value: "Robotics", label: "Robotics" },
    { value: "Angular", label: "Angular" }
  ];
  const styles: StylesConfig<SelectOption, true> = {
    control: provided => ({
      ...provided,
      border: 0,
      outline: "none",
      boxShadow: "none"
    }),
    option: (provided) => ({
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
  const CaretDownIcon = () => {
    return <Icon icon="bxs:down-arrow" color="#8a8a8a" width={15} height={20} inline={true} />;
  };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    );
  };

  async function uploadProfilePhoto(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    // TODO: Update profile image in database (event is onChange from <input type="file"/>)
    const file = e.target.files?.[0];
    if (!file) return;

    const tempUrl = URL.createObjectURL(file);
    console.log({ tempUrl });
    setProfilePhotoPreview(tempUrl);
  }

  async function handleSubmission(e: FormData) {

  }

  return (
    <div className="xs:grid xs:grid-cols-12 dark:bg-[#202020]">
      <div className="mxs:hidden col-span-1 mx-auto">
        <DashNav />
      </div>
      <div className="mxs:flex mxs:flex-col mxs:justify-between mxs:px-0 mxs:pt-4 dark:bg-[#202020] dark:text-white col-span-11 pl-32 pt-10 pr-10 content-center min-w-full min-h-screen">
        <div className="flex items-center justify-center xs:pb-10 mxs:justify-between mxs:px-5">
          <Logo className="xs:hidden w-[80px] xs:w-[120px] pt-1" />
          <h1 className="mxs:hidden mx-auto font-semibold text-42px">Account Settings</h1>
          <div className="text-right flex items-end justify-end xs:mt-3 mxs:mb-0.5">
            <DarkModeToggle className="h-[22px] xs:h-[30px]" darkClassName="h-[22px] xs:h-[30px]" />
            <NotificationsLink />
            <div onClick={handleBars} className="xs:hidden relative w-[22px] -mb-1 ml-1">
              <Image src={bars} alt="bars-solid" />
            </div>
          </div>
        </div>
        <MenuMobile menu={menu} onClick={handleBars} />

        <h1 className="xs:hidden mx-auto font-semibold text-36px xs:text-42px mt-12">
          Account Settings
        </h1>
        <hr className="mb-5 border-t-[1.4px] border-solid border-[#C9C9C9]" />
        <div className="mxs:pl-6">
          <Avatar image={profilePhotoPreview || user.image} />
          <label className="cursor-pointer flex mt-5" htmlFor="profile-upload">
            <div className="button-small button-deep-sky-blue gap-x-2">
              <UploadIcon />
              <span>Upload a picture</span>
            </div>
          </label>
          <input
            className="hidden"
            id="profile-upload"
            onChange={uploadProfilePhoto}
            type="file"
            accept="image/*"
          />
          <div className="flex gap-5 items-center my-3">
            <span className="cursor-pointer">
              <GithubIcon width={32} />
            </span>
            <span className="cursor-pointer">
              <TwitterIcon width={41} height={33} />
            </span>
            <span className="cursor-pointer">
              <LinkedinIcon width={35} height={31} />
            </span>
          </div>
        </div>
        <form
          className="mxs:px-6 bg-transparent dark:bg-transparent pl-0 xs:w-11/12"
          onSubmit={handleSubmit(handleSubmission)}>
          <h2 className="mb-5 subheadline">Personal Information</h2>
          <section className="grid grid-cols-1 xs:grid-cols-2 gap-x-10">
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
                {...register("firstName")}
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
                {...register("lastName")}
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
              placeholder="Zach@hackclub.com"
              type="email"
              {...register("email")}
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
          <section className="form-checkbox mb-10">
            <input id="checkbox" name="receiveEmails" type="checkbox" />
            <label htmlFor="checkbox">Notify me about upcoming news & events</label>
          </section>
          <h2 className="mb-5 subheadline">Demographic Information</h2>
          <section className="grid grid-cols-1 xs:grid-cols-2 gap-x-10 mb-10">
            <div>
              <label className="form-label font-normal" htmlFor="dob">
                Date of birth
              </label>
              <input className="form-input" id="dob" name="dob" type="date"
                {...register("dob")}
              />
            </div>
            <div>
              <label className="form-label font-normal" htmlFor="gender">
                Gender
              </label>
              <select
                className="mxs:mb-3 form-select rounded-lg"
                defaultValue="Prefer not to say"
                id="gender"
                name="gender"
                {...register("gender")}
              >
                <option value="Prefer not to say">Prefer not to say</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="form-label font-normal" htmlFor="country">
                Country of residence
              </label>
              <CountryInput {...register("countryOfResidence")} />
            </div>
          </section>
          <h2 className="mb-5 subheadline">Work and Education</h2>
          <section className="grid grid-cols-1 xs:grid-cols-2 gap-x-10 gap-y-5 mb-5">
            <div>
              <label className="form-label font-normal" htmlFor="personalDescription">
                What describes you the best?
              </label>
              <Controller
                control={control}
                name="describe"
                render={({ field }) =>
                  <Select
                    isMulti
                    className="form-select p-0 m-0 rounded-lg"
                    styles={styles}
                    components={{ DropdownIndicator }}
                    options={options}
                    value={options.filter(({ value }) => field.value?.includes(value))}
                    onChange={(value) => field.onChange(value.map(({ value }) => value))}
                  />
                }
              />
            </div>
            <div>
              <label className="form-label font-normal" htmlFor="skillsAndInterests">
                Skills and interests
              </label>
              <Controller
                control={control}
                name="skills"
                render={({ field }) =>
                  <Select
                    isMulti
                    className="form-select p-0 m-rounded-lg"
                    components={{ DropdownIndicator }}
                    styles={styles}
                    options={options2}
                    value={options.filter(({ value }) => field.value?.includes(value))}
                    onChange={(value) => field.onChange(value.map(({ value }) => value))}
                  />
                }
              />
            </div>

            <div>
              <label className="form-label font-normal" htmlFor="levelOfStudy">
                Level of study
              </label>
              <select
                className="form-select rounded-lg"
                defaultValue="High school"
                id="levelOfStudy"
                name="levelOfStudy"
                {...register("levelOfStudy")}
              >
                <option value="High school">High school</option>
                <option value="College">College</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="form-label font-normal" htmlFor="resume">
                Upload Resume/CV
              </label>
              <div className="flex form-input items-center justify-between">
                <input
                  className="text-18px text-blue-500"
                  id="resume"
                  name="resume"
                  type="file"
                  ref={fileInputRef}
                />
                <span className="cursor-pointer">
                  <Icon
                    icon="iconoir:cancel"
                    width={25}
                    height={25}
                    inline={true}
                    onClick={resetFileInput}
                  />
                </span>
              </div>
            </div>
          </section>
          <section className="text-center mt-10">
            <ReCAPTCHA
              className="inline-block mb-3"
              sitekey="6LexReUeAAAAAF5a0KmF1tz26MWEFUwnhQ7crZAL"
              onChange={i => console.log(i)}
            />
            <button
              className="button-big button-deep-sky-blue mx-auto px-20 w-[230px] text-22px mt-3"
              type="submit"
            >
              Save
            </button>
            <button
              className="button-big button-fruit-salad mx-auto px-20 w-[230px] text-22px mt-3"
              type="reset"
            >
              Cancel
            </button>
          </section>
        </form>
      </div>
      <div className="xs:hidden">
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

  const user = await userService.getOne(payload.id);
  console.log(user);
  const props: Props = { user };

  return { props };
}
