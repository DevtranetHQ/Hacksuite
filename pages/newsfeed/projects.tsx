import Link from "next/link";
import FullNav from "../../components/newsfeed/index";
import ProjectGalleryProjectCard from "../../components/project/ProjectGalleryProjectCard";
import { withAuth } from "../../server/middlewares/auth.middleware";
import { projectService } from "../../server/modules/projects/project.service";
import { IProject } from "../../server/modules/projects/project.model";
import { useEffect, useState } from "react";

const ArrowUp = () => (
  <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.251953 7.70233H6.08529V20.7995L9.01654 20.8436V7.70233H14.8353L7.54362 0.36084L0.251953 7.70233Z"
      fill="white"
    />
  </svg>
);

const Projects = ({ projects }: { projects: IProject[] }) => {
  // check scroll
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="projects" className="dark:bg-[#202020] dark:text-white">
        <FullNav />
        <div className="grid gap-10 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 content-center justify-center px-5 py- mt-20 pb-10 ">
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
      </section>

      <Link href="#projects">
        <span
          className={`fixed bottom-0 right-0 flex items-center bg-deep-sky-blue z-[20] px-6 py-3 gap-x-4 rounded-md mb-7 font-semibold text-18px cursor-pointer ${
            scrollY > 100 ? null : "hidden"
          }`}
          style={{
            right: "2rem",
            color: "#ffffff"
          }}>
          {" "}
          <ArrowUp />
          Back to top{" "}
        </span>
      </Link>
    </>
  );
};

export default Projects;

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
