import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {}
});

export const DarkModeProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies([`dark-mode`]);
  const [darkMode, setDarkMode] = useState();

  const darkModeCookie = cookies[`dark-mode`];

  useEffect(() => {
    if (darkModeCookie) {
      setDarkMode(darkModeCookie === `true`);
    } else {
      setDarkMode(false);
    }
  }, [darkModeCookie]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setCookie(`dark-mode`, !darkMode, { path: `/` });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`${darkMode ? "dark" : ""}`}>{children}</div>
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
