// src/components/CommunityLife.jsx
import { motion } from 'framer-motion';
import { FaRobot, FaUsers, FaLightbulb, FaHandshake, FaChalkboardTeacher, FaLaptopCode, FaHandsHelping, FaMicrophone, FaVideo} from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

const Community = () => {
  const { language } = useTranslation();

  const texts = {
    fr: {
      sectionTitle: "Communauté",
      sectionSubtitle: "Engagement au sein des communautés technologiques et académiques",
      roleLabel: "Rôle",
      freelanceTitle: "Développeur Freelance",
      freelanceDescription: "Réalisations variées en développement web et mobile pour différents clients",
      mentorshipTitle: "Mentorat",
      mentorshipDescription: "Accompagnement de jeunes développeurs et étudiants dans leurs projets techniques"
    },
    en: {
      sectionTitle: "Community",
      sectionSubtitle: "Commitment within technological and academic communities",
      roleLabel: "Role",
      freelanceTitle: "Freelance Developer",
      freelanceDescription: "Building web and mobile solutions for a range of clients",
      mentorshipTitle: "Mentorship",
      mentorshipDescription: "Supporting students and junior developers in their technical projects"
    }
  };

  const content = texts[language];

  const activities = [
    {
      id: 1,
      title: content.freelanceTitle,
      organization: language === 'fr' ? "Clients divers" : "Various Clients",
      date: language === 'fr' ? "2023 – Présent" : "2023 – Present",
      role: content.freelanceDescription,
      icon: <FaLaptopCode />,
      color: "#ff9f1c"
    },
    {
      id: 2,
      title: content.mentorshipTitle,
      organization: language === 'fr' ? "Communautés locales et en ligne" : "Local and online communities",
      date: language === 'fr' ? "2024 – Présent" : "2024 – Present",
      role: content.mentorshipDescription,
      icon: <FaHandsHelping />,
      color: "#2ec4b6"
    },
    {
      id: 3,
      title: language === 'fr' ? "Vice-Président Sponsoring" : "Vice President of Sponsorship",
      organization: language === 'fr'
        ? "Club Google ISET Béja"
        : "Google Club ISET Beja",
      date: language === 'fr' ? "Octobre 2021 – 2024" : "October 2021 – 2024",
      role: language === 'fr' ? "Gestion des partenariats" : "Partnership Management",
      icon: <FaHandshake />,
      color: "#ff006e"
    },
    {
      id: 4,
      title: language === 'fr' ? "Hackathon Robotique ISERoboT" : "ISERoboT Robotics Hackathon",
      organization: "iTeamUni",
      date: language === 'fr' ? "Mai 2024" : "May 2024",
      role: language === 'fr'
        ? "Conception et développement d’un robot suiveur de ligne"
        : "Design and development of a line-following robot",
      icon: <FaRobot />,
      color: "#3a86ff"
    },
    {
      id: 5,
      title: language === 'fr' ? "Compétition Robotique" : "Robotics Competition",
      organization: "ENICarthage",
      date: language === 'fr' ? "Février 2023" : "February 2023",
      role: language === 'fr'
        ? "Conception et développement d’un robot suiveur de ligne"
        : "Design and development of a line-following robot",
      icon: <FaRobot />,
      color: "#8338ec"
    },
    {
      id: 6,
      title: language === 'fr'
        ? "Hackathon Initiative Vers une Industrie Nouvelle (2ème prix)"
        : "Hackathon 'Toward a New Industry Initiative' (2nd prize)",
      organization: language === 'fr'
        ? "Centre Elif Béja & Kromberg & Schubert"
        : "Elif Center Béja & Kromberg & Schubert",
      date: language === 'fr' ? "Novembre 2022" : "November 2022",
      role: language === 'fr' ? "Participant" : "Participant",
      icon: <FaLightbulb />,
      color: "#4cc9f0"
    },
    {
      id: 7,
      title: language === 'fr'
        ? "Workshop Soft Skills et entrepreneuriat"
        : "Soft Skills and Entrepreneurship Workshop",
      organization: language === 'fr'
        ? "Incubateur Jadwa"
        : "Jadwa Incubator",
      date: "2022",
      role: language === 'fr' ? "Participant" : "Participant",
      icon: <FaChalkboardTeacher />,
      color: "#7209b7"
    },
    {
      id: 8,
      title: language === 'fr'
        ? "Workshop Langage corporel"
        : "Body Language Workshop",
      organization: "Club Metaskills",
      date: "2022",
      role: language === 'fr' ? "Participant" : "Participant",
      icon: <FaUsers />,
      color: "#f72585"
    },
    {
      id: 9,
      title: language === 'fr' ? "Créateur de contenu jeux vidéo" : "Gaming Content Creator",
      organization: "YouTube & Twitch",
      date: language === 'fr' ? "2018 – Présent" : "2018 – Present",
      role: language === 'fr'
        ? "Streaming, montage et tutoriels autour des jeux vidéo"
        : "Streaming, editing and tutorials for video games",
      icon: <FaVideo />,
      color: "#e71d36"
    }

  ];

  return (
    <section id="communitylife" className="community-section">
      <div className="container">
        <motion.h2
          className="tous-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">
            {content.sectionTitle}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          {content.sectionSubtitle}
        </motion.p>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="activity-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div
                className="activity-icon"
                style={{ backgroundColor: activity.color }}
              >
                {activity.icon}
              </div>

              <div className="activity-content">
                <h3>{activity.title}</h3>
                <div className="activity-meta">
                  <span className="organization">{activity.organization}</span>
                  <span className="date">{activity.date}</span>
                </div>
                <p className="role">
                  <strong>{content.roleLabel} :</strong> {activity.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
