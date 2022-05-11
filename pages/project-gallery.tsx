import Logo from "../components/Logo";
import DarkModeToggle from "../components/DarkModeToggle";
import GithubIcon from "../components/icons/Github";
import Link from "next/link";
import ArrowIcon from "../components/icons/Arrow";
import ProjectGalleryProjectCard from "../components/project/ProjectGalleryProjectCard";
import { withAuth } from "../server/middlewares/auth.middleware";
import { projectService } from "../server/modules/projects/project.service";
import { IProject } from "../server/modules/projects/project.model";
import PhotoGalleryHeader from "./../components/project/Photo-galleryHeader";

export const bubbleTrimmer = (bubbles, start = 0, end = 0): number[] => {
  return bubbles && bubbles.length > end ? bubbles.slice(start, end) : bubbles;
};

export default function ProjectGallery({ projects }: { projects: IProject[] }) {
  return (
    <div className="dark:bg-[#202020] dark:text-white">
      <nav className="flex items-center justify-between pl-[10px] lg:pl-8 pr-[12px] lg:pr-12">
        <Logo className="w-[80px] md:w-[120px] py-5" />
        <div className="flex gap-x-[0px] md:gap-x-3 lg:gap-x-5 items-center">
          <DarkModeToggle
            className="mx-0 w-[25px] md:w-[44px] lg:scale-[1.24] lg:mr-[10px]"
            darkClassName="mx-0 w-[25px] md:w-[33px] lg:w-[40px] h-[25px] md:h-[48px] lg:h-[60px]"
          />
          <a
            href="https://github.com/TheDynamics"
            className="scale-75 lg:scale-[1.4] md:scale-[1.15]">
            <GithubIcon />
          </a>
          <Link href="https://thedynamics.tech">
            <button className="px-[10px] py-[6px] md:py-[2px] bg-[#03a9f4] text-white rounded-[6px] text-[12px] md:text-[23px] lg:text-[28px] lg:button-big button-deep-sky-blue inline-flex gap-x-1 md:gap-x-3 items-center mx-2 my-0 md:my-0 focus:outline-none">
              Go back home
              <div className="scale-75 md:scale-100 lg:relative lg:top-[2px]">
                <ArrowIcon />
              </div>
            </button>
          </Link>
        </div>
      </nav>
      <PhotoGalleryHeader
        title="The Dynamics Projects"
        contentText="A gallery of all the awesome things the makers at The Dynamics are building and launching everyday."
        firstBtn="All Projects"
        secondBtn="Add your project"
      />
      <div className="grid gap-10 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 content-center justify-center mt-[90px] lg:px-[32px]">
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
      <div className="w-full flex justify-center items-center mt-[70px] lg:mt-[167px] mb-[45px] lg:mb-[90px]">
        <button className="button-medium lg:button-big button-deep-sky-blue inline-flex gap-x-3">
          View more Projects
          <ArrowIcon />
        </button>
      </div>
      <footer className="bg-[#F4F4F4] dark:bg-[#444444] py-[32px]">
        <p className="text-[16px] lg:text-[32px] px-[40px] text-center">
          You’ve reached the end, why not <a href="">become a member</a> and show us all the cool
          things you’ve made?
        </p>
      </footer>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const user = await withAuth(req => req.$user)(req, res);

  const projects = await projectService.getPublishedProjects({});

  return {
    props: {
      loggedIn: !!user,
      projects
    }
  };
}
