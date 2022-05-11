import Image from "next/image";
import Link from "next/link";
import Logo from "../components/Logo";
import DarkModeToggle from "../components/DarkModeToggle";
import ArrowRightIcon from "../components/icons/ArrowRight";
import GithubIcon from "../components/icons/Github";
import foxImage from "../public/assets/discord/fox.svg";

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
      <header className="bg-[#F8FBFF] container-gray-dark border-b-4 dark:border-gray-dark p-14 rounded-b-2xl text-center">
        <div className="grid grid-cols-2 gap-x-10">
          <div className="flex-col items-center justify-center mx-auto">
            <Image src={foxImage} />
            <div className="flex items-center gap-x-10">
              <svg
                width="155"
                height="119"
                viewBox="0 0 155 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M131.21 10.4312C121.183 5.81906 110.463 2.46718 99.2544 0.558558C97.8778 3.00535 96.2697 6.29631 95.1609 8.91425C83.246 7.15265 71.4407 7.15265 59.745 8.91425C58.6364 6.29631 56.9918 3.00535 55.603 0.558558C44.3825 2.46718 33.6493 5.83141 23.6226 10.4557C3.39892 40.5013 -2.0834 69.8005 0.657764 98.6842C14.0712 108.531 27.0704 114.514 39.8503 118.429C43.0057 114.159 45.8199 109.62 48.2443 104.837C43.627 103.112 39.2046 100.984 35.0259 98.5124C36.1345 97.7053 37.2189 96.8607 38.2666 95.9929C63.7532 107.712 91.4451 107.712 116.628 95.9929C117.687 96.8607 118.772 97.7053 119.868 98.5124C115.677 100.996 111.243 103.125 106.625 104.85C109.049 109.62 111.852 114.172 115.02 118.441C127.811 114.526 140.823 108.544 154.236 98.6842C157.452 65.2008 148.742 36.1705 131.21 10.4312ZM51.7165 80.9214C44.0657 80.9214 37.7914 73.8987 37.7914 65.3475C37.7914 56.7962 43.9317 49.7621 51.7165 49.7621C59.5016 49.7621 65.7757 56.784 65.6417 65.3475C65.6537 73.8987 59.5016 80.9214 51.7165 80.9214ZM103.177 80.9214C95.5264 80.9214 89.2522 73.8987 89.2522 65.3475C89.2522 56.7962 95.3923 49.7621 103.177 49.7621C110.962 49.7621 117.237 56.784 117.103 65.3475C117.103 73.8987 110.962 80.9214 103.177 80.9214Z"
                  fill="#03A9F4"
                />
              </svg>
              <span className="text-[#03A9F4] text-84px font-bold">Discord</span>
            </div>
          </div>
          <div>
            <div className="flex-col w-3/4 ml-auto">
              <h1 className="text-36px mb-14 text-center font-bold xs:text-30px xs:mb-4">
                JOIN OUR DISCORD
              </h1>
              <form className="rounded-3xl mxs:pb-5 mxs:mx-2 lg:pt-12 lg:pb-6 lg:px-12">
                <div>
                  <div>
                    <label
                      className="font-semibold xs:text-12px md:text-18px xs:font-bold xs:mb-1 flex items-center justify-start"
                      htmlFor="name">
                      First Name
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
                      Email Address
                    </label>
                    <input
                      className="form-input"
                      name="email"
                      id="email"
                      type="email"
                      minLength="6"
                      maxLength="100"
                      placeholder="Email Address"
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
                  <button className="button-medium button-deep-sky-blue gap-x-2 flex items-center mx-auto ">
                    <svg
                      width="26"
                      height="26"
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
        <h1 className="title">
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
            <button className="button-big bg-black" disabled={true}>
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
                #prototyping
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
        <h1 className="title">
          <span className="text-orange-peel">And</span>{" "}
          <span className="text-deep-sky-blue">many</span>{" "}
          <span className="text-fruit-salad">more</span>
          ...
        </h1>
        <p className="mb-7">
          Stuck with something? Looking for constructive project feedbacks? Want to make friends
          with like-minded makers? You’ll find amazing people to chat with here!
        </p>
        <button className="button-big button-deep-sky-blue inline-flex gap-x-2 w-fit">
          Join right now
          <ArrowRightIcon width={56} height={36} />
        </button>
      </section>
      <footer className="bg-[#f4f4f4] dark:bg-[#444444] px-14 py-7 text-center">
        <p className="sm">
          All members of The Dynamics Discord server must abide by our{" "}
          <Link href="/">
            <a>Code of Conduct</a>
          </Link>
        </p>
      </footer>
    </div>
  );
}
