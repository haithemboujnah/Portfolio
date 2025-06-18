// src/components/Skills.jsx
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Systèmes d'exploitation",
      skills: [
        { name: "Linux", level: 60 },
        { name: "Windows", level: 95 }
      ]
    },
    {
      title: "Langages de programmation",
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
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
        { name: "Java EE", level: 70 },
        { name: "JavaFX", level: 70 },
        { name: "Symfony", level: 70 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "Spring Boot", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "Android", level: 75 }
      ]
    },
    {
      title: "Bases de Données",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 85 },
        { name: "Oracle", level: 75 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Web Services",
      skills: [
        { name: "REST", level: 80 },
        { name: "SOAP", level: 70 },
        { name: "RPC", level: 65 },
        { name: "gRPC", level: 60 },
        { name: "ThingSpeak", level: 55 }
      ]
    }
  ];

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
          <span className="text-gradient">Compétences Techniques</span>
        </motion.h2>

        {skillCategories.map((category, catIndex) => (
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
    </section>
  );
};

export default Skills;
