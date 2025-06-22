// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from '../hooks/useTranslation';
import logo from '../assets/logo.svg';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language } = useTranslation();

  const labels = {
    fr: ['Accueil', 'À propos', 'Éducation', 'Expérience', 'Projets', 'Compétences', 'Langues', 'Certifications', 'Qualités', 'Contact'],
    en: ['Home', 'About', 'Education', 'Experience', 'Projects', 'Skills', 'Languages', 'Certifications', 'Qualities', 'Contact']
  };

  const navItems = [
    { target: 'home' },
    { target: 'about' },
    { target: 'education' },
    { target: 'experience' },
    { target: 'projects' },
    { target: 'skills' },
    { target: 'languages' },
    { target: 'certifications' },
    { target: 'qualities' },
    { target: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${theme} ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container">

        <div className="desktop-nav">
          <ul className="nav-items">
            <motion.span>
              <img src={logo} width="40px" height="40px" alt="Logo" />
            </motion.span>
            {navItems.map((item, index) => (
              <motion.li key={index} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item.target}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                >
                  {labels[language][index]}
                  <motion.span className="nav-indicator" layoutId="nav-indicator" />
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="nav-actions">
            <LanguageSwitcher />
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </motion.button>
          </div>
        </div>

        <motion.button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="mobile-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link
                      to={item.target}
                      smooth={true}
                      duration={500}
                      className="nav-link"
                      activeClass="active"
                      spy={true}
                    >
                      {labels[language][index]}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-actions">
                <button onClick={toggleTheme} className="theme-toggle">
                  {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
                <div className="social-icons">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
