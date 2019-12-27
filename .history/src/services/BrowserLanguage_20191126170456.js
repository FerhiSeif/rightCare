
import { CONSTANTS } from '../constants/Constants';

const BrowserLanguage = {

    getBrowserLanguage: function() {
        return navigator.language || navigator.userLanguage; 
    },

    getLanguageSet: function () {
        return localStorage ? localStorage.getItem(CONSTANTS.LOCAL_STORAGE_LANG_KEY): null;
    },

    setLanguage: function (lang) {
        if (localStorage) {
            localStorage.setItem(CONSTANTS.LOCAL_STORAGE_LANG_KEY, lang);
            return true;
        }
        return false;
    },
    getDefaultLanguage: function () {
        const langSet = this.getLanguageSet();
        if (langSet) {
            return langSet
        } else {
            const browserLang = this.getBrowserLanguage();
    
            if (browserLang) {
                let lang = '';
                for (let lang of CONSTANTS.LANGUAGES) {
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