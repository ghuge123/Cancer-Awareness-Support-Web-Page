import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const getInitialTheme = () => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            return savedTheme || 'light';
        }
        return 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  root.setAttribute("data-theme", theme);


  localStorage.setItem("theme", theme);
}, [theme]);



    const toggleTheme = useCallback(() => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    }, []);

    const value = { theme, toggleTheme };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};