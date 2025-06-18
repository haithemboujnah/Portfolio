// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Quality from './components/Quality';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './assets/styles/global.css';
import { ThemeProvider } from './context/ThemeContext';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <About />
                <Education />
                <Experience />
                <Projects />
                <Skills />
                <Languages />
                <Quality />
                <ContactForm />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;