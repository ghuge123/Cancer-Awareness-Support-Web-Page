import React, { useState, useEffect, useCallback } from 'react';
import { Sun, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const LandingSection = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const Bubble = ({ style }) => (
        <div className="absolute rounded-full opacity-30 animate-float-slow" style={style} />
    );

    return (
        <section
  id="home"
  className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center text-center overflow-hidden"
>

           
            <div className={`absolute inset-0 transition-all duration-1000 ${
                isDark
                    ? 'bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900'
                    : 'bg-gradient-to-br from-purple-800 via-pink-700 to-red-600'
            }`} />

            
            <div className="absolute inset-0 opacity-70">
                <Bubble style={{ width: '100px', height: '100px', top: '10%', left: '15%', backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.5)', animationDuration: '15s' }} />
                <Bubble style={{ width: '150px', height: '150px', bottom: '20%', right: '10%', backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.4)', animationDuration: '20s', animationDelay: '5s' }} />
                <Bubble style={{ width: '80px', height: '80px', top: '50%', right: '5%', backgroundColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.3)', animationDuration: '10s' }} />
                <Bubble style={{ width: '120px', height: '120px', bottom: '5%', left: '30%', backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.6)', animationDuration: '18s', animationDelay: '3s' }} />
            </div>

            
            <div
    className={`z-10 text-center max-w-lg mx-4 p-8 md:p-12 rounded-3xl 
               backdrop-blur-md
               border transition-all duration-700 transform md:rotate-x-3
               ${
                   isDark
                       ? 'border-pink-500/50 bg-slate-800/50 shadow-xl shadow-pink-500/20'
                       : 'border-white/50 bg-white/40 shadow-xl shadow-pink-500/20'
               }`}
>
                <Sun className="h-10 w-10 mx-auto text-yellow-300 mb-4 animate-spin-slow" />
                <h2
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 transition-all duration-500"
                    style={{
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundImage: isDark
                            ? 'linear-gradient(to right, #fde047, #f472b6, #fb7185)'
                            : 'linear-gradient(to right, #fde047, #f472b6, #fb7185)', // Gold/Pink gradient for contrast
                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.4))'
                    }}
                >
                    ILLUMINATING HOPE
                </h2>
                <p className={`text-sm md:text-base mb-8 font-medium transition-colors duration-500 ${isDark ? 'text-gray-200' : 'text-white'}`}>
                    Join a community powered by courage, compassion, and the unwavering belief in a brighter tomorrow. Every story strengthens us.
                </p>
                <a
                    href="#contact"
                    className={`px-8 py-3 text-sm font-semibold rounded-full uppercase tracking-wider inline-block
                                transition-all duration-500 transform hover:scale-105 shadow-xl
                                bg-gradient-to-r from-pink-500 to-red-600 text-white hover:from-pink-600 hover:to-red-700`}
                >
                    <Sparkles className="inline-block h-4 w-4 mr-2 animate-spin-slow" />
                    Discover Your Strength
                </a>
            </div>
        </section>
    );
};