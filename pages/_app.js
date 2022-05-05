import { CookiesProvider } from "react-cookie";
import { DarkModeProvider } from "../components/DarkModeContext";
import { AuthProvider } from "../components/AuthContext";
import "../styles/theme.css";
import "../styles/_app.css";


export default function App({ Component, pageProps }) {
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


