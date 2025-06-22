// src/components/Languages.jsx
import { motion } from 'framer-motion';
import { FaLanguage } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

const Languages = () => {
  const { language } = useTranslation();

  const languages = [
    {
      name: language === 'fr' ? 'Arabe' : 'Arabic',
      level: language === 'fr' ? 'Courant' : 'Fluent',
      proficiency: 100
    },
    {
      name: language === 'fr' ? 'Français' : 'French',
      level: language === 'fr' ? 'Professionnel' : 'Professional',
      proficiency: 80
    },
    {
      name: language === 'fr' ? 'Anglais' : 'English',
      level: language === 'fr' ? 'Intermédiaire' : 'Intermediate',
      proficiency: 70
    }
  ];

  return (
    <section id="languages" className="languages-section">
      <div className="container">
        <motion.h2
          className="tous-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FaLanguage className="section-icon" />
          <span className="text-gradient">
            {language === 'fr' ? 'Langues' : 'Languages'}
          </span>
        </motion.h2>

        <div className="languages-grid">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="language-card"
            >
              <div className="language-info">
                <h3>{lang.name}</h3>
                <span className="level">{lang.level}</span>
              </div>

              <div className="proficiency-bar">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${lang.proficiency}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="proficiency-level"
                  style={{
                    background: `linear-gradient(to right, #3a86ff, #8338ec)`,
                    width: `${lang.proficiency}%`
                  }}
                />
              </div>
              <span className="proficiency-percent">{lang.proficiency}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
