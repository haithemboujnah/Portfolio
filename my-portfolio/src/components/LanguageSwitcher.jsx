// src/components/LanguageSwitcher.jsx
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="language-switcher"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle language"
    >
      <FaGlobe className="globe-icon" />
      <span className="language-code">
        {language.toUpperCase()}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher;