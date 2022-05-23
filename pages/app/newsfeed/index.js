import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState } from "react";
import DarkModeContext from "../../../components/DarkModeContext";
import DarkModeToggle from "../../../components/DarkModeToggle";
import NotificationsLink from "../../../components/dash/NotificationsLink";
import { DashNavMobile, MenuMobile } from "../../../components/dash/DashNavMobile";
import bars from "../../../public/assets/dash/bars-solid.svg";
import DashNav from "../../../components/dash/DashNav";
import DashHeader from "../../../components/dash/DashHeader";
import { withAuth } from "../../../server/middlewares/auth.middleware";
import { profileService } from "../../../server/modules/social/profile.service";
import { projectService } from "../../../server/modules/projects/project.service";
import ProjectGalleryProjectCard from "../../../components/project/ProjectGalleryProjectCard";


// Icons
const ArrowRightIcon = ({ className }) => (
  <svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
    <path d="M22.4609 12V8.18182H0V3.81818H22.4609V0L31.5316 6L22.4609 12Z" fill="white" />
  </svg>
)


// Components
const ScrapBook = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 md:space-x-5 md:p-5 p-1 dark:text-white ">
    <div className="dark:text-white">
      <h1>ScrapBook</h1>
    </div>
  </div>
)

const Projects = ({ projects }) => (
  <div className="grid grid-cols-1 gap-y-8 md:p-5 p-1 dark:text-white w-[70%] ml-7">
    {projects.map((project, index) => {
      return (
        <ProjectGalleryProjectCard
          key={index}
          project={project}
          className="w-full h-[580px] flex flex-col bg-[#f8fbff] dark:bg-[#2D2D2D] rounded-xl overflow-hidden shadow-xl hover:shadow-xxl p-3"
        />
      );
    })}
  </div>
)

const People = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 md:space-x-5 md:p-5 p-1 dark:text-white">
    <div className="dark:text-white">
      <h1>People</h1>
    </div>
  </div>
)

const Jobs = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 md:space-x-5 md:p-5 p-1 dark:text-white">
    <div className="dark:text-white">
      <h1>Jobs</h1>
    </div>
  </div>
)

const VerifiedIcon = ({ className }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
    <path d="M24.25 12.3357L21.5882 9.30299L21.9591 5.28844L18.0209 4.3939L15.9591 0.924805L12.25 2.51753L8.54091 0.924805L6.47909 4.3939L2.54091 5.27753L2.91182 9.29208L0.25 12.3357L2.91182 15.3684L2.54091 19.3939L6.47909 20.2884L8.54091 23.7575L12.25 22.1539L15.9591 23.7466L18.0209 20.2775L21.9591 19.383L21.5882 15.3684L24.25 12.3357ZM10.0682 17.7903L5.70455 13.4266L7.24273 11.8884L10.0682 14.703L17.2573 7.5139L18.7955 9.06299L10.0682 17.7903Z" fill="#03A9F4" />
  </svg>
)

