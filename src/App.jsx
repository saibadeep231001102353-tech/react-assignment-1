import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app">
      {/* Component 1: Navigation Bar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Component 2: Header (Hero) */}
      <Header />

      <main>
        {/* Component 3: About Me */}
        <About />

        {/* Component 4: Education */}
        <Education />

        {/* Component 5: Skills */}
        <Skills />

        {/* Component 6: Projects */}
        <Projects />

        {/* Component 7: Contact Information */}
        <Contact />
      </main>

      {/* Component 8: Footer */}
      <Footer />
    </div>
  );
}

export default App;
