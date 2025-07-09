import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Notification = ({ message, type, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    const interval = setInterval(() => {
      setProgress(prev => Math.max(prev - 0.2, 0));
    }, 10);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onClose]);

  const variants = {
    hidden: { opacity: 0, y: -50, x: 0 },
    visible: { opacity: 1, y: 0, x: 0 },
    exit: { opacity: 0, x: 50 }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="notification-icon" />;
      case 'error':
        return <FaExclamationCircle className="notification-icon" />;
      case 'warning':
        return <FaInfoCircle className="notification-icon" />;
      default:
        return <FaInfoCircle className="notification-icon" />;
    }
  };

  return (
    <motion.div
      className={`notification ${type}`}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3 }}
    >
      {getIcon()}
      <div className="notification-content">
        <p>{message}</p>
        <div className="notification-progress" style={{ width: `${progress}%` }} />
      </div>
      <button onClick={onClose} className="notification-close">
        <FaTimes />
      </button>
    </motion.div>
  );
};

export default Notification;