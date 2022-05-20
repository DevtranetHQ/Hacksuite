import Link from "next/link";
import { useState } from "react";
import Avatar from "../../components/Avatar";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import ProfileImg from "../../public/assets/TEST/profile.jpg";
import ArrowRightIcon from "../../components/icons/ArrowRight";
import FollowerIcon from "../../components/icons/Follower";
import GithubIcon from "../../components/icons/Github";
import TwitterIcon from "../../components/icons/Twitter";
import ProfileProjectCard from "../../components/project/ProfileProjectCard";
import LinkedinIcon from "../../components/icons/Linkedin";
import Empty from "../../components/Empty";
import ReCAPTCHA from "react-google-recaptcha";
import ProfileScrapbook from "./Scrapbook";

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
  return bubbles && bubbles.length > end ? bubbles.slice(start, end) : bubbles;
};

export default function Profile({ loggedIn, user }) {
  // ======= Tab state -->
  // TODO: Set nav state for project and scrapbook
  const [openTab, setOpenTab] = useState(1);

  const [showMore, setShowMore] = useState(true);
  const availableFor = () => {
    setShowMore(!showMore);
  };
  const [showSkills, setShowSkills] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="dark:bg-[#202020] dark:text-white">
      {/* ====== NavBar start */}
      <nav className="flex items-center justify-between pl-[10px] lg:pl-8 pr-[12px] lg:pr-12">
        <Logo className="w-[50px] md:w-[120px] py-5" />
        <div className="flex gap-x-[0px] md:gap-x-3 lg:gap-x-5 items-center">
          <DarkModeToggle
            className="!mx-0 w-[27px] md:w-[44px] lg:scale-[1.24] lg:mr-[10px]"
            darkClassName="!mx-0 w-[17px] md:w-[33px] lg:w-[40px] h-[25px] md:h-[48px] lg:h-[60px]"
          />
          <a
            href="https://github.com/TheDynamics"
            className="scale-[.6] lg:scale-[1.4] md:scale-[1.15]">
            <GithubIcon />
          </a>

          <button
            className="md:px-[10px] px-2 py-[6px] lg:py-[2px] bg-[#03a9f4] text-white rounded-[6px] text-[11px] md:text-[23px] lg:text-[28px] lg:button-big button-deep-sky-blue inline-flex md:gap-x-3 items-center md:mx-2 md:mr-1 my-0 md:my-0 focus:outline-none"
            onClick={() => setShowMessage(true)}>
            {/* {loggedIn ? "Let's talk" : "All Events"} */}
            Let's talk
            <div className="scale-50 md:scale-100 lg:relative lg:top-[2px] justify-self-start">
              <ArrowRightIcon />
            </div>
          </button>
          {showMessage ? (
            <div className="flex justify-center items-center  fixed inset-0 z-50 outline-none focus:outline-none rounded-lg w-auto mx-auto slide-bottom">
              <div className="relative  my-6 mx-auto p-5 w-6/12">
                <form className="form">
                  <div>
                    <label className="form-label">Enter Subject</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Write Something</label>
                    <textarea
                      className="form-input h-40 resize-none"
                      placeholder="Write something..."
                    />
                  </div>
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      className="inline-block my-3"
                      sitekey="6LexReUeAAAAAF5a0KmF1tz26MWEFUwnhQ7crZAL"
                      onChange={i => console.log(i)}
                    />
                  </div>

                  <div className="flex justify-center gap-x-5 mt-5">
                    <button
                      className="button-big button-deep-sky-blue px-20 w-[150px] text-22px mt-3 "
                      onClick={() => setShowMessage(false)}>
                      Close
                    </button>
                    <button
                      className="button-big button-orange-peel px-20 w-[150px] text-22px mt-3"
                      onClick={() => {}}>
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      </nav>

      {/* ====== #PROFILE head start */}
      <div className=" flex items-center justify-center w-1/1 h-[350px] md:gap-10 gap-4 relative bg-[#f8fbff] dark:bg-[#2D2D2D] ">
        <Avatar image={ProfileImg} className="md:h-64 relative md:w-64 h-[170px] w-[170px] " />
        <div className=" h-60 flex p-2 flex-col justify-center  gap-0 items-start ">
          <h1 className="text-heading md:title subtitle dark:text-white">{user.name} </h1>
          {user.no_of_followers === 0 ? (
            <div className="flex items-center">
              <p className="text-26px -mt-1">
                Founder, Hack Club -{" "}
                <button className="font-bold" onClick={() => setShowSkills(true)}>
                  View skills
                </button>
              </p>
              {showSkills ? (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none rounded-lg w-2/4 mx-auto slide-bottom">
                  <div className="relative  my-6 mx-auto  bg-white p-5">
                    <div>
                      <h2 className="font-semibold text-30px text-center p-5">
                        Skills and Interest
                      </h2>
                      <hr />
                      {user.skills.map((skill, index) => {
                        return (
                          <span className="text-24px " key={index}>
                            {skill},{" "}
                          </span>
                        );
                      })}
                    </div>
                    <button
                      className="button-medium button-deep-sky-blue mx-auto mt-3"
                      onClick={() => setShowSkills(false)}>
                      Close
                    </button>
                  </div>
                </div>
              ) : null}
              <h2 className="text-deep-sky-blue md:text-36px text-30px font-semibold -mt-1">
                Follow {user.name}{" "}
                <span>
                  <FollowerIcon className="md:ml-4 hover:scale-110  md:inline-flex hidden" />
                </span>
              </h2>
            </div>
          ) : (
            <div>
              <p className="text-26px -mt-1">
                Founder, Hack Club -{" "}
                <button className="font-bold" onClick={() => setShowSkills(true)}>
                  View skills
                </button>
              </p>
              {showSkills ? (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none rounded-lg w-2/4 mx-auto slide-bottom">
                  <div className="relative  my-6 mx-auto  bg-white p-5">
                    <div>
                      <h2 className="font-semibold text-30px text-center p-5">
                        Skills and Interest
                      </h2>
                      <hr />
                      {user.skills.map((skill, index) => {
                        return (
                          <span className="text-24px " key={index}>
                            {skill},{" "}
                          </span>
                        );
                      })}
                    </div>
                    <button
                      className="button-medium button-deep-sky-blue mx-auto mt-3"
                      onClick={() => setShowSkills(false)}>
                      Close
                    </button>
                  </div>
                </div>
              ) : null}

              <h2 className="text-deep-sky-blue md:text-36px text-30px font-semibold -mt-1 ">
                {user.no_of_followers} Followers
              </h2>
              <span className="flex pt-4 gap-3 cursor-pointer h-16 pl-3  items-start">
                {user &&
                  bubbleTrimmer(user.followers, 0, 6).map((follower, index) => {
                    return (
                      <Avatar
                        {...follower}
                        className="-m-3 relative h-9 w-9 p-0 hover:scale-110 "
                        border="1px"
                        key={index}
                      />
                    );
                  })}
                <FollowerIcon className="ml-4 hover:scale-110 hidden md:inline-flex" />
              </span>
            </div>
          )}

          <span className="flex gap-1 items-center h-16  -mt-1 justify-center ">
            <GithubIcon className=" h-9 w-9 hover:scale-110" />
            <TwitterIcon className="  h-9 w-16 hover:scale-110" />
            <LinkedinIcon className=" h-9 w-9 hover:scale-110" />
          </span>
        </div>
      </div>

      <section className="p-10 flex items-center justify-center">
        <div className="gap-x-5 flex">
          <span className="p-1 px-2 text-deep-sky-blue rounded-md border-2 border-deep-sky-blue">
            Developer Evangelist
          </span>
          <span className="p-1 px-2 text-deep-sky-blue rounded-md border-2 border-deep-sky-blue">
            Founder
          </span>
          <span className="p-1 px-2 text-deep-sky-blue rounded-md border-2 border-deep-sky-blue">
            Software Engineer
          </span>
          <span className="p-1 px-2 text-deep-sky-blue rounded-md border-2 border-deep-sky-blue">
            Angel Investor
          </span>
          <span className="p-1 px-2 text-deep-sky-blue rounded-md border-2 border-deep-sky-blue">
            Back-end Developer
          </span>
        </div>
      </section>

      <section className="p-10 pl-[153px] mx-auto flex justify-center items-center ">
        <div className="w-[70%]">
          <h1 className="mb-3 font-bold text-36px">I’M AVAILABLE FOR </h1>
          <div className="flex flex-wrap gap-5">
            {showMore
              ? user.available.slice(0, 5).map((work, index) => {
                  return (
                    <span
                      className="p-1 px-2  rounded-md border-2 border-deep-sky-blue"
                      key={index}>
                      {work}
                    </span>
                  );
                })
              : user.available.map((work, index) => {
                  return (
                    <span
                      className="p-1 px-2  rounded-md border-2 border-deep-sky-blue"
                      key={index}>
                      {work}
                    </span>
                  );
                })}
            <span
              onClick={availableFor}
              className="p-1 px-2 cursor-pointer rounded-md border-2 border-deep-sky-blue">
              {showMore ? `${user.available.length < 5 ? " " :` +${user.available.length - 5}`}`  : "Show less"}
            </span>
          </div>
        </div>
      </section>

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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:space-x-5 md:p-5 p-1 dark:text-white">
                <div className="dark:text-white">
                  {user &&
                    user.scrapbookItem.map((scrapbookItem, index) => {
                      if (user.scrapbookItem.indexOf(scrapbookItem) % 3 === 0)
                        return (
                          <ProfileScrapbook
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
                        <ProfileScrapbook
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
                        <ProfileScrapbook
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
  // TODO: Call API for User profile data
  return {
    props: {
      loggedIn: true,
      user: {
        name: "Zach Latta",
        available: [
          "Building an MVP",
          "Co-founding a startup",
          "Freelance roles",
          "Speaking at Events ",
          "Investing",
          "Open-source",
          "Mentorship",
          "Tutoring",
          "Full time job",
          "Internship"
        ],
        skills: [
          "NextJS",
          "React",
          "Web-development",
          "Django",
          "Expresss",
          "Startup",
          "fundraising",
          "Back-end",
          "Investing"
        ],
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
