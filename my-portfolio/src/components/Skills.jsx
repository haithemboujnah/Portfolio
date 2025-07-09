// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { useState } from 'react';

const Skills = () => {
  const { language } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const skillCategories = language === 'fr'
    ? [
        {
          title: "Systèmes d'exploitation",
          skills: [
            { name: "Windows", level: 100 },
            { name: "Linux", level: 65 }
          ]
        },
        {
          title: "Langages de programmation",
          skills: [
            { name: "C", level: 85 },
            { name: "C++", level: 80 },
            { name: "Python", level: 85 },
            { name: "Java", level: 85 },
            { name: "JavaScript", level: 85 },
            { name: "PHP", level: 80 },
            { name: "Arduino", level: 75 }
          ]
        },
        {
          title: "Frameworks",
          skills: [
            { name: "React", level: 85 },
            { name: "Angular", level: 70 },
            { name: "Spring Boot", level: 80 },
            { name: "Express.js", level: 80 },
            { name: "Flask", level: 75 },
            { name: "JavaFX", level: 70 },
            { name: "Node.js", level: 75 },
            { name: "Android", level: 85 },
            { name: "Flutter", level: 70 },
            { name: "Java EE", level: 70 },
            { name: "Symfony", level: 70 }
          ]
        },
        {
          title: "Bases de données",
          skills: [
            { name: "MySQL", level: 98 },
            { name: "MariaDB", level: 96 },
            { name: "SQLite", level: 95 },
            { name: "Oracle", level: 80 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "Firebase", level: 65 },
          ]
        },
        {
          title: "Services Web",
          skills: [
            { name: "REST", level: 90 },
            { name: "SOAP", level: 75 },
            { name: "RPC", level: 65 },
            { name: "gRPC", level: 60 },
            { name: "ThingSpeak", level: 85 }
          ]
        }
      ]
    : [
        {
          title: "Operating Systems",
          skills: [
            { name: "Windows", level: 100 },
            { name: "Linux", level: 65 }
          ]
        },
        {
          title: "Programming Languages",
          skills: [
            { name: "C", level: 85 },
            { name: "C++", level: 80 },
            { name: "Python", level: 85 },
            { name: "Java", level: 85 },
            { name: "JavaScript", level: 85 },
            { name: "PHP", level: 80 },
            { name: "Arduino", level: 75 }
          ]
        },
        {
          title: "Frameworks",
          skills: [
            { name: "React", level: 85 },
            { name: "Angular", level: 70 },
            { name: "Spring Boot", level: 80 },
            { name: "Express.js", level: 80 },
            { name: "Flask", level: 75 },
            { name: "JavaFX", level: 70 },
            { name: "Node.js", level: 75 },
            { name: "Android", level: 85 },
            { name: "Flutter", level: 70 },
            { name: "Java EE", level: 70 },
            { name: "Symfony", level: 70 }
          ]
        },
        {
          title: "Databases",
          skills: [
            { name: "MySQL", level: 98 },
            { name: "MariaDB", level: 96 },
            { name: "SQLite", level: 95 },
            { name: "Oracle", level: 80 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "Firebase", level: 65 },
          ]
        },
        {
          title: "Web Services",
          skills: [
            { name: "REST", level: 90 },
            { name: "SOAP", level: 75 },
            { name: "RPC", level: 65 },
            { name: "gRPC", level: 60 },
            { name: "ThingSpeak", level: 85 }
          ]
        }
      ];

  const filters = [
    { id: 'all', label: language === 'fr' ? 'Tous' : 'All' },
    ...skillCategories.map(category => ({
      id: category.title.toLowerCase().replace(/\s+/g, '-'),
      label: category.title
    }))
  ];

  // Filtrer les catégories en fonction du filtre actif
  const filteredCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(category => 
        category.title.toLowerCase().replace(/\s+/g, '-') === activeFilter
      );

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2
          className="tous-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">
            {language === 'fr' ? 'Compétences Techniques' : 'Technical Skills'}
          </span>
        </motion.h2>

        <motion.div 
          className="skills-filters"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Catégories de compétences */}
        <div className="skills-categories-container">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              viewport={{ once: true }}
              className="skill-category"
            >
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ y: -3 }}
                  >
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="skill-progress"
                        style={{
                          background: `linear-gradient(90deg, 
                            rgba(58,134,255,1) 0%, 
                            rgba(131,56,236,1) 100%)`
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;