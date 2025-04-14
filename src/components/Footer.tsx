import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {

    const { t } = useTranslation();
    
    return (
        <footer className="w-full py-4 px-6 mt-10 border-t dark:border-gray-700 flex flex-col items-center text-sm text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} {t('madeby')} Guilherme Gomes Luccas Rodrigues</p>
        <div className="flex gap-4">
            <a href="mailto:guilhermegomes.luccas@gmail.com?subject=Contato&body=Olá Guilherme," className="hover:underline text-blue-500 dark:text-blue-400">
                Email
            </a>
            <a href="https://www.linkedin.com/in/guilherme-gomes-luccas/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500 dark:text-blue-400">
                LinkedIn
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500 dark:text-blue-400">
                Currículo ({t('soon')})
            </a>
        </div>
        </footer>
    );
};

export default Footer;
