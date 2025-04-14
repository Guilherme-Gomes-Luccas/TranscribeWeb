import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationPT from './locales/pt.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      pt: {
        translation: translationPT,
      },
    },
    lng: 'pt', // força o idioma inicial como pt-BR
    fallbackLng: 'pt', // se algo der errado, cai no pt também
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
