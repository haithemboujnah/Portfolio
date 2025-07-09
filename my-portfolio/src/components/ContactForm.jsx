// src/components/Contact.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaPaperPlane} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from '../hooks/useTranslation';
import emailjs from '@emailjs/browser';
import img from '../assets/images/mail.png'
import Notification from './Notification';
import { useState, useEffect } from 'react';

const Contact = () => {
  const { theme } = useTheme();
  const { language } = useTranslation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [notification, setNotification] = useState(null);

  const serviceID = 'service_zal0f6g';
  const adminTemplateID = 'template_5h1kws7'; 
  const userTemplateID = 'template_auecp52';
  const publicKey = 'mwl4EKLttV9hmwgab';

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => Math.max(prev - 1, 0));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const onSubmit = (data) => {
    emailjs.send(serviceID, adminTemplateID, data, publicKey)
      .then(() => {
        emailjs.send(serviceID, userTemplateID, data, publicKey)
          .then(() => {
            showNotification(
              language === 'fr' 
                ? 'Message envoyé avec succès ! Vous recevrez une confirmation par email.' 
                : 'Message sent successfully! You will receive a confirmation by email.',
              'success'
            );
            reset();
          })
          .catch((err) => {
            console.error('Erreur auto-réponse :', err);
            showNotification(
              language === 'fr' 
                ? 'Le message a été envoyé, mais la confirmation par email a échoué.' 
                : 'The message was sent, but email confirmation failed.',
              'warning'
            );
            reset();
          });
      })
      .catch((err) => {
        console.error('Erreur envoi admin :', err);
        showNotification(
          language === 'fr' 
            ? "Une erreur s'est produite lors de l'envoi du message." 
            : "An error occurred while sending the message.",
          'error'
        );
      });
  };

  return (
    <section id="contact" className={`contact-section ${theme}`}>
      <div className="animated-bg" data-theme={theme} />
      <div className="container">
        <motion.h2
          className="tous-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">
            {language === 'fr' ? 'Contactez-moi' : 'Contact Me'}
          </span>
        </motion.h2>

        <div className="contact-grid">

            <div className="info-avatar">
              <img src={img} alt="Contact Avatar" />
            </div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder={language === 'fr' ? "Votre nom" : "Your name"}
                  {...register("name", { required: language === 'fr' ? "Ce champ est requis" : "This field is required" })}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder={language === 'fr' ? "Votre email" : "Your email"}
                  {...register("email", {
                    required: language === 'fr' ? "Ce champ est requis" : "This field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: language === 'fr' ? "Email invalide" : "Invalid email"
                    }
                  })}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder={language === 'fr' ? "Sujet" : "Subject"}
                  {...register("subject", { required: language === 'fr' ? "Ce champ est requis" : "This field is required" })}
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject.message}</span>}
              </div>

              <div className="form-group">
                <textarea
                  placeholder={language === 'fr' ? "Votre message" : "Your message"}
                  rows="5"
                  {...register("message", {
                    required: language === 'fr' ? "Ce champ est requis" : "This field is required",
                    minLength: {
                      value: 10,
                      message: language === 'fr'
                        ? "Le message doit contenir au moins 10 caractères"
                        : "The message must contain at least 10 characters"
                    }
                  })}
                  className={errors.message ? 'error' : ''}
                />
                {errors.message && <span className="error-message">{errors.message.message}</span>}
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'fr' ? 'Envoyer' : 'Send'} <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <div className="notification-progress" style={{ width: `${progress}%` }} />
      <AnimatePresence>
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
