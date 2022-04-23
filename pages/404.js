import Image from "next/image";
import Link from "next/link"
import errorImage from "../public/assets/404.svg";
import HomeImage from "../public/assets/home.png";

export default function Error() {
    return (
        <>
        <Image layout="fill" objectFit="contain" src={errorImage} alt="404" />
        <div className="absolute mt-6 top-[82%] md:top-[90%] lg:top-[91%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Link href="/login">
            <div className="bg-fruit-salad p-2 border-0 rounded-md cursor-pointer flex justify-center items-center">
                <Image src={HomeImage} layout="fixed" className="" alt="home image" height={16.5} width={19.5} />
                <span className="text-white capitalize">&nbsp;&nbsp;go back home</span>
            </div>
            </Link>
        </div>
        </>
    );
}
