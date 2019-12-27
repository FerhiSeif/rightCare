
import { CONSTANTS_LANG } from '../constants/Constants';

const BrowserLanguage = {

  getBrowserLanguage() {
    return navigator.language || navigator.userLanguage;
  },

  getLanguageSet() {
    return localStorage ? localStorage.getItem(CONSTANTS_LANG.LOCAL_STORAGE_LANG_KEY) : null;
  },

  setLanguage(lang) {
    if (localStorage) {
      localStorage.setItem(CONSTANTS_LANG.LOCAL_STORAGE_LANG_KEY, lang);
      return true;
    }
    return false;
  },

  getDefaultLanguage() {
    const langSet = this.getLanguageSet();
    if (langSet) {
      return langSet;
    }
    const browserLang = this.getBrowserLanguage();

    if (browserLang) {
      const lang = '';
      // eslint-disable-next-line no-restricted-syntax
      for (let lang of CONSTANTS_LANG.LANGUAGES) {
        if (lang && browserLang.includes(lang.key)) {
          lang = lang.key;
          break;
        }
      }
      return lang || 'en';
    }
  },
};

export default BrowserLanguage;
