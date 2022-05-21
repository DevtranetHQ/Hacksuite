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
      <PhotoGalleryHeader
        title="The Dynamics Projects"
        contentText="A gallery of all the awesome things the makers at The Dynamics are building and launching everyday."
        firstBtn="All Projects"
        secondBtn="Add your project"
        navText="Go back home"
        navHref="https://thedynamics.tech"
      />
      <div className="grid gap-10 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 content-center justify-center mt-[90px] lg:px-[32px]">
        {projects.map((project, index) => {
          return (
            <ProjectGalleryProjectCard
              key={index}
              project={project}
              className="w-full h-[580px] flex flex-col bg-[#f8fbff] dark:bg-[#2D2D2D] rounded-xl overflow-hidden shadow-xl hover:shadow-xxl p-3"
              onClick={() => alert(project.uniqueId)}
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
