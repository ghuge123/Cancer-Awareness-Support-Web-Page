import React, { useState, useEffect, useCallback } from 'react';
import { Sun, Sparkles } from 'lucide-react';

export const LandingSection = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Parallax effect for the background elements
  const parallaxValue = scrollY * 0.3;

  return (
    <section id="home" className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden 
      bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 dark:from-slate-900 dark:via-indigo-950 dark:to-pink-900 transition-colors duration-500"
    >
      {/* Unique banner: Dynamic gradient background with subtle abstract shapes */}
      <div
        className="absolute inset-0 z-0 opacity-80"
        style={{
          background: 'radial-gradient(circle at top left, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%), ' +
                      'radial-gradient(circle at bottom right, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%), ' +
                      'linear-gradient(135deg, rgba(100,100,200,0.1) 0%, rgba(255,100,100,0.1) 100%)',
        }}
      >
        {/* Subtle animated particles/shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/10 rounded-full animate-bubble opacity-0"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `translateY(${parallaxValue * (Math.random() * 2 - 1)}px)`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 p-8 md:p-16 max-w-5xl rounded-3xl bg-white/15 dark:bg-slate-900/20 backdrop-blur-lg border border-pink-200 shadow-custom-glow transform perspective-1000 md:rotate-x-3 text-white transition-colors duration-500">
        <Sun className="w-16 h-16 mx-auto mb-6 text-yellow-300 animate-pulse-slow" />
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-5 leading-tight tracking-tighter drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
          Illuminating Hope
        </h2>
        <p className="text-xl sm:text-2xl text-pink-100 font-light max-w-3xl mx-auto mb-8 tracking-wide drop-shadow-md">
          Join a community powered by courage, compassion, and the unwavering belief in a brighter tomorrow. Every story strengthens us.
        </p>
        <button className="relative bg-gradient-to-r from-indigo-500 to-pink-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300">
          <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 animate-spin-slow" />
          Discover Your Strength
        </button>
      </div>

      <style jsx>{`
        .shadow-custom-glow {
          box-shadow: 0 0 40px rgba(255, 100, 150, 0.4), 0 0 80px rgba(255, 150, 200, 0.2);
        }
        .animate-bubble {
          animation: floatBubbles 15s infinite ease-in-out;
          opacity: 0;
        }
        @keyframes floatBubbles {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          25% { transform: translateY(-20px) scale(1); opacity: 1; }
          50% { transform: translateY(-40px) scale(0.8); opacity: 0.7; }
          75% { transform: translateY(-60px) scale(1.2); opacity: 0.5; }
          100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s infinite ease-in-out;
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
      `}</style>
    </section>
  );
};