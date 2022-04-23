import Image from "next/image";
import errorImage from "../public/assets/404.svg";
import HomeImage from "../public/assets/home.jpg";

export default function Error() {
    return (
        <>
        <Image layout="fill" objectFit="contain" src={errorImage} alt="404" />
        {/* <div className="button"> */}
            {/* {HomeImage} */}
            {/* go back home */}
        {/* </div> */}
        {/* <div className="button-small button-fruit-salad text-12px xs:text-24px w-fit mx-auto mt-4 xs:mt-5 rounded xs:rounded-md px-3 xs:px-8 cursor-pointer h-6 xs:h-12">
            <span className="mt-0.5 xs:mt-1">
                <InboxIcon />
            </span>
            &ensp;resend email
        </div> */}
        </>
    );
}
