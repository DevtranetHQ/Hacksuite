import Link from "next/link";
import CountryInput from "../../components/form/CountryInput";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import TelInput from "../../components/form/TelInput";
import { withAuth } from "../../server/middlewares/auth.middleware";
import { useAuth } from "../../components/AuthContext";
import { useRouter } from "next/router";
import { IUser } from "../../server/modules/auth/user.model";
import { FormProvider, useForm } from "react-hook-form";
import userService from "../../server/modules/auth/user.service";
import {
  DescribeSelect,
  GenderSelect,
  LevelOfStudySelect,
  SkillsAndInterestSelect
} from "../../components/profile/inputs";

interface Props { user: IUser; }

type FormData = Pick<
  IUser,
  "phoneNumber" | "levelOfStudy" | "gender" | "countryOfResidence" | "describe" | "skills" | "dob"
>;

export default function Complete({ user }: Props) {
  const { completeProfile } = useAuth();
  const hookFormMethods = useForm<FormData>({ defaultValues: user });
  const { register, handleSubmit } = hookFormMethods;
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    await completeProfile.execute(data);
  };

  return (
    <div className="dark:bg-[#202020] dark:text-white flex flex-col min-h-screen">
      <div className="flex items-center justify-between px-6 xs:pl-8 xs:pr-12">
        <Logo className="w-[80px] xs:w-[120px] pt-5" />
        <div className="pt-2">
          <DarkModeToggle
            className="w-[24px] h-[22px] xs:w-[34px] xs:h-[31px]"
            darkClassName="w-[18px] h-[25px] xs:w-[25px] xs:h-[35px]"
          />
        </div>
      </div>
      {router.query.verified && (
        <p className="font-body font-semibold text-20px text-white bg-[#4CB050] text-center w-screen mb-5">
          Email Verification Successful!
        </p>
      )}
      {completeProfile.status === "error" && (
        <p className="font-body slide-bottom font-semibold md:text-20px text-[18px]  text-white text-center bg-[#D0342C] mx-auto mb-3 w-screen">
          Failed to save profile:{" "}
          {completeProfile.error?.response?.data?.message || completeProfile.error?.message}
        </p>
      )}
      {completeProfile.status === "success" && (
        <p className="font-body slide-bottom font-semibold md:text-20px text-[18px]  text-white text-center bg-[#4CB050] mx-auto mb-3 w-screen">
          Profile saved successfully!
        </p>
      )}
      <div className="flex grow shrink basis-[auto] justify-center">
        <form
          className="mxs:my-16 mxs:mx-4 mxs:px-8 mxs:pt-7 mxs:pb-14 xs:min-w-[60%] mb-14 pb-20"
          onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...hookFormMethods}>
            <h1 className="headline text-center">
              Complete your profile <span className="text-fruit-salad">{user.firstName}</span>
            </h1>
            <section className="">
              <h2 className="mxs:-mr-6 text-24px font-semibold xs:font-bold xs:text-center mt-16 mb-9">
                Demographic information
              </h2>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-4 xs:gap-x-4">
                <div>
                  <label className="form-label font-normal" htmlFor="dob">
                    Date of birth
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="form-input text-[#A5A5A5]"
                    id="dob"
                    name="dob"
                    type="text"
                    placeholder="MM/DD/YYYY"
                    {...register("dob")}
                    required
                  />
                </div>
                <div>
                  <label className="form-label font-normal" htmlFor="gender">
                    Gender
                    <span className="text-red-500">*</span>
                  </label>
                  <GenderSelect />
                </div>

                <div>
                  <label className="form-label font-normal" htmlFor="countryOfResidence">
                    Country of residence
                    <span className="text-red-500">*</span>
                  </label>
                  <CountryInput {...register("countryOfResidence")} />
                </div>
                <div>
                  <label className="form-label font-normal" htmlFor="phoneNumber">
                    Phone number
                  </label>
                  <TelInput {...register("phoneNumber")} />
                </div>
              </div>
            </section>
            <section className="">
              <h2 className="text-24px mxs:mb-9 font-semibold xs:font-bold xs:text-center my-12">
                Work and education
              </h2>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-4 xs:gap-x-4">
                <div>
                  <label className="form-label font-normal" htmlFor="describe">
                    What describes you the best?
                    <span className="text-red-500">*</span>
                  </label>
                  <DescribeSelect />
                </div>
                <div>
                  <label className="form-label font-normal" htmlFor="skills">
                    Skills and interests
                    <span className="text-red-500">*</span>
                  </label>
                  <SkillsAndInterestSelect />
                </div>
                <div>
                  <label className="form-label font-normal" htmlFor="levelOfStudy">
                    Level of study
                    <span className="text-red-500">*</span>
                  </label>
                  <LevelOfStudySelect />
                </div>
              </div>
            </section>

            <div className="flex justify-between mxs:-mx-8 -mx-10">
              <div className="w-8 xs:w-14 border-b-4 border-[#A0A0A0] z-0"></div>
              <div className="w-full border-b-4 border-[#A0A0A0] z-0">
                <button className="w-full md:w-1/2 button-medium button-deep-sky-blue rounded-md mt-12 mx-auto z-10 -mb-6 text-16px xs:text-24px py-2">
                  Complete your profile
                </button>
              </div>
              <div className="w-8 xs:w-6 border-b-4 border-[#A0A0A0] z-0"></div>
            </div>
          </FormProvider>
        </form>
      </div>
      <footer className="">
        <div className="mxs:text-18px text-28px py-1.5 xs:py-3 bg-deep-sky-blue flex items-center justify-center text-white font-medium">
          Need help with something?&nbsp;
          <Link href="mailto:team@thedynamics.tech">
            <a className="underline text-white">Contact us</a>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const payload = await withAuth(req => req.$user)(req, res);

  const props: Props = { user: await userService.getOne(payload.id) };

  return { props };
};
