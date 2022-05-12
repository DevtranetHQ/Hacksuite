import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DarkModeToggle from "../../components/DarkModeToggle";
import DashNav from "../../components/dash/DashNav";
import { DashNavMobile, MenuMobile } from "../../components/dash/DashNavMobile";
import Logo from "../../components/Logo";
import Notification from "../../components/dash/Notification";
import { useNotifications } from "../../hooks/useNotifications";
import { withAuth } from "../../server/middlewares/auth.middleware";
import { INotification } from "../../server/modules/notification/notification.model";
import { notificationService } from "../../server/modules/notification/notifications.service";
import NotificationsLink from "../../components/dash/NotificationsLink";
import { Empty } from "../../components/Empty";
import bars from "../../public/assets/dash/bars-solid.svg";

interface Props {
  notifications: INotification[];
}

export default function Notifications({ notifications }: Props) {
  const [notifs, setNotifs] = useState(notifications);
  const { removeNotification } = useNotifications();
  const [menu, setMenu] = useState(true);

  const handleBars = () => {
    setMenu(r => !r);
  };

  const handleRemove = async (id: string) => {
    setNotifs(notifications.filter(notif => notif._id !== id));
    await removeNotification.execute(id);
  };

  return (
    <div className="xs:grid xs:grid-cols-12 dark:bg-[#202020]">
      <div className="mxs:hidden col-span-1 mx-auto">
        <DashNav admin={false} />
      </div>
      <div className="mxs:px-0 mxs:pt-4 dark:bg-[#202020] dark:text-white col-span-11 pl-32 pt-10 pr-10 content-center min-w-full min-h-screen">
        <div className="flex flex-col">
          <header className="flex items-center justify-center xs:pb-10 mxs:justify-between mxs:px-5">
            <h1 className="mxs:hidden mx-auto font-semibold text-42px">Notifications</h1>
            <Logo className="xs:hidden w-[80px] xs:w-[120px] pt-1" />
            <div className="text-right flex items-end justify-end xs:mt-3 mxs:mb-0.5">
              <DarkModeToggle
                className="h-[22px] xs:h-[30px]"
                darkClassName="h-[22px] xs:h-[30px]"
              />
              <NotificationsLink />
              <div onClick={handleBars} className="xs:hidden relative w-[22px] -mb-1 ml-1">
                <Image src={bars} alt="bars-solid" />
              </div>
            </div>
          </header>
          <MenuMobile menu={menu} onClick={handleBars} />
        </div>

        <h1 className="xs:hidden mx-auto font-semibold text-36px mt-12 text-center">
          Notifications
        </h1>
        <hr className="xs:hidden mb-5 border-t-[1.4px] border-solid border-[#C9C9C9]" />
        <section>
          {notifs?.length ? (
            notifs.map((notif, key) => (
              <Notification key={key} notification={notif} handleRemove={handleRemove} />
            ))
          ) : (
            <Empty />
          )}
        </section>
      </div>
      <div className="xs:hidden">
        <DashNavMobile />
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const user = await withAuth(req => req.$user)(req, res);

  const notifications = await notificationService.getNotificationsForUser(user.uniqueId);

  const props: Props = { notifications };

  return { props };
}
