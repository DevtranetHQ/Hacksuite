import Image from "next/image";
import { useState, useContext } from "react";
import DashNav from "../../components/dash/DashNav";
import DashHeader from "../../components/dash/DashHeader";
import { DashNavMobile } from "../../components/dash/DashNavMobile";
import DarkModeContext from "../../components/DarkModeContext";
import placeholder from "../../public/assets/dash/placeholder.svg";
import robotLight from "../../public/assets/dash/robotLight.svg";
import robotDark from "../../public/assets/dash/robotDark.svg";
import { withAuth } from "../../server/middlewares/auth.middleware";
import { profileService } from "./../../server/modules/social/profile.service";
import Link from "next/link";
import ProjectGllery from "../projects";
import ProjectGalleryProjectCard from "../../components/project/ProjectGalleryProjectCard";
import ProfileProjectCard from "../../components/project/ProfileProjectCard";
import Avatar from "../../components/Avatar";
import ProfileImg from "../../public/assets/TEST/profile.jpg";
import FeaturedPeople from "../../components/FeaturedPeople";
import ArrowIcon from "../../components/icons/Arrow";
import ScrapbookCard from "../../components/scrapbook/ScrapbookCard";
import { scrapbookService } from "../../server/modules/scrapbook/scrapbook.service";
import VerifiedIcon from "../../components/icons/VerifiedIcon";
export const bubbleTrimmer = (bubbles, start = 0, end = 0) => {
  return bubbles && bubbles.length > end ? bubbles.slice(start, end) : bubbles;
};

function HeaderItem({ index, name, tab, handleClick }) {
  return (
    <p
      className={`${
        tab === index
          ? "border-orange-peel text-black dark:text-white"
          : "border-transparent hover:border-orange-peel hover:text-black hover:dark:text-white"
      } transition-all cursor-pointer border-b-4`}
      onClick={e => {
        e.preventDefault();
        handleClick(index);
      }}>
      {name}
    </p>
  );
}

