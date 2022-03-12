import Image from "next/image";
import errorImage from "../public/assets/404.svg";

export default function Error() {
    return (
        <div className="relative w-screen h-screen">
            <Image layout="fill" objectFit="cover" src={errorImage} />
        </div>
    );
}
