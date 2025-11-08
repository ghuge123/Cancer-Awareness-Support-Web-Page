import React, { useState } from 'react';
import { Mail, MessageSquare, Users, Sparkles } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted (Simulated):', formData);
    setStatus('Message sent! A wave of gratitude comes your way (simulated).');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 7000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-repeat bg-[size:150px_150px]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'150\' height=\'150\' viewBox=\'0 0 150 150\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M75 0L0 75L75 150L150 75L75 0Z\' fill=\'%233b82f6\' opacity=\'0.1\'/%3E%3C/svg%3E")'}}></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 mb-6 text-center">
          Reach Out, Share Light
        </h3>
        <p className="text-center text-slate-600 dark:text-gray-300 mb-12 max-w-xl mx-auto text-lg transition-colors duration-500">
          Whether for support, collaboration, or sharing a word of encouragement, we're here to listen and connect.
        </p>

        <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-slate-800 p-8 sm:p-10 rounded-3xl shadow-3xl border border-indigo-300 dark:border-indigo-700 md:transform md:rotate-y-3 transition-colors duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-indigo-600 dark:text-pink-400 mb-3 flex items-center transition-colors duration-500">
                <Users className="w-5 h-5 mr-3 text-indigo-500 dark:text-pink-400" /> Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white dark:bg-slate-700 border border-indigo-400 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:ring-pink-500 focus:border-pink-500 transition duration-200 shadow-inner"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-indigo-600 dark:text-pink-400 mb-3 flex items-center transition-colors duration-500">
                <Mail className="w-5 h-5 mr-3 text-indigo-500 dark:text-pink-400" /> Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white dark:bg-slate-700 border border-indigo-400 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:ring-pink-500 focus:border-pink-500 transition duration-200 shadow-inner"
              />
            </div>
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-indigo-600 dark:text-pink-400 mb-3 flex items-center transition-colors duration-500">
              <MessageSquare className="w-5 h-5 mr-3 text-indigo-500 dark:text-pink-400" /> Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 bg-white dark:bg-slate-700 border border-indigo-400 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:ring-pink-500 focus:border-pink-500 transition duration-200 shadow-inner"
            ></textarea>
          </div>
          {status && (
            <p className={`mb-6 text-center text-lg font-medium ${status.includes('sent') ? 'text-teal-500' : 'text-red-500'}`}>
              {status}
            </p>
          )}
          <div className="text-center">
            <button
              type="submit"
              className="relative bg-gradient-to-r from-indigo-600 to-pink-700 text-white font-bold py-4 px-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-indigo-400"
            >
              <Sparkles className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 animate-pulse" />
              Send Your Light
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .shadow-3xl {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
        }
        .rotate-y-3 {
            transform: rotateY(3deg);
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};