// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  const currentYear = new Date().getFullYear();

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
            <h3>Haithem Boujnah</h3>
            <p>Développeur Full Stack passionné par la création de solutions innovantes.</p>
          </div>

          <div className="footer-section">
            <h4>Liens rapides</h4>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><FaEnvelope /> haithemboujnah1@gmail.com</li>
              <li><FaPhone /> +216 24840945</li>
              <li><FaMapMarkerAlt /> Sidi Hassine, Tunis</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Réseaux sociaux</h4>
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
              {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            </button>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Haithem Boujnah. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;