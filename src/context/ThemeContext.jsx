import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeContext = createContext();

// Custom hook to consume the theme context
export const useTheme = () => useContext(ThemeContext);

/**
 * Component to switch between light and dark modes.
 */
export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-yellow-300 shadow-md hover:scale-105 transition-transform duration-300"
            aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
            {theme === 'light' ? (
                <Moon className="w-5 h-5 text-indigo-600" />
            ) : (
                <Sun className="w-5 h-5 text-yellow-300" />
            )}
        </button>
    );
};


/**
 * Provider to manage the application's light/dark theme state.
 */
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    // Load theme from localStorage on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }, []);

    // Apply/Remove 'dark' class and save preference
    useEffect(() => {
        const appRoot = document.getElementById('app-root') || document.body;
        if (theme === 'dark') {
            appRoot.classList.add('dark');
        } else {
            appRoot.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    }, []);

    const value = { theme, toggleTheme };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};