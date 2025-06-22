// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { FaAndroid, FaPython, FaReact } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

const Experience = () => {
  const { language } = useTranslation();

  const experiences = language === 'fr'
    ? [
        {
          id: 1,
          company: "ISET Béja",
          position: "Stage de Projet de Fin d'Études",
          duration: "Fév 2024 – Mai 2024",
          description: "Développement d'une application mobile Android pour surveiller les capteurs de la ruche",
          details: [
            "Création d'un backend avec Spring Boot, stockage MySQL",
            "Intégration Firebase pour la communication en temps réel",
            "Intégration des API météorologiques et de ChatGPT",
            "Collecte et visualisation des données IoT via ThingSpeak",
            "Programmation de capteurs IoT avec Arduino et PlatformIO"
          ],
          icon: <FaAndroid />,
          color: "#3DDC84"
        },
        {
          id: 2,
          company: "Serep Tunisie",
          position: "Stage de perfectionnement",
          duration: "Jan 2023 – Fév 2023",
          description: "Développement d'une application de gestion de consommables",
          details: [
            "Création avec Python (Tkinter) et MySQL",
            "Développement des mécanismes de recherche et filtrage",
            "Implémentation de génération de factures"
          ],
          icon: <FaPython />,
          color: "#3776AB"
        },
        {
          id: 3,
          company: "Topnet",
          position: "Stage d'initiation",
          duration: "Jan 2022 – Fév 2022",
          description: "Conception d'un site web pour améliorer la gestion des relations clients",
          details: [
            "Développement front-end en HTML, CSS, JavaScript",
            "Application des méthodologies Agile",
            "Optimisation des processus de relation client via CRM"
          ],
          icon: <FaReact />,
          color: "#61DAFB"
        }
      ]
    : [
        {
          id: 1,
          company: "ISET Béja",
          position: "Final Year Project Internship",
          duration: "Feb 2024 – May 2024",
          description: "Development of an Android app to monitor beehive sensors",
          details: [
            "Built backend with Spring Boot and MySQL storage",
            "Integrated Firebase for real-time communication",
            "Integrated weather APIs and ChatGPT",
            "Collected and visualized IoT data using ThingSpeak",
            "Programmed IoT sensors with Arduino and PlatformIO"
          ],
          icon: <FaAndroid />,
          color: "#3DDC84"
        },
        {
          id: 2,
          company: "Serep Tunisia",
          position: "Professional Training Internship",
          duration: "Jan 2023 – Feb 2023",
          description: "Developed a desktop app to manage office supplies",
          details: [
            "Built with Python (Tkinter) and MySQL",
            "Implemented search and filtering features",
            "Developed invoice generation functionality"
          ],
          icon: <FaPython />,
          color: "#3776AB"
        },
        {
          id: 3,
          company: "Topnet",
          position: "Introductory Internship",
          duration: "Jan 2022 – Feb 2022",
          description: "Designed a website to enhance customer relationship management",
          details: [
            "Front-end developed in HTML, CSS, JavaScript",
            "Applied Agile methodologies",
            "Improved customer processes using CRM tools"
          ],
          icon: <FaReact />,
          color: "#61DAFB"
        }
      ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2
          className="tous-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">
            {language === 'fr' ? 'Expérience Professionnelle' : 'Professional Experience'}
          </span>
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
              >
                <div 
                  className="timeline-icon"
                  style={{ backgroundColor: exp.color }}
                >
                  {exp.icon}
                </div>
                
                <div className="timeline-header">
                  <h3>{exp.company}</h3>
                  <span className="position">{exp.position}</span>
                  <span className="duration">{exp.duration}</span>
                </div>
                
                <p className="description">{exp.description}</p>
                
                <ul className="details">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
