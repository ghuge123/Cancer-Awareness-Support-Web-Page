import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Send} from 'lucide-react';

export const ContactForm = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setStatus('success');
        setTimeout(() => setStatus(''), 5000);
        e.target.reset();
    };

    const inputClasses = `w-full p-3 rounded-xl focus:ring-2 transition-all duration-300
                          ${isDark
                              ? 'bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:ring-pink-500'
                              : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-purple-500'
                          }`;

    return (
        <section 
    id="contact" 
    className={`py-16 relative z-10 overflow-visible transition-colors duration-500 
                ${isDark ? 'bg-slate-900' : 'bg-white'}`}
>
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`p-8 md:p-10 rounded-3xl shadow-2xl transition-all duration-700
                                transform md:rotate-y-3 md:hover:rotate-y-0
                                ${isDark ? 'bg-slate-800 shadow-pink-500/20' : 'bg-white shadow-purple-500/20'}`}
                >
                    <h3
                        className="text-3xl font-extrabold text-center mb-6 transition-colors duration-500"
                        style={{
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundImage: isDark
                                ? 'linear-gradient(to right, #f472b6, #fb7185, #fde047)'
                                : 'linear-gradient(to right, #6d28d9, #ec4899, #f97316)',
                        }}
                    >
                        REACH OUT, SHARE LIGHT
                    </h3>
                    <p className={`text-center mb-8 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Your message matters. Share your thoughts, resources, or just say hello.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" placeholder="Your Name" required className={inputClasses} />
                        <input type="email" placeholder="Your Email" required className={inputClasses} />
                        <textarea placeholder="Your Message" rows="4" required className={inputClasses}></textarea>

                        <button
                            type="submit"
                            className={`w-full px-6 py-3 text-lg font-semibold rounded-xl mt-6
                                       transition-all duration-500 transform hover:scale-[1.02] shadow-xl
                                       bg-gradient-to-r from-pink-500 to-red-600 text-white hover:from-pink-600 hover:to-red-700`}
                        >
                            <Send className="inline-block h-5 w-5 mr-2" />
                            Send Your Light
                        </button>
                    </form>

                    {status === 'success' && (
                        <div className="mt-6 p-4 text-center text-sm font-medium rounded-xl bg-green-500/20 text-green-700 dark:text-green-300">
                            Thank you! Your message has been sent successfully.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};