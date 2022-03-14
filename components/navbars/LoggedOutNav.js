import Image from "next/image";
import lightMode from "../../public/assets/mode/lightMode.svg";
import logo from "../../public/assets/logo.svg";

// TODO: make dark mode toggle a seperate component

export default function LoggedOutNav() {
    console.log(lightMode);
    console.log(logo);
    return (
        <div className="flex flex-row justify-between items-center h-36 lg:h-48 xl:h-56">
            <div className="w-36 lg:w-48 xl:w-56">
                <Image src={logo} alt="the dynamics logo" />
            </div>
            <div className="m-5 w-8 lg:w-10 xl:w-14">
                <Image src={lightMode} alt="alt" />
            </div>
        </div>
    );
}
