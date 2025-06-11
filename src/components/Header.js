import React from 'react';
import './Header.css';
import profilePhoto from '../assets/profile.jpg';
function Header() {
  return (
    <header>
      <img src={profilePhoto} alt="Yusuf Can İbişoğlu" className="profile-image" />
      <h1>Yusuf Can İbişoğlu</h1>
      <p>Bilgisayar Mühendisi | Yapay Zeka Meraklısı</p>
    </header>
  );
}

export default Header;