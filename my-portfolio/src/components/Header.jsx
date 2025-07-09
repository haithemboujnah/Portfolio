// src/components/Header.jsx

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import profileImage from '../assets/images/photo.png';
import { useTranslation } from '../hooks/useTranslation';

const Typewriter = ({ titles, delay = 2000 }) => {
  const { t, language } = useTranslation();
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = titles[currentTitleIndex % titles.length];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        setTypingSpeed(100);
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => prevIndex + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentTitleIndex, isDeleting, titles, delay, typingSpeed]);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="typewriter-text"
      style={{ fontSize: "28px",fontFamily:"cursive",fontStyle:"italic"}}
    >
      
      {language === 'fr' ? "Développeur Full-Stack" : "Full-Stack Developer "} | {currentText}
      <span className="cursor">|</span>
    </motion.h1>
  );
};

const Header = () => {
  const { t, language } = useTranslation();

  const roles = language === 'fr' 
    ? [
        "Développeur Web",
        "Développeur Mobile",
        "Passionné UI/UX",
        "Innovateur Technologique",
        "Résolveur de Problèmes"
      ]
    : [
        "Web Developer",
        "Mobile Developer",
        "UI/UX Enthusiast",
        "Tech Innovator",
        "Problem Solver"
      ];

  return (
    <section id="home" className="header-section">
      <div className="container1">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="header-content"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="greeting"
            style={{ fontSize: "28px",color:"var(--greeting-color)",fontFamily:"cursive",fontStyle:"italic"}}
          >
            
            {language === 'fr' ? "Bonjour, je suis" : "Hello, I'm"}
          </motion.h3>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="name"
            style={{ fontSize: "50px",fontFamily:"cursive",fontStyle:"italic"}}
          >
            Haithem Boujnah
          </motion.h1>
          
      
         <Typewriter titles={roles} speed={2000} />
      
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="description"
            style={{ color:"var(--greeting-color)",fontStyle:"italic"}}
          >
            {language === 'fr' ? "Je conçois des expériences numériques exceptionnelles avec des technologies modernes. Je me concentre sur la création d'interfaces utilisateur intuitives et réactives." : "I build exceptional digital experiences with modern technologies. Focused on creating intuitive and responsive user interfaces."}
          </motion.p>
        
        </motion.div>
        
        
        <motion.div 
          className="profile-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
        >
          <div className="profile-image-wrapper">
            <img 
              src={profileImage} 
              alt="Haithem Boujnah" 
              className="profile-image"
            />
            <div className="profile-decorator profile-decorator-1"></div>
            <div className="profile-decorator profile-decorator-2"></div>
            <div className="profile-tech-circle">
            </div>
          </div>
          <div className="card-glow"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;