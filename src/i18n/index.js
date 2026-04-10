import en from "./en.json"
import cz from "./cz.json"   


const translations = {
    en,
    cz
}

const defaultLanguage = "en";

const keyLocalStorage = "duo-language";

export const getLanguage = () => {
    return localStorage.getItem(keyLocalStorage) || defaultLanguage;
}

export const setLanguage = (lang) => {
    localStorage.setItem(keyLocalStorage,lang)
}

export const getTranslation = (lang,key) => {
    return translations[lang]?.[key] || translations[defaultLanguage]?.[key] || key ;

}