const Newsfeed = ({ admin, projects, people }) => {
  const router = useRouter();
  const { pathname } = router;
  const { darkMode } = useContext(DarkModeContext);
  const [menu, setMenu] = useState(true);

  const reducedProjectObj = projects.slice(0, 2);

  const handleBars = () => {
    setMenu(r => !r);
  };

  let title = "";

  switch (pathname) {
    case "/app/notifications":
      title = "Notifications";
      break;
    case "/app/settings":
      title = "Account Settings";
      break;
    case "/app/personal-projects":
      title = "Projects";
      break;
    case "/app/create-project":
      title = "Projects";
      break;
  }

  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="xs:grid xs:grid-cols-12 dark:bg-[#202020]">
      <div className="mxs:hidden col-span-1 mx-auto">
        <DashNav admin={admin} />
      </div>

      <div className="mxs:flex mxs:flex-col mxs:justify-between mxs:px-0 mxs:pt-4 dark:bg-[#202020] dark:text-white col-span-11 p-10 pb-0 mx-auto content-center min-w-full">
        <div className="text-right flex items-center justify-end self-end mxs:mb-0.5 fixed top-[2.5rem] right-[8rem]">
          <form className="bg-transparent flex items-center ml-auto m-0 justify-center pr-2 dark:bg-transparent text-white dark:bg-white p-0">
            <div className="relative rounded-md flex items-center p-0 border-[#03A9F4] border-[3px] md:w-full ml-auto">
              <div className="absolute md:pl-3 pl-1 z-10 top-0 inset-y-0  flex items-center pointer-events-none md:w-full w-2/4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#7D7D7D] flex items-center dark:text-white"
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
              <input
                type="text"
                placeholder="I’m looking for..."
                className=" block w-full md:pl-10 pl-8  dark:bg-transparent rounded-lg form-input border-none p-0 m-0 md:py-1 dark:text-white text-black"
              />
            </div>
          </form>
          <DarkModeToggle
            className="mxs:mr-1 h-[22px] xs:h-[30px]"
            darkClassName="mxs:mr-1 mxs:mb-[2px] h-[20px] xs:h-[30px]"
          />
          <NotificationsLink />
          <div onClick={handleBars} className="xs:hidden relative w-[22px] -mb-1 ml-1">
            <Image src={bars} alt="bars-solid" />
          </div>
        </div>

        <MenuMobile menu={menu} onClick={handleBars} />
      </div>

      <section className="w-[55rem] ml-[12rem]">
        <nav className="flex justify-start items-center gap-20 transition-all w-[max-content] mx-auto mb-10 mt-1">
          <p
            onClick={e => {
              e.preventDefault();
              setOpenTab(1);
            }}
            className={
              openTab === 1
                ? "text-[20px] font-bold cursor-pointer relative border-b-4 border-orange-peel text-[#1A1A1A] dark:text-white transition-all duration-250"
                : "text-[20px] font-bold cursor-pointer relative  text-[#6E7180] border-b-4 border-transparent transition-all duration-250"
            }>
            SCRAPBOOK
          </p>

          <p
            onClick={e => {
              e.preventDefault();
              setOpenTab(2);
            }}
            className={
              openTab === 2
                ? "text-[20px] font-bold cursor-pointer relative border-b-4 border-orange-peel text-[#1A1A1A] dark:text-white transition-all duration-250"
                : "text-[20px] font-bold cursor-pointer relative  text-[#6E7180] border-b-4 border-transparent transition-all duration-250"
            }>
            PROJECTS
          </p>

          <p
            onClick={e => {
              e.preventDefault();
              setOpenTab(3);
            }}
            className={
              openTab === 3
                ? "text-[20px] font-bold cursor-pointer relative border-b-4 border-orange-peel text-[#1A1A1A] dark:text-white transition-all duration-250"
                : "text-[20px] font-bold cursor-pointer relative  text-[#6E7180] border-b-4 border-transparent transition-all duration-250"
            }>
            PEOPLE
          </p>

          <p
            onClick={e => {
              e.preventDefault();
              setOpenTab(4);
            }}
            className={
              openTab === 4
                ? "text-[20px] font-bold cursor-pointer relative border-b-4 border-orange-peel text-[#1A1A1A] dark:text-white transition-all duration-250"
                : "text-[20px] font-bold cursor-pointer relative  text-[#6E7180] border-b-4 border-transparent transition-all duration-250"
            }>
            JOBS
          </p>
        </nav>

        {openTab === 1 ? (
          <ScrapBook />
        ) : null}

        {openTab === 2 ? (
          <Projects projects={reducedProjectObj} />
        ) : null}

        {openTab === 3 ? (
          <People />
        ) : null}

        {openTab === 4 ? (
          <Jobs />
        ) : null}

      </section>

      <section className="fixed right-0 top-[8rem]">
        <h3 className="mb-7 text-[23px] dark:text-white">Featured people</h3>

        <div className="bg-[#F8FBFF] rounded h-[max-content] dark:bg-[#202020]">
          {
            people.map(person => {
              return (
                <div className={`p-4 px-6 ${person.id !== people[people.length - 1].id ? "border-b border-b-[#A5A5A5]" : ""} grid grid-cols-3 gap-x-3 items-center`} key={person.id}>
                  <div className="">
                    <img src={person.image} />
                  </div>

                  <div className="ml-[-3.5rem]">
                    <p className="flex gap-x-3 items-center text-[1.2rem]">
                      {person.username} {person.verified === true ? <VerifiedIcon className="w-[1rem] h-[1rem]" /> : null}
                    </p>

                    <p className="text-[.9rem]">
                      {person.roles}
                    </p>
                  </div>

                  <button className={`justify-self-start py-1 px-3 ml-9 rounded ${person.following ? "bg-deep-sky-blue text-white" : "bg-white"}`}>
                    {person.following ? "Unfollow" : "Follow"}
                  </button>
                </div>
              )
            })
          }

          <div className="flex items-center justify-center mt-3">
            <button className="py-2 px-3 rounded bg-deep-sky-blue text-white flex items-center justify-center">
              View more <ArrowRightIcon className="w-[1.2rem] h-[1.2rem] ml-3" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsfeed


export async function getServerSideProps({ req, res }) {
  const user = await withAuth(req => req.$user)(req, res);
  const profile = await profileService.getCompletedProfile(user.uniqueId);

  const projects = await projectService.getPublishedProjects({});

  const people = [
    {
      id: 0,
      username: "Belle See",
      roles: "Founder, CommandTech",
      image: "/assets/TEST/people-1.png",
      verified: true,
      following: true
    },
    {
      id: 1,
      username: "Ibrahim Salami",
      roles: "Software Engineer, Meta",
      image: "/assets/TEST/people-2.png",
      verified: false,
      following: false
    },
    {
      id: 2,
      username: "Dora Palfi",
      roles: "Founder, ImagiLabs",
      image: "/assets/TEST/people-3.png",
      verified: false,
      following: false
    },
    {
      id: 3,
      username: "Dev Agrawal",
      roles: "Senior Software Engineer",
      image: "/assets/TEST/people-4.png",
      verified: true,
      following: false
    },
    {
      id: 4,
      username: "Melinda Gates",
      roles: "Jeff Bezos’s Ex-wife",
      image: "/assets/TEST/people-1.png",
      verified: false,
      following: false
    },
    {
      id: 5,
      username: "Dev Agrawal",
      roles: "Senior Software Engineer",
      image: "/assets/TEST/people-4.png",
      verified: true,
      following: false
    },
  ]

  return {
    props: {
      admin: false,
      name: profile.firstName,
      projects,
      people
    }
  };
}