import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import DashNav from "../../components/dash/DashNav";
import DarkModeToggle from "../../components/DarkModeToggle";
import TextEditor from "../../components/editor/TextEditor";
import showdownConverter from "../../components/showdownConverter";
import LinkIcon from "../../components/icons/Link";
import UploadIcon from "../../components/icons/Upload";
import SearchIcon from "../../components/icons/Search";
import GitHubIcon from "../../components/icons/Github";
import FigmaIcon from "../../components/icons/Figma";
import AdobeIcon from "../../components/icons/Adobe";

export default function CreateProject({ recaptchaSitekey, choices }) {
  // TODO: Work on adding colloborators

  const [name, setName] = useState("");
  const updateName = e => {
    let newName = e.target.value;
    if (newName.split(" ").length <= 3) {
      setName(newName);
    }
  };

  const [image, setImage] = useState({
    desc: "No image uploaded.",
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
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <DashNav active="/personal-projects" />
      </div>
      <div className="dark:bg-[#202020] dark:text-white col-span-10 p-10 relative">
        <header className="border-b-2 flex items-center justify-center pb-10">
          <h1 className="ml-auto title">Projects</h1>
          <div className="ml-auto">
            <DarkModeToggle />
            <Link href="/app/notifications">
              <svg
                className="cursor-pointer inline fill-deep-sky-blue mx-2"
                width="37"
                height="43"
                viewBox="0 0 37 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5833 38.125H22.4167C22.4167 40.2792 20.6542 42.0417 18.5 42.0417C16.3458 42.0417 14.5833 40.2792 14.5833 38.125ZM36.125 34.2084V36.1667H0.875V34.2084L4.79167 30.2917V18.5417C4.79167 12.4709 8.70833 7.18335 14.5833 5.42085V4.83335C14.5833 2.67919 16.3458 0.916687 18.5 0.916687C20.6542 0.916687 22.4167 2.67919 22.4167 4.83335V5.42085C28.2917 7.18335 32.2083 12.4709 32.2083 18.5417V30.2917L36.125 34.2084ZM28.2917 18.5417C28.2917 13.0584 23.9833 8.75002 18.5 8.75002C13.0167 8.75002 8.70833 13.0584 8.70833 18.5417V32.25H28.2917V18.5417Z" />
              </svg>
            </Link>
          </div>
        </header>
        <section className="pt-7 px-7">
          <p>
            Here you can share all the cool things you’re making and launching with The Dynamics
            Community, and beyond!
          </p>
          <form className="bg-transparent dark:bg-transparent pl-0" onSubmit={handleSubmission}>
            <section className="mb-5">
              <div>
                <label className="subheadline" htmlFor="name">
                  Project Name
                  <span className="text-[#ff0000]">*</span>
                </label>
                <input
                  autoComplete="off"
                  className="form-input mb-1"
                  id="name"
                  placeholder="Describe your project in one or two words"
                  onChange={updateName}
                  type="text"
                  value={name}
                />
                <label className="font-bold italic text-[#A5A5A5]">Max 3 words</label>
              </div>
            </section>
            <section className="mb-14">
              <label className="subheadline">
                Project Picture
                <span className="text-[#ff0000]">*</span>
              </label>
              <div className="border-orange-peel border-4 mx-14 my-4 p-14 rounded-md text-center">
                <label
                  className="cursor-pointer button-medium button-deep-sky-blue mx-auto w-fit"
                  htmlFor="picture">
                  <span className="mr-1">
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
                <label className="subheadline" htmlFor="name">
                  Description
                  <span className="text-[#ff0000]">*</span>
                </label>
                <TextEditor onUpdate={updateDescription} />
                <label className="font-bold italic text-[#A5A5A5]">
                  Tell us more about this project, a typical description talks about what it does,
                  how it works, how it was built, some challenges encountered during the process, or
                  future plans for it, 3000 characters max.
                </label>
              </div>
            </section>
            <h2 className="mb-5 subheadline">
              Technology/tools used or project domain<span className="text-[#ff0000]">*</span>
            </h2>
            <section className="mb-5">
              <div className="form-input flex flex-wrap gap-2 relative z-[2] min-h-[47px]">
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
              </div>
              <label className="font-bold italic text-[#A5A5A5]">
                Select in order of relevance, the first four will be displayed on the project
                preview page.
              </label>
            </section>
            <h2 className="mb-5 subheadline">
              Project development stage<span className="text-[#ff0000]">*</span>
            </h2>
            <section className="mb-5">
              <select className="form-input form-select" name="stage">
                {choices.stages.map((value, key) => (
                  <option key={key} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <label className="font-bold italic text-[#A5A5A5]" htmlFor="choices">
                Tell us about the current state of this project, e.g beta, feature update,
                completed, bug fixes, etc.
              </label>
            </section>
            <h2 className="mb-5 subheadline">
              Project links<span className="text-[#ff0000]">*</span>
            </h2>
            <section className="mb-5">
              <div className="form-input">
                <div className="flex flex-col gap-y-4 items-center w-fit">
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
                      className="default-input bg-[#E6E6E6] border border-[#442929] focus:outline-none m-0 px-2 py-0.5 rounded text-15px h-fit"
                      placeholder="GitHub..."
                      type="text"
                    />
                  </div>
                  <div className="inline-flex gap-x-2 items-center">
                    <FigmaIcon width={22.67} height={34} />
                    <input
                      className="default-input bg-[#E6E6E6] border border-[#442929] focus:outline-none m-0 px-2 py-0.5 rounded text-15px"
                      placeholder="Figma..."
                      type="text"
                    />
                  </div>
                  <div className="inline-flex gap-x-2 items-center">
                    <AdobeIcon width={39} height={38.03} />
                    <input
                      className="default-input bg-[#E6E6E6] border border-[#442929] focus:outline-none m-0 px-2 py-0.5 rounded text-15px"
                      placeholder="AdobeXD..."
                      type="text"
                    />
                  </div>
                  <div className="inline-flex gap-x-2 items-center">
                    <LinkIcon fill="#FF9700" width={39.17} height={19.58} />
                    <input
                      className="focus:outline-none"
                      placeholder="Enter other links..."
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <label className="font-bold italic text-[#A5A5A5]">Max of 3 please.</label>
            </section>
            <section className="text-center">
              <ReCAPTCHA
                className="inline-block mb-3"
                sitekey={recaptchaSitekey}
                onChange={i => console.log(i)}
              />
              <div className="flex items-center justify-center">
                <button className="button-medium button-orange-peel" type="submit">
                  Save for later
                </button>
                <button className="button-medium button-deep-sky-blue" type="submit">
                  Publish now
                </button>
              </div>
            </section>
          </form>
        </section>
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
