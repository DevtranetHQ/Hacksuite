import Image from "next/image";
import verificationImage from "../public/assets/auth/verification.png";
import InboxIcon from "../components/icons/Inbox";

export default function VerificationSent() {
    return (
        <div className="flex flex-col text-center">
            <div className="mx-auto w-full lg:w-3/5 z-0">
                <Image layout="responsive" src={verificationImage} />
            </div>
            <div className="xs:-mt-6 z-10">
                <p className="mx-auto text-8px lg:text-18px">
                    <span className="font-semibold">Can't find it?</span>
                    Check your spam, junk, and promotions folder or click the resend button
                </p>
                <div className="button-small button-fruit-salad text-12px lg:text-24px w-fit mx-auto mt-2 px-5 flex rounded">
                    <span className="mt-2">
                        <InboxIcon />
                    </span>
                    &ensp; Resend email
                </div>
            </div>
        </div>
    );
}
