import Image from "next/image";
import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";
import logoLight from "../public/assets/logo.svg";
import logoDark from "../public/assets/logo-dark.svg";

export default function Logo({ className }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`relative ${className ? className : "w-[120px]"}`}>
      <Image src={darkMode ? logoDark : logoLight} />
    </div>
  );
}
