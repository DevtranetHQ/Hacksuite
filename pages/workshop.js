import Logo from "../components/Logo";
import DarkModeToggle from "../components/DarkModeToggle";
import GithubIcon from "../components/icons/Github";
import Link from "next/link";
import ArrowRightIcon from "../components/icons/ArrowRight";
import WorkshopProfileCard from "../components/WorkshopProfileCard";

export const bubbleTrimmer = (bubbles, start = 0, end = 0) => {
  // prettier-ignore
  return bubbles && bubbles.length > end
              ? bubbles.slice(start, end)
              : bubbles
};

export default function Workshop({ user, project }) {
  return (
    <div className="dark:bg-[#202020] dark:text-white">
      <nav className="flex items-center justify-between pl-[10px] lg:pl-8 pr-[12px] lg:pr-12">
        <Logo className="w-[80px] md:w-[120px] py-5" />
        <form className="bg-transparent flex items-center ml-auto m-0 justify-center mt-1 pr-2">
          <div className="relative rounded-md flex  items-center p-1 border-[#03A9F4] border-[3px]">
            <div className="absolute pl-3 z-10 top-0 inset-y-0  flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black flex items-center dark:text-black"
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
              type="search"
              placeholder="I’m looking for..."
              className=" block w-full pl-10  dark:bg-transparent  rounded-lg form-input border-none p-0 m-0 py-2"
            />
          </div>
        </form>
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
        </div>
      </nav>
      <header className="bg-[#F8FBFF] container-gray-dark border-b-4 dark:border-gray-dark py-14 px-6 xs:p-14 rounded-b-2xl text-center mb-20">
        <h1 className="text-[30px] font-bold lg:title md:text-[65px] lg:text-[90px] text-deep-sky-blue">
          The Dynamics Workshops
        </h1>
        <h2 className="text-[16px] lg:lead mb-2 w-full mt-[16px] md:mt-[36px] md:mb-[28px] lg:text-[21px] xl:text-[26px] 2xl:text-[30px]">
          Makers supporting makers with unparalled learning resources from the community, learn and
          share what you’ve built or launch with us.
        </h2>
        <div className="inline-flex my-2 gap-x-4  lg:gap-x-[36px] mt-[20px] lg:mt-[30px]">
          <button className="text-white font-bold rounded-md bg-[#4CB050] py-[15px] text-[16px] px-[15px] lg:px-[70px] lg:py-[10px] lg:text-[30px]  inline-flex gap-x-2 transition-all hover:scale-[1.06] focus:outline-none">
            Attend a workshop
          </button>
          <a className="text-white font-bold rounded-md bg-[#03A9F4] py-[15px] text-[16px] px-[15px] lg:px-[70px] lg:py-[10px] lg:text-[30px]  inline-flex gap-x-2 transition-all hover:scale-[1.06] focus:outline-none">
            Add your workshop
          </a>
          {/* <div className="flex-col justify-end ml-auto right-1">
          <svg
            width="74"
            height="61"
            viewBox="0 0 104 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M55.9302 100.206L48.4636 80.7791C56.4114 78.159 63.8949 74.5218 70.8518 70.2155L55.9302 100.206ZM20.2198 50.4597L1.3705 41.6365L32.3419 28.8755C27.5539 35.5101 23.396 42.7173 20.2198 50.4597ZM89.5826 10.3914C90.9817 10.441 92.2309 10.4852 93.2714 10.7723C93.8747 17.748 92.4188 32.0054 75.4482 47.8142C66.6506 56.0578 56.275 62.2441 44.7281 66.1876L34.3567 55.3134C39.363 43.9336 46.2684 34.022 55.0124 25.8766C69.2925 12.5741 81.6875 10.1116 89.5826 10.3914ZM89.9368 0.397655C80.043 0.0469907 64.9302 2.96351 48.1666 18.5795C36.8356 29.1348 29.8629 40.9452 25.2418 51.3381C23.7099 55.0361 24.5141 59.1672 27.1632 62.0629L37.431 73.0334C39.2625 74.9996 41.7702 76.2392 44.4185 76.333C45.5678 76.3738 46.7777 76.1165 47.9429 75.7075C60.6978 71.355 72.3871 64.3523 82.2422 55.1595C111.527 27.8796 101.81 2.76971 101.81 2.76971C101.81 2.76971 97.3321 0.659768 89.9368 0.397655ZM65.2303 36.8454C61.4709 32.8097 61.6958 26.4637 65.7315 22.7043C69.7672 18.9449 76.1132 19.1698 79.8726 23.2055C83.582 27.2394 83.4071 33.5872 79.3714 37.3466C75.3357 41.106 68.9897 40.8811 65.2303 36.8454ZM35.6959 71.1708L28.9 63.8755L35.6959 71.1708ZM21.5354 98.0361L40.3687 80.4922C38.6857 79.9823 37.0633 79.1743 35.6014 78.0718L14.4899 97.7864L21.5354 98.0361ZM0.348742 97.2852L7.39432 97.5349L32.0724 74.5946L25.2265 67.2976L0.598457 90.2396L0.348742 97.2852ZM0.849944 83.1441L22.0097 63.4812C21.0135 61.945 20.3206 60.3194 19.9329 58.5546L1.09966 76.0985L0.849944 83.1441Z"
              fill="#03A9F4"
            />
          </svg>
          <svg
            width="44"
            height="42"
            viewBox="0 0 64 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M34.2111 61.0414L29.6574 49.1936C34.5046 47.5956 39.0686 45.3774 43.3114 42.7511L34.2111 61.0414ZM12.4322 30.7025L0.936473 25.3214L19.8252 17.5388C16.9051 21.5851 14.3693 25.9806 12.4322 30.7025ZM54.7348 6.26582C55.5881 6.29606 56.35 6.32307 56.9846 6.49812C57.3525 10.7525 56.4646 19.4477 46.1146 29.0891C40.7492 34.1166 34.4214 37.8895 27.3792 40.2946L21.054 33.6627C24.1071 26.7224 28.3186 20.6776 33.6513 15.7099C42.3605 7.59699 49.9199 6.09516 54.7348 6.26582ZM54.9509 0.170892C48.9169 -0.0429695 39.7 1.73575 29.4762 11.2596C22.5657 17.697 18.3133 24.8999 15.495 31.2382C14.5607 33.4936 15.0512 36.013 16.6668 37.779L22.9289 44.4697C24.0459 45.6688 25.5753 46.4248 27.1904 46.482C27.8913 46.5069 28.6292 46.3499 29.3398 46.1005C37.1187 43.4461 44.2477 39.1752 50.2582 33.5688C68.1182 16.9315 62.1922 1.61755 62.1922 1.61755C62.1922 1.61755 59.4611 0.330749 54.9509 0.170892ZM39.883 22.3995C37.5902 19.9382 37.7274 16.0679 40.1887 13.7752C42.6499 11.4824 46.5202 11.6196 48.813 14.0808C51.0753 16.541 50.9686 20.4124 48.5073 22.7052C46.046 24.9979 42.1758 24.8608 39.883 22.3995ZM21.8707 43.3337L17.7261 38.8845L21.8707 43.3337ZM13.2346 59.7182L24.7205 49.0186C23.6941 48.7076 22.7046 48.2148 21.8131 47.5424L8.93765 59.5659L13.2346 59.7182ZM0.313329 59.2602L4.61025 59.4125L19.6608 45.4218L15.4857 40.9715L0.465624 54.9633L0.313329 59.2602ZM0.619 50.6359L13.5238 38.644C12.9162 37.7071 12.4937 36.7157 12.2572 35.6394L0.771296 46.339L0.619 50.6359Z"
              fill="#FF9700"
            />
          </svg>
        </div> */}
        </div>
      </header>
      <p className="text-center flex items-center justify-center gap-x-5">
        <svg
          width="84"
          height="78"
          viewBox="0 0 104 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M61.3456 66.325L92.8456 97.825L103.923 86.485L72.4231 54.985L61.3456 66.325ZM80.8756 39.025C78.8281 39.025 76.6231 38.7625 74.8906 38.0275L15.0931 97.5625L4.01562 86.485L42.9181 47.635L33.6256 38.29L29.8456 41.965L22.2331 34.5625V49.5775L18.5581 53.2525L0.078125 34.5625L3.75313 30.8875H18.5056L11.1556 23.485L29.8456 4.795C31.2975 3.33527 33.0236 2.17689 34.9247 1.38645C36.8257 0.59601 38.8643 0.189095 40.9231 0.189095C42.982 0.189095 45.0205 0.59601 46.9216 1.38645C48.8226 2.17689 50.5487 3.33527 52.0006 4.795L40.9231 16.135L48.3256 23.485L44.5981 27.2125L53.9956 36.5575L63.5506 26.6875C62.8156 24.955 62.5006 22.75 62.5006 20.8075C62.4798 18.3837 62.9401 15.9799 63.8548 13.7352C64.7695 11.4906 66.1206 9.44974 67.8296 7.73092C69.5387 6.01211 71.5718 4.64947 73.8112 3.72195C76.0506 2.79444 78.4518 2.32047 80.8756 2.3275C83.9731 2.3275 86.7031 3.0625 89.1706 4.5325L75.1531 18.55L83.0281 26.425L97.0456 12.4075C98.5156 14.875 99.2506 17.5 99.2506 20.8075C99.2506 30.8875 91.1131 39.025 80.8756 39.025Z"
            fill="#03A9F4"
          />
        </svg>
        <span className="font-bold text-[55px]">Design your adventure...</span>
      </p>
      <div className="grid gap-10 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 content-center justify-center mt-[90px] md:px-[32px]">
        {user &&
          user.projects.map((project, index) => {
            return (
              <WorkshopProfileCard
                key={index}
                name={project.name}
                tools={project.tools}
                bubbles={bubbleTrimmer(project.bubbles, 0, 3)}
                bubbleNumber={project.bubbles.length}
                date={project.date}
                title="Web Scrapper"
                image={project.image}
                desc={project.desc}
                className="w-full flex flex-col bg-[#f8fbff] dark:bg-[#2D2D2D] rounded-xl overflow-hidden shadow-xl hover:shadow-xxl p-3"
              />
            );
          })}
      </div>
      <div className="w-full flex justify-center items-center mt-[70px] lg:mt-[167px] mb-[45px] lg:mb-[90px]">
        <button className="text-white text-[16px] lg:text-[48px] py-[13px] lg:py-[48px] px-[17px] lg:px-[44px] font-bold rounded-lg lg:rounded-[15px] bg-[#03a9f4] lg:button-big button-deep-sky-blue inline-flex items-center gap-x-3 lg:gap-x-[48px]">
          <span>View more Workshops</span>
          <div className="lg:scale-[2] relative lg:top-1">
            <ArrowRightIcon />
          </div>
        </button>
      </div>
      <footer className="bg-[#F4F4F4] dark:bg-[#444444] py-[32px]">
        <p className="text-[16px] md:text-[24px] lg:text-[32px] px-[20px] lg:px-[40px] 2xl:px-[100px] text-center">
          You’ve reached the end, why not{" "}
          <Link href="/signup">
            <span className="text-[#3e4fe4]">become a member</span>
          </Link>{" "}
          and show us all the <br className="hidden md:block"></br>cool things you’ve made?
        </p>
      </footer>
    </div>
  );
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
            tools: ["github"],
            bubbles: [1],
            date: "11:00 am, Today",
            title: "Web Scrapper",
            desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
            image: "/assets/TEST/user_projects/img-1.png"
          },
          {
            name: "Zach Latta",
            tools: ["figma", "github"],
            bubbles: [1],
            date: "12:00 pm, Today, 2020",
            title: "Tesla",
            desc: "Launched the first prototype of the world’s firts self-driving vehicle. Best part: 100% AI",
            image: "/assets/TEST/user_projects/img-2.png",
            comments: 22222,
            likes: 33333333,
            tags: ["React", "Vue", "Laravel"]
          },
          {
            name: "Zach Latta",
            tools: ["figma", "github"],
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
            name: "Zach Latta",
            tools: ["adobexd", "github"],
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
            name: "Zach Latta",
            tools: ["figma", "github"],
            bubbles: [1],
            date: "February 27, 2022",
            title: "Frelapay",
            desc: "Get payments from all your freelance work converted into the highest selling cryptos",
            image: "/assets/TEST/user_projects/img-5.png",
            comments: 22222,
            likes: 33333333,
            tags: ["HTML", "CSS", "JSON"]
          },
          {
            name: "Zach Latta",
            tools: ["adobexd", "github"],
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
            name: "Zach Latta",
            tools: ["adobexd", "github"],
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
            name: "Zach Latta",
            tools: ["adobexd", "github"],
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
            name: "Zach Latta",
            tools: ["adobexd", "github"],
            bubbles: [1],
            date: "February 28, 2020",
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
