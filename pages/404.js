import Image from "next/image";
import errorImage from "../public/assets/404.svg";
import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Error() {
  return (
    <div className="flex-col items-center justify-center w-screen h-screen md:mt-0 md:mb-0 mt-[75%] mb-[50%]">

      <div className="flex items-center mx-auto justify-center">
        <img src="/assets/404.svg" className="w-[750px] h-auto" alt="404"/>
      </div>

      <div className="button-small md:button-medium button-fruit-salad text-12px  w-fit mx-auto">
        <Link href="/">
        <p className="text-white dark:text-dark flex items-center"><Icon icon="mdi:home" className="mr-2"/>Go back home</p> 
        </Link>
      </div>

    </div>
  );
}
