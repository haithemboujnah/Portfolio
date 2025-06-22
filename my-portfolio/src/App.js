// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './assets/styles/global.css';
import { ThemeProvider } from './context/ThemeContext';
import AnimatedBackground from './components/AnimatedBackground';
import Loading from './components/Loading';
import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
      {isLoading ? (
        <Loading />
      ) : (
      <>
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
                {/*<Certifications />*/}
                <Quality />
                <ContactForm />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
      </>
      )}
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;