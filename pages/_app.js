import { useState } from "react";
import "../styles/theme.css";

export default function App({ Component, pageProps }) {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`${darkMode ? "dark" : "false"} min-h-screen`}>
            <Component darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} {...pageProps}/>
        </div>
    );
}
