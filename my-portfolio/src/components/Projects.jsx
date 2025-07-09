// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaAndroid, FaPhp, FaJava } from 'react-icons/fa';
import { SiSymfony, SiSpring, SiFlutter, SiPython, SiAngular, SiFlask } from 'react-icons/si';
import { useTranslation } from '../hooks/useTranslation';

const Projects = () => {
  const { language } = useTranslation();

  const projects = language === 'fr' ? [
    {
      title: "SmartPot",
      description: "Système expert intelligent pour l’arrosage des plantes.",
      features: [
        "Moteur d’inférence avec chaînage avant, arrière et mixte.",
        "25 règles expertes pour diagnostiquer les besoins hydriques.",
        "Alertes automatiques et recommandations."
      ],
      technologies: ["Python"],
      icon: <SiPython />,
      color: "#3776AB",
      github: "#"
    },
    {
      title: "LePendu",
      description: "Jeu du pendu enrichi et interactif.",
      features: [
        "Création de compte, personnalisation profil (avatar, fond).",
        "Niveaux de difficulté, timer, système de score et indices.",
        "Boutique virtuelle, sauvegarde des stats, progression persistante."
      ],
      technologies: ["JavaFX","MongoDB"],
      icon: <FaJava />,
      color: "#5382A1",
      github: "#"
    },
    {
      title: "GymManager",
      description: "Système de gestion d’une salle de sport.",
      features: [
        "Gestion centralisée des abonnements, coachs, clients et séances",
        "Planification des entraînements et suivi de la présence en temps réel",
        "Tableau de bord d’administration avec statistiques et indicateurs clés",
        "Système d’authentification multi-rôle."
      ],
      technologies: ["Angular", "Spring Boot", "MySQL"],
      icon: <SiAngular />,
      color: "#DD0031",
      github: "#"
    },
    {
      title: "FitFood",
      description: "Application web intelligente de création de plans alimentaires personnalisés",
      features: [
        "Scraping, nettoyage et export de recettes santé",
        "Analyse des apports et visualisation des nutriments",
        "Création dynamique de plans selon les besoins sportifs",
        "Prédictions automatisées pour adapter les repas"
      ],
      technologies: ["Python", "Flask", "Pandas", "NumPy", "Matplotlib", "BeautifulSoup", "Regex", "scikit-learn"],
      icon: <SiFlask />,
      color: "#000000",
      github: "#"
    },
    {
      title: "BeeConnect",
      description: "Application mobile pour surveiller les ruches à distance.",
      features: [
        "Surveillance des capteurs IoT (température, humidité, bruit).",
        "Alertes en cas de variation anormale.",
        "Historique et visualisation graphique des données.",
        "Intégration des APIs météo, Google Maps et assistant via ChatGPT."
      ],
      technologies: ["Android", "Spring Boot", "MySQL", "Firebase", "ThingSpeak", "PlatformIO", "Arduino", "Chatbot", "OpenWeatherMap API", "Google Maps API"],
      icon: <FaAndroid />,
      color: "#3DDC84",
      github: "#"
    },
    {
      title: "StageConnect",
      description: "Faciliter la mise en relation entre étudiants et entreprises pour les stages.",
      features: [
        "Portails dédiés pour les entreprises et les étudiants avec authentification sécurisée",
        "Publication, gestion et filtrage des offres de stage",
        "Candidature en ligne avec suivi de statut, pièces jointes et notifications",
        "Messagerie intégrée pour faciliter les échanges en temps réel",
        "Interface responsive disponible sur web et mobile"
      ],
      technologies: ["Spring Boot", "React", "Android", "MySQL"],
      icon: <SiSpring />,
      color: "#6DB33F",
      github: "#"
    },
    {
      title: "EasyColoc",
      description: "Plateforme web pour simplifier la colocation entre étudiants.",
      features: [
        "Recherche de colocataires selon préférences (budget, localisation).",
        "Création de profils, messagerie interne, gestion des annonces.",
        "Interface utilisateur responsive et ergonomique."
      ],
      technologies: ["Symfony", "MySQL", "JavaScript"],
      icon: <SiSymfony />,
      color: "#000000",
      github: "#"
    },
    {
      title: "Hospicare",
      description: "Système complet de gestion hospitalière.",
      features: [
        "Gestion patients, médecins, rendez-vous, lits et traitements.",
        "Tableau de bord BI avec statistiques clés.",
        "Authentification multi-rôle (admin, médecin, secrétaire)."
      ],
      technologies: ["Spring Boot", "React", "MySQL"],
      icon: <SiSpring />,
      color: "#6DB33F",
      github: "#"
    },
    {
      title: "FoodDelivery",
      description: "Application mobile de commande de repas.",
      features: [
        "Catalogue restaurants et plats avec filtres dynamiques.",
        "Commande en ligne, paiement intégré, suivi en temps réel.",
        "Système de notation, favoris et historique des commandes."
      ],
      technologies: ["Flutter", "MySQL"],
      icon: <SiFlutter />,
      color: "#02569B",
      github: "#"
    },
    {
      title: "LibraSys",
      description: "Gestion d’une bibliothèque (emprunts et retours).",
      features: [
        "Enregistrement et gestion des livres, utilisateurs et prêts.",
        "Alertes de retard, historique des emprunts, statistiques.",
        "Interface simple et intuitive pour bibliothécaires."
      ],
      technologies: ["PHP", "MySQL"],
      icon: <FaPhp />,
      color: "#777BB4",
      github: "#"
    }
  ] : [
    {
      title: "SmartPot",
      description: "Intelligent expert system for automated plant watering.",
      features: [
        "Inference engine using forward, backward, and hybrid chaining.",
        "25 expert rules to diagnose hydration needs.",
        "Automatic alerts and recommendations."
      ],
      technologies: ["Python"],
      icon: <SiPython />,
      color: "#3776AB",
      github: "#"
    },
    {
      title: "LePendu",
      description: "Interactive and enhanced Hangman game.",
      features: [
        "Account creation, profile customization (avatar, background).",
        "Difficulty levels, timer, scoring system, and hints.",
        "Virtual shop, stats saving, and persistent progress."
      ],
      technologies: ["JavaFX","MongoDB"],
      icon: <FaJava />,
      color: "#5382A1",
      github: "#"
    },
    {
      title: "GymManager",
      description: "Sports club management system.",
      features: [
        "Centralized management of memberships, coaches, clients, and sessions",
        "Training planning and real-time attendance tracking",
        "Admin dashboard with key statistics and KPIs",
        "Multi-role authentication system"
      ],
      technologies: ["Angular", "Spring Boot", "MySQL"],
      icon: <SiAngular />,
      color: "#DD0031",
      github: "#"
    },
    {
      title: "FitFood",
      description: "Smart web app for personalized meal planning.",
      features: [
        "Scraping, cleaning, and exporting healthy recipes",
        "Nutritional analysis and visualization",
        "Dynamic plan generation based on fitness goals",
        "Automated predictions to adapt meals"
      ],
      technologies: ["Python", "Flask", "Pandas", "NumPy", "Matplotlib", "BeautifulSoup", "Regex", "scikit-learn"],
      icon: <SiFlask />,
      color: "#000000",
      github: "#"
    },
    {
      title: "BeeConnect",
      description: "Mobile app for remote hive monitoring.",
      features: [
        "Monitoring IoT sensors (temperature, humidity, noise)",
        "Alerts in case of abnormal variation",
        "Data history and graph visualization",
        "Integration with weather, Google Maps, and ChatGPT APIs"
      ],
      technologies: ["Android", "Spring Boot", "MySQL", "Firebase", "ThingSpeak", "PlatformIO", "Arduino",  "Chatbot", "OpenWeatherMap API", "Google Maps API"],
      icon: <FaAndroid />,
      color: "#3DDC84",
      github: "#"
    },
    {
      title: "StageConnect",
      description: "Platform to connect students with companies for internships.",
      features: [
        "Dedicated portals with secure authentication",
        "Posting, managing, and filtering internship offers",
        "Online applications with tracking, attachments, notifications",
        "Built-in messaging for real-time communication",
        "Responsive UI for web and mobile"
      ],
      technologies: ["Spring Boot", "React", "Android", "MySQL"],
      icon: <SiSpring />,
      color: "#6DB33F",
      github: "#"
    },
    {
      title: "EasyColoc",
      description: "Web platform to simplify student flatsharing.",
      features: [
        "Roommate search by preferences (budget, location)",
        "Profile creation, messaging, ad management",
        "Responsive and user-friendly interface"
      ],
      technologies: ["Symfony", "MySQL", "JavaScript"],
      icon: <SiSymfony />,
      color: "#000000",
      github: "#"
    },
    {
      title: "Hospicare",
      description: "Complete hospital management system.",
      features: [
        "Patient, doctor, appointment, bed, and treatment management",
        "BI dashboard with key stats",
        "Multi-role authentication (admin, doctor, secretary)"
      ],
      technologies: ["Spring Boot", "React", "MySQL"],
      icon: <SiSpring />,
      color: "#6DB33F",
      github: "#"
    },
    {
      title: "FoodDelivery",
      description: "Mobile food ordering application.",
      features: [
        "Restaurant and dish catalog with dynamic filters",
        "Online ordering, integrated payment, real-time tracking",
        "Rating system, favorites, and order history"
      ],
      technologies: ["Flutter", "MySQL"],
      icon: <SiFlutter />,
      color: "#02569B",
      github: "#"
    },
    {
      title: "LibraSys",
      description: "Library management system (borrowing/returns).",
      features: [
        "Manage books, users, and borrowing records",
        "Late return alerts, history tracking, statistics",
        "Simple and intuitive librarian interface"
      ],
      technologies: ["PHP", "MySQL"],
      icon: <FaPhp />,
      color: "#777BB4",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2
          className="tous-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">
            {language === 'fr' ? 'Projets Personnels' : 'Personal Projects'}
          </span> 
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="project-card-inner">
                <div className="project-card-front">
                  <div className="project-icon" style={{ backgroundColor: project.color }}>
                    {project.icon}
                  </div>
                  <div className="project-content-front">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="technologies">
                      {project.technologies.map((tech, i) => (
                        <span key={i}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="project-card-back">

                  <div className="project-content-back">
                    <h3>{project.title}</h3>
                    <ul className="features-list">
                      {project.features.map((feature, i) => (
                        <li key={i}><p>{feature}</p></li>
                      ))}
                    </ul>
                    <a
                      href={project.github}
                      className="project-link"
                      style={{ backgroundColor: project.color }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> {language === 'fr' ? 'Voir sur GitHub' : 'View on GitHub'}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;