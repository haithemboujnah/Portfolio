// src/hooks/useTranslation.js
import { useLanguage } from '../context/LanguageContext';
import fr from '../translations/fr';
import en from '../translations/en';

const translations = {
  fr,
  en
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key) => {
    return translations[language][key] || key;
  };

  return { t, language };
};