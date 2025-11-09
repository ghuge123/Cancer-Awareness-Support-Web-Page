import React from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Footer = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <footer className={`py-8 transition-colors duration-500 ${isDark ? 'bg-slate-900 border-t border-slate-700 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Hope's Horizon. Crafted with <Heart className="inline h-3 w-3 text-pink-500 animate-pulse" /> and Code for Awareness.</p>
                <div className="mt-2 space-x-4">
                    <a href="#" className="hover:text-pink-500 transition-colors duration-300">Privacy Policy</a>
                    <span className="opacity-50">|</span>
                    <a href="#" className="hover:text-pink-500 transition-colors duration-300">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};