import React from "react";
import { useContext } from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import Logo from "../components/Logo";
import ReCAPTCHA from "react-google-recaptcha";
import InboxIcon from "../components/icons/Inbox";
import GithubIcon from "../components/icons/Github";
import UploadIcon from "../components/icons/Upload";
import FigmaIcon from "../components/icons/Figma";
import AdobeIcon from "../components/icons/Adobe";
import LinkIcon from "../components/icons/Link";
import SearchIcon from "../components/icons/Search";
import DarkModeContext from "../components/DarkModeContext";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Select, { components, StylesConfig } from "react-select";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useForm, Controller } from 'react-hook-form'
import LoadingButton from "../components/LoadingButton";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);
type SelectOption = { value: string; label: string, color?: string }

export default function CreateProject() {
  const { darkMode } = useContext(DarkModeContext);
  const { control } = useForm<FormData>()
  const [desc, setDesc] = React.useState(``);


  const technologies = [
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

  function handleSubmission(e: any) {
    e.preventDefault();

    const name = e.target.name.value;
    // Profile Picture [image]
    const profile = e.target.profile.value;
    const description = desc;
    const collaborators = e.target.collaborators.value;
    const technologies = e.target.technologies.value;
    const stage = e.target.stage.value;
    const github = e.target.github.value;
    const figma = e.target.figma.value;
    const adobeXD = e.target.adobeXD.value;
    const links = e.target.links.value;


  }
  return (
    <div className="dark:bg-[#202020] dark:text-white pl-3  pr-3 ">
      <nav className="flex items-center justify-between pl-[10px] lg:pl-8 pr-[12px] lg:pr-12">
        <Logo className="w-[80px] md:w-[120px] py-5" />
        <h1 className="text-[30px] font-bold lg:title md:text-[65px] lg:text-[90px] ">Projects</h1>
        <div className="flex gap-x-[0px] md:gap-x-3 lg:gap-x-5 items-center">
          <DarkModeToggle
            className="mx-0 w-[25px] md:w-[44px] lg:scale-[1.24] lg:mr-[10px]"
            darkClassName="mx-0 w-[25px] md:w-[33px] lg:w-[40px] h-[25px] md:h-[48px] lg:h-[60px]"
          />
          <a href="#" className="scale-75 lg:scale-[1.4] md:scale-[1.15]">
            <svg
            className="cursor-pointer inline fill-deep-sky-blue mx-2 mxs:h-[22px]"
            width="30"
            height="30"
            viewBox="0 0 37 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5833 38.125H22.4167C22.4167 40.2792 20.6542 42.0417 18.5 42.0417C16.3458 42.0417 14.5833 40.2792 14.5833 38.125ZM36.125 34.2084V36.1667H0.875V34.2084L4.79167 30.2917V18.5417C4.79167 12.4709 8.70833 7.18335 14.5833 5.42085V4.83335C14.5833 2.67919 16.3458 0.916687 18.5 0.916687C20.6542 0.916687 22.4167 2.67919 22.4167 4.83335V5.42085C28.2917 7.18335 32.2083 12.4709 32.2083 18.5417V30.2917L36.125 34.2084ZM28.2917 18.5417C28.2917 13.0584 23.9833 8.75002 18.5 8.75002C13.0167 8.75002 8.70833 13.0584 8.70833 18.5417V32.25H28.2917V18.5417Z" />
            </svg>
          </a>
        </div>
      </nav>

      <header className="bg-[#F8FBFF] container-gray-dark dark:border-gray-dark py-14 px-6 xs:p-14 rounded-b-2xl text-center text-[30px]">
        Here you can share all the cool things you're making and launching with{" "}
        <span className="font-bold">The Dynamics Community</span>, and beyond
      </header>

      {/* Form */}
      <form onSubmit={handleSubmission}>
        <div>
          <label
            className="font-semibold xs:text-12px md:text-24px xs:font-bold xs:mb-1"
            htmlFor="name">
            Project Name <span className="text-[#FF0000]">*</span>
          </label>
          <input
            className="form-input text-24px rounded-lg xs:py-1 md:text-16px"
            name="name"
            id="name"
            type="text"
            maxLength={80}
            placeholder="Describe your project in one or two words"
            required
          />
          <p className="text-[#6E7180] text-[15px] font-italic">Max words 3</p>
        </div>

        <div className="mt-7">
          <label
            className="font-semibold xs:text-12px md:text-24px xs:font-bold xs:mb-1"
            htmlFor="name">
            Project Picture <span className="text-[#f54242]">*</span>
          </label>

          <div className="border-2 border-orange-peel pt-10 pb-10 my-5 flex items-center justify-center rounded-md  ">
            <label
              className="mxs:mx-10 mxs:mt-5 button-small button-deep-sky-blue cursor-pointer inline-flex gap-x-2 mt-3.5 h-14 xs:w-52"
              htmlFor="profile-upload">
              <UploadIcon />
              <span className="">Upload a picture</span>
            </label>
            <input name="profile" className="hidden" id="profile-upload" type="file" />
          </div>
        </div>

        <div className="mt-7">
          <label
            className="font-semibold xs:text-12px md:text-24px xs:font-bold xs:mb-1"
            htmlFor="name">
            Description <span className="text-[#f54242]">*</span>
          </label>

          <div data-color-mode="dark" className="border-2 h-[400px]  my-5 text-center rounded-md ">
            <MDEditor
              value={desc}
              onChange={setDesc}
              preview="edit"
            />
          </div>
          <p className="text-[#6E7180] text-[15px] font-italic">
            Tell us more about this project, a typical description talks about what it does, how it
            works, how it was built, some challenges encountered during the process, or future plans
            for it, 500 words max.
          </p>
        </div>

        <div className="mt-7">
          <label
            className="font-semibold xs:text-12px md:text-24px xs:font-bold xs:mb-1"
            htmlFor="name">
            Add Collaborators 
          </label>

          <div className="flex justify-center items-center gap-1 my-1 text-center rounded-md ">
            <SearchIcon fill="black" height={"24px"} width={"24px"} />

            <input
              className="form-input border-none text-24px rounded-lg  xs:py-1 md:text-16px"
              name="collaborators"
              id="collaborators"
              type="text"
              maxLength={60}
              placeholder="Describe your project in one or two words"
              required
            />

            <h2 className="w-[200px]">Or invite via Link  <LinkIcon fill="black" height={"18px"} width="18px" /></h2>
          </div>


          <p className="text-[#6E7180] text-[15px] font-italic">
            Tell us the team behind this amazing project, if it’s just you leave this section blank.
          </p>
        </div>

        <div className="mt-7">
          <label
            className="font-semibold xs:text-12px md:text-24px xs:font-bold xs:mb-1"
            htmlFor="name">
            Technology/Tools used or project domain <span className="text-[#f54242]">*</span>
          </label>

          <Controller
                control={control}
                name="technologies"
                render={({ field }) =>
                  <Select
                    isMulti
                    className="form-select p-0 m-rounded-lg"
                    components={{ DropdownIndicator }}
                    styles={styles}
                    options={technologies}
                    value={technologies.filter(({ value }) => field.value?.includes(value))}
                    onChange={(value) => field.onChange(value.map(({ value }) => value))}
                  />
                }
              />

          <p className="text-[#6E7180] text-[15px] font-italic">
            Select in order of relevance, the first four will be displayed on the project preview
            page.{" "}
          </p>
        </div>

        <div className="mt-7">
          <label
            className="font-semibold xs:text-12px md:text-24px xs:font-bold xs:mb-1"
            htmlFor="name">
            Project Development stage <span className="text-[#f54242]">*</span>
          </label>

          <select name="stage" className="appearance-none  text-18px text-body bg-white border-[#c1c1c1] border-2 block w-full px-3 py-2 rounded">
            <option value="" disabled selected>Select a stage for this project</option>
          </select>

          <p className="text-[#6E7180] text-[15px] font-italic">
            Tell us about the current state of this project, e.g Beta, feature update, completed,
            bug fixes, etc.
          </p>
        </div>

        <div className="mt-7">
          <label
            className="font-semibold xs:text-12px md:text-24px xs:font-bold xs:mb-1"
            htmlFor="name">
            Project Links 
          </label>

          <div className="border-2 h-[200px] pt-10 pb-10 my-5 text-center rounded-md">
            <div className="flex items-center gap-5 mt-2 mb-3 ml-5 text-18px">
              {" "}
              <GithubIcon fill="black" height={"18px"} width="18px" />{" "}
              <input type="text" name="github" placeholder="Github Link" className="pl-2 border-md " />
            </div>
            <div className="flex items-center gap-5 mt-2 mb-3 ml-5 text-18px">
              {" "}
              <FigmaIcon fill="black" height={"18px"} width="18px" />{" "}
              <input type="text" name="figma" placeholder="Figma Link" className="pl-2 border-md "  />
            </div>
            <div className="flex items-center gap-5 mt-2 mb-3 ml-5 text-18px">
              {" "}
              <AdobeIcon fill="black" height={"18px"} width="18px" />{" "}
              <input type="text" name="adobeXD" placeholder="AdobeXD Link" className="pl-2 border-md "  />
            </div>
            <div className="flex items-center gap-5 mt-2 mb-3 ml-5 text-18px">
              {" "}
              <LinkIcon fill="black" height={"18px"} width="18px" />{" "}
              <input type="text" name="links" placeholder="Other Links..." className="pl-2 border-md"  />
            </div>
          </div>
          <p className="text-[#6E7180] text-[15px] font-italic">Max of 3 please.</p>
        </div>

        {/* ReCAPTCHA */}
        <ReCAPTCHA
          className="w-fit mx-auto"
          sitekey="6LexReUeAAAAAF5a0KmF1tz26MWEFUwnhQ7crZAL"
          size="normal"
          theme={darkMode ? "dark" : "light"}
        />

        <div className="flex items-center justify-center my-2 gap-x-4  lg:gap-x-[36px] mt-[20px] lg:mt-[30px]">
          <button className="mx-0 py-0 button-medium button-orange-peel text-24px rounded ">
            Save for Later
          </button>

          <LoadingButton 
          className="mx-0 py-0 button-medium button-deep-sky-blue text-24px rounded "
          type="submit"
          isLoading={false}>
            Publish now
          </LoadingButton>
        </div>
      </form>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {

  // const projects = await projectService.getPublishedProjects({});

  return {
    props: {
      projects: ""
    }
  };
}
