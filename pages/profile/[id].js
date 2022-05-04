import Link from "next/link";
import { useState } from "react";
import Avatar from "../../components/Avatar";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import ProfileImg from "../../public/assets/TEST/profile.jpg";
import ArrowIcon from "../../components/icons/Arrow";
import FollowerIcon from "../../components/icons/Follower";
import GithubIcon from "../../components/icons/Github";
import TwitterIcon from "../../components/icons/Twitter";
import ProfileProjectCard from "../../components/project/ProfileProjectCard";
import LinkedinIcon from "../../components/icons/Linkedin";
import Empty from "../../components/Empty";

import Scrapbook from "./Scrapbook";

/**
 * takes initial array and returns trimmed array
 * @function
 *
 * @param {*[]} bubbles - Object array to be trimmed
 * @param {Number} [start = 0] - Start value for trim
 * @param {NUmber} [end = 0] - end value for trim
 * @returns {*[]} trimmed array
 */

export const bubbleTrimmer = (bubbles, start = 0, end = 0) => {
  // prettier-ignore
  return bubbles && bubbles.length > end
            ? bubbles.slice(start, end)
            : bubbles
};

export default function Profile({ loggedIn, user }) {
  // ======= Tab state -->
  // TODO: Set nav state for project and scrapbook
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="dark:bg-[#202020] dark:text-white">
      {/* ====== NavBar start */}
      
      {/* <nav className="flex items-center justify-between pl-8 pr-12">
        <Logo className="w-[120px] py-5" />
        <div className="flex gap-x-2">
          <DarkModeToggle
            className="mx-0 w-[40x] h-[40px]"
            darkClassName="mx-0 w-[40px] h-[42px]"
          />
          <a href="https://github.com/TheDynamics">
            <svg
              width="40"
              height="40"
              viewBox="0 0 63 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M31.501 0.479004C27.3972 0.479004 23.3335 1.31692 19.5421 2.94492C15.7507 4.57292 12.3057 6.95912 9.40389 9.96727C3.54338 16.0425 0.250977 24.2823 0.250977 32.874C0.250977 47.1925 9.21973 59.3406 21.626 63.6492C23.1885 63.9083 23.6885 62.9041 23.6885 62.0294V56.5547C15.0322 58.4984 13.1885 52.2137 13.1885 52.2137C11.751 48.4559 9.71973 47.4517 9.71973 47.4517C6.87598 45.4432 9.93848 45.508 9.93848 45.508C13.0635 45.7348 14.7197 48.8447 14.7197 48.8447C17.4385 53.7687 22.0322 52.3109 23.8135 51.5335C24.0947 49.4278 24.9072 48.0024 25.7822 47.1925C18.8447 46.3827 11.5635 43.5967 11.5635 31.2542C11.5635 27.6584 12.751 24.7752 14.7822 22.4752C14.4697 21.6653 13.376 18.2962 15.0947 13.9229C15.0947 13.9229 17.7197 13.0482 23.6885 17.2272C26.1572 16.5145 28.8447 16.1582 31.501 16.1582C34.1572 16.1582 36.8447 16.5145 39.3135 17.2272C45.2822 13.0482 47.9072 13.9229 47.9072 13.9229C49.626 18.2962 48.5322 21.6653 48.2197 22.4752C50.251 24.7752 51.4385 27.6584 51.4385 31.2542C51.4385 43.6291 44.126 46.3503 37.1572 47.1601C38.2822 48.1644 39.3135 50.1405 39.3135 53.1532V62.0294C39.3135 62.9041 39.8135 63.9407 41.4072 63.6492C53.8135 59.3082 62.751 47.1925 62.751 32.874C62.751 28.6198 61.9427 24.4073 60.3722 20.4769C58.8018 16.5466 56.4999 12.9754 53.5981 9.96727C50.6962 6.95912 47.2513 4.57292 43.4598 2.94492C39.6684 1.31692 35.6048 0.479004 31.501 0.479004Z"
                fill="#03A9F4"
              />
            </svg>
          </a>
          <Link href="/">
            <button className="button-medium button-deep-sky-blue inline-flex gap-x-3 items-center mx-2">
              <svg
                width="41"
                height="16"
                viewBox="0 0 41 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M28.2 15.7001V10.8H-1.70001V5.20005H28.2V0.300049L40.275 8.00005L28.2 15.7001Z"
                  fill="white"></path>
              </svg>
            </button>
          </Link>
        </div>
      </nav> */}
      <nav className="flex items-center justify-between pl-[10px] lg:pl-8 pr-[12px] lg:pr-12">
            <Logo className="w-[80px] md:w-[120px] py-5" />
            <div className="flex gap-x-[0px] md:gap-x-3 lg:gap-x-5 items-center">
            <DarkModeToggle
                className="mx-0 w-[25px] md:w-[44px] lg:scale-[1.24] lg:mr-[10px]"
                darkClassName="mx-0 w-[25px] md:w-[33px] lg:w-[40px] h-[25px] md:h-[48px] lg:h-[60px]"
            />
            <a href="https://github.com/TheDynamics" className="scale-75 lg:scale-[1.4] md:scale-[1.15]">
                <GithubIcon />
            </a>
            <Link href="https://thedynamics.tech">
                <button className="px-[10px] py-[6px] md:py-[2px] bg-[#03a9f4] text-white rounded-[6px] text-[12px] md:text-[23px] lg:text-[28px] lg:button-big button-deep-sky-blue inline-flex gap-x-1 md:gap-x-3 items-center mx-2 my-0 md:my-0 focus:outline-none">
                {loggedIn ? "Go back" : "All Events"}
                <div className="scale-75 md:scale-100 lg:relative lg:top-[2px]">
                    <ArrowIcon />
                </div>
                </button>
            </Link>
            </div>
        </nav>
                 

      {/* ====== #PROFILE head start */}
      <div className=" flex items-center justify-center w-1/1 h-[350px] md:gap-10 gap-4 relative bg-[#f8fbff] dark:bg-[#2D2D2D]">
        <Avatar image={ProfileImg} className="md:h-64 relative md:w-64 h-[170px] w-[170px] " />
        <div className=" h-60 flex p-2 flex-col justify-center  gap-0 items-start ">
          <h1 className="text-heading md:title subtitle dark:text-white">{user.name} </h1>
          {user.no_of_followers === 0 ? (
            <div className="flex items-center">
              <h2 className="text-deep-sky-blue text-16px font-semibold mb-2">
                Follow {user.name}{" "}
                <span>
                  <FollowerIcon className="md:ml-4 hover:scale-110  md:inline-flex hidden" />
                </span>
              </h2>
            </div>
          ) : (
            <div>
              <h2 className="text-deep-sky-blue md:subtitle text-30px font-semibold mb-2">
                {user.no_of_followers} Followers
              </h2>
              <span className="flex pt-4 gap-3 cursor-pointer h-16 pl-3  items-start">
                {user &&
                  bubbleTrimmer(user.followers, 0, 6).map((follower, index) => {
                    return (
                      <Avatar
                        {...follower}
                        className="-m-3 relative h-9 w-9 p-0 hover:scale-110 "
                        key={index}
                      />
                    );
                  })}
                <FollowerIcon className="ml-4 hover:scale-110 hidden md:inline-flex" />
              </span>
            </div>
          )}

          <span className="flex gap-1 items-center h-16  mt-0 justify-center ">
            <GithubIcon className=" h-9 w-9 hover:scale-110" />
            <TwitterIcon className="  h-9 w-16 hover:scale-110" />
            <LinkedinIcon className=" h-9 w-9 hover:scale-110" />
          </span>
        </div>
      </div>

      {/* ====== #TAB section start */}
      <section className="flex itens-center flex-col  items-center dark:bg-[#202020] transition-all p-5">
        <nav className="flex justify-between items-center md:pb-12 md:pt-10 pb-10 pt-10 gap-20 transition-all">
          <p
            onClick={e => {
              e.preventDefault();
              setOpenTab(1);
            }}
            className={
              openTab === 1
                ? "md:headline font-bold cursor-pointer relative border-b-4 border-orange-peel text-[#1A1A1A] dark:text-white transition-all duration-250"
                : "md:headline font-bold cursor-pointer relative  text-[#6E7180] border-b-4 border-transparent transition-all duration-250"
            }>
            PROJECTS
          </p>

          <p
            onClick={e => {
              e.preventDefault();
              setOpenTab(2);
            }}
            className={
              openTab === 2
                ? "md:headline font-bold cursor-pointer relative border-b-4 border-orange-peel text-[#1A1A1A] dark:text-white transition-all duration-250"
                : "md:headline font-bold cursor-pointer relative  text-[#6E7180] border-b-4 border-transparent transition-all duration-250"
            }>
            SCRAPBOOK
          </p>
        </nav>

        {openTab === 1 && (
          <div>
            {user.projects.length === 0 ? (
              <Empty />
            ) : (
              <div className="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 content-center justify-center items-center place-content-center rounded-lg w-[95vw]">
                {user &&
                  user.projects.map((project, index) => {
                    return (
                      <ProfileProjectCard
                        key={index}
                        bubbles={project.bubbles}
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
            )}
          </div>
        )}
        {openTab === 2 && (
          <div>
            {user.projects.length === 0 ? (
              <Empty />
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:space-x-5 p-5 dark:text-white">
                <div className="dark:text-white">
                  {user &&
                    user.scrapbookItem.map((scrapbookItem, index) => {
                      if (user.scrapbookItem.indexOf(scrapbookItem) % 3 === 0)
                        return (
                          <Scrapbook
                            time={scrapbookItem.time}
                            text={scrapbookItem.text}
                            image={scrapbookItem.image}
                          />
                        );
                    })}
                </div>

                <div className="dark:text-white">
                  {user.scrapbookItem.map((scrapbookItem, index) => {
                    if (user.scrapbookItem.indexOf(scrapbookItem) % 3 === 1)
                      return (
                        <Scrapbook
                          time={scrapbookItem.time}
                          text={scrapbookItem.text}
                          image={scrapbookItem.image}
                        />
                      );
                  })}
                </div>

                <div className="dark:text-white">
                  {user.scrapbookItem.map((scrapbookItem, index) => {
                    if (user.scrapbookItem.indexOf(scrapbookItem) % 3 === 2)
                      return (
                        <Scrapbook
                          time={scrapbookItem.time}
                          text={scrapbookItem.text}
                          image={scrapbookItem.image}
                        />
                      );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Code in the scrapbook
  const code = `.nav-link-home::before {
    content : "Javier's"
}`;
  // TODO: Call API for User profile data
  return {
    props: {
      loggedIn: true,
      user: {
        name: "Zach Latta",
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
            bubbles: [1, 2, 3, 4],
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
        ],
        scrapbookItem: [
          {
            time: "12:00 pm",
            text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Thanks to @Eni4sure for the help in #coding-help today
            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, https://fakwebsite.com/1234/lie discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit ame
            
            `,
            image: "/assets/TEST/user_projects/img-6.png"
          },
          {
            time: "2:30pm",
            text: `Earliert today @Elytgy, @Bonsai and I created this wordle game clone together in #game-dev 

            we only changed this small code 
            
            
            

            
            
            in the footer and we kinda duplicated this too
            
            
            `,

            image: "/assets/TEST/user_projects/img-6.png"
          },
          {
            time: "3:15pm",
            text: `Can’t believe I just got into MIT btw, guess who has a date with Elon Musk later today.
            `,
            image: "/assets/TEST/user_projects/img-6.png"
          },
          {
            time: "6:15pm",
            text: `Can’t believe I just got into MIT btw, guess who has a date with Elon Musk later today.
            `,
            image: "/assets/TEST/user_projects/img-6.png"
          },
          {
            time: "7:00 pm",
            text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Thanks to @Eni4sure for the help in #coding-help today

            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, https://fakwebsite.com/1234/lie discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit ame.
            `,
            image: "/assets/TEST/user_projects/img-6.png"
          },
          {
            time: "8 :03pm",
            text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.

            I've always been kind of intimidated by hardware and am really proud of myself for getting this done! + bonus sunset picture from tonight.
            `,
            image: "/assets/TEST/user_projects/img-6.png"
          }
        ]
      }
    }
  };
}
