import React from 'react';

export const Footer = () => (
  <footer className="bg-slate-900 dark:bg-slate-950 text-gray-400 py-8 transition-colors duration-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm flex flex-col md:flex-row justify-between items-center">
      <p>&copy; {new Date().getFullYear()} Hope's Horizon. All rights reserved.</p>
      <p className="mt-2 md:mt-0">Crafted with ❤️ and Code for Awareness.</p>
    </div>
  </footer>
);