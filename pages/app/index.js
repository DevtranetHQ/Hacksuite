import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { pathname } = router
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
    <DashNav admin={admin} unread={unread}/>
    <div className="grid grid-cols-12 relative">
      <div className="md:col-span-2 hidden md:block">
        {/* <DashNav admin={admin} unread={unread}/> */}
      </div>
      <div className="dark:bg-[#202020] dark:text-white col-span-12 md:col-span-10 md:p-10 py-12 px-5 relative">
        {/* <div className="text-right flex items-center justify-end">
        <DarkModeToggle
                className="h-[30px]"
                darkClassName="h-[30px]"
            />
          <NotificationsLink unread={unread} className="h-[25px]"/>
        </div> */}
        <div className="text-center md:mt-20 mt-[5rem]">
            <h1 className="font-semibold md:text-42px text-30px">
            Hey there, <span className="text-fruit-salad">{name}.</span>
          </h1>
            <div className="mx-auto relative md:w-6/12 w-[100%] h-[15rem]">
              <Image src={placeholder} alt="" className="object-cover" layout="fill"/>           
          </div>
          <h1 className="md:text-42px text-30px -rotate-6">Welcome to</h1>
          <h1 className="md:text-42px text-30px font-semibold uppercase">The Dynamics</h1>
        </div>
        <div className="fixed bottom-[4rem] md:bottom-0 right-0 pb-3 pr-3 z-20">
          {/* {darkMode ? <Image src={robotDark} alt="" className="object-cover w-[!12rem]" layout="fill"/> : <Image src={robotLight} alt="" className="object-cover w-[!12rem] h-[!12rem]" layout="fill"/>} */}
          {darkMode ? <img src="/assets/dash/robotDark.svg" alt="" className="object-cover w-[9rem] h-[!12rem]" layout="fill"/> : <img src="/assets/dash/robotLight.svg" alt="" className="object-cover w-[9rem] h-[!12rem]" layout="fill"/>}
        </div>

        
        <div className="fixed bottom-0 right-0 pr-3 z-20 w-[100%]">
         <div className="flex w-[100%] justify-between items-center px-4 bg-[#F8FBFF] py-4">
        <Link href="/workshop">
          <div
            className="cursor-pointer hover:text-orange-peel transition flex items-center flex-col"
            >
            <svg
              width="39"
              height="33"
              viewBox="0 0 39 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7">
              <path
                d="M22.9861 24.9625L34.7361 36.7125L38.8682 32.4825L27.1182 20.7325L22.9861 24.9625V24.9625ZM30.2711 14.7792C29.5073 14.7792 28.6848 14.6812 28.0386 14.4071L5.73316 36.6146L1.60107 32.4825L16.1123 17.9908L12.6461 14.505L11.2361 15.8758L8.39649 13.1146V18.7154L7.02566 20.0862L0.132324 13.1146L1.50316 11.7437H7.00607L4.26441 8.9825L11.2361 2.01083C11.7777 1.46633 12.4215 1.03424 13.1306 0.739388C13.8398 0.444541 14.6002 0.292755 15.3682 0.292755C16.1361 0.292755 16.8965 0.444541 17.6057 0.739388C18.3148 1.03424 18.9587 1.46633 19.5002 2.01083L15.3682 6.24083L18.1294 8.9825L16.739 10.3729L20.2444 13.8587L23.8086 10.1771C23.5344 9.53083 23.4169 8.70833 23.4169 7.98375C23.4091 7.07964 23.5808 6.18297 23.922 5.34568C24.2633 4.50839 24.7672 3.74712 25.4047 3.10598C26.0422 2.46483 26.8006 1.95655 27.6359 1.61057C28.4713 1.26459 29.3669 1.08779 30.2711 1.09041C31.4265 1.09041 32.4448 1.36458 33.3652 1.91291L28.1365 7.14166L31.074 10.0792L36.3027 4.85041C36.8511 5.77083 37.1252 6.75 37.1252 7.98375C37.1252 11.7437 34.0898 14.7792 30.2711 14.7792Z"
                fill="#03A9F4"
              />
            </svg>

            <span className="font-semibold text-[14px]">Workshops</span>
          </div>
        </Link>       
        <Link href="/personal-projects">
          <div
            className="cursor-pointer hover:text-orange-peel transition flex items-center flex-col"
            >
            <svg
              width="39"
              height="33"
              viewBox="0 0 40 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7">
              <path
                d="M36.2033 22.7546C36.4775 22.7546 36.7321 22.8721 36.9475 23.0875L39.4542 25.5942C39.885 26.0054 39.885 26.6908 39.4542 27.1021L37.4958 29.0604L33.4812 25.0458L35.4396 23.0875C35.655 22.8721 35.9292 22.7546 36.2033 22.7546ZM32.3454 26.1817L36.36 30.1963L24.4925 42.0833H20.4583V38.0492L32.3454 26.1817ZM16.5417 36.2083L12.625 40.125H4.79167C2.6375 40.125 0.875 38.3625 0.875 36.2083V8.79168C0.875 6.63751 2.6375 4.87501 4.79167 4.87501H12.9775C13.8 2.60334 15.9542 0.958344 18.5 0.958344C21.0458 0.958344 23.2 2.60334 24.0225 4.87501H32.2083C34.3625 4.87501 36.125 6.63751 36.125 8.79168V16.625L32.2083 20.5417V8.79168H28.2917V12.7083H8.70833V8.79168H4.79167V36.2083H16.5417ZM18.5 4.87501C17.4229 4.87501 16.5417 5.75626 16.5417 6.83334C16.5417 7.91043 17.4229 8.79168 18.5 8.79168C19.5771 8.79168 20.4583 7.91043 20.4583 6.83334C20.4583 5.75626 19.5771 4.87501 18.5 4.87501Z"
                fill="#03A9F4"
              />
            </svg>
            <span className="font-semibold text-[14px]">Projects</span>
          </div>
        </Link>
        <Link href="/events">
          <div
            className="cursor-pointer hover:text-orange-peel transition flex items-center flex-col">
            <svg
              width="39"
              height="33"
              viewBox="0 0 37 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7">
              <path
                d="M27.3713 20.6592L25.2954 18.5833L15.7388 28.14L11.5871 23.9883L9.51125 26.0642L15.7388 32.2917L27.3713 20.6592ZM32.2083 4.87501H30.25V0.958344H26.3333V4.87501H10.6667V0.958344H6.75V4.87501H4.79167C2.61792 4.87501 0.894583 6.63751 0.894583 8.79168L0.875 36.2083C0.875 37.2471 1.28765 38.2433 2.02216 38.9778C2.75668 39.7124 3.7529 40.125 4.79167 40.125H32.2083C34.3625 40.125 36.125 38.3625 36.125 36.2083V8.79168C36.125 6.63751 34.3625 4.87501 32.2083 4.87501ZM32.2083 36.2083H4.79167V14.6667H32.2083V36.2083Z"
                fill="#03A9F4"
              />
            </svg>
            <span className="font-semibold text-[14px]">Events</span>
          </div>
        </Link>
        {!admin && (
          <Link href="/discord">
            <div
              className="cursor-pointer hover:text-orange-peel transition flex items-center flex-col">
              <svg
                width="39"
                height="33"
                viewBox="0 0 41 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7">
                <path
                  d="M40.0834 46L29.8022 36.2083L31.0359 40.125H5.81258C4.51413 40.125 3.26885 39.6092 2.3507 38.691C1.43256 37.7729 0.916748 36.5276 0.916748 35.2292V5.85416C0.916748 4.55571 1.43256 3.31043 2.3507 2.39228C3.26885 1.47414 4.51413 0.958328 5.81258 0.958328H35.1876C36.486 0.958328 37.7313 1.47414 38.6495 2.39228C39.5676 3.31043 40.0834 4.55571 40.0834 5.85416V46ZM20.5001 12.3167C15.2517 12.3167 11.5701 14.5687 11.5701 14.5687C13.5872 12.7671 17.1122 11.7292 17.1122 11.7292L16.7792 11.3962C13.4697 11.455 10.4734 13.7462 10.4734 13.7462C7.10508 20.7767 7.3205 26.8475 7.3205 26.8475C10.0622 30.3921 14.1355 30.1375 14.1355 30.1375L15.5259 28.375C13.078 27.8462 11.5309 25.6725 11.5309 25.6725C11.5309 25.6725 15.2126 28.1792 20.5001 28.1792C25.7876 28.1792 29.4692 25.6725 29.4692 25.6725C29.4692 25.6725 27.9222 27.8462 25.4742 28.375L26.8647 30.1375C26.8647 30.1375 30.938 30.3921 33.6797 26.8475C33.6797 26.8475 33.8951 20.7767 30.5268 13.7462C30.5268 13.7462 27.5305 11.455 24.2209 11.3962L23.888 11.7292C23.888 11.7292 27.413 12.7671 29.4301 14.5687C29.4301 14.5687 25.7484 12.3167 20.5001 12.3167ZM16.4463 19.7387C17.7192 19.7387 18.7572 20.855 18.7376 22.2258C18.7376 23.5771 17.7192 24.7129 16.4463 24.7129C15.193 24.7129 14.1747 23.5771 14.1747 22.2258C14.1747 20.855 15.1734 19.7387 16.4463 19.7387ZM24.6126 19.7387C25.8855 19.7387 26.9038 20.855 26.9038 22.2258C26.9038 23.5771 25.8855 24.7129 24.6126 24.7129C23.3592 24.7129 22.3409 23.5771 22.3409 22.2258C22.3409 20.855 23.3397 19.7387 24.6126 19.7387Z"
                  fill="#03A9F4"
                />
              </svg>
              <span className="font-semibold text-[14px]">Discord</span>
            </div>
          </Link>
        )}      
      </div>
        </div>
      </div>
    </div>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const user = await withAuth(req => req.$user)(req, res);

  return {
    props: {
      admin: false,
      name: user.firstName,
      unread: true
    }
  };
}
