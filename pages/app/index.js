import Image from "next/image";
import { useContext } from "react";
import DashNav from "../../components/dash/DashNav";
import { DashNavMobile, MenuMobile } from "../../components/dash/DashNavMobile";
import DarkModeContext from "../../components/DarkModeContext";
import DarkModeToggle from "../../components/DarkModeToggle";
import Logo from "../../components/Logo";
import NotificationsLink from "../../components/dash/NotificationsLink";
import placeholder from "../../public/assets/dash/placeholder.svg";
import robotLight from "../../public/assets/dash/robotLight.svg";
import robotDark from "../../public/assets/dash/robotDark.svg";
import bars from "../../public/assets/dash/bars-solid.svg";
import { withAuth } from "../../server/middlewares/auth.middleware";
import { notificationService } from "../../server/modules/notification/notifications.service";
import { useState } from "react";

export default function Dash({ admin, name, unread }) {
  const { darkMode } = useContext(DarkModeContext);
  const [menu, setMenu] = useState(true);

  const handleBars = () => {
    setMenu(r => !r);
  };

  return (
    <div className="xs:grid xs:grid-cols-12 dark:bg-[#202020]">
      <div className="mxs:hidden col-span-1 mx-auto">
        <DashNav admin={admin} />
      </div>
      <div className="mxs:flex mxs:flex-col mxs:justify-between mxs:px-0 mxs:pt-4 dark:bg-[#202020] dark:text-white col-span-11 p-10 mx-auto content-center min-w-full min-h-screen">
        <div className="flex flex-col">
          <div className="mxs:flex items-center justify-between mxs:px-5">
            <Logo className="xs:hidden w-[80px] xs:w-[120px] pt-1" />
            <div className="text-right flex items-end justify-end xs:mt-3 mxs:mb-0.5">
              <DarkModeToggle
                className="h-[22px] xs:h-[30px]"
                darkClassName="h-[22px] xs:h-[30px]"
              />
              <NotificationsLink unread={unread} />
              <div onClick={handleBars} className="xs:hidden relative w-[22px] -mb-1 ml-1">
                <Image src={bars} alt="bars-solid" />
              </div>
            </div>
          </div>
          <MenuMobile id="bars-active" menu={menu} />
        </div>

        <div className="text-center">
          <h1 className="mxs:text-24px font-semibold text-42px -mt-3">
            Hey there, <span className="text-fruit-salad">{name}.</span>
          </h1>
          <div className="mx-auto -mt-2 xs:-mt-8">
            <Image src={placeholder} alt="" width={700} height={430} />
          </div>
          <div className="-mt-6 xs:-mt-14">
            <h1 className="mxs:text-24px text-54px -rotate-6">Welcome to</h1>
            <h1 className="mxs:text-26px text-54px font-semibold uppercase -mt-3">The Dynamics</h1>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className="mxs:w-[150px] fixed mxs:bottom-20 bottom-0 right-0 xs:pb-3 xs:pr-3 z-20">
          {darkMode ? (
            <Image className="" src={robotDark} alt="" />
          ) : (
            <Image className="" src={robotLight} alt="" />
          )}
        </div>
      </div>
      <div className="xs:hidden">
        <DashNavMobile />
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const user = await withAuth(req => req.$user)(req, res);
  const unread = await notificationService.checkUnreadNotifications(user.uniqueId);

  return {
    props: {
      admin: false,
      name: user.firstName,
      unread
    }
  };
}
