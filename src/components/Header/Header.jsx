import React, { useState } from 'react';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header} id="home">
      <nav className={styles.nav}>
        <a href="#home">
          <img src="/images/logo-fundo-preto.png" alt="Pierre & Merim Advogados Logo" className={styles.logo} />
        </a>

        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksMobileOpen : ''}`}>
          <li><a href="#home" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>Início</a></li>
          <li><a href="#about" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>Sobre Nós</a></li>
          <li><a href="#services" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>Áreas de Atuação</a></li>
          <li><a href="#contact" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>Contato</a></li>
        </ul>

        <div className={styles.menuIcon} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
}

export default Header; 