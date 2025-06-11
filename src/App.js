import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <div className="intro-section">
        <h1>Hakkımda</h1>
        <p>Merhaba, ben Yusuf Can İbişoğlu. Bilgisayar Mühendisiyim ve yapay zeka meraklısıyım. Bu site; portfolyomu, özgeçmişimi ve projelerimi paylaşmak için tasarlanmıştır.</p>
      </div>
      <Projects />
    </div>
  );
}

export default App;