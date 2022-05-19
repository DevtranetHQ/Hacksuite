import Logo from "../../../../components/Logo";
import DarkModeToggle from "../../../../components/DarkModeToggle";
import GithubIcon from "../../../../components/icons/Github";
import Link from "next/link";
import ArrowIcon from "../../../../components/icons/Arrow";
import ProjectGalleryProjectCard from "../../../../components/project/ProjectGalleryProjectCard";
import { withAuth } from "../../../../server/middlewares/auth.middleware";
import { projectService } from "../../../../server/modules/projects/project.service";
import { IProject } from "../../../../server/modules/projects/project.model";
import PhotoGalleryHeader from "../../../../components/project/Photo-galleryHeader";

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
      <div className="grid gap-10 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 content-center justify-center px-5 py-5 mt-20">
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
        <button className="text-white text-[16px] lg:text-[48px] py-[13px] lg:py-[48px] px-[17px] lg:px-[44px] font-bold rounded-lg lg:rounded-[15px] bg-[#03a9f4] lg:button-big button-deep-sky-blue inline-flex items-center gap-x-3 lg:gap-x-[48px]">
          <span>View more projects</span>
          <div className="lg:scale-[2] relative lg:top-1">
            <ArrowIcon />
          </div>
        </button>
      </div>
      <footer className="bg-[#F4F4F4] dark:bg-[#444444] py-[32px]">
        <p className="text-[16px] lg:text-[32px] px-[40px] text-center">
          You’ve reached the end, why not <a href="">become a member</a> and show us all the cool{" "}
          <br />
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
