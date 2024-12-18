import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { translations } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-gray-100 dark:from-gray-950 dark:via-indigo-950 dark:to-gray-900">
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {translations.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          {translations.hero.subtitle}
        </p>
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
          {translations.hero.cta}
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}