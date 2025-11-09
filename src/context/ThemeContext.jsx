import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    // Determine the initial theme state from localStorage, defaulting to 'light'
    const getInitialTheme = () => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            return savedTheme || 'light';
        }
        return 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    // Apply 'dark' class to document element and update localStorage whenever theme changes
    useEffect(() => {
  const root = document.documentElement;

  // Tailwind mode
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  // Browser color mode
  root.setAttribute("data-theme", theme);

  // Save choice
  localStorage.setItem("theme", theme);
}, [theme]);



    const toggleTheme = useCallback(() => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    }, []);

    const value = { theme, toggleTheme };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};