import { useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import { DarkModeProvider } from "../components/DarkModeContext";
import { AuthProvider } from "../components/AuthContext";
import { useNotifications } from "../hooks/useNotifications";
import "../styles/theme.css";
import "../styles/_app.css";
import "../components/Scrapbook/SlantSection.css";
import "../components/Scrapbook/Footer.css";
import "../components/Scrapbook/Cards.css";
import "../components/Scrapbook/CardsLine1.css";
import "../components/Scrapbook/Footer.css";
import "../components/Scrapbook/NavBar.css";
import "../components/Scrapbook/App.css";

export default function App({ Component, pageProps }) {
  const { requestPermission, subscribe } = useNotifications();

  useEffect(() => {
    SW().then(registration => console.log({ registration }));
    requestPermission
      .execute()
      .then(() => subscribe.execute())
      .then(res => console.log({ res }))
      .catch(err => console.err({ err }));
  }, []);

  return (
    <CookiesProvider>
      <DarkModeProvider>
        <AuthProvider>
          <Component {...pageProps} />
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
        console.err("Service Worker registration failed: ", err);
      }
    });
  }
}
