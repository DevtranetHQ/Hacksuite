import { CookiesProvider } from "react-cookie";
import { DarkModeProvider } from "../components/DarkModeContext";
import { AuthProvider } from "../components/AuthContext";
import "../styles/theme.css";
import "../styles/_app.css";
import '../components/Scrapbook/SlantSection.css'
import '../components/Scrapbook/Footer.css'
import '../components/Scrapbook/Cards.css'
import '../components/Scrapbook/CardsLine1.css'
import '../components/Scrapbook/Footer.css'
import '../components/Scrapbook/NavBar.css'
import '../components/Scrapbook/App.css'


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
