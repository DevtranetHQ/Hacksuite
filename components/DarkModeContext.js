import { createContext } from "react";

const DarkModeContext = createContext({
    darkMode: false,
    setDarkMode: () => {}
});

export default DarkModeContext;
