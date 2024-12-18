import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import Toggle from './ui/Toggle';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { translations, toggleLanguage, language } = useLanguage();

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1560415755-bd80d06eda60?auto=format&fit=crop&w=128&h=128"
                alt="Nocios Logo"
                className="h-8 w-8 rounded"
              />
              <span className="ml-2 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                Nocios
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {Object.entries(translations.nav).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {value}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Toggle
              checked={language === 'es'}
              onChange={toggleLanguage}
              leftIcon="https://images.unsplash.com/photo-1485282826741-1b5d56f7e268?auto=format&fit=crop&w=32"
              rightIcon="https://images.unsplash.com/photo-1464790719320-516ecd75af6c?auto=format&fit=crop&w=32"
              leftBackground="bg-gradient-to-r from-blue-700 via-white to-red-700"
              rightBackground="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600"
            />
            <Toggle
              checked={theme === 'dark'}
              onChange={toggleTheme}
              leftBackground="bg-gradient-to-r from-blue-300 to-yellow-300"
              rightBackground="bg-gradient-to-r from-gray-700 to-gray-900"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}