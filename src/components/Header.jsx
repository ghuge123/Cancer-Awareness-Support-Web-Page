import { Sun, Moon, Ribbon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    console.log(theme);

    return (
        <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-yellow-300 shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
            {theme === 'light' ? (
                <Moon className="w-5 h-5 text-indigo-600 dark:text-yellow-300" />
            ) : (
                <Sun className="w-5 h-5 text-yellow-300 dark:text-indigo-200" />
            )}
        </button>
    );
};

export const Header = () => {
    return(
        <header className="bg-white/95 dark:bg-slate-900/95 sticky top-0 z-50 shadow-xl backdrop-blur-sm transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
            <Ribbon className="w-9 h-9 text-indigo-600 dark:text-pink-400 transform -rotate-12" />
            <h1 className="text-3xl font-extrabold tracking-wider text-slate-900 dark:text-white transition-colors duration-500">
            Hope's Horizon
            </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-7 text-slate-600 dark:text-slate-300 font-medium text-lg">
            <a href="#home" className="hover:text-indigo-600 dark:hover:text-pink-400 transition duration-300 transform hover:scale-105">Home</a>
            <a href="#quote" className="hover:text-indigo-600 dark:hover:text-pink-400 transition duration-300 transform hover:scale-105">Inspiration</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-pink-400 transition duration-300 transform hover:scale-105">Connect</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-pink-400 transition duration-300 transform hover:scale-105">Journey</a>
        </nav>
        <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="md:hidden text-slate-900 dark:text-white focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
        </div>
    </header>
)
  
};