import { Quote, Loader2, Frown, Sparkles, Heart } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { useTheme } from '../context/ThemeContext';

export const QuoteSection = () => {
    const { quoteData, loading, fetchQuote } = useQuote();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section id="inspiration" className={`py-16 transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className={`text-center text-3xl font-bold mb-12 transition-colors duration-500 ${isDark ? 'text-pink-300' : 'text-purple-700'}`}>
                    <Quote className="inline-block h-7 w-7 mr-2 animate-bounce-slow" /> Words That Inspire
                </h3>

                {/* Quote Card */}
                <div className={`relative p-8 md:p-12 rounded-3xl shadow-2xl transition-all duration-700 hover:scale-[1.01] ${
                    isDark
                        ? 'bg-slate-800 border-b-8 border-pink-600 text-gray-200'
                        : 'bg-white border-b-8 border-pink-400 text-gray-900'
                }`}>
                    {/* Corner Icons */}
                    <Heart className={`absolute top-4 right-4 h-6 w-6 opacity-30 ${isDark ? 'text-pink-500' : 'text-purple-500'}`} />
                    <Quote className={`absolute bottom-4 left-4 h-6 w-6 opacity-30 ${isDark ? 'text-purple-500' : 'text-pink-500'}`} />

                    {loading ? (
                        <p className="text-center italic text-lg animate-pulse">Loading inspiration...</p>
                    ) : (
                        <>
                            <p className="text-xl md:text-2xl font-serif italic mb-6">
                                "{quoteData.content}"
                            </p>
                            <p className={`text-right text-sm font-medium ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>
                                — {quoteData.author}
                            </p>
                        </>
                    )}
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={fetchQuote}
                        disabled={loading}
                        className={`px-6 py-2 text-sm font-medium rounded-full
                                   transition-all duration-300 transform hover:scale-105 disabled:opacity-50
                                   ${isDark ? 'bg-pink-600 text-white hover:bg-pink-500' : 'bg-purple-600 text-white hover:bg-purple-700'}`}
                    >
                        {loading ? 'Fetching...' : (
                            <>
                                <Sparkles className="inline-block h-4 w-4 mr-2" />
                                New Quote
                            </>
                        )}
                    </button>
                    {loading === false && quoteData.author.includes("(Fallback)") && <p className="mt-4 text-sm text-red-500">Could not fetch live quote; displaying default.</p>}
                </div>
            </div>
        </section>
    );
};