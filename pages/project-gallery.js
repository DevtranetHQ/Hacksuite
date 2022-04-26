import Logo from "../components/Logo";
import DarkModeToggle from "../components/DarkModeToggle";
import GithubIcon from "../components/icons/Github";
import Link from "next/link";
import ArrowIcon from "../components/icons/Arrow";
import ProfileProjectCard from "../components/project/ProfileProjectCard";

export const bubbleTrimmer = (bubbles, start = 0, end = 0) => {
    // prettier-ignore
    return bubbles && bubbles.length > end
              ? bubbles.slice(start, end)
              : bubbles
  };


export default function ProjectGallery({user, project}) {
    return (
        <div className="dark:bg-[#202020] dark:text-white">
            <nav className="flex items-center justify-between pl-8 pr-12">
            <Logo className="w-[120px] py-5" />
            <div className="flex gap-x-2">
            <DarkModeToggle
                className="mx-0 w-[40px] h-[40px]"
                darkClassName="mx-0 w-[40px] h-[42px]"
            />
            <a href="https://github.com/TheDynamics">
                <GithubIcon />
            </a>
            <Link href="/profile/1">
                <button className="button-medium button-deep-sky-blue inline-flex gap-x-3 items-center mx-2">
                    Go back home
                <ArrowIcon />
                </button>
            </Link>
            </div>
        </nav>
        <header className="bg-[#F8FBFF] container-gray-dark border-b-4 dark:border-gray-dark p-14 rounded-b-2xl text-center">
            <h1 className="title text-deep-sky-blue">The Dynamics Projects</h1>
            <h2 className="lead mb-2">A gallery of all the awesome things the makers at The Dynamics are building and launching everyday.</h2>
            <div className="inline-flex my-2">
            <button className="button-medium button-fruit-salad inline-flex gap-x-2">
                All Projects
            </button>
            <a className="button-medium button-deep-sky-blue inline-flex gap-x-2" href="#comments">
                Add your project
            </a>
            </div>
      </header>
        <div className="grid gap-10 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 content-center justify-center mt-[90px]">
          {user &&
            user.projects.map((project, index) => {
              return (
                <ProfileProjectCard
                  key={index}
                  bubbles={bubbleTrimmer(project.bubbles, 0, 3)}
                  date="ferbrary 28, 2020"
                  title="Web Scrapper"
                  likes={93}
                  image={project.image}
                  comments={27}
                  tags={bubbleTrimmer(project.tags, 0, 4)}
                  desc={project.desc}
                />
              );
            })}
        </div>
        <div className="flex justify-center mt-[167px] mb-[90px]">
            <button className="button-big button-deep-sky-blue inline-flex gap-x-3 mx-auto">
                View more Projects 
                <ArrowIcon />
            </button>
        </div>

        </div>
    )
}

export async function getServerSideProps(context) {
    // TODO: Call API for User profile data
    return {
      props: {
        loggedIn: false,
        user: {
          name: "Zach Latter",
          no_of_followers: 10,
          followers: [
            { image: "/assets/TEST/img-1.jpg" },
            { image: "/assets/TEST/img-2.jpg" },
            { image: "/assets/TEST/img-3.jpg" },
            { image: "/assets/TEST/img-4.jpg" },
            { image: "/assets/TEST/img-5.jpg" },
            { image: "/assets/TEST/img-6.jpg" },
            { image: "/assets/TEST/img-7.jpg" },
            { image: "/assets/TEST/img-8.jpg" },
            { image: "/assets/TEST/img-9.jpg" },
            { image: "/assets/TEST/img-10.jpg" }
          ],
          projects: [
            {
              bubbles: [1, 2, 3, 4, 5, 6],
              date: "ferbrary 28, 2020",
              title: "Web Scrapper",
              desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
              image: "/assets/TEST/user_projects/img-1.png",
              comments: 22222,
              likes: 33333333,
              tags: ["NextJs", "Figma"]
            },
            {
              bubbles: [1, 2, 3],
              date: "ferbrary 28, 2020",
              title: "Tesla",
              desc: "Launched the first prototype of the world’s firts self-driving vehicle. Best part: 100% AI",
              image: "/assets/TEST/user_projects/img-2.png",
              comments: 22222,
              likes: 33333333,
              tags: ["React", "Vue", "Express", "Laravel"]
            },
            {
              bubbles: [2],
              date: "ferbrary 28, 2020",
              title: "Codetivate",
              desc: "The world’s largest diversity-focused hackhon web application built for this fall 2022",
              image: "/assets/TEST/user_projects/img-3.png",
              comments: 22222,
              likes: 33333333,
              tags: ["PHP", "Golang", "Adobe XD"]
            },
            {
              bubbles: [],
              date: "ferbrary 28, 2020",
              title: "Command tech",
              desc: "Advancing the partcipation of non-binary and female students in STEM worlwide ",
              image: "/assets/TEST/user_projects/img-4.png",
              comments: 22222,
              likes: 33333333,
              tags: ["Python"]
            },
            {
              bubbles: [1, 2, 3, 4, 5, 6],
              date: "ferbrary 28, 2020",
              title: "Frelapay",
              desc: "Get payments from all your freelance work converted into the highest selling cryptos",
              image: "/assets/TEST/user_projects/img-5.png",
              comments: 22222,
              likes: 33333333,
              tags: ["HTML", "CSS", "JSON"]
            },
            {
              bubbles: [1, 2],
              date: "ferbrary 28, 2020",
              title: "Microsoft",
              desc: "Coded Windows 7 a new OS from my dorm room, probably gonna dropout soon :(",
              image: "/assets/TEST/user_projects/img-6.png",
              comments: 22222,
              likes: 33333333,
              tags: ["Git", "Flask", "Django"]
            }
          ]
        }
      }
    };
  }