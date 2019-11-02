import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import BrowserLanguage from '../utils/BrowserLanguage';
import en from '../locale/en.json';
import fr from '../locale/fr.json';

const CURRENT_LANG = BrowserLanguage.getDefaultLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      fr: { common: fr },
    },
    fallbackLng: 'en',
    lng: CURRENT_LANG,
    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: ['common'],
    interpolation: {
      escapeValue: false,
    },
    // debug only when not in production
    debug: process.env.NODE_ENV !== 'production',
  });

export default i18n;
