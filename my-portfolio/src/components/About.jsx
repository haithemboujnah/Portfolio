// src/components/About.jsx
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaUser, FaCode, FaLightbulb, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className={`about-section ${theme}`}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
           <span className="text-gradient">À Propos</span>
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="about-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              style={{ color:"var(--greeting-color)",fontStyle:"italic"}}
            >
              Jeune diplômé en Développement des Systèmes d'Information, je suis passionné par 
              l'informatique et déterminé à m'investir dans des projets innovants.
            </motion.p>
            
            <motion.p
              className="about-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              style={{ color:"var(--greeting-color)",fontStyle:"italic"}}
            >
              Fort d'une formation académique solide et de compétences aiguisées en conception, 
              développement, et maintenance de systèmes d'information.
            </motion.p>

            <motion.div
              className="education-badge"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="graduation-icon-container">
                <FaGraduationCap className="graduation-icon" />
              </div>
              <div>
                <h4>Master en Sciences de l'informatique</h4>
                <p>ENSI (2024-2025)</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="highlights-grid">
          {[
            {
              icon: <FaUser />,
              title: "Profil",
              content: "Développeur full-stack avec une spécialisation frontend"
            },
            {
              icon: <FaCode />,
              title: "Objectif",
              content: "Contribuer à des projets innovants et continuer à apprendre"
            },
            {
              icon: <FaLightbulb />,
              title: "Approche",
              content: "Développement axé utilisateur et solutions créatives"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`highlight-card ${theme}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="highlight-icon-container">
                <div className="highlight-icon">{item.icon}</div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;