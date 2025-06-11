import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Eğitimler</h2>
      <div className="education-list">
        <div className="education-item">
          <h3>Toros Üniversitesi</h3>
          <p>Bilgisayar ve Yazılım Mühendisliği <span className="edu-date">2019-2024</span></p>
        </div>
        <div className="education-item">
          <h3>AGH University of Science and Technology</h3>
          <p>Erasmus <span className="edu-date">2022</span></p>
        </div>
      </div>
    </section>
  );
}

export default Education; 