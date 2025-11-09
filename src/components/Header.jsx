import { Sun, Moon, Ribbon, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
    onClick={toggleTheme}
    className={`
        p-3 rounded-full shadow-md transition-all duration-300 
        focus:outline-none focus:ring-2 focus:ring-pink-500
        ${isDark 
            ? 'bg-slate-800 text-yellow-300 hover:bg-slate-700' 
            : 'bg-white text-indigo-600 hover:bg-slate-100'
        }
    `}
    aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
>
    {isDark ? (
        <Sun className="w-5 h-5 text-yellow-300" />
    ) : (
        <Moon className="w-5 h-5 text-indigo-600" />
    )}
</button>

    );
};

export const Header = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            className={`
                sticky top-0 z-50 w-full 
                shadow-md transition-colors duration-500
                ${isDark ? 'bg-slate-900/80' : 'bg-white/90'}
            `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Ribbon
                        className={`h-6 w-6 transition-all duration-500 ${
                            isDark ? 'text-pink-400' : 'text-teal-600'
                        } transform -rotate-12`}
                    />
                    <h1
                        className={`text-xl font-bold tracking-tight transition-colors duration-500 ${
                            isDark ? 'text-white' : 'text-gray-900'
                        }`}
                    >
                        Hope's Horizon
                    </h1>
                </div>

                {/* Desktop Nav */}
                <div className="flex items-center space-x-6">
                    <nav className="hidden md:flex space-x-6">
                        <a
                            href="#home"
                            className={`text-sm font-medium transition-colors duration-300 hover:text-pink-500 ${
                                isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            Home
                        </a>
                        <a
                            href="#inspiration"
                            className={`text-sm font-medium transition-colors duration-300 hover:text-pink-500 ${
                                isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            Inspiration
                        </a>
                        <a
                            href="#contact"
                            className={`text-sm font-medium transition-colors duration-300 hover:text-pink-500 ${
                                isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            Contact
                        </a>
                        <a
                            href="#"
                            className={`text-sm font-medium transition-colors duration-300 hover:text-pink-500 ${
                                isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                            Journey
                        </a>
                    </nav>

                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-150"
                        aria-label="Toggle navigation menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden pb-4 px-4 bg-white dark:bg-slate-900 border-t border-indigo-100 dark:border-slate-800">
                    <nav className="flex flex-col space-y-1 pt-2 text-lg text-slate-700 dark:text-slate-300 font-medium">
                        <a href="#home" onClick={() => setIsMenuOpen(false)} className="py-2 px-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-pink-600">Home</a>
                        <a href="#inspiration" onClick={() => setIsMenuOpen(false)} className="py-2 px-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-pink-600">Inspiration</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="py-2 px-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-pink-600">Contact</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)} className="py-2 px-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-pink-600">Resources</a>
                    </nav>
                </div>
            )}
        </header>
    );
};