export default function Dash({ admin, name, projects, scrapbookItem, people }) {
  const { darkMode } = useContext(DarkModeContext);
  // ======= Tab state -->
  // TODO: Set top nav state
  const [openTab, setOpenTab] = useState(0);

  function handleClick(tab) {
    setOpenTab(tab);
  }

  return (
    <div className="xs:grid xs:grid-cols-12 dark:bg-[#202020]">
      <div className="mxs:hidden col-span-1 mx-auto z-50 relative">
        <DashNav admin={admin} />
      </div>

      <div className="mxs:flex mxs:flex-col mxs:justify-between mxs:px-0 mxs:pt-4 dark:bg-[#202020] dark:text-white col-span-11 p-10 content-center min-w-full min-h-screen">
        <div className="xs:hidden">
          <DashHeader />
        </div>
        <div className="mxs:hidden w-full pt-6 lg:pt-8 xl:pt-10 pb-3 xl:pb-5 fixed top-0 right-0 z-40 bg-white dark:bg-dark flex items-center justify-end">
          <div className="mr-2 xs:mr-4 lg:mr-12 xl:mr-16 2xl:mr-24px flex items-center font-bold text-[#7D7D7D] space-x-2 xs:space-x-4 sm:space-x-4 md:space-x-6 lg:space-x-12 xl:space-x-16 2xl:space-x-24px xs:text-8px sm:text-10px md:text-14px lg:text-18px xl:text-22px 2xl:text-24px">
            <HeaderItem index={1} name="SCRAPBOOK" tab={openTab} handleClick={handleClick} />
            <HeaderItem index={2} name="PROJECTS" tab={openTab} handleClick={handleClick} />
            <HeaderItem index={3} name="PEOPLE" tab={openTab} handleClick={handleClick} />
            <HeaderItem index={4} name="JOBS" tab={openTab} handleClick={handleClick} />
          </div>
          <form className="mr-4 p-0 flex bg-transparent dark:bg-transparent items-center rounded-[6px]  border-[#03A9F4] border-[3px]">
            <svg
              className="mx-3 my-2 fill-[#A5A5A5] dark:fill-white h-4 w-4"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M8.92143 0.929688C11.0886 0.929688 13.1671 1.79047 14.6995 3.32268C16.2319 4.85489 17.0929 6.93301 17.0929 9.09989C17.0929 11.1236 16.3511 12.9839 15.1317 14.4168L15.4711 14.7562H16.4643L22.75 21.0409L20.8643 22.9264L14.5786 16.6416V15.6486L14.2391 15.3092C12.7564 16.5747 10.8709 17.27 8.92143 17.2701C6.75423 17.2701 4.6758 16.4093 3.14336 14.8771C1.61092 13.3449 0.75 11.2668 0.75 9.09989C0.75 6.93301 1.61092 4.85489 3.14336 3.32268C4.6758 1.79047 6.75423 0.929688 8.92143 0.929688ZM8.92143 3.44359C5.77857 3.44359 3.26429 5.9575 3.26429 9.09989C3.26429 12.2423 5.77857 14.7562 8.92143 14.7562C12.0643 14.7562 14.5786 12.2423 14.5786 9.09989C14.5786 5.9575 12.0643 3.44359 8.92143 3.44359Z" />
            </svg>

            <input
              type="text"
              placeholder="I’m looking for..."
              className="mr-1 py-1 dark:bg-transparent placeholder:text-[#A5A5A5] dark:placeholder:text-white outline-none border-none xs:text-8px sm:text-10px md:text-14px lg:text-18px xl:text-20px 2xl:text-24px"
            />
          </form>
          <div className="mr-2 xs:mr-4 lg:mr-8 xl:mr-16 2xl:mr-24px">
            <DashHeader />
          </div>
        </div>

        {openTab === 0 && (
          <div className="text-center xs:mt-20">
            <h1 className="mxs:text-24px font-semibold text-42px -mt-3">
              Hey there, <span className="text-fruit-salad">{name}.</span>
            </h1>
            <div className="mx-auto -mt-2 xs:-mt-8">
              <Image src={placeholder} alt="" width={700} height={398} />
            </div>
            <div className="-mt-6 xs:-mt-14">
              <h1 className="mxs:text-24px text-48px -rotate-6">Welcome to</h1>
              <h1 className="mxs:text-26px text-48px font-semibold uppercase -mt-3">
                The Dynamics
              </h1>
            </div>
          </div>
        )}
        <div className=""></div>
        <div className=""></div>
        {openTab === 0 && (
          <div className="mxs:w-[150px] fixed mxs:bottom-20 bottom-0 right-0 xs:pb-3 xs:pr-10 z-20 hover:scale-105 focus:scale-105 transition-all">
            <Image className="" src={darkMode ? robotDark : robotLight} alt="" />
          </div>
        )}

        {openTab === 1 && (
          <div className="px-8 lg:px-10 xl:px-12 mt-16 lg:mt-20 xl:mt-[5.5rem] md:mr-[32.7%] md:ml-7 lg:ml-14 xl:ml-8 2xl:ml-0">
            <div className="">
              {scrapbookItem.map((scrapbookItem, index) => {
                return (
                  <ScrapbookCard
                    key={index}
                    username={scrapbookItem.username}
                    userimg={scrapbookItem.userimg}
                    time={scrapbookItem.time}
                    text={scrapbookItem.text}
                    image={scrapbookItem.image}
                  />
                );
              })}
            </div>
          </div>
        )}

        {openTab === 2 && (
          <div className="px-8 lg:px-10 xl:px-12 mt-16 lg:mt-20 xl:mt-[5.5rem] md:mr-[32.7%] md:ml-7 lg:ml-14 xl:ml-8 2xl:ml-0">
            <div className="">
              {projects.map((project, index) => {
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
                    tools={project.tools}
                  />
                );
              })}
            </div>
          </div>
        )}

        {openTab > 0 && (
          <div className="mmd:hidden fixed right-0 md:w-[30%] top-[4.5rem] lg:top-28">
            <h1 className="font-semibold text-14px lg:text-18px xl:text-20px 2xl:text-22px mb-2">
              Featured People
            </h1>
            <FeaturedPeople people={people} />
          </div>
        )}
      </div>
      <div className="xs:hidden">
        <DashNavMobile />
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const user = await withAuth(req => req.$user)(req, res);
  const profile = await profileService.getCompletedProfile(user.uniqueId);
  const scrapbook = await scrapbookService.getPostsByUser(user.uniqueId);
  // TODO: For the frontend team, change the methods of the scrapbook
  // A samle scrapbook post is shown below
  // [
  //   {
  //     _id: new ObjectId("6298a7cfb902506b6b2bdf33"),
  //     content: 'my profile picture design',
  //     images: [
  //       'https://cdn.discordapp.com/attachments/981880691543404565/981891597283258408/pdp.jpg'
  //     ],
  //     createdAt: 2022-06-02T12:06:39.424Z,
  //     author: { username: 'Test', image: undefined }
  //   }
  // ]
  return {
    props: {
      admin: false,
      name: profile.firstName,
      projects: [
        {
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
          date: "11:00 am, Today",
          title: "Web Scrapper",
          desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC A chrome extension that gathers vital information a the tap of a button, easy as ABC",
          image: "/assets/TEST/user_projects/img-1.png",
          comments: 22222,
          likes: 33333333,
          tags: ["NextJs", "Figma"],
          liked: true
        },
        {
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
          date: "11:00 am, Today",
          title: "Web Scrapper",
          desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
          image: "/assets/TEST/user_projects/img-1.png",
          comments: 22222,
          likes: 33333333,
          tags: ["NextJs", "Figma"],
          liked: true
        },
        {
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
          date: "11:00 am, Today",
          title: "Web Scrapper",
          desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
          image: "/assets/TEST/user_projects/img-1.png",
          comments: 22222,
          likes: 33333333,
          tags: ["NextJs", "Figma"],
          liked: true
        },
        {
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
          date: "11:00 am, Today",
          title: "Web Scrapper",
          desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
          image: "/assets/TEST/user_projects/img-1.png",
          comments: 22222,
          likes: 33333333,
          tags: ["NextJs", "Figma"],
          liked: true
        },
        {
          name: "Zach Latta",
          tools: ["github"],
          bubbles: [1, 2, 3, 4, 5],
          date: "11:00 am, Today",
          title: "Web Scrapper",
          desc: "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
          image: "/assets/TEST/user_projects/img-1.png",
          comments: 22222,
          likes: 33333333,
          tags: ["NextJs", "Figma"],
          liked: true
        }
      ],
      scrapbookItem: [
        {
          username: "Zach Latta",
          userimg: "/assets/TEST/profile.jpg",
          time: "12:00 pm",
          text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Thanks to @Eni4sure for the help in #coding-help today
            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, https://fakwebsite.com/1234/lie discovered the undoubtable source. Lorem Ipsum comes 
            
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "D'phenomnal",
          userimg: "/assets/TEST/profile.jpg",
          time: "2:30pm",
          text: `Earliert today @Elytgy, @Bonsai and I created this wordle game clone together in #game-dev 
            we only changed this small code 
            in the footer and we kinda duplicated this too
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Bill Gates",
          userimg: "/assets/TEST/profile.jpg",
          time: "3:15pm",
          text: `Can’t believe I just got into MIT btw, guess who has a date with Elon Musk later today.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Bella See",
          userimg: "/assets/TEST/profile.jpg",
          time: "6:15pm",
          text: `Can’t believe I just got into MIT btw, guess who has a date with Elon Musk later today.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Elytgy",
          userimg: "/assets/TEST/profile.jpg",
          time: "7:00 pm",
          text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Thanks to @Eni4sure for the help in #coding-help today

            
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Elytgy",
          userimg: "/assets/TEST/profile.jpg",
          time: "7:00 pm",
          text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Thanks to @Eni4sure for the help in #coding-help today

            
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Zach Latta",
          userimg: "/assets/TEST/profile.jpg",
          time: "8 :03pm",
          text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.

            I've always been kind of intimidated by hardware and am really proud of myself for getting this done! + bonus sunset picture from tonight.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Zach Latta",
          userimg: "/assets/TEST/profile.jpg",
          time: "8 :03pm",
          text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.

            I've always been kind of intimidated by hardware and am really proud of myself for getting this done! + bonus sunset picture from tonight.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Zach Latta",
          userimg: "/assets/TEST/profile.jpg",
          time: "8 :03pm",
          text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },

        {
          username: "Zach Latta",
          userimg: "/assets/TEST/profile.jpg",
          time: "8 :03pm",
          text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.

            I've always been kind of intimidated by hardware and am really proud of myself for getting this done! + bonus sunset picture from tonight.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Zach Latta",
          userimg: "/assets/TEST/profile.jpg",
          time: "8 :03pm",
          text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.

            I've always been kind of intimidated by hardware and am really proud of myself for getting this done! + bonus sunset picture from tonight.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        },
        {
          username: "Zach Latta",
          userimg: "/assets/TEST/profile.jpg",
          time: "8 :03pm",
          text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.

            I've always been kind of intimidated by hardware and am really proud of myself for getting this done! + bonus sunset picture from tonight.
            `,
          image: "/assets/TEST/user_projects/img-6.png"
        }
      ],
      people: [
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
        }
      ]
    }
  };
}
