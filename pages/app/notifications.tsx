import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import DashNav from "../../components/dash/DashNav";
import DashHeader from "../../components/dash/DashHeader";
import { DashNavMobile } from "../../components/dash/DashNavMobile";
import Notification from "../../components/dash/Notification";
import { useNotifications } from "../../hooks/useNotifications";
import { withAuth } from "../../server/middlewares/auth.middleware";
import { INotification } from "../../server/modules/notification/notification.model";
import { notificationService } from "../../server/modules/notification/notifications.service";
import NotificationsLink from "../../components/dash/NotificationsLink";
import NotifEmpty from "../../components/NotifEmpty";

interface Props {
  notifications: INotification[];
}

export default function Notifications({ notifications }: Props) {
  const [notifs, setNotifs] = useState(notifications);
  const { markAsRead, removeNotification } = useNotifications();

  const handleRemove = async (id: string) => {
    setNotifs(n => n.filter(notif => notif._id !== id));
    await removeNotification.execute(id);
  };

  useEffect(() => {
    markAsRead.execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="xs:grid xs:grid-cols-12 dark:bg-[#202020]">
      <div className="mxs:hidden col-span-1 mx-auto">
        <DashNav admin={false} />
      </div>
      <div className="mxs:px-0 mxs:pt-4 dark:bg-[#202020] dark:text-white col-span-11 pl-32 pt-10 pr-10 content-center min-w-full min-h-screen">
        <DashHeader />

        <h1 className="xs:hidden mx-auto font-semibold text-36px mt-12 text-center">
          Notifications
        </h1>
        <hr className=" mb-5 border-t-[1.4px] border-solid border-[#C9C9C9]" />
        <section>
          {notifs?.length ? (
            notifs.map((notif, key) => (
              <Notification key={key} notification={notif} handleRemove={handleRemove} />
            ))
          ) : (
            <NotifEmpty />
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
