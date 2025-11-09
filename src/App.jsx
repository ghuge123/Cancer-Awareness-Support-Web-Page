import React from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { QuoteProvider } from './context/QuoteContext.jsx';

import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { LandingSection } from './components/LandingSection.jsx';
import { QuoteSection } from './components/QuoteSection.jsx';
import { ContactForm } from './components/ContactForm.jsx';

export default function App() {
    return (
        <ThemeProvider>
            <QuoteProvider>
                <div
                    id="app-root"
                    className="
                        min-h-screen 
                        flex flex-col 
                        font-sans antialiased
                        text-gray-900 bg-white
                        dark:text-gray-100 dark:bg-slate-950
                        transition-colors duration-500
                    "
                >
      
                    <style>{`
                        @keyframes spin-slow {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(360deg); }
                        }
                        .animate-spin-slow {
                            animation: spin-slow 15s linear infinite;
                        }

                        @keyframes bounce-slow {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-5px); }
                        }
                        .animate-bounce-slow {
                            animation: bounce-slow 4s infinite;
                        }

                        @keyframes float-slow {
                            0% { transform: translate(0, 0); }
                            33% { transform: translate(10px, 15px); }
                            66% { transform: translate(-10px, -5px); }
                            100% { transform: translate(0, 0); }
                        }
                        .animate-float-slow {
                            animation: float-slow 20s infinite ease-in-out;
                        }
                    `}</style>

                    <Header />

                    <main className="
                        flex-grow 
                        bg-white 
                        dark:bg-slate-950
                        transition-colors duration-500
                    ">
                        <LandingSection />
                        <QuoteSection />
                        <ContactForm />
                    </main>

                    <Footer />
                </div>
            </QuoteProvider>
        </ThemeProvider>
    );
}
