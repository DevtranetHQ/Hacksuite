import React from "react";
import Logo from "../../components/Logo";
import DarkModeToggle from "../../components/DarkModeToggle";
import GithubIcon from "../../components/icons/Github";
import Link from "next/link";
import ArrowIcon from "../../components/icons/ArrowRight";
import scrapbookpin from "../../public/assets/scrapbookpin.svg";
import Image from "next/image";
import Tape from "../../public/assets/Tape.svg";
import Tape1 from "../../public/assets/Tape1.svg";
import image2 from "../../public/assets/image2.svg";
import image3 from "../../public/assets/image3.svg";
import Vector3 from "../../public/assets/Vector3.svg";
import Scrapbookfile from "./Scrapbookfile";

export default function Scrapbook({ user }) {
  return (
    <div className="dark:bg-[#202020] dark:text-white">
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
          <Link href="/app">
          <button className="md:px-[10px] px-2 py-[6px] lg:py-[2px] bg-[#03a9f4] text-white rounded-[6px] text-[11px] md:text-[23px] lg:text-[28px] lg:button-big button-deep-sky-blue inline-flex md:gap-x-3 items-center md:mx-2 md:mr-1 my-0 md:my-0 focus:outline-none">
              Go back home
              <div className="scale-50 md:scale-100 lg:relative lg:top-[2px] justify-self-start">
                <ArrowIcon />
              </div>
            </button>
          </Link>
        </div>
      </nav>
      <header className="bg-[#F8FBFF] container-gray-dark border-b-4 origin-center -rotate-2 dark:border-gray-dark py-14 px-6 xs:p-14 rounded-b-2xl text-center mb-20  relative">
        <div className="absolute left-5  flex lg:gap-x-[300px] md:gap-x-[100px] xs:gap-x-[50px] lg:-top-[40px] -top-[18px] z-10 h-10 lg:h-20">
          <Image src={scrapbookpin}  />
          <Image src={Tape} />
          <Image src={Tape1} />
        </div>
        <div className="origin-center rotate-2 mt-7">
          <h1 className="text-[30px] font-bold lg:title md:text-[65px] lg:text-[90px] text-deep-sky-blue">
            The Dynamics Scrapbook
          </h1>
          <h2 className="text-[16px] lg:lead mb-2 w-full mt-[16px] md:mt-[36px] md:mb-[28px] lg:text-[21px] xl:text-[26px] 2xl:text-[30px]">
            A daily diary of what the makers at The Dynamics are learning and building everyday,
            inspired by Hack Club’s Scrapbook.
          </h2>
          <div className="inline-flex my-2 gap-x-4  lg:gap-x-[36px] mt-[20px] lg:mt-[30px]">
            <button className="text-white font-bold rounded-md bg-[#4CB050] py-[15px] text-[16px] px-[15px] lg:px-[70px] lg:py-[10px] lg:text-[30px]  inline-flex gap-x-2 transition-all hover:scale-[1.06] focus:outline-none">
              About Scrappy
            </button>

            <a className="text-white font-bold rounded-md bg-[#03A9F4] py-[15px] text-[16px] px-[15px] lg:px-[70px] lg:py-[10px] lg:text-[30px]  inline-flex gap-x-2 transition-all hover:scale-[1.06] focus:outline-none">
              Join Scrapbook
            </a>
          </div>
        </div>
        <div className="absolute left-0 right-0 -bottom-[40px] flex items-center  justify-between">
          <Image src={image2} />
          <div className="flex-col justify-end">
            <Image src={image3} />
          </div>
        </div>
      </header>
      <div className="flex justify-end -mt-14">
        <Image src={Vector3} />
      </div>

      <section>
        <div>
          
            <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-5 p-5 dark:text-white">
              <div className="dark:text-white">
                {user &&
                  user.scrapbookItem.map((scrapbookItem, index) => {
                    if (user.scrapbookItem.indexOf(scrapbookItem) % 3 === 0)
                      return (
                        <Scrapbookfile
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

              <div className="dark:text-white">
                {user.scrapbookItem.map((scrapbookItem, index) => {
                  if (user.scrapbookItem.indexOf(scrapbookItem) % 3 === 1)
                    return (
                      <Scrapbookfile
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
              <div className="dark:text-white">
                {user.scrapbookItem.map((scrapbookItem, index) => {
                  if (user.scrapbookItem.indexOf(scrapbookItem) % 3 === 2)
                    return (
                      <Scrapbookfile
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
          
        </div>
      </section>

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
      loggedIn: true,
      user: {
        name: "Zach Latta",
        no_of_followers: 10,
        scrapbookItem: [
          {
            username: "Zach Latta",
            userimg: "/assets/TEST/profile.jpg",
            time: "12:00 pm",
            text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Thanks to @Eni4sure for the help in #coding-help today
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, https://fakwebsite.com/1234/lie discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit ame
              
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
  
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, https://fakwebsite.com/1234/lie discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit ame.
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
        ]
      }
    }
  };
}
