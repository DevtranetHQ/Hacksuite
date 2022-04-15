import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import Avatar from "../../components/Avatar";
import UploadIcon from "../../components/icons/Upload";
import GithubIcon from "../../components/icons/Github";
import LinkedinIcon from "../../components/icons/Linkedin";
import TwitterIcon from "../../components/icons/Twitter";
import FacebookIcon from "../../components/icons/Facebook";
import InstagramIcon from "../../components/icons/Instagram";
import RedditIcon from "../../components/icons/Reddit";

export default function Optional({ profileImage }) {
    async function uploadProfile(e) {
        e.preventDefault();
        // TODO: Update profile image in database (event is onChange from <input type="file"/>)
    }

    let handleUpfile = () => {
        document.querySelector("#getFile").onchange = function(){
          document.querySelector("#fileName").innerText = "browse [ " + this.files[0].name + " ]";
        }
    }
    return (
        <div className="dark:bg-[#202020] dark:text-white relative">
            <div className="flex items-center justify-between pt-5 mx-9">
                <Logo className="w-[140px] pt-4" />
                <div className="pr-5">
                    <DarkModeToggle
                        className="w-[30px] h-[30px]"
                        darkClassName="w-[26px] h-[40px]"
                    />
                </div>
            </div>

            <div className="rounded-3xl bg-[#F4F4F4] dark:bg-[#444444] pt-12 pb-20 px-6 mx-6 xs:pl-14 xs:pr-6 xs:mx-8 lg:mx-32 xl:p-11 xl:ml-[17rem] xl:mr-60 mt-16 mb-20">
                <div className="flex justify-start items-center">
                    <Avatar className="relative w-[164px] h-[166px]" image={profileImage} />
                    <p className="text-24px xs:text-36px font-bold text-center pl-12">
                        <span className="text-[#4cb050]">John,</span>
                        {" "}Can we know you better?
                    </p>
                </div>
                <label
                    className="button-small button-deep-sky-blue cursor-pointer inline-flex gap-x-2 mt-3.5 h-14 w-52"
                    htmlFor="profile-upload">
                    <UploadIcon />
                    <span className="">Upload a picture</span>
                </label>
                <input
                    className="hidden"
                    id="profile-upload"
                    onChange={uploadProfile}
                    type="file"
                />
                <p className="text-18px xs:text-30px font-semibold mt-14 mb-8">
                    Social or portfolio links
                </p>

                <div className="grid grid-cols-1 gap-x-4 gap-y-4 xs:grid-cols-2 xs:gap-y-0 xs:gap-x-16 pl-1 pr-24">
                    <div className="flex">
                        <span className="cursor-pointer">
                            <LinkedinIcon width={37} height={37} />
                        </span>
                        <input
                            className="form-input w-64 h-9 ml-5 text-18px font-normal dark:bg-[#E9E9E9]"
                            id="linkedin"
                            name="linkedin"
                            type="text"
                            placeholder="Enter your linkedin url..."
                        />
                    </div>
                    <div className="flex">
                        <span className="cursor-pointer">
                            <RedditIcon width={41} />
                        </span>
                        <input
                            className="form-input w-64 h-9 ml-5 text-18px font-normal dark:bg-[#E9E9E9]"
                            id="reddit"
                            name="reddit"
                            type="text"
                            placeholder="Enter your linkedin url..."
                        />
                    </div>
                    <div className="flex">
                        <span className="cursor-pointer">
                            <TwitterIcon width={41} height={35} />
                        </span>
                        <input
                            className="form-input w-64 h-9 ml-5 text-18px font-normal dark:bg-[#E9E9E9]"
                            id="twitter"
                            name="twitter"
                            type="text"
                            placeholder="Enter your linkedin url..."
                        />
                    </div>
                    <div className="flex">
                        <span className="cursor-pointer">
                            <FacebookIcon width={41} />
                        </span>
                        <input
                            className="form-input w-64 h-9 ml-5 text-18px font-normal dark:bg-[#E9E9E9]"
                            id="facebook"
                            name="facebook"
                            type="text"
                            placeholder="Enter your linkedin url..."
                        />
                    </div>
                    <div className="flex">
                        <span className="cursor-pointer">
                            <GithubIcon width={41} />
                        </span>
                        <input
                            className="form-input w-64 h-9 ml-5 text-18px font-normal dark:bg-[#E9E9E9]"
                            id="github"
                            name="github"
                            type="text"
                            placeholder="Enter your linkedin url..."
                        />
                    </div>
                    <div className="flex">
                        <span className="cursor-pointer">
                            <InstagramIcon width={41} />
                        </span>
                        <input
                            className="form-input w-64 h-9 ml-5 text-18px font-normal dark:bg-[#E9E9E9]"
                            id="instagram"
                            name="instagram"
                            type="text"
                            placeholder="Enter your linkedin url..."
                        />
                    </div>

                </div>
                <p className="text-18px xs:text-24px mt-7 font-light">
                    Max of 3 social or portfolio links please.
                </p>
                <p className="text-18px xs:text-30px font-semibold mt-11 mb-7">
                    Work and education
                </p>
                <div className="h-52 h-[214px] mx-1 border-[3px] border-dashed border-[#A5A5A5] bg-white rounded-xl dark:bg-[#E9E9E9]">
                    <div className="h-full flex flex-col justify-center items-center text-center gap-y-4">
                        <svg width="81" height="52" viewBox="0 0 81 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.25 29.25V42.25H33.75V29.25H23.625L40.5 13L57.375 29.25H47.25ZM65.3063 19.5975C64.1657 14.0711 61.0696 9.09679 56.5459 5.523C52.0223 1.9492 46.3512 -0.00276107 40.5 2.93136e-06C30.7462 2.93136e-06 22.275 5.33 18.0563 13.0975C13.0929 13.6212 8.50513 15.8912 5.17288 19.4718C1.84064 23.0525 -0.00143413 27.6919 8.37748e-07 32.5C8.37748e-07 37.6717 2.13348 42.6316 5.93109 46.2886C9.7287 49.9455 14.8794 52 20.25 52H64.125C66.3411 52 68.5354 51.5797 70.5828 50.763C72.6302 49.9464 74.4904 48.7494 76.0574 47.2405C77.6244 45.7315 78.8674 43.9402 79.7155 41.9686C80.5635 39.9971 81 37.884 81 35.75C81 27.17 74.0813 20.215 65.3063 19.5975Z" fill="#A5A5A5" />
                        </svg>
                        <p className="text-18px font-normal">
                            Drag and drop
                        </p>
                        <p className="text-18px text-[#A5A5A5] font-light">
                            your file here, or <span id="fileName" className="text-deep-sky-blue cursor-pointer" onClick={() => document.getElementById('getFile').click()}>browse</span>
                            <input onClick={handleUpfile} className="hidden" type="file" id="getFile"  />
                        </p>
                    </div>
                </div>
                <p className="text-18px xs:text-24px mt-5 mt-[22px] mb-20 font-light">
                    Max file size: 10MB (.pdf, .doc or .docx files only)
                </p>
                <div className="flex justify-center gap-x-10 mx-32">
                    <button className="w-64 h-16 h-[74px] rounded-md text-24px text-white bg-[#FF9700] transition-all font-bold hover:scale-105 focus:scale-105">
                        Skip for now
                    </button>
                    <button className="w-64 h-16 h-[74px] rounded-md text-24px text-white bg-[#03A9F4] transition-all font-bold hover:scale-105 focus:scale-105">
                        Update my profile
                    </button>
                </div>
            </div>
            <footer className="">
                <div className="h-16 h-[68px] flex items-center justify-center bg-deep-sky-blue text-30px font-semibold text-white">
                    Need to edit something?&nbsp;
                    <a className="underline text-white" href="#">
                        Go back
                    </a>
                </div>
            </footer>
        </div>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            profileImage:
                "https://s3-alpha-sig.figma.com/img/4d26/2767/d0b64dcacf31bfa508adcc47aea65677?Expires=1648425600&Signature=BHMNOhVF9EQOSs09rh7Ot1GJBIjwiP1Vm86GNt~do1Zj5KFVYaVo0uCaL6umlWfrzhuOZ-tt3VaDqA-JSAU1PJGCMLnJWU2gXn6fZR4vPExQY2yPduYPxctiooLF7qJKEnw3RJS9GSH~pcr-7Ux5nb6FG40z799PuKbiSjbq0E5mB8~0FlOolFN62nQ9~BD6K4FNrr9FXBYV~k4gpSEW-YFCDwE0vi8PnDD0baN-J0JddjcDEwF6QnL6K9cJ5~Jxtc6qTaBpvnHPZOMLtnydOuiGK43Gys2fJBI60FMxtaNx5hsm4REJG396RsXKmvuVGbFh08i6uM~SdGeCU4feOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        }
    };
}
