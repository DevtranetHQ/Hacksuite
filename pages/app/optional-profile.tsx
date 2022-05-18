import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
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
import { handleAuth } from "../../server/utils/auth";
import userService from "../../server/modules/auth/user.service";
import { IUser } from "../../server/modules/auth/user.model";
import { useAuth } from "../../components/AuthContext";
import { useRouter } from "next/router";

type FormData = IUser["links"];
interface Props {
  user: IUser;
}

export default function Optional({ user }: Props) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>({ defaultValues: user.links });

  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const { updateProfile } = useAuth();

  const handleSelectFile = (cb: (file: File | null) => void) => (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return cb(null);

    cb(file);
  };

  const onSubmit = async (links: FormData) => {
    const linksCount = Object.values(links).filter(Boolean);
    if (linksCount.length > 3) {
      updateProfile.throwErr(new Error(`You can only add up to 3 links`));
      return;
    }

    const changed = Object.keys(links).some(key => links[key] !== user.links?.[key]);

    await updateProfile.execute(
      changed ? { links } : {},
      { image: profilePhoto, resume: resumeFile }
    );

    router.push("/app");
  }

  return (
    <div className="dark:bg-[#202020] dark:text-white relative">
      <div className="flex items-center justify-between px-6 xs:pl-8 xs:pr-12">
        <Logo className="w-[80px] xs:w-[120px] pt-5" />
        <div className="pt-2">
          <DarkModeToggle
            className="w-[24px] h-[22px] xs:w-[34px] xs:h-[31px]"
            darkClassName="w-[18px] h-[25px] xs:w-[25px] xs:h-[35px]"
          />
        </div>
      </div>
      {updateProfile.status === "error" &&
        <p className="font-body slide-bottom font-semibold md:text-20px text-[18px]  text-white text-center bg-[#D0342C] mx-auto mb-3 w-screen">
          Failed to save profile: {updateProfile.error?.response?.data?.message || updateProfile.error?.message}
        </p>
      }
      {updateProfile.status === "success" &&
        <p className="font-body slide-bottom font-semibold md:text-20px text-[18px]  text-white text-center bg-[#4CB050] mx-auto mb-3 w-screen">
          Profile saved successful!
        </p>
      }
      <div className="mxs:pt-7 mxs:pb-8 rounded-[20px] bg-[#F4F4F4] dark:bg-[#444444] pt-12 pb-20 px-6 mx-4 xs:pl-14 xs:pr-6 xs:mx-8 lg:mx-32 xl:p-11 xl:ml-[17rem] xl:mr-60 mt-16 mb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex mxs:flex-col-reverse justify-start items-center">
            <Avatar
              className="relative mxs:h-[164px] w-[164px] h-[166px]"
              image={profilePhoto ? URL.createObjectURL(profilePhoto) : user.image}
            />
            <p className="mxs:mb-8 text-24px xs:text-36px font-bold text-center xs:pl-12">
              <span className="text-[#4cb050]">{user.firstName},</span> can we know you better?
            </p>
          </div>
          <div className="mxs:w-full">
            <label
              className="button-small button-deep-sky-blue cursor-pointer mxs:mx-auto mxs:w-fit mxs:mt-5 mt-3.5 xs:gap-x-3 h-14 xs:inline-flex xs:w-52"
              htmlFor="profile-upload">
              <UploadIcon />
              <span className="mxs:ml-3 text-18px">Upload a picture</span>
            </label>
          </div>
          <input
            className="hidden"
            id="profile-upload"
            onChange={handleSelectFile(setProfilePhoto)}
            type="file"
            accept="image/*"
          />
          <p className="text-18px xs:text-30px font-semibold mt-14 mb-8">
            Social and portfolio links
          </p>

          <div className="grid grid-cols-1 gap-x-4 gap-y-4 xs:grid-cols-2 xs:gap-y-0 xs:gap-x-16 pl-1 pr-24 mxs:pr-2">
            <div className="flex">
              <span className="cursor-pointer">
                <LinkedinIcon width={37} height={37} />
              </span>
              <input
                className="form-input w-64 h-9 ml-5 mxs:text-16px text-18px font-normal dark:bg-[#E9E9E9]"
                id="linkedin"
                name="linkedin"
                type="text"
                placeholder="Enter your linkedin url..."
                {...register(`linkedin`)}
              />
            </div>
            <div className="flex">
              <span className="cursor-pointer">
                <RedditIcon width={41} />
              </span>
              <input
                className="form-input w-64 h-9 ml-5 mxs:text-16px text-18px font-normal dark:bg-[#E9E9E9]"
                id="reddit"
                name="reddit"
                type="text"
                placeholder="Enter your reddit url..."
                {...register(`reddit`)}
              />
            </div>
            <div className="flex">
              <span className="cursor-pointer">
                <TwitterIcon width={41} height={35} />
              </span>
              <input
                className="form-input w-64 h-9 ml-5 mxs:text-16px text-18px font-normal dark:bg-[#E9E9E9]"
                id="twitter"
                name="twitter"
                type="text"
                placeholder="Enter your twitter url..."
                {...register(`twitter`)}
              />
            </div>
            <div className="flex">
              <span className="cursor-pointer">
                <FacebookIcon width={41} />
              </span>
              <input
                className="form-input w-64 h-9 ml-5 mxs:text-16px text-18px font-normal dark:bg-[#E9E9E9]"
                id="facebook"
                name="facebook"
                type="text"
                placeholder="Enter your facebook url..."
                {...register(`facebook`)}
              />
            </div>
            <div className="flex">
              <span className="cursor-pointer">
                <GithubIcon width={41} />
              </span>
              <input
                className="form-input w-64 h-9 ml-5 mxs:text-16px text-18px font-normal dark:bg-[#E9E9E9]"
                id="github"
                name="github"
                type="text"
                placeholder="Enter your github url..."
                {...register(`github`)}
              />
            </div>
            <div className="flex">
              <span className="cursor-pointer">
                <InstagramIcon width={41} />
              </span>
              <input
                className="form-input w-64 h-9 ml-5 mxs:text-16px text-18px font-normal dark:bg-[#E9E9E9]"
                id="instagram"
                name="instagram"
                type="text"
                placeholder="Enter your instagram url..."
                {...register(`instagram`)}
              />
            </div>
          </div>
          <p className="text-14px xs:text-24px mt-4 xs:mt-4 font-extralight">
            Max of 3 social or portfolio links please.
          </p>
          <p className="text-18px xs:text-30px font-semibold mt-11 mb-7">Upload your resume</p>
          <div className="h-52 h-[214px] mx-1 border-[3px] border-dashed border-[#A5A5A5] bg-white rounded-xl dark:bg-[#E9E9E9]">
            <label
              htmlFor="resume"
              className="h-full flex flex-col justify-center items-center text-center gap-y-4 cursor-pointer">
              <svg
                width="81"
                height="52"
                viewBox="0 0 81 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M47.25 29.25V42.25H33.75V29.25H23.625L40.5 13L57.375 29.25H47.25ZM65.3063 19.5975C64.1657 14.0711 61.0696 9.09679 56.5459 5.523C52.0223 1.9492 46.3512 -0.00276107 40.5 2.93136e-06C30.7462 2.93136e-06 22.275 5.33 18.0563 13.0975C13.0929 13.6212 8.50513 15.8912 5.17288 19.4718C1.84064 23.0525 -0.00143413 27.6919 8.37748e-07 32.5C8.37748e-07 37.6717 2.13348 42.6316 5.93109 46.2886C9.7287 49.9455 14.8794 52 20.25 52H64.125C66.3411 52 68.5354 51.5797 70.5828 50.763C72.6302 49.9464 74.4904 48.7494 76.0574 47.2405C77.6244 45.7315 78.8674 43.9402 79.7155 41.9686C80.5635 39.9971 81 37.884 81 35.75C81 27.17 74.0813 20.215 65.3063 19.5975Z"
                  fill="#A5A5A5"
                />
              </svg>
              <p className="text-18px font-normal dark:text-black">Drag and drop</p>
              <p className="text-18px text-[#A5A5A5] font-light">
                {resumeFile ? (
                  <span id="file" className="text-deep-sky-blue cursor-pointer">
                    {resumeFile.name}
                  </span>
                ) : (
                  "your file here"
                )}

                <input
                  onChange={handleSelectFile(setResumeFile)}
                  className="hidden"
                  type="file"
                  id="resume"
                  name="resume"
                />
              </p>
            </label>
          </div>
          <p className="mxs:text-14px text-24px mxs:mt-4 mt-4 mxs:mb-9 mb-20 font-extralight">
            Max file size: 10MB (.pdf, .doc or .docx files only)
          </p>
          <div className="flex justify-center xs:gap-x-10 xs:mx-32">
            <Link href="/app">
              <button className="mxs:mr-5 mxs:py-2.5 w-[88%] xs:w-64 xs:h-[74px] rounded-md text-16px xs:text-24px text-white bg-[#FF9700] transition-all font-bold hover:scale-105 focus:scale-105">
                Skip for now
              </button>
            </Link>
            <button className="mxs:py-2.5 mxs:px-1.5 w-full xs:w-64 xs:h-[74px] rounded-md text-16px xs:text-24px text-white bg-[#03A9F4] transition-all font-bold hover:scale-105 focus:scale-105">
              Update my profile
            </button>
          </div>
        </form>
      </div>
      <footer className="">
        <div className="mxs:py-1.5 mxs:text-18px text-30px xs:h-[68px] flex items-center justify-center bg-deep-sky-blue font-medium text-white">
          Need to edit something?&nbsp;
          <Link href="/app/profile">
            <a className="underline text-white">Go back</a>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const payload = await handleAuth(req);

  const props: Props = { user: await userService.getOne(payload.id) };

  return { props };
}
