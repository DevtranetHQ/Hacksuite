import Image from "next/image";
import Link from "next/link";
import Logo from "../components/Logo";
import DarkModeToggle from "../components/DarkModeToggle";
import ArrowRightIcon from "../components/icons/ArrowRight";
import GithubIcon from "../components/icons/Github";
import foxImage from "../public/assets/discord/fox.svg";
import discordLogo from "../public/assets/discord/discord-logo.svg";
export default function Discord() {
  async function handleSubmission(e) {
    e.preventDefault();
  }

  return (
    <div className="dark:bg-[#202020] dark:text-white">
      <nav className="flex items-center justify-between pl-[10px] lg:pl-8 pr-[12px] lg:pr-12">
        <Logo className="w-[80px] md:w-[120px] py-5" />
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
          <Link href="https://thedynamics.tech">
            <button className="px-[10px] py-[6px] md:py-[2px] bg-[#03a9f4] text-white rounded-[6px] text-[12px] md:text-[23px] lg:text-[28px] lg:button-big button-deep-sky-blue inline-flex gap-x-1 md:gap-x-3 items-center mx-2 my-0 md:my-0 focus:outline-none">
              Go back home
              <div className="scale-75 md:scale-100 lg:relative lg:top-[2px]">
                <ArrowRightIcon />
              </div>
            </button>
          </Link>
        </div>
      </nav>
      <header className="bg-[#F8FBFF] container-gray-dark border-b-4 dark:border-gray-dark p-5 rounded-b-2xl text-center">
        <div className="grid grid-cols-2 gap-x-10">
          <div className="flex-col items-center justify-center mx-auto">
            <Image src={foxImage} />
            <div className="flex items-center gap-x-10">
              <Image src={discordLogo} />
            </div>
          </div>
          <div>
            <div className="flex-col w-3/4 ml-auto pr-2">
              <h1 className="text-36px text-center font-bold xs:text-30px xs:mb-4">
                JOIN OUR DISCORD
              </h1>
              <form className="rounded-3xl mxs:pb-5 mxs:mx-2 lg:pt-7 lg:pb-6 lg:px-12">
                <div>
                  <div>
                    <label
                      className="font-semibold xs:text-12px md:text-18px xs:font-bold xs:mb-1 flex items-center justify-start"
                      htmlFor="name">
                      First name
                    </label>
                    <input
                      className="form-input "
                      name="name"
                      id="name"
                      type="text"
                      minLength="6"
                      maxLength="100"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="font-semibold xs:text-12px md:text-18px xs:font-bold xs:mb-1 flex items-center justify-start"
                      htmlFor="email">
                      Email address
                    </label>
                    <input
                      className="form-input"
                      name="email"
                      id="email"
                      type="email"
                      minLength="6"
                      maxLength="100"
                      placeholder="Email address"
                      required
                    />
                  </div>

                  <button
                    className="rounded-md button-medium button-deep-sky-blue mx-auto text-15px md:text-16px mt-5 h-8 py-0 xs:py-1 px-6 md:px-10"
                    type="submit">
                    Get invite
                  </button>
                  <div className="flex justify-between -mx-10 my-6 lg:-mx-12 xs:my-8">
                    <div className="w-1/4 h-4 border-[#A0A0A0] border-b-4"></div>
                    <div className="text-[#595959] dark:text-[#FFFFFF] text-15px md:text-18px mxs:pt-1">
                      Already a member?
                    </div>
                    <div className="w-1/4 h-4 border-[#A0A0A0] border-b-4"></div>
                  </div>
                  <button className="rounded-md button-medium button-deep-sky-blue mx-auto text-15px md:text-16px mt-5 h-8 py-0 xs:py-1 px-6 md:px-10 gap-x-2 w-2/4">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.75 5.91667L10 7.9L13.25 11.5833H0.5V14.4167H13.25L10 18.1L11.75 20.0833L18 13L11.75 5.91667ZM23 22.9167H13V25.75H23C24.375 25.75 25.5 24.475 25.5 22.9167V3.08333C25.5 1.525 24.375 0.25 23 0.25H13V3.08333H23V22.9167Z"
                        fill="white"
                      />
                    </svg>
                    <span>Sign back in</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      <section className="flex flex-col p-7 py-14 text-center">
        <style jsx>{`
          .button-big {
            margin: auto;
          }
        `}</style>
        <h1 className="title mb-4">
          A place for every <span className="text-orange-peel">int</span>
          <span className="text-deep-sky-blue">ere</span>
          <span className="text-fruit-salad">st</span>
        </h1>
        <p>
          With more than 40 channels on our Discord server, you’ll fit in somewhere perfectly!
          Whether you are looking for developers to collaborate with, seeking for start-up
          fundrasing advice, or just simply interested in hanging out with makers like you.
        </p>
        <div className="py-24">
          <div className="mb-7">
            <button className="button-big bg-black dark:bg-white dark:text-black" disabled={true}>
              #blockchain
            </button>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <button className="button-big button-deep-sky-blue" disabled={true}>
                #startups
              </button>
            </div>
            <div className="pt-24">
              <button className="button-big button-orange-peel" disabled={true}>
                #job-chat
              </button>
            </div>
            <div>
              <button className="button-big button-link" disabled={true}>
                #robotics
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <button className="button-big bg-[#ED4245]" disabled={true}>
                #web-dev
              </button>
            </div>
            <div className="pt-24">
              <button className="button-big bg-[#FEE75C]" disabled={true}>
                #design
              </button>
            </div>
            <div>
              <button className="button-big button-fruit-salad" disabled={true}>
                #game-dev
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mb-7">
            <div>
              <button className="button-big bg-[#57F287]" disabled={true}>
                #open-source
              </button>
            </div>
            <div>
              <button className="button-big bg-[#EB459E]" disabled={true}>
                #app-dev
              </button>
            </div>
          </div>
          <div>
            <button className="button-big bg-[#A633D6]" disabled={true}>
              #bot-commands
            </button>
          </div>
        </div>
        <h1 className="title mb-4">
          <span className="text-orange-peel">And</span>{" "}
          <span className="text-deep-sky-blue">many</span>{" "}
          <span className="text-fruit-salad">more</span>
          ...
        </h1>
        <p className="mb-7">
          Stuck with something? Looking for constructive project feedbacks? Want to make friends
          with like-minded makers? You’ll find amazing people to chat with here!
        </p>
        <div className="w-full flex justify-center items-center mt-[70px] lg:mt-[167px] mb-[45px] lg:mb-[90px]">
          <button className="text-white text-[16px] lg:text-[48px] py-[13px] lg:py-[48px] px-[17px] lg:px-[44px] font-bold rounded-lg lg:rounded-[15px] bg-[#03a9f4] lg:button-big button-deep-sky-blue inline-flex items-center gap-x-3 lg:gap-x-[48px]">
            <span>Join right now</span>
            <div className="lg:scale-[2] relative lg:top-1">
              <ArrowRightIcon />
            </div>
          </button>
        </div>
      </section>
      <footer className="bg-[#F4F4F4] dark:bg-[#444444] py-[32px]">
        <p className="text-[16px] md:text-[24px] lg:text-[32px] px-[20px] lg:px-[40px] 2xl:px-[100px] text-center">
          All members of The Dynamics Discord server must abide by our Code of Conduct{" "}
          <Link href="/signup">
            <span className="text-[#3e4fe4]">Code of Conduct</span>
          </Link>
        </p>
      </footer>
    </div>
  );
}
