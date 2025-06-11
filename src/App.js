import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;