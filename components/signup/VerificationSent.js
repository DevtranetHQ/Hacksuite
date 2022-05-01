import Image from "next/image";
import Fade from "react-reveal/Fade";
import verificationImage from "../../public/assets/auth/verification.png";
import InboxIcon from "../icons/Inbox";
import { useAuth } from "../AuthContext";
import LoadingButton from "../LoadingButton";

export default function VerificationSent({ email }) {
  const { resendEmailVerification } = useAuth();

  return (
    <div className="h-screen">
      {resendEmailVerification.status === "success" && (
        <Fade top>
          <p className="font-body font-semibold text-20px text-white bg-[#4CB050] text-center w-screen mb-5">
            Verification Email Resent!
          </p>
        </Fade>
      )}
      <div className="flex flex-col h-[80%] justify-center mx-auto w-full xs:w-[57%] xs:z-0">
        <Image layout="responsive" src={verificationImage} alt="" />
        <div className="xs:-mt-4 xs:z-10 w-3/4 xs:w-3/5 mx-auto text-center px-4">
          <p className="text-10px xs:text-20px">
            <span className="font-semibold">Can't find it?</span>
            &nbsp;Check your spam, junk, and promotions folder or click the resend button
          </p>
          <LoadingButton
            className="mxs:pl-2 mxs:pr-3 mxs:py-3 button-small button-fruit-salad text-14px xs:text-24px w-fit mx-auto mt-4 xs:mt-5 rounded xs:rounded-md xs:px-8 cursor-pointer xs:h-12"
            isLoading={resendEmailVerification.status === "loading"}
            onClick={() => resendEmailVerification.execute(email)}>
            <span className="mxs:scale-50 relative mt-0.5 xs:mt-1 xs:mr-2">
              <InboxIcon />
            </span>
            &nbsp;resend email
          </LoadingButton>
        </div>
      </div>
    </div>
  );
}
