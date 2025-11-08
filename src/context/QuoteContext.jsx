import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';

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

const QuoteContext = createContext();


export const useQuote = () => useContext(QuoteContext);


export const QuoteProvider = ({ children }) => {
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

    useEffect(() => {
        fetchQuote();
    }, [fetchQuote]);

    const value = { quoteData, loading, error, fetchQuote };

    return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
};