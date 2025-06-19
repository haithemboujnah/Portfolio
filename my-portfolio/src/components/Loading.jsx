import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Loading = () => {
  const { theme } = useTheme();

  return (
    <div className={`loading-screen ${theme}`}>
      <div className="loading-content">
        <motion.div
          className="spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <div className="spinner-inner" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Chargement...
        </motion.h2>
      </div>
    </div>
  );
};

export default Loading;