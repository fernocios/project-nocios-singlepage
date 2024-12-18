import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { translations } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {translations.about.title}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            {translations.about.description}
          </p>
        </div>
      </div>
    </section>
  );
}