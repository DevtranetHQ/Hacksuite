import { createContext, FC, useCallback, useContext, useEffect, useState } from "react";
import { useNotifications } from "../hooks/useNotifications";
import { useAuth } from "./AuthContext";

const unreadContext = createContext<{
  unread: number;
  refreshUnreadCount: () => void;
}>(null);

export const UnreadNotificationProvider: FC = ({ children }) => {
  const [unread, setUnread] = useState(0);
  const { getNotifications } = useNotifications();
  const { user } = useAuth();

  const refreshUnreadCount = useCallback(async () => {
    if (user) {
      getNotifications.execute(true).then(notifications => {
        setUnread(notifications.length);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    const handler = (event: MessageEvent<string>) => {
      console.log("message from service worker: ", event);
      if (event.data === "refreshUnreadCount") {
        refreshUnreadCount();
      }
    };

    navigator.serviceWorker.addEventListener("message", handler);

    return () => navigator.serviceWorker.removeEventListener("message", handler);
  }, [refreshUnreadCount]);

  useEffect(() => {
    refreshUnreadCount();
  }, [refreshUnreadCount]);

  return (
    <unreadContext.Provider value={{ unread, refreshUnreadCount }}>
      {children}
    </unreadContext.Provider>
  );
};

export const useUnreadNotifications = () => {
  const unread = useContext(unreadContext);
  if (unread === null) {
    throw new Error("useUnreadNotifications must be used within a UnreadNotificationProvider");
  }
  return unread;
};
