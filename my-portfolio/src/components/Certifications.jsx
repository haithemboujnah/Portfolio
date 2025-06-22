// src/components/Certifications.jsx
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from '../hooks/useTranslation';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const { theme } = useTheme();
  const { language } = useTranslation();

  const labels = {
    fr: {
      title: 'Certifications',
      issued: 'Délivrée par',
      date: 'Date obtenue',
      id: 'ID de certification',
      verify: 'Vérifier la certification',
    },
    en: {
      title: 'Certifications',
      issued: 'Issued by',
      date: 'Date obtained',
      id: 'Certification ID',
      verify: 'Verify certification',
    }
  };

  const t = labels[language];

  const certifications = [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "Nov 2023",
      credentialId: "D8S9K2L0M1N",
      link: "https://www.credly.com/badges/...",
      skills: ["AWS", "Cloud Computing", "Serverless"]
    },
    {
      title: "Google Professional Data Engineer",
      issuer: "Google Cloud",
      date: "Aug 2023",
      credentialId: "GCP12345678",
      link: "https://www.credential.net/...",
      skills: ["BigQuery", "Dataflow", "Pub/Sub"]
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      date: "May 2023",
      credentialId: "AZ-104-12345",
      link: "https://learn.microsoft.com/...",
      skills: ["Azure", "Virtual Networks", "Storage"]
    }
  ];

  return (
    <section id="certifications" className={`certifications-section ${theme}`}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <FaCertificate className="title-icon" />
          <span className="text-gradient">{t.title}</span>
        </motion.h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className={`certification-card ${theme}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="certification-header">
                <div className="certification-icon">
                  <FaCertificate />
                </div>
                <div>
                  <h3>{cert.title}</h3>
                  <p className="issuer">{t.issued}: {cert.issuer}</p>
                </div>
              </div>

              <div className="certification-details">
                <div className="detail-item">
                  <span>{t.date}:</span>
                  <span>{cert.date}</span>
                </div>
                <div className="detail-item">
                  <span>{t.id}:</span>
                  <span>{cert.credentialId}</span>
                </div>
              </div>

              <div className="skills-container">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>

              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="verification-link"
              >
                {t.verify} <FaExternalLinkAlt />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
