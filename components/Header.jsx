import { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="#home">
            <img src="../assets/logo.png" alt="Aldeola Café & Bistrô" />
          </a>
        </div>
        
        <div className={`mobile-menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#menu">Cardápio</a></li>
            <li><a href="#locations">Unidades</a></li>
            <li><a href="#ambience">Ambiente</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 