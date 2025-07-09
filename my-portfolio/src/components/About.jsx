// src/components/About.jsx
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from '../hooks/useTranslation';
import { FaUser, FaCode, FaLightbulb, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const { theme } = useTheme();
  const { language } = useTranslation();

  const sectionTitle = language === 'fr' ? 'À Propos' : 'About';
  const description1 = language === 'fr'
    ? "Jeune diplômé en Développement des Systèmes d'Information, je suis passionné par l'informatique et déterminé à m'investir dans des projets innovants."
    : "Young graduate in Information Systems Development, passionate about computing and eager to contribute to innovative projects.";

  const description2 = language === 'fr'
    ? "Fort d'une formation académique solide et de compétences aiguisées en conception, développement, et maintenance de systèmes d'information."
    : "Backed by a solid academic background and sharp skills in designing, developing, and maintaining information systems.";

  const degreeTitle = language === 'fr'
    ? "Master en Sciences de l'informatique"
    : "Master’s Degree in Computer Science";

  const degreeSchool = "ENSI (2024–2025)";

  const highlights = language === 'fr'
    ? [
        {
          icon: <FaUser />,
          title: "Profil",
          content: "Développeur full-stack avec une spécialisation backend"
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
      ]
    : [
        {
          icon: <FaUser />,
          title: "Profile",
          content: "Full-stack developer with backend specialization"
        },
        {
          icon: <FaCode />,
          title: "Goal",
          content: "Contribute to innovative projects and keep learning"
        },
        {
          icon: <FaLightbulb />,
          title: "Approach",
          content: "User-focused development and creative solutions"
        }
      ];

  return (
    <section id="about" className={`about-section ${theme}`}>
      <div className="container">
        <motion.h2
          className="tous-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">
            {sectionTitle}</span>
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
              style={{ color:"var(--greeting-color)", fontStyle:"italic" }}
            >
              {description1}
            </motion.p>

            <motion.p
              className="about-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              style={{ color:"var(--greeting-color)", fontStyle:"italic" }}
            >
              {description2}
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
                <h4>{degreeTitle}</h4>
                <p>{degreeSchool}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
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
