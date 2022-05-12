import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DarkModeToggle from "../../components/DarkModeToggle";
import DashNav from "../../components/dash/DashNav";
import Notification from "../../components/dash/Notification";
import { useNotifications } from "../../hooks/useNotifications";
import { withAuth } from "../../server/middlewares/auth.middleware";
import { INotification } from "../../server/modules/notification/notification.model";
import { notificationService } from '../../server/modules/notification/notifications.service';
import NotificationsLink from "../../components/dash/NotificationsLink";
import { Empty } from "../../components/Empty";

interface Props {
  notifications: INotification[];
}

export default function Notifications({ notifications }: Props) {
  const [notifs, setNotifs] = useState(notifications);
  const { removeNotification } = useNotifications();

  const handleRemove = async (id: string) => {
    setNotifs(notifications.filter(notif => notif._id !== id));
    await removeNotification.execute(id);
  }

  return (
    <div className="grid grid-cols-12 dark:bg-[#202020]">
      <div className="col-span-1 mx-auto">
        <DashNav admin={false} />
      </div>
      <div className="dark:bg-[#202020] dark:text-white col-span-11 pl-32 pt-10 pr-10 content-center min-w-full min-h-screen">
        <header className="flex items-center justify-center pb-10">
          <h1 className="mx-auto font-semibold text-42px">Notifications</h1>
          <div className="text-right flex items-end justify-end  mt-3">
            <DarkModeToggle className="h-[30px]" darkClassName="h-[30px]" />
            <NotificationsLink className="h-[25px]" />
          </div>
        </header>
        <section>
          {notifs?.length ?
            notifs.map((notif, key) => (
              <Notification key={key} notification={notif} handleRemove={handleRemove} />
            )) :
            <Empty />
          }
        </section>
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
