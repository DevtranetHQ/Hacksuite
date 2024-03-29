import { CookiesProvider } from "react-cookie";
import { DarkModeProvider } from "../components/DarkModeContext";
import { AuthProvider } from "../components/AuthContext";
import { UnreadNotificationProvider } from "../components/UnreadNotificationContext";
import { PushContext } from "../components/PushContext";
import "../styles/theme.css";
import "../styles/_app.css";

export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <DarkModeProvider>
        <AuthProvider>
          <PushContext>
            <UnreadNotificationProvider>
              <Component {...pageProps} />
            </UnreadNotificationProvider>
          </PushContext>
        </AuthProvider>
      </DarkModeProvider>
    </CookiesProvider>
  );
}
