import React from 'react';
import SignLanguage from './SignLanguage';
import './Projects.css'; // Ayrı bir CSS dosyası kullanacağız

function Projects() {
  return (
    <section id="projects">
      <h2>Projelerim</h2>
      <div className="project">
        <h3>Türkçe İşaret Dili Tanıma</h3>
        <SignLanguage /> {/* Modelin entegre edileceği component */}
      </div>
    </section>
  );
}

export default Projects;