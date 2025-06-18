// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiSymfony, SiSpring, SiFlutter, SiPython, SiAngular } from 'react-icons/si';
import { FaAndroid, FaPhp, FaJava } from 'react-icons/fa';

const projects = [
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
    title: "StageConnect",
    description: "Faciliter la mise en relation entre étudiants et entreprises pour les stages.",
    features: [
      "Espace entreprise et étudiant avec authentification sécurisée.",
      "Publication et gestion d’offres de stage.",
      "Candidature en ligne avec suivi, messagerie et notifications."
    ],
    technologies: ["Spring Boot", "React", "Android", "MySQL"],
    icon: <SiSpring />,
    color: "#6DB33F",
    github: "#"
  },
  {
    title: "BeeConnect",
    description: "Application mobile pour surveiller les ruches à distance.",
    features: [
      "Connexion à des capteurs IoT (température, humidité, bruit).",
      "Alertes en cas de variation anormale.",
      "Historique et visualisation graphique des données."
    ],
    technologies: ["Spring Boot", "Android", "PlatformIO", "ThingSpeak"],
    icon: <FaAndroid />,
    color: "#3DDC84",
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
  },
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
      "Gestion abonnements, séances, coachs et clients.",
      "Planification entraînements, suivi des présences.",
      "Tableau de bord admin avec statistiques.",
      "Authentification selon rôles (admin, coach, client)."
    ],
    technologies: ["Angular", "Spring Boot"],
    icon: <SiAngular />,
    color: "#DD0031",
    github: "#"
  }
];

const Projects = () => {
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
         <span className="text-gradient">Projets Personnels</span> 
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
              whileHover={{ y: -10 }}
            >
              <div
                className="project-icon"
                style={{ backgroundColor: project.color }}
                aria-label={`${project.title} icon`}
              >
                {project.icon}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="features-list">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <a
                  href={project.github}
                  className="project-link"
                  style={{ color: project.color }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
