// src/components/Qualities.jsx
import { motion } from 'framer-motion';
import { FiCheckCircle, FiTrendingUp, FiUsers, FiCode, FiTarget, FiZap } from 'react-icons/fi';
import { Canvas } from '@react-three/fiber';
import { Torus, OrbitControls } from '@react-three/drei';
import { useTranslation } from '../hooks/useTranslation';

const QualityTorus = ({ color }) => (
  <Canvas className="quality-torus">
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={1} />
    <Torus args={[0.7, 0.2, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
      <meshStandardMaterial color={color} />
    </Torus>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
  </Canvas>
);

const Qualities = () => {
  const { language } = useTranslation();

  const qualities = language === 'fr'
    ? [
        {
          icon: <FiCheckCircle />,
          title: "Résolution de problèmes",
          description: "Capacité à analyser et résoudre des problèmes complexes",
          color: "#3a86ff"
        },
        {
          icon: <FiTrendingUp />,
          title: "Créativité",
          description: "Approche innovante pour développer des solutions",
          color: "#8338ec"
        },
        {
          icon: <FiUsers />,
          title: "Collaboration",
          description: "Excellent travail en équipe et communication",
          color: "#ff006e"
        },
        {
          icon: <FiTarget />,
          title: "Leadership",
          description: "Expérience dans la gestion de projets et d'équipes",
          color: "#fb5607"
        },
        {
          icon: <FiCode />,
          title: "Adaptabilité",
          description: "Apprentissage rapide des nouvelles technologies",
          color: "#3a86ff"
        },
        {
          icon: <FiZap />,
          title: "Détermination",
          description: "Persévérance dans la réalisation des objectifs",
          color: "#8338ec"
        }
      ]
    : [
        {
          icon: <FiCheckCircle />,
          title: "Problem Solving",
          description: "Ability to analyze and resolve complex problems",
          color: "#3a86ff"
        },
        {
          icon: <FiTrendingUp />,
          title: "Creativity",
          description: "Innovative approach to develop smart solutions",
          color: "#8338ec"
        },
        {
          icon: <FiUsers />,
          title: "Teamwork",
          description: "Excellent team player and communicator",
          color: "#ff006e"
        },
        {
          icon: <FiTarget />,
          title: "Leadership",
          description: "Experience managing teams and leading projects",
          color: "#fb5607"
        },
        {
          icon: <FiCode />,
          title: "Adaptability",
          description: "Quick to learn and apply new technologies",
          color: "#3a86ff"
        },
        {
          icon: <FiZap />,
          title: "Determination",
          description: "Persistent in achieving objectives",
          color: "#8338ec"
        }
      ];

  return (
    <section id="qualities" className="qualities-section">
      <div className="container">
        <motion.h2
          className="tous-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">
            {language === 'fr' ? 'Qualités Personnelles' : 'Personal Qualities'}
          </span>
        </motion.h2>

        <div className="qualities-grid">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              className="quality-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="quality-visual">
                <QualityTorus color={quality.color} />
                <div className="quality-icon">{quality.icon}</div>
              </div>

              <h3>{quality.title}</h3>
              <p>{quality.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualities;
