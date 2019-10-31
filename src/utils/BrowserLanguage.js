
import { CONSTANT } from '../constants/browser';

const BrowserLanguage = {
  getBrowserLanguage: function() {
    return navigator.language || navigator.userLanguage;
  },

  getPrevLanguage: function () {
    return localStorage ? localStorage.getItem(CONSTANT.LOCAL_STORAGE_LANG_KEY): null;
  },

  setLanguage: function (lang) {
    if (localStorage) {
      localStorage.setItem(CONSTANT.LOCAL_STORAGE_LANG_KEY, lang);
      return true;
    }
    return false;
  },

  getDefaultLanguage: function () {
    const langSet = this.getPrevLanguage();
    if (langSet) {
      return langSet
    } else {
      const browserLang = this.getBrowserLanguage();
      if (browserLang) {
        let lang = '';
        for (let lang of CONSTANT.LANGUAGES) {
          if (lang && browserLang.includes(lang.key)){
            lang = lang.key;
            break;
          }
        };
        return lang ? lang : 'en';
      }
    }
  }
}
export default BrowserLanguage;
