import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
    </div>
  );
}

export default App;