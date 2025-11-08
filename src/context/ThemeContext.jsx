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
        if (typeof document !== 'undefined') {
            const rootElement = document.documentElement;
            
            // 1. Update the DOM class for Tailwind
            if (theme === 'dark') {
                rootElement.classList.add('dark');
            } else {
                rootElement.classList.remove('dark');
            }

            // 2. Save the preference
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    }, []);

    const value = { theme, toggleTheme };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};