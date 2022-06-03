import { GetServerSideProps } from "next";
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
import FacebookIcon from "../../components/icons/Facebook";
import InstagramIcon from "../../components/icons/Instagram";
import RedditIcon from "../../components/icons/Reddit";
import ProjectGalleryProjectCard from "../../components/project/ProjectGalleryProjectCard";
import LinkedinIcon from "../../components/icons/Linkedin";
import Empty from "../../components/Empty";
import ReCAPTCHA from "react-google-recaptcha";
import ProfileScrapbook from "./Scrapbook";
import { IProfile } from "../../server/modules/social/profile.model";
import { IUser, UserId } from "../../server/modules/auth/user.model";
import { IProject } from "../../server/modules/projects/project.model";
import { handleAuth } from "../../server/utils/auth";
import userService from "../../server/modules/auth/user.service";
import { profileService } from "../../server/modules/social/profile.service";
import { projectService } from "./../../server/modules/projects/project.service";

import NotFoundPage from "../404";

export function bubbleTrimmer<T = any>(bubbles: T[], start = 0, end = 0): T[] {
  return bubbles && bubbles.length > end ? bubbles.slice(start, end) : bubbles;
}

interface Props {
  loggedInUser: IUser | null;
  user: IUser;
  profile: IProfile;
  followers: IProfile[];
  projects: IProject[];
  scrapbook: any[];
}

export default function ProfileOrError({ error, ...props }: Props & { error?: boolean }) {
  if (error) {
    return <NotFoundPage />;
  }

  return <ProfilePage {...props} />;
}

function ProfilePage({ loggedInUser, user, profile, projects, followers, scrapbook }: Props) {
  // ======= Tab state -->
  console.log(profile);
  // TODO: Set nav state for project and scrapbook
  const [openTab, setOpenTab] = useState(1);

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

          <button className="md:px-[10px] px-2 py-[6px] lg:py-[2px] bg-[#03a9f4] text-white rounded-[6px] text-[11px] md:text-[23px] lg:text-[28px] lg:button-big button-deep-sky-blue inline-flex md:gap-x-3 items-center md:mx-2 md:mr-1 my-0 md:my-0 focus:outline-none">
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
        <Avatar image={profile.image} className="md:h-64 relative md:w-64 h-[170px] w-[170px] " />
        <div className=" h-60 flex p-2 flex-col justify-center  gap-0 items-start ">
          <h1 className="text-heading md:title subtitle dark:text-white">{profile.fullName} </h1>

          <div>
            <p className="text-26px -mt-1">
              {profile.headline} -{" "}
              <button className="font-bold" onClick={() => setShowSkills(true)}>
                View skills
              </button>
            </p>
            {showSkills ? (
              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none rounded-lg w-2/4 mx-auto slide-bottom">
                <div className="relative  my-6 mx-auto  bg-white p-5">
                  <div>
                    <h2 className="font-semibold text-30px text-center p-5">Skills and Interest</h2>
                    <hr />
                    {profile.skills.map((skill, index) => {
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
              {followers.length} Follower{followers.length !== 1 ? "s" : ""}
            </h2>
            <span className="flex pt-4 gap-3 cursor-pointer h-16 pl-3  items-start">
              {user &&
                bubbleTrimmer(followers, 0, 6).map((follower, index) => {
                  return (
                    <Avatar
                      image={follower.image}
                      className="-m-3 relative h-9 w-9 p-0 hover:scale-110 "
                      border="1px"
                      key={index}
                    />
                  );
                })}
            </span>
            <h2 className="text-deep-sky-blue md:text-36px text-30px font-semibold -mt-1">
              Follow {profile.firstName}{" "}
              <span>
                <FollowerIcon className="ml-4 hover:scale-110 hidden md:inline-flex" />
              </span>
            </h2>
          </div>

          <span className="flex gap-1 items-center h-16  -mt-1 justify-center">
            {profile.links?.github && (
              <a href={profile.links?.github}>
                <GithubIcon className="h-9 w-9 hover:scale-110" />
              </a>
            )}
            {profile.links?.linkedin && (
              <a href={profile.links?.linkedin}>
                <LinkedinIcon className="h-9 w-9 hover:scale-110" />
              </a>
            )}
            {profile.links?.twitter && (
              <a href={profile.links?.twitter}>
                <TwitterIcon className="h-9 w-16 hover:scale-110" />
              </a>
            )}
            {profile.links?.reddit && (
              <a href={profile.links?.reddit}>
                <RedditIcon className="h-9 w-9 hover:scale-110" />
              </a>
            )}
            {profile.links?.facebook && (
              <a href={profile.links?.facebook}>
                <FacebookIcon className="h-9 w-9 hover:scale-110" />
              </a>
            )}
            {profile.links?.instagram && (
              <a href={profile.links?.instagram}>
                <InstagramIcon className="h-9 w-9 hover:scale-110" />
              </a>
            )}
          </span>
        </div>
      </div>

      <section className="p-10 flex items-center justify-center">
        <div className="gap-x-5 flex">
          {profile.describe.map((describe, index) => (
            <span
              key={index}
              className="p-1 px-2 text-deep-sky-blue rounded-md border-2 border-deep-sky-blue">
              {describe}
            </span>
          ))}
        </div>
      </section>

      <section className="p-10 pl-[153px] mx-auto flex justify-center items-center ">
        <div className="w-[70%]">
          <h1 className="mb-3 font-bold text-36px">I'M AVAILABLE FOR </h1>
          <div className="flex flex-wrap gap-5">
            {profile.availableFor.map((work, index) => (
              <span className="p-1 px-2 rounded-md border-2 border-deep-sky-blue" key={index}>
                {work}
              </span>
            ))}
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
            {projects.length === 0 ? (
              <Empty />
            ) : (
              <div className="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 content-center justify-center items-center place-content-center rounded-lg w-[95vw]">
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
            )}
          </div>
        )}
        {openTab === 2 && (
          <div>
            {scrapbook.length === 0 ? (
              <Empty />
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:space-x-5 md:p-5 p-1 dark:text-white">
                <div className="dark:text-white">
                  {scrapbook.map((scrapbookItem, index) => {
                    if (scrapbook.indexOf(scrapbookItem) % 3 === 0)
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
                  {scrapbook.map((scrapbookItem, index) => {
                    if (scrapbook.indexOf(scrapbookItem) % 3 === 1)
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
                  {scrapbook.map((scrapbookItem, index) => {
                    if (scrapbook.indexOf(scrapbookItem) % 3 === 2)
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

export const getServerSideProps = async ({ req, res, query }) => {
  try {
    const payload = await handleAuth(req);

    const loggedInUser = payload ? await userService.getOne(payload.id) : null;
    const userId = query.userId as UserId;

    const user = await userService.getByUniqueId(userId);
    const profile = await profileService.getCompletedProfile(userId);
    const followers = await profileService.getFollowers(userId);
    const projects = await projectService.getProjectsByUser(userId);

    // TODO: get scrapbook
    const scrapbook = [];

    const props: Props = {
      loggedInUser,
      user,
      profile,
      followers,
      projects,
      scrapbook
    };

    return { props };
  } catch (error) {
    return { props: { error: true } };
  }
};
