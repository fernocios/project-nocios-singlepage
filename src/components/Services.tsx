import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code, Cloud, Smartphone } from 'lucide-react';

const serviceImages = [
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600',
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600',
  'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600',
];

const icons = [Code, Cloud, Smartphone];

export default function Services() {
  const { translations } = useLanguage();

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {translations.services.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {translations.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0">
                  <img
                    src={serviceImages[index]}
                    alt=""
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  />
                </div>
                <div className="relative p-8">
                  <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}