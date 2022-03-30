import Image from "next/image";
import { Icon } from "@iconify/react";
import verificationImage from "../public/assets/auth/verification.png";
import vector from "../public/assets/auth/Vector.svg";

export default function Login() {
    return (
        <div className="flex flex-col text-center">
            <div className="w-full lg:w-3/5 mx-auto z-0">
                <Image layout="responsive" src={verificationImage} />
            </div>

            <div className="xs:-mt-6 z-10">
                <p className="w-4/5 xs:w-1/3 mx-auto text-8px lg:text-18px">
                    <span className="font-semibold">Can't find it? </span>
                    check your spam, junk and promotions folder or click the
                    resend button
                </p>
                <div className="button-small bg-[#4CB050] text-12px lg:text-24px w-fit mx-auto px-5 mt-2 flex rounded">
                    <span className="mt-2">
                        <Image src={vector} height={20} />
                    </span>
                    &ensp;resend email
                </div>
            </div>
        </div>
    );
}
