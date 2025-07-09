import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const { language } = useTranslation();
  const currentYear = new Date().getFullYear();

  const content = {
    fr: {
      tagline: "Développeur Full Stack passionné par la création de solutions innovantes.",
      rights: `© ${currentYear} Haithem Boujnah. Tous droits réservés.`,
      connect: "Connectez-vous avec moi"
    },
    en: {
      tagline: "Full Stack Developer passionate about building innovative solutions.",
      rights: `© ${currentYear} Haithem Boujnah. All rights reserved.`,
      connect: "Connect with me"
    }
  };

  const t = content[language];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="footer-content"
        >
          <div className="footer-main">
            <motion.h3 
              className="footer-name"
              whileHover={{ scale: 1.02 }}
            >
              <h1 className="footer-nameh">Haithem Boujnah</h1>
            </motion.h3>
            <p className="footer-tagline">{t.tagline}</p>
            
            <motion.div 
              className="social-links"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="connect-text">{t.connect}</p>
              <div className="social-icons">
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  aria-label="GitHub"
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;