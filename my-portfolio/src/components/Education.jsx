// src/components/Education.jsx
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

const Education = () => {
  const { language } = useTranslation();

  const education = language === 'fr'
    ? [
        {
          id: 1,
          institution: "École Nationale des Sciences de l'Informatique (ENSI)",
          degree: "Mastère de recherche en Sciences de l'informatique",
          year: "2024 - 2025",
          description: "Spécialisation en recherche appliquée dans les domaines avancés de l'informatique."
        },
        {
          id: 2,
          institution: "Institut Supérieur des Études Technologiques de Béja (ISET Béja)",
          degree: "Licence nationale en Technologies de l'Informatique",
          year: "2021 - 2024",
          description: "Formation axée sur le développement logiciel, les systèmes informatiques et les technologies web."
        },
        {
          id: 3,
          institution: "Lycée Mohamed Larbi Chammari El Ouardia",
          degree: "Baccalauréat en Sciences Informatiques",
          year: "2021",
          description: "Formation secondaire avec spécialisation en informatique et bases en algorithmique et programmation."
        }
      ]
    : [
        {
          id: 1,
          institution: "National School of Computer Science (ENSI)",
          degree: "Master's Degree in Computer Science Research",
          year: "2024 - 2025",
          description: "Specialized in applied research in advanced areas of computer science."
        },
        {
          id: 2,
          institution: "Higher Institute of Technological Studies of Béja (ISET Béja)",
          degree: "Bachelor’s Degree in Computer Technologies",
          year: "2021 - 2024",
          description: "Focused on software development, IT systems, and web technologies."
        },
        {
          id: 3,
          institution: "Mohamed Larbi Chammari High School - El Ouardia",
          degree: "High School Diploma in Computer Science",
          year: "2021",
          description: "Secondary education with a specialization in computer science, algorithmics, and programming."
        }
      ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.h2
          className="tous-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">
            {language === 'fr' ? 'Éducation' : 'Education'}
          </span>
        </motion.h2>

        <div className="timeline">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="timeline-content"
                whileHover={{ scale: 1.03 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-connector" />

                <h3>{edu.institution}</h3>
                <span className="date">{edu.year}</span>
                <h4>{edu.degree}</h4>
                <p>{edu.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
