import { FC, useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import { DarkModeProvider } from "../components/DarkModeContext";
import { AuthProvider, useAuth } from "../components/AuthContext";
import { useNotifications } from "../hooks/useNotifications";
import "../styles/theme.css";
import "../styles/_app.css";

const PushRequester: FC = ({ children }) => {
  const { requestPermission, subscribe } = useNotifications();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      console.log("subscribing to push notifications");
      SW()
        .then(() => requestPermission.execute())
        .then(() => subscribe.execute())
    }
  }, [user]);

  return <>{children}</>;
};

export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <DarkModeProvider>
        <AuthProvider>
          <PushRequester>
            <Component {...pageProps} />
          </PushRequester>
        </AuthProvider>
      </DarkModeProvider>
    </CookiesProvider>
  );
}

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
