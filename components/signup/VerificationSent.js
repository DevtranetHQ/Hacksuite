import Image from "next/image";
import verificationImage from "../../public/assets/auth/verification-email-sent.svg";
import InboxIcon from "../icons/Inbox";
import { useAuth } from "../AuthContext";
import LoadingButton from "../LoadingButton";

export default function VerificationSent({ email }) {
  const { resendEmailVerification } = useAuth();

  return (
    <div className="h-screen">
      {resendEmailVerification.status === "success" && (
        <p className="font-body slide-bottom font-semibold text-20px text-white bg-[#4CB050] text-center w-screen mb-5">
          Verification Email Resent!
        </p>
      )}
      <div className="flex flex-col justify-center msm:h-[80%] h-[95%] mx-auto w-full sm:w-[57%] sm:z-0">
        <Image className="sm:scale-90" layout="responsive" src={verificationImage} alt="" />
        <div className="sm:-mt-8 sm:z-10 w-3/4 sm:w-3/5 mx-auto text-center px-4">
          <p className="text-10px sm:text-18px sm:mb-1.5">
            <span className="font-semibold">Can't find it?</span>
            &nbsp;Check your spam, junk, and promotions folder or click the resend button
          </p>
          <LoadingButton
            className="msm:pl-2 msm:pr-3.5 w-fit button-small msm:py-0 button-fruit-salad rounded sm:rounded-md cursor-pointer text-14px sm:text-24px mx-auto mt-4 sm:mt-5 sm:px-6 h-8 sm:h-12"
            isLoading={resendEmailVerification.status === "loading"}
            onClick={() => resendEmailVerification.execute(email)}>
            <span className="relative msm:scale-50 scale-75 mt-0.5 sm:mt-1.5 sm:mr-2">
              <InboxIcon />
            </span>
            &nbsp;resend email
          </LoadingButton>
        </div>
      </div>
    </div>
  );
}
