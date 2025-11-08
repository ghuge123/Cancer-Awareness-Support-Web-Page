import React from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { QuoteProvider } from './context/QuoteContext.jsx';

import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { LandingSection } from './components/LandingSection.jsx';
import { QuoteSection } from './components/QuoteSection.jsx';
import { ContactForm } from './components/ContactForm.jsx';

// This App component is only responsible for structure and context management.
export default function App() {
    return (
        <ThemeProvider>
            <QuoteProvider>
                <div
                    id="app-root"
                    className="min-h-screen flex flex-col font-sans antialiased
                               text-gray-900 bg-gray-50 dark:bg-slate-950
                               transition-colors duration-500"
                >
                    {/* Custom CSS for animations used in components */}
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

                        /* 3D Rotation for Banner/Form on Desktop only */
                        @media (min-width: 768px) {
                            .md\\:rotate-x-3 {
                                transform: perspective(1000px) rotateX(3deg);
                                transform-origin: top center;
                            }
                            .md\\:rotate-y-3 {
                                transform: perspective(1000px) rotateY(3deg);
                                transform-origin: center center;
                            }
                            .md\\:hover\\:rotate-y-0:hover {
                                transform: perspective(1000px) rotateY(0deg) scale(1.02);
                            }
                        }
                        
                        .shadow-custom-glow-dark {
                            box-shadow: 0 0 40px rgba(255, 105, 180, 0.4), 0 0 15px rgba(255, 105, 180, 0.2);
                        }
                    `}</style>

                    <Header />
                    <main className="flex-grow">
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