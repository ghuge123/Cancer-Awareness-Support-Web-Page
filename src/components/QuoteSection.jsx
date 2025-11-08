import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { Quote, Loader2, Frown, Sparkles } from 'lucide-react';

// --- INLINED Quote Context and Logic ---

// Utility: Function to handle exponential backoff for external API calls
const withExponentialBackoff = async (fn, retries = 3) => {
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === retries - 1) throw error;
            const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
            console.warn(`Attempt ${i + 1} failed. Retrying in ${delay.toFixed(0)}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
};

// --- Inlined Quote Context and Hook ---
const QuoteContext = createContext();
const useQuote = () => useContext(QuoteContext);

// NOTE: In a real project, this would be exported from '../context/QuoteContext.jsx'
const QuoteProvider = ({ children }) => {
    const [quoteData, setQuoteData] = useState({ quote: '', author: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchQuote = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const fetchFn = async () => {
                const response = await fetch('https://api.quotable.io/random?maxLength=150');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                return { quote: data.content, author: data.author };
            };
            
            const result = await withExponentialBackoff(fetchFn);
            setQuoteData(result);

        } catch (err) {
            console.error('Error fetching quote:', err);
            setError('Could not retrieve inspirational quote.');
        } finally {
            setLoading(false);
        }
    }, []);

    // Fetch quote on initial load
    useEffect(() => {
        fetchQuote();
    }, [fetchQuote]);

    const value = { quoteData, loading, error, fetchQuote };

    return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
};
// --- END INLINED CONTEXT ---


// NOTE: Since we cannot modify the App.jsx file to wrap this component in the provider,
// we will internally use the QuoteProvider within this component. This is not ideal
// React practice, but necessary for the single-file environment structure.

export const QuoteSection = () => {
    return (
        <QuoteProvider>
            <QuoteContent />
        </QuoteProvider>
    );
};


const QuoteContent = () => {
    // Now safely consumes the inlined context
    const { quoteData, loading, error, fetchQuote } = useQuote();

    return (
        <section id="quote" className="py-20 bg-indigo-50 dark:bg-slate-800 relative overflow-hidden transition-colors duration-500">
            <div className="absolute inset-0 opacity-20 dark:opacity-10">
              <div className="absolute inset-0 bg-repeat bg-[size:100px_100px]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'10\' fill=\'%233b82f6\' opacity=\'0.1\'/%3E%3C/svg%3E")'}}></div>
            </div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-indigo-800 dark:text-teal-400 mb-10 flex items-center justify-center transition-colors duration-500">
                    <Sparkles className="w-8 h-8 mr-3 text-pink-600 dark:text-pink-400 animate-bounce-slow" /> Words That Inspire
                </h3>
                <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl shadow-2xl border-b-8 border-pink-500 transform hover:scale-[1.01] transition-all duration-300 min-h-[200px] flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute -top-5 -left-5 w-20 h-20 bg-pink-300 rounded-full opacity-30 blur-xl animate-float-slow dark:bg-teal-300"></div>
                    <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-indigo-300 rounded-full opacity-30 blur-xl animate-float-slow delay-1s dark:bg-indigo-600"></div>
                    {loading && (
                    <div className="flex justify-center items-center text-indigo-600 dark:text-teal-400">
                        <Loader2 className="w-8 h-8 animate-spin mr-4" />
                        Seeking wisdom...
                    </div>
                    )}
                    {error && (
                    <div className="text-red-600 flex flex-col items-center">
                        <Frown className="w-10 h-10 mb-3" />
                        <p className="text-lg dark:text-red-400">Oh dear, the universe is a bit quiet right now. Try again!</p>
                    </div>
                    )}
                    {quoteData.quote && (
                    <>
                        <p className="italic text-xl md:text-3xl text-gray-800 dark:text-gray-200 mb-6 leading-relaxed font-serif transition-colors duration-500">
                        &ldquo;{quoteData.quote}&rdquo;
                        </p>
                        <p className="font-semibold text-pink-700 dark:text-pink-400 text-right text-xl transition-colors duration-500">- {quoteData.author || 'A Glimmer of Hope'}</p>
                    </>
                    )}
                </div>
                <button
                    onClick={fetchQuote}
                    disabled={loading}
                    className="mt-10 inline-flex items-center bg-gradient-to-r from-pink-600 to-red-500 text-white font-semibold py-3 px-8 rounded-full hover:from-pink-700 hover:to-red-600 transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 disabled:opacity-50"
                >
                    {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin mr-3" />
                        Manifesting...
                    </>
                    ) : (
                    <>
                        <Quote className="w-5 h-5 mr-3" />
                        New Perspective
                    </>
                    )}
                </button>
            </div>
            <style jsx>{`
            .animate-bounce-slow {
                animation: bounceSlow 3s infinite ease-in-out;
            }
            @keyframes bounceSlow {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            .animate-float-slow {
                animation: floatSlow 6s infinite ease-in-out;
            }
            @keyframes floatSlow {
                0%, 100% { transform: translateY(0) translateX(0); }
                33% { transform: translateY(-10px) translateX(10px); }
                66% { transform: translateY(10px) translateX(-10px); }
            }
            `}</style>
        </section>
    );
};