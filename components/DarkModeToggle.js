import Image from 'next/image';
import lightMode from "../public/assets/mode/lightMode.svg"
import darkMode from "../public/assets/mode/darkMode.svg"


export default function LoggedOutNav({isLight, setIsLight}) {
    return (
            <Image 
                onClick={() => setIsLight(!isLight)}
                src={isLight ? darkMode : lightMode} 
                alt="the dark mode toggle button"
            />
    );
}
