import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Türkçe İşaret Dili Algılayıcı',
    description: 'Son 30 framede ki Türkçe işaret dili hareketlerini sınıflandıran yapay zeka modeli.',
    link: 'https://github.com/YuCaIb/Turkish_Sign_Language_detect',
    linkText: 'Projenin Reposuna buraya tıklayarak ulaşabilirsiniz.'
  },
  {
    title: 'Web Crawler',
    description: 'Web sitesini hedefler ve bağlantıları ve yazıları tarar ve depolar.'
  },
  {
    title: 'İdrar Yolu Enfeksiyon',
    description: 'UTI hakkında bir veri kümesi üzerinde araştırma. İç görüleri ve elde ettiğim jupyter notebooku repomdan görebilirsiniz.',
    link: 'https://github.com/YuCaIb/geniune_kaggle_study/blob/main/urine-study.ipynb',
    linkText: 'Notebooka buradan ulaşabilirsiniz.'
  },
  {
    title: 'Nano-GPT-lyrics-Turkish-Poems',
    description: 'NanoGPT reposu üzerinden ufak değişiklikler yapıp, dil modelini Türkçe şiirler ile besleyip, Türkçe şiir yazan bir dil modeli elde ettim.',
    link: 'https://github.com/YuCaIb/nanoGPT-lyrics-turkish-poems',
    linkText: 'Projeye buradan ulaşabilirsiniz.'
  },
  {
    title: 'Titanic Uzay Gemisi Kurtarma Ekibi',
    description: 'Kaggleda kaza yapan bir uzay gemisinden yolcuların kurtarılması için eksik bilgilerin giderilmesi ve ihtiyaç olan bilgilerin tahminlemesinin yapılması gerekiyor. Bu yarışmadaki çalışmama linkten ulaşabilirsiniz.',
    link: 'https://www.kaggle.com/code/yucaib/titanic-star/notebook',
    linkText: 'Yarışma çalışmasına buradan ulaşabilirsiniz.'
  },
  {
    title: 'Digit Recognation',
    description: 'Rakam tanıma sistemi.'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projelerim</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project" key={idx}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                {project.linkText}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;