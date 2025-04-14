import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';

const Header: React.FC = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="p-4 shadow-xl flex justify-between items-center">
      <h1 className="p-2 text-xl font-bold">{t('homePage')}</h1>
      <div className="flex gap-4">
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-900 text-sm font-bold"
        >
          {i18n.language === 'pt' ? 'PT-BR' : 'ENG'}
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
