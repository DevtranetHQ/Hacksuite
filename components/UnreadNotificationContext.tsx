import { createContext, FC, useContext, useEffect, useState } from "react";
import { useNotifications } from "../hooks/useNotifications";
import { useAuth } from "./AuthContext";

const unreadContext = createContext<number>(null);

export const UnreadNotificationProvider: FC = ({ children }) => {
  const [unread, setUnread] = useState(0);
  const { getNotifications } = useNotifications();
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      const handler = (event: MessageEvent<string>) => {
        console.log("message from service worker: ", event);
        if (event.data === "refreshUnreadCount") {
          getNotifications.execute(true).then(notifications => {
            setUnread(notifications.length);
          });
        }
      };

      navigator.serviceWorker.addEventListener("message", handler);

      return () => navigator.serviceWorker.removeEventListener("message", handler);
    }
  }, [user, getNotifications]);

  useEffect(() => {
    if (user) {
      getNotifications.execute(true).then(notifications => {
        setUnread(notifications.length);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <unreadContext.Provider value={unread}>
      {children}
    </unreadContext.Provider>
  );
}

export const useUnreadNotifications = () => {
  const unread = useContext(unreadContext);
  if (unread === null) {
    throw new Error("useUnreadNotifications must be used within a UnreadNotificationProvider");
  }
  return unread;
}