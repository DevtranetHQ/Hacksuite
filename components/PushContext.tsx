import { FC, useEffect } from "react";
import { useNotifications } from "../hooks/useNotifications";
import { useAuth } from "./AuthContext";

export const PushContext: FC = ({ children }) => {
  const { requestPermission, subscribe } = useNotifications();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      console.log("subscribing to push notifications");
      SW()
        .then(() => requestPermission.execute())
        .then(() => subscribe.execute());
    }
  }, [user]);

  return <>{children}</>;
};

async function SW() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async function () {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js");
        return registration;
      } catch (err) {
        console.error("Service Worker registration failed: ", err);
      }
    });
  }
}
