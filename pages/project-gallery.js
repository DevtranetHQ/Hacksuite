import Logo from "../components/Logo";
import DarkModeToggle from "../components/DarkModeToggle";
import GithubIcon from "../components/icons/Github";
import Link from "next/link";
import ArrowIcon from "../components/icons/Arrow";
import ProjectGalleryProjectCard from "../components/project/ProjectGalleryProjectCard";

export const bubbleTrimmer = (bubbles, start = 0, end = 0) => {
    // prettier-ignore
    return bubbles && bubbles.length > end
              ? bubbles.slice(start, end)
              : bubbles
  };


export default function ProjectGallery({user, project}) {
    return (
        <div className="dark:bg-[#202020] dark:text-white">
            <nav className="flex items-center justify-between pl-[10px] lg:pl-8 pr-[12px] lg:pr-12">
            <Logo className="w-[80px] md:w-[120px] py-5" />
            <div className="flex gap-x-[0px] md:gap-x-2 lg:gap-x-4 items-center">
            <DarkModeToggle
                className="mx-0 md:w-[40px] md:h-[40px]"
                darkClassName="mx-0 w-[25px] md:w-[44px] lg:w-[44px] h-[25px] md:h-[44px] lg:h-[70px]"
            />
            <a href="https://github.com/TheDynamics" className="scale-75 lg:scale-[1.55] md:scale-[1.15]">
                <GithubIcon />
            </a>
            <Link href="https://thedynamics.tech">
                <button className="px-[10px] py-[6px] md:py-[2px] bg-[#03a9f4] text-white rounded-[6px] text-[12px] md:text-[23px] lg:text-[28px] lg:button-big button-deep-sky-blue inline-flex gap-x-1 md:gap-x-3 items-center mx-2 my-0 md:my-0">
                    Go back home
                <div className="scale-75 md:scale-100">
                    <ArrowIcon />
                </div>
                </button>
            </Link>
            </div>
        </nav>
        <header className="bg-[#F8FBFF] container-gray-dark border-b-4 dark:border-gray-dark py-14 px-6 xs:p-14 rounded-b-2xl text-center">
            <h1 className="text-[30px] font-bold lg:title md:text-[65px] lg:text-[90px] text-deep-sky-blue">The Dynamics Projects</h1>
            <h2 className="text-[16px] lg:lead mb-2 w-full mt-[16px] md:mt-[36px] md:mb-[28px] lg:text-[21px] xl:text-[26px] 2xl:text-[30px]">A gallery of all the awesome things the makers at The Dynamics are building and launching everyday.</h2>
            <div className="inline-flex my-2 gap-x-4  lg:gap-x-[36px] mt-[20px] lg:mt-[30px]">
            <button className="text-white font-bold rounded-md bg-[#4CB050] py-[15px] text-[16px] px-[15px] lg:px-[70px] lg:py-[10px] lg:text-[30px]  inline-flex gap-x-2 transition-all hover:scale-[1.06]">
                All Projects
            </button>
            <a className="text-white font-bold rounded-md bg-[#03A9F4] py-[15px] text-[16px] px-[15px] lg:px-[70px] lg:py-[10px] lg:text-[30px]  inline-flex gap-x-2 transition-all hover:scale-[1.06]">
                Add your project
            </a>
            </div>
      </header>
        <div className="grid gap-10 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 content-center justify-center mt-[90px] md:px-[32px]">
          {user &&
            user.projects.map((project, index) => {
              return (
                <ProjectGalleryProjectCard
                  key={index}
                  name={project.name}
                  tools={project.tools}
                  bubbles={bubbleTrimmer(project.bubbles, 0, 3)}
                  bubbleNumber={project.bubbles.length}
                  date={project.date}
                  title="Web Scrapper"
                  likes={93}
                  image={project.image}
                  comments={27}
                  tags={bubbleTrimmer(project.tags, 0, 4)}
                  desc={project.desc}
                  className="w-full flex flex-col bg-[#f8fbff] dark:bg-[#2D2D2D] rounded-xl overflow-hidden shadow-xl hover:shadow-xxl p-3"
                />
              );
            })}
        </div>
        <div className="w-full flex justify-center items-center mt-[70px] lg:mt-[167px] mb-[45px] lg:mb-[90px]">
            <button className="text-white text-[16px] lg:text-[48px] py-[13px] lg:py-[48px] px-[17px] lg:px-[44px] font-bold rounded-lg lg:rounded-[15px] bg-[#03a9f4] lg:button-big button-deep-sky-blue inline-flex items-center gap-x-3 lg:gap-x-[48px]">
                <span>View more Projects</span>
                <div className="lg:scale-[2] relative lg:top-1">
                  <ArrowIcon />
                </div>
            </button>
        </div>
        <footer className="bg-[#F4F4F4] dark:bg-[#444444] py-[32px]">
            <p className="text-[16px] md:text-[24px] lg:text-[32px] px-[20px] lg:px-[40px] 2xl:px-[100px] text-center">You’ve reached the end, why not <Link href="/signup"><span className="text-[#3e4fe4]">become a member</span></Link> and show us all the <br className="hidden md:block"></br>cool things you’ve made?</p>
        </footer>
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
              name: "Zach Latta",
              tools: ['github'],
              bubbles: [1],
              date: "11:00 am, Today",
              title: "Web Scrapper",
              desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
              image: "/assets/TEST/user_projects/img-1.png",
              comments: 22222,
              likes: 33333333,
              tags: ["NextJs", "Figma"]
            },
            {
              name: "Elon Musk",
              tools: ['figma', 'github'],
              bubbles: [1, 2, 3, 4, 5],
              date: "12:00 pm, Today, 2020",
              title: "Tesla",
              desc: "Launched the first prototype of the world’s firts self-driving vehicle. Best part: 100% AI",
              image: "/assets/TEST/user_projects/img-2.png",
              comments: 22222,
              likes: 33333333,
              tags: ["React", "Vue", "Laravel"]
            },
            {
              name: "Dora Palfi",
              tools: ['figma', 'github'],
              bubbles: [2],
              date: "2:00 pm, Today",
              title: "Codetivate",
              desc: "The world’s largest diversity-focused hackhon web application built for this fall 2022",
              image: "/assets/TEST/user_projects/img-3.png",
              comments: 22222,
              likes: 33333333,
              tags: ["PHP", "Golang", "Adobe XD"]
            },
            {
              name: "Bill gates",
              tools: ['adobexd', 'github'],
              bubbles: [1],
              date: "February 28, 2022",
              title: "Command tech",
              desc: "Advancing the partcipation of non-binary and female students in STEM worlwide ",
              image: "/assets/TEST/user_projects/img-4.png",
              comments: 22222,
              likes: 33333333,
              tags: ["Python"]
            },
            {
              name: "Ronald",
              tools: ['figma', 'github'],
              bubbles: [1, 2, 3, 4, 5, 6],
              date: "February 27, 2022",
              title: "Frelapay",
              desc: "Get payments from all your freelance work converted into the highest selling cryptos",
              image: "/assets/TEST/user_projects/img-5.png",
              comments: 22222,
              likes: 33333333,
              tags: ["HTML", "CSS", "JSON"]
            },
            {
              name: "Mark Zuckerburg",
              tools: ['adobexd', 'github'],
              bubbles: [1],
              date: "February 28, 2020",
              title: "Microsoft",
              desc: "Coded Windows 7 a new OS from my dorm room, probably gonna dropout soon :(",
              image: "/assets/TEST/user_projects/img-6.png",
              comments: 22222,
              likes: 33333333,
              tags: ["Git", "Flask", "Django"]
            },
            {
              name: "Mark Zuckerburg",
              tools: ['adobexd', 'github'],
              bubbles: [1],
              date: "February 28, 2020",
              title: "Microsoft",
              desc: "Coded Windows 7 a new OS from my dorm room, probably gonna dropout soon :(",
              image: "/assets/TEST/user_projects/img-6.png",
              comments: 22222,
              likes: 33333333,
              tags: ["Git", "Flask", "Django"]
            },
            {
              name: "Mark Zuckerburg",
              tools: ['adobexd', 'github'],
              bubbles: [1],
              date: "February 28, 2020",
              title: "Microsoft",
              desc: "Coded Windows 7 a new OS from my dorm room, probably gonna dropout soon :(",
              image: "/assets/TEST/user_projects/img-6.png",
              comments: 22222,
              likes: 33333333,
              tags: ["Git", "Flask", "Django"]
            },
            {
              name: "Mark Zuckerburg",
              tools: ['adobexd', 'github'],
              bubbles: [1],
              date: "February 28, 2020",
              title: "Microsoft",
              desc: "Coded Windows 7 a new OS from my dorm room, probably gonna dropout soon :(",
              image: "/assets/TEST/user_projects/img-6.png",
              comments: 22222,
              likes: 33333333,
              tags: ["Git", "Flask", "Django"]
            },
          ]
        }
      }
    };
  }