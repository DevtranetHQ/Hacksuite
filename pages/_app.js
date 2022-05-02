import { CookiesProvider } from "react-cookie";
import { DarkModeProvider } from "../components/DarkModeContext";
import "../styles/theme.css";

export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </CookiesProvider>
  );
}
