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
    // Wrap the entire application in the Theme and Quote Providers
    <ThemeProvider>
        <QuoteProvider>
            <div id="app-root" className="min-h-screen flex flex-col font-sans antialiased text-gray-900 bg-gray-50 dark:bg-slate-950 transition-colors duration-500">
                <Header />
                <main className="grow">
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