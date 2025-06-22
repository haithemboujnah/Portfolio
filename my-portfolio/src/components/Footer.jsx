// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useTranslation();
  const currentYear = new Date().getFullYear();

  const content = {
    fr: {
      name: "Haithem Boujnah",
      description: "Développeur Full Stack passionné par la création de solutions innovantes.",
      quickLinks: "Liens rapides",
      contact: "Contact",
      social: "Réseaux sociaux",
      links: ["Accueil", "À propos", "Projets", "Contact"],
      email: "haithemboujnah1@gmail.com",
      phone: "+216 24840945",
      location: "Sidi Hassine, Tunis",
      themeToggle: theme === 'dark' ? "Mode clair" : "Mode sombre",
      rights: `Tous droits réservés.`
    },
    en: {
      name: "Haithem Boujnah",
      description: "Full Stack Developer passionate about building innovative solutions.",
      quickLinks: "Quick Links",
      contact: "Contact",
      social: "Social Media",
      links: ["Home", "About", "Projects", "Contact"],
      email: "haithemboujnah1@gmail.com",
      phone: "+216 24840945",
      location: "Sidi Hassine, Tunis",
      themeToggle: theme === 'dark' ? "Light Mode" : "Dark Mode",
      rights: `All rights reserved.`
    }
  };

  const t = content[language];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="footer-content"
        >
          <div className="footer-section">
            <h3>{t.name}</h3>
            <p>{t.description}</p>
          </div>

          <div className="footer-section">
            <h4>{t.quickLinks}</h4>
            <ul>
              <li><a href="#home">{t.links[0]}</a></li>
              <li><a href="#about">{t.links[1]}</a></li>
              <li><a href="#projects">{t.links[2]}</a></li>
              <li><a href="#contact">{t.links[3]}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t.contact}</h4>
            <ul>
              <li><FaEnvelope /> {t.email}</li>
              <li><FaPhone /> {t.phone}</li>
              <li><FaMapMarkerAlt /> {t.location}</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t.social}</h4>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
            <button onClick={toggleTheme} className="theme-toggle">
              {t.themeToggle}
            </button>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Haithem Boujnah. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
