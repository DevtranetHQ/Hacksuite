import Link from "next/link";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import DashNav from "../../components/dash/DashNav";
import DashHeader from "../../components/dash/DashHeader";
import { DashNavMobile } from "../../components/dash/DashNavMobile";
import DarkModeToggle from "../../components/DarkModeToggle";
import TextEditor from "../../components/editor/TextEditor";
import showdownConverter from "../../components/showdownConverter";
import LinkIcon from "../../components/icons/Link";
import UploadIcon from "../../components/icons/Upload";
import SearchIcon from "../../components/icons/Search";
import GitHubIcon from "../../components/icons/Github";
import FigmaIcon from "../../components/icons/Figma";
import AdobeIcon from "../../components/icons/Adobe";
import NotificationsLink from "../../components/dash/NotificationsLink";
import Select, { components } from "react-select";
import { Icon } from "@iconify/react";

export default function CreateProject({ recaptchaSitekey, choices, unread }) {
  const handleSubmission = () => {};

  const [showText, setShowText] = useState(false);
  const showMessage = () => {
    setShowText(true);
    setTimeout(() => {
      setShowText(false);
    }, [2000]);
  };
  // Multiple Select Functions
  // TODO: Work on adding colloborators
  const options = [
    { value: "Developer", label: "Elon Musk", image: "/assets/TEST/user_projects/img-6.png" },
    { value: "Founder", label: "Melinda Gates", image: "/assets/TEST/user_projects/img-6.png" },
    { value: "Student", label: "Mark Zuckerberg", image: "/assets/TEST/user_projects/img-6.png" },
    { value: "Designer", label: "Zach Latta", image: "/assets/TEST/user_projects/img-6.png" }
  ];
  const options2 = [
    { value: "TypeScripts", label: "Typescripts" },
    { value: "Python", label: "Python" },
    { value: "React", label: "React" },
    { value: "Robotics", label: "Robotics" },
    { value: "Angular", label: "Angular" }
  ];
  const styles = {
    control: provided => ({
      ...provided,
      border: 0,
      outline: "none",
      boxShadow: "none"
    }),
    menu: styles => ({ ...styles, width: "500px" }),
    option: (provided, state) => ({
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

  const [name, setName] = useState("");
  const updateName = e => {
    let newName = e.target.value;
    if (newName.split(" ").length <= 3) {
      setName(newName);
    }
  };

  const [image, setImage] = useState({
    desc: "",
    image: null
  });
  const updateImage = e => {
    // Read image from file
    const file = event.target.files[0];
    if (file.type.startsWith("image")) {
      // Image can be read
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImage({
          desc: "Image uploaded successfully.",
          image: reader.result
        });
        console.log(reader.result);
      });
      reader.addEventListener("error", () =>
        setImage({
          desc: "Error uploading image.",
          image: null
        })
      );
      reader.readAsDataURL(file);
    } else {
      // Not an image
      setImage({
        desc: "File uploaded is not an image.",
        image: null
      });
    }
  };

  const [description, setDescription] = useState("");
  const updateDescription = val => {
    setDescription(showdownConverter.makeMarkdown(val));
    console.log(showdownConverter.makeMarkdown(val));
  };

  const [technologies, setTechnologies] = useState(new Set());
  const removeTechnology = val => {
    let arr = Array.from(technologies);
    arr.splice(arr.indexOf(val), 1);
    setTechnologies(new Set(arr));
  };

  const [links, setLinks] = useState({
    github: "",
    figma: "",
    adobe: "",
    others: []
  });

  async function save(e) {
    // TODO: Handle submission
    event.preventDefault();
    const formData = new FormData(e.target);
    // name : use name
    // image : use image.image (BLOB)
    // description : use description (Markdown)
    // technologies : use technologies, loop through it
    // project stage : use formData.get("stage")
  }

  async function publish(e) {
    event.preventDefault();
    const formData = new FormData(e.target);
    if (!name.length) {
      // No name provided
    } else if (!image.image) {
      // No image provided
    } else if (!description.length) {
      // No description
    } else if (!technologies.length) {
      // No technologies
    } else if (!formData.get("stage")) {
      // No stage of development
    } else {
      // TODO: Handle submission - check for ReCAPTCHA
    }
  }

  return (
    <div className="xs:grid xs:grid-cols-12 dark:bg-[#202020]">
      <div className="mxs:hidden col-span-1 mx-auto">
        <DashNav active="/personal-projects" />
      </div>
      <div className="mxs:px-0 mxs:pt-4 dark:bg-[#202020] dark:text-white col-span-11 pl-32 pt-10 pr-10 content-center min-w-full min-h-screen">
        <DashHeader />
        <h1 className="xs:hidden mx-auto font-semibold text-36px mt-12 text-center">Projects</h1>
        <hr className="xs:mb-5 border-t-[1.4px] border-solid border-[#C9C9C9]" />
        <section className="mxs:px-5 mxs:pt-4 pt-5 px-7">
          <p className="mxs:mb-5 mxs:text-16px text-center mx-auto">
            Here you can share all the cool things you’re making and launching with{" "}
            <p className="mxs:text-16px mxs:inline">
              <span className="font-bold">The Dynamics Community,</span> and beyond!
            </p>
          </p>
          <form
            className="mxs:p-0 bg-transparent dark:bg-transparent pl-0"
            onSubmit={handleSubmission}>
            <section className="mb-5">
              <div>
                <label
                  className="mxs:mt-4 mxs:text-18px mxs:font-semibold subheadline"
                  htmlFor="name">
                  Project name
                  <span className="text-[#ff0000]">*</span>
                </label>
                <input
                  autoComplete="off"
                  className="mxs:text-16px form-input mb-1"
                  id="name"
                  placeholder="Describe your project in one or two words"
                  onChange={updateName}
                  type="text"
                  value={name}
                />
                <label className="mxs:text-16px mxs:font-semibold font-bold italic text-[#A5A5A5]">
                  Max 3 words
                </label>
              </div>
            </section>
            <section className="mxs:mb-5 mb-14">
              <label className="mxs:text-18px mxs:font-semibold subheadline">
                Project picture
                <span className="text-[#ff0000]">*</span>
              </label>
              <div className="mxs:mx-0 mxs:py-16 mxs:px-0 border-orange-peel border-4 mx-14 my-4 p-28 text-center rounded-lg flex-col items-center justify-center">
                <label
                  className="mxs:text-[11px] mxs:font-bold cursor-pointer button-small button-deep-sky-blue xs:gap-x-2 mx-auto w-fit"
                  htmlFor="picture">
                  <span className="mxs:scale-67 mxs:mr-1.5 mr-1">
                    <UploadIcon width={20} height={20} />
                  </span>
                  Upload a picture
                </label>
                <input className="hidden" id="picture" onChange={updateImage} type="file" />
                <label>{image.desc}</label>
              </div>
            </section>
            <section className="mb-5">
              <div>
                <label className="mxs:text-18px mxs:font-semibold subheadline" htmlFor="name">
                  Description
                  <span className="text-[#ff0000]">*</span>
                </label>
                <TextEditor onUpdate={updateDescription} />
                <label className="mxs:text-16px mxs:font-semibold font-bold italic text-[#A5A5A5]">
                  Tell us more about this project, a typical description talks about what it does,
                  how it works, how it was built, some challenges encountered during the process, or
                  future plans for it, 3000 characters max.
                </label>
              </div>
            </section>
            <section className="mb-5">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="mxs:text-18px mxs:font-semibold subheadline mb-5">
                    Add Collaborators
                  </h2>
                  {showText ? <p className="text-16px  text-green-500 mr-16">Link copied!</p> : ""}
                </div>

                <div className="relative rounded-md flex  items-center mb-5">
                  <div className="absolute pl-3 z-10 top-0 inset-y-0  flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mxs:h-3 mxs:w-3 h-5 w-5 text-black flex items-center dark:text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  {/* <input
                    type="search"
                    placeholder="Search"
                    className=" block w-full pl-10 form-input dark:bg-transparent  rounded-lg"
                  /> */}
                  <Select
                    className="mxs:text-14px mxs:p-0 mxs:pl-5 pl-7 form-input p-1 m-0 rounded-lg"
                    styles={styles}
                    components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                    isMulti
                    options={options}
                    formatOptionLabel={option => (
                      <div className="flex items-center ">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={option.image}
                          alt="image"
                          className="mxs:w-5 mxs:h-5 w-7 h-7 rounded-full border-2 border-orange-peel object-cover "
                        />
                        <span className="mxs:text-[14px] ml-2">{option.label}</span>
                      </div>
                    )}
                    isClearable={false}
                  />
                  <div
                    className="mxs:space-x-1 inline-flex absolute right-0 p-3 top-0 xs:gap-x-2 items-center"
                    onClick={showMessage}>
                    <span className="mxs:text-[11px] dark:text-black cursor-pointer">
                      or invite via link
                    </span>
                    <LinkIcon
                      className="mxs:w-5 mxs:h-[10px]"
                      fill="#FF9700"
                      width={29.17}
                      height={13.58}
                    />
                  </div>
                </div>
                {/* <input
                
                  autoComplete="off"
                  className="form-input mb-4"
                  id="name"
                  placeholder="Describe your project in one or two words"
                  onChange={updateName}
                  type="text"
                  value={name}
                /> */}
                <label className="mxs:text-16px mxs:font-semibold font-bold italic text-[#A5A5A5]">
                  Tell us the team behind this amazing project, if it’s just you leave this section
                  blank.
                </label>
              </div>
            </section>
            <h2 className="mxs:text-18px mxs:font-semibold mb-5 subheadline">
              Technology/tools used or project domain<span className="text-[#ff0000]">*</span>
            </h2>

            <section className="mb-5">
              <div className="mb-4">
                <Select
                  className="mxs:text-[14px] form-select p-1 m-0 rounded-lg"
                  styles={styles}
                  components={{ DropdownIndicator }}
                  isMulti
                  options={options2}
                />
              </div>

              {/* <div className="form-input flex flex-wrap gap-2 relative z-[2] min-h-[47px]">
                {Array.from(technologies).map((value, key) => (
                  <button
                    className="bg-[#E6E6E6] border border-[#442929] cursor-default inline-flex gap-x-4 items-center justify-between px-3 rounded text-15px h-fit"
                    key={key}>
                    <span className="pt-0.5">{value}</span>
                    <span className="cursor-pointer" onClick={() => removeTechnology(value)}>
                      &times;
                    </span>
                  </button>
                ))}
                <select
                  className="absolute top-0 right-2 col-span-1 form-select bg-transparent border-0 text-transparent w-fit z-[1]"
                  id="personalDescription">
                  {choices.technologies.map((value, key) => (
                    <option
                      className="text-black"
                      key={key}
                      onClick={event =>
                        setTechnologies(new Set([...technologies, event.target.value]))
                      }
                      value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div> */}
              <label className="mxs:text-16px mxs:font-semibold font-bold italic text-[#A5A5A5]">
                Select in order of relevance, the first four will be displayed on the project
                preview page.
              </label>
            </section>
            <h2 className="mxs:text-18px mxs:font-semibold mb-5 subheadline">
              Project development stage<span className="text-[#ff0000]">*</span>
            </h2>
            <section className="mxs:text-[11px] mb-5">
              <select className="form-input form-select mb-5 rounded-lg" name="stage">
                {choices.stages.map((value, key) => (
                  <option key={key} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <label
                className="mxs:text-16px mxs:font-semibold font-bold italic text-[#A5A5A5] "
                htmlFor="choices">
                Tell us about the current state of this project, e.g beta, feature update,
                completed, bug fixes, etc.
              </label>
            </section>
            <h2 className="mxs:text-18px mxs:font-semibold mb-5 subheadline">
              Project links<span className="text-[#ff0000]">*</span>
            </h2>
            <section className="mb-5">
              <div className="form-input">
                <div className="flex flex-col gap-y-6 items-center w-fit mb-4">
                  <style jsx>{`
                    .default-input::-webkit-input-placeholder {
                      color: black;
                    }

                    .default-input:-moz-placeholder {
                      color: black;
                      opacity: 1;
                    }

                    .default-input::-moz-placeholder {
                      color: black;
                      opacity: 1;
                    }

                    .default-input:-ms-input-placeholder {
                      color: black;
                    }

                    .default-input::-ms-input-placeholder {
                      color: black;
                    }

                    .default-input::placeholder {
                      color: black;
                    }
                  `}</style>
                  <div className="inline-flex gap-x-2 items-center">
                    <GitHubIcon width={39.17} height={38.22} />
                    <input
                      className="mxs:text-12px default-input bg-[#E6E6E6] border border-[#442929] focus:outline-none m-0 px-2 py-0.5 rounded text-15px h-fit"
                      placeholder="GitHub..."
                      type="text"
                    />
                  </div>
                  <div className="flex items-center gap-x-5">
                    <FigmaIcon width={22.67} height={34} />
                    <input
                      className="mxs:text-12px default-input bg-[#E6E6E6] border border-[#442929] focus:outline-none m-0 px-2 py-0.5 rounded text-15px "
                      placeholder="Figma..."
                      type="text"
                    />
                  </div>
                  <div className="inline-flex gap-x-2 items-center">
                    <AdobeIcon width={39} height={38.03} />
                    <input
                      className="mxs:text-12px default-input bg-[#E6E6E6] border border-[#442929] focus:outline-none m-0 px-2 py-0.5 rounded text-15px"
                      placeholder="AdobeXD..."
                      type="text"
                    />
                  </div>
                  <div className="inline-flex gap-x-2 items-center">
                    <LinkIcon fill="#FF9700" width={39.17} height={19.58} />
                    <input
                      className="mxs:text-12px mxs:px-2 mxs:py-0.5 focus:outline-none"
                      placeholder="Enter other links..."
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <label className="mxs:text-16px mxs:font-semibold font-bold italic text-[#A5A5A5]">
                Max of 3 please.
              </label>
            </section>
            <section className="mxs:mb-5 text-center mt-5">
              <ReCAPTCHA
                className="mxs:scale-75 inline-block mb-3"
                sitekey={recaptchaSitekey}
                onChange={i => console.log(i)}
              />
              <div className="mxs:mb-28 mxs:space-x-7 flex items-center justify-center xs:gap-x-14 mt-5">
                <button
                  className="mxs:text-16px mxs:font-bold mxs:px-5 mxs:py-2 mxs:rounded button-big   px-20 xs:w-[230px] text-22px  button-orange-peel"
                  type="submit">
                  Save for later
                </button>
                <button
                  className="mxs:text-16px mxs:font-bold mxs:px-5 mxs:py-2 mxs:rounded button-big button-deep-sky-blue  px-20 xs:w-[230px] text-22px "
                  type="submit">
                  Publish now
                </button>
              </div>
            </section>
          </form>
        </section>
      </div>
      <div className="xs:hidden">
        <DashNavMobile />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // TODO: Update with technologies from database
  return {
    props: {
      recaptchaSitekey: process.env.RECAPTCHA_SITEKEY,
      choices: {
        technologies: ["TypeScript", "Python", "Robotics"],
        stages: [
          "Alpha",
          "Beta",
          "Feature update",
          "Completed",
          "Bug fixes",
          "In development",
          "Other"
        ]
      }
    }
  };
}
