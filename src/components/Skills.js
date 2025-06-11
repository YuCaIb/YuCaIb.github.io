import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Yeteneklerim</h2>
            
            <div className="skills-container">
                <div className="skill-category">
                    <h3>Programlama Dilleri</h3>
                    <div className="skill-items">
                        <span className="skill-item">C#</span>
                        <span className="skill-item">Python</span>
                        <span className="skill-item">SQL</span>
                        <span className="skill-item">.NET</span>
                        <span className="skill-item">HTML</span>
                        <span className="skill-item">CSS</span>
                        <span className="skill-item">JavaScript</span>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Frameworks</h3>
                    <div className="skill-items">
                        <span className="skill-item">Flask</span>
                        <span className="skill-item">React</span>
                        <span className="skill-item">Hg-Face</span>
                        <span className="skill-item">WPF</span>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Veri Tabanı</h3>
                    <div className="skill-items">
                        <span className="skill-item">PostgreSQL</span>
                        <span className="skill-item">MongoDB</span>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>AI Frameworks</h3>
                    <div className="skill-items">
                        <span className="skill-item">PyTorch</span>
                        <span className="skill-item">OpenCV</span>
                        <span className="skill-item">TensorFlow</span>
                        <span className="skill-item">Scikit</span>
                        <span className="skill-item">Numpy</span>
                        <span className="skill-item">Pandas</span>
                        <span className="skill-item">Seaborn</span>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>DevOps</h3>
                    <div className="skill-items">
                        <span className="skill-item">Git</span>
                        <span className="skill-item">GitHub</span>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Languages</h3>
                    <div className="skill-items">
                        <span className="skill-item">İngilizce (C1)</span>
                        <span className="skill-item">Türkçe (Anadil)</span>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Soft Skills</h3>
                    <div className="skill-items">
                        <span className="skill-item">Problem Çözme</span>
                        <span className="skill-item">Takım Çalışması</span>
                        <span className="skill-item">Detaylara Dikkat</span>
                        <span className="skill-item">Özveri</span>
                        <span className="skill-item">Analatik Düşünme</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills; 