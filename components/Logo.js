import Image from "next/image";
import logoLight from "../public/assets/logo.svg";
import logoDark from "../public/assets/logo-dark.svg";

export default function Logo({ className, darkMode }) {
    return (
        <div className={`relative ${className ? className : "w-[120px]"}`}>
            <Image src={darkMode ? logoDark : logoLight} />
        </div>
    );
}
