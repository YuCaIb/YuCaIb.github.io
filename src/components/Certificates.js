import React from 'react';
import './Certificates.css';

const certificatesData = [
  {
    institution: 'Turkcell Geleceği Yazanlar',
    certificates: [
      'Derin Öğrenme',
      'Python ile Büyük Veri',
      'Veri Bilimi Proje Döngüsü',
      "Makine Öğrenmesi",
      "Lexathon'23 Hukuk Teknolojileri Programı",
      "Veri Ön İşleme",
      "Veri Bilimi için İstatistik",
      "Veri Görselleştirme",
      "Veri Manipülasyonu",
      "Python",
      "Veri Okuryazarlığı",
      "Veri Bilimi ve Yapay Zekaya Giriş"
    ]
  },
  {
    institution: 'Edu4Tech',
    certificates: [
      'Edu4tech Yazılım Geliştirme Uzmanı '
    ]
  },
  {
    institution: 'Digiage',
    certificates: [
      'Digiage Oyun Geliştirme Kampı'
    ]
  },
  {
    institution: 'miuul',
    certificates: [
      'Feature Engineering',
      'Introduction to data science',
      'Natural Language Processing'
    ]
  }
];

function Certificates() {
  return (
    <section id="certificates" className="certificates-section">
      <h2 className="section-title">Sertifikalarım</h2>
      <div className="certificates-list">
        {certificatesData.map((inst) => (
          <div className="certificate-group" key={inst.institution}>
            <h3>{inst.institution}</h3>
            <ul>
              {inst.certificates.map((cert) => (
                <li key={cert}>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates; 