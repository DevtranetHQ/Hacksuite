import Image from 'next/image';
import lightMode from "../../public/assets/mode/lightMode.svg"
import logo from "../../public/assets/logo.svg"

//TODO: make dark mode toggle a seperate component

export default function LoggedOutNav() {
    console.log(lightMode)
    console.log(logo)
    return (
        <div className="flex flex-row justify-between items-center h-36">
            <div className="w-36"> 
                <Image src={logo} alt="the dynamics logo"/>
            </div>
            <div className="m-5">
                <Image src={lightMode} alt='alt'/>
            </div>
        </div>
    );
}
