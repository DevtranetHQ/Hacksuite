import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState } from "react";
import Logo from "../Logo";
import DarkModeContext from "../DarkModeContext";
import DarkModeToggle from "../DarkModeToggle";
import NotificationsLink from "./NotificationsLink";
import { DashNavMobile, MenuMobile } from "./DashNavMobile";
import bars from "../../public/assets/dash/bars-solid.svg";

export default function DashHeader({}) {
  const router = useRouter();
  const { pathname } = router;
  const { darkMode } = useContext(DarkModeContext);
  const [menu, setMenu] = useState(true);

  const handleBars = () => {
    setMenu(r => !r);
  };

  let title = "";

  switch (pathname) {
    case "/app/notifications":
      title = "Notifications";
      break;
    case "/app/settings":
      title = "Account Settings";
      break;
    case "/app/personal-projects":
      title = "Projects";
      break;
    case "/app/create-project":
      title = "Projects";
      break;
  }

  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-end xs:pb-10 mxs:justify-between mxs:px-5">
        <h1
          className={`${
            pathname === "/app" ? "hidden" : ""
          } mxs:hidden mx-auto font-semibold text-42px`}>
          {title}
        </h1>
        <Logo className="xs:hidden w-[80px] xs:w-[120px] pt-1" />
        <div className="text-right flex items-end justify-end xs:mt-3 mxs:mb-0.5">
          <DarkModeToggle
            className="mxs:mr-1 h-[22px] xs:h-[30px]"
            darkClassName="mxs:mr-1 mxs:mb-[2px] h-[20px] xs:h-[30px]"
          />
          <NotificationsLink />
          <div onClick={handleBars} className="xs:hidden relative w-[22px] -mb-1 ml-1">
            <Image src={bars} alt="bars-solid" />
          </div>
        </div>
      </header>
      <MenuMobile menu={menu} onClick={handleBars} />
    </div>
  );
}
