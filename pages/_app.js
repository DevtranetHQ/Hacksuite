import { useState } from "react";
import DarkModeContext from "../components/DarkModeContext";
import "../styles/theme.css";

export default function App({ Component, pageProps }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(!darkMode);
    const value = { darkMode, toggleDarkMode };

    return (
        <div className={`${darkMode ? "dark" : ""}`}>
            <DarkModeContext.Provider value={value}>
                <Component {...pageProps} />
            </DarkModeContext.Provider>
        </div>
    );
}
