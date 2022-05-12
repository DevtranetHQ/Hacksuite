import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import DashNav from "../../components/dash/DashNav";
import DarkModeContext from "../../components/DarkModeContext";
import DarkModeToggle from "../../components/DarkModeToggle";
import NotificationsLink from "../../components/dash/NotificationsLink";
import placeholder from "../../public/assets/dash/placeholder.svg";
import robotLight from "../../public/assets/dash/robotLight.svg";
import robotDark from "../../public/assets/dash/robotDark.svg";
import { withAuth } from "./../../server/middlewares/auth.middleware";

export default function Dash({ admin, name, unread }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="grid grid-cols-12 dark:bg-[#202020]">
      <div className="col-span-1 mx-auto">
        <DashNav admin={admin} />
      </div>
      <div className="dark:bg-[#202020] dark:text-white col-span-11 p-10  mx-auto content-center min-w-full min-h-screen">
        <div className="text-right flex items-end justify-end  mt-3">
          <DarkModeToggle className="h-[30px]" darkClassName="h-[30px]" />
          <NotificationsLink unread={unread} className="h-[25px]" />
        </div>
        <div>
          <div className="text-center">
            <h1 className="font-semibold text-42px -mt-3">
              Hey there, <span className="text-fruit-salad">{name}.</span>
            </h1>
            <div className="mx-auto -mt-8">
              <Image src={placeholder} alt="" width={700} height={430} />
            </div>
            <div className="-mt-14">
              <h1 className="text-54px -rotate-6">Welcome to</h1>
              <h1 className="text-54px font-semibold uppercase -mt-3">The Dynamics</h1>
            </div>
          </div>
          <div className="fixed bottom-0 right-0 pb-3 pr-3 z-20">
            {darkMode ? <Image src={robotDark} alt="" /> : <Image src={robotLight} alt="" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const user = await withAuth(req => req.$user)(req, res);

  return {
    props: {
      admin: false,
      name: user.firstName
    }
  };
}
