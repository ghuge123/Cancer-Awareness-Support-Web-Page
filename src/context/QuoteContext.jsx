import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { withExponentialBackoff } from '../utils/api';

const QuoteContext = createContext();

export const useQuote = () => useContext(QuoteContext);

export const QuoteProvider = ({ children }) => {
    const [quoteData, setQuoteData] = useState({ content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchQuote = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const fetchFn = async () => {
                console.log('hello')
                const response = await fetch('https://raw.githubusercontent.com/ghuge123/cancer-quotes/refs/heads/main/cancer-quotes.json');
                if (!response.ok) {
                    throw new Error("Failed to load quotes");
                }

                const quotes = await response.json();
                const random = quotes[Math.floor(Math.random() * quotes.length)];

                return { content: random.content, author: random.author };
            };
            
            const result = await withExponentialBackoff(fetchFn);
            setQuoteData(result);

        } catch (err) {
            console.error('Error fetching quote:', err);
            setError('Could not retrieve inspirational quote.');
            setQuoteData({ content: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu (Fallback)" });
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchQuote();
    }, [fetchQuote]);

    const value = { quoteData, loading, error, fetchQuote };

    return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
};
